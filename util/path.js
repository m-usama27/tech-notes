// utils/paths.js
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// utils/ is one level inside the project root, so go up one level
export const rootDir = path.resolve(__dirname, "..");
