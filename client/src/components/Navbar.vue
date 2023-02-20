<template>
    <div class="nav__container">
        <nav>
            <router-link class = "nav__link" to="/projects">Проекты</router-link>
            <router-link class = "nav__link" to="/materials">Материалы</router-link>
        </nav>
        <div class="user__name">
            И. И. Иванов
        </div>
        <div>
            <img class="user_picture" src="../assets/user__picture.svg">                
        </div>
    </div>
</template>

<script>
export default {
    name: 'main-navbar'
}
</script>

<style>

</style>