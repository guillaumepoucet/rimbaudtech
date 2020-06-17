var img = $('.team1-icon');

// Function Lancer de des aleatoire et affichage
document.querySelector('#btnGo').addEventListener('click', function () {
            var p = Math.ceil(Math.random() * 6)
    document.querySelector('#baliseImg').src = 'img/de/de' + p + '.jpg';

    var place = $('.3').parent().prevAll().length;
    var x = place -1;
    console.log(x);

    // On recupere l info
    console.log(p);

    // On calcule la nouvelle position et on recup l info
    var newposition = p + place;
    console.log(newposition);

    $((".case") + newposition).append(img);
    
});

