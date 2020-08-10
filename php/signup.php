<?php
    require_once "config.php";
    $email = $password = $password_confirm = "";
    $errors = array();

    if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
        header("location: home.php");
        exit;
    }

    if($_SERVER["REQUEST_METHOD"]== "POST"){
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);
        $password_confirm = trim($_POST['password_confirm']);

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
                $hash = password_hash($password, PASSWORD_DEFAULT);
                mysqli_stmt_bind_param($stmt, "ss", $email, $hash);

                if(mysqli_stmt_execute($stmt)){
                    header("location: home.php");
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
    <main class="login">
        <h1>Welcome</h1>
        <div class="form-container">
            <form class="signup_form" method="POST" action="signup.php">
                <input name='email' type="text" placeholder="Your Email...">
                <input name='password' type="password" placeholder="Your Password...">
                <input name='password_confirm' type="password" placeholder="Confirm your Password...">
                <?php foreach($errors as $error) {?>
                    <p class="error"> <?php echo $error; ?></p>
                <?php } ?>
                <button type="submit">Submit</button>
                <a href="#">Already hava account? Login here!</a>
            </form>
        </div>
    </main>
</body>
</html>