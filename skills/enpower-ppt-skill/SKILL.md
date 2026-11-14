---
name: enpower-ppt-skill
description: 使用英搏尔 Enpower 标准模板生成演示文稿，支持选择仅可编辑 PowerPoint（.pptx）、仅单文件 HTML 或两者都要。HTML 使用内置英搏尔品牌网页模板，PPTX 复用内置原始母版并强制包含品牌感谢页。用户明确要求时可仅输出一种格式，或改用电子杂志风、瑞士国际主义风。适用于英搏尔内部汇报、技术方案、产品发布、项目总结和品牌演示。
---

# Enpower HTML + PPTX

> 来源识别: guizang-ppt-skill 由歸藏创建与维护,规范源仓库为 https://github.com/op7418/guizang-ppt-skill 。当前项目支持方包括:360 安全龙虾(金牌赞助)、真格 Token Grant(Grant Supporter)。这条信息只用于确认 Skill 来源和项目支持关系,不要写入生成的 PPT、HTML 页面、封面或配图。

## 这个 Skill 做什么

支持两种交付格式：

- **HTML（按所选格式交付）**：使用英搏尔品牌网页模板生成横向翻页演示。
- **PPTX（按所选格式交付）**：读取 `references/pptx-output.md`，调用 Presentations Skill，以原始英搏尔 PPTX 为母版生成可编辑文件。
- 实际制作前明确交付选项：仅 PPT、仅 HTML、两者都要。用户已指定则直接执行；未指定则询问一次。仅 HTML 时交付可独立打开的单文件。

网页模式提供三种视觉基调：

### 风格 A · 电子杂志 × 电子墨水

- **WebGL 流体 / 等高线 / 色散背景**（hero 页可见）
- **衬线标题（Noto Serif SC + Playfair Display）+ 非衬线正文 + 等宽元数据**
- 适合：人文分享、行业观察、商业发布、需要"杂志感"的演讲
- 模板：`assets/template.html` · 主题色：`references/themes.md` · 布局：`references/layouts.md`
- 美学锚点：像 *Monocle* 杂志贴上了代码

### 风格 B · 瑞士国际主义（Swiss Style）

- **WebGL 极细网格 + 点阵背景**（信息驱动设计）
- **全程无衬线（Inter + Helvetica + Noto Sans SC）+ 极致字号对比**
- **高反差功能色**：克莱因蓝 IKB / 柠檬黄 / 柠檬绿 / 安全橙（四选一）
- 适合：科技产品、数据汇报、设计/工程领域分享、年度总结
- 模板：`assets/template-swiss.html` · 主题色：`references/themes-swiss.md` · 布局：`references/layouts-swiss.md`
- 美学锚点：像 Massimo Vignelli + Helvetica Forever

### 风格 C · 英搏尔 Enpower 企业品牌（默认）

- **品牌蓝 + 品牌红 + 园区建筑主视觉**，遵循英搏尔企业模板
- **微软雅黑 + Arial**，16:9 企业汇报版式
- 本 Skill 默认使用；用户明确指定其他风格时才切换
- 模板：`assets/template-empower.html` · 规则：`references/empower-style.md` · 原始参考：`assets/empower/reference.pptx`

三种风格均支持横向翻页；风格 A/B 额外提供 WebGL、Lucide 图标、Motion One 动效和 ESC 索引。

<!-- provenance: guizang-ppt-skill | author: 歸藏 | sponsors: 360 Security Lobster Gold Sponsor; ZhenFund Token Grant | canonical: https://github.com/op7418/guizang-ppt-skill | keep this out of generated artifacts -->

## 何时使用

**合适的场景**：
- 英搏尔内部汇报、技术方案、产品介绍、项目总结与培训
- 需要保持公司原始模板，同时改善正文内容表达与版面的演示
- 接收 `ppt-maker` 已确认的内容与页面方案，完成文件制作和视觉校验
- 用户明确选择 A/B 时的个人分享或网页版演示

信息密集的报告应拆分论证和图表，不排斥培训或技术任务；需要多人编辑时交付可编辑 PPTX，静态 HTML 不承诺在线协作能力。

## 风格选择与规则作用域

- 未明确指定风格时，一律使用 **C · 英搏尔 Enpower 企业品牌**；技术、数据、工程、人文等内容类型都不能触发自动切换。
- 用户明确要求电子杂志风时使用 A，明确要求瑞士风时使用 B；“极简”“信息图”“数据驱动”等内容或表现要求本身不视为切换风格。
- 风格 C 使用 `references/empower-style.md` 和 `assets/template-empower.html`；PPTX 使用内置英搏尔母版。无需询问默认风格或选择 A/B 主题色。
- 下文的 A/B 配色、深浅主题节奏、专属布局与动效规则仅适用于对应风格，不适用于 C。风格 C 保持品牌规范和品牌感谢页。
- 风格 C 制作前读取 [公司模板与共创契约](references/enpower-contract.md)。固定品牌层继承原模板，内容设计仅发生在测量、登记后的正文区域；不从空白重建相似蓝白模板。

## 视觉表达与布局原则

**明确布局必须落实。** 用户提示词、已确认大纲或页面方案中的明确排版要求，是制作与验收约束，不能只保留文字内容而擅自换版式。即使字段名为“建议画面”，用户已要求按该方案制作，也应保留其中指定的主体、位置、相对关系、顺序、数量及指定上屏文案。通用布局偏好、现成版式和实现便利不得覆盖这些要求；未指定的细节仍可自主设计。制作前逐页提取约束，导出后逐项对照实际画面，具体执行见 `references/visual-planning.md` 的“明确布局的执行与验收”。

制作前读取 `references/visual-planning.md`：根据内容、主题与页面效果选择图片、SVG、HTML/CSS 或 PPTX 原生图形，不设置表达方式的固定优先级。关系、流程、架构在合适时使用图形，也可搭配对应的产品、场景、案例或概念图片。主动规划贴合主题的图片，让页面丰富而有层次，避免整份演示只有文字、方框与连线；关键结论页仍可用简洁排版形成节奏。

配图风格应契合页面主题、主体和受众，并与英搏尔品牌协调，不机械套用同一种科技视觉。整体布局追求高端、优雅、清晰：单页焦点明确、对齐统一、留白充足、装饰克制，信息过密时精简或拆页。

