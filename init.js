if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([], function() {
    var FamilySearch = require('FamilySearch');
    var jQuery = require('jquery');
    var exports = {};
    exports.init = new FamilySearch({
        app_key: 'a0T3000000BQeanEAD',
        environment: 'sandbox',
        auth_callback: 'https://52.11.53.79',
        http_function: require('http').request,
        deferred_function: require('JQDeferred')
    });
    console.log(exports);
    return exports;
});