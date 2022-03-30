$(document).ready(function () {
  $("#lastToFirst").click(function () {
    $(".para:last").insertBefore($(".para:first"));
  });

  $("#firstToLast").click(function () {
    $(".para:first").insertAfter($(".para:last"));
  });
});
