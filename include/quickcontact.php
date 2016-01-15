<?php
/*
require_once('phpmailer/class.phpmailer.php');

$mail = new PHPMailer();

if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
	if( $_POST['quick-contact-form-name'] != '' AND $_POST['quick-contact-form-email'] != '' AND $_POST['quick-contact-form-message'] != '' ) {

		$name = $_POST['quick-contact-form-name'];
		$email = $_POST['quick-contact-form-email'];
		$message = $_POST['quick-contact-form-message'];

		$subject = 'New Message From Quick Contact Form';

		$botcheck = $_POST['quick-contact-form-botcheck'];

		$toemail = 'didi@dieselsellerz.com'; // Your Email Address
		$toname = 'DieselSellerz'; // Your Name

		if( $botcheck == '' ) {

			$mail->SetFrom( $email , $name );
			$mail->AddReplyTo( $toemail , $toname );
			$mail->AddAddress( $toemail , $toname );
			$mail->Subject = $subject;

			$name = isset($name) ? "Name: $name<br><br>" : '';
			$email = isset($email) ? "Email: $email<br><br>" : '';
			$message = isset($message) ? "Message: $message<br><br>" : '';

			$referrer = $_SERVER['HTTP_REFERER'] ? '<br><br><br>This Form was submitted from: ' . $_SERVER['HTTP_REFERER'] : '';

			$body = "$name $email $message $referrer";

			$mail->MsgHTML( $body );
			$sendEmail = $mail->Send();

			if( $sendEmail == true ):
				echo 'We have <strong>successfully</strong> received your Message and will get Back to you as soon as possible.';
			else:
				echo 'Email <strong>could not</strong> be sent due to some Unexpected Error. Please Try Again later.<br /><br /><strong>Reason:</strong><br />' . $mail->ErrorInfo . '';
			endif;
		} else {
			echo 'Bot <strong>Detected</strong>.! Clean yourself Botster.!';
		}
	} else {
		echo 'Please <strong>Fill up</strong> all the Fields and Try Again.';
	}
} else {
	echo 'An <strong>unexpected error</strong> occured. Please Try Again later.';
}
*/

require '../../../vendor/autoload.php';
use Mailgun\Mailgun;

if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
	if( $_POST['quick-contact-form-name'] != '' AND $_POST['quick-contact-form-email'] != '' AND $_POST['quick-contact-form-message'] != '' ) {
		
		$name = $_POST['quick-contact-form-name'];
		$email = $_POST['quick-contact-form-email'];
		$message = $_POST['quick-contact-form-message'];

		$subject = 'New Message From Quick Contact Form';

		$botcheck = $_POST['quick-contact-form-botcheck'];

		$toemail = 'didi@dieselsellerz.com'; // Your Email Address
		$toname = 'DieselSellerz'; // Your Name
		
		if( $botcheck == '' ) {
			# Instantiate the client.
			$mgClient = new Mailgun('key-7535df441c6842cd64ae2ed91782a8cf');
			$domain = "sellerz.com";
			
			# Make the call to the client.
			$result = $mgClient->sendMessage($domain, array(
				'from'    => $name.' <'.$email.'>',
				'to'      => $toemail,
				'subject' => $subject,
				'html'    => $email
			));
			
			if ($result) {
			    echo 'We have <strong>successfully</strong> received your Message and will get Back to you as soon as possible.';
			} else {
			    echo 'Email <strong>could not</strong> be sent due to some Unexpected Error. Please Try Again later.<br /><br /><strong>Reason:</strong><br />' . $mail->ErrorInfo . '';
			}
		} else {
			echo 'Bot <strong>Detected</strong>.! Clean yourself Botster.!';
		}
	} else {
		echo 'Please <strong>Fill up</strong> all the Fields and Try Again.';
	}
} else {
	echo 'An <strong>unexpected error</strong> occured. Please Try Again later.';
}

?>