#!/bin/sh
# pre-commit: build the bundles (with their size budgets) and stage them, so a commit never carries stale ones.
set -e
cd "$(git rev-parse --show-toplevel)"
npm --prefix frontend run build >/dev/null
git add custom_components/neonplan3d/frontend
