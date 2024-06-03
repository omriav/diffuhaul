$(document).ready(function () {
  $('.method-result').on("pointerdown", function () {
    ours_src = $(this).attr("src").replace("inp.jpg", "ours.jpg");
    $(this).attr("src", ours_src);
  });

  $('.method-result').on("pointerup", function () {
    ours_src = $(this).attr("src").replace("ours.jpg", "inp.jpg");
    $(this).attr("src", ours_src);
  });
})
