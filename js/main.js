$(document).ready(function() {
	//modal image
	$('section#screenshots a').on('click', function() {
			$('div#modal img').attr('src', $(this).attr('data-image-url') );
	});

	//navigation effect
	var nav = $('.navbar-fixed-top');

	var distance = $('.navbar-fixed-top').offset();

	// console.log(distance);

	if(distance.top >= 300) {
		nav.addClass('effect');
	}

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		
		// console.log(scroll);

		if (scroll >= 300) {
			nav.addClass('effect');
		} else {
			nav.removeClass('effect');
		}
	});

	//smoothscroll
    smoothScroll.init({
    	speed: 800,
    	easing: 'easeInOutQuad',
    	// easing: 'linear',
    	// easing: 'easeInOutCubic',
    	// easing: 'easeInOutQuint',
    	updateURL: false,
    	offset: 0
    	// offset: 500

    });

    //about animate
    $('#about .blue-circle').waypoint(function(){
		// console.log("you have entered");
		$('#about .blue-circle').addClass('animated fadeInUp')
	}, {
		offset:'50%'
	});

	//blu-circle features animate
	$('#features .blue-circle').waypoint(function(){
		// console.log("you have entered");
		// console.log(this);
		// console.log(this.element);
		$(this.element).addClass('animated fadeInUp')
		// $('#features .blue-circle').addClass('animated fadeInUp')
	}, {
		offset:'50%'
	});

	//features animate
	$('.features-image img').waypoint(function(){
		// console.log("you have entered");
		$('.features-image img').addClass('animated rubberBand')
		// $('.features-image img').addClass('animated infinite rubberBand')
	}, {
		offset:'50%'
	});

	//modal image animaition
	$('#screenshots .col-xs-4').waypoint(function(){
		// console.log("you have entered");
		// console.log(this);
		// console.log(this.element);
		$(this.element).addClass('animated zoomIn');
		$(this.element).css({'opacity':1}); 
		// $('#features .blue-circle').addClass('animated fadeInUp')
	}, {
		offset:'50%'
	});

	//download animate yang gambar kiri
	$('#download div.phone img').waypoint(function(){
		// console.log("you have entered");
		// console.log(this);
		// console.log(this.element);
		$(this.element).addClass('animated fadeInRight'); 
		// $('#features .blue-circle').addClass('animated fadeInUp')
	}, {
		offset:'50%'
	});

	//download animate yang platform
	$('#download .platforms > div').waypoint(function(){
		// console.log("you have entered");
		// console.log(this);
		// console.log(this.element);
		$(this.element).addClass('animated fadeInUp'); 
		// $('#features .blue-circle').addClass('animated fadeInUp')
	}, {
		offset:'50%'
	});

	$('#form').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh',
		},
		fields: {
			name: {
				validators: {
					notEmpty: {
						message: 'This field is required and cannot be empty'
					},
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: 'This field is required and cannot be empty'
					},
					emailAddress :{
						message: 'This input is no a valid address'
					}
				}
			},
			message: {
				validators:{
					notEmpty: {
						message: 'This message cannot be empty, who sends an empty message???'
					}
				}
			},
		}
	}).on('success.form.vb', function(e){
		e.preventDefault();

		var $form = $(e.target);

		var bv = $form.data('bootstrapValidator');

		$.post($form.attr('action'), $form.serialize(), function(result){
			console.log(result);
		},'json');
	});

});