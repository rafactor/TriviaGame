/* 
* LIST OF ALL QUESTIONS
*/

var data = [
    {
    "question": "Question 1",
    "alternatives" : ["answer a", "answer b", "answer c"],
    "answer": 1},
    {
    "question": "Question 2",
    "alternatives" : ["answer a", "answer b", "answer c"],
    "answer": 0},
    {
        "question": "Question 3",
        "alternatives" : ["answer a", "answer b", "answer c"],
        "answer": 2}, 
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
var category = 'Trivia Game';
var question = 'Are you ready for testing your knowledge?';
var questionNumber = 0;
var score = 0;
var wrong = 0;
var interval;

var build = {
    landing(){
        console.log('start');
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
        $('.list-group').empty();
        $('.list-group').html('<div class="anwser">You are right!</div><iframe src="https://giphy.com/embed/pNpONEEg3pLIQ" width="400" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>');
        $('.score').text(score);

     },

     wrongChoice() {
        $('.list-group').empty();
        $('.list-group').html('<div class="anwser"><h5>Bad guess...</h5><p>The correct answer is:</p><p>' +
         'xxx'+ '</div><iframe src="https://giphy.com/embed/pNpONEEg3pLIQ" width="400" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>');
        $('.wrong').text(wrong);
     }
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
        $('footer').html('<p><strong>Correct answers: </strong><span class="score">0</span><strong>   Bad choices: </strong><span class="wrong">0</span></p>');
        questionNumber += 1;
        btn.next();
    },

    next() {
$('.list-group').empty();

        $('.question').html(data[questionNumber].question);

            data[questionNumber].alternatives.forEach((item, index)=> {
                let $alternative = $('<a>');
                $alternative.addClass('list-group-item list-group-item-action')
                .attr({
                    'href':'#',
                    'data-toggle': "list",
                    'data-item': index,
                }).text(item);
                
                $('.list-group').append($alternative);
                clearInterval(interval);
            });
    },

    alternative() {
        let selection = $(this).attr('data-item');
        let answer = data[questionNumber].answer;
        
        if (selection == answer) {
            score =+ 1;
            build.correctChoice();
        } else {
            wrong =+1;
            build.wrongChoice();
            
        }

        interval = setInterval(btn.next,2000);
        
        console.log(score)
        // console.log(selection, answer)
    },

    random(e) {
        var random = Math.floor(Math.random) * e
        return random;
    }
}


$(document).on("click",".btn",btn.start)

$(document).on("click",".list-group-item",btn.alternative)


build.landing();