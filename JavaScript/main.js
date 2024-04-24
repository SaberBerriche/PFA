$("#searchbar").focus(function () {
  $("#searchbar").val("");
  $("#search_icon").hide();
});

$("#searchbar").blur(function () {
  $("#searchbar").val("Search...");
  $("#search_icon").show();
});

$("#butt_log").on("click", function () {
  $("#log_pop").css("display", "block");
});

$(document).on("click", function (event) {
  if (
    !$(event.target).closest("#popup-content").length &&
    !$(event.target).is("#butt_log")
  ) {
    $("#log_pop").css("display", "none");
  }
});

$("#sign_butt").on("click", function () {
  $("#sign_pop").css("display", "block");
  $("#log_pop").css("display", "none");
});

$(document).on("click", function (event) {
  if (
    !$(event.target).closest(".pop_content").length &&
    !$(event.target).is("#butt_log")
  ) {
    $("#sign_pop").css("display", "none");
  }
});

$("#ava_contain")
  .on("mouseenter", function () {
    $("#add_ava").show();
  })
  .on("mouseleave", function () {
    $("#add_ava").hide();
  });

$("#ava_contain").on("click", function () {
  var fileInput = $("#file_input");
  if (fileInput.length > 0) {
    fileInput[0].click();
  }
});

$("#file_input").change(function () {
  var file = this.files[0];
  // Do something with the selected file, such as uploading it or displaying a preview.
  var reader = new FileReader();

  reader.onload = function (e) {
    $("#def_ava").attr("src", e.target.result);
  };

  reader.readAsDataURL(file);
});

$("#next_butt").click(function (event) {
  var check = false;
  var facebookRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/.+$/i;
  var inputText1 = $("#face_inp").val();

  if (facebookRegex.test(inputText1)) {
    console.log("The input is a Facebook link.", inputText1);
    check = true;
  } else {
    event.preventDefault();
    check = false;
    $("#face_inp")
      .val("Please Enter a Valid LinkedIn Link")
      .css("color", "rgba(255, 0, 0, 0.5)");
  }

  var linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/i;
  var inputText2 = $("#linked_inp").val();

  if (linkedinRegex.test(inputText2)) {
    check = true;
    console.log("The input is a LinkedIn link.", inputText2);
  } else {
    event.preventDefault();
    check = false;
    $("#linked_inp")
      .val("Please Enter a Valid LinkedIn Link")
      .css("color", "rgba(255, 0, 0, 0.5)");
  }
  if (check == true) {
    event.preventDefault();
    $("#part2").css("display", "block");
    $("#part1").css("display", "none");
  }
});

$(".soc_inp").click(function () {
  $(this).val("").css("color", "white");
});

$(".interest").click(function () {
  $(this).css("background-color", "black");
  $(this).find("img").css("display", "none");
  $(this).find("span").css("text-align", "center");
  $(this).find("span").css("width", "100%");
});

$("#back_butt").click(function (event) {
  event.preventDefault();
  $("#part2").css("display", "none");
  $("#part1").css("display", "block");
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

// lel tabs mta3 el owner
$("#tab1").on("click", function () {
  $("#cpart1").css("display", "block");
  $("#cpart2").css("display", "none");
  $("#cpart3").css("display", "none");
  $("#cpart4").css("display", "none");
});

$("#tab2").on("click", function () {
  $("#cpart1").css("display", "none");
  $("#cpart2").css("display", "block");
  $("#cpart3").css("display", "none");
  $("#cpart4").css("display", "none");
});

$("#tab3").on("click", function () {
  $("#cpart1").css("display", "none");
  $("#cpart2").css("display", "none");
  $("#cpart3").css("display", "block");
  $("#cpart4").css("display", "none");
});

$("#tab4").on("click", function () {
  $("#cpart1").css("display", "none");
  $("#cpart2").css("display", "none");
  $("#cpart3").css("display", "none");
  $("#cpart4").css("display", "block");
});
// end of lel tabs mta3 el owner

// lel tabs mta3 el owner requests
$("#r_tab1").on("click", function () {
  $("#request1").css("display", "block");
  $("#request2").css("display", "none");
  $("#request3").css("display", "none");
});

$("#r_tab2").on("click", function () {
  $("#request1").css("display", "none");
  $("#request2").css("display", "block");
  $("#request3").css("display", "none");
});

$("#r_tab3").on("click", function () {
  $("#request1").css("display", "none");
  $("#request2").css("display", "none");
  $("#request3").css("display", "block");
});
// end of lel tabs mta3 el owner requests

// lel tabs mta3 el owner requests (bch ybadel el focus)
$("#r_tab1").on("click", function () {
  $("#request_tab1").css("background-color", "#bebebe");
  $("#request_tab2").css("background-color", "#204672");
  $("#request_tab3").css("background-color", "#204672");
});

$("#r_tab2").on("click", function () {
  $("#request_tab1").css("background-color", "##204672");
  $("#request_tab2").css("background-color", "#bebebe");
  $("#request_tab3").css("background-color", "#204672");
});

$("#r_tab3").on("click", function () {
  $("#request_tab1").css("background-color", "#204672");
  $("#request_tab2").css("background-color", "#204672");
  $("#request_tab3").css("background-color", "#bebebe");
});
// end of // lel tabs mta3 el owner requests (bch ybadel el focus)
