<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rimbaud'Tech</title>

    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">    
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>

<body>

    <form action="traitement.php" method="POST">
            <div class="team-name-form">
                <label for="team-name">Choisissez un nom d'équipe : </label>
                <input type="text" name="team-name" id="team-name">
            </div>
            <div class="team-icon-form">
                <p>Choisissez un pion : </p>
                <div class="team-icon horse-icon">
                    <input type="radio" for="horse-icon" name="team-icon" value="horse" id="">
                    <label for="horse-icon"><img src="img/horse.svg" alt=""></label>
                </div>
                <div class="team-icon hat-icon">
                    <input type="radio" for="hat-icon" name="team-icon" value="hat" id="">
                    <label for="hat-icon"><img src="img/hat.svg" alt=""></label>
                </div>
            </div>
            <input type="submit" value="C'est parti !">
        </form>

    


        <!-- On definie les case action et verifie la position -->
    <script>
        $('.case').eq(2).addClass('defi');
        $('.case').eq(8).addClass('quiz');

        var place = $('.3').parent().prevAll().length;
        console.log(place);
    </script>


    <!-- <script>
        var nbrcases = ['start', '1', '2', '3', '4', '5']; 
        var table = '';
        for(var i=0; i< nbrcases.length; i++) {
            table+= 'Case n°' + (i+1) + ' : ' + nbrcases[i] + '\n';
        }
        //alert (table);
    </script> -->
    
    

</body>

</html>