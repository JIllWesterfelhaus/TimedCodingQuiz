
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
    {
        question: 'What does Javascript do?',
        answers: [
            'Identifies the content of web pages ',
            'Programs behavior of web pages.',
            'Specifies layout of web pages',
            'Focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.'
        ],
        rightAnswer: 1
    },
    {
        question: 'What is the formula for a for loop?',
        answers: [
            '42',
            'y=mx+b',
            'var i; for (i = 0; i < 1;i++',
            'e=mc2'
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
    },
]

function generateQuestion(questions) {
    var el = $("#question");

    el.html(questions.question)

    for (var i = 0; i < 4; i++) {
        var answerDiv = document.createElement('button');
        $("button").attr("class", "answer-btn");
        answerDiv.append(questions.answers[i])
        el.append(answerDiv)
    }
}

var randomQuestion = Math.floor(Math.random() * questions.length);
generateQuestion(questions[randomQuestion])

$(".answer-btn").on("click", generateQuestion)

if (rightAnswer) {
    //add 5 points to local storage
    //move to next question in array
}   else   {
    addEventListener('click', function() {
        sec -= 30;
        document.getElementById('Clock').innerHTML='00:'+sec;
    });

}
    //move to next question in array




//local storage needs to save points and initials
//currently choosing questions at random, choosing same question more than once.  Needs to go through array, at random but each item once.



