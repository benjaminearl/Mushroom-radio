//////////////////////////////
//                          //
// variables                //
//                          //
//////////////////////////////
var allChapters = $(".textWithImage"),
    isElementInView = [],

    // IT'S REALLY IMPORTANT THAT YOU HAVE THE SAME AMOUNT OF IMAGES IN THE ARRAY BELOW AS CHAPTERS (NOT MORE, NOT LESS), AND THAT THEY ARE IN THE CORRECT ORDER OTHERWISE THE CODE BREAKS

    allTheImages = [
      "img/symbol5.png",
      "img/symbol5.png",
      "img/anni.JPG",
      "img/john.jpeg",
      "img/cedric2.png",
      "img/sekula.jpeg",
      "img/nelly.JPG",
      "img/marina.png",
      "img/kens.jpg",
      "img/chantal.jpg",
      "img/sheila3.png",
      "img/fritz.JPG",
      "img/tania.JPG",
      "img/symbol5.png"
    ],
    activeChapter = 0,
    mainImage = $('.main-image'),
    allTheCaptionContainers = $('.object_text'),
    allTheCaptions = [];


//////////////////////////////
//                          //
// functions                //
//                          //
//////////////////////////////

// find the position of each chapter
function findAllChapterPositions(){
  // loop through chapters
  for (var i = allChapters.length - 1; i >= 0; i--) {
    // find out for each chapter if it's in view
    isElementInView[i] = Utils.isElementInView($(allChapters[i]), false);
  }
}

// this swaps the images out on scroll
function replaceImageAndText(){
  // find which item is visible
  var visibleChapter = isElementInView.indexOf(true);
  // if it's different then the last time we scrolled, we change the image!
  if (visibleChapter != activeChapter) {
    // make the active chapter the correct one
    activeChapter = visibleChapter;
    // change the image to that!
    $('#right_characters').css("background-image", "url('" + allTheImages[activeChapter] + "')");
    // change the text
    $('.fact_text').html(allTheCaptions[activeChapter]);
  }

}

// this is the function to get the texts
function getTheCaptions() {
  for (var i = allTheCaptionContainers.length - 1; i >= 0; i--) {
    allTheCaptions.push( $( allTheCaptionContainers[i] ).html() );
  }
  // console.log(allTheCaptionContainers);
  $('#factual_text').hide();
}





// all the stuff to figure out if a chapter is in view....
function isScrolledIntoView(elem)
{
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
function Utils() {
}
Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};
var Utils = new Utils();




//////////////////////////////
//                          //
// what happens when loaded //
//                          //
//////////////////////////////

$( document ).ready(function() {
  // get all the captions
  getTheCaptions();

  // add listener to scrolling, fire event when scrolling
  $( window ).scroll(function() {
    findAllChapterPositions();
    replaceImageAndText();
  });

});