<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Grade Store</title>
		<link href="https://selab.hanyang.ac.kr/courses/cse326/2019/labs/labResources/gradestore.css" type="text/css" rel="stylesheet" />
	</head>

	<body>
		
		<?php
		$name= $_POST["name"];
		$id = $_POST["ID"];
		$grade = $_POST["grade"];
		$cardnum = $_POST["cardnum"];
		$cc = $_POST["cc"];
		$names = $_POST["course"];
		$pattern = array('/-/', '/[a-z]/', '/[A-Z]/','/ /'); 
		
		# Ex 4 : 
		# Check the existence of each parameter using the PHP function 'isset'.
		# Check the blankness of an element in $_POST by comparing it to the empty string.
		# (can also use the element itself as a Boolean test!)
		if ($name== '' || $id=='' || $grade ==''|| $cardnum ==''|| $cc ==''|| $names ==''){

		?>
			<h1>Sorry</h1>
			<p>You didn't fill out the form completely. <a href="http://localhost:8888/lab6/gradestore.html">Try again?</a></p>

		<?php
		# Ex 5 : 
		# Check if the name is composed of alphabets, dash(-), ora single white space.
		 } elseif (preg_match("/[^a-z-_]/i", $name)) {
		?>


			<h1>Sorry</h1>
			<p>You didn't provide a valid name. <a href="http://localhost:8888/lab6/gradestore.html">Try again?</a></p>


		<?php
		# Ex 5 : 
		# Check if the credit card number is composed of exactly 16 digits.
		# Check if the Visa card starts with 4 and MasterCard starts with 5. 
		 } elseif (
			 ((!preg_match("/(5\d{15})/", $cardnum)) || ($cc != "MasterCard"))
			&&
			 ((!preg_match("/(4\d{15})/", $cardnum)) || ($cc != "Visa"))
		 ) {
		?>



			<h1>Sorry</h1>
			<p>You didn't provide a valid credit card number. <a href="http://localhost:8888/lab6/gradestore.html">Try again?</a></p>

		<?php
		 }
		  else {
			$course = processCheckbox($names);

		?>

		<h1>Thanks, looser!</h1>
		<p>Your information has been recorded.</p>
		
		<ul> 
			<li>Name: <?= $name?></li>
			<li>ID: <?= $id?></li>
			<li>Course: <?= $course?></li>
			<li>Grade: <?= $grade?></li>
			<li>Credit <?= $cardnum?> (<?= $cc?>)</li>
		</ul>
		

			<p>Here are all the loosers who have submitted here:</p>
		<?php
			$filename = "loosers.txt";
			file_put_contents("loosers.txt", $name.';'.$id.';'.$cardnum.';'.$cc."\n", FILE_APPEND);
		?>

		



		<pre>
		<?=
			file_get_contents("loosers.txt");
		?>
		</pre>
		<?php
		 }
			function processCheckbox($names){ 
				$courses = "";
				for ($i=0; $i < count($names) ; $i++) { 
					$courses .= $names[$i];
					if (!($i == count($names)-1)) {
						$courses .= " , ";
					}
				}

				return $courses;
			}
		?>
		
	</body>
</html>
