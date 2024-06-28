$(document).ready(function () {
  $("#cont").hide();
  $("#primero").click(function () {
    $("#cont").slideDown();
  });
  $("#primero").dblclick(function () {
    $("#cont").slideUp();
  });
  $("#card4").hide();
  $("#card5").hide();
  $("#cuatro").hover(function () {
    $("#card4").slideDown();
    $("#card5").slideDown();
    $("#card1").hide();
    $("#card2").hide();
    $("#card3").hide();
  });
  $("#tres").hover(function () {
    $("#card4").hide();
    $("#card5").hide();
    $("#card1").slideDown();
    $("#card2").slideDown();
    $("#card3").slideDown();
  });
});

$(document).ready(function () {
  $("#inicioSesion").hide();
  $("#alerta").hide();

  $("#inicioS").click(function () {
    $("#inicioSesion").fadeIn();
  });
  $("#inicioS").dblclick(function () {
    $("#inicioSesion").fadeOut();
  });
  $("#send").click(function () {
    $("#alerta").fadeIn();
    $("#inicioSesion").fadeOut();
  });
  $("#send2").click(function () {
    $("#inicioSesion").fadeOut();
  });
  $("#send3").click(function () {
    $("#alerta").fadeOut();
  });
});
