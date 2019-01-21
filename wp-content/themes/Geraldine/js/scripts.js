jQuery(document).ready(function($){ // START


  // Input title
  $( "input[title], textarea[title]" ).each(function() {if($(this).val() === '') {$(this).val($(this).attr('title'));}
    $(this).focus(function() {if($(this).val() == $(this).attr('title')) {$(this).val('').addClass('focused');}});
    $(this).blur(function() {if($(this).val() === '') {$(this).val($(this).attr('title')).removeClass('focused');}});
  });


  // Fade in and out
  $( ".fade" ).hover(
    function() {$(this).fadeTo( "medium", 1 );},
    function() {$(t