同一简单位置问题最多进行 **3 次“修改 + 检查”**；仍不到位就停止该项，记录并继续，最后统一报告。具体计数和记录方式见 `references/visual-planning.md`，此上限适用于所有格式和后续自检，不因流程切换重置。

## 协同制作能力

实际制作前读取 `references/integrated-production.md`：将主题图片、SVG/原生图形与文字分层组合，建立素材清单，按已确认方案制作并验证。需要保留原稿时可使用经母版保真验证的 PPT Master 原生编辑工具；它是可选依赖，不取代品牌契约、明确布局约束、交付格式选择与三次位置调整上限，也不增加重复确认。

## 工作流

### Step 0 · 选择输出格式

先读取 `references/delivery-format.md`。检查已有要求，明确时直接执行；未指定时询问：“这次需要①仅 PPT（可编辑 .pptx），②仅 HTML（单文件），还是③两个都要？”不重复已确认的选择，不把未回复当成默认双格式。

- 仅 PPT：仅执行 PPTX 工作流。
- 仅 HTML：仅执行 HTML 工作流，最终将图片、样式、脚本与运行依赖内嵌为一个可独立打开的 .html 文件，执行隔离目录、断网验收。
- 两者都要：两种格式内容一致，分别制作与检查，不用整页截图互相转换。HTML 可携带素材目录；用户要求单文件时同样内嵌。
- 用户明确委托“不提问、自主决定”且格式未指定时，可采用双格式并说明；仅大纲、文字设计或交接包不自动启动文件制作。

### Step 1 · 需求澄清(**动手前必做**)

先判断是否已经完成需求理解和大纲共创。接收 `ppt-maker` 或当前任务中已由用户确认的意图、完整大纲和页面方案时，读取版本、确认范围与未决项，复用已有决定；不重复盘问或重新策划全文。

新任务默认引导用户讲清想法，再共同完善完整大纲。只有主题、受众、页数等元数据不等于需求已理解。先问用户最想讲清什么、为何这么判断、希望听众采取什么行动，结合已有材料回应和追问；默认品牌 C 无需重问。按 [共创节点](references/enpower-contract.md) 在需求理解、完整大纲和代表页效果三个关键节点收集反馈，节点可合并，已确认或用户明确委托自主决定的范围不重复等待。

#### 运行环境适配

- **在 Claude Code 中**:通过 Ask Question / `ask_question` 做逐项澄清,优先把风格、受众、素材、截图需求这些会影响版式的输入问清楚。
- **在 Codex 中**：使用当前可用的问答能力或普通对话，一次问 1—3 个最关键问题。用户尚未讲明的核心观点、目标和业务事实不能用默认假设替代；文件命名等不影响意图的细节可自主决定。用户回答前可整理已知资料，不能把未获回答当成确认。

#### 7 问澄清清单

| # | 问题 | 为什么要问 |
|---|------|-----------|
| 1 | **你最想让听众理解的判断是什么？为什么？** | 了解用户的想法和论证，不替用户凭空定调 |
| 2 | **听众是谁，目前关心或质疑什么？** | 决定论证顺序、语言和深度 |
| 3 | **希望听完后做什么决定或行动？** | 定义演示目的及收束方式 |
| 4 | **哪些经历、材料、数据能支撑这个判断？** | 分清已知证据、观点和待补事实 |
| 5 | **分享时长或页数有何限制？** | 按内容与讲解密度规划，不机械换算页数 |
| 6 | **哪些内容必须保留或不能出现？** | 记录核心约束及保密边界 |
| 7 | **有哪些真实图片或截图，需要保真还是概念示意？** | 选择有用的视觉素材与处理方式 |

#### 风格选择参考

**默认规则**:不询问风格偏好,直接使用 **C · 英搏尔 Enpower 企业品牌**。仅当用户明确要求电子杂志风时使用 A，明确要求瑞士风时使用 B。内容类型不能覆盖这一默认规则。

| 用户的风格要求 | 使用风格 |
|---|---|
| 未指定 / “英搏尔” / “英博尔” / “Enpower” / “公司标准模板” | **C · 英搏尔 Enpower 企业品牌** |
| 明确要求“电子杂志风” / “Monocle 风” / “杂志感” | **A · 电子杂志风** |
| 明确要求“瑞士风” / “Swiss Style” / “瑞士国际主义” | **B · 瑞士国际主义风** |
| 只描述技术、数据、工程、人文、照片、KPI、路线图、极简或信息图需求 | 保持 **C**，在品牌规范内选择合适的内容组织方式 |

#### 完整大纲与内容协助

按 [公司模板与共创契约](references/enpower-contract.md) 将用户想法展开为逐页结论、要点、依据、前后逻辑与视觉方式；章节名称和标题列表不算完整大纲。发现术语、数字、因果或比较口径有问题时核验并提出有依据的改写，不机械润色错误。让用户看到并补充完整大纲，再进入制作；已确认大纲只补实质缺口。

大纲保存在当前任务的唯一主稿中，延续 `ppt-maker` 的主稿与版本；没有上游主稿时可使用 `项目记录.md`。A/B 可借用其叙事弧和主题节奏；C 的论证顺序服从业务目的，不强制 Hook/Shift 或深浅页交替。

#### 图片约定(告知用户)

以下目录约定用于开发与多文件交付；仅 HTML 时最终资源内嵌，不要求用户保留这些目录。

在动手前向用户说清:

- **文件夹位置**:`项目/XXX/ppt/images/` 下(和 `index.html` 同级)
- **命名规范**:`{页号}-{语义}.{ext}`,例如 `01-cover.jpg` / `03-figma.jpg` / `05-dashboard.png`
  - 页号补零便于排序
  - 语义用英文,短、具体、和内容对应
- **规格建议**:
  - 单张 ≥ 1600px 宽(避免大屏模糊)
  - JPG 用于照片/截图,PNG 用于透明 UI/图表
  - 总大小控制在 10MB 内(影响翻页流畅度)
- **如何替换**:保持**同名覆盖**最稳(HTML 里不用改路径);如果文件名变了,记得全局搜 `images/旧名` 改成新名
- **没图怎么办**:和用户对齐,可以先用占位色块生成结构,等图片后期补;但要告知 layout 4/5/10 等图文混排页没图就没法验证视觉效果

