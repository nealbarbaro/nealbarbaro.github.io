$(document).on("ready", function(){
  $(".headline-name").fitText(1.2, { minFontSize: '10px', maxFontSize: '400px' });
  $(".headline-title").fitText(1.2, { minFontSize: '3px', maxFontSize: '20px' });
  $('#projects').addClass('hidden');

  // Event Handlers
  var $title = $('.headline-title');
  var $nav_item = $('.nav-item');

  $('#about-nav').on('click', function(){
    $title.html("full stack web developer");
    $nav_item.css('display', 'none');

    $('#about-desc').css('display', 'block');
  });

  $('#projects-nav').on('click', function(){
    $title.html("projects");
    $nav_item.css('display', 'none');
    $('#projects').removeClass('hidden');
    $('#projects').css('display', 'block');
  });

  $('#resume-nav').on('click', function(){
    $title.html("resume");
    $nav_item.css('display', 'none');
    $('#resume').css('display', 'block');
  });

  $('#contact-nav').on('click', function(){
    $title.html("contact");
    $nav_item.css('display', 'none');
    $('#contact').css('display', 'block');
  });

  // SliceBox:
  $(function() {
    var Page = (function() {
      var $navArrows = $( '#nav-arrows' ).hide(),
        $navDots = $( '#nav-dots' ).hide(),
        $nav = $navDots.children( 'span' ),
        $shadow = $( '#shadow' ).hide(),
        slicebox = $( '#sb-slider' ).slicebox( {
          onReady : function() {
            $navArrows.show();
            $navDots.show();
            $shadow.show();
          },
          onBeforeChange : function( pos ) {
            $nav.removeClass( 'nav-dot-current' );
            $nav.eq( pos ).addClass( 'nav-dot-current' );
          }
        } ),
        init = function() {
          initEvents();
        },
        initEvents = function() {
          // add navigation events
          $navArrows.children( ':first' ).on( 'click', function() {
            slicebox.next();
            return false;
          } );
          $navArrows.children( ':last' ).on( 'click', function() {
            slicebox.previous();
            return false;
          } );
          $nav.each( function( i ) {
            $( this ).on( 'click', function( event ) {
              var $dot = $( this );
              if( !slicebox.isActive() ) {
                $nav.removeClass( 'nav-dot-current' );
                $dot.addClass( 'nav-dot-current' );
              }
              slicebox.jump( i + 1 );
              return false;
            } );
          } );
        };
        return { init : init };
    })();
    Page.init();
  });


  $('#sb-slider').slicebox();
  // $(window).resize(function() {
  //   var headerheight = $(window).height() * .2;
  //   $("#headline-name").height(bodyheight);
  // });


}); // docReady