API_KEY_ELEMENT = document.getElementById('MAPS_API_KEY')
API_URL_ELEMENT = document.getElementById('MAPS_API_URL')
MAPS_CALLBACK_ELEMENT = document.getElementById('MAPS_CALLBACK')

do ->

  if not API_KEY_ELEMENT
    console.error 'missing MAPS_API_KEY tags'
    return false

  MAPS_API_URL = if not API_URL_ELEMENT then 'https://maps.googleapis.com/maps/api/js' else API_URL_ELEMENT.content
  MAPS_CALLBACK = if not MAPS_CALLBACK_ELEMENT then 'drawMap' else MAPS_CALLBACK_ELEMENT.content
  MAPS_API_KEY = API_KEY_ELEMENT.content

  gmaps = document.createElement "script"
  gmaps.src = "#{MAPS_API_URL}?callback=#{MAPS_CALLBACK}&key=#{MAPS_API_KEY}"
  gmaps.async = true
  gmaps.defer = true
  document.getElementsByTagName('body')[0].appendChild gmaps

  window.Map = require './classes/maps.coffee'
  window.Marker = require './classes/markers.coffee'
  
