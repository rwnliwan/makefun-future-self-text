# Trial log — Texts From Your Future Self (batch 10prog #10)

- Competition: `u-motasimfuad-texts-from-your-future-self-dd44595e` — "Texts From Your Future Self"
- Prize: $2 (top 10 paid) — deadline 27 Nov 04:50 WITA (2026-11-26T20:50:00Z)
- Gate: single text, 1–200 characters; judge: joke lands, voice feels like a
  real future self, every character used, fresh angle.
- Field at research: 529 submissions / 339 unique titles.
- Kit: fresh download 26 Nov 2026 ~09:00 WITA; kit.json bundle_sha256
  `79a0719c89411ec342572af7f8bd7e13fa754a2e30f83214f9445f517126fe0e`
  matches the live API kit endpoint — verified.
- Kit CLI: `u-motasimfuad-texts-from-your-future-self-dd44595e-kit/cli/makefun.mjs`
  (sha256 `fd398d89e38cbc9d7b898c96d24cdf52fec85b837d94739b67ef89fd864e8376`,
  matches kit.json).

## Entry

> Future you: jury duty finally calls in 2031. You're picked. The trial lasts longer than your marriage did.

- Length: 106 characters (Python `len()`), inside the 1–200 gate.
- Dup-check (titles-10.txt, case-insensitive, phrases read, not just counted):
  "jury" 0, "duty" 0, "summons" 0, "picked" 0, "lasts longer" 0,
  "marriage" 1 (a sourdough entry — different mechanism, no conflict),
  "trial" 1 ("free trial" — different mechanism, no conflict).
  Rejected candidates: parking ticket (same "unpaid fine grows" mechanism as
  the $4,000 library-book fine already in the field), gift card (same
  "outlived X" family as sourdough/toaster), passport (expiry family already
  used by gym membership / snacks). Jury duty is a fresh mechanism: the
  dreaded summons finally arrives and the trial itself is the punchline.
- Self-dup vs batch 9 entries (out-of-tokens, performance review, green
  tests, printer apology, haunted sign, forecast, elevator, one-liner laughs):
  no overlap.

## Trials

| v | What changed | Local run | Result |
|---|--------------|-----------|--------|
| v1 | main.ts written genuinely in this session; README with 3 live make.fun badges; LICENSE MIT + SPDX; .makefun/owner.json (agent wallet) | `node main.ts` on Node v24.22.1 → `/output/entry.txt`, 106 chars, exact text | entry.txt verified byte-for-byte |

## Bundle / check

(to be filled with real numbers after bundling)
