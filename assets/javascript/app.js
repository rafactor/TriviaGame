/* 
 * LIST OF ALL QUESTIONS
 */

var data = [{
    "question": "Who said 'Aren\'t you a little short for a stormtrooper?",
    "alternatives": ["The Emperor", "Admiral Motti", "Princess Leia", "Han Solo"],
    "answer": 2
},
{
    "question": "When Luke, Leia, and Han Solo are stuck in the trash compactor, what else is in there with them?",
    "alternatives": ["Gundark", "Dianoga", "Anooba", "Wampa"],
    "answer": 1
},
{
    "question": "Who said 'I\'m rather embarrassed, General Solo, but it appears that you are to be the main course at a banquet in my honor.'",
    "alternatives": ["Lando Calrissian", "C-3PO", "Jabba The Hutt", "Darth Vader"],
    "answer": 1
},
{
    "question": "Who was the only actor ever nominated for an Oscar for his/her work in one of the 'Star Wars' movies?",
    "alternatives": ["Peter Cushing", "Harrison Ford", "Ewan Mcgregor", "Alec Guinness"],
    "answer": 3
},
{
    "question": "What special concession did George Lucas make to Samuel L. Jackson when he joined the 'Star Wars' prequels?",
    "alternatives": ["Lucas cast Jackson's nephew as a youngling.", "Lucas let Jackson help design his own action figure.", "Lucas gave Jackson the only curse word in the series.", "Lucas gave Jackson a purple lightsaber."],
    "answer": 3
},
{
    "question": "Who was the puppeteer that voiced Yoda?",
    "alternatives": ["Jim Henson", "Stuart Freeborn", "Tim Rose", "Frank Oz"],
    "answer": 3
},
{
    "question": " R2D2 was named after:",
    "alternatives": ["A piece of film editor's jargon meaning Reel 2 Dialogue 2", "Sony's first robot RD22", "Part of George Lucas's address: Road 2, District 2"],
    "answer": 0
},
{
    "question": "What is Han Solo's call sign when he is patrolling Hoth on his Tauntaun?",
    "alternatives": ["Echo 3", "Echo 7", "Echo 5"],
    "answer": 0
},
{
    "question": " What was the name of R2-D2's sidekick?",
    "alternatives": ["Chewbacca", "C-3P0", "BB8"],
    "answer": 1
},
{
    "question": "What creatures did the 'Sand People' ride?",
    "alternatives": ["Banthas", "Mantes", "Maranthas"],
    "answer": 0
},
]




/* 
 * Create the HTML Structure
 */

// Global variables
var numberOfQuestions = 10; //number of questions that the user will answer
var questionNumber = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
var $container = $('.container');
var category = 'Star Wars Trivia Game';
var question = 'Are you ready for testing your knowledge?';
var questionNumber = 0;
var answer;
var score = 0;
var wrong = 0;
var intervalId;
var countdownId;
var timing = 15;
var timer = timing;
var timerFlag;


var build = {
    landing() {

        $('.container').empty();
        var $start = $('<div>');
        // $start.html('test');
        $container.append($start);
        build.introCard();
    },

    introCard() {
        let $card = $('<div>');
        $card.addClass('card text-center');

        let $category = $('<div>');
        $category.addClass('card-header').html(category);

        let $body = $('<div>');
        $body.addClass('card-body');

        let $title = $('<div>');
        $title.addClass('question')
        $title.html(question);

        let $list = $('<div>');
        $list.addClass('list-group')

        let $button = $('<div>');
        $button.addClass('button');
        $button.html('<a href="#" class="btn btn-primary">Go!</a>');

        let $footer = $('<footer>');
        $footer.addClass('card-footer text-muted').html('2018 Copyright');

        $container.append($card);
        $card.append($category, $body, $footer);
        $body.append($title, $list, $button)
    },
    correctChoice() {
        clearInterval(countdownId);
        score += 1;

        $('.list-group').empty();
        $('.list-group').html('<div class="answer"></div><img src="assets/images/right.gif" alt="You are right!!">');
        $('.score').text(score);
        questionNumber += 1;


    },

    wrongChoice() {
        clearInterval(countdownId);
        $('.list-group').empty();

        wrong += 1;
        $('.wrong').text(wrong)

        if (timerFlag === 'timer') {
            $('.list-group').html('<div class="answer"></div><img src="assets/images/timeover.gif" alt="You are wrong!!">');
        } else {
            $('.list-group').html('<div class="answer"></div><img src="assets/images/wrong.gif" alt="You are wrong!!">');
        }
        correctAnswer = data[questionNumber].alternatives[answer];
        $('.answer').text('The correct answer is: ' + correctAnswer);
        questionNumber += 1;

        clearInterval(countdownId)


    },
    countdown() {
        let displayTimer;

        timer -= 1;
        $('.score').text(score);

        if (timer <= 9) {
            displayTimer = '0' + timer;
        } else {
            displayTimer = timer;
        };
        $('.timer').text('Timer 00:' + displayTimer);

        if (timer === 0) {
            timerFlag = 'timer'
            build.wrongChoice();

            intervalId = setInterval(btn.next, 2000);
        }
    },

}
// Create the initial screen with the start button

// Create the listener for the start button


// Build the template with question,"alternatives"and timer

// create the timer

// Populate the template with the first question,"alternatives"and timer

// create the listener for the response

// Compare the user response with the question answer

// Timer function that will mark the question as wrong if the timer is over

// Calculate the score (right and wrong)

// Update the screen accordingly to the response (right or wrong)

// check if there is another question to be shown. 

// If yes, show a button to show the right answer or load it right away

// if not, show the final score

var btn = {
    start() {
       
        $('.button').empty();
        $('footer').html('<div>Correct answers: <span class="score">0</span></div>' +
            '<div>Bad choices:  <span class="wrong">0</span></div>' +
            '<div class="timer">Timer <span>00:00</span></div>');
        // questionNumber += 1;
        btn.next();
    },

    next() {
        if (questionNumber === 9) {
            console.log('game over');
            clearInterval(intervalId)
           
            questionNumber = 0;
            build.landing();
        } else {
            $('.list-group').empty();
            timerFlag = '';

            $('.question').html(data[questionNumber].question);

            data[questionNumber].alternatives.forEach((item, index) => {
                let $alternative = $('<a>');
                $alternative.addClass('list-group-item list-group-item-action')
                    .attr({
                        'href': '#',
                        'data-toggle': "list",
                        'data-item': index,
                    }).text(item);

                $('.list-group').append($alternative);
                clearInterval(intervalId);
            });


            timer = timing;
            countdownId = setInterval(build.countdown, 1000)
        }
    },

    alternative() {
        let selection = $(this).attr('data-item');
        answer = data[questionNumber].answer;

        if (selection == answer) {

            build.correctChoice();
        } else {

            build.wrongChoice();

        }

        intervalId = setInterval(btn.next, 2000);

        // console.log(selection, answer)
    },

}


$(document).on("click", ".btn", btn.start)

$(document).on("click", ".list-group-item", btn.alternative)


build.landing();