var a = {};

function foo() {
    //'use strict';
    console.log(this);
}


foo();


a.foo = foo;
a.foo();