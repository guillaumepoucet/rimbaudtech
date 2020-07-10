// On récupère le nombre d'équipe
nbTeam = $('.nb-teams').text();

function Team(name, pawn) {

    this.name = name;
    this.pawn = pawn;
    this.position = 0;
    this.score = 0;
    this.console = function () {
        console.log('Nouvelle équipe : ' + this.name)
    }
}

