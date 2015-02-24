$( document ).ready(function() {
    console.log( "ready!" );

    //4 questions and answers
    //var questions is an array with 4 objects
    //each objects has 4 properties
    var questions = [
    	{ 
    		question: "What is the capital city of Ecuador?",
    		answers: ["Cuenca", "Quito", "Salinas", "Guayaquil"],
    		qNum: 0,
    		correct: 1
    	},
    	{
    		question: "Ecuador is 1 of 2 countries in South America that does not share a border with Brazil. Which is the other country?",
    		answers: ["Chile", "Bolivia", "Colombia", "Guayana"],
    		qNum: 1,
    		correct: 0
    	},
    	{
    		question: "Which of these animals is considered a delicay to eat in Ecuador?",
    		answers: ["Rabbit", "Howler Monkey", "Guinea Pig", "Wild Duck"],
    		qNum: 2,
    		correct: 2
    	},
    	{
    		question: "Which famous scientist developed his theory of evolutoin on the Galapogos Islands of Ecuador?",
    		answers:["Copernicus", "Galileo", "Newton", "Darwin"],
    		qNum: 3,
    		correct: 3
    	}
    ]
    //console.log(questions[0].question);
    //called first question in first object property to test var questions
    //global variables

    var currentQuestion = 0;
    var correctGuesses = 0;

    $('.question-container').on("click", "#submit", function(){
        console.log("Submit");
    	evaluateAnswer();
    	currentQuestion ++;
    	nextQuestion();
    	var newQuestion = '<span class="question">' + questions[currentQuestion].question + '</span><br><div id="answer-holder"><input type="radio" name="option" class="option" value="0"><span class="answer">' + questions[currentQuestion].answers[0] + '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">' + questions[currentQuestion].answers[1] + '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">' + questions[currentQuestion].answers[2] + '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">' + questions[currentQuestion].answers[3] + '</span><br></div><div id="button-holder"><input type="button" id="submit" value="Submit Answer"></div>';
    	$('.question-container').html(newQuestion);
    })

    //create a function for newQuestion and use console.log to see where the bug is

    function evaluateAnswer() {
    	var userGuess = $('input[type="radio"][value="questions[currentQuestions].correct"]').prop("checked", true);
    	//var userGuess = $('input[type="radio"]:"checked"').val();
    	if ( questions[currentQuestion].correct === userGuess) {
    		//correctGuesses += 1;
    		correctGuesses++;
    	}
    }

    
    function nextQuestion() {
    	if (currentQuestion < 4) {
    		//$('.question').remove();
    		$('#answer-holder input').remove();
    		$('#answer-holder span').remove();
    		$('#answer-holder').remove();
    		var newQuestion = '<span class="question">' + questions[currentQuestion].question + '</span><br><div id="answer-holder"><input type="radio" name="option" class="option" value="0"><span class="answer">' + questions[currentQuestion].answers[0] + '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">' + questions[currentQuestion].answers[1] + '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">' + questions[currentQuestion].answers[2] + '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">' + questions[currentQuestion].answers[3] + '</span><br></div><div id="button-holder"><input type="button" id="submit" value="Submit Answer"></div>';
    		$('.question-container').html(newQuestion);
    	}
    	else {
    		var finalResult = '<span class="final">Congratulations you guessed ' + correctGuesses + 'question correct!</span>'
    		$('#answer-holder').html(finalResult);
    	}

    }



    /*function runQuiz() {
    	$('question').text(questions[i].question)
    }

    runQuiz(); */
});

//set current question and number correct
//start with on.click
//
//
//
//
