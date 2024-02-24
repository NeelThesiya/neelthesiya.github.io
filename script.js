require(["esri/config", "esri/Map",
"esri/views/MapView", "esri/widgets/Sketch", "esri/widgets/Home"], function(esriConfig, Map,
MapView, Sketch, Home) {
esriConfig.apiKey = "AAPK6a63addb36fb48fdb525fde33368e589hiXiarW13juwsrq0A2Sp14FWSx4f3opiE36Jq9ew4dBW3yhISk5AIzSOi5ibbDFc"; 

const map = new Map({ basemap: "arcgis/topographic" // basemap styles service 
});
const view = new MapView({ 
map: map, 
center: [-118.805, 34.027], // Longitude, latitude 
zoom: 13, // Zoom level 
container: "viewDiv" // Div element 
});
  const sketch = new Sketch({
        view: view
    });
    view.ui.add(sketch, "top-right");
  const home = new Home({
        view: view
    });
    view.ui.add(home, "top-left");
});