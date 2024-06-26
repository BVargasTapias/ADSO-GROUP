$(document).ready(function () {
    $("#cont").hide()
    $("#primero").click(function () {
        $("#cont").slideDown()
    })
    $("#primero").dblclick(function () {
        $("#cont").slideUp()
    })
    $("#card4").hide()
    $("#card5").hide()
    $("#cuatro").hover(function () {
        $("#card4").slideDown()
        $("#card5").slideDown()
        $("#card1").hide()
        $("#card2").hide()
        $("#card3").hide()
    })
    $("#tres").hover(function () {
        $("#card4").hide()
        $("#card5").hide()
        $("#card1").slideDown()
        $("#card2").slideDown()
        $("#card3").slideDown()
    })

})

$(document).ready(function () {

})

