$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$('.navlinks').click(function () {
    $('.navTrigger').toggleClass('active')
    $("#mainListDiv").toggleClass("show_list");
});