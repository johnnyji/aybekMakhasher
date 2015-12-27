var INSTAGRAM_USER_ID = '1419191820';
var JSON_ENDPOINT = 'https://api.instagram.com/v1/users/' + INSTAGRAM_USER_ID + '/media/recent/?client_id=eb4a31ed053d4e5ca684d04dde4bca7a&callback=?';
var PUBLIC_URL = 'https://www.instagram.com/oybekistan/';
var INSTAGRAM_WRAPPER_ID = 'instagram-wrapper';

$(function() {
  var instagramContentWrapper = document.getElementById(INSTAGRAM_WRAPPER_ID);

  $.getJSON(JSON_ENDPOINT)
    .done(function(response) {
      // Sets the inner content of the wrapper
      var feedItems = '';
      response.data.forEach(function(datum) {

        if (datum.type === 'image') {
          // If the media is an image file
          var imageSrc = datum.images.standard_resolution.url;
          feedItems = feedItems.concat('<img class="instagram-item" src="' + imageSrc + '"/>');
        }
      });

      instagramContentWrapper.innerHTML = feedItems;
    })
    .fail(function() {
      instagramContentWrapper.innerHTML = '<p class="instagram-error-message">Error connecting to Instagram. Visit <a href="' + PUBLIC_ENDPOINT + '" target="_blank">here instead!</a></P>';
    });
});