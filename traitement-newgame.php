<?php

var_dump($_POST);

$teams = !empty($_POST['teams-nb']) ? $_POST['teams-nb'] : NULL;

session_start();
$_SESSION['teams-nb'] = $teams;

header('location:newgame.php');