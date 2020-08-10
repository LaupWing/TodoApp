<?php
    if(!isset($_SESSION["loggedin"])){
        header("location: login.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
    <?php include('templates/header.php'); ?>
<body>
    Home
</body>
</html>