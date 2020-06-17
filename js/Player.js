
class Player {
    constructor(color, token) {
        this._color = color;
        this._token = []; //ça vas être les pions du joueur
        this._$el = document.createElement("div")
        this._$el.classList.add("joueur", color);

        console.log("nouveau joueur :", this)
    }

    // Getters 
    get color() {
        return this._color;
    }

    get token() {
        return this._token;
    }

    // Setters



    //Un joueur ne peut faire qu'une seule chose  pour deplacer son pion:
    // lancer les dés, donc on fais une méthode qui prends en paramètre le pion
    moveToken(indexToken) {
    //on vas chercher le pion à bouger
    const token = this._token[indexToken];

    //on lance un D6 (on génère un nombre aléatoire entre 1 et 6)
    const roll = Math.floor(Math.random() * 6 + 1)

    // on fais bouger le pion en fonction du jet de dé
        token.position = token.position + roll
    }
}
