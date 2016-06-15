<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = "Form:" . $email . "\r\n";
$header .= "X-Mailer: PHP /" .phpversion() . "\r\n";
$header .= "Mime Version: 1.0 \r\n";
$header .= "Content Type : text/plain";


$comment = "This message has been sent by " .$name . "\r\n";
$comment .= "E-mail it's:". $email . "\r\n";
$comment .= "He s message is:". $message . "\r\n";

$for = "destiawanyk@gmail.com";
$subject = "Contact from website";

mail($subject, utf8_decode($comment), $header);

echo json_encode(array(
	'Message' => sprintf("Your message has been sent %s", $name)
	));
?>