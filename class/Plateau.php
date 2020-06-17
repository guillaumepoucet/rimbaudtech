<?php

class Plateau
{

    public function __construct()
    {
        $i = null;
        echo "<?php
            for ($i = 1; $i <= 14; $i++) {
                echo \"<div class=\"case case$i\">
                        <div class=\"head $i\">$i</div>
                        <div class=\"body $i\">\";
        if ($i == 3) {
            echo \"Défi\";
        } else if ($i == 9) {
            echo \"Quiz\";
        };
        echo \"</div>
                    </div>\";
        }
        ?>";
    }
}
