if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['./init'], function(init) {
    return {
        init: init.init
    }
});