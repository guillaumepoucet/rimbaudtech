$(function () {
    $('#rep').click(function () {
        var n = ($('.numero').text() - 1);
        console.log(n)

        var a = $("input[type=radio][name=list]:checked").attr("value");
        var b = questionnaire[n][2];
        console.log(b)
        console.log(a)
        if (a == b) {
            //alert("Correct");
            var score = $('.score').text();
            var s = parseInt(score)
            newScore = s + 100;
            $('.score').text(newScore);
            modal.style.display = "none";


        } else {
            //alert("Incorrect");
            var score = $('.score').text();
            var s = parseInt(score)
            newScore = s + 0;
            $('.reponse div').remove();
            $('#rep').remove();
            $('.reponse').append('<p>Vous etes le maillon faible. Au revoir !</p>');

        }
    })
}) 