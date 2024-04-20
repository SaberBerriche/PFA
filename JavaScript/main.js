$("#searchbar").focus( function(){
    $("#searchbar").val("");
    $("#search_icon").hide();
})

$("#searchbar").blur( function(){
    $("#searchbar").val("Search...");
    $("#search_icon").show();
})



$("#butt_log").on("click", function() {
    $("#popup").css("display", "block");
    
  });
  
$(document).on("click", function(event) {
    if (!$(event.target).closest("#popup-content").length && !$(event.target).is("#butt_log")) {
      $("#popup").css("display", "none");
      
    }
});