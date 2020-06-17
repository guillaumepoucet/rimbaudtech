//on vas récupérer toutes les cases du jeu, ici elles ont un id de type 'case-nombre' avec nombre compris entre 1 et 14
//on vas mettre les cases dans un tableau, comme ça pour avoir la case d'id case-0 on peut faire $cases[0]
const $cases = [];
for (let i = 0; i < 14; i++) { //pour i allant de 0 à 14 (21 exclus)
    const id = "case-" + i;
    const el = document.getElementById(id);
    $cases.push(el);
    console.log(id, el)
}
//et voilà, toutes les cases sont dans $cases

//on as  3 couleurs
const colors = [
    "blue",
    "red",
    "white"
];