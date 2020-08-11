<?php
    session_start();
    if(!isset($_SESSION["loggedin"])){
        header("location: login.php");
        exit;
    }
    require_once "config.php";
    $todo = "";
    $errors = array();

    if($_SERVER["REQUEST_METHOD"]== "POST"){
        $todo = trim($_POST['todo']);
        if(empty($email)){
            $errors[] = 'Email is required';
        }else{
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $errors[]="$email is not a valid email";
            }else{
                $sql = "SELECT id FROM users WHERE email = ?";
                
                if($stmt = mysqli_prepare($link, $sql)){
                    mysqli_stmt_bind_param($stmt, "s", $email);

                    if(mysqli_stmt_execute($stmt)){
                        mysqli_stmt_store_result($stmt);

                        if(mysqli_stmt_num_rows($stmt) == 1){
                            $errors[] = "This email is already taken.";
                        }
                    } else{
                        echo "Something went wrong. Please try again later.";
                    }
                    mysqli_stmt_close($stmt);
                }
            }
        }
        if(empty($password)){
            $errors[] = 'Password is required <br/>';
        }elseif(strlen($password)<6) {
            $errors[] = 'Password must have atleast 6 characters';
        }

        if(empty($password_confirm)){
            $errors[] = "Please confirm password";
        }else{
            if(!empty($password_confirm) && !empty($password)){
                if($password_confirm !== $password){
                    $errors[] = "Password did not match";
                }
            }
        }
        
        if(empty($errors)){
            $sql = "INSERT INTO users (email, password) VALUES (?, ?)";

            if($stmt = mysqli_prepare($link, $sql)){
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                mysqli_stmt_bind_param($stmt, "ss", $email, $hashed_password);

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