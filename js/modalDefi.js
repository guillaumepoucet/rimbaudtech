// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtnDefis");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Defis
usedDefis = [];
team = 1

// When the user clicks on the button, open the modal
btn.onclick = function () {
    reboot();
    // boucle qui vérifie si le numéro de question a déjà été tiré
    do {
        defi = Math.floor(Math.random() * 11) + 1;
        var isUsed = usedDefis.includes(defi)

    } while (isUsed)
    // on insère le nouveau numéro de la question dans un tableau
    usedDefis.push(defi)
console.log(defi)
console.log(defis[defi][0])

    $('.numero').text(defi + 1);
    $('.n-question').html(defis[defi][0])
    // si pas de réponses, insertion d'un timer
    if (defis[defi][1] !== undefined) {
        $('.a').text(defis[defi][1][0])
        $('.b').text(defis[defi][1][1])
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


    modal.style.display = "grid";

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

function reboot() {
    $('reponse div').show();
    $('.btnrep').show();
    //$('.validation').show();
    $('.reponseInput').show();
    $('#time').remove();
}

function baseReponse() {
    $('.validation').hide();
    $('#time').remove();
}

function baseOuverte() {
    $('.reponseInput').hide();
    $('.btnrep').hide();
    $('.validation').show();
}

// On reactive l input ENTRER
//noPressEnter(document.body, false);