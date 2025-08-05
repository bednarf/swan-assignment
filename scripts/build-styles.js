import { copyFile } from "fs/promises";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcStyles = resolve(__dirname, "../src/styles.css");
const distStyles = resolve(__dirname, "../dist/styles.css");

try {
  await copyFile(srcStyles, distStyles);
  console.log("✅ Styles file copied to dist/styles.css");
} catch (error) {
  console.error("❌ Error copying styles file:", error);
  process.exit(1);
}
