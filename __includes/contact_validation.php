<?php

  $send_to= "tpotcova@gmail.com";
  
  $name_class    = "";
  $email_class   = "";
  $fax_class     = "";
  $message_class = "";

  $name_value    = "";
  $email_value   = "";
  $fax_value     = "";
  $message_value = "";


//If the form is submitted
if(isset($_POST['form_posted'])) {

	//Check to make sure that the name field is not empty
	$name_value = trim($_POST['name']);
	if($name_value == '') {
		$hasError = true;
		$name_class = "with_error";
	} else {
		$name = trim($_POST['name']);
	}

	//Check to make sure that the subject field is not empty
	$fax_value = trim($_POST['fax']);
	if($fax_value == '') {
		$hasError = true;
		$fax_class = "with_error";
	} else {
		$fax = trim($_POST['fax']);
	}

	//Check to make sure sure that a valid email address is submitted
	$email_value = trim($_POST['email']);
	if($email_value == '')  {
		$hasError = true;
		$email_class = "with_error";
	} else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
		$hasError = true;
		$email_class = "with_error";
	} else {
		$email = trim($_POST['email']);
	}

	//Check to make sure comments were entered
	$message_value = trim($_POST['message']);
	if($message_value == '') {
		$hasError = true;
	  $message_class = "with_error";
	} else {
		if(function_exists('stripslashes')) {
			$comments = stripslashes(trim($_POST['message']));
		} else {
			$comments = trim($_POST['message']);
		}
	}

	//If there is no error, send the email
	if(!isset($hasError)) {
		$emailTo = $send_to;
		$body = "Name: $name \n\nEmail: $email \n\nFax: $fax \n\nComments:\n $comments";
		$headers = 'From: My Site <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

		mail($emailTo, $subject, $body, $headers);
		$emailSent = true;
	}
}
?>
