<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$auto = $_POST['auto'];
$type = $_POST['type'];


$to = "kadimsnip@mail.ru";
$title = 'Портфолио - MTK Tuning';
$text = '

Форма на сайте: '.$type.'<br>
Имя: '.$name.'<br>
Телефон: +'.$phone.'<br>
Марка автомобиля: '.$auto.'<br>';


$spectext = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
</head><body>';
$headers  = 'From: ' . "\r\n" . 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $title, $spectext.$text.'</body></html>', $headers);




