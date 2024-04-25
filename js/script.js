$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

$("input").on("change", function () {
    $("body").toggleClass("blue");
});

function introAboutLogoTransition() {
    $("#about-quad").css("top", "70%");
    $("#about-quad").css("opacity", "1");
}

document.getElementById("DetailsEverest").addEventListener("click", function() {
    var newPage = window.open("Everest.html", "_blank");
});

document.getElementById("DetailsHoliday").addEventListener("click", function() {
    var newPage = window.open("Holiday.html", "_blank");
});

document.getElementById("DetailsAndaman").addEventListener("click", function() {
    var newPage = window.open("Andaman.html", "_blank");
});

