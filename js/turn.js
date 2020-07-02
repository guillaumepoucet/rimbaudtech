// déterminer quelle équipe va jouer
var teamActuel = function (nbTeam) {
    if (team == 0) {
        team += 1
        console.log('C\'est au tour de l\'équipe n°' + team)
    } else if (team == 1) {
        team += 1
        console.log('C\'est au tour de l\'équipe n°' + team)
    } else if ((team == 2 && (nbTeam == 3 || nbTeam == 4)) || (team == 3 && nbTeam == 4)) {
        team += 1
        console.log('C\'est au tour de l\'équipe n°' + team)
    } else {
        team = 0
    }
}

$(document).ready(function () {
    team = 0;
    // trackeur positionné en case start permettant de savoir sur quelle case le pion se trouve actuellement
    var position = 0;
    var target = null;
    // distance pour décaler une seule case
    var distance = 156;
    // set turn var
    var turn = 0;

    // On récupère le nombre d'équipe
    var nbTeam = $('.nb-teams').text();

    for (n = 1; n < 8; n++) {
        teamActuel(3)
    }
})