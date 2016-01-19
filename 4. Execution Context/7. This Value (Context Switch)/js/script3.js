(function () {
    //'use strict';

    window.name = "window";


    var object = {
        name: "object",

        action: function (greeting) {
            var self = this;

            var nestedAction = function (greeting) {
                console.log(greeting + " " + self.name);
            };

            nestedAction(greeting);
        }
    };

    object.action("hello");
})();