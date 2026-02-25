(function () {
    // Overlapping sheets (Copy) and Checkmark (Success)
    var copyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    var successIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#28a745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

    function initCopyCodeButtons() {
        var root = document.querySelector(".page-inner .markdown-section") || document;
        var codeBlocks = root.querySelectorAll("pre");

        codeBlocks.forEach(function (codeBlock) {
            if (codeBlock.parentElement && codeBlock.parentElement.classList.contains("code-wrapper")) return;

            var copyButton = document.createElement("button");
            copyButton.className = "copy-code-button";
            copyButton.type = "button";
            copyButton.ariaLabel = "Copy code";
            copyButton.innerHTML = copyIcon;

            var container = document.createElement("div");
            container.className = "code-wrapper";
            codeBlock.parentNode.insertBefore(container, codeBlock);
            container.appendChild(codeBlock);
            container.appendChild(copyButton);

            copyButton.addEventListener("click", function () {
                var code = codeBlock.querySelector("code") || codeBlock;
                var text = code.innerText;

                function showSuccess() {
                    copyButton.innerHTML = successIcon;
                    copyButton.classList.add("success");
                    setTimeout(function () {
                        copyButton.innerHTML = copyIcon;
                        copyButton.classList.remove("success");
                    }, 2000);
                }

                if (!navigator.clipboard || !navigator.clipboard.writeText) {
                    var textarea = document.createElement("textarea");
                    textarea.value = text;
                    textarea.style.position = "fixed";
                    textarea.style.left = "-9999px";
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        document.execCommand("copy");
                        showSuccess();
                    } catch (e) {
                        console.error("Could not copy text", e);
                    } finally {
                        document.body.removeChild(textarea);
                    }
                    return;
                }

                navigator.clipboard.writeText(text).then(showSuccess);
            });
        });
    }

    function scheduleInit() {
        initCopyCodeButtons();
        setTimeout(initCopyCodeButtons, 150);
    }

    document.addEventListener("DOMContentLoaded", scheduleInit);
    if (window.gitbook && window.gitbook.events) {
        window.gitbook.events.on("page.change", scheduleInit);
    }
    scheduleInit();
})();