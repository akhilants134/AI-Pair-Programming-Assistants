# Comparing Vibe Coding Tools and AI Pair Programming

This repository contains the same Task Manager app implemented in two different ways for Challenge #4:

1. Vibe coding workflow in `vibe-version`
2. AI pair programming workflow in `pair-version`

The goal is not to find one universal winner. The goal is to measure tradeoffs across speed, control, code quality, explainability, and editability.

## App Spec Followed

Both versions implement the same required features from `app-spec.md`:

1. Add a task by title.
2. Mark a task complete.
3. Filter tasks by All / Active / Completed.
4. Show dynamic remaining task count.

## Tools Used

- Vibe tool used: Lovable (replace if you used v0 or Google AI Studio Build)
- Pair tool used: GitHub Copilot

## Comparison Table

Replace timing and suggestion metrics with your actual numbers from your build session.

| Dimension      | Vibe Version (tool used) | Pair Version (tool used) | Verdict |
| -------------- | ------------------------ | ------------------------ | ------- |
| Speed          |                          |                          |         |
| Control        |                          |                          |         |
| Code Quality   |                          |                          |         |
| Explainability |                          |                          |         |
| Editability    |                          |                          |         |

## Evidence Notes

- Pair core file line count: 124 lines (`pair-version/src/App.jsx`).
- Vibe core behavior spread across:
  - 76 lines (`vibe-version/project/src/pages/Index.jsx`)
  - 72 lines (`vibe-version/project/src/components/TaskInput.jsx`)
  - 87 lines (`vibe-version/project/src/components/TaskList.jsx`)
  - 24 lines (`vibe-version/project/src/components/TaskFilters.jsx`)

## When I Would Use Each Tool

Vibe coding tool for: rapid concept demos or visual exploration, because it produced a full, styled app structure quickly with many ready-made components.

AI pair programming for: production-bound or change-heavy work, because I can trace logic quickly and modify behavior in fewer files.

## Submission Links

- GitHub PR URL: https://github.com/REPLACE/REPLACE/pull/REPLACE
- Video Explanation URL:

## Final Pre-Submission Checklist

1. Both folders exist and run:
   - `pair-version`
   - `vibe-version`
2. Both live links are added above and open publicly.
3. Comparison table has real timings and specific observations from your own run.
4. PR is public and includes this README.
5. Video is 2-3 minutes, publicly viewable, and shows both apps live.
