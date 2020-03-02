var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = 300;

    function myClock() {
        document.getElementById("timer").innerHTML = --c;
        if (c == 0) {
            clearInterval(myTimer);
            alert("Time's up!");
        }
    }
}

var myQuestion = {
    question: 'What is 1+1?',
    answers: [
        '5',
        '2',
        '0',
        '1'
    ],
    rightAnswer: 1
}

var questions = [
    {
        question: 'What is 3+3?',
        answers: [
            '5',
            '2',
            '6',
            '1'
        ],
        rightAnswer: 2
    },
    {
        question: 'What do Javascript arrays store?',
        answers: [
            'Multiple values in a single variable.',
            'Elements in a div.',
            'Letters in the alphabet.',
            'Styles from an external sheet to load into HTML.'
        ],
        rightAnswer: 0
    }
]
function generateQuestion(question) {
    var el = document.getElementById('question')
    el.innerHTML = ''
    var questionDiv = document.createElement('div')
    questionDiv.innerHTML = question.question
    el.appendChild(questionDiv)

    for (var i = 0; i < question.answers.length; i++) {
        var answerDiv = document.createElement('button')
        answerDiv.innerHTML = question.answers[i]
        if (question.rightAnswer == i) {
            answerDiv.setAttribute('data-correct', 'true')
        }
        el.appendChild(answerDiv)
    }
}

generateQuestion(questions[1])

var questionEl = document.getElementById('question')
questionEl.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        if (question.rightAnswer == i) {
            answerDiv.setAttribute('data-correct', 'true')
        }
    }

})

//deduct 30 seconds from timer for button click on answer other than right answer
//add 5 points for button click on right answer
//any button click, move to next question


