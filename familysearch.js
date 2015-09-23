$.getScript("http://rootsdev.org/familysearch-javascript-sdk/familysearch-javascript-sdk.js", function(){
//var FamilySearch = require('familysearch-javascript-sdk');
function getPlacesAPI() {
        client.getPlaceSearch('Michigan').then(function (response) {
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
}

window.run = function() {
    client.getAccessToken().then(function (response) {
      var url = "http://52.11.53.79/getdata"
      $.post(url, {access_token: response}, function(data) {
      //Send access code to server.
      $('#output').append('Hello '+data+'!');
      $('#output').append('<br />Successfully requested data from your family tree.');
      console.log("Data:");
      console.log(data);
      }, "json");
      //getPlacesAPI();
    });
  };

var client = new FamilySearch({
  client_id: 'this_is_where_your_client_id_goes',
  auth_callback: 'http://52.11.53.79',
  redirect_uri: 'http://52.11.53.79',
  environment: 'sandbox',
  http_function: $.ajax,
  deferred_function: $.Deferred
});

$('#run').click(run);

function output(label, data) {
    $('#output').append(label ? '<p>' + label + '</p>' : '<hr>');
    $('#output').append(data ? 'Original: '+data.original+'<br />'+'ID: '+data.id+'<br />'+'Official: '+data.official+'<br />'+'Type: '+data.type+'<br />'+'Normalized: '+data.normalized+'<br />' : '');
}
});
