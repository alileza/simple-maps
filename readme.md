# Simple Maps
[demo](http://alileza.github.io/simple-maps/demo/)
### Example
```html
<style>
  #map{
      width: 500px;
      height: 300px;
  }
</style>
<div id="map"></div>

<script src="../dist/maps.js"></script>
<script>
var start = function(){
  // Maps options
  var options = {
    zoom : 17       // Options
  }

  // Draw maps on element id #map
  var myMap = new Map('map', options),
      myMarkers = []

  // Create marker on myMap
  myMarkers[0] = new Marker({
                    map: myMap,
                    position: { lat: -6.2009877,lng: 106.8391089 }
                  })
  // Drop the marker on the map
  myMarkers[0].drop()
}
</script>
```

### Map API
###### Set Center
```javascript
  myMap.setCenter({ lat: -6.2009877,lng: 106.8391089 });
```

###### Set Zoom
```javascript
  myMap.setZoom(10);
```
