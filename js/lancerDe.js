

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

        lancerDe()
        
    })
})
// new commit

































































































































//         $('.de').click(function () {
//             console.log('C\'est au tour de l\'équipe n°' + team)
//             if (team == 0) {
//                 team += 1
//             }
//             lancerDe()
//             movePawn()
//             action()
//             if (objs[team].score > 500) {
//                 alert("Léquipe " + objs[team].name + 'a gagné !')
//             }
//             teamActuel()
//         })
//         if (objs[team].score < 500) {
//             $('.de').click(function () {
//                 lancerDe()
//                 movePawn()
//                 action()
//                 if (objs[team].score > 500) {
//                     alert("Léquipe " + objs[team].name + 'a gagné !')
//                 }
//                 teamActuel()
//             })
//         }
//     }
// })