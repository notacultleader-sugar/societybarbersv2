// Downloads Lovable-hosted project assets into public/native/ so the native
// (Capacitor) build can ship them offline instead of fetching them from the CDN.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const assetsDir = path.join(root, "src", "assets");
const outDir = path.join(root, "public", "native");
const projectJson = JSON.parse(fs.readFileSync(path.join(root, ".lovable", "project.json"), "utf8"));
const projectId = projectJson.id ?? projectJson.project_id;
const origin = process.env.LOVABLE_ASSET_ORIGIN ?? `https://id-preview--${projectId}.lovable.app`;

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const manifests = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".asset.json"));
  for (const file of manifests) {
    const meta = JSON.parse(fs.readFileSync(path.join(assetsDir, file), "utf8"));
    const target = path.join(outDir, meta.original_filename);
    const res = await fetch(`${origin}${meta.url}`);
    if (!res.ok) throw new Error(`Failed to download ${meta.original_filename}: ${res.status}`);
    fs.writeFileSync(target, Buffer.from(await res.arrayBuffer()));
    console.log(`Downloaded ${meta.original_filename}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
