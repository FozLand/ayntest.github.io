var mapsize = 8256;
var map = L.map('map', {
    maxZoom:28,
    minZoom:22,
    maxNativeZoom:24,
    fullscreenControl: true,
    crs: L.CRS.Simple
}).setView([0,0], 23);
var southWest = map.unproject([0, mapsize], map.options.maxNativeZoom);
var northEast = map.unproject([mapsize, 0], map.options.maxNativeZoom);
map.setMaxBounds(new L.LatLngBounds(southWest, northEast));
L.tileLayer('http://maps.ayntest.net/tiles/{z}/map_{x}_{y}.png', {
            maxZoom: 28,
            maxNativeZoom:24,
            tileSize: 344,
}).addTo(map);
map.setView(map.unproject([mapsize/4,mapsize/4]));
