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

### Installation
add this on you head
```html
<meta id="MAPS_API_KEY" content="apikey123">
<meta id="MAPS_API_URL" content="https://maps.googleapis.com/maps/api/js">
<meta id="MAPS_CALLBACK" content="start">
```
* MAPS_API_KEY : you can get from google developer (required)
* MAPS_API_URL : google maps api URL (optional)
* MAPS_CALLBACK : first function that will called, after maps is loaded

---
Also add this on bottom of body
```html
<script src="../dist/maps.js"></script>
```

### Map API
###### Construct a Map
```javascript
  var myMap = new Map('map', options)
```
###### Set Center
```javascript
  myMap.setCenter({ lat: -6.2009877,lng: 106.8391089 });
```

###### Set Zoom
```javascript
  myMap.setZoom(10);
```
### Marker API
###### Create a Marker
```javascript
  var myMarker = new Marker({
                    map: myMap,
                    position: { lat: -6.2009877,lng: 106.8391089 }
                  })
```

###### Draw Marker to Map
```javascript
  myMarker.draw()
```

###### Drop
```javascript
  myMarker.drop()
```

###### Jump
```javascript
  myMarker.jump()
```

###### Jump Once
```javascript
  myMarker.jumpOnce()
```

###### Remove
```javascript
  myMarker.remove()
```

---
