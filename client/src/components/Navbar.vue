<template>
    <div class="nav__container">
        <img class="company__logo" src="../assets/company_logo.svg">                
        <router-link class = "nav__link" :class = "{'active' :this.activePage=='Проекты'}" to="/projects" @click="setActive('Проекты')">Проекты</router-link>
        <router-link class = "nav__link" :class = "{'active' :this.activePage=='Стройматериалы'}" to="/materials" @click="setActive('Стройматериалы')">Строматериалы</router-link>
        <router-link class = "nav__link" :class = "{'active' :this.activePage=='Формулы'}" to="/projects" @click="setActive('Формулы')">Формулы</router-link>
        <div class="user__container">
            <div class="user__name">
                И. И. Иванов
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main-navbar',
    data(){
        return{
            activePage: "Проекты"
        }
    },
    methods: {
        setActive(newActive){
            this.activePage = newActive;
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav__container{
        display: flex;
        flex-direction: row;
        background-color: #fff;
        box-shadow: 0px 4px 4px #DEE1E0;
        padding: 0rem 4rem 0rem 4rem;
        .company__logo{
            width: 4rem;
            margin-right: 10rem;
        }

        .nav__link{
            text-decoration: none;
            color: #868585;
            font-weight: 600;
            padding: 1rem;
        }

        .nav__link.active{
            text-decoration: none;
            font-weight: 600;
            padding: 1rem;
            color: #34CAA5;
            border-bottom: 3px solid #34CAA5;
        }

        .nav__link:hover{
            background-color: #e8faf5;
            color: #34CAA5;
        }

        .user__container{
            display: flex;
            font-weight: 600;
            color: #34CAA5;
            margin-left: auto;
            padding: 1rem;
        }

        .user__container:hover{
            background-color: #e8faf5;
            cursor: pointer;
        }
    }
</style>