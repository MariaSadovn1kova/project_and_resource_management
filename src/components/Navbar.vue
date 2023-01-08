<template>
    <div class="nav__container">
        <nav>
            <router-link class = "nav__link" to="/projects">Проекты</router-link>
            <router-link class = "nav__link" to="/materials">Материалы</router-link>
        </nav>
        <div class="user__name">
            Абобус Автобус
        </div>
        <div>
            <img class="user_picture" src="../assets/user__picture.svg">                
        </div>
    </div>
</template>

<style lang="scss">
    .nav__container{
        display: flex;
        background-color: #5DE5C3;
        height: 3.5rem;
        padding-left: 6rem;
        padding-right: 6rem;
        padding-top: 1rem;

        .nav__link{
            color: #1C6B66;
            font-weight: 400;
            text-decoration: none;
            padding-right: 2rem;
            font-weight: 600;
        }

        .user__name{
            margin-left: auto;
            color: #1C6B66;
            padding-right: 2rem;
            font-weight: 600;
        }

        .user_picture{
            width: 2rem;
            color: white;
        }
    }
</style>

<script>
    export default {

    }
</script>