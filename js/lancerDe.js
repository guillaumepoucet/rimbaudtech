// Function Lancer de des aleatoire et affichage
document.querySelector('#btnGo').addEventListener('click', function () {
            var p = Math.ceil(Math.random() * 6)
    document.querySelector('#baliseImg').src = 'img/de/de' + p + '.jpg';

    // On recupere l info
    console.log(p);
});1

