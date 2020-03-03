let score = 0;
let currentQuestion = 0;
let answer = 0;
let questions = [
  {
    title: "What restaurant franchise advises you to 'Eat Fresh'?",
    answers: ["McDonalds", "KFC", "Taco Bell", "Subway"],
    correct: 3
  },
  {
    title:
      "How many blue stripes does the United States of America national flag have?",
    answers: ["0", "7", "13", "12"],
    correct: 2
  },
  {
    title:
      "Which of these antagonist characters was created by novelist J.K. Rowling?",
    answers: [
      "Lord Voldemort",
      "Professor Moriarty",
      "Darth Vader",
      "Lord Farqaad"
    ],
    correct: 0
  },
  {
    title: "How many spaces are on a standard Monopoly board?",
    answers: ["20", "40", "60", "80"],
    correct: 1
  },
  {
    title: "What is the color of Donald Duck's bowtie?",
    answers: ["Blue", "Green", "Red", "Orange"],
    correct: 2
  }
];
$(document).ready(function() {
  $(".feedback").hide();
  $(".start a").click(function(e) {
    e.preventDefault();
    $(".start").hide();
    $(".quiz").show();
    showQuestion();
  });
  $("#nextquestion").click(e => {
    $(".feedback").hide();
    $(".quiz").show();
    showQuestion();
  });
  $("#questionform").submit(function(e) {
    e.preventDefault();
    let guess = e.target.answers.value;
    if (guess) {
      checkAnswer(guess);
    } else {
      alert("Please Select An Answer");
    }
    e.target.reset();
  });
  $(".summary a").click(function(e) {
    e.preventDefault();
    restartQuiz();
  });
});
function showQuestion() {
  let question = questions[currentQuestion];
  $("form legend").text(question.title);
  $(".quiz h6").text(
    " Question: " + [currentQuestion + 1] + " / " + questions.length
  );
  $(".quiz h5").text("Score: " + score + " / " + questions.length);
  for (var i = 0; i < question.answers.length; i++) {
    $("#label" + i).text(question.answers[i]);
  }
}
function checkAnswer(guess) {
  let question = questions[currentQuestion];
  let feedback = false;
  if (question.correct === parseInt(guess)) {
    score++;
    feedback = true;
  }
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showSummary();
  } else {
    showFeedback(feedback, question);
  }
}

// Testing this part of the code

function showFeedback(feedback, question) {
  $(".quiz").hide();
  $(".feedback").show();
  if (feedback) {
    $("#feedbacktext").text("You answered correctly!");
  } else {
    $("#feedbacktext").text(
      "You answered incorrectly! The correct answer is: " +
        question.answers[question.correct]
    );
  }
}

// Testing this part of the code

function showSummary() {
  $(".quiz").hide();
  $(".feedback").hide();
  $(".summary").show();
  $(".summary p").text(
    "Congrats, you scored " + score + " out of " + questions.length + " !"
  );
}
function restartQuiz() {
  $(".summary").hide();
  $(".quiz").show();
  score = 0;
  currentQuestion = 0;
  showQuestion();
}
