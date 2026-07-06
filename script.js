// Questions
const questions = [
{
question: "How many hours do you sleep daily?",
options: [
{text:"Less than 5 hours",score:4},
{text:"5-6 hours",score:3},
{text:"6-7 hours",score:2},
{text:"More than 7 hours",score:1}
]
},
{
question: "How many hours do you study daily?",
options: [
{text:"Less than 2 hours",score:1},
{text:"2-4 hours",score:2},
{text:"4-6 hours",score:3},
{text:"More than 6 hours",score:4}
]
},
{
question: "How often do you feel stressed?",
options: [
{text:"Never",score:1},
{text:"Sometimes",score:2},
{text:"Often",score:3},
{text:"Always",score:4}
]
},
{
question: "How often do you feel anxious?",
options: [
{text:"Never",score:1},
{text:"Sometimes",score:2},
{text:"Often",score:3},
{text:"Always",score:4}
]
},
{
question: "How is your appetite?",
options: [
{text:"Very Good",score:1},
{text:"Good",score:2},
{text:"Poor",score:3},
{text:"Very Poor",score:4}
]
},
{
question: "Do you get headaches frequently?",
options: [
{text:"Never",score:1},
{text:"Rarely",score:2},
{text:"Often",score:3},
{text:"Always",score:4}
]
},
{
question: "How energetic do you feel?",
options: [
{text:"Very Energetic",score:1},
{text:"Good",score:2},
{text:"Low",score:3},
{text:"Very Low",score:4}
]
},
{
question: "How often do you exercise?",
options: [
{text:"Daily",score:1},
{text:"3-4 days/week",score:2},
{text:"Once/week",score:3},
{text:"Never",score:4}
]
},
{
question: "How often do you feel overwhelmed?",
options: [
{text:"Never",score:1},
{text:"Sometimes",score:2},
{text:"Often",score:3},
{text:"Always",score:4}
]
},
{
question: "Can you concentrate while studying?",
options: [
{text:"Always",score:1},
{text:"Most of the time",score:2},
{text:"Rarely",score:3},
{text:"Never",score:4}
]
},
{
question: "How many hours do you use your phone daily?",
options: [
{text:"Less than 2 hours",score:1},
{text:"2-4 hours",score:2},
{text:"4-6 hours",score:3},
{text:"More than 6 hours",score:4}
]
},
{
question: "Do you feel irritated easily?",
options: [
{text:"Never",score:1},
{text:"Sometimes",score:2},
{text:"Often",score:3},
{text:"Always",score:4}
]
},
{
question: "How relaxed do you feel?",
options: [
{text:"Very Relaxed",score:1},
{text:"Relaxed",score:2},
{text:"Less Relaxed",score:3},
{text:"Not Relaxed",score:4}
]
},
{
question: "How is your social life?",
options: [
{text:"Excellent",score:1},
{text:"Good",score:2},
{text:"Poor",score:3},
{text:"Very Poor",score:4}
]
},
{
question: "How often do you feel happy?",
options: [
{text:"Always",score:1},
{text:"Often",score:2},
{text:"Sometimes",score:3},
{text:"Never",score:4}
]
}
];

// Opens quiz page
function startQuiz() {
    window.location.href = "quiz.html";
}

let currentQuestion = 0;
let totalScore = 0;

// Load current question
function loadQuestion() {

    document.getElementById("question").innerHTML =
        questions[currentQuestion].question;

    let optionsHTML = "";

    questions[currentQuestion].options.forEach(option => {

        optionsHTML += `
        <label>
            <input type="radio" name="answer" value="${option.score}">
            ${option.text}
        </label><br><br>
        `;

    });

    document.getElementById("options").innerHTML = optionsHTML;
}

// Next button
function nextQuestion() {

    let selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Please select an answer.");
        return;
    }

    totalScore += Number(selected.value);

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        localStorage.setItem("score", totalScore);
        window.location.href = "result.html";

    }
}

// Load question only on quiz page
if (document.getElementById("question")) {
    loadQuestion();
}