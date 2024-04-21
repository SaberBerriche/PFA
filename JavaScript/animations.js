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


  //calendar animation
  $("#cal_box").hover(
    function() {
      $("#calend_icon").animate({
        'padding': '10px',
        'background-color' : 'rgb(131,148,163)'
      });
      
    },
    function() {
      $("#calend_icon").stop();
      $("#calend_icon").animate({
        'padding': '0px',
        'background-color' : 'rgb(82,119,153)'
      });
    }
  );
    // support anim
    $("#sup_box").hover(
      function() {
        $("#sup_icon").animate({
          'padding': '10px',
          'background-color' : 'rgb(131,148,163)'
        });
        
      },
      function() {
        $("#sup_icon").stop();
        $("#sup_icon").animate({
          'padding': '0px',
          'background-color' : 'rgb(82,119,153)'
        });
      }
    );
 
  