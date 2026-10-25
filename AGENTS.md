# AGENTS.md

Guidance for AI agents working in this repo.

## Project

Personal website for Antonio Ortega Jr. It is a Next.js site (React 18, pages router), exported statically and deployed to GitHub Pages.

- `pages/`: routes (`index.js`, `404.js`, `_app.js`, `_document.js`)
- `components/`: React components
- `styles/`, `public/`: CSS and static assets
- `tests/__tests__/`: Jest + React Testing Library tests
- `docs/`: site docs (`thisSite.md`, `offline-mode.md`, `github-pages-deployment.md`)
- `.github/workflows/nextjs.yml`: builds and deploys to Pages on every push to `main`

## Commands

```sh
npm ci          # install
npm run dev     # local dev server
npm test        # run Jest tests
npm run build   # production build (this is what CI runs)
```

Run `npm test` and `npm run build` before you open a PR.

## Roles

Work is split between two agents:

| Agent | Role | Writes code? |
|---|---|---|
| **Claude Code** | Manager: plans work, writes issues, reviews PRs | **No** |
| **OpenCode CLI** (on this machine) | Implementer: reads an issue, writes the code, opens a PR | Yes |

Claude Code does not edit application code, push branches, or open implementation PRs. Its output is GitHub issues and PR reviews. The only files it edits directly are repo docs like this one, and only when asked.

## Feature / fix workflow

1. **Scope.** Claude talks the request through with the user and breaks it into one issue per PR-sized change.
2. **Write the ticket.** Claude creates the issue with `gh issue create --label agent:queued`. The body must stand on its own, since OpenCode has no chat context:
   - The goal and the reason for it
   - The exact files, components, or lines involved, plus any error text
   - Acceptance criteria
   - Verify commands (`npm test`, `npm run build`, manual checks)
   - What is out of scope, with links to related issues so work doesn't overlap
3. **Implement.** OpenCode picks up the issue: either the local agent pipeline grabs `agent:queued` issues, or Claude runs `/opencode-issue <n>`. OpenCode works on a branch named `agent/issue-<n>` and opens a PR that says `Closes #<n>`.
4. **Review.** Claude reads the PR with `gh pr view` and `gh pr diff` and checks it against the issue's acceptance criteria. Claude looks for correctness, unrelated changes, missing tests, and build or test failures.
   - If the PR is clean, Claude tells the user it's ready to merge.
   - If it needs changes, Claude leaves specific review comments and/or updates the issue so OpenCode can be re-run.
5. **Merge.** Only the user merges. Agents never merge PRs or push to `main`.

If a fix or improvement comes up during review that is out of scope, Claude files it as a new `agent:queued` issue instead of growing the current PR.

## Labels

| Label | Meaning |
|---|---|
| `agent:queued` | Ready for the implementing agent to pick up |
| `agent:opencode` | Route this issue to OpenCode specifically |
| `agent:done` | Agent opened a draft PR; awaiting review |
| `agent:failed` | Agent couldn't finish; no PR was opened |

Issues without `agent:queued` are not picked up.

## Git conventions

- Default branch: `main` (PRs target `main`)
- Agent branches: `agent/issue-<n>`
- Keep each PR to one issue
