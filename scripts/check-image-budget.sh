#!/usr/bin/env bash
# Fails when any image under assets/ is larger than the budget (default 400 KB).
set -euo pipefail
BUDGET_KB="${1:-400}"
cd "$(dirname "$0")/.."
over=$(find assets -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.webp' -o -iname '*.gif' -o -iname '*.avif' -o -iname '*.svg' \) -size +"${BUDGET_KB}"k -exec ls -l {} \; | awk '{printf "  %s bytes  %s\n", $5, $9}')
if [ -n "$over" ]; then
  echo "Images over ${BUDGET_KB} KB:"
  echo "$over"
  exit 1
fi
echo "Image budget OK (every file under assets/ is at most ${BUDGET_KB} KB)"
