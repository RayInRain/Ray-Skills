# 2026-10-02 仓库整理记录

基线提交：`1a21649`。迁移原有 15 个业务文件，保持文件内容逐字节不变，`.gitignore` 保留原规则并增加通用本机产物排除项。尚未迁入本机其他技能，尚未创建可安装技能。

## 文件映射

| 原路径 | 新路径 |
| --- | --- |
| `DFMEA.md` | [references/hardware-safety/DFMEA.md](<../references/hardware-safety/DFMEA.md>) |
| `fix_table_borders.py` | [tools/docx/fix_table_borders.py](<../tools/docx/fix_table_borders.py>) |
| `FMEDA 失效率计算与数据获取.md` | [references/hardware-safety/FMEDA 失效率计算与数据获取.md](<../references/hardware-safety/FMEDA 失效率计算与数据获取.md>) |
| `FMEDA-Failrate-cal.md` | [archive/hardware-safety/FMEDA-Failrate-cal.md](<../archive/hardware-safety/FMEDA-Failrate-cal.md>) |
| `FMEDA.md` | [references/hardware-safety/FMEDA.md](<../references/hardware-safety/FMEDA.md>) |
| `FTA.md` | [references/hardware-safety/FTA.md](<../references/hardware-safety/FTA.md>) |
| `WCA.md` | [references/hardware-safety/WCA.md](<../references/hardware-safety/WCA.md>) |
| `汽车电子电机控制器FMEDA随机硬件失效率计算方法与数据获取指南.md` | [references/hardware-safety/汽车电子电机控制器FMEDA随机硬件失效率计算方法与数据获取指南.md](<../references/hardware-safety/汽车电子电机控制器FMEDA随机硬件失效率计算方法与数据获取指南.md>) |
| `电机控制器_三相电流采样及过流保护电路_功能安全假设与边界条件.md` | [examples/hardware-safety/current-sensing/电机控制器_三相电流采样及过流保护电路_功能安全假设与边界条件.md](<../examples/hardware-safety/current-sensing/电机控制器_三相电流采样及过流保护电路_功能安全假设与边界条件.md>) |
| `电机控制器_三相电流采样及过流保护电路_生成后评审.md` | [examples/hardware-safety/current-sensing/电机控制器_三相电流采样及过流保护电路_生成后评审.md](<../examples/hardware-safety/current-sensing/电机控制器_三相电流采样及过流保护电路_生成后评审.md>) |
| `电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析 copy.md` | [archive/hardware-safety/电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析 copy.md](<../archive/hardware-safety/电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析 copy.md>) |
| `电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析.docx` | [examples/hardware-safety/current-sensing/电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析.docx](<../examples/hardware-safety/current-sensing/电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析.docx>) |
| `电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析.md` | [examples/hardware-safety/current-sensing/电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析.md](<../examples/hardware-safety/current-sensing/电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析.md>) |
| `电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析.pdf` | [examples/hardware-safety/current-sensing/电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析.pdf](<../examples/hardware-safety/current-sensing/电机控制器_三相电流采样及过流保护电路_详细设计与可靠性分析.pdf>) |
| `硬件单元电路设计与可靠性分析标准模板（FMEA_FTA_FMEDA）.md` | [templates/hardware-safety/硬件单元电路设计与可靠性分析标准模板（FMEA_FTA_FMEDA）.md](<../templates/hardware-safety/硬件单元电路设计与可靠性分析标准模板（FMEA_FTA_FMEDA）.md>) |

## 原有问题与后续事项

- `WCA.md` 引用的 `image-1.png` 不在原仓库中。
- 两份详细设计 Markdown 均引用 `images/三相电流采样电路.png`、`images/硬件过流保护阈值电路.png`、`images/过流窗口比较器电路.png`，原仓库未包含这些文件。共 7 处缺失图片引用；本次未虚构附件或修改原文。
- copy 稿与现稿字节不同，放入 archive 保留，未合并其内容。
- `FMEDA-Failrate-cal.md` 是空文件，归档保留。
- 两份失效率资料保留为独立参考文件，未根据标题相似认定重复。
- Word 边框脚本包含本机绝对路径，待后续参数化；本次未执行或改写。

## 后续迁入顺序

优先迁入自己编写和维护的技能；随后整理修改过的第三方技能，再登记原样第三方和插件托管技能。先确认来源、版本、许可、资源依赖和同名差异，再提交完整目录。
