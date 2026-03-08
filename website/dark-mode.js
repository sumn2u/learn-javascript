(function () {

    function applyStoredTheme() {
        var savedTheme = localStorage.getItem("theme");
        var shouldUseDark =
            savedTheme === "dark" ||
            (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);

        document.documentElement.classList.toggle("dark-mode", shouldUseDark);
    }

    function bindDarkModeToggle() {
        var toggle = document.getElementById("dark-mode-toggle");

        if (!toggle || toggle.dataset.darkModeBound === "true") {
            return;
        }

        toggle.dataset.darkModeBound = "true";

        toggle.addEventListener("click", function () {
            var isDark = document.documentElement.classList.toggle("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }

    function initDarkMode() {
        applyStoredTheme();
        bindDarkModeToggle();
    }

    initDarkMode();

    document.addEventListener("DOMContentLoaded", initDarkMode);

    if (typeof gitbook !== "undefined" && gitbook.events && gitbook.events.bind) {
        gitbook.events.bind("page.change", initDarkMode);
    }
})();