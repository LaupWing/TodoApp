<template>
    <form class="add" autocomplete="off">
        <input name="todo" placeholder="What do you want to add" type="text">
        <button type="submit">
            <img :src="require('@/assets/plus.svg')" alt="">
        </button>
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
form.add{
    display: flex;
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    width: 400px;
}

form.add button{
    border-radius: 5px;
    width: 3em;
    background-color: var(--lightRed);
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
}
form.add img{
    width: 2em;
}
</style>