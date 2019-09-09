// Custom Dropdown (For account/admin)
function topNavDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    }
}

//Replace property name with propery address

var propertyAdd = $('.txt-property-address');


$('.txt-property-address').keyup(function () {
    $('.txt-property-name').val($(this).val());
    $('.txt-property-title').text($(this).val());
});


$('.txt-property-address').focusin(function() {
    $('.txt-property-focus').addClass("is-focused");
});


$('.txt-property-address').focusout(function()  {
    if ($('.txt-property-address').val() != '') {
        $('.txt-property-focus').addClass("is-dirty").removeClass("is-focused");
    }
    else{
        $('.txt-property-focus').removeClass("is-focused is-dirty is-upgraded");
        return false
    }
});


// Next Progress Bar
var totalQuestions = 8;
var currentQuestion = 0;
var $progressbar = $(".progress-bar");

$(".progress-bar-next").on("click", function(){
  if (currentQuestion >= totalQuestions){ return; }
  currentQuestion++;
  $progressbar.css("width", Math.round(100 * currentQuestion / totalQuestions) + "%");
});
$(".progress-bar-prev").on("click", function(){
    currentQuestion--;
    $progressbar.css("width", Math.round(100 * currentQuestion / totalQuestions) + "%");
  });
// Next Card Animation

$( ".start-next" ).click(function( event ) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $('.slidecard').show().offset().top +120 }, 'fast');  
});

$( ".start-next2" ).click(function( event ) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $('.slidecard2').show().offset().top -100 }, 'fast');  
});

$( ".start-next3" ).click(function( event ) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $('.slidecard3').show().offset().top -120 }, 'fast');  
});

$( ".start-next4" ).click(function( event ) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $('.slidecard4').show().offset().top -120 }, 'fast');  
});

$( ".start-next5" ).click(function( event ) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $('.slidecard5').show().offset().top -10 }, 'fast');  
});

$( ".start-next6" ).click(function( event ) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $('.slidecard6').show().offset().top -120 }, 'fast');  
});
$( ".start-next7" ).click(function( event ) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $('.slidecard7').show().offset().top -120 }, 'fast');  
});


// Services
$( ".title-card" ).click(function() {
    $( "#rush-title" ).slideToggle( "slow");
  });


$('#checkbox1').change(function() {
    if ($(this).is(':checked')) {
        $('#rush-date').show();
    } else {
        $('#rush-date').hide();
    }
  });





  
// Property
$( ".short-legal" ).click(function() {
    $( "#short-legal-form" ).slideToggle( "slow");
  });


// Title
$('#title-gab-search').bind("enterKey",function(e){
    $('#title-gab-results').fadeIn("fast");
    });
    $('#title-gab-search').keyup(function(e){
    if(e.keyCode == 13)
    {
      $(this).trigger("enterKey");
    }
});

$( ".ben-selected" ).click(function() {
    $('#title-gab-results, #title-gab-search').hide();
    $( "#step-title-2" ).fadeIn("slow");
  });
  $( "#back-title-search" ).click(function() {
    $( "#step-title-2" ).hide();
    $('#title-gab-results, #title-gab-search').fadeIn("slow");
  });

  //Business Source

 
$("#biz-gab-search").keyup(function () {
    $(".wells-drop").css("display", this.value == "Wells" ? "block" : "none");
});

$(".wells-drop" ).click(function() {
    $("#step-business-1").hide();
    $( "#step-business-2" ).fadeIn("slow");
  });
  $( "#back-biz-search" ).click(function() {
    $( "#step-business-2" ).hide();
    $('#step-business-1').fadeIn("slow");
  });

// Selection - when card is highlighted/active (GREEN)

$( ".card, .card-lg" ).click(function() {
    $( this ).toggleClass( "active-card" );
});


// Header Top Toggle
//$( ".new-order" ).click(function() {
   // $( "#order" ).fadeToggle();
  //});

// Custom Sticky Header
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}




// Custom Side Navigation Toggle 
function toggleNav() {
    var element = document.getElementById("sidenav");
    if (element.style.width == "260px") 
    {(document.getElementById("main").style.marginLeft = "0");(document.getElementById("sidenav").style.opacity = "0");
        (element.style.width = "0px");
    } else {
        (element.style.width = "260px");
    (document.getElementById("main").style.marginLeft = "260px");
    (document.getElementById("sidenav").style.opacity = "1");
    }
}  