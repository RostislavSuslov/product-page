// On ready
$(function() {

// Close head proposition
  $("#js-proposition__cross").click(function() {
    let proposition = $(this).closest('#js-proposition');
    proposition.slideUp(400, () => proposition.remove());
  });

// Hover on catalog item
  $('#js-callback').hover(
    function(){
      $('.callback').css('background', '#fff').addClass('box-shadow')
      $('.callback__block.active').css('display', 'flex')
      $('#js-callback-arrow').css('transform', 'rotate(180deg)')
    },
    function(){
      $('.callback__block.active').css('display', 'none')
      $('.callback').removeClass('box-shadow')
      $('#js-callback-arrow').css('transform', 'rotate(0deg)')
    }
  );
  // Toggle class on click (Cart)
  $('#js-cart, #js-cart-cross').click(function(){
    $('#js-cart-info').toggleClass('active')
  });
  // Check search field on input 
  $('#js-search-field').on('input', function(){
    if( $(this).val().length === 0 ) {
      $('.user__prediction.prediction').removeClass('active');
    } else {
      $('.user__prediction.prediction').addClass('active');
    }
  });
  
  var openCall = function() {
    $("#overlay").fadeIn(400, function () {
      $("#js-modal-call").css("display", "flex").animate({
        opacity: 1,
        top: "50%"
      }, 200)
    })
  }
  var closeCall = function() {
    $("#js-modal-call").animate({
      opacity: 0,
      top: "45%"
    }, 200, function () {
      $(this).css("display", "none"), $("#overlay").fadeOut(400)
    })
  }
  var openLogin = function() {
    $("#overlay").fadeIn(400, function () {
      $("#js-modal-login").css("display", "flex").animate({
        opacity: 1,
        top: "50%"
      }, 200)
    })
  }
  var closeLogin = function() {
    $("#js-modal-login").animate({
      opacity: 0,
      top: "45%"
    }, 200, function () {
      $(this).css("display", "none"), $("#overlay").fadeOut(400)
    })
  }
    $("#js-callme").on("click", openCall);
    $("#js-close-call, #overlay").click(closeCall);
    $("#js-login").on("click", openLogin);
    $("#js-close-login, #overlay").click(closeLogin);



  $('#js-catalog-toggler').on('click', function(){
    $('#js-catalog').toggle();
  });

  // Tabs
  $('#defaultOpen').click();

  //slider ui
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 2000,
      values: [ 0, 2000 ],
      slide: function( event, ui ) {
        $( "#amount-min" ).val( ui.values[ 0 ] );
        $( "#amount-max" ).val( ui.values[ 1 ] );
      }
    });
    $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) );
  } );
  //изменение положения ползунка при вводе значений в первый input
    $("input#amount-min").change(function(){
      var value1=$("input#amount-min").val();
      var value2=$("input#amount-max").val();
          if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#amount-min").val(value1);
          }
          $("#slider-range").slider("values", 0, value1);
    })
  //изменение положения ползунка при вводе значений в первый input
  $("input#amount-max").change(function(){
      var value1=$("input#amount-min").val();
      var value2=$("input#amount-max").val();

          if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#amount-max").val(value2);
          }
          $("#slider-range").slider("values", 1, value2);
  })
  //фильтрация ввода значений в input(s)
  $('#amount-min, #amount-max').keypress(function(event){
    var key, keyChar;
    if (!event) var event = window.event;

    if (event.keyCode) key = event.keyCode;
    else if(event.which) key = event.which;

    if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39) return true;
    keyChar=String.fromCharCode(key);
    if(!/\d/.test(keyChar)) return false;
  })
  /*accoridon__product-page*/
    $( function() {
      $( "#accordion" ).accordion({
        collapsible: true
      });
    } );
      var els = document.getElementsByName("del");
        els.forEach(function(item) {
        item.addEventListener("click", function(){
            item.parentNode.parentNode.removeChild(item.parentNode);
        });
    });
});