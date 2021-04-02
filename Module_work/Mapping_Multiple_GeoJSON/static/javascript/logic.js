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

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
};

// Create a map object with center, zoom level and default layer. This is the more verbose way of creating a map as compared to just using setView()
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// Accessing the airport GeoJSON URL. Having this after the titleLayer ensures that the map gets loaded before the data is added to it
let airportData = 'https://raw.githubusercontent.com/jdwrhodes/Mapping_Earthquakes/main/majorAirports.json'

// Grabbing our GeoJSON data
d3.json(airportData).then(function(data) {
    console.log(data);

    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(map);
})

// Then we add our 'graymap' tile layer to the map.
//baseMaps.addTo(map);

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);