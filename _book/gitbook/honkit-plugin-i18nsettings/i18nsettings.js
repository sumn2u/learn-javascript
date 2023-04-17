require(['gitbook', 'jquery'], function(gitbook, $) {
    // Configuration
    var BUTTON_ID;

    // Current i18nsettings state
    var i18nState;

    // Default languages
    var LANGUAGES = [
        {
            config: 'en',
            text: 'English'
        }
    ];

    // Return configured languages
    function getLanguages() {
        return LANGUAGES;
    }

    // Modify configured languages
    function setLanguages(languages) {
        LANGUAGES = languages;
        updateButtons();
    }

    // Save current language settings
    function savei18nsettings() {
        gitbook.storage.set('i18nState', i18nState);
    }

    // Change language
    function changeLanguage(configName, e) {
        if (e && e instanceof Event) {
            e.preventDefault();
        }

        i18nState.language = configName;
        savei18nsettings();
    }

    function init(config) {
        // Instantiate language object
        i18nState = gitbook.storage.get('i18nState', {
            language: config.language,
            languages: config.languages
        });
        setLanguages(config.languages);
    }

    function updateButtons() {
        // Remove existing i18nsettings buttons
        if (!!BUTTON_ID) {
            gitbook.toolbar.removeButton(BUTTON_ID);
        }

        // Create buttons in toolbar
        BUTTON_ID = gitbook.toolbar.createButton({
            icon: 'fa fa-language',
            label: 'Language Settings',
            className: 'i18n-settings',
            dropdown: $.map(LANGUAGES, function(language) {
                language.onClick = function(e) {
                    changeLanguage(language.config, e);
                    window.location.href = location.pathname.replace(
                        new RegExp(
                            '/(' +
                            $.map(LANGUAGES, function(language){
                                return language.config;
                            }).join('|') +
                            ')'
                        ), '/' + language.config);
                    return;
                };

                return language;
            })
        });
    }

    // Init configuration at start
    gitbook.events.bind('start', function(e, config) {
        var opts = config.i18nsettings;

        // Generate buttons at start
        updateButtons();

        // Init current settings
        init(opts);
    });

    // Expose API
    gitbook.i18nsettings = {
        setLanguage:      changeLanguage,
        getLanguages:     getLanguages,
        setLanguages:     setLanguages
    };
});


