<?php

class Question {

    private $_id;
    private $_question;

    public function getQuestion($id)
    {
        echo "<div><p class=\"question\">Question n°$id</p><p>Parmi ces choix, qu'est ce pour vous que l'innovation ?</p></div>";
    }

}