(function () {
    'use strict';

    function compareStrings() {
        console.group('Strings');
        console.log('a' > 'b'); //false 
        console.log('aa' > 'a'); // true
        console.log('a' == 'a'); // true
        console.groupEnd();
    }

    function compareObjects() {
        console.group('Objects');
        console.log({} == {}); // false
        console.log([1, 2, 3] == [1, 2, 3]); // false

        var x = [1, 2];
        console.log(x == x); // true
        console.groupEnd();
    }

    function compareHeterogeneous() {
        console.group('Heterogeneous');
        console.log('3' > 2); // true
        console.log('a' > 2); // false
        console.log([1] == 1); // true
        console.log([1] === 1); // false
        console.log('' == 0); // true


        var x = {
            valueOf: function () {
                return 1;
            }
        };

        console.log(x == true); //true
        console.log(x == '1'); // true


        var y = {
            toString: function () {
                return '1';
            }
        };

        console.log(y == true); // true
        console.log(y == 1); // true

        console.groupEnd();
    }

    function compareNullAndUndefined() {
        console.group('Null & Undefined');
        console.log(null == undefined); // true
        console.log(null === undefined); // false
        console.log(null == null); // true
        console.log(undefined == undefined); //true
        console.log(null == 0); // false
        console.groupEnd();
    }

    compareStrings();
    compareObjects();
    compareHeterogeneous();
    compareNullAndUndefined();
})();