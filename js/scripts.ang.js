(function(){

"use strict";

var app = angular.module('myPage', ['ngTouch']);
app.controller('myPageCtrl', function($scope,$http){

	var distinct_id=null;
  (function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===c.location.protocol&&"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js";d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);

	mixpanel.init('763adbdbb8a18feb05212f3712c1af9a', {
    loaded: function(mixpanel) {
        $scope.distinct_id = mixpanel.get_distinct_id();
    }
  });
  
  $scope.touch = function(){
    var t = mixpanel.track('Lander2',{debug:true, 'd_id':$scope.distinct_id});
  }

  $scope.track = function(w)
  {
  	mixpanel.track(w,{debug:true, 'd_id':$scope.distinct_id});
  }

  $scope.touch();
	

	/* ------------------------------ */
	/* GOOGLE MAP
	/* ------------------------------ */

	$scope.mapInitialization = function() {
		$scope.myLatlng = new google.maps.LatLng(33.96290,-118.43589),
		$scope.mapOptions = {
			zoom: 14,
			scrollwheel: false,
			center: $scope.myLatlng
		},
		$scope.map = new google.maps.Map(document.getElementById('map'), $scope.mapOptions),
		$scope.marker = new google.maps.Marker({
			position: $scope.myLatlng,
			map: $scope.map,
			icon: "images/map.png"
		});
	}

	//$scope.mapInitialization();

	/* ------------------------------ */
	/* SCROLL BUTTON
	/* ------------------------------ */

	$scope.scrollTop = function() {
		$('html, body').animate({ scrollTop: 0 }, "slow");
	}

	/* ------------------------------ */
	/* SCROLL SPY
	/* ------------------------------ */

	$scope.scrollSpy = function() {
		$scope.y = $(document).scrollTop(),
		$scope.activeHeaderHeight = 50,
		$scope.activeScrollButtonHeight = 500,
		$scope.header = $('.header'),
		$scope.scrollTopButton = $('.scroll_top');

		if ($scope.y > $scope.activeHeaderHeight) {
			$scope.header.addClass('active');
		} else {
			$scope.header.removeClass('active');
		}
		if ($scope.y > $scope.activeScrollButtonHeight) {
			$scope.scrollTopButton.addClass('active');
		} else {
			$scope.scrollTopButton.removeClass('active');
		}
	}

	$(document).scroll(function() {
		$scope.scrollSpy();
	})

	/* ------------------------------ */
	/* NAVIGATION MENU SCROLL
	/* ------------------------------ */

	$scope.menuScroll = function() {
		$scope.header = $('.header'),
		$scope.header.addClass('active');
		setTimeout(function(){
			$scope.menuActiveHeight = $scope.header.outerHeight(true);
			$scope.header.removeClass('active');
			$scope.scrollSpy();
		},1000);

		$scope.scrollNav = function(e) {
			e.preventDefault();
			$('#mobile_nav').removeClass('uk-active');
			$scope.pageAnimate = function(page_block) {
				$('html, body').animate({
					scrollTop: $('.' + page_block + '').offset().top-$scope.menuActiveHeight
				}, 700);
			}
			if ($(e.target).hasClass('link_features') || $(e.target).hasClass('container_arrow')) {
				$scope.pageAnimate('elements');
				$scope.track("Our Approach");
			} else if ($(e.target).hasClass('container_button_subscribe')) {
				$scope.pageAnimate('address');
				$scope.track("Subcribe");
			} else if ($(e.target).hasClass('container_button_message') || $(e.target).hasClass('link_contact')) {
				$scope.pageAnimate('address');
				$scope.track("Contact");
			}
		}
	}

	$scope.menuScroll();

	/* ------------------------------ */
	/* TOGGLE MOBILE NAV
	/* ------------------------------ */

	$scope.toggleMobileNav = function(e) {
		$('#mobile_nav').toggleClass('uk-active');
	}

	/* ------------------------------ */
	/* ANIMATED COUNTER
	/* ------------------------------ */
	
	$scope.counterInit = function() {
		$('.statistic').on('inview.uk.scrollspy', function(){
			$scope.numAnim1 = new CountUp('statistic_counter_1', 0, 100, 0, 3.5);
			$scope.numAnim2 = new CountUp('statistic_counter_2', 0, 150, 0, 3.5);
			$scope.numAnim3 = new CountUp('statistic_counter_3', 0, 500, 0, 3.5);
			$scope.numAnim4 = new CountUp('statistic_counter_4', 0, 750, 0, 3.5);
			$scope.numAnim1.start();
			$scope.numAnim2.start();
			$scope.numAnim3.start();
			$scope.numAnim4.start();
		});
	}
	
	$scope.counterInit();

	/* ------------------------------ */
	/* SHOW MODAL SUBSCRIBE WINDOW
	/* ------------------------------ */

	$scope.showModalSubscribe = function() {
		setTimeout(function(){
			UIkit.modal('#modal_subscribe', {center:true}).show();
		},4500);
	}

	// $scope.showModalSubscribe();

	/* ------------------------------ */
	/* SPINNER
	/* ------------------------------ */

	$scope.removeSpinner = function() {
		setTimeout(function(){
			$('.spinner').animate({opacity: 0}, 500, function() {
				$(this).remove();
			});
		},2500);
	}

	$scope.removeSpinner();

	/* ------------------------------ */
	/* REMOVE MOBILE VIDEO
	/* ------------------------------ */

	$scope.removeMobileVideo = function() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('.video_wrapper').remove();
		}
	}

	$scope.removeMobileVideo();

	/* ------------------------------ */
	/* TOUCH EVENT HANDLERS
	/* ------------------------------ */

	$scope.addTouchEventHandlers = function() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			var ng_click = $('[data-ng-click]');
			ng_click.each(function() {
				$(this).attr('data-ng-touchstart','scrollNav($event)').removeAttr('data-ng-click');
			})
		}
	}

	$scope.addTouchEventHandlers();

	/* ------------------------------ */
	/* MOBILE ARROWS
	/* ------------------------------ */

	$scope.activateMobileArrows = function() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			$('.reviews .uk-slidenav').addClass('uk-active');
		}
	}

	$scope.activateMobileArrows();

	/* ------------------------------ */
	/* DESCRIPTION IMAGE
	/* ------------------------------ */

	$scope.addDescriptionImage = function() {
		$scope.description_image = $('.description_image');
		for (var i = 0; i < $scope.description_image.length; i++) {
			$scope.description_image.eq(i).css('background',  'url(' + $scope.description_image.eq(i).attr('data-image') + ') no-repeat center center / cover');
		}
	}

	$scope.addDescriptionImage();

	/* ------------------------------ */
	/* GALLERY IMAGES
	/* ------------------------------ */

	$scope.galleryImageResize = function() {
		$('.gallery_block').each(function() {
			$(this).css({
				'background-image': 'url(' + $(this).attr("href") + ')',
				'background-repeat': 'no-repeat',
				'background-position': 'center center',
				'background-size': 'cover'
			})
		})
	}

	$scope.galleryImageResize();

	/* ------------------------------ */
	/* EFFECTS
	/* ------------------------------ */

	$scope.setEffect = function() {
		$scope.html = $('html'),
		$scope.container = $('.container');
		$scope.rainyBlockInsert = function() {
			$scope.container.addClass('rainy_page')
				.append('<img id="rainy_background" alt="rainy" src="">');
			$scope.run = function() {
				$scope.image = document.getElementById('rainy_background');
				$scope.image.onload = function() {
					var engine = new RainyDay({
						image: this
					});
					engine.rain([ [1, 2, 4000] ]);
					engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
				};
				$scope.image.crossOrigin = 'anonymous';
				$scope.image.src = 'http://i.imgur.com/U1Tqqdw.jpg';
			}
			$scope.run();
		}
		$scope.particlesBlockInsert = function() {
			$scope.container.append('<div id="particles_block"></div>');
			particlesJS('particles_block',
			  {
				"particles": {
				  "number": {
					"value": 80,
					"density": {
					  "enable": true,
					  "value_area": 800
					}
				  },
				  "color": {
					"value": "#ffffff"
				  },
				  "shape": {
					"type": "circle",
					"stroke": {
					  "width": 0,
					  "color": "#000000"
					},
					"polygon": {
					  "nb_sides": 5
					},
					"image": {
					  "src": "img/github.svg",
					  "width": 100,
					  "height": 100
					}
				  },
				  "opacity": {
					"value": 0.5,
					"random": false,
					"anim": {
					  "enable": false,
					  "speed": 1,
					  "opacity_min": 0.1,
					  "sync": false
					}
				  },
				  "size": {
					"value": 5,
					"random": true,
					"anim": {
					  "enable": false,
					  "speed": 40,
					  "size_min": 0.1,
					  "sync": false
					}
				  },
				  "line_linked": {
					"enable": true,
					"distance": 150,
					"color": "#ffffff",
					"opacity": 0.4,
					"width": 1
				  },
				  "move": {
					"enable": true,
					"speed": 6,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"attract": {
					  "enable": false,
					  "rotateX": 600,
					  "rotateY": 1200
					}
				  }
				},
				"interactivity": {
				  "detect_on": "canvas",
				  "events": {
					"onhover": {
					  "enable": true,
					  "mode": "repulse"
					},
					"onclick": {
					  "enable": true,
					  "mode": "push"
					},
					"resize": true
				  },
				  "modes": {
					"grab": {
					  "distance": 400,
					  "line_linked": {
						"opacity": 1
					  }
					},
					"bubble": {
					  "distance": 400,
					  "size": 40,
					  "duration": 2,
					  "opacity": 8,
					  "speed": 3
					},
					"repulse": {
					  "distance": 200
					},
					"push": {
					  "particles_nb": 4
					},
					"remove": {
					  "particles_nb": 2
					}
				  }
				},
				"retina_detect": true,
				"config_demo": {
				  "hide_card": false,
				  "background_color": "#555555",
				  "background_image": "",
				  "background_position": "50% 50%",
				  "background_repeat": "no-repeat",
				  "background_size": "cover"
				}
			  }

			)
		}
		$scope.winterBlockInsert = function() {
			$scope.container.append('<div id="winter_block"></div>');
			particlesJS('winter_block',
				{
					"particles": {
						"number": {
							"value": 400,
							"density": {
								"enable": true,
								"value_area": 800
							}
						},
						"color": {
							"value": "#fff"
						},
						"shape": {
							"type": "circle",
							"stroke": {
								"width": 0,
								"color": "#000000"
							},
							"polygon": {
								"nb_sides": 5
							},
							"image": {
								"src": "img/github.svg",
								"width": 100,
								"height": 100
							}
						},
						"opacity": {
							"value": 0.5,
							"random": true,
							"anim": {
								"enable": false,
								"speed": 1,
								"opacity_min": 0.1,
								"sync": false
							}
						},
						"size": {
							"value": 7,
							"random": true,
							"anim": {
								"enable": false,
								"speed": 40,
								"size_min": 0.1,
								"sync": false
							}
						},
						"line_linked": {
							"enable": false,
							"distance": 500,
							"color": "#ffffff",
							"opacity": 0.4,
							"width": 2
						},
						"move": {
							"enable": true,
							"speed": 6,
							"direction": "bottom",
							"random": false,
							"straight": false,
							"out_mode": "out",
							"bounce": false,
							"attract": {
								"enable": false,
								"rotateX": 600,
								"rotateY": 1200
							}
						}
					},
					"interactivity": {
						"detect_on": "canvas",
						"events": {
							"onhover": {
								"enable": true,
								"mode": "bubble"
							},
							"onclick": {
								"enable": true,
								"mode": "repulse"
							},
							"resize": true
						},
						"modes": {
							"grab": {
								"distance": 400,
								"line_linked": {
									"opacity": 0.5
								}
							},
							"bubble": {
								"distance": 400,
								"size": 4,
								"duration": 0.3,
								"opacity": 1,
								"speed": 3
							},
							"repulse": {
								"distance": 200,
								"duration": 0.4
							},
							"push": {
								"particles_nb": 4
							},
							"remove": {
								"particles_nb": 2
							}
						}
					},
					"retina_detect": true
				}

			)
		}
		if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
			if ($scope.html.hasClass('water_effect')) {
				$scope.container.ripples({
					resolution: 512,
					dropRadius: 20,
					perturbance: 0.04
				});
			} else if ($scope.html.hasClass('particles_effect')) {
				$scope.particlesBlockInsert();
			} else if ($scope.html.hasClass('winter_effect')) {
				$scope.winterBlockInsert();
			} else if ($scope.html.hasClass('rainy_effect')) {
				$scope.rainyBlockInsert();
			}
		}

	}

	$scope.setEffect();

	/* ------------------------------ */
	/* FORM SUBMIT HINTS
	/* ------------------------------ */

	$scope.removeFormElements = function(current_form) {
		current_form.find('input').remove();
		current_form.find('textarea').remove();
		current_form.find('button').remove();
	}

	/* ------------------------------ */
	/* MAILCHIMP SUBSCRIBE FORM
	/* ------------------------------ */

	$scope.mailchimpForm = function() {
		$scope.form = [];
		for (var i = 0; i < $('[data-ng-submit="mailchimpForm"]').length; i++) {
			(function(i) {
				$scope.form[i] = $('[data-ng-submit="mailchimpForm"]').eq(i);
				$scope.form[i].ajaxChimp({
					callback: function(resp){
						if (resp.result === 'success') {
							$scope.removeFormElements($scope.form[i]);
							$scope.form[i].find('.success').fadeIn(1000).end()
								.find('.success_response').html(resp.msg).fadeIn(1000).end()
								.find('.error').fadeOut(0).end()
								.find('.error_response').fadeOut(0);
						} else if (resp.result === 'error') {
							$scope.form[i].find('.error').fadeIn(1000).end()
								.find('.error_response').html(resp.msg).fadeIn(1000);
						}
					},
					url: "http://google.us3.list-manage.com/subscribe/post?u=54cac12d99d1b2a0c0e0177b4&amp;id=d5469b7ba3" // Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "". 
				});
			})(i);
		}
	}

	$scope.mailchimpForm();

	/* ------------------------------ */
	/* SUBSCRIBE FORM
	/* ------------------------------ */

	$scope.subLetterForm = function($event) {
		$event.preventDefault();
		$scope.target = $($event.target),
		$scope.email = $scope.target.find('[name="email"]').val(),
		$scope.dataString = 'email=' + $scope.email;

		$scope.isValidEmail = function(emailAddress) {
			$scope.pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return $scope.pattern.test(emailAddress);
		};

		if ($scope.isValidEmail($scope.email)) {
			$http({
				method: "POST",
				url: "php/subscribe.php",
				data: $scope.dataString,
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			}).then(function(response) {
				$scope.removeFormElements($scope.target);
				$scope.target
					.find('.success').fadeIn(1000).end()
					.find('.error').fadeOut(0);
			}, function(response) {
				$scope.target.find('.error').fadeIn(1000);
			})
		} else {
			$scope.target.find('.error').fadeIn(1000);
		}

	}

	/* ------------------------------ */
	/* MESSAGE FORM
	/* ------------------------------ */

	$scope.contactForm = function($event) {
		$event.preventDefault();
		$scope.target = $($event.target),
		$scope.name = $scope.target.find('[name="name"]').val(),
		$scope.email = $scope.target.find('[name="email"]').val(),
		$scope.message = $scope.target.find('[name="message"]').val(),
		$scope.dataString = 'name=' + $scope.name + '&email=' + $scope.email + '&message=' + $scope.message;

		$scope.isValidEmail = function(emailAddress) {
			$scope.pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return $scope.pattern.test(emailAddress);
		};

		if ($scope.isValidEmail($scope.email) && ($scope.message.length > 1) && ($scope.name.length > 1)) {
			$http({
				method: "POST",
				url: "php/sendmail.php",
				data: $scope.dataString,
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			}).then(function(response) {
				$scope.removeFormElements($scope.target);
				$scope.target
					.find('.success').fadeIn(1000).end()
					.find('.error').fadeOut(0);
			}, function(response) {
				$scope.target.find('.error').fadeIn(1000);
			})
		} else {
			$scope.target.find('.error').fadeIn(1000);
		}

	}

	/* ------------------------------ */
	/* ELASTIC MESSAGE FORM
	/* ------------------------------ */

	$scope.elasticForm = function($event) {
		$event.preventDefault();
		$scope.target = $($event.target),
		$scope.name = $scope.target.find('[name="name"]').val(),
		$scope.email = $scope.target.find('[name="email"]').val(),
		$scope.message = $scope.target.find('[name="message"]').val(),
		$scope.dataString = 'name=' + $scope.name + '&email=' + $scope.email + '&message=' + $scope.message;

		$scope.isValidEmail = function(emailAddress) {
			$scope.pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return $scope.pattern.test(emailAddress);
		};

		if ($scope.isValidEmail($scope.email) && ($scope.message.length > 1) && ($scope.name.length > 1)) {
			$http({
				method: "POST",
				url: "php/sendmessage.php",
				data: $scope.dataString,
				headers: {"Content-Type": "application/x-www-form-urlencoded"}
			}).then(function(response) {
				$scope.removeFormElements($scope.target);
				$scope.target
					.find('.success').fadeIn(1000).end()
					.find('.error').fadeOut(0);
			}, function(response) {
				$scope.target.find('.error').fadeIn(1000);
			})
		} else {
			$scope.target.find('.error').fadeIn(1000);
		}

	}

});

})();