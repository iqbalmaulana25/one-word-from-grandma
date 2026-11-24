// One Word From Grandma
// Writes exactly one word — the word grandma would text about AI — to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line = "ChatGTP";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
