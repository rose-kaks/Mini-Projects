var start = 0;

var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red","blue","green","yellow"];

$(document).keydown(function() {
    if (start==0) {
        $("#level-title").text("Let's Begin! Remember to <remember> the pattern! ;)");
        setTimeout(function() {
            $("#level-title").text("Get Ready for Level 1");
            nextSequence();
        }, 2000);
    }
});

function playSound (name) {
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function nextSequence() {
    start++;
    if (start!=1) $("#level-title").text("Congratulations! Now onto Level "+start);
    var randomNumber = Math.floor(Math.random() * 4); // Generates 0, 1, 2, or 3
    var randomChosenColor = buttonColors[randomNumber];
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
    gamePattern.push(randomChosenColor);
}

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    $(this).fadeOut(100).fadeIn(100);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
});

function animatePress(currColor) {
    $("#"+currColor).addClass("pressed");
    setTimeout(function() {
        $("#"+currColor).removeClass("pressed");
    }, 100);
}