# 技能目录

这里是整个 Skill 集合的索引。每个子目录都是独立技能，可覆盖任意领域，分别维护和按需安装。新技能的专属资源与入口一起存放在该目录内。

当前可安装技能：

| 名称 | 领域与用途 | 路径 | 来源与维护 | 运行依赖 | 验证状态 |
| --- | --- | --- | --- | --- | --- |
| fxiaoke-crm | 纷享销客 CRM 客户、报价及审批消息查询 | [fxiaoke-crm](fxiaoke-crm/) | Ray 自编，Ray 维护 | 已登录的纷享销客浏览器会话及可用浏览器操作工具 | 元数据校验通过；真实页面查询流程已验证 |
| ppt-master | 多格式资料转 SVG 页面及 PPTX 的制作工作流 | [ppt-master](ppt-master/) | hugohe3/ppt-master 安装快照，Ray 维护；[来源与许可](ppt-master/PROVENANCE.md) | Python 及 requirements.txt 中依赖；按需使用浏览器、图片和转换能力 | 文件与元数据检查；本次未运行演示生成 |
| ppt-maker | 引导共创、研究纠偏、完整大纲、页面设计与制作交接 | [ppt-maker](ppt-maker/) | Ray 本地定制 v3.0.0；[来源记录](ppt-maker/PROVENANCE.md) | 默认品牌需独立 enpower-ppt-skill；实际文件需 Presentations 等制作能力 | 五项行为试运行；母版试制存在已记录的制作工具限制 |
| ray-skills-sync | 指定技能与 Ray-Skills 仓库之间的上传、拉取及比较 | [ray-skills-sync](ray-skills-sync/) | Ray 本地维护，2026-10-02 安装快照；未单独声明许可 | 已认证的 Git，或可用的 GitHub connector；本地文件读写能力 | 元数据校验；上传流程和远端文件校验已有实际验证 |

根目录原有的 DFMEA、FMEDA、FTA、WCA 等长文已归入参考资料，不计为已完成的 skill。

新增技能采用以下结构（按需创建子目录）：

```text
skills/<skill-name>/
  SKILL.md
  references/
  scripts/
  assets/
```

每个 `SKILL.md` 包含 YAML 元数据 `name`、`description`，正文说明适用情境、必需输入、操作步骤、输出和验证方式。详细规则见 [收纳规范](../CONTRIBUTING.md)。

有技能入库后，在此索引记录名称、领域、用途、路径、来源、运行依赖和验证状态。
