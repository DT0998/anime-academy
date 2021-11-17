// sticky nav
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop()){
    $('nav').addClass("sticky");
   }else{
       $('nav').removeClass("sticky");
   }
 })
});


// dropdown menu mob
  $('.js--nav-icon').click(function() {
    var nav = $('.dropdown-content-4,.dropdown-content-6');
    var icon = $('.js--nav-icon ion-icon');
    
        nav.slideToggle();

    if (icon.attr("name") === 'reorder-three-outline') {
        icon.attr("name", 'close-outline');
    } else {
        icon.attr("name", 'reorder-three-outline');
    }
});

// dropdown menusub
$('.dropdown-btn-1').click(function() {
  $('nav ul .dropdown-content-1').toggle();
});
$('.dropdown-btn-2').click(function() {
  $('nav ul .dropdown-content-2').toggle();
});
$('.dropdown-btn-3').click(function() {
  $('nav ul .dropdown-content-3').toggle();
});
$('.dropdown-btn-5').click(function() {
  $('nav ul .dropdown-content-5').toggle();
 });
$('.dropdown-btn-7').click(function() {
  $('nav ul .dropdown-content-7').toggle();
 });
 $('.dropdown-btn-8').click(function() {
  $('nav ul .dropdown-content-8').toggle();
});

// desk
 function morefunction() {
  var menuright = document.getElementById("menuright").style;
	var menuleft = document.getElementById("menuleft").style;
	if(!menuright.display & menuleft.display == "none"){
		menuleft.display = "block";
	}
else{
	menuleft.display = "none";
	}
}

function avatarfunction() {
  var menuright = document.getElementById("menuright").style;
  var menuleft = document.getElementById("menuleft").style;
	if(!menuleft.display & menuright.display == "none"){
		menuright.display = "block";
	}
else{
	menuright.display = "none";
	}
}
// mobile

function moresubfunction() {
  var menuright = document.getElementById("menurightsub").style;
	var menuleft = document.getElementById("menuleftsub").style;
	if(!menuright.display & menuleft.display == "none"){
		menuleft.display = "block";
	}
else{
	menuleft.display = "none";
	}
}

function avatarsubfunction() {
  var menuright = document.getElementById("menurightsub").style;
  var menuleft = document.getElementById("menuleftsub").style;
	if(!menuleft.display & menuright.display == "none"){
		menuright.display = "block";
	}
else{
	menuright.display = "none";
	}
}

