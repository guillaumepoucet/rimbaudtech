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
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
</head>

<body class="launcher">


    <div class="launcher-wrapper">

        <div class="wrapper">

            <div class="launcher-menu">
                <div class="btn-wrap">
                    <div class="btn-btn btn-start">
                        <p>Commencer</p>
                    </div>
                </div>
                <div class="btn-wrap">
                    <div class="btn-btn">
                        <p>Règles du jeu</p>
                    </div>
                </div>
                <div class="btn-wrap">
                    <div class="btn-btn">
                        <p>Crédits</p>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <div id="start-launcher" class="modal">

        <div class="yellow add-teams">

            <div class="modal-content">

                <p>Choisissez le nombre d'équipes : </p>
                <div class="custom-radio">
                    <form action="traitement/traitement-newgame.php" method="POST">
                        <div class="f-j-center">
                            <div class="team-nb">
                                <input type="radio" name="teams-nb" value="1" id="1">
                                <label for="1">1</label>
                            </div>
                            <div class="team-nb">
                                <input type="radio" name="teams-nb" value="2" id="2">
                                <label for="2">2</label>
                            </div>
                            <div class="team-nb">
                                <input type="radio" name="teams-nb" value="3" id="3">
                                <label for="3">3</label>
                            </div>
                            <div class="team-nb">
                                <input type="radio" name="teams-nb" value="4" id="4">
                                <label for="4">4</label>
                            </div>
                        </div>
                        <div class="btn-wrap-yellow">
                            <button type="submit">Valider</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script>
        $('.btn-start').parent().click(function() {
            $('#start-launcher').css('display', "block")
        })
    </script>

</body>

</html>