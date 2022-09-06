$(document).ready(function () {
    // good wishes
    var now = new Date();
        var hours = now.getHours();
        var msg;

        if (hours < 12) msg = "Good Morning, Admin";
        else if (hours < 18) msg = "Good Afternoon, Admin";
        else msg = "Good Evening, Admin";
    $('.day-message').html('<p>'+msg+'</p>');

    $(":text").css("color", "red");

    // toggle-menu-icon
    $(".toggle-menu-icon").click(function () {
        $(".main-rightsidebar").toggleClass("active");
        $(".sidebar").toggleClass("active");
    });
});