<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['email'];
	$message = $_POST[''];

	$mailTo = "gregdaviesmusic@gmail.com";
	$headers = "From: ".$sender;
	$txt = "You have received a message from ".$name".\n\n".$message; 

	sendMail($mailTo, $headers, $txt);
	header("Location: ContactForm.vue?mailsend");
}

?>