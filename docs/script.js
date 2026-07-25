const translations = {
  zh: {
    "nav.features": "功能", "nav.install": "安装", "nav.controls": "操作",
    "hero.eyebrow": "为 niri 原生打造", "hero.line1": "截图。", "hero.line2": "钉住。完成。",
    "hero.lead": "一个轻量、快速的截图置顶与标注工具。专为 niri 和 Wayland 设计，不绕路，不打扰。",
    "hero.install": "立即安装", "hero.aur": "在 AUR 查看",
    "features.kicker": "小而强大", "features.title": "只做你真正需要的事",
    "features.lead": "从选区到置顶，只需一次动作。需要时再编辑，不需要时安静悬浮。",
    "features.capture.title": "niri 原生截图", "features.capture.body": "直接调用 niri 的选区截图能力，在多显示器环境中保持可靠。",
    "features.pin.title": "立即置顶", "features.pin.body": "选区完成后自动创建浮动窗口。拖动移动，滚轮调整大小。",
    "features.annotate.title": "非破坏标注", "features.annotate.body": "画笔、直线、箭头、矩形、文字、马赛克和橡皮擦一应俱全。",
    "features.multi.title": "多个 Pin 共存", "features.multi.body": "每个截图都是独立窗口，随时保留多个参考画面。",
    "workflow.kicker": "顺畅工作流", "workflow.title": "三步，不打断思路",
    "workflow.one.title": "选取", "workflow.one.body": "按下快捷键，在任意输出上框选内容。",
    "workflow.two.title": "置顶", "workflow.two.body": "图片自动浮在桌面上，拖到你需要的位置。",
    "workflow.three.title": "标注", "workflow.three.body": "按 E 编辑，完成后复制或保存。",
    "install.kicker": "开始使用", "install.title": "一分钟安装",
    "install.body": "Arch Linux 用户可以直接从 AUR 安装。程序不会自动修改你的 niri 配置。",
    "install.other": "查看其他安装方式", "install.copy": "复制", "install.copied": "已复制",
    "install.configLabel": "添加到 niri 配置：",
    "controls.kicker": "快速上手", "controls.title": "操作自然，快捷直接",
    "controls.drag": "移动 Pin", "controls.wheel": "调整大小", "controls.edit": "切换编辑",
    "controls.copy": "复制图片", "controls.save": "保存 PNG", "controls.close": "退出或关闭",
    "cta.kicker": "保持专注", "cta.title": "让截图留在眼前，<br>而不是打断工作。",
    "cta.note": "如果 niri-pimg 对你有帮助，欢迎在 GitHub 点一个 Star，让更多 niri 用户发现它。",
    "cta.star": "在 GitHub 点 Star", "cta.button": "从 AUR 安装",
    "footer.text": "为 niri 社区用心打造 · MIT License"
  },
  en: {
    "nav.features": "Features", "nav.install": "Install", "nav.controls": "Controls",
    "hero.eyebrow": "Built natively for niri", "hero.line1": "Capture.", "hero.line2": "Pin. Done.",
    "hero.lead": "A lightweight, fast screenshot pinning and annotation tool. Designed for niri and Wayland, with no detours and no distractions.",
    "hero.install": "Install now", "hero.aur": "View on AUR",
    "features.kicker": "Small but capable", "features.title": "Only what you actually need",
    "features.lead": "Go from selection to pinned image in one action. Edit when needed; stay quietly on top when not.",
    "features.capture.title": "Native niri capture", "features.capture.body": "Uses niri's region capture directly for reliable behavior across multiple outputs.",
    "features.pin.title": "Instant pinning", "features.pin.body": "A floating window appears after selection. Drag to move and scroll to resize.",
    "features.annotate.title": "Non-destructive markup", "features.annotate.body": "Pen, line, arrow, rectangle, text, mosaic, and eraser tools are all included.",
    "features.multi.title": "Multiple pins", "features.multi.body": "Every capture is an independent window, so you can keep several references visible.",
    "workflow.kicker": "Smooth workflow", "workflow.title": "Three steps. Stay in flow.",
    "workflow.one.title": "Select", "workflow.one.body": "Press your shortcut and select a region on any output.",
    "workflow.two.title": "Pin", "workflow.two.body": "The image floats on your desktop. Drag it wherever you need.",
    "workflow.three.title": "Annotate", "workflow.three.body": "Press E to edit, then copy or save when finished.",
    "install.kicker": "Get started", "install.title": "Install in a minute",
    "install.body": "Arch Linux users can install directly from the AUR. The app never edits your niri configuration.",
    "install.other": "See other install options", "install.copy": "Copy", "install.copied": "Copied",
    "install.configLabel": "Add to your niri config:",
    "controls.kicker": "Quick start", "controls.title": "Natural controls, direct shortcuts",
    "controls.drag": "Move pin", "controls.wheel": "Resize", "controls.edit": "Toggle editing",
    "controls.copy": "Copy image", "controls.save": "Save PNG", "controls.close": "Exit or close",
    "cta.kicker": "Stay focused", "cta.title": "Keep the capture in sight,<br>not in your way.",
    "cta.note": "If niri-pimg helps you, leave a Star on GitHub and help more niri users discover it.",
    "cta.star": "Star on GitHub", "cta.button": "Install from AUR",
    "footer.text": "Crafted for the niri community · MIT License"
  }
};

const languageButton = document.querySelector(".lang-toggle");
const copyButton = document.querySelector(".copy-button");

function setLanguage(language) {
  const lang = translations[language] ? language : "en";
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[lang][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-lang-option]").forEach((element) => {
    element.classList.toggle("active", element.dataset.langOption === lang);
  });
  localStorage.setItem("niri-pimg-language", lang);
}

languageButton.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang.startsWith("zh") ? "en" : "zh";
  setLanguage(nextLanguage);
});

copyButton.addEventListener("click", async () => {
  const language = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copy);
    copyButton.querySelector("span").textContent = translations[language]["install.copied"];
    window.setTimeout(() => {
      copyButton.querySelector("span").textContent = translations[language]["install.copy"];
    }, 1500);
  } catch {
    window.getSelection()?.selectAllChildren(copyButton.closest(".terminal").querySelector("code"));
  }
});

const savedLanguage = localStorage.getItem("niri-pimg-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
setLanguage(requestedLanguage || savedLanguage || browserLanguage);
