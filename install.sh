#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
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

for command in python3 wl-paste wl-copy niri; do
    if ! command -v "$command" >/dev/null 2>&1; then
        echo "niri-pimg: missing dependency: $command" >&2
        exit 1
    fi
done

if ! python3 -c 'import cairo, gi; gi.require_version("Gtk", "4.0")' 2>/dev/null; then
    echo "niri-pimg: missing Python GTK4/PyGObject or pycairo" >&2
    exit 1
fi

install -Dm755 "$project_dir/niri-pimg" "$prefix/bin/niri-pimg"

echo "Installed niri-pimg to $prefix/bin/niri-pimg"
if [[ ":${PATH}:" != *":$prefix/bin:"* ]]; then
    echo "Add $prefix/bin to PATH, or use the absolute path in your niri config."
fi
echo "Copy the rules from $project_dir/niri/integration.kdl into your niri config."
