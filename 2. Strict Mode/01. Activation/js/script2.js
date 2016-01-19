'use strict';

try {
    eval = 10; // Error

    var f = function () {
        eval = 20; // Error
    };
}
catch (e) {
    console.log(e);
}