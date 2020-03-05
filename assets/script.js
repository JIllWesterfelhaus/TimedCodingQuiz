var questionCounter = 0
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



var questionList = [ //array
    { // object
        questionTitle: 'What does Javascript do?',
        answers: [
            'Identifies the content of web pages ',
            'Programs behavior of web pages.',
            'Specifies layout of web pages',
            'Focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.'
        ],
        rightAnswer: 'Programs behavior of web pages.'
    },
    {
        questionTitle: 'What is the formula for a for loop?',
        answers: [
            '42',
            'y=mx+b',
            'var i; for (i = 0; i < 1;i++',
            'e=mc2'
        ],
        rightAnswer: 2
    },
    {
        questionTitle: 'What do Javascript arrays store?',
        answers: [
            'Multiple values in a single variable.',
            'Elements in a div.',
            'Letters in the alphabet.',
            'Styles from an external sheet to load into HTML.'
        ],
        rightAnswer: 0
    },
]

function generateQuestion() {
    // access the h1 called question in my html
    var questionH1 = $("#question");
    
    // access the div called answerArea for the answers to go inside
    var answerArea = $('.answerArea')

    // set the question title text inside of the H1 on html
    questionH1.text(`${questionList[questionCounter].questionTitle}`)

    // loop through the answers
    for (var i = 0; i < 4; i++) {
        // creating a button to put the answer text inside of
        var answerBtn = document.createElement('button');
        // setting the inner text of the above button to be the answer we are on
        answerBtn.innerHTML = `${questionList[questionCounter].answers[i]}`
        // append this button to the div in html
        answerArea.append(answerBtn)
    }
}

$(".answer-btn").on("click", function(){
    generateQuestion()
    questionCounter++
})
generateQuestion()

// if (rightAnswer) {
//     //add 5 points to score, local storage?
//     //move to next question in array
// }   else   {
//     addEventListener('click', function() {
//         sec -= 30;
//         document.getElementById('Clock').innerHTML='00:'+sec;
//     });

// }
    //move to next question in array




//local storage needs to save points and initials
//currently choosing questions at random, choosing same question more than once.  Needs to go through array, at random but each item once.



