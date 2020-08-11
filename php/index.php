<?php
    session_start();
    if(!isset($_SESSION["loggedin"])){
        header("location: login.php");
        exit;
    }
    require_once "config.php";
    print_r($_SESSION);
    $todo = "";
    $errors = array();

    if($_SERVER["REQUEST_METHOD"]== "POST"){
        $todo = trim($_POST['todo']);
        if(empty($todo)){
            $errors[] = 'Todo cannot be empty';
        }

        
        if(empty($errors)){
            $sql = "INSERT INTO todos (todo, owner) VALUES (?, ?)";

            if($stmt = mysqli_prepare($link, $sql)){
                mysqli_stmt_bind_param($stmt, "si", $todo, $_SESSION['id']);

                if(mysqli_stmt_execute($stmt)){
                    header("location: index.php");
                }else{
                    echo "Something went wrong. Please try later again.";
                }
            }
        }
    }
    mysqli_close($link);
?>
<!DOCTYPE html>
<html lang="en">
    <?php include('templates/header.php'); ?>
<body>
<a class="logout" href="#">Logout</a>
<main class="home">
    <h1>TodoList</h1>
    <form class="add" autocomplete="off">
        <input name="todo" placeholder="What do you want to add" type="text">
        <button type="submit">
            <img src="./assets/plus.svg" alt="">
        </button>
    </form>
    <p class="error"></p>
    <div class="todos"></div>
</main>
</body>
</html>