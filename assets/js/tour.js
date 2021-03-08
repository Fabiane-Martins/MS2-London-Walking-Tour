//Initialize google map 

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 7,
                center: {
                    lat: 51.5285578,
                    lng: -0.2420231
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

           var locations = [
[`<h6 class="popup-header">Holybean (Blackrock)</h6> <p class="popup-content">Visit our Blackrock coffeeshop </br> and try our famous <strong>Holychino <i class="fas fa-mug-hot" aria-hidden="true"></i>.</strong></p>
<a class="popup-link" href="https://goo.gl/maps/61eDWDqqRhK91W3y5" target="_blank"> Get directions</a>`, 51.898669, -8.403624 ],
[`<h6 class="popup-header">Holybean (Cork)</h6> <p class="popup-content">Visit our first Cork coffeeshop ever. </br> Try our classic filter coffee, because classic never gets old!</p>
<a class="popup-link" href="https://goo.gl/maps/uSmUje2NXm1irkdC8" target="_blank"> Get directions</a>`, 51.895301, -8.471848 ],
[`<h6 class="popup-header">Holybean (Little Island)</h6> <p class="popup-content">Welcome to our <span class="popup-new-promo">New</span> Little Island coffeeshop!</br>You know what, we have discounts for you!</br> Click <a class="popup-link-promo" href="index.html#promo" target="_blank"> HERE </a> to get yours.</p>
<a class="popup-link" href="https://goo.gl/maps/MWuHpxCrvS878Ysn9" target="_blank"> Get directions</a>`, 51.904308, -8.357043]
];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });

            //Zoom a location by clicking on external button

            $(".location-button").click(function() {
            map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
            map.setZoom(15);
            });  
        }

//Pop up an infowindow after clicking on marker
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
map.fitBounds(bounds);
  
}



