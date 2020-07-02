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

    <style>
        .create-a-team {
            grid-template-columns: repeat(<?= $_SESSION['teams-nb'] ?>, minmax(200px, 1fr));
        }
    </style>
</head>

<body class="plateau-wrapper">

    <div class="create-a-team">

        <form class="create-a-team" action="traitement.php" method="POST">
            <?php for ($n = 1; $n <= $_SESSION['teams-nb']; $n++) : ?>

                <div class="newteam-relative">
                    <div class="newteam-nb-wrap">
                        <div class="newteam-nb">#<?= $n ?></div>
                    </div>
                    <div class="new-team-wrap">
                        <div class="new-team">
                            <div class="newteam-form">
                                <div class="team-name-form">
                                    <label for="team-name">Votre nom d'équipe : </label>
                                    <input type="text" name="team-<?= $n ?>-name" id="team-name" placeholder="The Team" required>
                                </div>
                                <div class="team-icon-form">
                                    <p>Choisissez un pion : </p>
                                    <div>
                                        <div class="team-icon horse-icon">
                                            <input type="radio" for="horse-icon" name="team-<?= $n ?>-icon" value="img/horse.svg" id="">
                                            <label for="horse-icon"><img src="img/horse.svg" alt=""></label>
                                        </div>
                                        <div class="team-icon hat-icon">
                                            <input type="radio" for="hat-icon" name="team-<?= $n ?>-icon" value="img/hat.svg" id="">
                                            <label for="hat-icon"><img src="img/hat.svg" alt=""></label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            <?php endfor ?>
            <div class="btn-wrap pointer fixed-center">
                <button type="submit">Valider</button>
            </div>
        </form>

    </div>


</body>

</html>