/*
This code centers the map on the closest bus and then for each bus, drops a
pin at the bus' location.
*/

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
        zoom: 15,
        scrollwheel: false
    });

    for (i=0; i<busLocations.length; i++){
        let marker = new google.maps.Marker({
            position: {
                lat: parseFloat(busLocations[i].LATITUDE),
                lng: parseFloat(busLocations[i].LONGITUDE)
            },
            map: map,
            icon: {
                url: "/bluebus.png",
                scaledSize: new google.maps.Size(50, 50)
            },
            animation: google.maps.Animation.BOUNCE,
        });

        let busNum = busLocations[i].VEHICLE;
        let contentString = '<h4> Bus#:' + busNum + '</h4>';
        let infowindow = new google.maps.InfoWindow({
            content: contentString
        })
        google.maps.event.addListener(marker, 'click', () => infowindow.open(map, marker));

    }//end for

//    let busNum = busLocations[i].VEHICLE;
//    let contentString = '<h2> Bus#:' + busNum + ' will print here</h2>';


    //may need to delete this down to line 40
    /*
    const transitLayer = new google.maps.TransitLayer();
          transitLayer.setMap(map);
        const trafficLayer = new google.maps.TrafficLayer();
          trafficLayer.setMap(map);

            let contentString = '<h2> Bus#:' + busNum + ' will print here</h2>';

          let infowindow = new google.maps.InfoWindow({
                content: contentString
            })
        google.maps.event.addListener(marker, 'click', () => infowindow.open(map, marker));
    */

}//end initMap()