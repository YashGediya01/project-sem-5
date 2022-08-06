$(document).ready(function () {

    // loader
    // var loader = $('body');
    // loader.addClass('notLoaded');
    // setTimeout(function () {
    //     loader.removeClass('notLoaded');
    // }, 500);;

    // setInterval(function () {
    //     $("#loader").fadeOut();
    // }, 500)

    // login-form-validation

    // Bottom to top scroll
	$('.main-sroll-top').bind("click", function () {
		$('html, body').animate({ scrollTop: 0 }, 1200);
		return false;
	});
	$('.main-sroll-top').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.main-sroll-top').fadeIn();
		} else {
			$('.main-sroll-top').fadeOut();
		}
	});

    // form validation
    $('#form').submit(function () {
        var username = $('#username').val();
        var password = $('#password').val();
        var pass_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

        if (username == "") {
            alert("Please Enter Usename..!");
            return false;
        }
        if (password == "") {
            alert("Enter Your password...!");
            return false;
        }
        if (pass_regex.test(password) == false) {
            alert("Plz Enter Valid Password..!");
            return false;
        }
        if ($('input[type=checkbox]:checked').length == 0) {
            alert("ERROR! Please select at least one checkbox");
            valid = false;
            return false;
        }


    })

    // Fixed top header
    $(window).scroll(function () {

        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 170) {
            sticky.addClass('fixed');
        }
        else {
            sticky.removeClass('fixed');
        }

    });

    // Index-banner
    $('#main_banner').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
		//center:true,
		//mouseDrag:false,
		//stagePadding: 50,
		//merge:true,
		//startPosition: 2,
		// autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		animateIn: 'animate__fadeIn',
		animateOut: 'animate__fadeOut',
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})
    var owl = $('#main_banner');
	owl.owlCarousel();
	// Listen to owl events:
	owl.on('changed.owl.carousel', function (event) {

		new WOW().init();

	})

});


// show password eye button
// const togglePassword = document
//     .querySelector('#togglePassword');

// const password = document.querySelector('#password');

// togglePassword.addEventListener('click', () => {
//     const type = password
//         .getAttribute('type') === 'password' ?
//         'text' : 'password';

//     password.setAttribute('type', type);
//     this.classList.toggle('fa-eye');
// });



