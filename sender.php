<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $service = $_POST['service'];
    $text = $_POST['text'];

	$to = "permanentIvanova@yandex.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
	Обязательно перзвонить !
    Имя: $name 
    Телефон: $phone
    Услуга: $service
    Коментарий: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

?>


