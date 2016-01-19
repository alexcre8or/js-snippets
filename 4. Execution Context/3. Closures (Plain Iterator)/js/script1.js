(function () {
    'use strict';


    var array = [0, 1, 2];

    for (var i = 0; i < array.length; i++) {
        array[i] = function () {
            console.log(i);
        };
    }

    array[0]();
})();