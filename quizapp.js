$(document).ready(function () {
  $('.questions').hide();
  $('.results').hide();
}

const STORE = [
  {name: "apples", checked: false},
  {name: "milk", checked: true},
];

function renderIntro() {

  console.log("`renderIntro` ran");
}

function renderQuestion() {
  console.log("`renderQuestion` ran");
}

function renderAnswer() {
  console.log("`renderAnswer` ran");
}

//Callback function to run which will incorporate all functions
function renderQuiz() {
  renderIntro();
  renderQuestion();
  renderAnswer();
}

//Finally render the quiz as a whole
renderQuiz();
