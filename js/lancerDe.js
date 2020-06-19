// Declaration variable
var img = $('.team1-icon');

// var place = $(img).parent().parent(".case").prevAll().length;
// var x = place - 1;
// console.log(x);


// Function Lancer de dé aleatoire et affichage
document.querySelector('#btnGo').addEventListener('click', function () {
            var p = Math.ceil(Math.random() * 6)
    document.querySelector('#baliseImg').src = 'img/de/de' + p + '.jpg';

    // Position initial
    // On recupere la position de deux parents au-deussus donc le numero de case
    var place = $(img).parent().parent(".case").prevAll().length;
    // On soustraie 1 pour recuperer la vraie valeur
    var x = place -1;
    console.log(x);

    // On recupere l info du dé
    //console.log(p);

    // On calcule la nouvelle position et on recup l info
    var newposition = p + x;
    console.log(newposition);

    // On deplace le pion en le fixant a la bonne case
    $((".body") + newposition).append(img);

    // var place = $(img).parent().parent(".case").prevAll().length;
    // var x = place - 1;
    // console.log(x);

    // On definis un tableau avec les questions/reponses
    var question = [
        ["Parmi ces choix, qu'est ce pour vous que l'innovation ?", "Reponse 1a", "Reponse 1b", "Reponse 1c"],
        ["question n°2 ?", "Reponse 2a", "Reponse 2b", "Reponse 2c"],
        ["question n°3 ?", "Reponse 3a", "Reponse 3b", "Reponse 3c"],
        ["question n°4 ?", "Reponse 4a", "Reponse 4b", "Reponse 4c"],
        ["question n°5 ?", "Reponse 5a", "Reponse 5b", "Reponse 5c"],
        ["question n°6 ?", "Reponse 6a", "Reponse 6b", "Reponse 6c"]
    ];

    // On regarde si le point tombe sur une case action 
    var parent = $(img).parent().parent(".case");
    var defi = parent.hasClass('defi');
    var quiz = parent.hasClass('quiz');
    // Si quizz on ouvre la modal question
    if (quiz) {
        var n = Math.floor(Math.random() * 5) + 1;
        console.log(question[n]);
        $('.numero').text(n );
        $('.n-question').text(question[n][0])
        $('.a').text(question[n][1])
        $('.b').text(question[n][2])
        $('.c').text(question[n][3])

        modal.style.display = "block";
    }
    
});

