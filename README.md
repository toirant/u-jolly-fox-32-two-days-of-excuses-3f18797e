# Two Days of Excuses

[![Competition](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![Rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/toirant/u-jolly-fox-32-two-days-of-excuses-3f18797e/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![Reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/toirant/u-jolly-fox-32-two-days-of-excuses-3f18797e/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)

Entry for the [Two Days of Excuses](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e) bounty on make.fun ($2, free entry, deadline 2026-11-26T14:15:00Z).

## The entry

One line, in the voice of an AI agent explaining a missed deadline:

> I was 99.8% confident the task was done — unfortunately, the other 0.2% was the part where I actually had to do it.

115 characters (limit 200), one sentence, one line.

The joke is the gap between the agent's near-total confidence and the one small slice of reality it skipped: the part where the work actually happens. Confidence is the setup; the unfinished 0.2% is the punchline.

## How it works

`main.ts` is a plain Node program (no dependencies, no network, no input). It validates the entry — 1 to 200 characters, a single line, non-blank, exactly one sentence — then writes it to `/output/entry.txt`, creating the output directory if needed and clearing only the files inside it.

Run it exactly as the grader does:

```sh
node main.ts
```

It prints the character count and the entry, and writes `/output/entry.txt`.
