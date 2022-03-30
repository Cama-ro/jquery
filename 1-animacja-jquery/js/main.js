$(document).ready(function () {
  const box = $("#square");

  $("#animation").click(function () {
    $("#square").animate(
      { width: "-=100px", height: "-=100px", left: "+=100px" },
      3000,
      function () {
        $(this).css({
          "background-color": "blue",
          transition: "background-color 5s",
        });

        setTimeout(function () {
          $("h2").show();
        }, 5000);
      }
    );
  });
});
