(function () {
    'use strict';

    var loadScript = function (src, async, defer) {
        var script = document.createElement('script'),
            head = document.getElementsByTagName('head')[0];

        if (typeof async !== 'undefined') {
            script.async = async;
        }

        if (defer) {
            script.defer = 'defer';
        }

        script.src = src;

        head.appendChild(script);
    };

    loadScript('js/script1.js?delay=9000');
    loadScript('js/script2.js?delay=7000');
    loadScript('js/script3.js?delay=5000');
    loadScript('js/script4.js?delay=3000');

})();