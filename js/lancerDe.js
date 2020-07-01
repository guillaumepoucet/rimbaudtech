// trackeur positionné en case start permettant de savoir sur quelle case le pion se trouve actuellement
var position = 0;
var target = null;
// distance pour décaler une seule case
var distance = 156;
$('.de').click(function () {
    var de = Math.ceil(Math.random() * 6);
    target = position + de
    // fonction slidant le plateau
    for (n = position; n < target; n++) {
        $('.wrap1 .relative').eq(n).animate({
            opacity: "0"
        })
        $('.wrap1 .relative').animate({
            right: "+=" + distance,
        })
    }
    // on actualise la position pour le prochain tour
    // et le tracker en récupèrant la case
    position = target
    //console.log(position)
    tracker = $('.case[data-index=' + target + ']')
    // on vérifie si square est une case action
    var action = tracker.hasClass('action')

    // si action, on choisit une question au hasard
    if (action) {
        var n = Math.floor(Math.random() * 13) + 1;
        q = parseInt(n) + 1;
        $('.numero').text(n);
        $('.n-question').text(questionnaire[n][0])
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
    };
})