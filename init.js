if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([], function() {
    var FamilySearch = require('familysearch-javascript-sdk'),
    request = require('request'),
    q = require('q');
    var exports = {};
    exports.init = function(token) {
            var FS = new FamilySearch({
            client_id: 'a0T3000000BQeanEAD',
            app_key: 'a0T3000000BQeanEAD',
            environment: 'sandbox',
            access_token: token,
            auth_callback: 'https://52.11.53.79',
            http_function: request,
            deferred_function: q.defer
            });
        return FS;
    }
    return exports;
});