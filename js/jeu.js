// récupération de la modal
var modal = $('#myModal')
// bouton qui ouvre la modal
var btn = $('#myBtn')
// récupérer le span qui ferme la modal
span = $('.close')
// On intialise l'équipe actuelle
team = 0;
// trackeur positionné en case start permettant de savoir sur quelle case le pion se trouve actuellement
team.position = 0;
position = 0
target = null;
// distance pour décaler une seule case
distance = 156;
// set turn var
turn = 0;
// tableau de qestions passés
usedQuestion = [];

// déterminer quelle équipe va jouer
var teamActuel = function (nbTeam) {

    if (team == 0) {
        team += 1
        console.log('C\'est au tour de l\'équipe n°' + team)
    } else if (team == 1) {
        team += 1
        console.log('C\'est au tour de l\'équipe n°' + team)

    } else if ((team == 2) && (nbTeam > 2)) {
        team += 1
        console.log('C\'est au tour de l\'équipe n°' + team)

    } else if ((team == 3) && (nbTeam == 4)) {
        team += 1
        console.log('C\'est au tour de l\'équipe n°' + team)
    } else {
        team = 1
        console.log('C\'est au tour de l\'équipe n°' + team)
    }
}

// fonction lancer de dé
var lancerDe = function () {
    de = Math.ceil(Math.random() * 6);
    console.log('Résultat du dé : ' + de)
    movePawn();
}

// fonction slidant le plateau et actualisant la position
var movePawn = function () {
    var position = objs[team].position
    target = position + de
    console.log(target)
    console.log('La case de destination est la : ' + target)
    for (m = position; m < target; m++) {
        $('.wrap' + team + ' .relative').eq(m).animate({
            opacity: "0"
        })
        $('.wrap' + team + ' .relative').animate({
            right: "+=" + distance
        })
        $('.team' + team + '-icon').effect("bounce", { times: 1 }, 400)

    }
    // on actualise la position pour le prochain tour
    // et le tracker en récupèrant la case
    objs[team].position = target
    console.log(objs[team])
    action();
}

// on vérifie si square est une case action en actualisant la trackeur
var action = function () {
    tracker = $('.wrap' + team + ' .case[data-index=' + target + ']')
    var action = tracker.hasClass('action')
    console.log('La case est-elle une action ? ' + action)
    // si l'action renvoie true alors on continue
    if (action) {
        // boucle qui vérifie si le numéro de question a déjà été tiré
        do {
            question = Math.floor(Math.random() * 13) + 1;
            var isUsed = usedQuestion.includes(question)
        } while (isUsed)
        // on insère le nouveau numéro de la question dans un tableau
        usedQuestion.push(question)
        q = parseInt(question) + 1;
        $('.numero').text(question);
        $('.n-question').text(questionnaire[question][0])
        if (questionnaire[question][1] !== undefined) {
            $('.a').text(questionnaire[question][1][0])
            $('.b').text(questionnaire[question][1][1])
            $('.c').text(questionnaire[question][1][2])
            baseReponse();
        } else {
            baseOuverte();
            $('.reponse').append('<div id="time"><div>');
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

            $('#time').show()
        }

        // calcul de délai pour afficher la question en fonction de nombre de cases à parcourir
        timeout = de * 400
        // console.log('le delai ' + timeout)
        setTimeout(function () {
            $('#myModal').css('display', 'grid');
        }, timeout);
    } else {
        teamActuel(nbTeam)
    }
    // score();

};

var score = function () {
    var score = $('.score' + team).text();
    var s = parseInt(score)
    newScore = s + parseInt(100);
    $('.score' + team).text(newScore);
    objs[team].score = newScore
    console.log(objs[team].score)
    if (objs[team].score > 500) {
        alert("Léquipe " + objs[team].name + 'a gagné !')
    }
    teamActuel(nbTeam)
}

// Récupérer réponse et vérifier si bonne ou non
$('#rep').click(function () {
    // on récupère la valeur de la réponse choisie
    var a = $("input[type=radio][name=list]:checked").attr("value");
    var b = questionnaire[question][2];
    if (a == b) {
        //alert("Correct");
        score()
        modal.style.display = "none";

    } else {
        //alert("Incorrect");
        $('.reponse div').remove();
        $('#rep').remove();
        $('.reponse').append('<p class="errormsg">Vous etes le maillon faible. Au revoir !</p>');
        teamActuel(nbTeam)

    }

    reboot();
})

// Envoie de scores lors de l'appui sur la validation
$('#val').click(function () {
    var c = $("input[type=button][name=valider]").attr("value");
    //alert("Correct");
    score()
    modal.style.display = "none";
    reboot();
})

// 
$('#ech').click(function () {
    $('.reponse div').remove();
    $('#rep').remove();
    $('.validation').hide();
    $('.reponse').append('<p class="errormsg">Vous etes le maillon faible. Au revoir !</p>');
    reboot();
    teamActuel(nbTeam)

})

