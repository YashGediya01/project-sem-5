$(document).ready(function () {

    // loader
    var loader = $('body');
    loader.addClass('notLoaded');
    setTimeout(function () {
        loader.removeClass('notLoaded');
    }, 1000);;
    setInterval(function () {
        $("#loader").fadeOut();
    }, 1000)

    //--------------- counter---------------
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //---------- init Isotope ---------------
    var $grid = $('.grid').isotope({
    });
    $('.filter-button-group').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        $('.filter-button-group>li').removeClass('active');
        $(this).addClass('active');

    });
    $("a.grouped_elements").fancybox();

    // toggle eye password
    $('#togglePassword').click(function () {

        if ($(this).hasClass('fa-eye-slash')) {

            $(this).removeClass('fa-eye-slash');

            $(this).addClass('fa-eye');

            $('#password').attr('type', 'text');

        } else {
            $(this).removeClass('fa-eye');

            $(this).addClass('fa-eye-slash');

            $('#password').attr('type', 'password');

        }
    });

});

$(document).ready(function () {

    //--------------- Index-banner---------------
    $('#main_banner').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        //center:true,
        //mouseDrag:false,
        //stagePadding: 50,
        //merge:true,
        //startPosition: 2,
        autoplay: true,
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
    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();
    });

    //--------------- Experience-banner---------------
    $('#main-experience').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        animateIn: 'animate__fadeIn',
        animateOut: 'animate__fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('#testimonials').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
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

    //----------- Bottom to top scroll -------------
    $('.main-sroll-top').bind("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 0);
        return false;
    });
    $('.main-sroll-top').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.main-sroll-top').fadeIn();
        } else {
            $('.main-sroll-top').fadeOut();
        }
    });

    //--------------- form validation---------------
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

    //--------------- Fixed top header---------------
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

    // datePicker in tour Details page
    $(function () {
        var from = $("#datepicker").datepicker({
            dateFormat: "dd-mm-yy",
            changeMonth: true,
            minDate: 0,
        }).on("change", function () {
            var to = $("#todatepicker").datepicker({
                dateFormat: "dd-mm-yy",
                changeMonth: true,
                minDate: 0,
            })
            to.datepicker("option", "minDate", getDate(this));

            var toDate = new Date(getDate(this));
            toDate.setDate(toDate.getDate() + 9);
            to.datepicker("option", "maxDate", toDate);

        })

        function getDate(element) {
            var date;
            var dateFormat = "dd-mm-yy";
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }
            return date;
        }
        $("#datepicker").click(function () {
            $("#ui-datepicker-div").addClass("tour-from-date-picker");
        })
    });

    // select-img in tour-details page
    $("#inputGroupSelect02").change(function () {
        _data_image = $('option:selected', this).data('image');
        $('.active').removeClass('active');
        $(_data_image).addClass('active');
    });

    // when select option then auto change label price in tour details page
    $(function () {
        $('#inputGroupSelect02').change(function () {
            if ($('#inputGroupSelect02').val() == '2') {
                $('#selectPriceLabel').text('$1500/-');
            } else if
                ($('#inputGroupSelect02').val() == '3') {
                $('#selectPriceLabel').text('$2500/-');
            } else if
                ($('#inputGroupSelect02').val() == '4') {
                $('#selectPriceLabel').text('$3000/-');
            } else if
                ($('#inputGroupSelect02').val() == '5') {
                $('#selectPriceLabel').text('$2500/-');
            } else if
                ($('#inputGroupSelect02').val() == '6') {
                $('#selectPriceLabel').text('$1500/-');
            } else if
                ($('#inputGroupSelect02').val() == '7') {
                $('#selectPriceLabel').text('$1300/-');
            } else {
                $('#selectPriceLabel').text('Price');
            }
        });
    });

});

// show password eye button
$(function () {
    $('#togglePassword').click(function () {

        if ($(this).hasClass('fa-eye-slash')) {

            $(this).removeClass('fa-eye-slash');

            $(this).addClass('fa-eye');

            $('#password').attr('type', 'text');

        } else {

            $(this).removeClass('fa-eye');

            $(this).addClass('fa-eye-slash');

            $('#password').attr('type', 'password');
        }
    });
});


// login admin
function login() {
    if ($("#username").val() == "admin" && $("#password").val() == "password") {
        window.location = "./Pages/dashboard.html";
    } else {
        window.location = "./Pages/index.html";
    }
};
