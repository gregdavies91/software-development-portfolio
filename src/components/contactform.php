<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['email'];
	$message = $_POST['message'];

	$mailTo = "greg@simplistic.fun";
	$headers = "From: ".$mailFrom;
	$txt = "You have received a message from ".$name.".\n\n".$message; 

	mail($mailTo, $headers, $txt);
	header("Location: contact?mailsend");
}

?>