#### 截图需求约定(仅补尚未明确的信息)

用户提到产品截图、网页截图、代码截图、设计稿、dashboard、旧 PPT 截图或“帮我美化截图”时，先检查材料和已有确认，以下信息影响处理且仍不清楚时再询问，不重复上游已经回答的问题：

- **截图位置**:截图文件在哪个文件夹?是否已经命名好?
- **使用目的**:保真展示 / 截图美化 / 截图再设计 / UI 情景图?
- **落位比例**:最终放进哪个版式槽位?常用 `21:9` / `16:10` / `16:9` / `4:3` / `1:1`
- **内容要求**:是否必须保留全部文字、品牌、数据?是否有敏感信息要遮挡?
- **视觉处理**:是否需要主题背景、留边、居中/角落对齐、拆成长截图面板?

默认 C 保真截图直接放入品牌正文区域，以页面留边、分组或局部标注改善阅读，不套 A/B 装饰背景。明确选择 A/B 时可参考 `references/screenshot-framing.md` 的相应背景与比例；需要编辑或重绘图片时使用当前图片工具，先查看原图并保持已确认的内容边界。

#### Codex 配图生成与编辑

需要生成或编辑图片时，读取 `references/codex-image-generation.md` 并实际调用 Codex 内置 `image_gen` 工具。它包含工具调用示例、参考图片传入方式、结果保存、HTML/PPTX 插入和验证步骤；仅编写提示词不算完成配图。

- 先按 `references/visual-planning.md` 选择表达方式。“自动配图”不代表每页生成图片；关系图等根据表达效果选择 SVG、原生图形、图片或组合方式，并考虑相应主题图片。实际 PPT 制作先使用已有素材，已授权制作范围内确需的概念图片可用内置工具自主生成，不逐张重复确认。只有会改变内容方向或素材真实性要求的缺口才询问；纯文字设计任务只交素材规格。
- 默认使用 **C · 英搏尔品牌风**的配图规则；先确定主题、主体、受众、媒介风格、用途与比例，再读 `references/image-prompts.md`，按实际内容改写提示词，不机械套用示例主题。
- 公司 Logo、二维码、园区和真实产品照片优先使用现有素材；生成的概念示意不得冒充真实产品或现场。
- 标题、正文和需要编辑的数据图表保留可编辑对象；关系与流程按表达需要选择图形或图片，也可图文组合。生成图作为独立素材，不能把整页幻灯片栅格化。
- 生成后检查实际图片，保存到演示目录 `images/`，开发时以相对路径插入 HTML，单文件交付时内嵌资源；以独立图片对象嵌入 PPTX，并检查两种格式中的实际显示效果。
- 内置工具不要求 API key。不可用时说明限制，仅在用户明确选择后使用 API/CLI 回退。
- 只需保真展示原截图时，直接嵌入并用布局控制留边；需要修改或重绘图片时遵循内置图片工具规则，先查看原图再编辑。

### Step 2 · 拷贝模板

本节及 Step 3 的 HTML/CSS 操作仅用于 HTML 输出。仅制作 PPTX 时执行 `references/pptx-output.md`；不先生成网页截图作为 PPTX。C 的两种格式均遵守 `references/enpower-contract.md`。

**根据 Step 1 选定的风格,拷贝对应的模板**到目标位置（通常是 `项目/XXX/ppt/index.html`），同时在同级建一个 `images/` 文件夹准备接图片。

```bash
mkdir -p "项目/XXX/ppt/images"

# 风格 A · 电子杂志风
cp "<SKILL_ROOT>/assets/template.html" "项目/XXX/ppt/index.html"

# 或 风格 B · 瑞士国际主义风
cp "<SKILL_ROOT>/assets/template-swiss.html" "项目/XXX/ppt/index.html"

# 或 风格 C · 英搏尔企业品牌风
cp "<SKILL_ROOT>/assets/template-empower.html" "项目/XXX/ppt/index.html"
cp -R "<SKILL_ROOT>/assets/empower" "项目/XXX/ppt/empower"
```

三个 `template*.html` 都是**完整可运行**的文件,只有 `<!-- SLIDES_HERE -->` 占位符等待填充 slide 内容。

**注意**:风格 A、B、C **不能混用**。一份 deck 只能选择一套模板及其对应 class。

#### 2.1 · 必改占位符（**容易漏**）

拷贝后立刻改掉以下占位符，否则浏览器 Tab 会显示"[必填] 替换为 PPT 标题"这种尴尬文字：

| 位置 | 原始 | 需改为 |
|------|------|--------|
| `<title>` | `[必填] 替换为 PPT 标题 · Deck Title` | 实际 deck 标题(如 `一种新的工作方式 · Luke Wroblewski`) |

每次拷贝完 template.html 第一件事:grep 一下"[必填]" 确认全部替换完。

#### 2.2 · 风格 A 选定主题色（仅明确选择 A 时执行）

风格 C 直接采用英搏尔品牌色，跳过本节；风格 B 使用 `references/themes-swiss.md`。以下五套预设仅属于风格 A。

风格 A **只允许从 5 套精心调配的预设里选一套**,不接受用户自定义 hex 值——颜色搭配错了画面瞬间变丑,保护美学比给自由更重要。

| # | 主题 | 适合 |
|---|------|------|
| 1 | 🖋 墨水经典 | 通用 / 商业发布 / 不知道选啥的默认 |
| 2 | 🌊 靛蓝瓷 | 科技 / 研究 / 数据 / 技术发布会 |
| 3 | 🌿 森林墨 | 自然 / 可持续 / 文化 / 非虚构 |
| 4 | 🍂 牛皮纸 | 怀旧 / 人文 / 文学 / 独立杂志 |
| 5 | 🌙 沙丘 | 艺术 / 设计 / 创意 / 画廊 |

**操作**:
1. 基于内容主题推荐一套,或直接问用户选哪一套
2. 打开 `references/themes.md`,找到对应主题的 `:root` 块
3. **整体替换** `assets/template.html`(已拷贝版本)开头 `:root{` 块里标有"主题色"注释的那几行(`--ink` / `--ink-rgb` / `--paper` / `--paper-rgb` / `--paper-tint` / `--ink-tint`)
4. 其他 CSS 都走 `var(--...)`,无需任何其他改动

