class Marker
  constructor: ({ map, position }) ->
    console.dir 'marker creation'
    @map = map.map
    @position = position
    @drawed = false
  draw: () ->
    @drawed = true
    @marker = new google.maps.Marker { map: @map, position: @position }

  drop 		: () =>
    if not @drawed
      @draw()
    @marker.setAnimation google.maps.Animation.DROP
  jump 		: () =>
    if not @drawed
      @draw()
    @marker.setAnimation google.maps.Animation.BOUNCE

  jumpOnce	: () =>
    if not @drawed
      @draw()
    @marker.setAnimation google.maps.Animation.BOUNCE
    setTimeout () =>
      @marker.setAnimation null
    ,1000

  remove 		: () =>	@marker.setMap null

module.exports = Marker
