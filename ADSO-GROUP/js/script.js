$(document).ready(function () {
    $("#cont").hide()
    $("#primero").click(function () {
        $("#cont").slideDown()
    })
    $("#primero").dblclick(function () {
        $("#cont").slideUp()
    })
    $("#prueba").hide()
    $("#prueba1").hide()
    $("#prueba2").hide()
    $("#tres").hover(function () {
        $("#prueba").slideDown()
        $("#prueba1").slideDown()
        $("#prueba2").slideDown()
    })

})

$(document).ready(function () {

})

