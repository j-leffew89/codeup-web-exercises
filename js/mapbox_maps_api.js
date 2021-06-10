const token = "pk.eyJ1IjoianNvc2E4OSIsImEiOiJja3Bwbjg5MXgwMGsyMnZtbHlhYzVseHNmIn0.ouScIp2zZhQhLcJ9IM8Q_g"


mapboxgl.accessToken = token;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.4936, 29.4241],
    zoom: 10

});

map.on('load', function () {
    map.addSource("markers", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        'description': "<strong>China Sun</strong>" <p><br> 4107
                        Naco Perrin
                        Blvd,
                        San Antonio,
                        TX 78217 < br > < /p>
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": ["-98.4936, 29.4241"]
                    },
                },
                {
                        "properties": {
                            "title": "Start",
                            "marker-symbol": "entrance",
                            "marker-size": "small",
                            "marker-color": "#D90008"
                        }
                    },

            ]
        }
    });
    map.addLayer({
        "id": "markers",
        "type": "symbol",
        "source": "markers",
        "layout": {
            "icon-image": "{marker-symbol}-15", //but monument-15 works
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, -1.6],
            "text-anchor": "top"
        }
    });
});
// mapboxgl.accessToken = token;
// let map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 10,
//     center: [-98.4916, 29.4252]
// });
// function geocode(search, token) {
//     let baseUrl = 'https://api.mapbox.com';
//     let endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//             // to get all the data from the request, comment out the following three lines...
//         }).then(function(data) {
//             return data.features[0].center;
//         });
// }
// // adds zoom controls on the map.
// map.addControl(new mapboxgl.NavigationControl());
//
// let restaurants = [
//     {
//         name:"Tong's Thai",
//         address:"1146 Austin Hwy, San Antonio, Tx 78209",
//         review:"Super delicious Thai Food!"
//     },
//     {
//         name:"Kimura",
//         address:"152 E Pecan St #102, San Antonio, Tx 78209",
//         review:"Super delicious Thai Food!"
//     },
//     {
//         name:"Godai",
//         address:"11203 West Ave, San Antonio, Tx 78213",
//         review:"Super delicious Thai Food!"
//     },
// ];
//
// restaurants.forEach(function(restaurant) {
//     geocode(restaurant.address, token).then(function (data) {
//         console.log(data);
//
//         let markUps = new mapboxgl.Marker().setLngLat(data).addTo(map);
//
//         let popUps = new mapboxgl.Popup()
//             .setHTML(restaurant.name)
//             .addTo(map)
//
//         markUps.setPopup(popUps);
//     });
// });
