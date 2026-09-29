---
title: BanglaBench
year: 2026
summary: A leaderboard for how language models handle Bengali, scored directly in Bengali instead of through translation.
repo: https://github.com/nissandutta31-maker/bangla-bench
tags: [LLM evaluation, Bengali, benchmarks]
featured: true
order: 1
---

Most multilingual evaluations quietly translate the test set into English, or
score model answers after translating them back. That hides exactly the failures
worth measuring. BanglaBench keeps everything in Bengali: prompts, answers and
scoring.

The first version runs **Belebele** reading comprehension across GPT, Claude,
DeepSeek and Llama.

<!-- TODO: add the headline result, a results table or chart, and what's next. -->
