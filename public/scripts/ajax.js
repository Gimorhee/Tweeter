$(function() {
  let $form = $('#tweet-form');
  $form.on('submit', function () {
    event.preventDefault();
    let inputLength = $("#tweet-input").val().length;
    if(inputLength === 0 || inputLength === null) {
      alert("Error: 0 ");
    } else if (inputLength > 140) {
      alert("Error: > 140");
    } else {
      console.log("Button works");
      let $formData = $form.serialize();
      console.log($formData);
      $.ajax('/tweets', { method: 'POST', data: $formData })
      .then(function (event) {
        console.log("Success:", event);
      });
    }
  });
});

