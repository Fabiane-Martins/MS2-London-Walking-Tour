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

    var locations = [{ '<h6 class="popup-header">DICKENS LONDON LIFE</h6>':
                lat: 51.5205538,
                lng: -0.1082319
            }, {
                lat: 51.5049014,
                lng: -0.0934472
            },
            {
                lat: 51.50809,
                lng: -0.1291406
            }, {
                lat: 51.4780469,
                lng: -0.015555
            }];


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



