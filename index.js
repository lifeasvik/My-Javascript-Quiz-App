let score = 0;
let currentQuestion = 0;
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
  $(".quiz h6").text(" Question: " + [currentQuestion + 1]);
  $(".quiz h5").text("Score " + score + " / " + questions.length);
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
