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
    <script src="js/jquery-ui.js"></script>
</head>

<body>

    <span class="nb-teams" style="display: none;"><?= $_SESSION['teams-nb'] ?></span>

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
                            <p class="score score<?= $n ?>">0</p>
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

            <div class="cases-wrap wrap<?= $n ?> team<?= $n ?>">


                <img src="<?= $_SESSION['team-' . $n . '-icon'] ?>" alt="" class="team<?= $n ?>-icon icon">

                <div class="relative">
                    <p class="start">start</p>
                    <div class="cases-yellow">
                        <div class="case">
                        </div>
                    </div>
                </div>

                <?php for ($i = 1; $i <= 31; $i++) : ?>
                    <div class="relative bis">
                        <span class="span">#<?= $i ?></span>
                        <img class="svgBubble" src="img/bubble.svg" alt="">

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

        <div class="button">
            <button id="myBtn">Afficher une question</button>
            <button id="myBtnVideo">Afficher la vidéo</button>
            <button id="myBtnAudio">Afficher l'audio</button>
            <button id="myBtnDefis">Afficher un defis</button>
        </div>


    </div>

    <div id="myModalMedia" class="modal"></div>

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

                    <div id="time" style="display: none;">
                        <p>04:00</p>
                    </div>
                </div>


                <!-- Capture de media video/son -->
                <main>

                </main>

                <div id="rep" class="btnrep">
                    <div>
                        <span class="rep-txt">Répondre !</span>
                    </div>
                </div>


                <div class="validation">
                    <input class="btnval" type="button" name="valider" id="val" value="Valider !"></p>
                    <input class="btnechec" type="button" name="echec" id="ech" value="Echec !"></p>
                </div>



            </div>

        </div>

    </div>

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

    <!-- le nombre d'équipes est appelées et le nombre d'instances Team sont crées en conséquence -->
    <script src="js/Team.js"></script>
    <script src="js/init.js"></script>

    <script src="js/questionnaire.js"></script>
    <script src="js/defis.js"></script>
    <script src="js/jeu.js"></script>
    <script src="js/lancerDe.js"></script>
    <script src="js/modal.js"></script>

    <script>
        $('#myBtnVideo').click(function() {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "js/mediaCapture.js";
            document.getElementsByTagName("head")[0].appendChild(script);

            $('#myModalMedia').load("video.php");

            $('#myModalMedia').show();
        })
    </script>
    <script>
        $('#myBtnAudio').click(function() {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "js/audioCapture.js";
            document.getElementsByTagName("head")[0].appendChild(script);

            $('#myModalMedia').load("audio.php");

            $('#myModalMedia').show();
        })
    </script>

</body>

</html>