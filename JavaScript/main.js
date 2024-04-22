$("#searchbar").focus(function () {
  $("#searchbar").val("");
  $("#search_icon").hide();
});

$("#searchbar").blur(function () {
  $("#searchbar").val("Search...");
  $("#search_icon").show();
});

$("#butt_log").on("click", function () {
  $("#popup").css("display", "block");
});

$(document).on("click", function (event) {
  if (
    !$(event.target).closest("#popup-content").length &&
    !$(event.target).is("#butt_log")
  ) {
    $("#popup").css("display", "none");
  }
});

// lel popup2 mta3 contact support
$("#sup_icon").on("click", function () {
  $("#popup2").css("display", "block");
});

$(document).on("click", function (event) {
  if (
    !$(event.target).closest("#support_content").length &&
    !$(event.target).is("#sup_icon")
  ) {
    $("#popup2").css("display", "none");
  }
});
// end of :lel popup2 mta3 contact support
