
var countdown = 300
var intervalId
function Clock() {
    clearInterval(intervalId);
    intervalId = setInterval
        (decrement, 1000);
}
function decrement() {
    countdown--;
    $("#timer").html(countdown +
        " seconds left");
    if (countdown === 0) {
        alert("Time's up!")
    }
}
Clock();

var questions = [

    question: 'What does Javascript do?',
        answers: [
            'Identifies the content of web pages ',
            'Programs behavior of web pages.',
            'Specifies layout of web pages',
            'Focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.'
    ],
    rightAnswer: 1
    }
{
    question: 'What is the formula for a for loop?',
        answers: [
            '42',
            'y=mx+b',
            'var i; for (i = 0; i < 1;i++',
            'e=mc2'
        ],
            rightAnswer: 2
}
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


//any button click, move to next question
//deduct 30 seconds from timer for button click on answer other than right answer
//add 5 points for button click on right answer



