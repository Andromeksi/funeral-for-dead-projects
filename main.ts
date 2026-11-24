import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line, verbatim: one sentence pitching dignified funerals for dead office projects.
const ENTRY =
  "Dignified funerals for the departed: we bury dead office projects in one short ceremony that records why it died, saves the useful work, and cancels every Tuesday meeting.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-whitespace characters, got ${ENTRY.length}`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
// Written exactly as-is: no trailing newline.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
