// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var question = [
    ["Parmi ces choix, qu'est ce pour vous que l'innovation ?", "Reponse 1a", "Reponse 1b", "Reponse 1c"],
    ["question n°2 ?", "Reponse 2a", "Reponse 2b", "Reponse 2c"],
    ["question n°3 ?", "Reponse 3a", "Reponse 3b", "Reponse 3c"],
    ["question n°4 ?", "Reponse 4a", "Reponse 4b", "Reponse 4c"],
    ["question n°5 ?", "Reponse 5a", "Reponse 5b", "Reponse 5c"],
    ["question n°6 ?", "Reponse 6a", "Reponse 6b", "Reponse 6c"]
];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    var n = Math.floor(Math.random() * 5) + 1;
    console.log(n);
    console.log(question[n+1]);
    $('.numero').text(n+1);
    $('.n-question').text(question[n][0])
    $('.a').text(question[n][1])
    $('.b').text(question[n][2])
    $('.c').text(question[n][3])

    modal.style.display = "block";

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}