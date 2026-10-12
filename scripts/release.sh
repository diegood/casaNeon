#!/bin/sh
# Release a version: scripts/release.sh 1.18.0
# Needs a "## 1.18.0" section in CHANGELOG.md (it may still be uncommitted). Sets the version in
# manifest.json, commits (the pre-commit hooks build and check), tags v1.18.0 and pushes; the Release
# workflow then publishes the GitHub release with that changelog section and neonplan3d.zip for HACS.
set -e
version="$1"
case "$version" in
  [0-9]*.[0-9]*.[0-9]*) ;;
  *) echo "usage: scripts/release.sh X.Y.Z" >&2; exit 1 ;;
esac
cd "$(git rev-parse --show-toplevel)"
[ "$(git branch --show-current)" = main ] || { echo "not on main" >&2; exit 1; }
grep -q "^## $version\$" CHANGELOG.md || { echo "CHANGELOG.md has no '## $version' section" >&2; exit 1; }
git rev-parse -q --verify "refs/tags/v$version" >/dev/null && { echo "tag v$version exists" >&2; exit 1; }
if ! git diff --quiet HEAD -- . ':!CHANGELOG.md' ':!custom_components/neonplan3d/frontend' || [ -n "$(git ls-files --others --exclude-standard)" ]; then
  echo "commit or stash other changes first" >&2
  exit 1
fi
python3 - "$version" <<'PY'
import json, re, sys
path = "custom_components/neonplan3d/manifest.json"
text = open(path).read()
new = re.sub(r'"version": "[^"]*"', f'"version": "{sys.argv[1]}"', text, count=1)
open(path, "w").write(new)
json.loads(new)
PY
git add CHANGELOG.md custom_components/neonplan3d/manifest.json
git commit -m "$version" ${RELEASE_TRAILER:+-m "$RELEASE_TRAILER"}
git tag "v$version"
git push origin main "v$version"
echo "v$version pushed: the Release workflow publishes it for HACS."
