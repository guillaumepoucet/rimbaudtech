<?php

class Save {
    private $_team;
    private $_tokenPosition;
    private $_experience;
    private $_tableauQR;
    private $_score;

    public function _construct($team, $tokenPosition, $experience, $tableauQR, $score)
    {
        $this->_team = $team;
        $this->_tokenPosition = $tokenPosition;
        $this->_experience = $experience;
        $this->_tableauQR = $tableauQR;
        $this->_score = $score;
    }

    // Getters 
    public function getTeam() {
        return $this->_team;
    }

    public function getTokenPosition() {
        return $this->_tokenPosition;
    }

    public function getExperience() {
        return $this->_experience;
    }


    public function getTableauQR() {
        return $this->_tableauQR;
    }

    public function getScore() {
        return $this->_score;
    }

    // Setters
    public function setTeam($team) {
        $this->_team = $team;
        return $this;
    }

    public function setTokenPosition($tokenPosition) {
        $this->_tokenPosition = $tokenPosition;
        return $this;
    }

    public function setExperience($experience) {
        $this->_experience = $experience;
        return $this;
    }

    public function setTableauQR($tableauQR) {
        $this->_tableauQR = $tableauQR;
        return $this;
    }

    public function setScore($score) {
        $this->_score  = $score;
        return $this;
    }

    public function saving(){
        $team = $this->_team;
        $tokenPosition = $this->_tokenPosition;
        $experience = $this->_experience;
        $tableauQR = $this->_tableauQR;
        $score = $this->_score;
        $save = [];
        echo "$team sauvegarde toute sa progression. <br>";
        return $save;
    }

}