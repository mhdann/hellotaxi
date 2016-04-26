L.mapbox.accessToken = 'pk.eyJ1IjoibWlob2RhIiwiYSI6ImNpbWZkcXNoZjAxZDV1MWtrZ2c2ODRjbG4ifQ.9GPMk-5z0Af_Uba2zdJG2g';

var map = L.mapbox.map('map', 'mapbox.light',{
    container: 'map',
    style: 'mapbox://styles/mihoda/cingxlbqz0028axnmr67x77kc',
    minZoom:12,
    maxZoom:18
})
    .setView([40.730, -74.0], 11);



function getColor(d) {
    return d > 42 ? '#800026' :
           d > 35  ? '#BD0026' :
           d > 28  ? '#E31A1C' :
           d > 21  ? '#FC4E2A' :
           d > 14   ? '#FD8D3C' :
           d > 7   ? '#FEB24C' :
           d > 0   ? '#FED976' :
		   d > -100   ? '#FFEDA0' :

						'#0000FF';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.stock),
        weight: 2,
        opacity: 0.2,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
}

var probs = L.geoJson(g1, {style: style}).addTo(map);


