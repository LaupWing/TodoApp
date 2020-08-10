<?php
    require_once "config.php";
    require_once "utils/redirect.php";

    $email = $password = "";
    $errors = array();
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $email = trim($_POST["email"]);
        $password = trim($_POST["password"]);

        if(empty($email)){
            $errors[] = "Please enter your email";
        }
        if(empty($password)){
            $errors[] = "Please enter your password";
        }
        if(empty($errors)){
            $sql = "SELECT id, email, password FROM users WHERE email = ?";
            if($stmt = mysqli_prepare($link, $sql)){
                mysqli_stmt_bind_param($stmt, "s", $email);
                if(mysqli_stmt_execute($stmt)){
                    mysqli_stmt_store_result($stmt);
                    
                    if(mysqli_stmt_num_rows($stmt) == 1){
                        mysqli_stmt_bind_result($stmt, $id, $email, $hashed_password);
                        if(mysqli_stmt_fetch($stmt)){
                            if(password_verify($password, $hashed_password)){
                                session_start();

                                $_SESSION["loggedin"] = true;
                                $_SESSION["id"] = $id;
                                $_SESSION["email"] = $email;

                                header("location: home.php");
                            }else{
                                $errors[] = "Credentials doesnt match";
                            }
                        }
                    }else{
                        echo "not logged in";
                        $errors[] = "Credentials doesnt match";
                    }
                }else{
                    echo "Oops! Something went wrong. Please try again later.";
                }
                mysqli_stmt_close($stmt);
            }else{
                echo "Something went wrong.";
            }
        }
        mysqli_close($link);
    }
?>
<!DOCTYPE html>
<html lang="en">
    <?php include('templates/header.php'); ?>
<body>
    <main class="login">
        <h1>Welcome</h1>
        <div class="form-container">
            <form class="login_form" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <input name='email' type="text" value="<?php echo $email; ?>" placeholder="Your Email...">
                <input name='password' type="password" placeholder="Your Password...">
                <?php foreach($errors as $error) {?>
                    <p class="error"> <?php echo $error; ?></p>
                <?php } ?>
                <button type="submit">Submit</button>
                <a href="signup.php">No account? Sign up here!</a>
            </form>
        </div>
    </main>
</body>
</html>