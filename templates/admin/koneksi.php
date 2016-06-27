<?<?php 

	$db_host = "localhost";
	$db_user = "root";
	$db_pass = "123";

	mysql_connect($db_host, $db_user, $db_pass);

	$db_name = "article";
	mysql_select_db($db_name);

 ?>