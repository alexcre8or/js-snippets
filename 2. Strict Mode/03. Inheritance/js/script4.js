var functionCode = (function () {
    var
        f = function () {
            var e = eval;
            eval = 10;
            eval = e;
        },

        functionCode = f.toString(),

        functionBody = functionCode.substring(
            functionCode.indexOf('{') + 1,
            functionCode.lastIndexOf('}')
        );

    return functionBody;
})();

(function () {
    'use strict';

    var f = new Function(functionCode);
    f();
})();