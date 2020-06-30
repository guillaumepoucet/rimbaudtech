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

<body class="plateau-wrapper">

    <?php

    require_once "class/Team.php";
    $team1 = new Team($_SESSION['teams']['team1']['team-name']);
    $team1->setIcon($_SESSION['teams']['team1']['team-icon']);
    $team1->setScoreIcon($_SESSION['teams']['team1']['score-icon']);
    ?>

    <div id="plateau">

        <!-- score -->
        <div id="score">
            <p class="cat-title">scores</p>
            <div>
                <!-- team score -->
                <div class="team team1">
                    <div class="team-purple">
                        <div class="team-name">
                            <p><?= $team1->getPseudo() ?></p>
                        </div>
                    </div>
                    <div class="team-yellow">
                        <div class="team-score">
                            <p class="score"><?= $team1->getScore() ?></p>
                        </div>
                    </div>
                </div>
                <!-- /team score -->
                <!-- team score -->
                <div class="team team1">
                    <div class="team-purple">
                        <div class="team-name">
                            <p>#2 Equipe</p>
                        </div>
                    </div>
                    <div class="team-yellow">
                        <div class="team-score">
                            <p>1500</p>
                        </div>
                    </div>
                </div>
                <!-- /team score -->
                <!-- team score -->
                <div class="team team1">
                    <div class="team-purple">
                        <div class="team-name">
                            <p>#2 Equipe</p>
                        </div>
                    </div>
                    <div class="team-yellow">
                        <div class="team-score">
                            <p>1500</p>
                        </div>
                    </div>
                </div>
                <!-- /team score -->
                <!-- team score -->
                <div class="team team1">
                    <div class="team-purple">
                        <div class="team-name">
                            <p>#2 Equipe</p>
                        </div>
                    </div>
                    <div class="team-yellow">
                        <div class="team-score">
                            <p>1500</p>
                        </div>
                    </div>
                </div>
                <!-- /team score -->
                <!-- lancer de de -->
                <div class="de-wrap-shadow">
                    <div class="de-wrap">
                        <div class="de">
                            <img src="img/de.svg" alt="">
                            <p>lancer le dé</p>
                        </div>
                    </div>
                </div>
                <!-- /lancer de de -->

            </div>
        </div>
        <!-- /score -->

        <!-- right side -->
        <div class="right-side">
            <!-- team -->

            <p class="cat-title teams">teams</p>

            <div class="splash-team">
                <!-- <img src="img/splash-team.svg" alt=""> -->
                <p>#1</p>
            </div>
            <div class="splash-team">
                <!-- <img src="img/splash-team.svg" alt=""> -->
                <p>#2</p>
            </div>
            <div class="splash-team">
                <!-- <img src="img/splash-team.svg" alt=""> -->
                <p>#3</p>
            </div>
            <div class="splash-team">
                <!-- <img src="img/splash-team.svg" alt=""> -->
                <p>#4</p>
            </div>
            <!-- /team -->

            <!-- cases -->
            <p class="cat-title parcours">parcours</p>
            <div class="cases-wrap wrap1">

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
                            <div class="case <?= $i ?>">
                            </div>
                        </div>
                    </div>
                <?php endfor ?>

            </div>
            <div class="cases-wrap wrap2">

                <?php for ($i = 1; $i <= 14; $i++) : ?>
                    <div class="relative">
                        <?php if ($i == 3) : ?>
                            <img class="svgAction" src="img/action.svg" alt="">
                            <img class="svgBoom" src="img/boom.svg" alt="">
                        <?php else : ?>
                            <span>#<?= $i ?></span>
                            <img class="svgBubble" src="img/bubble.svg" alt="">
                        <?php endif ?>
                        <div class="cases-yellow case<?= $i ?>">
                            <div class="case <?= $i ?>">
                            </div>
                        </div>
                    </div>
                <?php endfor ?>

            </div>
            <div class="cases-wrap wrap3">

                <?php for ($i = 1; $i <= 14; $i++) : ?>
                    <div class="relative">
                        <?php if ($i == 5) : ?>
                            <img class="svgAction" src="img/action.svg" alt="">
                            <img class="svgBoom" src="img/boom.svg" alt="">
                        <?php else : ?>
                            <span>#<?= $i ?></span>
                            <img class="svgBubble" src="img/bubble.svg" alt="">
                        <?php endif ?>
                        <div class="cases-yellow case<?= $i ?>">
                            <div class="case <?= $i ?>">
                            </div>
                        </div>
                    </div>
                <?php endfor ?>

            </div>
            <div class="cases-wrap wrap4">



                <?php for ($i = 1; $i <= 14; $i++) : ?>
                    <div class="relative">
                        <?php if ($i == 2) : ?>
                            <img class="svgAction" src="img/action.svg" alt="">
                            <img class="svgBoom" src="img/boom.svg" alt="">
                        <?php else : ?>
                            <span>#<?= $i ?></span>
                            <img class="svgBubble" src="img/bubble.svg" alt="">
                        <?php endif ?>
                        <div class="cases-yellow case<?= $i ?>">
                            <div class="case <?= $i ?>">
                            </div>
                        </div>
                    </div>
                <?php endfor ?>

            </div>
            <!-- /cases -->
        </div>
        <!-- /right side -->

    </div>

    <button id="myBtn">Afficher une question</button>

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
        $('.wrap1 .case').eq(3).addClass('defi');
        $('.wrap2 .case').eq(2).addClass('defi');
        $('.wrap3 .case').eq(4).addClass('defi');
        $('.wrap4 .case').eq(1).addClass('defi');
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
    <script src="js/score.js"></script>
    <script src="js/questionnaire.js"></script>
    <script src="js/jeu.js"></script>
    <script src="js/lancerDe.js"></script>

</body>

</html>