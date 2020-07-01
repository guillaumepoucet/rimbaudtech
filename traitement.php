<?php

var_dump($_POST);

// team 1
$teamName1 = !empty($_POST['team-1-name']) ? $_POST['team-1-name'] : NULL;
$teamIcon1 = !empty($_POST['team-1-icon']) ? $_POST['team-1-icon'] : NULL;
// team 2
$teamName2 = !empty($_POST['team-2-name']) ? $_POST['team-2-name'] : NULL;
$teamIcon2 = !empty($_POST['team-2-icon']) ? $_POST['team-2-icon'] : NULL;
// team 3
$teamName3 = !empty($_POST['team-3-name']) ? $_POST['team-3-name'] : NULL;
$teamIcon3 = !empty($_POST['team-3-icon']) ? $_POST['team-3-icon'] : NULL;
// team 4
$teamName4 = !empty($_POST['team-4-name']) ? $_POST['team-4-name'] : NULL;
$teamIcon4 = !empty($_POST['team-4-icon']) ? $_POST['team-4-icon'] : NULL;

// $teams = array(
//     'team1' => $team1
// );

session_start();
$_SESSION['team-1-name'] = $teamName1;
$_SESSION['team-1-icon'] = $teamIcon1;
$_SESSION['team-2-name'] = $teamName2;
$_SESSION['team-2-icon'] = $teamIcon2;
$_SESSION['team-3-name'] = $teamName3;
$_SESSION['team-3-icon'] = $teamIcon3;
$_SESSION['team-4-name'] = $teamName4;
$_SESSION['team-4-icon'] = $teamIcon4;

var_dump($_SESSION);

header('location:plateau.php');