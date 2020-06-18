<?php
session_start();

$questions = array(
	"question1" => array(
		"answer1a",
		"answer1b",
		"answer1c",
		"answer1d",
		"answer1e"),
	"question2" => array(
		"answer2a",
		"answer2b",
		"answer2c",
		"answer2d",
		"answer2e"),
	"question3" => array(
		"answer3a",
		"answer3b",
		"answer3c",
		"answer3d",
		"answer3e"),
	"question4" => array(
		"answer4a",
		"answer4b",
		"answer4c",
		"answer4d",
		"answer4e"),
	"question5" => array(
		"answer5a",
		"answer5b",
		"answer5c",
		"answer5d",
		"answer5e"),
	"question6" => array(
		"answer6a",
		"answer6b",
		"answer6c",
		"answer6d",
		"answer6e")
);

var_dump($questions);
var_dump($questions[0]);
							
///////////////////////////////////////
/////Set answer session if not set/////
///////////////////////////////////////
if (!isset($_SESSION['answers'])){$_SESSION['answers'] = array();}

///////////////////////////////////////
///////////// Processing //////////////
///////////////////////////////////////
if($_SERVER['REQUEST_METHOD'] == 'POST'){
	foreach($_POST as $question => $a){
		//Only use question keys//
		if($question != "submit" && $question != "showresult"){
			$_SESSION['answers'][$question] = $a;
		}
	}
}

///Build answer display or could be used to insert to DB

if(isset($_POST['showresult'])){
	$display = "";
	foreach($_SESSION['answers'] as $question => $a){
		$display .= "$question" . ":" . "$a <br />\\r";
	}
}

?>
<html>
<body>
<?php
echo '<form action="" method="post">';
	$q_num = count($_SESSION['answers']) + 1;	
	$currentQ = "question" . $q_num;
	
	//check to see if question is available//
	if(array_key_exists($currentQ,$questions)){
	
		//check that session answers is set and question key is not in array
		if(isset($_SESSION['answers']) && !array_key_exists($currentQ,$_SESSION['answers'])){
			foreach($questions[$currentQ] as $k => $qtext){
				echo "<input type=\"radio\" name=\"$currentQ\" value=\"$k\" />$qtext<br />\r";
			}
		}
		echo '<input type="submit" name="submit" value="Submit" />';
	}else{
		echo '<input type="submit" name="showresult" value="Show Result" />';	
	}
echo '</form>';

if(isset($display)){ echo $display;}
?>
</body>
</html>	