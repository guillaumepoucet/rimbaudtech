
class Game {
    constructor(nbPlayers, token) { //pour créer une nouvelle partie il faut x joueurs qui ont x pions
        this._players = []; //ça vas être les joueurs
        for (let i = 0; i < nbPlayers; i++) {
            //un nouveau joueur
            const player = new Player(colors[i], token);
            console.log("joueur", i, ":", player);
            this._players.push(player);
        }
        console.log("nouveau jeu", this)

    }

    //le pion gère la partie "output graphique", c'est lui qui vas bouger tout seul en fonction
    // de sa position et du lancer de dé.

    play() {
        //une méthode qui fait jouer le pion 0 du joueur 0
        this._players[0].movePawn(0);
    };
}