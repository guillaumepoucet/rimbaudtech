// lance les différentes acitons/fonctions du dessus lors du lancer de dé
$(document).ready(function () {
    console.log('Le nombre d\'équipe en jeu : ' + nbTeam)
    console.log('C\'est au tour de l\'équipe n°' + team)
    $('.de').click(function () {
        lancerDe()
    })
})