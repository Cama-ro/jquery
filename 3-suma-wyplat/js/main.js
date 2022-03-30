$(document).ready(function () {
  $("#count-sum").click(function () {
    const salary = $(".salary");
    let sumElements = $("#sum");
    let sum = 0;

    salary.each(function () {
      sum += Number($(this).text());
    });
    sumElements.html(sum);
  });
});
