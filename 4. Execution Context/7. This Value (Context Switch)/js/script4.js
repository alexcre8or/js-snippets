(function () {
    //'use strict';

    window.name = "window";


    var object = (function() {

        var self = {
            name: "object",

            action: function(greeting) {
                var nestedAction = function(greeting) {
                    console.log(greeting + " " + self.name);
                };

                nestedAction(greeting);
            }
        };

        return self;
    })();

    object.action("hello");
})();