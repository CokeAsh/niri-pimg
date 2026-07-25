# niri-pimg

A small native Wayland screenshot pin and annotation tool built for niri.

## Install

On Arch Linux, install the runtime dependencies:

```sh
sudo pacman -S --needed python python-gobject gtk4 python-cairo wl-clipboard niri
```

### Single-file download

Download the `niri-pimg` file, make it executable, and run it:

```sh
chmod +x niri-pimg
./niri-pimg --capture
```

You can optionally place it somewhere on `PATH`:

```sh
install -Dm755 niri-pimg ~/.local/bin/niri-pimg
```

No niri configuration is changed. Configure a shortcut yourself if desired.

### Repository install

Alternatively, clone the repository and run the user-level installer:

```sh
git clone <repository-url> niri-pimg
cd niri-pimg
./install.sh
```

The default destination is `~/.local/bin/niri-pimg`. A custom absolute prefix
is also supported:

```sh
./install.sh --prefix /opt/niri-pimg
```

The installer checks dependencies and installs the executable only. It does not
modify your niri configuration.

## Usage

- `niri-pimg --capture`: open niri's region selector and automatically pin the result.
- `niri-pimg`: pin the PNG image currently in the Wayland clipboard.
- `E` or right click: toggle editing.
- Drag in view mode: move the pin.
- Mouse wheel in view mode: resize.
- `Ctrl+Z` / `Ctrl+Shift+Z`: undo / redo.
- `Ctrl+C`: copy the edited image.
- `Ctrl+S`: save to `~/Pictures/Screenshots/`.
- `Esc`: leave editing or close the pin.

Editing tools: pen, line, arrow, rectangle, text, mosaic, and eraser.

## Dependencies

Python, PyGObject/GTK4, pycairo, `wl-clipboard`, and niri.

## niri integration

Copy the rules from `niri/integration.kdl` into your niri configuration. The
shortcut uses:

```kdl
Mod+Shift+S { spawn "/home/ashton/.local/bin/niri-pimg" "--capture"; }
```

Change the path if you used a custom prefix, then reload niri's configuration:

```sh
niri msg action load-config-file
```

## Upgrade

Pull the latest source and run the installer again:

```sh
git pull
./install.sh
```

## Uninstall

```sh
./uninstall.sh
```

For a custom installation prefix, pass the same prefix used during installation:

```sh
./uninstall.sh --prefix /opt/niri-pimg
```

The uninstaller removes only the installed executable. Remove any niri rules
you copied into your configuration separately.

## License

MIT
