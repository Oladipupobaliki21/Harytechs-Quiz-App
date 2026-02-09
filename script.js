const quizData = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "Home Text Markup Language"], answer: 0 },
  { question: "Which tag is used for paragraphs?", options: ["<p>", "<h>", "<div>", "<span>"], answer: 0 },
  { question: "Which CSS property changes text color?", options: ["font-style", "color", "background", "text-align"], answer: 1 },
  { question: "Which symbol is used for comments in CSS?", options: ["//", "<!-- -->", "/* */", "#"], answer: 2 },
  { question: "Which HTML tag is used to link CSS?", options: ["<style>", "<css>", "<link>", "<script>"], answer: 2 },

  { question: "Which property controls spacing inside an element?", options: ["margin", "border", "padding", "outline"], answer: 2 },
  { question: "Which display value places elements inline?", options: ["block", "inline", "flex", "grid"], answer: 1 },
  { question: "Which unit is relative to font size?", options: ["px", "em", "cm", "mm"], answer: 1 },
  { question: "What does JS stand for?", options: ["JavaSource", "JavaScript", "JustScript", "JsonScript"], answer: 1 },
  { question: "Which keyword declares a variable?", options: ["var", "let", "const", "All of the above"], answer: 3 },

  { question: "Which function prints to the console?", options: ["console.log()", "alert()", "print()", "log.console()"], answer: 0 },
  { question: "Which operator checks strict equality?", options: ["==", "=", "===", "!="], answer: 2 },
  { question: "Which data type is true or false?", options: ["String", "Boolean", "Number", "Object"], answer: 1 },
  { question: "Which method adds an item to an array?", options: ["push()", "add()", "insert()", "append()"], answer: 0 },
  { question: "Which method removes last array item?", options: ["shift()", "pop()", "remove()", "delete()"], answer: 1 },

  { question: "Which loop runs a specific number of times?", options: ["while", "for", "do-while", "foreach"], answer: 1 },
  { question: "What symbol starts an ID selector?", options: [".", "#", "*", "&"], answer: 1 },
  { question: "What symbol starts a class selector?", options: ["#", ".", "*", "%"], answer: 1 },
  { question: "Which event occurs on button click?", options: ["onload", "onmouseover", "onclick", "onsubmit"], answer: 2 },
  { question: "Which method selects one element?", options: ["querySelector()", "getElementsByClass()", "querySelectorAll()", "selectAll()"], answer: 0 },

  { question: "Which method selects multiple elements?", options: ["querySelector()", "querySelectorAll()", "getElement()", "select()"], answer: 1 },
  { question: "Which keyword defines a function?", options: ["func", "define", "function", "method"], answer: 2 },
  { question: "Which HTML tag displays images?", options: ["<image>", "<img>", "<src>", "<picture>"], answer: 1 },
  { question: "Which attribute gives image path?", options: ["link", "src", "href", "path"], answer: 1 },
  { question: "Which CSS makes text bold?", options: ["font-weight", "text-style", "font-style", "bold"], answer: 0 },

  { question: "Which tag creates a button?", options: ["<input>", "<button>", "<btn>", "<click>"], answer: 1 },
  { question: "Which array index comes first?", options: ["0", "1", "-1", "Any"], answer: 0 },
  { question: "Which keyword stops a loop?", options: ["stop", "exit", "break", "end"], answer: 2 },
  { question: "Which keyword skips iteration?", options: ["skip", "next", "continue", "pass"], answer: 2 },
  { question: "Which method converts string to number?", options: ["Number()", "parseInt()", "Both A & B", "convert()"], answer: 2 },

  { question: "Which HTML tag creates lists?", options: ["<ul>", "<li>", "<ol>", "All of the above"], answer: 3 },
  { question: "Which CSS property centers text?", options: ["align", "center", "text-align", "justify"], answer: 2 },
  { question: "Which JS keyword creates constant?", options: ["let", "var", "const", "fixed"], answer: 2 },
  { question: "Which function runs after a time delay?", options: ["setTimeout()", "setInterval()", "delay()", "wait()"], answer: 0 },
  { question: "Which function runs repeatedly?", options: ["repeat()", "setTimeout()", "loop()", "setInterval()"], answer: 3 },

  { question: "Which operator means OR?", options: ["&&", "||", "!", "??"], answer: 1 },
  { question: "Which operator means AND?", options: ["||", "&&", "!", "="], answer: 1 },
  { question: "Which HTML tag is semantic?", options: ["<div>", "<span>", "<section>", "<b>"], answer: 2 },
  { question: "Which storage saves data permanently?", options: ["sessionStorage", "localStorage", "cookies", "cache"], answer: 1 },
  { question: "Which method clears interval?", options: ["stopInterval()", "removeInterval()", "clearInterval()", "endInterval()"], answer: 2 },

  { question: "Which method adds HTML to an element?", options: ["innerHTML", "appendChild()", "insertAdjacentHTML()", "All of the above"], answer: 3 },
  { question: "Which method removes an element?", options: ["remove()", "delete()", "clear()", "All of the above"], answer: 0 },
  { question: "Which event occurs when page loads?", options: ["onload", "onready", "DOMContentLoaded", "All of the above"], answer: 3 },
  { question: "Which method gets element by ID?", options: ["getElementById()", "querySelector()", "getElementsByClassName()", "select()"], answer: 0 },
  { question: "Which method gets elements by class?", options: ["getElementsByClassName()", "querySelectorAll()", "getElementById()", "select()"], answer: 0 },

  { question: "Which method gets elements by tag?", options: ["getElementsByTagName()", "querySelectorAll()", "getElementById()", "select()"], answer: 0 },
  { question: "Which method adds a class to an element?", options: ["addClass()", "classList.add()", "setAttribute()", "All of the above"], answer: 1 },
  { question: "Which method removes a class from an element?", options: ["removeClass()", "classList.remove()", "setAttribute()", "All of the above"], answer: 1 },
  { question: "Which method toggles a class on an element?", options: ["toggleClass()", "classList.toggle()", "setAttribute()", "All of the above"], answer: 1 }, 
  { question: "Which method checks if element has a class?", options: ["hasClass()", "classList.contains()", "getAttribute()", "All of the above"], answer: 1 }
  
];



  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 15;
  let timer;


  const questionEl = document.getElementById("question");
  const nextBtnEl = document.getElementById("nextBtn");
  const timerEl = document.getElementById("timer");
  const progressEl = document.getElementById("progress");
  const optionsEl = document.querySelectorAll('.option');
  // const optionBtns = document.querySelectorAll(".option");


  function loadQuestion(){
    clearInterval(timer);
    timeLeft = 15;
    timerEl.textContent = `Time Left: ${timeLeft}`;
    let current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    progressEl.textContent = `${currentQuestion + 1} of ${quizData.length} Question`;

    optionsEl.forEach((btn, i) => {
    btn.textContent = current.options[i];
    btn.className = "option";
    btn.disabled = false;
    btn.onclick = () => selectAnswer(i);
  });
  startTimer();
  }

  function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time Left: ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function selectAnswer(index) {
  clearInterval(timer);
  optionsEl.forEach(btn => btn.disabled = true);

  if (index === quizData[currentQuestion].answer) {
    score++;
    optionsEl[index].classList.add("correct");
  } else {
    optionsEl[index].classList.add("wrong");
    optionsEl[quizData[currentQuestion].answer].classList.add("correct");
  }
}
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

nextBtnEl.addEventListener("click", nextQuestion);

function showResult() {
  questionEl.textContent = "Quiz Completed 🎉";
  document.querySelector(".options").innerHTML =
    `<h3>Your Score: ${score} / ${quizData.length}</h3>`;
  timerEl.style.display = "none";
  nextBtnEl.style.display = "none";
}
loadQuestion();



