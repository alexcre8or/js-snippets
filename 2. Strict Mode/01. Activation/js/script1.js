try {
    eval = 10; // 10

    var f = function () {
        'use strict';
        eval = 20; // Error
    };
}
catch (e) {
    console.log(e);
}