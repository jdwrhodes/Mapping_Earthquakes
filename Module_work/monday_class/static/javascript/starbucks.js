var mapObject = L.map("map", {
    center: [35.1, -92.3],
    zoom: 5
});

L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',{
        accessToken: API_KEY,
        maxZoom: 18
    }
).addTo(mapObject);

// L.geoJson(statesData).addTo(mapObject);

function color(densityValue) {
    return densityValue > 0.00008 ? '#004d00' :
        densityValue > 0.00006 ? '#009900':
        densityValue > 0.00004 ? '#00e600':
        densityValue > 0.00002 ? '#80ff80':
        densityValue > 0 ? '#e6ffe6': '#ffffff';
}

function style(feature) {
    return{
        fillColor: color(feature.properties.store_per_person),
        weight : 2,
        opacity: 1,
        fillOpacity: 0.7
    };
}

// L.geoJson(statesData,{style: style}).addTo(mapObject);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div','info');
    this.update();
    return this._div;
}

info.update = function (props) {
    this._div.innerHTML = '<h4>Starbucks Stores</h4>' + (props ? '<b>' + props.name + '</b><br />' + props.store_count + ': number of stores.' : 'Hover over a state!');
}

info.addTo(mapObject);

function highlightFeature(f){
    var layer = f.target;

    layer.setStyle({
        weight : 2,
        color : '#ffb3ff',
        dashArray : '',
        fillOpacity: '0.7'
    });

    info.update(layer.feature.properties)
}

function resetHighlight(f){
    geoJson.resetHighlight(f.target);
    info.update();
}

function zoomToFeature(f){
    mapObject.fitBounds(f.target.getBounds());
}

function onEachFeature(feature, layer){
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    })
}

L.geoJson(statesData,{style: style, onEachFeature: onEachFeature}).addTo(mapObject);