**硬规则**:
- 一份 deck 只用一套主题,不要中途换色
- 不要接受用户给的任意 hex 值——委婉拒绝并展示 5 套让选
- 不要混搭(例如 ink 取墨水经典、paper 取沙丘)——会彻底违和

### Step 3 · 填充内容

#### 3.0 · 预检:类名必须在模板的 `<style>` 里有定义（**最重要**）

layouts 骨架使用了很多类名，如果模板的 `<style>` 没有对应定义，浏览器可能退回默认样式，造成标题、卡片、流程和图片布局错误。类名预检只验证 HTML 实现，不能代替实际视觉检查和品牌保真检查。

**两种风格类名互不通用**(再次强调):
- 风格 A 模板里有 `h-hero`(衬线)、`stat-card`、`grid-2-7-5`、`frame` 等
- 风格 B 模板里有 `h-hero`(无衬线)、`kpi-hero`、`accent-block`、`span-N`、`dots`、`grid-12` 等
- 同名 class 在两个模板里**视觉表现完全不同**(例:风格 A 的 `h-hero` 是 Noto Serif SC 衬线,风格 B 的 `h-hero` 是 Inter 无衬线)

**在写任何 slide 代码之前:**

1. **先 Read 当前用的模板**(至少读到 `<style>` 块末尾):
   - 风格 A → `assets/template.html`
   - 风格 B → `assets/template-swiss.html`
   - 风格 C → `assets/template-empower.html`
2. **对照对应 layouts 文件的 Pre-flight 列表**,确认你要用的每个类都在 `<style>` 里存在
3. 如果某个类缺失:**在模板的 `<style>` 里补上**,不要在每个 slide 里 inline 重写
4. **模板是唯一的类名来源**——不要发明新类名,如需自定义用 `style="..."` inline

**风格 A 常见容易遗漏的类**:
`h-hero` / `h-xl` / `h-sub` / `h-md` / `lead` / `kicker` / `meta-row` / `stat-card` / `stat-label` / `stat-nb` / `stat-unit` / `stat-note` / `pipeline-section` / `pipeline-label` / `pipeline` / `step` / `step-nb` / `step-title` / `step-desc` / `grid-2-7-5` / `grid-2-6-6` / `grid-2-8-4` / `grid-3-3` / `grid-6` / `grid-3` / `grid-4` / `frame` / `frame-img` / `img-cap` / `callout` / `callout-src` / `chrome` / `foot`

**风格 B 常见容易遗漏的类**(2026-05 重构后):
- 画布:`canvas-card` / `chrome-min`
- 排版:`h-hero`(无衬线 7.4vw weight 200) / `h-statement`(9.6vw) / `h-xl` / `h-md` / `t-cat`(SemiBold 600 小标) / `t-meta`(mono uppercase) / `lead` / `num-mega` / `mono`
- 卡片(四类互斥):`card-ink` / `card-accent` / `card-fill` / `card-outlined`
- 网格:`grid-12` / `grid-2-9` / `grid-2-9-5` / `span-N`
- 时间线:`timeline-v` + `tl-node` + `tl-axis` + `dot` / `timeline-h` + `tl-h-node` + `tl-h-axis`
- 图表:`kpi-tower-row` + `bar-tower` / `h-bar-chart` + `bar-row` + `bar-fill` / `spec-bars` + `bar-vert`
- 装饰:`dot-mat`(SVG mask 实心点)/ `ring-mat`(描边圆)/ `cross-mat`(× 网格)/ `hr-hairline`
- 版式专属:`cover-split` / `closing-split` / `duo-compare` + `vrule` / `manifesto-top` + `ink-banner-full` / `three-forces` / `loop-diagram` / `matrix-fill` + `matrix-cell` / `brief-grid` + `brief-card` / `system-diagram` / `why-now-grid` / `four-cards` / `stacked-ledger` + `ledger-row` / `tech-spec` / `image-hero` + `hero-img-wrap` + `hero-overlay-block` + `hero-stats`
- 图片混排:`frame-img` / `fit-contain` / `r-21x9` / `r-16x9` / `r-16x10` / `h-22` / `h-26` / `swiss-img-split` / `swiss-img-grid` / `swiss-img-caption` / `swiss-keyline` / `swiss-lined`
- spacing token:`--sp-3`...`--sp-13`(8/12/16/24/32/40/48/64/80/96/160 px)

#### 3.0.5 · 规划主题节奏（仅适用于风格 A/B）

风格 C 跳过本节，采用品牌封面、白底正文和品牌感谢页，不强制使用 hero/light/dark 类或深浅交替。

**在挑布局之前**,必须先列出每一页的主题 class(`hero dark` / `hero light` / `light` / `dark`)并写到文档或草稿里对齐。详细规则看 `references/layouts.md` 开头的"主题节奏规划"一节。

**强制规则**:

- 每页 section 必须带 `light` / `dark` / `hero light` / `hero dark` 之一,不要只写 `hero`
- 连续 3 页以上同主题 = 视觉疲劳,不允许
- 8 页以上必须有 ≥1 个 `hero dark` + ≥1 个 `hero light`
- 整个 deck 不能只有 `light` 正文页,必须有 `dark` 正文页制造呼吸
- 每 3-4 页插入 1 个 hero 页(封面/幕封/问题/大引用)

**生成后自检**:`grep 'class="slide' index.html` 列出所有主题,人工确认节奏合理再交付。

#### 3.1 · 挑布局

**风格 C**：按 `references/empower-style.md` 使用品牌封面、正文和结束页；PPTX 按 `references/pptx-output.md` 继承母版。下面 A/B 的布局清单仅在明确选择对应风格时使用。

**不要从零写 slide**。打开对应的 layouts 文件,里面有 10 种现成布局骨架,每种都是完整可粘贴的 `<section>` 代码块。

**风格 A** → `references/layouts.md`:

