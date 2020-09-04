var Question = function(question,answerChoices,correctAnswer)
{
    this.question = question;
    this.answerChoices = answerChoices;
    this.correctAnswer = correctAnswer;
}

var q1 = new Question('What is my name?',['Diego','Andres','Pedro'],0);
var q2 =  new Question('What is my age?',[18,21,22,25],2);
var q3 = new Question('2 + 2 = _', [5,22,6,4], 3);
var q4 = new Question('Is God real?', [true,false], 1);


var Qs = [q1,q2,q3,q4];
var r = Math.round(Math.random() * 4);

var displayQuestion = function()
{
    console.log(Qs[r].question);
    for(var i = 0; i < Qs[r].answerChoices.length; i++)
    {
        console.log(i + ': ' + Qs[r].answerChoices[i]);
    }
}
displayQuestion();

var answer = prompt("Please enter your answer: ");

var checkAnswer = function()
{
    if(parseInt(answer,10) === Qs[r].correctAnswer)
    {
        console.log('Correct!');
    }
    else
    {
        console.log('Wrong Answer. Try Again!');
    }
}
checkAnswer();




