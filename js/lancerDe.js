var img = $('.team1-icon');

// var place = $(img).parent().parent(".case").prevAll().length;
// var x = place - 1;
// console.log(x);

// Function Lancer de des aleatoire et affichage
document.querySelector('#btnGo').addEventListener('click', function () {
    var p = Math.ceil(Math.random() * 6)
    document.querySelector('#baliseImg').src = 'img/de/de' + p + '.jpg';

    // On recupere la position de deux parents au-deussus donc le numero de case
    var parent = $(img).parent().parent(".case");
    var place = parent.prevAll().length;
    // On soustraie 1 pour recuperer la vraie valeur
    var x = place - 1;
    // console.log(x);

    // On calcule la nouvelle position et on recup l info
    var newposition = p + x;
    // console.log(newposition);

    // on attache l'icone joueur à la bonne case
    $((".body") + newposition).append(img);

    var defis = [
        ["À vous de jouer, trouver en équipe votre prochaine innovation."],
        ["À vous de jouer, trouver un nom à votre innovation et notez le ci-dessous."],
        ["À vous de jouer, dessinnez ."]
    ];

    var parent = $(img).parent().parent(".case");
    var defi = parent.hasClass('defi');
    var quiz = parent.hasClass('quiz');

    if (quiz) {
        var n = Math.floor(Math.random() * 13) + 1;
        // console.log(question[n]);
        q = parseInt(n) + 1;
        console.log(n)
        console.log(q)
        $('.numero').text(n);
        $('.n-question').text(questionnaire[n][0])
        $('.a').text(questionnaire[n][1][0])
        $('.b').text(questionnaire[n][1][1])
        $('.c').text(questionnaire[n][1][2])

        modal.style.display = "block";
    }

});

