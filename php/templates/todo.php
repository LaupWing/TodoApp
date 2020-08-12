<?php
    require_once __DIR__ . "/../config.php";

    $errors = array();
    if(
        $_SERVER["REQUEST_METHOD"] == "POST" &&
        (trim($_POST["submit"]) == "done"||trim($_POST["submit"]) == "delete") 
    ){
        $todoId = mysqli_real_escape_string($link, trim($_POST["todoId"]));
        $todoId = trim($_POST["todoId"]);
        $action = trim($_POST["submit"]);
        if($todoId === $todo['id']){
            if($action == 'done'){
                $status = $todo['done'] == true ? false : true;
                $sql = "UPDATE todos SET done = $status WHERE id = $todoId";
                
                if(mysqli_query($link, $sql)){
                    header("location: index.php");
                }else{
                    echo 'Query error' . mysqli_error($link);
                }
            }
        }
    }
    mysqli_close($link);
?>

<form class="todo <?php echo $todo['done'] == true ? 'done' : '';?>"  method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <h2><?php echo htmlspecialchars($todo['todo']) ?></h2>
    <input type="hidden" name="todoId" value="<?php echo htmlspecialchars($todo['id']) ?>">
    <div class="buttons">
        <button name="submit" value="done" type="submit" class="done"><img src="./assets/done.svg" alt=""></button>
        <button name="submit" value="delete" type="submit" class="delete"><img src="./assets/delete.svg" alt="">
        </button>
    </div>
</form>