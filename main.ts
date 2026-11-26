import { mkdirSync, writeFileSync } from "node:fs";

// One text message from the future self, under 200 characters.
// The joke: jury duty — the summons everyone dreads — finally arrives
// in 2031, and the trial it puts you on lasts longer than your marriage did.
const ENTRY =
  "Future you: jury duty finally calls in 2031. You're picked. The trial lasts longer than your marriage did.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
