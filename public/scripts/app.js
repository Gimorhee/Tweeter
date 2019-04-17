const tweetData = [

];

function loadTweets() {
    $.ajax({
      url: 'tweets',
      method: "GET",
      success: data => {
        renderTweets(data);
      },
      failure: error => {
        console.log(error);
      }
    });
}
loadTweets();


function renderTweets(tweets) {
  for(let tweet in tweets){
    let $tweet = createTweetElement(tweets[tweet]);
    $('.container').append($tweet);
  }
}

function createTweetElement(tweetData) {
  let section = $("<section>").addClass("tweet-container");
  let article = $("<article>").addClass("tweet-article");
  let header = $("<header>").addClass("tweet-header");
  let img = $("<img>").addClass("tweet-image");
  let h2 = $("<h2>").addClass("tweetname");
  let spanOne = $("<span>").addClass("username");
  let p = $("<p>").addClass("tweet-content");
  let footer = $("<footer>").addClass("tweet-footer");
  let spanTwo = $("<span>").addClass("tweet-footer-content");
  let iOne = $("<i>").addClass("fas fa-flag");
  let iTwo = $("<i>").addClass("fas fa-sync");
  let iThree = $("<i>").addClass("fas fa-heart");

  footer.append(iOne);
  footer.append(iTwo);
  footer.append(iThree);
  footer.append(spanTwo);
  header.append(img);
  header.append(h2);
  header.append(spanOne);
  article.append(header);
  article.append(p);
  article.append(footer);
  section.append(article);

  h2.html(tweetData.user.name);
  spanOne.html(tweetData.user.handle);
  p.html(tweetData.content.text);
  spanTwo.html(tweetData.created_at);
  img.attr("src", tweetData.user.avatars.small);

  return section;

}

$(() => {
  renderTweets(tweetData);
});



