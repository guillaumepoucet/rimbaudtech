<?php

class Reponse {
    private $_id;
    private $_reponse;

    public function _construct($id) {
        $this->_id = $id;
        $this->_reponse = $reponse;
    }

    public function getReponse($id) {
        echo "<div><p class=\"reponse\">Reponse n°$id</p><p>Test reponse</p></div>";
    }

    public function setReponse($id) {
        $this->_reponse = $reponse;
        return $this;
    }
}
        