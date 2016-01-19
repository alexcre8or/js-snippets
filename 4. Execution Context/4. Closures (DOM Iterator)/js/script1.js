(function () {
    'use strict';


    var buttons =
        document.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            alert(i);
        });
    }
    
})();