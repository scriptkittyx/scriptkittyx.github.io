/* -----------------------------------------------
/* Avetis Application Custom JS 
/* ----------------------------------------------- */

$(document).ready(function(){ 


    /* Avetis Bird Initial Bird Animation */
    $( ".bird-fade" ).click(function() {
      $( ".bird-container" ).animate({
        left: "80%",
        top: "10%"
      }, 1500 );
      $(".bird-fade, .powered-by").fadeOut("slow");
      $( ".bird-body-container" ).delay(700).fadeOut("slow");
      $( ".head" ).delay(700).fadeIn("slow");
      $(" .menu-btn").fadeIn(2000);
      $(".schedule-nurse").delay(1500).fadeIn(1000);
    });



    /* Slider Menu */
    $( ".header-slider" ).click(function() {
      $( ".header" ).slideToggle( "slow" );
    });


    /* Logo Main back */
    $(".logo-refresh").click(function(){
      $("#analytics, #patient-history, #nurse-share-data, #parent-share-data, #message-doctor, #schedule-nurse, #schedule-patient, #training-library, #training-plan").removeClass("current").fadeOut("slow");
      $(".schedule-nurse").addClass("current").fadeIn("slow");
    });

    /* Navigation Icon Animation, Logo toggle */

    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
      $(this).toggleClass('open');
      $( ".avetis-logo, .experience-menu" ).toggle(200);
    });


    /* Menu Link Hover Style */

    $(".menu").hover(function(){ $(this).toggleClass('cn'); });



    /* Experience Selection - Type 1*/

    $('body').on('click','.menu-list ul li a', function(e) {
      $('#main').show();
      $('.schedule-nurse').fadeOut(200);
      $('#main').children().removeClass("current").fadeOut("slow");
      $($(this).attr('href')).addClass("current").fadeIn("slow");
      e.preventDefault();
      $( ".avetis-logo, .experience-menu" ).toggle(200);
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
      $(".header").removeClass("open").slideUp(400);
    });



    /* Experience Selection - Type 2*/

    var $divs = $(".main").children("div"),
      index = 0;

    $("#next-exp").click(function () {
      updateStatus(1);
    });

    $("#prev-exp").click(function () {
      updateStatus(-1);
    });

    function updateStatus(a) {

      $divs.eq(index).removeClass("current").fadeOut("slow");
      index += a;
      $divs.eq(index).addClass("current").fadeIn("slow");

      $("#next").toggle((index !== $divs.length - 1));
      $("#prev").toggle(index !== 0);
    }


});