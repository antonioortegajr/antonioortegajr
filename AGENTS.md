# AGENTS.md

Guidance for AI agents working in this repo.

## Project

Personal website for Antonio Ortega Jr. It is a Next.js site (React 18, pages router), exported statically and deployed to GitHub Pages.

- `pages/`: routes (`index.js`, `404.js`, `_app.js`, `_document.js`)
- `components/`: React components
- `styles/`, `public/`: CSS and static assets
- `tests/__tests__/`: Jest + React Testing Library tests
- `docs/`: site docs (`thisSite.md`, `offline-mode.md`, `github-pages-deployment.md`, `factory.md`)
- `factory/`: feature factory (`bin/build`, `bin/gate`, `checks.sh`, `prompts/`, `config.json`). `factory/jobs/` is gitignored runtime state
- `.claude/`: Claude Code skill (`skills/factory/`) and subagent (`agents/pr-reviewer.md`)
- `.github/workflows/nextjs.yml`: builds and deploys to Pages on every push to `main`

## Commands

```sh
npm ci          # install
npm run dev     # local dev server
npm test        # run Jest tests
npm run build   # production build (this is what CI runs)
```

Factory commands (run in Claude Code):

```sh
/factory run            # build every agent:queued issue, oldest first
/factory issue <n>      # build one issue, queued or not
/factory <feature>      # scope a request, write the issue, offer to build it
/factory rework <n>     # send PR review comments back to OpenCode
/factory clean          # remove worktrees and job folders of closed issues
```

Run `npm test` and `npm run build` before you open a PR.

## Roles

Work is split between two agents:

| Agent | Role | Writes code? |
|---|---|---|
| **Claude Code** | Manager: plans work, writes issues, runs the factory, reviews PRs | **No** |
| **OpenCode CLI** (on this machine) | Implementer: reads an issue and writes the code | Yes |

Claude Code does not write application code. It runs the factory, which pushes OpenCode's `agent/issue-<n>` branches and opens draft PRs for them. Claude never pushes to `main` and never merges. Its output is GitHub issues and PR reviews. The only files it edits directly are repo docs like this one, and only when asked.

## Feature / fix workflow

1. **Scope.** Claude talks the request through with the user and breaks it into one issue per PR-sized change.
2. **Write the ticket.** Claude creates the issue with a type label (`enhancement`, `bug` or `documentation`) and **without** `agent:queued`. The Pi 5 background pipeline is offline, so `agent:queued` is only added when the user asks for it. The body must stand on its own, since OpenCode has no chat context:
   - The goal and the reason for it
   - The exact files, components, or lines involved, plus any error text
   - Acceptance criteria
   - Verify commands (`npm test`, `npm run build`, manual checks)
   - What is out of scope, with links to related issues so work doesn't overlap
3. **Build.** `/factory issue <n>` (any issue, queued or not), or `/factory run` for everything the user has labeled `agent:queued` (oldest first). `factory/bin/build` runs OpenCode in a worktree at `../antonioortegajr-factory/issue-<n>` on `agent/issue-<n>`.
4. **Gate + review.** `factory/bin/gate` runs `factory/checks.sh` (`npm ci`, `npm test -- --ci`, `npm run build`) and rejects edits to protected paths. Failures go back to OpenCode with the log. Once the gate passes, the branch is pushed, a draft PR (`Closes #<n>`) is opened, and the `pr-reviewer` subagent reviews it. CHANGES go back to OpenCode. There are at most 3 rounds in total. PASS → PR marked ready and labeled `agent:done`. Rounds exhausted → `agent:failed`.
5. **Merge.** Only the user merges. Agents never merge PRs or push to `main`.

`/factory rework <n>` sends your PR review comments back to OpenCode, and `/factory clean` removes worktrees and job folders of closed issues.

See `docs/factory.md` for the full how-to.

If a fix or improvement comes up during review that is out of scope, Claude files it as a new issue instead of growing the current PR.

## Labels

| Label | Meaning |
|---|---|
| `agent:queued` | Queued for automatic pickup (`/factory run` or the Pi 5 pipeline). Only added when the user asks; the Pi 5 pipeline is currently offline |
| `agent:opencode` | Route this issue to OpenCode specifically |
| `agent:building` | The factory is working on it (claimed) |
| `agent:done` | PR is ready and passed review |
| `agent:failed` | Agent couldn't finish; no ready PR |

Issues without `agent:queued` are only built when someone runs `/factory issue <n>`.

## Git conventions

- Default branch: `main` (PRs target `main`)
- Agent branches: `agent/issue-<n>`
- Keep each PR to one issue
