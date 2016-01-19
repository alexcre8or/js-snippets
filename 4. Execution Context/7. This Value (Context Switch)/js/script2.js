(function () {
    //'use strict';

    window.name = "window";


    var object = {
        name: "object",

        action: function (greeting) {
            var nestedAction = function (greeting) {
                console.log(greeting + " " + this.name);
            };

            nestedAction.call(this, greeting);
            nestedAction.apply(this, [greeting]);

            var boundNestedAction =
                nestedAction.bind(this, greeting);

            boundNestedAction();
        }
    };

    object.action("hello");
})();