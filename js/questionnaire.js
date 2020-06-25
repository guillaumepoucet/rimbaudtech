var current_index = 0;

var questionnaire = new Array();
 
 //QUESTION 1
questionnaire[0] = new Array();
questionnaire[0][0] = "Selon vous, pourquoi un logo est-il important ?<br><span>*2 réponses sont bonnes</span>";
questionnaire[0][1] = new Array("Il n'est pas très important,", "Il représente votre idendité visuelle et permet de vous démarquer,", "Favorise le public à mémoriser plus facilement de vous et votre innovation");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[0][2] = "2";
//QUESTION 2
questionnaire[1] = new Array();
questionnaire[1][0] = "Parmi ces choix, qu'est ce pour vous que l'innovation ?<br><span>*2 réponses sont bonnes</span>";
questionnaire[1][1] = new Array("Elle introduit un nouveau concept ou produit", "Elle améliore un concept ou un produit", "");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[1][2] = "2";
//QUESTION 3
questionnaire[2] = new Array();
questionnaire[2][0] = "D'après vous, dans quels domaines peut-on innover ?";
questionnaire[2][1] = new Array("Uniquement dans les domaines de la science,", "Uniquement dans les domaines de la technologie,", "Dans tous les domaines");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[2][2] = "2";
//QUESTION 4
questionnaire[3] = new Array();
questionnaire[3][0] = "Pourriez-vous donner un exemple d'innovation ?";
//QUESTION 5
questionnaire[4] = new Array();
questionnaire[4][0] = "Parmi ces choix, sur lesquels un incubateur d'entreprise vous donne un petit coup de pouce ?";
questionnaire[4][1] = new Array("Sur la communication de votre innovation", "Elle leur fournit des locaux pour travailler et recevoir", "Elle leur fournit un repas tous les midis le temps de l'incubation");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[4][2] = "2";
//QUESTION 6
questionnaire[5] = new Array();
questionnaire[5][0] = "Par quels moyens efficaces selon-vous peut-on communiquer et atteindre le public ?";
questionnaire[5][1] = new Array("Par les réseaux sociaux (facebook, twitter, ...),", "En faisant du porte à porte,");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[5][2] = "2";
//QUESTION 7
questionnaire[6] = new Array();
questionnaire[6][0] = "Donner 2 financeurs potentiels ?";
//QUESTION 8
questionnaire[7] = new Array();
questionnaire[7][0] = "Combien d'incubateurs existent-ils en France ?";
questionnaire[7][1] = new Array("6", "20", "Plus de 200");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[7][2] = "2";
//QUESTION 9
questionnaire[8] = new Array();
questionnaire[8][0] = "Qu'est-ce pour vous qu'un business model ?";
//QUESTION 10
questionnaire[9] = new Array();
questionnaire[9][0] = "Quelles sont les quatres ressources clés dont vous et votre innnovation aurez besoin ?";
questionnaire[9][1] = new Array("Ressources : physiques, intellectuelles, humaines et financières", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[9][2] = "2";
//QUESTION 11
questionnaire[10] = new Array();
questionnaire[10][0] = "Donnez un exemple d'une ressource clé physique...";
//QUESTION 12
questionnaire[11] = new Array();
questionnaire[11][0] = "Donnez un exemple d'une ressource clé intellectuelle...";
//QUESTION 13
questionnaire[12] = new Array();
questionnaire[12][0] = "Donnez un exemple d'une ressource clé humaine...";
//QUESTION 14
questionnaire[13] = new Array();
questionnaire[13][0] = "Donnez un exemple d'une ressource clé financière...";
//QUESTION 15
questionnaire[13] = new Array();
questionnaire[13][0] = "Qui peut intégrer un incubateur ?";
questionnaire[13][1] = new Array("N'importe qui, s'il est au préalable passé par une épinière,", "N'importe qui ayant une innovation,", "N'importe qui");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[13][2] = "2";