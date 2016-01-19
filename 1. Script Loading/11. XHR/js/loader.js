(function () {
    'use strict';

    var loadScript = function (src) {
        function loaded() {
            var head = document.getElementsByTagName('head')[0],
                script = document.createElement('script'),
                scriptText = this.responseText;

            scriptText += "//@ sourceURL=" + src;
            script.text = scriptText;

            head.appendChild(script);
        }

        var request = new XMLHttpRequest();
        request.onload = loaded;
        request.open("GET", src, true);
        request.send();
    };

    loadScript('js/script1.js?delay=9000');
    loadScript('js/script2.js?delay=7000');
    loadScript('js/script3.js?delay=5000');
    loadScript('js/script4.js?delay=3000');
})();