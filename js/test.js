for (n = 1; n <= nbTeam; n++) {
    $('.de').click(function () {
        console.log('Numéro du tour : ' + turn)
        console.log('Nombre d\'équipe : ' + nbTeam);

        // fonction lancer de dé
        de = Math.ceil(Math.random() * 6);
        console.log('Résultat du dé : ' + de)
        // on enregistre la destination
        target = position + de
        console.log('La case de destination est la : ' + target)
        // fonction slidant le plateau
        for (m = position; m < target; n++) {
            $('.wrap1 .relative').eq(m).animate({
                opacity: "0"
            })
            $('.wrap1 .relative').animate({
                right: "+=" + distance,
            })
        }
        // on actualise la position pour le prochain tour
        // et le tracker en récupèrant la case
        position = target
        tracker = $('.case[data-index=' + target + ']')
        // on vérifie si square est une case action
        var action = tracker.hasClass('action')
        console.log('La case est-elle une action ? ' + action)
        // on incrémente le tour 
    })
    turn += 1;
}
