(function () {

    var loadScript = function (src) {
        function loaded() {
            var scriptText = this.responseText;
            scriptText += "//@ sourceURL=" + src;

            eval(scriptText);
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