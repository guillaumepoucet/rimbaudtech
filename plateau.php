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

    <div id="plateau">

        <!-- score -->
        <div id="score">
            <p class="cat-title">scores</p>
            <div>
                <!-- team score -->
                <div class="team team1">
                    <div class="team-purple">
                        <div class="team-name">
                            <p>#1 Perruches</p>
                        </div>
                    </div>
                    <div class="team-yellow">
                        <div class="team-score">
                            <p>300</p>
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
            <div class="cases-wrap">

                <?php

                for ($i = 1; $i <= 14; $i++) {
                    echo "<div class=\"cases-yellow case$i\">
                        <div class=\"case $i\">
                            
                        </div>
                    </div>";
                }
                ?>

            </div>
            <div class="cases-wrap wrap2">

                <?php

                for ($i = 1; $i <= 14; $i++) {
                    echo "<div class=\"cases-yellow case$i\">
                        <div class=\"case $i\">
                            
                        </div>
                    </div>";
                }
                ?>

            </div>
            <div class="cases-wrap wrap3">

                <?php

                for ($i = 1; $i <= 14; $i++) {
                    echo "<div class=\"cases-yellow case$i\">
                        <div class=\"case $i\">
                            
                        </div>
                    </div>";
                }
                ?>

            </div>
            <div class="cases-wrap wrap4">

                <?php

                for ($i = 1; $i <= 14; $i++) {
                    echo "<div class=\"cases-yellow case$i\">
                        <div class=\"case $i\">
                            
                        </div>
                    </div>";
                }
                ?>

            </div>
            <!-- /cases -->
        </div>
        <!-- /right side -->

    </div>

    <script>
        $('.case').eq(3).addClass('defi');
    </script>

</body>

</html>