# Project memory

## Goal

Build a lightweight niri-native replacement for the screenshot-and-pin portion
of Flameshot, with annotation support and reliable multi-monitor behavior.

## Environment and decisions

- Target compositor: niri on Wayland.
- Do not use Flameshot's screenshot portal: niri's multi-output screenshot
  portal currently fails for this setup.
- Capture through `niri msg action screenshot`; niri writes the selected PNG to
  the Wayland clipboard.
- Read and write clipboard images through `wl-paste` and `wl-copy`. GTK's
  `Gdk.Clipboard.read_texture_async()` reported an empty clipboard in this
  environment even when `wl-paste` could read the PNG.
- UI stack: Python 3, GTK4/PyGObject, and Cairo. These are already installed.
- Application ID: `io.github.ashton.NiriPimg`.
- niri rules keep the window floating. The pin inherits the user's global
  window opacity.
- Primary shortcut: `Mod+Shift+S`.

## Interaction contract

- Capture, then pin automatically.
- View mode is the default: drag moves, wheel resizes, double-click behavior may
  be added later.
- `E` or right click toggles the editing toolbar.
- Editing should remain non-destructive until copied or saved.
- Preserve multiple simultaneous pin windows (`Gio.ApplicationFlags.NON_UNIQUE`).

## Current implementation

`niri-pimg` contains capture monitoring, pin windows, a Cairo annotation
canvas, pen/line/arrow/rectangle/text/mosaic/eraser tools, undo/redo, clipboard
copy, and timestamped PNG saving.

## Follow-up ideas

- Crop handles.
- Editable/selectable existing annotations.
- Config file for colors, shortcuts, and save path.
- Desktop entry and Arch package metadata.
- Tests for operation rendering and clipboard monitoring.
