<?php
    require_once "config.php";
    $email = $password = $confirm_password = "";
    $errors = array();

    if($_SERVER["REQUEST_METHOD"]== "POST"){
        $email = $_POST['email'];
        $password = $_POST['password'];
        if(empty($email)){
            echo 'Email is required <br/>';
        }else{
            if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                echo "$email is not a valid email";
            }
        }
        if(empty($password)){
            echo 'Password is required <br/>';
        }else{
            if(strlen($password)<6){
                echo "Credentials doesnt match";
            }
        }
        // echo htmlspecialchars($_POST['password']);
    }
?>
<!DOCTYPE html>
<html lang="en">
    <?php include('templates/header.php'); ?>
<body>
    <main class="login">
        <h1>Welcome</h1>
        <div class="form-container">
            <form class="login_form" method="POST" action="login.php">
                <input name='email' type="text" placeholder="Your Email...">
                <input name='password' type="password" placeholder="Your Password...">
                <p class="error"></p>
                <button type="submit">Submit</button>
                <a href="signup.php">No account? Sign up here!</a>
            </form>
        </div>
    </main>
</body>
</html>