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

// lel tabs mta3 el club owner (bruh kanet twila barcha ama gemini 3aweni)
$(".c_txt2").on("click", function () {
  const clickedId = $(this).attr("id").replace("tab", "cpart");
  $(".cpart").css("display", "none");
  $("#" + clickedId).css("display", "block");
  $(".c_txt2").css("text-decoration", "none");
  $(this).css("text-decoration", "underline");
});
// end of lel tabs mta3 el owner

// lel tabs mta3 el owner requests
$(".request_tab").on("click", function () {
  const clickedId = $(this).attr("id").replace("request_tab", "request");
  $(".request").css("display", "none");
  $("#" + clickedId).css("display", "block");
});
// end of lel tabs mta3 el owner requests

// lel tabs mta3 el owner requests (bch ybadel el focus)
$(".request_tab").on("click", function () {
  $(".request_tab").css("background-color", "#204672"); // Reset all to default color
  $(this).css("background-color", "#bebebe"); // Set clicked tab to highlighted color
});
// end of lel tabs mta3 el owner requests (bch ybadel el focus)

// lel 9ars mta3 add photos to the post
$("#post_photo").on("click", function () {
  var fileInput = $("#post_image_input");
  if (fileInput.length > 0) {
    fileInput[0].click();
  }
});

$("#post_image_input").change(function () {
  var files = this.files;
  var insertedPhotos = $("#inserted_photos");

  // Check if the maximum number of photos has been reached
  if (insertedPhotos.children().length >= 4) {
    alert("You can only add up to 4 photos.");
    return;
  }

  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var reader = new FileReader();

    reader.onload = function (e) {
      // Create a new image element
      var img = $("<img>");

      // Set the source attribute of the image
      img.attr("src", e.target.result);

      // Append the image to the container
      insertedPhotos.append(img);
    };

    reader.readAsDataURL(file);
  }
});
// end of lel 9ars mta3 add photos to the post

$("#create_event").click(function (event) {
  event.preventDefault();
  $("#cpart3_2").css("display", "block");
});

$("#post_event").click(function (event) {
  event.preventDefault();
  $("#cpart3_2").css("display", "none");
});
