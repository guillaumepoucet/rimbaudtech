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

    // On regarde si le point tombe sur une case action 
    var parent = $(img).parent().parent(".case");
    var defi = parent.hasClass('defi');
    var quiz = parent.hasClass('quiz');
    // Si quizz on ouvre la modal question
    if (quiz) {
        modal.style.display = "block";
    }
    
});

