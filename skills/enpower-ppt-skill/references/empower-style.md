# 英搏尔品牌模板

依据 `assets/empower/reference.pptx` 提炼，是本 Skill 的默认视觉模板。只有用户明确指定电子杂志风或瑞士风时才切换。

模板保持与正文设计范围遵循 [公司模板与共创契约](enpower-contract.md)。品牌固定层不能重画、换位或重配色；在测量登记的正文区域内积极设计信息关系、图表与图片布局。

## 品牌规则

- 画布：16:9。
- 中文字体：微软雅黑；英文字体：Arial。
- 品牌蓝：`#005687`；品牌红：`#E10600`；辅助黑：`#000000`；辅助灰：`#97999B`。
- 单页配色不超过三种，优先使用品牌蓝，红色仅作关键强调。
- 禁止拉伸 Logo、修改 Logo 颜色、使用过度装饰或复杂渐变。
- 原母版第 5 页字号规定：封面主标题 36pt 加粗、副标题 20pt、目录 24pt 加粗、正文标题 28pt 加粗、正文 14pt。PPTX 保留相应角色和字重；新正文图形按模板层级设计，不缩字硬塞。HTML 使用相应视觉层级，不将 px/vw 数值直接当作 PPTX pt。

## 布局与视觉选择

遵循 `visual-planning.md`：整体高端、优雅、清晰；保持单页焦点、统一对齐、充足留白和克制装饰。关系、流程、架构在合适时使用 SVG 或原生图形，不设固定优先级；主动安排对应主题的图片，可与图形搭配，使页面丰富而有层次，风格与主题及品牌协调。同一简单位置问题最多调整并检查 3 次，未解决则记录，最后统一报告。

## 资源

- 网页模板：`assets/template-empower.html`
- 原始 PPTX：`assets/empower/reference.pptx`
- Logo：`assets/empower/logo.png`
- 天空背景：`assets/empower/sky-bg.png`
- 园区建筑：`assets/empower/campus.png`
- 公众号二维码：`assets/empower/qr.png`

开发时复制模板，同时复制整个 `assets/empower/` 文件夹到目标 HTML 同级的 `empower/`。如果目录不同，调整图片相对路径。

## 封面骨架

以下代码仅为 HTML 模板骨架。PPTX 封面继承原始 PPTX 第 1 页及其布局，不根据这段 HTML、图片或旧重建脚本从空白画布仿制。

```html
<section class="slide brand-cover">
  <img class="brand-logo" src="empower/logo.png" alt="英搏尔 Enpower">
  <img class="campus" src="empower/campus.png" alt="英搏尔产业园区">
  <div class="cover-copy">
    <div class="eyebrow">Corporate Presentation · 2026</div>
    <h1 class="cover-title">演示文稿标题</h1>
    <p class="cover-subtitle">一句话说明演示主题、项目或汇报范围。</p>
    <div class="cover-meta"><span>部门 / 汇报人</span><i></i><span>2026.07</span></div>
  </div>
  <div class="brand-bar"></div>
</section>
```

正文页使用白底、右上 Logo、顶部蓝色细线、左对齐标题和底部版权线。不要混用电子杂志风或瑞士风的 class。

## 结束页（必选）

正式英搏尔演示默认以结束页收尾，版式继承原始 PPTX 第 4 页；用户明确要求修改或删除时记录其覆盖范围，其余固定项保持原样：

- 左上使用品牌蓝大字 `THANKS`。
- 下方两行使用黑色中文：`驱动智慧出行`、`赋能美好生活`。
- 左下保留 `assets/empower/qr.png`，右下保留园区建筑。
- 不添加汇报人、日期、页码或额外口号；用户明确要求删除时才可省略。
