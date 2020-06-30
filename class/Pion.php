<?php

class Pion {

    // Declaration des variables
    private $_token;
    private $_color;
    private $_position;

    //

    public function _construct($token, $color, $position){
        $this->_token = $token;
        $this->_color = $color;
        $this->_position = $position;
    }

    // Getters

    public function getToken() {
        return $this->_token;
    }

    public function getColor() {
        return $this->_color;
    }

    public function getPosition() {
        return $this->_position;
    }

    // Setters

    public function setToken($token) {
        $this->_token = $token;
        return $this;
    }

    public function setColor($color) {
        $this->_color = $color;
        return $this;
    }

    public function setPosition($position) {
        $this->_position = $position;
        return $this;
    }

    //ici c'est pour gérer graphiquement le déplacement du pion

    // On enleve le pion
    public function remove($pion) {
        
    }
}