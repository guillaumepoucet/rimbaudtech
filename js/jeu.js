$(function () {
    $('#rep').click(function () {
        var n = ($('.numero').text() - 1);
        //console.log(n)

        var a = $("input[type=radio][name=list]:checked").attr("value");
        var b = questionnaire[n][2];
        //console.log(b)
        //console.log(a)
        if (a == b) {
            //alert("Correct");
            var score = $('.score').text();
            var s = parseInt(score)
            newScore = s + parseInt(100);
            $('.score').text(newScore);
            modal.style.display = "none";


        } else {
            //alert("Incorrect");
            var score = $('.score').text();
            var s = parseInt(score)
            newScore = s + 0;
            $('.reponse div').remove();
            $('#rep').remove();
            $('.reponse').append('<p class="errormsg">Vous etes le maillon faible. Au revoir !</p>');
        }
        reboot();
    })
    $('#val').click(function () {
        var n = ($('.numero').text() - 1);

        var c = $("input[type=button][name=valider]").attr("value");
        //console.log(c)
            //alert("Correct");
            var score = $('.score').text();
            var s = parseInt(score)
            newScore = s + parseInt(100);
            $('.score').text(newScore);
            modal.style.display = "none";
            //$('#time').remove();
            reboot();
    })

    $('#ech').click(function (){
        var d = $("input[type=button][name=echec]").attr("value");
        var score = $('.score').text();
        var s = parseInt(score)
        newScore = s + 0;
        $('.reponse div').remove();
        $('#rep').remove();
        $('.validation').hide();
        $('.reponse').append('<p class="errormsg">Vous etes le maillon faible. Au revoir !</p>');
        reboot();
    })
    reboot();
})