<?php

$teamName = !empty($_POST['team-name']) ? $_POST['team-name'] : NULL;
$teamIcon = !empty($_POST['team-icon']) ? $_POST['team-icon'] : NULL;

if ($teamIcon == "horse") {
    $teamIcon = "img/horse.svg";
    $scoreIcon = "img/horse-score.svg";
} else if ($teamIcon == "hat") {
    $teamIcon = "img/hat.svg";
    $scoreIcon = "img/hat-score.svg";
}

$team1 = array(
    'team-name' => $teamName,
    'team-icon' => $teamIcon,
    'score-icon' => $scoreIcon
);

$teams = array(
    'team1' => $team1
);

var_dump($teams);

session_start();
$_SESSION['teams'] = $teams;

var_dump($_SESSION);

header('location:jeu.php');