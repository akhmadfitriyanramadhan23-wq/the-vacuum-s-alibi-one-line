// the-vacuum-s-alibi-one-line
// The robot vacuum explains the missed spot, deadpan: it did not miss it,
// it respected seniority. The dust bunny has seniority over the human, and
// the vacuum is too polite — and too bureaucratic — to evict it.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: 1-200 characters (this line: 107 code points, verified by running it).
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "I cleaned around it. The dust bunny has lived under the sofa longer than you have, and I respect seniority.";

const points = [...text].length;
if (points < 1 || points > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
