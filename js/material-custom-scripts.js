var jQM = jQuery.noConflict(true);

// jQuery(document).ready(function ($) {
jQM(document).ready(function ($) {

	// EXPERIMENTAL Animations
    fwoosh =  function(selector) {
		$(selector).addClass('animated fadeInDown');
		console.log("fwoosh's whoosh is done - " + selector);
	};
    var options = [{ selector:".whoosh", offset: 10, callback: "fwoosh('.whoosh')"}];
	Materialize.scrollFire(options);


	$('.button-collapse').sideNav({
			menuWidth: 300,		// Default is 240
			edge: 'left',		// Choose the horizontal origin
			closeOnClick: true	// Closes side-nav on <a> clicks, useful for Angular/Meteor
		}
	);

	$('.parallax').parallax();

	// Main Materialize dropdown nav initialization
	$('.dropdown-button.main-menu-item').dropdown({
	    inDuration: 300,
	    outDuration: 225,
	    constrain_width: false, // Does not change width of dropdown to that of the activator
	    hover: true, // Activate on hover
	    belowOrigin: true, // Displays dropdown below the button
	    gutter: -40,
	    alignment: 'left' // Displays dropdown with edge aligned to the left of button
	});
	// nested dropdown initialization 
	$('.dropdown-button.sub-menu-item').dropdown({
	    inDuration: 300,
	    outDuration: 225,
	    constrain_width: true, // Does not change width of dropdown to that of the activator
	    alignment: 'left',
	    hover: true // Activate on hover
	});


	// Note: not Materialize related, purely custom; also, mixes jQuery and vanilla
	// Resize sidebar Facebook widget on desktop screen resize or mobile orientation (portrait/landscape) change
	var resizeFacebookPagePlugin = function () {
		var $fbWidget = $(".sidebar-feature-fb"), 
			doTimeout = null,
			isMobile = /Mobi/.test(navigator.userAgent),
			fbReparse = function () {
				var widthUpdate = $fbWidget.width(),
			        frameWidthMax = widthUpdate > 500 ? 500 : widthUpdate; // delete?

				$fbWidget.html('<div class="fb-page" data-href="https://www.facebook.com/honkytonkdilettantes/" data-width="' + widthUpdate + '" data-height="500" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><blockquote cite="https://www.facebook.com/honkytonkdilettantes/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/honkytonkdilettantes/">Honky-Tonk Dilettantes</a></blockquote></div>');
				FB.XFBML.parse();
			};

		if ($fbWidget.length === 0) {
			return;
		} else {
			if (!isMobile) {
				$(window).resize(function() {
					if(this.resizeTO) { clearTimeout(this.resizeTO) };
					this.resizeTO = setTimeout(function() {
						$(this).trigger('resizeEnd');
					}, 500);
				});

				$(window).bind('resizeEnd', function() {
					fbReparse();
				});
			}
			else {
				var currentViewMode = window.matchMedia("(orientation: portrait)");

				currentViewMode.addListener(function(m) {
					var newViewMode = window.matchMedia("(orientation: portrait)");

					if(newViewMode === currentViewMode) {
						return;
					}
					else {
						// Orientation change
						currentViewMode = window.matchMedia("(orientation: portrait)");
						fbReparse();
					}
				});
			}
		}

		
	}
	resizeFacebookPagePlugin();


	// Custom Experiment
	(function ($) {
		MaterialCustom.fwoosh =  function(selector) {
			$('.whoosh').addClass('animated fadeInLeft');
			console.log("fwoosh's whoosh is done");
		};
	  
	});
});

