// set tableau des futurs objets équipes
objs = [];

// construit un tableau composée de chiffres aléatoires pour la sélection des cases Actions
var caseRand = function () {
    for (y = 1; y <= 18; y++) {
        do {
            nb = Math.floor(Math.random() * 30) + 1;
            var nbUsed = caseAction.includes(nb);
        } while (nbUsed);
        caseAction.push(nb)
    }
    caseAction.sort()
}

var actionCases = function () {
    for (z = 0; z <= 18; z++) {
        // console.log(caseAction[z]);
        $('.wrap' + t + ' .case-count').eq(caseAction[z] - 1).addClass('action');
        $('.wrap' + t + ' .bis .span').eq(caseAction[z] - 1).hide();
        $('.wrap' + t + ' .bis .svgBubble').eq(caseAction[z] - 1).hide();
        $('.wrap' + t + ' .bis').eq(caseAction[z] - 1).append("<img class=\"svgAction\" src=\"img/action.svg\" alt=\"\">");
        $('.wrap' + t + ' .bis').eq(caseAction[z] - 1).append("<img class=\"svgBoom\" src=\"img/boom.svg\" alt=\"\">");
    }
}

for (t = 1; t <= nbTeam; t++) {
    // récupération du nom et pion des équipes
    name = $('.team' + t + ' .team-name p').text()
    pawn = $('.team' + t + '-icon').attr('src')
    // construction d'un objet pour chaque équipe
    objs[t] = new Team(name, pawn)
    // le tableau utilisé pour les cases actions est vidé pour chaque équipe
    caseAction = [];
    // détermination des cases actions
    caseRand()
    // transformation des cases en case action
    actionCases();
}