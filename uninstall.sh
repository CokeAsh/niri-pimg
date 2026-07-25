#!/usr/bin/env bash
set -euo pipefail

prefix="${HOME}/.local"

if [[ $# -gt 0 ]]; then
    if [[ $# -ne 2 || "$1" != "--prefix" ]]; then
        echo "Usage: $0 [--prefix /absolute/path]" >&2
        exit 2
    fi
    prefix="$2"
fi

if [[ "$prefix" != /* ]]; then
    echo "niri-pimg: --prefix must be an absolute path" >&2
    exit 2
fi

target="$prefix/bin/niri-pimg"
if [[ -e "$target" || -L "$target" ]]; then
    rm -- "$target"
    echo "Removed $target"
else
    echo "niri-pimg is not installed at $target"
fi

echo "The installer never edits niri configuration; remove copied rules manually if needed."
