
class Token {

    // Constructeur
    constructor(color) {
        this._color = color;
        this._position = -1;
        this._$el = document.createElement("div")
        this._$el.classList.add("pion", color);

        console.log("nouveau pion :", this);
    }

    // Getters 
    get position() { //pas de paramètres pour cette méthode.
        return this._position;
    }

    // Setters
    set position(pos) { //ça prends en paramètre la prochaine position du pion
        console.log("prev pos", this._position)
        console.log("roll", pos)
        //quand le pion change de position, on l'enlève du DOM
        this.remove();
        //on change son attribut
        this._position = pos;
        //on remet le pion dans le DOM.
        this.render();
    }

    //ici c'est pour gérer graphiquement le déplacement du pion
    //méthode pour enlever le pion du DOM
    remove() { 
        this._$el.remove();
    }

    //méthode pour mettre le pion dans le DOM
    render() { 
        //on déclare une variable dest (destination) parce qu’on vas avoir des cas particuliers
        // en fonction de la position du pion, mais une fois qu'on a la destination le reste
        // du code est commun.
        let dest;

        //ici on ne gère qu'un cas particulier, celui où le pion n'est pas sur le plateau
        //si le pion n'est pas actif/boite
        if (this._position === -1) { 
            dest = document.getElementById("box-" + this.color)
        } else { 
            //c'est le cas où le pion est dans l'une des 14 cases du jeu
            dest = $cases[this._position]
        }

        //on ajoute le pion dans la case de destination
        dest.appendChild(this._$el)
        console.log(dest)
    }
}