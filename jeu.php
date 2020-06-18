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
                <p><span class="score">320</span> pts</p>
            </div>
        </div>

    </div>

    <div id="de">
        <p style="text-align:center"><img id="baliseImg" width="50" height="50" src="img/de/de6.jpg"></p>
        <p style="text-align:center">Lancer le dé :&nbsp;<input type="button" id="btnGo" value="Go !"></p>
    </div>

<!-- Trigger/Open The Modal -->
    <button id="myBtn">Afiicher une question</button>

    <!-- The Modal Question-->
    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div id="question" class="modal-content">
            <span class="close">&times;</span>
            <?php

            require_once "class/Question.php";

            $q = new Question;
            $q->getQuestion(3);
            $q->setQuestion(3); ?>


             <div id="reponse" class="modal-content">
                <span class="close">&times;</span>
                <?php

                require_once "class/Reponse.php";

                $r = new Reponse;
                $r->getReponse(3);
                $r->setReponse(3); ?>
            </div>
        </div>

    </div>

    <script>
        $('.case').eq(3).addClass('defi');
        $('.case').eq(9).addClass('quiz');
    </script>

    <script type="text/javascript">
        var question =[
            ["question n°1 ?", "Reponse 1a", "Reponse 1b", "Reponse 1c"],
            ["question n°2 ?","Reponse 2a", "Reponse 2b", "Reponse 2c"]
        ];
        console.log(question);
    </script>

    <script src="js/lancerDe.js"></script>
    <script src="js/modal.js"></script>

</body>

</html>