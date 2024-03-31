/*$("#test").click(function(){
    alert("Clicked");
});*/

$('#test').click(function(e) {
    // Function code here
    console.log('Button clicked!');
    $(".two.words").hide();
    console.log(e); // Accessing the event object
  });


