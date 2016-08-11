"use strict";
(function() {
	var app = app || {};
	app.init = function(param){
		var initStatus = true;
		if(initStatus){
			app.consts = {};
			app.names = {};
			app.vars = {};
			app.names.button = 'button';	
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
	};
	app.isHiddenElement = function(el){
		return ((el.offsetParent === null) ? true : false);
	}
	window.app = app;
})(window);

(function() {
	var toggleMobilePage = function(){
		app.vars.touch = 'touch';
		app.names.getstarted = 'getstarted'
		var actionElArray = document.querySelectorAll('[data-action]');
		var elGetstartedArray = document.querySelectorAll('[data-id]').filter(function (el){
			return el.getAttribute('data-id').toLowerCase() == app.names.getstarted;
		});
		actionElArray.forEach(function(el,index,arr){		
			if(el.getAttribute('data-action') == app.vars.touch && el.getAttribute('href').length > 1){
				var toPage = el.getAttribute('href').substring(1);
				elGetstartedArray.forEach(function(el,index,arr){}
			}
		});
		//TODO It still does not work 
	}
	app.init(toggleMobilePage);
})(app);

window.onload = function () {
	app.init();
}