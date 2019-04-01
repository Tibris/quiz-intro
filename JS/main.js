const shootSound = document.getElementById("shooting-sound"); 
const socialNetworks = document.getElementById("social-networks");
const quizName = document.getElementById("quiz-name");
const start = document.getElementById("start");
const footer = document.getElementById("footer");
const aimIcon = document.getElementById("aim-icon");

function playAudio() { 
    shootSound.play(); 
} 

function collapse() {
    socialNetworks.setAttribute("style", "position: absolute; animation: fall; animation-fill-mode: forwards; animation-duration: 1.3s; animation-delay: 0.1s;");
    footer.setAttribute("style", "position: absolute; animation: fall; animation-fill-mode: forwards; animation-duration: 1s;");
    quizName.setAttribute("style", "position: relative; animation: form 2s forwards; animation-delay:0.1s;");

}

function dissapear() {
    start.setAttribute("style", "display:none;");
}

document.getElementById("aim-icon").onclick = function() {
    playAudio(); collapse(); dissapear();
};

window.transitionToPage = function(href) {
    setTimeout(function() { 
        window.location.href = href
    }, 2000)
}
