<?php
    if(isset($GET['submit'])){
        echo('set');
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