// Add console.log to check to see if our code is being seen by the browser
console.log('working');

// Create the map object with a center and zoom level
//let map = L.map('mapid').setView([30, 30], 2);

// Using the Mapbox Styles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the Satellite Street view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    'Streets': streets,
    'Satellite Streets': satelliteStreets
};

// Create a map object with center, zoom level and default layer. This is the more verbose way of creating a map as compared to just using setView()
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Grabbing our GeoJSON data
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(function(data) {

    // Creating a GeoJSON layer with the retrieved data.
        L.geoJson(data, {

        // We turn each feature into a circleMarker on the map.
        
        pointToLayer: function(feature, latlng) {
                    console.log(data);
                    return L.circleMarker(latlng);
                },
            // We set the style for each circleMarker using our styleInfo function.
            style: styleInfo
            }).addTo(map);
});

// Creating our Style and raduis functions
function styleInfo(feature) {
    return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: '#ffae42',
        color: '#000000',
        radius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
    };
    function getRadius(magnitude) {
            if (magnitude === 0) {
                return 1;
            }
            return magnitude * 4;
    }
};

// Pass our map layers into our layers control and add the layers control to the map. By using "Control," it allows the use of multiple layers/styles. 
L.control.layers(baseMaps).addTo(map);