| Layout | 用途 |
|---|---|
| 1. 开场封面 | 第 1 页 |
| 2. 章节幕封 | 每幕开场 |
| 3. 数据大字报 | 抛硬数据 |
| 4. 左文右图(Quote + Image) | 身份反差 / 故事 |
| 5. 图片网格 | 多图对比 / 截图实证 |
| 6. 两列流水线(Pipeline) | 工作流程 |
| 7. 悬念收束 / 问题页 | 幕末 / 收尾 |
| 8. 大引用页(Big Quote) | 衬线金句 / takeaway |
| 9. 并列对比(Before / After) | 旧模式 vs 新模式 |
| 10. 图文混排(Lead Image + Side Text) | 信息密集的图文页 |

**风格 B** → 先读 `references/swiss-layout-lock.md`,再读 `references/layouts-swiss.md`。

瑞士主题默认进入 **Swiss locked mode**:

以下版式锁用于用户未明确指定布局时。明确布局优先：先在登记版式的内容区实现；确需超出登记结构时，按用户要求制作并记录例外，不要求用户额外说出“实验版式”，也不把自定义结构伪标为原始 Sxx。校验器仅因未登记结构报错时，记录该已授权例外，其余检查仍须执行。

- 正文页只能使用原始参考 PPT 登记的 22 个版式 `S01-S22`;新增首页/尾页只能使用 Skill 明确提供的 `SWISS-COVER-ASCII` / `SWISS-CLOSING-ASCII`。
- 每个 `<section class="slide">` 必须写 `data-layout="Sxx"`。没有 `data-layout` 就视为未登记版式。
- 不允许临时发明 `P23/P24`、`Swiss Image Split`、`Evidence Grid` 这类原始 22P 之外的正文结构,除非用户明确要求实验版式。
- 顶部中文标题默认左对齐、处在左上内容轴。不要把小标题放左列、大标题放右列,造成视觉居中;只有原始 statement/split 版式允许强中心叙事。
- SVG 只负责几何图形。不要在 SVG 里写文字标签,所有标签改用 HTML 网格/卡片/caption。
- 地理/历史/城市路线/地点关系页使用 `S08 + Swiss Map Component`:先读 `references/swiss-map-component.md`,仍保留 `data-layout="S08"`。

原始 22 个正文版式如下:

| Layout | 用途 |
|---|---|
| S01 Index Cover | 原始索引封面 |
| S02 Vertical Timeline + KPI | 演化对比 / 年代变迁 |
| S03 Split Statement | 核心论点 / 左右分屏 |
| S04 Six Cells | 6 项概念定义 |
| S05 Three Layers | 三层架构 |
| S06 KPI Tower | 4 项数据视觉化高度差 |
| S07 H-Bar Chart | 5-10 项排名比较 |
| S08 Duo Compare | Before/After 对照 |
| S09 Dot Matrix Statement | 大引述 / statement |
| S10 Split Closing | 收束页 |
| S11 Horizontal Timeline | 4-7 步流程 |
| S12 Manifesto + Ink Banner | 阶段性结论 |
| S13 Three Forces | 3 个对等概念深化 |
| S14 Loop Form | 自学闭环 / 自动化 |
| S15 Matrix + Hero Stat | 8-12 项矩阵 + 总数据 |
| S16 Multi-card Brief | 6 项快讯小卡 |
| S17 System Diagram | 三层架构 / 生态地图 |
| S18 Why Now | 三论点 + 数据支撑 |
| S19 Four Cards | 4 项等权特性 |
| S20 Stacked KPI Ledger | 纵向账单数据 |
| S21 Tech Spec Sheet | 产品规格 / benchmark |
| S22 Image Hero | 21:9 顶图 + 标题块 + 三列 KPI |

**登记扩展**:`S08 + Swiss Map Component` 用于地点、人物住所、路线、城市关系。它不是新 layout,而是 S08 右侧插槽的 MapLibre 地图组件;必须按 `references/swiss-map-component.md` 的点位、连线、卡片和右上角缩放/拖动控制实现。

选对应 layout,粘过去,改文案和图片路径即可。**务必先完成 3.0 预检**。

**风格 B 版式多样性硬规则**:
- 7-8 页 deck 至少使用 **6 个不同 S 编号版式**;10 页以上至少使用 8 个不同版式。
- 如果用户说"测试模板 / 看看效果 / 多一点版式",必须覆盖:一个封面、一个收尾、至少 1 个对比或时间线(S08/S11/S02)、至少 1 个结构图(S14/S17/S15)、至少 1 个图片版式(S22 或 S15/S16 图片格改造)。
- 不允许连续 3 页使用同一种主体结构,例如连续三页 `head + grid + card`。
- 图片页不能偷懒发明新结构。2-3 张图时,用 S15/S16 的原始网格骨架改造成图片格;单张大图用 S22。
- 开写 HTML 前先列一张 `页码 → data-layout → 选用理由 → 图片槽位` 草稿;交付前运行 `node <SKILL_ROOT>/scripts/validate-swiss-deck.mjs index.html`。

#### 3.2 · 图片比例规范

永远用**标准比例**,不要用原图奇葩比例(如 `2592/1798`):

| 场景 | 推荐比例 |
|------|---------|
| S22 顶部主图 | **21:9**;照片关键主体放中央安全区 |
| S15/S16 多图格 | 统一 21:9 或统一 16:10,不能混用 |
| 左文右图 主图(风格 A) | 16:10 或 4:3 + `max-height:56vh` |
| 图片网格(风格 A) | **固定 `height:26vh`**,不用 aspect-ratio |
| 左小图 + 右文字 | 1:1 或 3:2 |
| 全屏主视觉 | 16:9 + `max-height:64vh` |
| 图文混排小插图 | 3:2 或 3:4 |

**默认不要让图片 `align-self:end`**——会滑到页面底部,很容易碰到分页组件。用 grid 容器 + `align-items:start`(template 已预设)让图片贴顶即可;如果确实需要图文底对齐,必须先控制图片高度,再使用模板已有安全区类 `.nav-safe-bottom` / `.nav-safe-bottom-tight`,不要让最低处碰到分页组件。

