Marker = require './markers.coffee'

class Map
  constructor: (container, opts) ->
    container = document.getElementById( container )

    @center = if not opts?.center then [-6.2009877, 106.8391089] else opts.center
    @zoom = if not opts?.zoom then 13 else opts.zoom

    @map = new google.maps.Map container,
      zoom: @zoom
      center: new google.maps.LatLng(@center[0], @center[1])
    @

  addMarker: (options) =>
    options.map = @
    return new Marker options

  setCenter: (e) => @map.panTo e
  setZoom: (e) => @map.setZoom e

module.exports = Map
