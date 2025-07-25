let target = document.querySelectorAll(".drum");
let eventType="click";

document.addEventListener("keydown", function(event) {
    let key = event.key;
    btnAnimation(key);
    makeSound(key);
});

for (let i=0; i<target.length; i++) {
    target[i].addEventListener(eventType, function() {
        let buttonInnerHTML=this.innerHTML;
        btnAnimation(buttonInnerHTML);
        makeSound(buttonInnerHTML);
    })
}

function btnAnimation (key) {
    let target=document.querySelector("."+key);
    target.classList.add("pressed");
    setTimeout(function() {
        target.classList.remove("pressed");
    }, 100);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/sounds_crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            console.log(key);
    }
}