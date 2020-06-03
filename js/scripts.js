$(document).ready(function() {
  $("#shouting-form").submit(function(event) {
    event.preventDefault();

    let userSentenceInput = $("#user-sentence").val();
    let sentenceToUpperCase = userSentenceInput.toUpperCase();

    $(".sentence-shouting").text(sentenceToUpperCase);
    $(".shouting-output").show();
  });
});