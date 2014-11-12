L.Projection.NoWrap = {
    project: function (latlng) {
        return new L.Point(latlng.lat, latlng.lng);
    },

    unproject: function (point, unbounded) {
        return new L.LatLng(point.x, point.y, true);
    }
};

L.CRS.Direct = L.Util.extend({}, L.CRS, {
    code: 'Direct',
    projection: L.Projection.NoWrap,
    transformation: new L.Transformation(1.0/65536, 30928.0/65536, -1.0/65536, 34608.0/65536)
});

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
