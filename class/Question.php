<?php

require_once "Modal.php";

class Question extends Modal {

    private $_id;
    private $_question;

    public function getQuestion($id)
    {
        $question = "<p class=\"question\">Question n°$id</p>
        <p>Parmi ces choix, qu'est ce pour vous que l'innovation ?</p>
        </div>";
        $this->_question = $question;
        return $this;
    }
}