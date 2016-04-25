var map = L.map('map').setView([40.730, -73.930], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: "Blart de blart",
	id: "nyctaxi", 
	accessToken: "pk.eyJ1IjoibWlob2RhIiwiYSI6ImNpbWZkcXNoZjAxZDV1MWtrZ2c2ODRjbG4ifQ.9GPMk-5z0Af_Uba2zdJG2g"
}).addTo(map);


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
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(g2, {style: style}).addTo(map);


