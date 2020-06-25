// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
btn.onclick = function () {
    var n = Math.floor(Math.random() * 13) + 1;
    //console.log(n);
    //console.log(questionnaire[n]);
    $('.numero').text(n+1);
    $('.n-question').html(questionnaire[n][0])
    // si pas de réponses, insertion d'un timer
    if (questionnaire[n][1] !== undefined) {
    $('.a').text(questionnaire[n][1][0])
    $('.b').text(questionnaire[n][1][1])
    $('.c').text(questionnaire[n][1][2])
    baseReponse();
    //$('.validation').hide();
    } else {
        //$('.reponseInput').hide();
        //$('.btnrep').hide();
        baseOuverte();
        $('.reponse').append('<div id="time"><div>');
        //$('.validation').show();
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

// When the user clicks ox)n <span> (, close the modal
span.onclick = function () {
    modal.style.display = "none";
    $('#time').remove();
    
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $('#time').remove();
        $('.errormsg').remove();
        //$('.reponse div').show();
        //$('.btnrep').show();
        reboot();
        
    }
    
}

// Test function cacher afficher validation question sans rep timer et scroring 

function reboot(){
    $('reponse div').show();
    $('.btnrep').show();
    //$('.validation').show();
    $('.reponseInput').show();
    $('#time').remove();



}

function baseReponse(){
    $('.validation').hide();
    $('#time').remove();
}

function baseOuverte(){
    $('.reponseInput').hide();
    $('.btnrep').hide();
    $('.validation').show();
}

  
