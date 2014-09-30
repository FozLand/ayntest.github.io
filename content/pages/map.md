Title: Map

<link rel="stylesheet" href="/css/leaflet.css" />
<script src="/javascript/leaflet.js"></script>
<link rel="stylesheet" href="/css/Control.FullScreen.css" />
<script src="/javascript/Control.FullScreen.js"></script>
<link rel="stylesheet" href="/css/leaflet-custom.css" />

<div id="map">
<script>
var mapsize = 8256;
var map = L.map('map', {
    maxZoom:25,
    minZoom:22,
    maxNativeZoom:24,
    fullscreenControl: true,
    crs: L.CRS.Simple
}).setView([0,0], 23);
var southWest = map.unproject([0, mapsize], map.options.maxNativeZoom);
var northEast = map.unproject([mapsize, 0], map.options.maxNativeZoom);
map.setMaxBounds(new L.LatLngBounds(southWest, northEast));
L.tileLayer('http://maps.ayntest.net/tiles/{z}/map_{x}_{y}.png', {
            maxZoom: 25,
            maxNativeZoom:24,
            tileSize: 344,
}).addTo(map);
map.setView(map.unproject([mapsize/4,mapsize/4]));
</script>

</div>

White areas on the map have not been explored yet. What are you waiting for!
