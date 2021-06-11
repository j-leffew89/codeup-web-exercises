const token = "pk.eyJ1IjoianNvc2E4OSIsImEiOiJja3Bwbjg5MXgwMGsyMnZtbHlhYzVseHNmIn0.ouScIp2zZhQhLcJ9IM8Q_g"


mapboxgl.accessToken = token;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.4936, 29.4241],
    zoom: 10

});

map.on('load', function () {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>China Sun</strong><p><br><a href="https://mychinasun.com/" target="_blank" title="Opens in a new window">China Sun</a><br>(4107 Naco Perrin Blvd, San Antonio, Tx 78217)<br> Amazing Chinese food</p>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-98.41397, 29.54425]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Wayne\'s Wings</strong><p><br><a href="https://www.wayneswingssa.com/" target="_blank" title="Opens in a new window">Wayne\'s Wings</a><br>(4453 Walzem Rd, San Antonio, Tx 78218) <br> Known for their amazing wings</p>',
                        'icon': 'restaurant',
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-98.40565, 29.51052]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Armadillo Burger</strong><p><br><a href="https://www.armadilloburger.com/" target="_blank" title="Opens in a new window">Armadillos</a><br>(1423 McCullough Ave,<br>San Antonio, Tx)<br><br>This place has really good burgers</p>',
                        'icon': 'restaurant'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-98.49220, 29.44266]
                    }
                },
            ]
        }
    });
    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true
        }
    });
    map.on('click', 'places', function (e) {
        let coordinates = e.features[0].geometry.coordinates.slice();
        let description = e.features[0].properties.description;
        console.log('click')
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map)

        map.on('mouseenter', 'places', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

// Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', function () {
            map.getCanvas().style.cursor = '';
        });

    });

});


