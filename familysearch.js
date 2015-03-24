var FamilySearch = require('familysearch-javascript-sdk');
console.log(FamilySearch);
function getPlacesAPI() {
    console.log("getPlacesAPI");
    FamilySearch.getAccessToken().then(function (response) {
        FamilySearch.getPlaceSearch('Michigan').then(function (response) {
            var places = response.getPlaces();
            for (var i = 0, len = places.length; i < len; i++) {
                var place = places[i];
                output('Place', {
                    original: place.original,
                    id: place.id,
                    official: place.official,
                    type: place.type,
                    normalized: place.$getNormalizedPlace()
                });
            }
            console.log(response);
        });
    });
}

window.run = function() {
    FamilySearch.getCurrentUser().then(function(response) {
      $('#output').append('Hello '+response.getUser().contactName+'!');
    });
  };

FamilySearch.init({
    app_key: 'a0T3000000BQeanEAD',
    environment: 'sandbox',
    auth_callback: 'https://52.11.53.79',
    http_function: $.ajax,
    deferred_function: $.Deferred
});

$('#run').click(run);

function output(label, data) {
    $('#output').append(label ? '<h3>' + label + '<h3>' : '<hr>');
    $('#output').append(data ? prettyPrint(data) : '');
}