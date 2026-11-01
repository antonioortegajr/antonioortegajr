#!/usr/bin/env bash
# The repo's checks. The gate runs this from the job's worktree.
# Must be non-interactive and must not rewrite tracked files.
set -euo pipefail

npm ci --prefer-offline --no-audit --no-fund
npm test -- --ci
npm run build
