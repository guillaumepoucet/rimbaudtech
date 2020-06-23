<?php session_start() ?>
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

<?php 
    
    require_once "class/Team.php";
    $team1 = new Team($_SESSION['teams']['team1']['team-name']);
    $team1->setIcon($_SESSION['teams']['team1']['team-icon']);
    $team1->setScoreIcon($_SESSION['teams']['team1']['score-icon']);
    ?>


    <div id="plateau">
        <div id="start">
            <p>Start !</p>
        </div>
        <div class="start-container case case0">
            <div class="head">Pions</div>
            <div class="body body0">
                <?php if (isset($_SESSION['teams']['team1'])) : ?>
                    <img src="<?= $team1->getIcon() ?>" alt="" class="team1-icon">
                <?php endif ?>
            </div>
        </div>

        <?php

        for ($i = 1; $i <= 14; $i++) {
            echo "<div class=\"case case$i\">
                    <div class=\"head $i\">$i ";
            if ($i == 3) {
                echo "Défi";
            } else if ($i == 9) {
                echo "Quiz";
            };
            echo "</div>
            <div class=\"body body$i\"></div>
                    </div>";
        }
        ?>

        <div class="score-board">
            <h2>Scores</h2>
            <div class="team team-1">
                <div class="team-header"><img src="<?= $team1->getScoreIcon() ?>" alt="" class="score-team-icon"></div>
                <h4><?= $team1->getPseudo() ?></h4>
                <p><span class="score"><?= $team1->getScore() ?></span> pts</p>
            </div>
        </div>

    </div>

    <div id="de">
        <p style="text-align:center"><img id="baliseImg" width="50" height="50" src="img/de/de6.jpg"></p>
        <p style="text-align:center">Lancer le dé :&nbsp;<input type="button" id="btnGo" value="Go !"></p>
    </div>

<!-- Trigger/Open The Modal -->
    <button id="myBtn">Afficher une question</button>

    <!-- The Modal Question-->
    <div id="myModal" class="modal">

        <!-- Modal content -->

    <form action="POST">
        <div id="question" class="modal-content">
            <span class="close">&times;</span>
            <div>
                <p class="question">Question n°<span class="numero"></span></p>
                <p class="n-question"></p>
            </div>
            <div class="reponse">
                <div><input type="radio" name="list" value="1" id="">
                    <p class="a"></p>
                </div>
                <div><input type="radio" name="list" value="2" id="">
                    <p class="b"></p>
                </div>
                <div><input type="radio" name="list" value="3" id="">
                    <p class="c"></p>
                </div>

                <input type="button" id="rep" value="Repondre !"></p>


            </div>
        </div>
    </form>

    

    </div>

    <script>
        $('.case').eq(3).addClass('defi');
        $('.case').eq(9).addClass('quiz');
    </script>

    

    <script src="js/modal.js"></script>
    <script src="js/score.js"></script>
    <script src="js/questionnaire.js"></script>
    <script src="js/jeu.js"></script>
    <script src="js/lancerDe.js"></script>
    

</body>

</html>


      