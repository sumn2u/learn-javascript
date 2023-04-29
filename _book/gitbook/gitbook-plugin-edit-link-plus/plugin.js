require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind('start', function(e, config) {
        var conf = config['edit-link-plus'];
        var base = conf.base;
        var defaultBase = conf.defaultBase;
        var label = conf.label;
        
        // Select the current environment from the supported multiple environments
        if (typeof base === 'object') {
            var currentDomain = location.hostname;
            $.each(base, function(domain, source) {
                if (currentDomain == domain) {
                    base = source;
                    return false;
                }
            });
        }
        // When the source path is not set in the current environment
        if (typeof base === 'object' || !base) {
            base = defaultBase;
        }
        // Add slash at the end if not present
        if (typeof base === 'string') {
            if (base.slice(-1) != "/") {
                base = base + "/";
            }
        }

        // Adjust label and lang because label can be a unique string for multi-languages site
        var lang = gitbook.state.innerLanguage;
        if (lang) {
            if (typeof label === 'object') label = label[lang];
            lang = lang + '/';
        }

        // Add edit toolbar to left
        if (typeof base === 'string' && typeof label === 'string') {
            gitbook.toolbar.createButton({
                icon: 'fa fa-edit',
                text: label,
                onClick: function() {
                    var filepath = gitbook.state.filepath;
                    window.open(base + lang + filepath);
                }
            });
        }
    });
});