(function() {
    //'use strict';

    var handler = {
        counter: 0,
        func: function () {
            this.counter++;
            alert(this.counter);
        }
    };


    var button =
        document.getElementsByTagName('button')[0];

    button.addEventListener('click', handler.func);
})();