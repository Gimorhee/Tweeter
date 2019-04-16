const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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

$(document).ready(function() {
  renderTweets(tweetData);
})



