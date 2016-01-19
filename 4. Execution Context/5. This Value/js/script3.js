var a = {
    foo: function () {
        // use strict;
        console.log(this);
    }
};

a.foo();


var foo = a.foo;
foo();

