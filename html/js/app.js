"use strict";
(function() {
	var app = app || {};
	app.init = function(param){
		var initStatus = true;
		if(initStatus){
			app.consts = {};
			app.names = {};
			app.vars = {};
			app.names.button = "button";	
		}
		if(typeof param == 'function'){
			app[param.name] = param;
		} else {
			// todo init(add) app's custom property
		}
		initStatus = false;
	};
	app.isTouchDevice = function() {
		return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
	}
	window.app = app;
	app.init();
})(window);

(function() {
	var isTest = function(){
		console.log('test');
	}
	app.init(isTest);
})(app);