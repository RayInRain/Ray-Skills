# 来源与入库记录

- 上游：[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)。
- 维护：上游作者 Hugo He；本仓库安装快照由 Ray 维护。
- 入库日期：2026-10-02。
- 入库内容：本机已安装的完整 `ppt-master` 快照；其原始上游版本／提交没有可靠记录，不能视为当前上游最新版或无修改副本。
- 本次核对的上游提交：`44c10ed0bc3a9e1df7a25aa179ae7c26db09469b`。该提交仅用于来源和许可核对；本机快照与其不完全相同，未用上游代码替换本机内容。

## 许可

[LICENSE](LICENSE) 为从上述固定提交保留的上游 MIT 许可原文，含 Hugo He 版权声明。图标资源另见 [第三方说明](templates/icons/THIRD_PARTY_NOTICES.md)；项目 MIT 许可不替代第三方许可或品牌权利。本仓库未给其他技能或整个仓库统一重新授权。

## 本次迁入的变化

- 保留本机入口、脚本、参考资料、模板、图片与 SVG 图标，共 12,177 个源文件。
- 仅排除 4 个 Python 编译缓存 `.pyc`，不迁入 `__pycache__`。
- 补充缺失的上游许可、第三方图标说明和本来源记录；未修改技能业务指令、脚本或素材。
- 原安装快照可能含历史本地修改，缺少可靠共同版本，无法将所有差异归因为本地修改或上游演进。

## 依赖与验证范围

Python 依赖见 [requirements.txt](requirements.txt)，可选图像后端配置见 [.env.example](.env.example)。示例配置只有占位符，未包含实际密钥。依具体工作流可能需要浏览器、图片生成或 Office/PDF 转换能力。

本次检查文件完整性、技能元数据、缓存与凭证排除和 Git 传输；未执行 PPT 生成、联网图片生成或安装可选依赖。原文中指向仓库外 `docs/zh/templates-architecture.md` 的补充架构资料可在[上游固定提交](https://github.com/hugohe3/ppt-master/blob/44c10ed0bc3a9e1df7a25aa179ae7c26db09469b/docs/zh/templates-architecture.md)查阅，它不是运行必需文件。
