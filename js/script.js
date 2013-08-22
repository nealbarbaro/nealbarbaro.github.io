$(document).on("ready", function(){
  $(".headline-name").fitText(1.2, { minFontSize: '20px', maxFontSize: '400px' });
  $(".headline-title").fitText(1.2, { minFontSize: '10px', maxFontSize: '20px' });


  // $(window).resize(function() {
  //   var headerheight = $(window).height() * .2;
  //   $("#headline-name").height(bodyheight);
  // });


}); // docReady