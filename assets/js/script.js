$(document).ready(function () {
    $(".language_state").hover(function () {
        $(".change_langfauage_drop").slideDown(100);
    })
    $(".language_state").mouseleave(function () {
        $(".change_langfauage_drop").slideUp(100);
    })


    $("#closeCanvas").click(function () {
        $(".bottom_header").hide();
    })
    $("#menuBtn").click(function () {
        $(".bottom_header").toggle();

    })

    $(".categorys_box").hover(function () {

        if ($(this).find(".hover_category").css("display") == "none") {
            $(this).find(".hover_category").css("display", "flex");
        } else {
            $(this).find(".hover_category").css("display", "none");
        }
    })


    $("#searchMenu").click(function () {

        if ($("#searchHistory").css("display") == "block") {
            $(".search_box").find("button").css("border-bottom-left-radius", "7px")
            $(".search_box").find("input").css("border-bottom-right-radius", "7px")
            $(".allcover_bg").hide();
        } else {
            $(".search_box").find("button").css("border-bottom-left-radius", "0px")
            $(".search_box").find("input").css("border-bottom-right-radius", "0px")
            $(".allcover_bg").show();
        }


        $("#searchHistory").slideToggle(100);
    })

    $("#SignInDo").click(function () {
        $("#loginPOPUP").fadeToggle(200)
    })



    $(document).mouseup(function (e) {
        var container = $(".inside_flex");
        var container2 = $(".cart_wrapper");

        var hide = $(".sign_popup");
        if (container.is(e.target) && container.has(e.target).length === 0) {
            hide.hide();
        }

        if (container2.is(e.target) && container2.has(e.target).length === 0) {
            if (container2.css("display") == "block") {
                container2.fadeToggle(200);
            }
        }
    });



    $(document).on("click", function (event) {

        if (event.target.matches("#searchHistory") || event.target.matches("#searchMenu") || event.target.matches("#searchBTn") || event.target.matches("li")) {

        } else {
            $(".search_box").find("button").css("border-bottom-left-radius", "7px")
            $(".search_box").find("input").css("border-bottom-right-radius", "7px")
            $("#searchHistory").hide()
            $(".allcover_bg").hide();
        }

    })



    $("#searchHeader").click(function () {

        if ($(".search_header").css("display") == "none") {
            $(".search_header").css("margin-left", "0px")
            $(".search_header").css("margin-right", "20px")
            $(".search_header").show();
            $(".logo_header").hide();
        }else{
            $(".search_header").css("margin-left", "5px")
            $(".search_header").css("margin-right", "0px")
            $(".search_header").hide();
            $(".logo_header").show();
        }

    })

    $(".product_box").hover(function () {
        $(this).css("transition", "box-shadow 0.5s ease-out")
    })


    $("#tabStartAccount").click(function () {
        $("#signin").hide();
        $("#signUP").show()
    })

    $("#tabLoginAccount").click(function () {
        $("#signUP").hide()
        $("#signin").show();
    })



    $("#CartOpen").click(function () {
        $("#cartSlider").fadeToggle(200)

    })

    $("#closeCartSlider").click(function () {
        $("#cartSlider").fadeToggle(400)
    })
})

