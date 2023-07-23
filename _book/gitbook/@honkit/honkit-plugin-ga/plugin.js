require(["gitbook"], function (gitbook) {
    function addScript(url) {
        var script = document.createElement('script')
        script.src = url
        script.async = true
        document.head.append(script)
    }
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    // Load analytics.js
    gitbook.events.bind("start", function (e, config) {
        addScript("https://www.googletagmanager.com/gtag/js?id=" + config.ga.trackingID);
        gtag('js', new Date());
    });
    
    // Notify pageview
    gitbook.events.bind("page.change", function () {
        var state = gitbook.state
        var config = state.config.pluginsConfig
        // Always refer to the variable on window in case it gets overridden
        // elsewhere.
        console.log("page. change", gtag, config)
        gtag('config', config.ga.trackingID, {
            page_title: document.title,
            page_path: location.pathname,
        });
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: location.href,
            page_path: location.pathname,
        });
    });
});
