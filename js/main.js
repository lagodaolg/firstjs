$($(document).ready(function () {
    var count = 1;
    let stop = $("button");

    $(".change").click(function () {
        result = prompt("Введите новое слово", "")

        if (result == undefined) {
            return false;
        } else {

            $(".block").html(result);
        }
    })


    $(".stop").click(function () {
        $(".stop").toggleClass("active");
        $(".stop").toggleClass("start");

    });


    $("button").click(function () {
        $("p").toggle();
    });


    function transition() {
        if (stop.hasClass("active")) {
            return false;
        } else if (count == 1) {
            $(".block").css("color", "red");
            count = 2;
        } else if (count == 2) {
            $('.block').css("color", "green");
            count = 3;

        } else if (count == 3) {
            $('.block').css("color", "purple");
            count = 4;

        } else if (count == 4) {
            $('.block').css("color", "yellow");
            count = 1;
        }

    }
    setInterval(transition, 2000);



}));