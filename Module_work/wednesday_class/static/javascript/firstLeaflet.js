var mapObject = L.map("map", {
    center: [35.1, -92.3],
    zoom: 9
});

L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        accessToken: API_KEY,
        maxZoom: 18
    }
).addTo(mapObject);

var stores = [
    {
        location: [35.23, -92.1],
        name: 'Store 1'
    },
    {
        location: [35.53, -91.1],
        name: 'Store 2'
    },
    {
        location: [35.7, -93.1],
        name: 'Store 3'
    }
];

stores.forEach(store => L.marker(store.location).bindPopup(`<h2>${store.name}</h2>`).addTo(mapObject));