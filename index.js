let score = 0;
let currentQuestion = 0;
let questions = [
  {
    title: "Question 1 goes here?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correct: 2
  },
  {
    title: "Question 2 goes here?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correct: 3
  },
  {
    title: "Question 3 goes here?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correct: 0
  },
  {
    title: "Question 4 goes here?",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correct: 1
  }
];

$(document).ready(function() {
  $(".start a").click(function(e) {
    e.preventDefault();
    $(".start").hide();
    $(".quiz").show();
    showQuestion();
  });

  $(".quiz ul").on("click", "li", function() {
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".quiz a").click(function(e) {
    e.preventDefault();
    if ($("li.selected").length) {
      let guess = parseInt($("li.selected").attr("id"));
      checkAnswer(guess);
    } else {
      alert("Please Select An Answer");
    }
  });

  $(".summary a").click(function(e) {
    e.preventDefault();
    restartQuiz();
  });
});

function showQuestion() {
  let question = questions[currentQuestion];
  $(".quiz h2").text(question.title);
  $(".quiz ul").html("");
  for (var i = 0; i < question.answers.length; i++) {
    $(".quiz ul").append("<li id='" + i + "'>" + question.answers[i] + "</li>");
  }
}
function checkAnswer(guess) {
  let question = questions[currentQuestion];
  if (question.correct === guess) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showSummary();
  } else {
    showQuestion();
  }
}
function showSummary() {
  $(".quiz").hide();
  $(".summary").show();
  $(".summary p").text(
    "Congrats you scored " + score + " out of " + questions.length + " !"
  );
}

function restartQuiz() {
  $(".summary").hide();
  $(".quiz").show();
  score = 0;
  currentQuestion = 0;
  showQuestion();
}

// $(document).ready(function() {
//   //Things to load into DOM beforehand
//   // if (jQuery) {
//   //   // jQuery is loaded
//   //   alert("Yeah!");
//   // } else {
//   //   // jQuery is not loaded
//   //   alert("Doesn't Work");
//   // }

//   let quizData = {
//     Movie: "Pulp Fiction",
//     Movie: "Forrest Gump",
//     Movie: "The Shawshank Redemption",
//     Movie: "The Lion King"
//   };

//   // $.each(quizData, function(key, value){
//   //   $(".choices").append(key + ": " + value + '<br>');

//   $(".questions").hide();
//   $(".rightAnswer").hide();
//   $(".wrongAnswer").hide();
//   $(".results").hide();
// });

// // This allows us to move forward from the intro to start the quiz
// $("#startQuiz").on("click", function() {
//   $(".introduction").hide();
//   $(".questions").show();
//   $(".rightAnswer").hide();
//   $(".wrongAnswer").hide();
//   $(".results").hide();
//   renderQuestion();
// });

// // Test Link for Second Page
// $("#nextQuiz").on("click", function() {
//   $(".introduction").hide();
//   $(".questions").hide();
//   $(".rightAnswer").hide();
//   $(".wrongAnswer").hide();
//   $(".results").show();
//   renderQuestion();
// });

// // $(".choices").html(
// //   questions.choices
// //     .map(function(value) {
// //       return "<span>" + value + "</span>";
// //     })
// //     .join("")
// // );

// // let x = $();
// // for (x = 0; x < 1000; x++) {
// //   x = x.add("<div>" + x + "</div>");
// // }
// // $(".choices").append(x);

// function renderQuestion() {
//   let x = quizData.length;
//   for (i = 0; i < x; i++) {
//     return [i];
//   }
// }

// function renderAnswer() {
//   console.log("`renderAnswer` ran");
// }

// function renderQuiz() {
//   renderAnswer();
// }

// renderQuiz();
