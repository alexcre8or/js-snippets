(function () {
    'use strict';


    var array = [0, 1, 2];

    for (var i = 0; i < array.length; i++) {
        (function (i) {
            array[i] = function () {
                console.log(i);
            };
        })(i);
    }

    array[0](); // 0

})();