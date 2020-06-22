var current_index = 0;

var questionnaire = new Array();
 
 //QUESTION 1
questionnaire[0] = new Array();
questionnaire[0][0] = "Selon vous, pourquoi un logo est-il important ?";
questionnaire[0][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[0][2] = 2;
//QUESTION 2
questionnaire[1] = new Array();
questionnaire[1][0] = "Parmi ces choix, qu'est ce pour vous que l'innovation ?";
questionnaire[1][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[1][2] = 2;
//QUESTION 3
questionnaire[2] = new Array();
questionnaire[2][0] = "D'après vous, dans quels domaines peut-on innover ?";
questionnaire[2][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[2][2] = 2;
//QUESTION 4
questionnaire[3] = new Array();
questionnaire[3][0] = "Pourriez-vous donner un exemple d'innovation ?";
questionnaire[3][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[3][2] = 2;
//QUESTION 5
questionnaire[4] = new Array();
questionnaire[4][0] = "Parmi ces choix, lesquels un incubateur d'entreprise vous donne un petit coup de pousse ?";
questionnaire[4][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[4][2] = 2;
//QUESTION 6
questionnaire[5] = new Array();
questionnaire[5][0] = "Par quels moyens selon-vous peut-on communiquer et atteindre le public ?";
questionnaire[5][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[5][2] = 2;
//QUESTION 7
questionnaire[6] = new Array();
questionnaire[6][0] = "Donner 2 financeurs potentiels ?";
questionnaire[6][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[6][2] = 2;
//QUESTION 8
questionnaire[7] = new Array();
questionnaire[7][0] = "Combien d'incubateurs existent-ils en France ?";
questionnaire[7][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[7][2] = 2;
//QUESTION 9
questionnaire[8] = new Array();
questionnaire[8][0] = "Qu'est-ce pour vous qu'un business model ?";
questionnaire[8][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[8][2] = 2;
//QUESTION 10
questionnaire[9] = new Array();
questionnaire[9][0] = "Quelles sont les quatres ressources clés dont vous et votre innnovation aurez besoin ?";
questionnaire[9][1] = new Array("Ressources : physiques, intellectuelles, humaines et financières", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[9][2] = 2;
//QUESTION 11
questionnaire[10] = new Array();
questionnaire[10][0] = "Donnez un exemple d'une ressource clé physique :";
questionnaire[10][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[10][2] = 2;
//QUESTION 12
questionnaire[11] = new Array();
questionnaire[11][0] = "Donnez un exemple d'une ressource clé intellectuelle :";
questionnaire[11][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[11][2] = 2;
//QUESTION 13
questionnaire[12] = new Array();
questionnaire[12][0] = "Donnez un exemple d'une ressource clé humaine :";
questionnaire[12][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[12][2] = 2;
//QUESTION 14
questionnaire[13] = new Array();
questionnaire[13][0] = "Donnez un exemple d'une ressource clé financière :";
questionnaire[13][1] = new Array("Reponse 1", "Reponse 2", "Reponse 3", "Reponse 4");
//on va conserver la bonne réponse, ou alors l'index de la bonne réponse.
questionnaire[13][2] = 2;