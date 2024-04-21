//theme button animation
var leftvalue = $('#theme_button').width();
var widthvalue= $('#light').width();
var isLightVisible= true;

console.log(leftvalue);
leftvalue = leftvalue-widthvalue+1.6;



$('.theme').click(function() {
    if (isLightVisible) {
        
      //turn on dark theme
      $('#theme_button').animate({
        backgroundColor: 'white'
      },500);

      $('#light').animate({
        'left': leftvalue,
        'opacity': 'hide'
      }, 500);

      $('#dark').animate({
        'left': leftvalue
      }, 500,);

    } else {
        
        //turn on light theme
        $('#theme_button').animate({
            backgroundColor: 'black'
          },500);
      $('#dark').animate({
        'left': -1.6
      }, 500, );
      $('#light').animate({
        'left': -1.6,
        'opacity': 'show'
      }, 500);
    }
  
    // Toggle the state
    isLightVisible = !isLightVisible;
  });