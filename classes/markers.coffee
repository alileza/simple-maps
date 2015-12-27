class Marker
  constructor: ({ map, position, icon }) ->
    console.dir 'marker creation'
    @map = map.map
    @position = position
    @icon = icon
    @drawed = false
    @state = {}

  draw: () ->
    @drawed = true
    options = { map: @map, position: @position }
    options.icon = @icon if @icon
    @marker = new google.maps.Marker options
    @

  on: (event, func) =>
    func = func.bind @
    @marker.addListener event, func
    @

  get: (key) => if @state[key] then @state[key] else null

  drop 		: () =>
    if not @drawed
      @draw()
    @marker.setAnimation google.maps.Animation.DROP
    @
  jump 		: () =>
    if not @drawed
      @draw()
    @marker.setAnimation google.maps.Animation.BOUNCE
    @

  label 		: (html) =>
    if not html
      console.warn "label expect 1 parameter"
      return @
    infowindow = new google.maps.InfoWindow { content: html }
    @marker.addListener 'click', () =>
      infowindow.open(@map, @marker);
    @

  jumpOnce	: () =>
    if not @drawed
      @draw()
    @marker.setAnimation google.maps.Animation.BOUNCE
    @
    setTimeout () =>
      @marker.setAnimation null
    ,750

  remove 		: () =>	@marker.setMap null

module.exports = Marker
