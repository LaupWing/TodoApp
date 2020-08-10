<?php
 
?>
<!DOCTYPE html>
<html lang="en">
    <?php include('templates/header.php'); ?>
<body>
    <main class="login">
        <h1>Welcome</h1>
        <div class="form-container">
            <form class="login_form" method="POST" action="login.php">
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