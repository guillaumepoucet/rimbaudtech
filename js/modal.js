// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    var n = Math.floor(Math.random() * 13) + 1;
    $('.numero').text(n + 1);
    $('.n-question').html(questionnaire[n][0])
    // si pas de réponses, oinsertion d'un timer
    if (questionnaire[n][1] !== undefined) {
        $('.a').text(questionnaire[n][1][0])
        $('.b').text(questionnaire[n][1][1])
        $('.c').text(questionnaire[n][1][2])
    } else {
        $('.reponse div').remove();
        $('.reponse').append('<div id="time"><div>');
        // timer countdown
        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
        
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
                display.text(minutes + ":" + seconds);
        
                if (--timer < 0) {
                    timer = duration;
                } 
            }, 1000);
        }
        
        jQuery(function ($) {
            var fourMinutes = 60 * 4,
                display = $('#time');
            startTimer(fourMinutes, display);
        });

    }

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    $('#time').remove()
        
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 