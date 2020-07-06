// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

usedQuestion = [];
team = 1

// When the user clicks on the button, open the modal
btn.onclick = function () {
    reboot();
    // boucle qui vérifie si le numéro de question a déjà été tiré
    do {
        question = Math.floor(Math.random() * 13) + 1;
        var isUsed = usedQuestion.includes(question)

    } while (isUsed)
        // on insère le nouveau numéro de la question dans un tableau
        usedQuestion.push(question)

        $('.numero').text(question + 1);
        $('.n-question').html(questionnaire[question][0])
        // si pas de réponses, insertion d'un timer
        if (questionnaire[question][1] !== undefined) {
            $('.a').text(questionnaire[question][1][0])
            $('.b').text(questionnaire[question][1][1])
            $('.c').text(questionnaire[question][1][2])
            baseReponse();
        } else {
            baseOuverte();
            $('.reponse').append('<div id="time"><div>');
            // timer countdown
            function startTimer(duration, display) {
                var timer = duration,
                    minutes, seconds;
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

// Cacher la croix de fermeture de la modal 
$('.close').hide();


// When the user clicks on (x) <span> (, close the modal
span.onclick = function () {
    modal.style.display = "none";
    $('#time').remove();
    reboot();
    
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $('#time').remove();
        $('.errormsg').remove();
        reboot();    
    }
}
reboot();

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

//  On bloque l input ENTRER
noPressEnter(document.body);

// On reactive l input ENTRER
//noPressEnter(document.body, false);