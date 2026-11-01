You are continuing work on GitHub issue #{{ISSUE}} on branch `{{BRANCH}}` (round {{ROUND}}). Earlier rounds already committed work on this branch. Run `git log --oneline origin/main..HEAD` and read the diff first.

The attached feedback file is either a failed gate report (a test/build log or protected-path violations) or a code review with VERDICT: CHANGES. Fix every item in it. If a finding is wrong, don't change the code for it. Explain why in your commit message.

All rules from round 1 still apply: follow AGENTS.md, stay in scope, keep tests passing (`npm test`, `npm run build`), make no suite-wide snapshot updates, don't touch factory/, .claude/, .github/workflows/, AGENTS.md, or CLAUDE.md, commit explicit paths, and leave the tree clean. Do NOT push, open a PR, or switch branches.
