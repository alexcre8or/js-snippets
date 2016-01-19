(function () {

    var f = function Test(a) {
        var typeOf = typeof arguments;
        var type = Object.prototype.toString(arguments);
        var instanceOf = (arguments instanceof Array);
        var constructor = (arguments.constructor === Array);

        var numberOfExpectedParameters = f.length;
        var functionName = f.name;

        debugger;
    };
    

    f(1, 2, 3);
})();