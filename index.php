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
    <?php require_once "class/Joueur.php";

        $horse = new Joueur("Cheval");
        $horse->setIcon("<i class=\"fas fa-chess-knight\"></i>");
        $icon = $horse->getIcon();

    ?>

    <?= $icon ?>

    <div id="plateau">

        <?php
        for ($i = 1; $i <= 14; $i++) {
            echo "<div class=\"case case$i\">
                    <div class=\"head $i\">$i</div>
                    <div class=\"body $i\">";
            if ($i == 3) {
                echo "Défi";
            } else if ($i == 9) {
                echo "Quiz";
            };
            echo "</div>
                    </div>";
        }
        ?>

    </div>

    <div id="de">
        <p style="text-align:center"><img id="baliseImg" width="50" height="50" src="img/de/de6.jpg"></p>
  <p style="text-align:center">Lancer le dé :&nbsp;<input type="button" id="btnGo" value="Go !"></p>
    </div>


        <!-- On definie les case action et verifie la position -->
    <script>
        $('.case').eq(2).addClass('defi');
        $('.case').eq(8).addClass('quiz');

        var place = $('.3').parent().prevAll().length;
        console.log(place);
    </script>

        <!-- test objet js -->
    <script>
        var nbrcases = ['start', '1', '2', '3', '4', '5']; 
        var table = '';
        for(var i=0; i< nbrcases.length; i++) {
            table+= 'Case n°' + (i+1) + ' : ' + nbrcases[i] + '\n';
        }
        //alert (table);
    </script>
    
    <script src="js/lancerDe.js"></script>
    <script src="js/boardGame.js"></script>
    <script src="js/Player.js"></script>
    <script src="js/Token.js"></script>
    <script src="js/Game.js"></script>

</body>

</html>