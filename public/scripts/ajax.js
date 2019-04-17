$(function() {
  let $form = $('#tweet-form');
  $form.on('submit', function () {
    event.preventDefault();
    console.log("Button works");
  });
});