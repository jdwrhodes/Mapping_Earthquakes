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

// spaceX api call

var formdata = new FormData();

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

var pads = fetch("https://api.spacexdata.com/v3/launchpads", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));

let launchPads = d3.json("https://api.spacexdata.com/v3/launchpads").then(launchPad => {
    console.log(launchPad);
    launchPad.forEach(pad => {
        let successPercent = (pad.successful_launches / pad.attempted_launches);
        let wikiLink = pad.wikipedia

        const popupTemplate = `Name: ${pad.location.name}</br>
            Percent Launches Successful: ${(successPercent * 100).toFixed(2)}%</br>
            <a href='${wikiLink}'>Wiki Link</a>`

        L.marker([pad.location.latitude, pad.location.longitude]).bindPopup(popupTemplate).addTo(mapObject);
    })

})

console.log(launchPads);

//

// Object.entries(filters).forEach(([key, value]) => {
//     filteredData = filteredData.filter(row => row[key] === value);
//   });

// for (var i = 0; i < 6; i++) {
//     console.log(result[i]);
// }

// response.forEach(pad => L.marker(pad.location).bindPopup(`<h1>${pad.location['name']}</h1>`).addTo(mapObject)))

// {location: [36.269539, -95.854713], name: "Owasso" },


// {
//     "id": "LZ-1",
//     "full_name": "Landing Zone 1",
//     "status": "active",
//     "location": {
//       "name": "Cape Canaveral",
//       "region": "Florida",
//       "latitude": 28.485833,
//       "longitude": -80.544444
//     },
//     "landing_type": "RTLS",
//     "attempted_landings": 10,
//     "successful_landings": 10,
//     "wikipedia": "https://en.wikipedia.org/wiki/Landing_Zones_1_and_2",
//     "details": "SpaceX's first east coast landing pad is Landing Zone 1, where the historic first Falcon 9 landing occurred in December 2015. LC-13 was originally used as a launch pad for early Atlas missiles and rockets from Lockheed Martin. LC-1 was later expanded to include Landing Zone 2 for side booster RTLS Falcon Heavy missions, and it was first used in February 2018 for that purpose."
//   },

//ourClassCities.forEach(city => L.marker(city.location).bindPopup(`<h1>${city.name}</h1>`).addTo(mapObject) )