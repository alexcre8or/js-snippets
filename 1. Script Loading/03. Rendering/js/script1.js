(function () {
    'use strict';

    var elements = document.querySelectorAll('span');

    for (var elementIndex = 0;
             elementIndex < elements.length;
             elementIndex++) {

        var elementId = elements[elementIndex].getAttribute('id');
        console.log('Script 1: ' + elementId);
    }

})();