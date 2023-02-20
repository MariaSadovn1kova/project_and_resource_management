<template>
    <div class="nav__container">
        <div>
            <img class="company__logo" src="../assets/company_logo.svg">                
        </div>
        <router-link v-if="this.activePage=='Проекты'" class = "nav__link-active" to="/projects">Проекты</router-link>
        <router-link v-else class = "nav__link" to="/projects" @click="setActive('Проекты')">Проекты</router-link>
        <router-link v-if="this.activePage=='Стройматериалы'" class = "nav__link-active" to="/materials">Стройматериалы</router-link>
        <router-link v-else class = "nav__link" to="/materials" @click="setActive('Стройматериалы')">Стройматериалы</router-link>
        <router-link v-if="this.activePage=='Формулы'" class = "nav__link-active" to="/materials">Формулы</router-link>
        <router-link v-else class = "nav__link" to="/materials" @click="setActive('Формулы')">Формулы</router-link>
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
    name: 'main-navbar',
    data(){
        return{
            activePage: "Проекты"
        }
    },
    methods: {
        setActive(newActive){
            this.activePage = newActive;
            console.log(this.activePage)
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav__container{
        display: flex;
        flex-direction: row;
        box-shadow: 0px 4px 4px #DEE1E0;
        .company__logo{
            margin-left: 3rem;
        }
        .nav__link{
            text-decoration: none;
            color: #868585;
            font-weight: 600;
            padding: 1rem;
        }
        .nav__link-active{
            text-decoration: none;
            font-weight: 600;
            padding: 1rem;
            color: #34CAA5;
            border-bottom: 3px solid #34CAA5;
        }
        .nav__link:hover{
            color: #34CAA5;
        }
    }
</style>