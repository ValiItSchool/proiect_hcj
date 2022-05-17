const quizData = [
  {
    question: "Care a fost jocul anului 2019?",
    a: "FIFA 19",
    b: "God War 4",
    c: "Sekiro",
    d: "League of legends",
    correct: "c",
  },
  {
    question: "Cine a castigat UEFA Champions League in 2020?",
    a: "UTA Arad",
    b: "Real Madrid",
    c: "PSG",
    d: "Bayern Munchen",
    correct: "d",
  },
  {
    question: "Care este cel mai vizionat eveniment sportiv din lume cu 3.5 miliarde de telespectatori anual?",
    a: "Campionatul Mondial de Fotbal",
    b: "Jocurile Olimpice",
    c: "Tour de France",
    d: "UTA-Rapid",
    correct: "c",
  },
  {
    question: "Cand a fost JavaScript lansat",
    a: "2002",
    b: "2003",
    c: "2004",
    d: "nici una dintre variantele de mai sus",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const intrebareEL = document.getElementById("question");
const raspuns_a = document.getElementById("raspuns_a");
const raspuns_b = document.getElementById("raspuns_b");
const raspuns_c = document.getElementById("raspuns_c");
const raspuns_d = document.getElementById("raspuns_d");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  intrebareEL.innerText = currentQuizData.question;
  raspuns_a.innerText = currentQuizData.a;
  raspuns_b.innerText = currentQuizData.b;
  raspuns_c.innerText = currentQuizData.c;
  raspuns_d.innerText = currentQuizData.d;
}
function getSelected() {
  let answer = undefined;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answerEl.checked = false;
    }
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>`;
    }
  }
});
