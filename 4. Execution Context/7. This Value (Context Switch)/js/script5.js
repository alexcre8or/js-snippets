(function () {
    'use strict';

    var f = function (a, b, c) {
        console.log(this);
        console.log(a + b + c);
    };

    var boundF = Function.prototype.apply.bind(f, window);
    boundF([1, 2, 3]);

})();