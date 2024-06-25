let questions_1 = [
        {
            "question": "Wer hat HTML erfunden?",
            "answer_1": "Robbie Williams",
            "answer_2": "Tim Bernes-Lee",
            "answer_3": "Paul Peters",
            "answer_4": "Jimi Carter",
            "right_answer": 2
        },
        {
            "question": "What does HTML stand for?",
            "answer_1": "Hypertext Makeup Language",
            "answer_2": "Hyper Markup Language",
            "answer_3": "Hypertext Markup Language",
            "answer_4": "Hyper Makeup Language",
            "right_answer": 3
        },
        {
            "question": "Choose the correct HTML element for the largest heading:",
            "answer_1": "<b>",
            "answer_2": "<t1>",
            "answer_3": "<h>",
            "answer_4": "<h1>",
            "right_answer": 4
        },
        {
            "question": "What is the correct HTML element for inserting a line break?",
            "answer_1": "</br>",
            "answer_2": "<a>",
            "answer_3": "/n",
            "answer_4": "<br>",
            "right_answer": 4
        },
        {
            "question": "Choose the correct HTML element to define important text", 
            "answer_1": "",
            "answer_2": "",
            "answer_3": "",
            "answer_4": "<b>",
            "right_answer": 1
        },
        {
            "question": "Which character is used to indicate an end tag?",
            "answer_1": "|",
            "answer_2": "/",
            "answer_3": "-",
            "answer_4": "+",
            "right_answer": 2
        },
        {
            "question": "How can you open a link in a new tab/browser window?", 
            "answer_1": "<a href='' target='_new'>",
            "answer_2": "<a href='' target='_fresh'>",
            "answer_3": "<a href='' target='_blank'>",
            "answer_4": "<a href='' target='_clear'>",
            "right_answer": 3
        },
        {
            "question": "Which of these elements are all <table> elements?", 
            "answer_1": "<table><tb><tr>",
            "answer_2": "<tbody><tr><tp>",
            "answer_3": "<tbody><tb><td>",
            "answer_4": "<tr><td><table>",
            "right_answer": 4
        },
        {
            "question": "What do this tag do? <ol> ", 
            "answer_1": "ordered list",
            "answer_2": "organised list",
            "answer_3": "oganic list",
            "answer_4": "orange list",
            "right_answer": 1
        },
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
            "question": "",
            "answer_1": "",
            "answer_2": "",
            "answer_3": "",
            "answer_4": "",
            "right_answer": 0
        }
    ]

let questions_3 = [
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
            "question": "",
            "answer_1": "",
            "answer_2": "",
            "answer_3": "",
            "answer_4": "",
            "right_answer": 0
        }
    ]

let questions_4 = [
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
            "question": "",
            "answer_1": "",
            "answer_2": "",
            "answer_3": "",
            "answer_4": "",
            "right_answer": 0
        }
    ]

let currentQuestion = 0;


function renderQuestions() {
    let question = questions_1[currentQuestion];

    currentQuestion++;
}

function createQuestion() {
    return ``;
}

function init() {
    let content = document.getElementById('content');
}