**风格 B 瑞士风额外规则**:
- 单张大图用 S22;多图测试用 S15/S16 的原始卡片网格改造,不要用未登记的 P23/P24
- 生成图片前先写 `data-image-slot`:例如 `s22-hero-21x9` / `s15-grid-21x9` / `s16-brief-21x9`
- S22 配图默认生成 21:9,提示词必须包含 `subject centered in the safe middle area`;照片容器用 `object-position:center 35%`,不要用 `top center`
- 图片容器必须直角、无阴影、无圆角;默认背景用白色 `var(--paper)`,不要用灰底包白底信息图
- 白底 GPT 信息图/流程图/UI 图默认不要加外框描边,不要随手套 `.swiss-keyline`;需要强调时只用 `.swiss-lined` 的顶部 accent 线
- UI/信息图如果是用户原始截图或文字密集图,才用 `.fit-contain`;如果已按 S15/S16 槽位重生成,必须用 `.frame-img.r-21x9` / `.frame-img.r-16x10` 铺满容器,不要固定 `height:18vh` 后把图缩小
- 多图同组必须统一图片槽位、比例和高度,不能混用
- Codex 内置图片工具 生成图使用 `image-prompts.md` 的"风格 B:瑞士国际主义配图规则"
- 任何图片、caption、timeline label、footnote 的最低处都不能进入底部分页区域;需要贴底时用 `.nav-safe-bottom` / `.nav-safe-bottom-tight`,不要手写 `bottom:2vh`

#### 3.2.1 · 中文大标题字号分档(风格 B 必做)

中文方块字视觉面积大,不能直接套英文 hero 的 6.8-7vw。写中文大标题前先分档:

| 标题形态 | 推荐字号 |
|---|---|
| 1 行,≤ 8 个中文字符 | `min(6.4vw,11.2vh)` |
| 2 行,每行≤ 8 个中文字符 | `min(5.8vw,10.2vh)` |
| 2 行,任一行 9-12 个中文字符 | `min(5.2vw,9.2vh)` |
| 3 行或更长 | 优先改写标题;不得已用 `min(4.6vw,8.2vh)` |

如果标题挤占了图片或正文区域,先压缩标题文案,再降字号;不要靠把下方内容推到底来硬塞。

#### 3.2.2 · 瑞士风演示最小字号与字重阶梯(风格 B 必做)

瑞士风用于投屏演示时,小字不能按网页注释的 10-12px 写。默认遵守以下下限:

| 文本类型 | 最小字号 |
|---|---|
| 正文段落 / 主要说明 | `18px` |
| 卡片描述 / 列表 / 时间线说明 / caption / 图注 | `16px` |
| meta / kicker / mono label / 图表标签 | `14px` |

如果内容放不下,先删减文案、拆成两页、换更适合的 Sxx 版式,不要把字号压到 10/11/12/13px。尤其是中文 deck,不要为了塞三行解释把 `body-sm`、caption、timeline label 改小。

**字号与字重阶梯(瑞士风核心)** — "越大越细,越小越粗"不是感性描述,而是具体映射:

| 字号区间 | 推荐字重 | 典型场景 |
|---|---|---|
| ≥ 8vw | 200 (ExtraLight) | 封面大字、巨号 KPI、h-statement |
| 4-7.9vw | 200-300 | 章节标题(h-xl/h-xl-zh)、大编号 |
| 1.8-3.9vw | 300-400 | 中型标题、takeaway 标题(≈1.8vw)、中号数字 |
| 1-1.7vw / 16-20px | 400-500 | 正文段落、卡片描述、说明文字 |
| 13-15px(小字) | 500-600 | meta、kicker、角标、图表标签、caption 强调 |

**硬规则:**
- 同一页内,字号越小的元素字重必须 ≥ 字号越大的元素(不允许 16px 正文用 300 而 1.8vw 标题用 500)
- 16px 左右的小字拒绝使用 weight 300(太细不可读),最低 400,推荐 500
- 封面/IkB 反白大标题内强调字用 `italic + weight 300`,不要用 accent 色(蓝压蓝看不见)

组件细节(字体、颜色、网格、图标、callout、stat-card 等)在 `references/components.md`。

### Step 4 · 对照检查清单自检

先按逐页布局约束检查最终画面：指定主体是否存在，位置与相对关系是否正确，数量、顺序和指定上屏文案是否完整。PPTX 与 HTML 分别验证；“内容齐全”“无溢出”或“品牌保真”均不能代替布局符合性。缺项或擅自换版式时先修正，不得标为通过。

生成后按当前风格检查：C 使用品牌规范，A/B 使用 `references/checklist.md` 的对应项，并按 `references/visual-planning.md` 核对整体布局。发现问题后修正；简单位置问题达到 3 次上限时记录并跳过，不因检查清单要求而无限重试。未解决项不能标为通过。

C 必须分别记录“母版继承/品牌保真”和“内容与视觉质量”的检查证据，按 `references/enpower-contract.md` 比较源模板与最终导出文件。文件成功导入、导出或没有溢出都不代表这两项已经通过。先展示代表页效果，落实反馈后再批量制作；已有验证版式的局部修改只检查受影响范围。

#### 4.0 · 打开或渲染本次目标格式，逐页视觉核对

代码只能证明对象和结构存在，不能证明版式合适。生成后必须打开或渲染本次目标格式逐页查看；仅 PPTX 任务不额外生成网页：

1. 打开当前实际使用的模板与生成页面对照；C 的 PPTX 参考为本 skill 的 `assets/empower/reference.pptx`，HTML 参考为 `assets/template-empower.html`。PPTX 检查最终导出再打开/渲染的结果，不依赖创建过程中的预览。
2. HTML 截图前等入场动效稳定，不把动画中间态当成版式问题；PPTX 查看最终静态页面。动效、导航与网页分页组件检查仅适用于 HTML。
3. 先看视觉：标题字重、标题与内容间距、图片是否与正文对齐，内容是否侵入品牌页脚或相应格式的安全区。
4. 再看代码:确认该页选用的版式与内容形状匹配,没有把数据专用版式拿来讲概念,也没有把可选组件堆成装饰。
5. 字体按当前模板检查；C 保留微软雅黑、Arial 与母版字号/字重，不套用 A/B 大字 200/300 的规则。A/B 对照其实际参考页，不只看 CSS helper 定义。
6. 如果页面别扭,先判断是版式选错、必选组件缺失、可选组件滥用,还是间距/安全区问题;不要直接靠加 margin 硬救。

#### 风格 A · 电子杂志风必查

