$("document").keypress(function() {
    $("#level-title").text("Let's Begin!");
});

var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red","blue","green","yellow"];

function playSound (name) {
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4); // Generates 0, 1, 2, or 3
    var randomChosenColor = buttonColors[randomNumber];
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
}

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
})
