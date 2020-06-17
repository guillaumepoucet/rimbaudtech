<?php

class Team {

    // declaration des variables
    private $_pseudo;
    private $_token;
    private $_tampon;
    public $_icon;
    public $_scoreIcon;

    //
    public function __construct($pseudo) 
    {
        $this->_pseudo = $pseudo;

    }

    public function getPseudo() {
        return $this->_pseudo;
    }

    public function getToken() {
        return $this->_token;
    }

    public function getTampon() {
        return $this->_tampon;
    }

    public function getIcon() {
        return $this->_icon;
    }

    public function getScoreIcon() {
        return $this->_scoreIcon;
    }

    public function setIcon($icon) {
        $this->_icon = $icon;
        return $this;
    }

    public function setScoreIcon($scoreIcon) {
        $this->_scoreIcon = $scoreIcon;
        return $this;
    }

    public function rollDice() {
        $pseudo = $this->_pseudo;
        $dice = rand(1, 6);
        echo "$pseudo avance de $dice cases.<br>";
        return $dice;
    } 
};




?>