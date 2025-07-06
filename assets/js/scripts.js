( function ( $ ) {
  const app = {
    initAnchor: function() {
      const scroll = function( scrollTop = 0, offset = 50 ) {
        $( 'html, body' ).stop().animate( { scrollTop: scrollTop - offset }, 1000 );
      };

      $( '[href^="#"]' ).click( function( e ) {
        e.preventDefault();
        const $this = $( this );
        const href = $this.attr('href');

        if ( '#top' == href ) {
          scroll();
        } else if ( $this.hasClass('scroll-down') ) {
          scroll( $( window ).height() + $(window).scrollTop() );
        } else if ( href.length > 2 ) {
          scroll( $( href ).offset().top );
        }
      } );

      $( '[href*="#"]:not([href^="#"])' ).click( function( e ) {
        const $this = $( this );
        const base = location.href.substring( 0, location.href.lastIndexOf( '/' ) ).toLowerCase();
        const href = $this.attr( 'href' );
        const hrefBase = href.substr( 0, href.indexOf( '#' ) );

        if ( base == hrefBase ) {
          e.preventDefault();
          const hash = href.substr( href.indexOf( '#' ) );
          
          scroll( $( hash ).offset().top );
        }
      });

      if ( location.hash ) {
        if( $( location.hash ).length > 0 ) {
          scroll( $( location.hash ).offset().top );
        }
      }
    },

    initHeaderScroll: function() {
      if ( $( window ).scrollTop() > 0 ) {
        if ( ! $( 'html' ).hasClass( 'is-scrolled' ) ) {
          $( 'html' ).addClass( 'is-scrolled' );
        }
      } else {
        if ( $( 'html' ).hasClass( 'is-scrolled' ) ) {
          $( 'html' ).removeClass( 'is-scrolled' );
        }  
      }
    },
    
    initMenu: function() {
      $( '.js-menu' ).on( 'click', function() {
        $( 'html' ).toggleClass( 'is-menu-opened' );
      } );
    },

    initMenuResize: function() {
      $( 'html' ).removeClass( 'is-menu-opened' );
    },
    
    initEmptyPage: function() {
      $( '.main, .lower__wrap' ).each( function() {
        if ( $( this ).html().trim() === '' ) {
          $( this ).empty();
        }
      } );
    },
  }

  /* Document Ready */
  $( document ).ready( function() {

    app.initAnchor();

    app.initHeaderScroll();

    app.initMenu();
    app.initMenuResize();

    app.initEmptyPage();

    AOS && AOS.init({
        duration: 1e3,
        easing: "ease-out-quart",
        once: !0
    });
    Splitting();
      const i = e(".banner__ttl-en .char");
      i.css({
          opacity: 0
      });
      let s = 0;
      n()
  } );

  /* Window Load */
  $( window ).on( 'load', function() {
     $(".loader").fadeOut("slow");
  } );

  /* Window Scroll */
  $( window ).on( 'scroll', function() {

    app.initHeaderScroll();

  } );
  
  /* Window Resize */
  $( window ).on( 'resize', function() {

    app.initMenuResize();

  } );

  /* Typing */
   var typed = new Typed(".typing", {
    strings: [
      "Front-End Web Developer!",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Front-End Web Developer!",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

} )( jQuery );
