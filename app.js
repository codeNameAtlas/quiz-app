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
    




});