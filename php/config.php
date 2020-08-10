<?php

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'laup');
define('DB_PASSWORD','heavy4oz');
define('DB_NAME', 'todos');

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

?>