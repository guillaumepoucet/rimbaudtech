var img = $('.team1-icon');

// var place = $(img).parent().parent(".case").prevAll().length;
// var x = place - 1;
// console.log(x);

// Function Lancer de des aleatoire et affichage
document.querySelector('#btnGo').addEventListener('click', function () {
    var p = Math.ceil(Math.random() * 6)
    document.querySelector('#baliseImg').src = 'img/de/de' + p + '.jpg';

    // On recupere la position de deux parents au-deussus donc le numero de case
    var place = $(img).parent().parent(".case").prevAll().length;
    // On soustraie 1 pour recuperer la vraie valeur
    var x = place - 1;
    // console.log(x);

    // On calcule la nouvelle position et on recup l info
    var newposition = p + x;
    console.log(newposition);

    // on attache l'icone joueur à la bonne case
    $((".body") + newposition).append(img);

    // var place = $(img).parent().parent(".case").prevAll().length;
    // var x = place - 1;
    // console.log(x);
});

