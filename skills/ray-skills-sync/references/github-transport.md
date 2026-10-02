# GitHub 传输与校验

本文件用于 Git 推送不可用时的 connector 回退，以及中文路径、二进制和并发更新的处理。运行时发现 GitHub 工具并读取实际 schema，不假定工具总可用。不依赖 `gh` 已安装。

## 正常 Git 路径

检查 `git remote -v`、`git status --short` 和当前分支；从最新远端准备提交。只 stage 指定 skill 与索引，检查 staged diff 和 `git diff --cached --check`。正常非强制 push 的拒绝是并发保护；拉取最新状态重新比较，不能 force push。

对只读拉取，公开仓库可使用 HTTPS clone/fetch。PNG、PPTX、DOCX 等资源直接保留 Git blob 内容；避免通过终端文字输出传输二进制。

## Connector 回退

可发现的工具通常包含 `github_create_blob`、`github_create_tree`、`github_create_commit`、`github_update_ref`、分支创建和 PR 创建/更新。工具名及字段以当前 schema 为准。

1. 读目标分支最新 commit SHA 和其 tree SHA，作为基线。
2. 已存在且内容相同的文件复用 Git blob SHA。新文本以 UTF-8 创建 blob；二进制以 base64 创建 blob。保留文件模式，确认可执行脚本与符号链接的处理方式。
3. 用基线 tree 加上指定技能及必要索引的变更构建新 tree；不从空 tree 仅提交一个技能，否则会丢掉其他目录。明确删除的路径使用 API 支持的删除表示，不能省略文件来假装删除。
4. 新 commit 的 parent 使用基线 commit。更新 ref 时 `force: false`。更新前重读分支；若头已变化，则重新基于新头计算修改。非 fast-forward 拒绝时同样重做比较。
5. 写请求结果不明确（例如超时）时先读取远端核实提交/ref，避免盲目重放。相同认证/权限错误尝试一次可用替代方式后停止，保留本地结果并说明障碍。
6. 如果仓库要求 PR，则推送新分支并创建 PR；在 Codex app 中调用 attach_artifact 关联已创建的 PR。用户仅要求上传时，不擅自绕过审批或自动合并受保护分支。

Git blob SHA 是 Git 对象标识，不等于文件裸字节 SHA-256，二者不可直接比较。以 Git 对象对 Git 对象，或把两端实际文件都计算 SHA-256；自动换行转换的文本可用 staged blob 与远端 blob 比较。

## Windows 编码与路径

- 中文路径与正文在 Python → shell → 工具之间传递时，使用 `json.dumps(data, ensure_ascii=True)`，或显式固定整个通道为 UTF-8。不要依赖 Windows 控制台默认编码。
- 脚本读写文本显式使用 UTF-8；不要因修复传输编码而改写用户文档内容。
- PowerShell 中 Git 表达式应加引号，例如 `git rev-parse 'HEAD^{tree}'`。
- 工具回传完整 JSON 比拼接 shell 字符串可靠；多行消息通过结构化工具参数或 UTF-8 文件传入。
- 原始 Git blob 可用于无损下载；不得把 API 的 base64 字符串直接当文件正文保存。

## 校验

临时 checkout 中检查 skill 的文件列表、元数据与资源是否完整，审阅 staged diff。上传后 fetch 并比较远端指定路径和本地已提交 blob；使用完整 tree 发布时，可核对 tree SHA。下载后按实际字节核对完整文件集与 SHA-256，包括中文文件名和二进制资源。

验证技能内容正确性与验证传输完整性是两件事：未运行技能的业务流程时，只报告文件、元数据与传输验证通过。
