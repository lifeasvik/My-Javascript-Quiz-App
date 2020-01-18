$(document).ready(function() {
  if (jQuery) {
    // jQuery is loaded
    alert("Yeah!");
  } else {
    // jQuery is not loaded
    alert("Doesn't Work");
  }

  $('.questionPage').hide();
  $('.rightAnswer').hide();
  $('.wrongAnswer').hide();
  $('.resultsPage').hide();
}