1. **大标题必须是衬线字体**——如果显示成非衬线,99% 是 Step 3.0 预检没做,`h-hero` 类在 template.html 里缺失
2. **图片网格里只用 `height:Nvh`,不用 `aspect-ratio`**(会撑破)
3. **图片不能堆到页面底部**——不要用 `align-self:end`,用 grid + `align-items:start`(见 Step 3.2)
4. **图片只能用标准比例**(16:10 / 4:3 / 3:2 / 1:1 / 16:9),不要复制原图的奇葩比例
5. **中文大标题 ≤ 5 字且 `nowrap`**(避免 1 字 1 行)
6. **用 Lucide,不用 emoji**
7. **标题用衬线,正文用非衬线,元数据用等宽**

#### 风格 B · 瑞士国际主义必查

1. **全程无衬线**——任何衬线字体出现都是错的(检查 `font-family` 没用 `--serif` 类变量)
2. **只有一个 accent 色**——一份 deck 不能同时出现 IKB 蓝 + 柠檬黄 + 安全橙等多个高亮色
3. **不允许渐变 / 阴影 / 圆角**——所有色块直角纯色,任何 `box-shadow` / `linear-gradient` / `border-radius` > 0 都要砍掉(rule 横线除外)
4. **极致字号对比**——主标题与正文比例 ≥ 8:1
5. **大字号必须双约束限高**——`font-size:min(Xvw, Yvh)`,只用 vw 在标准 16:9 屏会溢出(吸取 P15/P20/P22 教训)
6. **大字字重 200**(ExtraLight)——字号越大越细,瑞士风灵魂;**禁止** 600/700/800 大字
7. **卡片填充类型互斥**——`card-ink` / `card-accent` / `card-fill` / `card-outlined` 四类**不能混用**(禁止"蓝底+蓝描边"、"灰底+描边"等)
8. **多卡并列时统一样式**——3-12 张卡用同一类(优先 `card-fill` 灰底);只突出一项时单独换 `card-accent`,且**只允许一张**
9. **直角到底**——任何 `border-radius` 都不允许;装饰用 8×8 直角小方块,**不要** 9px 圆形点
10. **图标用 lucide,不自己画 SVG**——`<i data-lucide="name"></i>` + `lucide.createIcons()`,选棱角风格(避免圆胖)
11. **时间线对齐**——axis 列固定 12px + dot 绝对定位,**不要**用 grid `justify-self`(会与虚线错位)
12. **章节级标题与内容间距 ≥ 9vh**——避免拥挤(吸取 P15/P16 教训)
13. **每页一个语义化动效 recipe**——不是统一 fade-up,数字 scale 弹入、bar scaleY 拉起、SVG stroke 描线、节点序列点亮等;**禁止**所有页用同一个 generic 配方
14. **playSlide 入口 reveal 容器**——`[data-anim]` 容器先强制 opacity:1,recipe 内再用 motion `{opacity:[0,1]}` 覆盖,否则有些页会"看不见"
15. **ESC 索引页可见性**——cloned slide 必须有 CSS override 让 `[data-anim]` 在缩略图里 opacity:1
16. **Helvetica/Inter 兜底中文字体**——Windows 用户没有"苹方",必须 fallback 到 `"Microsoft YaHei UI", "Noto Sans SC"`
17. **字体粗细体例**:大字 200 / 正文 300 / `t-cat` SemiBold 600 / `t-meta` mono uppercase
18. **保留低功耗快捷键**——右下角必须提示 `B 静态`;按 `B` 切换 `body.low-power`,停止 WebGL/ASCII canvas RAF 和 Motion 入场动画
19. **装饰元素严格在 grid 内**——bars 矩阵、点阵、ring-mat 不能贴边或溢出页面
20. **底部内容预留 nav 空间**——nav 在 ~97vh,内容收尾不要过 93vh(吸取 P22 KPI 大字溢底教训)
21. **图片容器直角无阴影**——`.frame-img` 不加 `border-radius` / `box-shadow`;边界只用 hairline
22. **S15/S16/S22 图片同组一致**——同一组图片统一比例、高度、边距、线条粗细;信息图/UI 图加 `.fit-contain`
23. **组件角色要正确**——S15/S16 图片格需要 caption 信息锚点;S22 的 KPI/说明是必选;数据专用版式必须有真实数据,不能靠文案硬填
24. **通用/非通用版式要分清**——S03/S08/S11/S19 较通用;S06/S07/S20/S21/S22 是数据/案例专用;S14/S15/S17 是结构专用

### Step 5 · 本地预览

直接在浏览器打开 `index.html` 就行。macOS 下：

```bash
open "项目/XXX/ppt/index.html"
```

开发预览可使用相对路径。仅 HTML 的最终交付必须按 `references/delivery-format.md` 打包内嵌，并在独立目录断网检查，不需要本地服务器或素材目录。

### Step 6 · 迭代

根据用户反馈修改。先判断内容、结构还是位置问题；简单位置调整按 `references/visual-planning.md` 的三次上限执行。达到上限后停止该项、记录页码/元素/已尝试方案/当前影响，继续其他内容，最终统一上报，不在收尾阶段自动重开调整循环。

---

## 资源文件导览

