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
  "The humanists' replacement for religion: work really hard and somehow you'll either save yourself or you'll be immortal. Of course, that's a total joke, and our progress is nothing. There may be progress in technology but there's no ethical progress whatsoever.",
    "Tomorrow belongs to those who can hear it coming.",
    "I'm always amazed that people take what I say seriously. I don't even take what I say seriously.",
    "Confront a corpse at least once. The absolute absence of life is the most disturbing and challenging confrontation you will ever have.",
    "I can ask for cigarettes in every language.",
    "I'm afraid of Americans.",
    "There's a terror in knowing what the world is about.",
    "Fame can take interesting men and thrust mediocrity upon them.",
    "As you get older, the questions come down to about two or three. How long? And what do I do with the time I've got left?",
    "Don't you love the Oxford Dictionary? When I first read it, I thought it was a really really long poem about everything.",
    "I find only freedom in the realms of eccentricity...",
    "The greatest thing you'll ever learn is just to love and be loved in return.",
    "Turn and face the strange.",
    "I'm a born librarian with a sex drive.",
    "You would think that a rock star being married to a super-model would be one of the greatest things. It is.",
    "I reinvented my image so many times that I'm in denial that I was originally an overweight Korean woman.",
    "Talking about art is like dancing about architecture."
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

$tweetBtn.click(tweetThis);

})( jQuery );
