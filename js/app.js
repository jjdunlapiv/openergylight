(function (){
	var app = angular.module('app', ['ngRoute', 'ngAnimate']);
	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'pages/modules.html',
				// controller  : 'navController',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		})

			.when('/tools', {
				templateUrl : 'pages/tools.html',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		})

			.when('/glossary', {
				templateUrl : 'pages/glossary.html',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		})

			.when('/about', {
				templateUrl : 'pages/about.html',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		})

			.when('/awareness', {
				templateUrl : 'pages/awareness.html',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		})

			.when('/management', {
				templateUrl : 'pages/management.html',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		})

		.when('/planning', {
			templateUrl : 'pages/planning.html',
			resolve: {
				app: function () {
				window.scrollTo(0,0);
			}
		}
	})

		.when('/tactical', {
			templateUrl : 'pages/tactical.html',
			resolve: {
				app: function () {
				window.scrollTo(0,0);
			}
		}
	})

		.when('/calculator', {
			templateUrl : 'pages/calculator.html',
			resolve: {
				app: function () {
				window.scrollTo(0,0);
			}
		}
	 })

		.when('/oemedia', {
			templateUrl : 'pages/oemedia.html',
			resolve: {
				app: function () {
				window.scrollTo(0,0);
			}
		}
	})

		.when('/tepe', {
			templateUrl : 'pages/tepe.html',
			resolve: {
				app: function () {
				window.scrollTo(0,0);
			}
		}
	})

		.when('/armysite', {
			templateUrl : 'pages/armysite.html',
			resolve: {
				app: function () {
				window.scrollTo(0,0);
			}
		}
	});
});

	app.controller('navController', function($scope) {
		$scope.message = 'this is some stuff loaded in with angular';

		(function(){
			var navbuttons = document.getElementsByClassName('button');
			for (var i = 0; i < navbuttons.length; i++) {
				console.log(navbuttons[i].hash);
				if(navbuttons[i].hash == window.location.hash){
					navbuttons[i].className += " is-active";
				}
				else{
					navbuttons[i].classList.remove('is-active');
				}
			}
		}());
	});

	app.controller('dataController',  function($http, $scope) {
		$http.get('./js/data.json').success(function(data){
			$scope.butts = data;
		});

		var expand = (function() {

			var _elements;

			var expand = {

				init: function () {
					_elements = document.getElementsByClassName('expand');
					this.bindEvents();
				},

				bindEvents: function () {
					this.unbindEvents();

					for (var i = 0; i < _elements.length; i++)
						_elements[i].addEventListener('click', this.onClick);
				},

				unbindEvents: function () {
					for (var i = 0; i < _elements.length; i++)
						_elements[i].removeEventListener('click', this.onClick);
				},

				onClick: function(e) {
					for (var i = 0; i < _elements.length; i++)
						if (_elements[i] == this)
							this.classList.toggle('is-active');
						else
							_elements[i].classList.remove('is-active');
				}

			};

			return expand;

		}());

		expand.init();

		(function(){
			$(".expand").click(function() {
			    $('html, body').animate({
			        scrollTop: $(".expand.is-active").offset().top - 55
			    }, 400)
			});
		}());

	});

	app.controller('calcController', function($scope) {
		document.getElementById("calcBtn").addEventListener("click", function(){
				var volts         = document.getElementById("volts").value;
				var amps          = document.getElementById("amps").value;
				var loadTypes     = document.getElementById("loadTypes");
				var selectedLoad  = loadTypes.options[loadTypes.selectedIndex].value;
				var totalPower    = document.getElementById("totalPower");
				var calc1         = volts * amps;
				if (selectedLoad == 'spi'){
					totalPower.value = ((calc1/1000) * (.8)).toFixed(3);
				}
				else if (selectedLoad == 'tpi'){
					totalPower.value = (((1.732)*(.8)*calc1)/1000).toFixed(3);
				}
				else if (selectedLoad == 'sp'){
					totalPower.value = (calc1/1000).toFixed(3);
				}
				else if (selectedLoad == 'tp'){
					totalPower.value = (((1.732)*calc1)/1000).toFixed(3);
				}
				else{

				}
			});
		});

})();
