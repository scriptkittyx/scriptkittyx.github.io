$(document).ready(function(){

	$("#preload").show().delay(2800).fadeOut();
	$("#front-page").hide().delay(2800).fadeIn(800);
	$("#nhc-start, #homeowner-start, #homeowner-form, #next-steps, #end-page").hide();
	$(".nhc-results, .nhc-lot").hide();

 });

$("#start").click(function(){
    $("#nhc-start").fadeIn(800);
    $("#front-page").hide();
});

$("#load-pricing").click(function() {
    $(".nhc-info").fadeOut(300);
    $(".nhc-results").delay(2000).fadeIn(300);
    $("#preload").show().delay(2000).fadeOut();
});

$("#load-lot").click(function() {
    $(".nhc-results").fadeOut(300);
    $(".nhc-lot").delay(2000).fadeIn(300);
    $("#preload").show().delay(2000).fadeOut();
});

$("#finish-nhc").click(function(){
    $("#preload").show().delay(2800).fadeOut();
    $("#homeowner-start").delay(2800).fadeIn(800);
    $("#nhc-start").hide();
});

$("#start-form").click(function(){
    $("#homeowner-form").fadeIn(800);
    $("#homeowner-start").hide();
});

$("#finish-form").click(function(){
    $("#preload").show().delay(2800).fadeOut();
    $("#next-steps").delay(2800).fadeIn(800);
    $("#homeowner-form").hide();
});

$("#finish-steps").click(function(){
	$("#end-page").fadeIn(800);
	$("#next-steps").hide();
});

$(".presale").click(function(){
    $("#presale-address").toggle();
		$(".presale-label").toggleClass('blued');
});

$('#welcome-back').click(function() {
    location.reload();
});


$("a.link-modal").on('click', function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $(".docusign-form").html('<iframe id="frame" frameborder="0" scrolling="no" allowtransparency="true" src="'+url+'"></iframe>');
});



var currentBoxNumber = 0;
$(".username").keyup(function (event) {
    if (event.keyCode == 13) {
        textboxes = $("input.username");
        currentBoxNumber = textboxes.index(this);
        console.log(textboxes.index(this));
        if (textboxes[currentBoxNumber + 1] != null) {
            nextBox = textboxes[currentBoxNumber + 1];
            nextBox.focus();
            nextBox.select();
            event.preventDefault();
            return false;
        }
    }
});


$(".load-pricing").bind("enterKey",function(e){
	$(".nhc-info").fadeOut(300);
  $(".nhc-results").delay(2000).fadeIn(300);
	$("#preload").show().delay(2000).fadeOut();
});


$(".load-pricing").keyup(function(e){
	if(e.keyCode == 13)
	{
	  $(this).trigger("enterKey");
	}
});

// Lot Addresses

$(function() {
    $('#lot-1').hide();
    $('.lot-number').change(function(){
        if($('.lot-number').val() == 'lot-1') {
            $('#lot-1').show();
        } else {
            $('#lot-1').hide();
        }
    });
});

$(function() {
    $('#lot-2').hide();
    $('.lot-number').change(function(){
        if($('.lot-number').val() == 'lot-2') {
            $('#lot-2').show();
        } else {
            $('#lot-2').hide();
        }
    });
});

$(function() {
    $('#lot-3').hide();
    $('.lot-number').change(function(){
        if($('.lot-number').val() == 'lot-3') {
            $('#lot-3').show();
        } else {
            $('#lot-3').hide();
        }
    });
});
