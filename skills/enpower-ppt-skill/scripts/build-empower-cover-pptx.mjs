import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const [assetDir, output, previewDir] = process.argv.slice(2);
if (!assetDir || !output || !previewDir) {
  console.error("Usage: node build-empower-cover-pptx.mjs <asset-dir> <output.pptx> <preview-dir>");
  process.exit(2);
}

async function imageBytes(name) {
  const bytes = await fs.readFile(path.join(assetDir, name));
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function addText(slide, name, text, position, style) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = style;
  return shape;
}

const deck = Presentation.create({ slideSize: { width: 1280, height: 720 } });
const slide = deck.slides.add();
slide.background.fill = "#ffffff";

slide.images.add({
  blob: await imageBytes("sky-bg.png"), contentType: "image/png", alt: "浅蓝天空品牌背景",
  fit: "cover", position: { left: 0, top: 0, width: 1280, height: 720 }, geometry: "rect",
});
slide.images.add({
  blob: await imageBytes("campus.png"), contentType: "image/png", alt: "英搏尔产业园区",
  fit: "contain", position: { left: 430, top: 383, width: 850, height: 337 }, geometry: "rect",
});
slide.images.add({
  blob: await imageBytes("logo.png"), contentType: "image/png", alt: "英搏尔 Enpower",
  fit: "contain", position: { left: 64, top: 42, width: 280, height: 77 }, geometry: "rect",
});

addText(slide, "eyebrow", "CORPORATE PRESENTATION · 2026", { left: 78, top: 196, width: 360, height: 26 }, {
  fontSize: 13, fontFamily: "Arial", bold: true, color: "#005687", letterSpacing: 1.6,
});
addText(slide, "cover-title", "驱动智慧出行", { left: 76, top: 235, width: 500, height: 90 }, {
  fontSize: 58, fontFamily: "Microsoft YaHei", bold: true, color: "#005687",
});
addText(slide, "cover-subtitle", "面向新能源汽车动力系统的技术创新与高质量发展", { left: 78, top: 334, width: 520, height: 48 }, {
  fontSize: 20, fontFamily: "Microsoft YaHei", color: "#111111",
});
addText(slide, "cover-meta", "英搏尔技术中心    ■    2026.07", { left: 78, top: 400, width: 360, height: 28 }, {
  fontSize: 13, fontFamily: "Microsoft YaHei", color: "#666666",
});

const closing = deck.slides.add();
closing.background.fill = "#ffffff";
closing.images.add({
  blob: await imageBytes("sky-bg.png"), contentType: "image/png", alt: "浅蓝天空品牌背景",
  fit: "cover", position: { left: 0, top: 0, width: 1280, height: 720 }, geometry: "rect",
});
closing.images.add({
  blob: await imageBytes("campus.png"), contentType: "image/png", alt: "英搏尔产业园区",
  fit: "contain", position: { left: 470, top: 365, width: 810, height: 355 }, geometry: "rect",
});
closing.images.add({
  blob: await imageBytes("qr.png"), contentType: "image/png", alt: "英搏尔公众号二维码",
  fit: "contain", position: { left: 86, top: 552, width: 135, height: 135 }, geometry: "rect",
});
addText(closing, "closing-thanks", "THANKS", { left: 70, top: 65, width: 520, height: 145 }, {
  fontSize: 98, fontFamily: "Arial", bold: true, color: "#005687",
});
addText(closing, "closing-slogan", "驱动智慧出行\n赋能美好生活", { left: 74, top: 220, width: 430, height: 135 }, {
  fontSize: 43, fontFamily: "Microsoft YaHei", color: "#000000", lineSpacing: 1.25,
});

await fs.mkdir(previewDir, { recursive: true });
for (const [index, currentSlide] of deck.slides.items.entries()) {
  const stem = `slide-${String(index + 1).padStart(2, "0")}`;
  const png = await deck.export({ slide: currentSlide, format: "png", scale: 1 });
  await fs.writeFile(path.join(previewDir, `${stem}.png`), new Uint8Array(await png.arrayBuffer()));
  const layout = await currentSlide.export({ format: "layout" });
  await fs.writeFile(path.join(previewDir, `${stem}.layout.json`), await layout.text());
}
const inspection = await deck.inspect({ kind: "slide,textbox,image,shape", maxChars: 8000 });
await fs.writeFile(path.join(previewDir, "inspect.ndjson"), inspection.ndjson);

await fs.mkdir(path.dirname(output), { recursive: true });
const pptx = await PresentationFile.exportPptx(deck);
await pptx.save(output);
console.log(JSON.stringify({ output, previewDir, slides: deck.slides.items.length }));
