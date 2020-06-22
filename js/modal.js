// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    var n = Math.floor(Math.random() * 13) + 1;
    console.log(n + 1);
    console.log(question[n]);
    $('.numero').text(n + 1);
    $('.n-question').text(questionnaire[n][0])
    $('.a').text(questionnaire[n][1][0])
    $('.b').text(questionnaire[n][1][1])
    $('.c').text(questionnaire[n][1][2])

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