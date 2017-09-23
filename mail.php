<?php 

	$email=$_POST['email'];
	$to = "subscribe@paymon.ru";
	$subject = "zyavka s saita ICO";
	$message = "Email: ".htmlspecialchars($email)" ";
	$headers = "From: paymon.org <m.d.pakhomov@paymon.ru.>\r\nContent_type: text/html; charset=UTF-8 \r\n";
	mail($to, $subject, $message, $headers); 
	exit(); 

 ?>