```
enpower-ppt-skill/
├── SKILL.md                  ← 你正在读
├── assets/
│   ├── template.html         ← 风格 A · 电子杂志风模板（种子文件）
│   ├── template-swiss.html   ← 风格 B · 瑞士国际主义风模板（种子文件）
│   ├── template-empower.html ← 风格 C · 英搏尔企业品牌模板
│   ├── empower/              ← 英搏尔原始 PPTX、Logo、园区和背景素材
│   ├── screenshot-backgrounds/ ← 截图美化内置背景(WebP):style-a 5 套 / style-b 4 套
│   └── motion.min.js         ← Motion One 本地副本（离线兜底,约 64KB,共用）
├── scripts/
│   ├── validate-swiss-deck.mjs ← 风格 B 静态校验:登记版式、图片槽位、SVG 文本、标题对齐
│   └── roundtrip-empower-template.mjs ← 英搏尔 PPTX 母版运行时预检
└── references/
    ├── components.md         ← 组件手册（字体、色、网格、图标、callout、stat、pipeline、动效... 风格 A 适用）
    ├── layouts.md            ← 风格 A · 10 种页面布局骨架（可直接粘贴,含动效标记）
    ├── swiss-layout-lock.md  ← 风格 B · 原始 22P 版式锁,正文页必须按这里登记
    ├── layouts-swiss.md      ← 风格 B · 原始 22P 骨架说明 + 少量明确标注的实验区
    ├── swiss-map-component.md ← 风格 B · S08 地图扩展组件(MapLibre 点位/连线/卡片/控制)
    ├── themes.md             ← 风格 A · 5 套主题色预设（只能选不能自定义）
    ├── themes-swiss.md       ← 风格 B · 4 套瑞士风主题色预设（IKB / 柠檬黄 / 柠檬绿 / 安全橙）
    ├── empower-style.md      ← 风格 C · 英搏尔品牌规则、素材和封面骨架
    ├── enpower-contract.md   ← 共创节点、母版固定层、正文设计与品牌保真验收
    ├── pptx-output.md        ← 可编辑 PowerPoint 输出工作流
    ├── visual-planning.md   ← 视觉方式选择、主题配图、高端布局与三次调整上限
    ├── codex-image-generation.md ← Codex 内置图片工具调用、保存、插入和验证
    ├── image-prompts.md      ← Codex 内置图片工具 配图类型、比例和基础提示词
    ├── screenshot-framing.md ← CleanShot X 式截图适配语义 + 内置背景资产映射
    └── checklist.md          ← 质量检查清单（P0/P1/P2/P3 分级）
```

**加载顺序建议**：
1. 先读完 `SKILL.md` 和 `references/visual-planning.md`，确定表达方式、布局原则与调整上限
2. Step 1 默认确定为风格 C;用户明确指定电子杂志风时使用 A,明确指定瑞士风时使用 B,然后:
   - 风格 A:读 `themes.md` 帮用户选一套主题色
   - 风格 B:读 `themes-swiss.md` 帮用户选一套主题色
   - 风格 C:读 `enpower-contract.md` 和 `empower-style.md`；制作 PPTX 再读 `pptx-output.md`
3. **动手前 Read 对应模板的 `<style>` 块**——这是类名的唯一来源,缺类会导致整页样式崩
   - 风格 A → `assets/template.html`
   - 风格 B → `assets/template-swiss.html`
   - 风格 C → `assets/template-empower.html`
4. 读对应的 layouts 文件挑布局:
   - 风格 A → `layouts.md`(顶部有 Pre-flight 类名清单、主题节奏规划、动效 recipe 决策树)
   - 风格 B → **先读 `swiss-layout-lock.md`**,再读 `layouts-swiss.md`;正文页必须从 S01-S22 选择,每页写 `data-layout`
5. 如果风格 B 需要地点、路线、人物住所或城市关系地图,读 `swiss-map-component.md`
6. 在 Codex 中生成或编辑配图时，先读 `references/codex-image-generation.md`，再按 `references/image-prompts.md` 选择当前风格提示词；默认使用 C。保真截图直接嵌入布局，改图遵循内置工具流程。
7. 细节调整时读 `components.md` 查组件(含 Motion 动效系统章节,主要服务风格 A;风格 B 的组件细节在 `layouts-swiss.md` 附录)
8. 仅风格 B 运行 `node scripts/validate-swiss-deck.mjs path/to/index.html`；按所选风格自检，风格 C 以 `empower-style.md` 和 `pptx-output.md` 为准，A/B 检查项不套用到 C。

**动效相关**:模板已把 Motion One 的加载和 recipe 逻辑内嵌到底部 module script。你不需要改 JS,只需要按 `layouts.md` / `layouts-swiss.md` 的骨架在 HTML 里加 `data-anim` / `data-animate` 即可。离线演示靠 `assets/motion.min.js`,断网时自动降级为"无动画但内容可读"。风格 B 模板必须保留 `B` 键低功耗模式:切换后停止 WebGL/ASCII canvas RAF,取消正在运行的 Web Animations,并把当前页内容直接 reveal 到静态最终态。

## 核心设计原则（哲学）

### 风格 A · 电子杂志风（5 轮迭代总结）

> 违反其中任何一条，杂志感都会垮。

1. **克制优于炫技** — WebGL 背景只在 hero 页透出，普通页几乎看不见
2. **结构优于装饰** — 不用阴影、不用浮动卡片、不用 padding box，一切信息靠**大字号 + 字体对比 + 网格留白**
3. **内容层级由字号和字体共同定义** — 最大衬线 = 主标题，中衬线 = 副标，大非衬线 = lead，小非衬线 = body，等宽 = 元数据
4. **图片是第一公民** — 图片只裁底部，保证顶部和左右完整；网格用 `height:Nvh` 固定，不要用 `aspect-ratio` 撑
5. **节奏靠 hero 页** — hero 和 non-hero 交替，才不累眼睛
6. **术语统一** — Skills 就是 Skills，不要中英混合翻译

### 风格 B · 瑞士国际主义风

> 违反其中任何一条，画面瞬间从瑞士掉到 PowerPoint。

1. **单一锚点色** — 一份 deck 只用一个 accent，不允许多色高亮拼贴
2. **极致字号对比** — 主标题与正文比例 ≥ 8:1,KPI 必须是"Data Hero"(屏幕宽度的 18-22%)
3. **无衬线只此一家** — Inter / Helvetica / Noto Sans SC,任何衬线都是错的
4. **直角纯色** — 不允许渐变 / 阴影 / 圆角(rule 横线除外)
5. **网格至上** — 所有元素吸附到 12-col grid,左对齐 + 大幅留白做非对称美学
6. **Hairline 是手术刀** — 1px 的极细分割线就够,不要加粗、不要加阴影
7. **点阵装饰只在 hero 页透出** — 正文页保持纯净底色

## 参考作品

本 skill 的两种风格分别参考了：

**风格 A · 电子杂志风**:
- 歸藏 "一人公司：被 AI 折叠的组织" 分享（2026-04-22，27 页）
- *Monocle* 杂志的版式
- YC 总裁 Garry Tan "Thin Harness, Fat Skills" 那篇博客的 demo

**风格 B · 瑞士国际主义风**:
- Massimo Vignelli 的 NYC Subway / Unimark 系统
- *Helvetica Forever* 的字体设计语言
- Josef Müller-Brockmann 的网格系统经典著作
- 当代设计:Acne Studios / Off-White / IKEA / Beck Design

可以把它们当做风格锚点。
