var $button;
var questions = ["do you like pasta?", "what's you middle name?", "Are you old?"];

var randomQuestion= function(){
  $paragraph = $('#question');
  text = questions[Math.floor((Math.random() * questions.length))];
  console.log(text);
  $paragraph.text(text);
}

$(document).ready(function(){
  $button = $("#quiz");
  $button.on('click', randomQuestion);
});