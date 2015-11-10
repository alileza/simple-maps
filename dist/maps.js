/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var API_KEY_ELEMENT, API_URL_ELEMENT, MAPS_CALLBACK_ELEMENT;

	API_KEY_ELEMENT = document.getElementById('MAPS_API_KEY');

	API_URL_ELEMENT = document.getElementById('MAPS_API_URL');

	MAPS_CALLBACK_ELEMENT = document.getElementById('MAPS_CALLBACK');

	(function() {
	  var MAPS_API_KEY, MAPS_API_URL, MAPS_CALLBACK, gmaps;
	  if (!API_KEY_ELEMENT) {
	    console.error('missing MAPS_API_KEY tags');
	    return false;
	  }
	  MAPS_API_URL = !API_URL_ELEMENT ? 'https://maps.googleapis.com/maps/api/js' : API_URL_ELEMENT.content;
	  MAPS_CALLBACK = !MAPS_CALLBACK_ELEMENT ? 'drawMap' : MAPS_CALLBACK_ELEMENT.content;
	  MAPS_API_KEY = API_KEY_ELEMENT.content;
	  gmaps = document.createElement("script");
	  gmaps.src = MAPS_API_URL + "?callback=" + MAPS_CALLBACK + "&key=" + MAPS_API_KEY;
	  gmaps.async = true;
	  gmaps.defer = true;
	  document.getElementsByTagName('body')[0].appendChild(gmaps);
	  window.Map = __webpack_require__(1);
	  return window.Marker = __webpack_require__(2);
	})();


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Map,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	Map = (function() {
	  function Map(container, opts) {
	    this.setZoom = bind(this.setZoom, this);
	    this.setCenter = bind(this.setCenter, this);
	    container = document.getElementById(container);
	    this.center = !(opts != null ? opts.center : void 0) ? [-6.2009877, 106.8391089] : opts.center;
	    this.zoom = !(opts != null ? opts.zoom : void 0) ? 13 : opts.zoom;
	    this.map = new google.maps.Map(container, {
	      zoom: this.zoom,
	      center: new google.maps.LatLng(this.center[0], this.center[1])
	    });
	  }

	  Map.prototype.setCenter = function(e) {
	    return this.map.panTo(e);
	  };

	  Map.prototype.setZoom = function(e) {
	    return this.map.setZoom(e);
	  };

	  return Map;

	})();

	module.exports = Map;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Marker,
	  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	Marker = (function() {
	  function Marker(arg) {
	    var map, position;
	    map = arg.map, position = arg.position;
	    this.remove = bind(this.remove, this);
	    this.jumpOnce = bind(this.jumpOnce, this);
	    this.jump = bind(this.jump, this);
	    this.drop = bind(this.drop, this);
	    console.dir('marker creation');
	    this.map = map.map;
	    this.position = position;
	    this.drawed = false;
	  }

	  Marker.prototype.draw = function() {
	    this.drawed = true;
	    return this.marker = new google.maps.Marker({
	      map: this.map,
	      position: this.position
	    });
	  };

	  Marker.prototype.drop = function() {
	    if (!this.drawed) {
	      this.draw();
	    }
	    return this.marker.setAnimation(google.maps.Animation.DROP);
	  };

	  Marker.prototype.jump = function() {
	    if (!this.drawed) {
	      this.draw();
	    }
	    return this.marker.setAnimation(google.maps.Animation.BOUNCE);
	  };

	  Marker.prototype.jumpOnce = function() {
	    if (!this.drawed) {
	      this.draw();
	    }
	    this.marker.setAnimation(google.maps.Animation.BOUNCE);
	    return setTimeout((function(_this) {
	      return function() {
	        return _this.marker.setAnimation(null);
	      };
	    })(this), 1000);
	  };

	  Marker.prototype.remove = function() {
	    return this.marker.setMap(null);
	  };

	  return Marker;

	})();

	module.exports = Marker;


/***/ }
/******/ ]);