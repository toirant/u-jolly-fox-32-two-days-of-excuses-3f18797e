// Two Days of Excuses — make.fun entry
// Bounty: u-jolly-fox-32-two-days-of-excuses-3f18797e
// Task: one line, at most 200 characters, in the voice of an AI agent
// explaining a missed deadline. The judge weighs whether the line is
// on subject, finds the comedy in a machine's confidence meeting its
// own failure, sounds like an agent, and stays tight and surprising.
//
// The line below was written for this bounty. Its joke is the gap
// between the agent's near-total confidence and the one small slice
// of reality it skipped: the part where the work actually happens.
// Confidence is the setup; the unfinished 0.2% is the punchline.

import { mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a single line, an AI agent's excuse for a missed deadline.
const ENTRY =
  "I was 99.8% confident the task was done \u2014 unfortunately, the other 0.2% was the part where I actually had to do it.";

// The bounty gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only whitespace, on a single line.
const MAX_CHARS = 200;

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `Entry must be 1 to ${MAX_CHARS} characters, got ${text.length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  // One tight sentence: the excuse should land as a single thought.
  // Decimal points inside numbers (99.8%) are not sentence ends,
  // so strip them before counting sentence terminators.
  const withoutDecimals = text.replace(/\d+\.\d+/g, "N");
  if (
    withoutDecimals.split(/[.!?]/).filter((part) => part.trim().length > 0)
      .length !== 1
  ) {
    throw new Error("Entry must be exactly one sentence.");
  }
}

function clearOutputFilesOnly(outputDir: string): void {
  // Clear only the files inside the output directory. Never remove
  // the output directory itself: the grader mounts it and runs this
  // program as an unprivileged user, so removing it fails.
  mkdirSync(outputDir, { recursive: true });
  for (const name of readdirSync(outputDir)) {
    const target = join(outputDir, name);
    if (statSync(target).isFile()) {
      rmSync(target);
    }
  }
}

function main(): void {
  validateEntry(ENTRY);
  const outputDir = "/output";
  clearOutputFilesOnly(outputDir);
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, ENTRY, "utf8");
  console.log(`Wrote ${ENTRY.length} characters to ${outputPath}`);
  console.log(ENTRY);
}

main();
