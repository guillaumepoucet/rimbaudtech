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

    <div class="create-a-team">

        <div class="newteam-relative">
            <div class="newteam-nb-wrap">
                <div class="newteam-nb">#1</div>
            </div>
            <div class="new-team-wrap">
                <div class="new-team">
                    <div class="newteam-form">
                        <form action="traitement.php" method="POST">
                            <div class="team-name-form">
                                <label for="team-name">Votre nom d'équipe : </label>
                                <input type="text" name="team-name" id="team-name" placeholder="The Team">
                            </div>
                            <div class="team-icon-form">
                                <p>Choisissez un pion : </p>
                                <div>
                                    <div class="team-icon horse-icon">
                                        <input type="radio" for="horse-icon" name="team-icon" value="horse" id="">
                                        <label for="horse-icon"><img src="img/horse.svg" alt=""></label>
                                    </div>
                                    <div class="team-icon hat-icon">
                                        <input type="radio" for="hat-icon" name="team-icon" value="hat" id="">
                                        <label for="hat-icon"><img src="img/hat.svg" alt=""></label>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-wrap">
                                <button type="submit">Valider</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        <div class="new-team"></div>
        <div class="new-team"></div>
        <div class="new-team"></div>

    </div>


</body>

</html>