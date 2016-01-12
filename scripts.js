( function( $ ) {
  var $quote = $("#js-quote");
  var $quoteBtn = $("#js-get-quote-btn");
  var $tweetBtn = $("#js-tweet-btn");
  var quotes = [
  "I don't know where I'm going from here, but I promise it won't be boring.",
  "I always had a repulsive need to be something more than human.",
  "I'm an instant star. Just add water and stir.",
    "The truth is, of course, that there is no journey. We are arriving and departing" +
    " all at the same time.",
  "I wanted to prove the sustaining power of music.",
  "I'm not a prophet or a stone aged man, just a mortal with potential of a superman." +
  " I'm living on.",
    "Sometimes you stumble across a few chords that put you in a reflective place.",
  "Strangely, some songs you really don't want to write.",
    "When I'm stuck for a closing to a lyric, I will drag out my last resort:" +
    " overwhelming illogic.",
    "When I heard Little Richard, I mean, it just set my world on fire.",
  "The humanists' replacement for religion: work really hard and somehow you'll either save yourself or you'll be immortal. Of course, that's a total joke, and our progress is nothing. There may be progress in technology but there's no ethical progress whatsoever."
  ];

var tempQuotesList = quotes.slice(0);

function tweetThis() {
    var url = "https://twitter.com/intent/tweet?text=" + $quote.text() + "&hashtags=Bowie";
    return window.open(url);
}

$quoteBtn.click( function() {
  var index = Math.floor(Math.random()*tempQuotesList.length);
  var newQuote = tempQuotesList[index];
  $quote.html(newQuote);
  tempQuotesList.splice(index, 1);
  if (tempQuotesList.length < 1) {
    tempQuotesList = quotes.slice(0);
  }
});

$tweetBtn.click( function() {
  tweetThis();
});

})( jQuery );
