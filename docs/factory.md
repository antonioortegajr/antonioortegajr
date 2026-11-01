# Factory

The factory turns a labeled GitHub issue into a reviewed draft PR without a human writing code. Claude Code orchestrates, OpenCode implements in an isolated worktree, `factory/bin/gate` decides whether the change is acceptable, and the `pr-reviewer` subagent judges it. You merge.

```
issue → bin/build (OpenCode) → bin/gate (npm ci/test/build, protected paths)
     FAIL → OpenCode fix round ┘   PASS → push, draft PR → pr-reviewer (Claude, sonnet)
     CHANGES → OpenCode fix round → gate …     PASS → PR ready, agent:done → you merge
```

## Who does what

| Who | Does |
|---|---|
| Claude Code | Scopes and writes issues, runs the loop, pushes branches, opens draft PRs, runs one review per round. Never writes code, pushes to `main`, or merges. |
| OpenCode | Writes all application code and tests, commits explicit paths, leaves the tree clean. Never pushes or opens PRs. |
| Scripts | `factory/bin/build` sets up the worktree and runs OpenCode. `factory/bin/gate` runs `factory/checks.sh` and the protected-path check. |
| You | Talk through the request, approve the issue, merge the PR. |

## Commands (in Claude Code)

- `/factory run` — build the issues the user has labeled `agent:queued`, oldest first.
- `/factory issue <n>` — build one issue, queued or not.
- `/factory <feature>` — scope the request, write the issue, offer to build it.
- `/factory rework <n>` — send your PR review comments back to OpenCode.
- `/factory clean` — remove worktrees and job folders of closed issues.

Issues are created without `agent:queued`, because the Pi 5 pipeline is offline. Use `/factory issue <n>`.

Under the hood: `factory/bin/build <n> <round>` (add `--fix <file>` for later rounds) and `factory/bin/gate <n> <round>`. `factory/checks.sh` runs `npm ci`, `npm test -- --ci`, and `npm run build`.

## Files

Each job lives in `factory/jobs/issue-<n>/` (gitignored), with `issue.md` and one `round-<r>/` per round. A round folder holds:

| File | What it is |
|---|---|
| `prompt.md` | The rendered prompt sent to OpenCode (`prompts/build.md` or `prompts/fix.md`). |
| `opencode.log` | OpenCode's output for the round. |
| `build.md` | `BUILD: DONE` or `BUILD: FAILED`, the reason, and the round's commits. |
| `checks.log` | Output of `factory/checks.sh` from the gate. |
| `gate.md` | `GATE: PASS` or `GATE: FAIL`, with reasons and a log tail. |
| `review.md` | The reviewer's `VERDICT: PASS` or `VERDICT: CHANGES` report. |

Worktrees live at `../antonioortegajr-factory/issue-<n>` on branch `agent/issue-<n>`.

## Config

`factory/config.json` keys:

| Key | Meaning |
|---|---|
| `base_branch` | Branch jobs start from and PRs target (`main`). |
| `max_rounds` | Build/gate/review rounds allowed before a job is marked failed (`3`). |
| `branch_prefix` | Prefix for job branches (`agent/issue-`). |
| `worktree_root` | Where worktrees are created (`../antonioortegajr-factory`). |
| `labels` | Label names for `queued`, `building`, `done`, and `failed`. |
| `protected_paths` | Paths a job may not change: `factory/`, `.claude/`, `.github/workflows/`, `AGENTS.md`, `CLAUDE.md`. |
| `opencode_model` | Optional model override for OpenCode; empty means its default. |

Protected paths keep a branch from changing the checks it is judged by, the prompts, the workflow, or the agent rules.

## Stopping and recovering

Interrupt Claude to stop. Issues left at `agent:building` are interrupted jobs: the next `/factory run` offers to resume each one from its highest round, rebuild or continue from the gate as the job folder shows. `/factory clean` clears worktrees and job folders for issues that are already closed.

Inspired by the ideas in zazencodes' software factory (https://github.com/zazencodes/zazencodes-season-3/tree/main/src/software-factory-claude-code). No code from it is used.
