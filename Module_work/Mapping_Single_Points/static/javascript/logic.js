// Add console.log to check to see if our code is being seen by the browser
console.log('working');

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets', // this controls the style of map rendered
//     accessToken: API_KEY
// });

// Add a marker to the map for Los Angeles, CA
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

 // Add a yellow filled circle
 L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: 'black',
    fillColor: '#ffffa1'
 }).addTo(map);

// Using the Mapbox Styles API
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// }).addTo(map);

// Using the Mapbox Styles API and have a "dark mode"
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}).addTo(map);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
