// trackeur positionné en case start permettant de savoir sur quelle case le pion se trouve actuellement
var position = 0;
var target = null;
// distance pour décaler une seule case
var distance = 156;
// $('.de').click(function () {
//     lancerDe()
//     movePawn()
//     action()
// })

$(document).ready(function () {
    console.log(nbTeam)
    console.log('C\'est au tour de l\'équipe n°' + team)
    $('.de').click(function () {
        if (team == 0) {
            team += 1
        }
        lancerDe()
        movePawn()
        action()
        if (objs[team].score > 500) {
            alert("Léquipe " + objs[team].name + 'a gagné !')
        }
        teamActuel()

    })
})

// $(document).ready(function () {
//     console.log(nbTeam)
//     console.log('C\'est au tour de l\'équipe n°' + team)
//     $('.de').click(function () {
//         while (objs[team].score < 500) {
           
//             lancerDe()
//             movePawn()
//             action()
//             if (objs[1].score > 500) {
//                 alert("Léquipe " + objs[team].name + 'a gagné !')
//             }
//             teamActuel()
//         }
//         if (objs[2].score < 500) {
//             lancerDe()
//             movePawn()
//             action()
//             if (objs[team].score > 500) {
//                 alert("Léquipe " + objs[team].name + 'a gagné !')
//             }
//             teamActuel()
//         }
//         if (objs[3].score < 500) {
//             lancerDe()
//             movePawn()
//             action()
//             if (objs[team].score > 500) {
//                 alert("Léquipe " + objs[team].name + 'a gagné !')
//             }
//             teamActuel()
//         } 
//     })
// })