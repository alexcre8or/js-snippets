var functionCode = (function () {
    var f = function () {
        var e = eval;
        eval = 10;
        eval = e;
    };

    return ['(', f.toString(), ')()'].join('');
})();

(function () {
    'use strict';

    ('indirect', eval)(functionCode);
})();