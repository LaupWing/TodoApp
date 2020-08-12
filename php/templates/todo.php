<form class="todo <?php echo $todo['done'] == true ? 'done' : '';?>"  method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <h2><?php echo htmlspecialchars($todo['todo']) ?></h2>
    <input type="hidden" name="todoId" value="<?php echo htmlspecialchars($todo['id']) ?>">
    <div class="buttons">
        <button name="submit" value="done" type="submit" class="done"><img src="./assets/done.svg" alt=""></button>
        <button name="submit" value="delete" type="submit" class="delete"><img src="./assets/delete.svg" alt="">
        </button>
    </div>
</form>