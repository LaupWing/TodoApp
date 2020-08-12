<?php
    session_start();
    if(!isset($_SESSION["loggedin"])){
        header("location: login.php");
        exit;
    }
    require_once "config.php";
    $todo = "";
    $errors = array();
    $sql = "SELECT * FROM todos WHERE owner = $_SESSION[id]";
    
    $result = mysqli_query($link, $sql);
    $todos = mysqli_fetch_all($result, MYSQLI_ASSOC);

    if($_SERVER["REQUEST_METHOD"]== "POST" && $_POST["submit"] == 'add'){
        echo 'add';
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
    if($_SERVER["REQUEST_METHOD"] == "POST" && trim($_POST["submit"]) == "done"){
        $todoId = mysqli_real_escape_string($link, trim($_POST["todoId"]));
        $todoQuery = "SELECT * FROM todos WHERE id = $todoId";    
        $result = mysqli_query($link, $todoQuery);
        $todo = mysqli_fetch_assoc($result);
        $status = $todo['done'] == true ? 0 : 1;
        $updateQuery = "UPDATE todos SET done = $status WHERE id = $todoId";
        if(mysqli_query($link, $updateQuery)){
            header("location: index.php");
        }else{
            echo 'Query error' . mysqli_error($link);
        }
    }
    if($_SERVER["REQUEST_METHOD"] == "POST" && trim($_POST["submit"]) == "delete"){
        $todoId = mysqli_real_escape_string($link, trim($_POST["todoId"]));
        $deleteQuery = "DELETE FROM todos WHERE id = $todoId";
        if(mysqli_query($link, $deleteQuery)){
            header("location: index.php");
        }else{
            echo 'Query error' . mysqli_error($link);
        }
    }
    mysqli_close($link);
?>
<!DOCTYPE html>
<html lang="en">
    <?php include('templates/header.php'); ?>
<body>
<a class="logout" href="logout.php">Logout</a>
<main class="home">
    <h1>TodoList</h1>
    <form method="POST" class="add" autocomplete="off" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <input name="todo" placeholder="What do you want to add" type="text">
        <button type="submit" name="submit" value="add">
            <img src="./assets/plus.svg" alt="">
        </button>
    </form>
    <p class="error"></p>
    <div class="todos">
        <?php foreach($todos as $todo){?>
            <?php include "templates/todo.php"?>
        <?php }?>
    </div>
</main>
</body>
</html>