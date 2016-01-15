<?php

require_once 'campaign-monitor/csrest_subscribers.php';

$email = $_POST['widget-subscribe-form-email'];

if( isset( $email ) AND $email != '' ) {

	$auth = array('api_key' => '1c74c85bcd37bf32edab1b906048dfaa');

	$wrap = new CS_REST_Subscribers('dee4bc2357b9952bea8d26367871751b', $auth);

	$result = $wrap->add(array(
		'EmailAddress' => $email,
		'Resubscribe' => true
	));

	if($result->was_successful()) {
		echo 'You have been <strong>successfully</strong> subscribed to our Email List.';
	} else {
		echo 'Failed with code '.$result->http_status_code."\n<br /><pre>";
		var_dump($result->response);
		echo '</pre>';
	}

}