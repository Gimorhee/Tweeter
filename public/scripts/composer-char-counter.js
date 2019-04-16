$(document).ready(function() {
  $("textarea").on("input", function() {

   let numberOfLetters = $(this).val().length;
   let remainingCharacters = (140 - numberOfLetters);
   let $counter = $(this).parent().find(".counter");

   $counter.text(remainingCharacters);

   if(remainingCharacters < 0) {
    $counter.css("color", "red");
   } else {
    $counter.css("color", "black");
   }
  });
});