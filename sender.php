<?php
  $name = $_POST['name'];
	$phone = $_POST['phone'];
  $comment = $_POST['comment'];

	$to = "arbimerzhoev@mail.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name \n
    Телефон: $phone \n
    Комментарий: $comment"; 	
	mail($to, $subject, $msg);

?>