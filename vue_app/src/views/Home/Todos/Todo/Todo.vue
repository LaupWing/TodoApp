<template>
    <form class="todo">
        <h2>{{todo.todo}}</h2>
        <div class="buttons">
            <button type="submit" class="done">
                <img :src="require('@/assets/done.svg')" alt="">
            </button>
            <button type="submit" class="delete">
                <img :src="require('@/assets/delete.svg')" alt="">
            </button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'Todo',
    props:{
        todo:{
            required: true,
            type: Object
        }
    }
}
</script>

<style>
form.todo{
    background: white;
    display: flex;
    margin: 15px 0;
    align-items: center;
}
form.todo img{
    width: 1.8em;
    transition: transform .25s;
}

form.todo .buttons{
    display: flex;
}
form.todo h2{
    flex: 1;
    padding-left: 10px;
    font-weight: normal;
    font-size: 1em;
}
form.todo button{
    padding: 5px 8px;
}
form.todo button:hover img{
    transform: scale(.8);
}
form.todo .done{
    background: var(--green);
}
form.todo .delete{
    background: var(--red);
}

form.todo.done{
    opacity: .5;
    text-decoration: line-through;
}
</style>