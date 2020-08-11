<form class="todo <?php $todo['done'] === 1 ? 'done' : ''?>">
    <h2><?php echo htmlspecialchars($todo['todo']) ?></h2>
    <div class="buttons">
        <button type="submit" class="done"><img src="./assets/done.svg" alt=""></button>
        <button type="submit" class="delete"><img src="./assets/delete.svg" alt=""></button>
    </div>
</form>