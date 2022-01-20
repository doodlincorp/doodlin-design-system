import { readFileSync } from "fs";
import path from "path";

export const getCssText = () => {
  return readFileSync(path.resolve(__dirname, "./style/ssr.css")).toString();
};
