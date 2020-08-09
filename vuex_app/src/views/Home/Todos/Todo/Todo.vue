<template>
    <div 
        class="todo" 
        :class="todo.done && 'done'"
    >
        <h2>{{todo.todo}}</h2>
        <div class="buttons">
            <button 
                class="done"
                @click="$store.dispatch('toggleCheck', todo.todo)"
            >
                <img :src="require('@/assets/done.svg')" alt="">
            </button>
            <button 
                class="delete"
                @click="$store.dispatch('removeTodo', todo.todo)"
            >
                <img :src="require('@/assets/delete.svg')" alt="">
            </button>
        </div>
    </div>
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
.todo{
    background: white;
    display: flex;
    margin: 15px 0;
    align-items: center;
}
.todo img{
    width: 1.8em;
    transition: transform .25s;
}

.todo .buttons{
    display: flex;
}
.todo h2{
    flex: 1;
    padding-left: 10px;
    font-weight: normal;
    font-size: 1em;
}
.todo button{
    padding: 5px 8px;
}
.todo button:hover img{
    transform: scale(.8);
}
.todo .done{
    background: var(--green);
}
.todo .delete{
    background: var(--red);
}

.todo.done{
    opacity: .5;
    text-decoration: line-through;
}
</style>