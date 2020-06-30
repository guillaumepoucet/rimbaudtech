<?php session_start() ?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rimbaud'Tech</title>

    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/plateau.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>

<body>

    <?php

    require_once "class/Team.php";
    // $team1 = new Team($_SESSION['teams']['team1']['team-name']);
    // $team1->setIcon($_SESSION['teams']['team1']['team-icon']);
    // $team1->setScoreIcon($_SESSION['teams']['team1']['score-icon']);
    ?>



    <div id="plateau" class="plateau-wrapper">

        <p class="cat-title">scores</p>
        <p class="cat-title teams">teams</p>
        <p class="cat-title parcours">parcours</p>

        <?php for ($n = 1; $n <= $_SESSION['teams-nb']; $n++) : ?>
            <div id="score" class="team<?= $n ?>">

                <div class="team">
                    <div class="team-purple">
                        <div class="team-name">
                            <p><?= $_SESSION['team-' . $n . '-name'] ?></p>
                        </div>
                    </div>
                    <div class="team-yellow">
                        <div class="team-score">
                            <p class="score">0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="team-board" class="team<?= $n ?>">

                <div class="splash-team">
                    <!-- <img src="img/splash-team.svg" alt=""> -->
                    <p>#<?= $n ?></p>
                </div>
            </div>

            <div class="cases-wrap wrap1 team<?= $n ?>">


                <img src="<?= $_SESSION['team-' . $n . '-icon'] ?>" alt="" class="team1-icon icon">

                <div class="relative">
                    <p class="start">start</p>
                    <div class="cases-yellow">
                        <div class="case">
                        </div>
                    </div>
                </div>

                <?php for ($i = 1; $i <= 14; $i++) : ?>
                    <div class="relative">
                        <?php if ($i == 4) : ?>
                            <img class="svgAction" src="img/action.svg" alt="">
                            <img class="svgBoom" src="img/boom.svg" alt="">
                        <?php else : ?>
                            <span>#<?= $i ?></span>
                            <img class="svgBubble" src="img/bubble.svg" alt="">
                        <?php endif ?>
                        <div class="cases-yellow case<?= $i ?>">
                            <div class="case <?= $i ?> case-count" data-index="<?= $i ?>">
                            </div>
                        </div>
                    </div>
                <?php endfor ?>

            </div>

        <?php endfor ?>

        <div class="de-wrap-shadow">
            <div class="de-wrap">
                <div class="de">
                    <img src="img/de.svg" alt="">
                    <p>lancer le dé</p>
                </div>
            </div>
        </div>

        <button id="myBtn">Afficher une question</button>



    </div>

    <div id="myModal" class="modal">

        <div class="yellow">

            <div id="question" class="modal-content">

                <span class="close">&times;</span>

                <div>
                    <p class="question">Question n°<span class="numero"></span></p>
                    <p class="n-question"></p>
                </div>

                <div class="reponse">
                    <div class="reponseInput"><input type="radio" name="list" value="1" id="">
                        <p class="a"></p>
                    </div>
                    <div class="reponseInput"><input type="radio" name="list" value="2" id="">
                        <p class="b"></p>
                    </div>
                    <div class="reponseInput"><input type="radio" name="list" value="3" id="">
                        <p class="c"></p>
                    </div>
                </div>

                <div id="rep" class="btnrep">
                    <div>
                        <span>Répondre !</span>
                    </div>
                </div>


                <div class="validation">
                    <input class="btnval" type="button" name="valider" id="val" value="Valider !"></p>
                    <input class="btnechec" type="button" name="echec" id="ech" value="Echec !"></p>
                </div>



            </div>

        </div>

    </div>

    <script>
        $('.wrap1 .case-count').eq(3).addClass('action');
        $('.wrap2 .case-count').eq(2).addClass('action');
        $('.wrap3 .case-count').eq(4).addClass('action');
        $('.wrap4 .case-count').eq(1).addClass('action');
    </script>


    <!-- On alert de la perte des données si fermeture fenetre -->
    <script type="text/javascript">
        window.onbeforeunload = confirmExit;

        function confirmExit() {
            return 'En fermant, vous risquez de perdre la totalité de vos données. Etes-vous sûr(e) de vouloir quitter ?';
        }
    </script>

    <!-- On bloque l input ENTRER -->
    <script type="text/javascript">
        noPressEnter(document.modal);
        noPressEnter(document.myModal.modal)
    </script>

    <script src="js/modal.js"></script>

    <script src="js/questionnaire.js"></script>
    <script src="js/jeu.js"></script>
    <script src="js/lancerDe.js"></script>

</body>

</html>