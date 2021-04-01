var mapObject = L.map("map", {
    center: [35.1, -92.3],
    zoom: 9
});

let streetsMapTiles = L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
        accessToken: API_KEY,
        maxZoom: 18
    }
).addTo(mapObject);

var ourClassCities = [
    {location: [36.269539, -95.854713], name: "Owasso" },
    {location: [33.1, -96.9], name: "Little Elm"},
    {location: [30.2672, -97.7431], name: "Austin" },
    {location: [32.95, -96.73], name: "Richardson" },
    {location: [30.4, -97.8], name: "Austin" },
    {location: [29.749907, -95.358421], name: "Houston" },
    {location: [30.266666, -97.733330], name: "austin" },
    {location: [29.7604, -95.3698], name: "Houston" },
    {location: [30.25,-97.86], name: "South Austin"},
    {location: [33.2318,-97.0023], name: "Aubrey" },
    {location: [26.314392, -98.163196], name: "Edinburg" }
]

ourClassCities.forEach(city => L.marker(city.location).bindPopup(`<h1>${city.name}</h1>`).addTo(mapObject) )