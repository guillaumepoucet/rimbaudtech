<?php

class Question {

    private $_id;
    private $_question;

    public function _construct($id) {
        $this->_id = $id;
        $this->_question = $question;
    }

    public function getQuestion($id)
    {
        echo "<div><p class=\"question\">Question n°$id</p><p>Parmi ces choix, qu'est ce pour vous que l'innovation ?</p></div>";
    }

    public function setQuestion($id) {
        $this->_question = $question;
        return $this;
    }

}