let questions_1 = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Tim Bernes-Lee",
        "answer_3": "Paul Peters",
        "answer_4": "Jimi Carter",
        "right_answer": 1
    },
    {
        "question": "What does HTML stand for?",
        "answer_1": "Hypertext Makeup Language",
        "answer_2": "Hyper Markup Language",
        "answer_3": "Hypertext Markup Language",
        "answer_4": "Hyper Makeup Language",
        "right_answer": 2
    },
    {
        "question": "Choose the correct HTML element for the largest heading:",
        "answer_1": "< b >",
        "answer_2": "< t1 >",
        "answer_3": "< h >",
        "answer_4": "< h1 >",
        "right_answer": 3
    },
    {
        "question": "What is the correct HTML element for inserting a line break?",
        "answer_1": "< /br >",
        "answer_2": "< a >",
        "answer_3": "/n",
        "answer_4": "< br >",
        "right_answer": 3
    },
    {
        "question": "Choose the correct HTML element to define important text",
        "answer_1": "< i >",
        "answer_2": "< z >",
        "answer_3": "< k >",
        "answer_4": "< b >",
        "right_answer": 3
    },
    {
        "question": "Which character is used to indicate an end tag?",
        "answer_1": "|",
        "answer_2": "/",
        "answer_3": "-",
        "answer_4": "+",
        "right_answer": 1
    },
    {
        "question": "How can you open a link in a new tab/browser window?",
        "answer_1": "< a href='' target='_new' >",
        "answer_2": "< a href='' target='_fresh' >",
        "answer_3": "< a href='' target='_blank' >",
        "answer_4": "< a href='' target='_clear' >",
        "right_answer": 2
    },
    {
        "question": "Which of these elements are all <table> elements?",
        "answer_1": "< table >< tb >< tr >",
        "answer_2": "< tbody >< tr> < tp >",
        "answer_3": "< tbody >< tb >< td >",
        "answer_4": "< tr >< td >< table >",
        "right_answer": 3
    },
    {
        "question": "What do this tag do? <ol> ",
        "answer_1": "ordered list",
        "answer_2": "organised list",
        "answer_3": "oganic list",
        "answer_4": "orange list",
        "right_answer": 0
    },
    {
        "question": "Wie wird eine Seitenleiste definiert ?",
        "answer_1": "sideliste",
        "answer_2": "aside",
        "answer_3": "toside",
        "answer_4": "div",
        "right_answer": 1
    }
]

let questions_2 = [
    {
        "question": "",
        "answer_1": "",
        "answer_2": "",
        "answer_3": "",
        "answer_4": "",
        "right_answer": 0
    },
    {
        "question": "",
        "answer_1": "",
        "answer_2": "",
        "answer_3": "",
        "answer_4": "",
        "right_answer": 0
    },
    {
        "question": "",
        "answer_1": "",
        "answer_2": "",
        "answer_3": "",
        "answer_4": "",
        "right_answer": 0
    },
    {
        "question": "",
        "answer_1": "",
        "answer_2": "",
        "answer_3": "",
        "answer_4": "",
        "right_answer": 0
    },
    {
        "question": "Wie wird eine Seitenleiste definiert ?",
        "answer_1": "sideliste",
        "answer_2": "aside",
        "answer_3": "toside",
        "answer_4": "div",
        "right_answer": 1
    }
]

let currentQuestion = 0;
let scorePoints = 0;
let AUDIO_FAIL = new Audio('./src/sounds/fail.mp3');
let AUDIO_SUCCSESS = new Audio('./src/sounds/success.mp3');


function init() {
    // document.getElementById('all-questions').innerHTML = questions_1.length;
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showResults();
    } else {
        showProgressBar();
        updateNewQuestion();
    }
}

function showProgressBar() {
    let percent = (currentQuestion  / questions_1.length) * 100;
    let progressBar = document.querySelector('.progress-bar');
    progressBar.setAttribute('aria-valuenow', percent);
    progressBar.style.width = percent + '%';
}

function showResults() {
    let progressBar = document.querySelector('.progress-bar');
    progressBar.setAttribute('aria-valuenow', 100);
    progressBar.style.width = 100 + '%';
    document.getElementById('end_screen').style = ``;
    document.getElementById('trophy').style = ``;
    document.getElementById('question_body').style = 'display: none';
    document.getElementById('next_bevor_button').style = 'display: none';
    document.getElementById('score_points').innerHTML = `${scorePoints}/${questions_1.length}`;
}

function updateNewQuestion() {
    let question = questions_1[currentQuestion];
    document.getElementById('question-number').innerHTML = `<b>${currentQuestion + 1}</b> - <b>${questions_1.length}</b>`
    document.getElementById('question').innerHTML = question.question;
    document.getElementById('answer_0').innerHTML = question.answer_1;
    document.getElementById('answer_1').innerHTML = question.answer_2;
    document.getElementById('answer_2').innerHTML = question.answer_3;
    document.getElementById('answer_3').innerHTML = question.answer_4;
}

function gameIsOver() {
    return currentQuestion >= questions_1.length;
}

function answer(answer_number) {
    let question = questions_1[currentQuestion];
    if (correctAnswer(answer_number)) {
        showCorrectAnswer(question,answer_number);
    } else {
        showWrongAnswer(question,answer_number);
    }
    document.getElementById('next-button').disabled = false;
}

function correctAnswer(answer_number) {
    return answer_number == question.right_answer;
}

function showCorrectAnswer(question,answer_number) {
    document.getElementById(`answer_card_${question.right_answer}`).classList.add('btn-correct');
    document.getElementById(`answer_letter_${question.right_answer}`).classList.add('letter-true');
    scorePoints++;
    AUDIO_SUCCSESS.play();
}

function showWrongAnswer(question,answer_number) {
    document.getElementById(`answer_card_${answer_number}`).classList.add('btn-false');
    document.getElementById(`answer_letter_${answer_number}`).classList.add('letter-false');
    AUDIO_FAIL.play();
    setTimeout(function () {
        document.getElementById(`answer_card_${question.right_answer}`).classList.add('btn-correct');
        document.getElementById(`answer_letter_${question.right_answer}`).classList.add('letter-true');
    }, 200);
}

function nextQuestion() {
    currentQuestion++;
    clearAnswerButtons();
    showQuestion();
    document.getElementById('bevor-button').disabled = false;
    document.getElementById('next-button').disabled = true;
}

function bevorQuestion() {
    currentQuestion--;
    showQuestion();
    if (currentQuestion == 0) {
        document.getElementById('bevor-button').disabled = true;
    }
}

function clearAnswerButtons() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(`answer_card_${i}`).classList.remove('btn-correct');
        document.getElementById(`answer_letter_${i}`).classList.remove('letter-true');
        document.getElementById(`answer_card_${i}`).classList.remove('btn-false');
        document.getElementById(`answer_letter_${i}`).classList.remove('letter-false');
    }
}

function resetQuiz() {
    currentQuestion = 0;
    scorePoints = 0;
    document.getElementById('end_screen').style = `display: none`;
    document.getElementById('trophy').style = `display: none`;
    document.getElementById('question_body').style = ``;
    document.getElementById('next_bevor_button').style = '';
    showQuestion();
}