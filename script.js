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
        question: 'What is 2+2?',
        answers: [
            '4',
            '2',
            '0',
            '1'
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
        var answerDiv = document.createElement('div')
        answerDiv.innerHTML = question.answers[i]
        if (question.rightAnswer == i) {
            answerDiv.setAttribute('data-correct', 'true')
        }
        el.appendChild(answerDiv)
    }
}

generateQuestion(questions[1])