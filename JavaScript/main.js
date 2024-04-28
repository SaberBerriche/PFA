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
  const clickedId = $(this).attr("id").replace("tab", "ctab");
  $(".ctab").css("display", "none");
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

// lel 9ars mta3 create event w edit event
$("#create_event").click(function (event) {
  $("#ctab3_create").css("display", "block");
});

$("#post_event").click(function (event) {
  $("#ctab3_create").css("display", "none");
});

$(".edit_event").click(function (event) {
  $("#ctab3_create").css("display", "block");
});

$(document).on("click", function (event) {
  if (
    !$(event.target).closest("#ctab3_2_container").length &&
    !$(event.target).is("#create_event") &&
    !$(event.target).is(".edit_event")
  ) {
    $("#ctab3_create").css("display", "none");
  }
});
// end of lel 9ars mta3 create event

// lel delete mta3 el event
$(".delete_event").click(function (event) {
  $("#ctab3_delete").css("display", "block");
});

$("#confirm_delete_event").click(function (event) {
  $("#ctab3_delete").css("display", "none");
});

$(".cancel").click(function (event) {
  $("#ctab3_delete").css("display", "none");
});

$(document).on("click", function (event) {
  if (
    !$(event.target).closest("#ctab3_delete_container").length &&
    !$(event.target).is(".delete_event")
  ) {
    $("#ctab3_delete").css("display", "none");
  }
});
// end oflel delete mta3 el event

// lel delete mta3 el post
$(".delete_post").click(function (event) {
  $("#ctab1_delete").css("display", "block");
});

$("#confirm_delete_post").click(function (event) {
  $("#ctab1_delete").css("display", "none");
});

$(".cancel").click(function (event) {
  $("#ctab1_delete").css("display", "none");
});

$(document).on("click", function (event) {
  if (
    !$(event.target).closest("#ctab1_delete_container").length &&
    !$(event.target).is(".delete_post")
  ) {
    $("#ctab1_delete").css("display", "none");
  }
});
// end oflel delete mta3 el post

// lel accept member
$(".accept").click(function (event) {
  $("#ctab4_accept").css("display", "block");
});

$("#confirm_accept_member").click(function (event) {
  $("#ctab4_accept").css("display", "none");
});

$(".cancel").click(function (event) {
  $("#ctab4_accept").css("display", "none");
});

$(document).on("click", function (event) {
  if (
    !$(event.target).closest("#ctab4_accept_container").length &&
    !$(event.target).is(".accept")
  ) {
    $("#ctab4_accept").css("display", "none");
  }
});
// end of lel accept member

// lel decline member
$(".decline").click(function (event) {
  $("#ctab4_decline").css("display", "block");
});

$("#confirm_decline_member").click(function (event) {
  $("#ctab4_decline").css("display", "none");
});

$(".cancel").click(function (event) {
  $("#ctab4_decline").css("display", "none");
});

$(document).on("click", function (event) {
  if (
    !$(event.target).closest("#ctab4_decline_container").length &&
    !$(event.target).is(".decline")
  ) {
    $("#ctab4_decline").css("display", "none");
  }
});
// end of lel decline member

// lel add/change profile picture of club owner
$(".change_p")
  .on("mouseenter", function () {
    $("#change_pfp").show();
  })
  .on("mouseleave", function () {
    $("#change_pfp").hide();
  });

$(".change_p").on("click", function () {
  var fileInput = $("#clubpfp_input");
  if (fileInput.length > 0) {
    fileInput[0].click();
  }
});

$("#clubpfp_input").change(function () {
  var file = this.files[0];
  // Do something with the selected file, such as uploading it or displaying a preview.
  var reader = new FileReader();

  reader.onload = function (e) {
    $("#club_pfp").attr("src", e.target.result);
  };

  reader.readAsDataURL(file);
});
// end of lel add/change profile picture of club owner

// lel add/change profile picture of club owner
$(".change_c")
  .on("mouseenter", function () {
    $("#change_cover").show();
  })
  .on("mouseleave", function () {
    $("#change_cover").hide();
  });

$(".change_c").on("click", function () {
  var fileInput = $("#club_cover_input");
  if (fileInput.length > 0) {
    fileInput[0].click();
  }
});

$("#club_cover_input").change(function () {
  var file = this.files[0];

  var reader = new FileReader();

  reader.onload = function (e) {
    $("#cover_photo").attr("src", e.target.result);
  };

  reader.readAsDataURL(file);
});
// end of lel add/change profile picture of club owner
