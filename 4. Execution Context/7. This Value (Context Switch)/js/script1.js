(function() {
    //'use strict';

    window.name = "window";


    var object = {
        name: "object",

        action: function(greeting) {
            var nestedAction = function (greeting) {
                console.log(greeting + " " + this.name);
            };

            nestedAction(greeting);
        }
    };

    object.action("hello");
})();