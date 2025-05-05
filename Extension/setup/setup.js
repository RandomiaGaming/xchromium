(() => {
    if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            init()
        });
    } else {
        init();
    }

    function init() {
        document.querySelectorAll("a").forEach(link => {
            link.setAttribute("target", "_blank");
            if (link.href.startsWith("chrome://")) {
                const onclick = (event) => {
                    event.preventDefault();
                    chrome.runtime.sendMessage({ type: "privlink", url: link.href });
                }
                link.addEventListener("click", onclick);
                link.addEventListener("auxclick", onclick);
            }
        });
    }
})();