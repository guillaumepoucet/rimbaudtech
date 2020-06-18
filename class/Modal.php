<?php

class Modal
{

    public $_question;
    // construction d'une modal de base générique qui s'adaptera selon le type quiz ou defi,
    // et affichera la question avec l'id correspondant
    public function __construct($id, $question)
    {

    }

    public function getQuestion($id) {
        $this->_question = $question;
        return $this;
    }

    public function generer($id, $question) {
        $question = $this->question;
    }

}
