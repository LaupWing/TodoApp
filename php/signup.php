<?php
    require_once "config.php";
    $email = $password = $confirm_password = "";
    $errors = array();

    if($_SERVER["REQUEST_METHOD"]== "POST"){
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);

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
            <form class="signup_form" method="GET" action="signup.php">
                <input name='email' type="text" placeholder="Your Email...">
                <input name='password' type="password" placeholder="Your Password...">
                <input name='password_confirm' type="password" placeholder="Confirm your Password...">
                <p class="error"></p>
                <button name="submit" type="submit" value="submit">Submit</button>
                <a href="#">Already hava account? Login here!</a>
            </form>
        </div>
    </main>
</body>
</html>