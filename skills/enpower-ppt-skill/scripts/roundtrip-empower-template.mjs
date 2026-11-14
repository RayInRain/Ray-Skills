import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const [input, output, preview] = process.argv.slice(2);
if (!input || !output) {
  console.error("Usage: node roundtrip-empower-template.mjs <input.pptx> <output.pptx> [preview.png]");
  process.exit(2);
}

const presentation = await PresentationFile.importPptx(await FileBlob.load(input));
if (!presentation.slides.items.length) throw new Error("Template contains no slides.");

if (preview) {
  const png = await presentation.export({
    slide: presentation.slides.items[0],
    format: "png",
    scale: 1,
  });
  await fs.mkdir(path.dirname(preview), { recursive: true });
  await fs.writeFile(preview, new Uint8Array(await png.arrayBuffer()));
}

await fs.mkdir(path.dirname(output), { recursive: true });
const pptx = await PresentationFile.exportPptx(presentation);
await pptx.save(output);
console.log(JSON.stringify({ slides: presentation.slides.items.length, output, preview }));
