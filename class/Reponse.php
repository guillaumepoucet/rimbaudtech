<?php

class Reponse {
    private $_id;
    private $_reponse;
    private $_point;

    public function _construct($id) {
        $this->_id = $id;
        $this->_reponse = $reponse;
        $this->_point = $point;
    }

    public function getReponse($id) {
        echo "<div><p class=\"reponse\">Reponse n°$id</p><p>Test reponse</p></div>";
    }

    public function getPoint($id) {
        return $this->_point;
    }

    public function setReponse($id) {
        $this->_reponse = $reponse;
        return $this;
    }

    public function setPoint($id) {
        $this->_point = $point;
        return $this;
    }
}