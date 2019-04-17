$(() => {
  let $form = $('#tweet-form');
  $form.on('submit', () => {
    event.preventDefault();
    let inputLength = $("#tweet-input").val().length;
    if(inputLength === 0 || inputLength === null) {
      alert("Invalid input. Tweet must not be empty. Please try again.");
    } else if (inputLength > 140) {
      alert("Your tweet is too long! Please shorten it and try again.");
    } else {
      console.log("Button works");
      let $formData = $form.serialize();
      console.log($formData);
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $formData,
        success: data => {
          console.log("Success:", data);
        },
        failure: error => {
          console.log(error);
        }
      });
    }
  });
});
