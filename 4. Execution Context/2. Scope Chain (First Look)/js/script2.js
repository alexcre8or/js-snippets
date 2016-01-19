(function () {
    'use strict';


    var x = 10;
    
    function foo() {
        var y = 20;
        bar();
    }
    
    function bar() {
        var z = 30;
        console.log(x + y + z);
    }


    foo();
})();