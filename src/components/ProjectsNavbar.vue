<template>
    <div class="navbar_container">
        <div class="navbar__item">
            <div class="item__year">
                2023
            </div>
            <div class="item__projects">
                4 проекта
            </div>
        </div>
        <div class="navbar__item">
            <div class="item__year">
                2022
            </div>
            <div class="item__projects">
                25 проектов
            </div>
        </div>
        <div class="navbar__item">
            <div class="item__year">
                2021
            </div>
            <div class="item__projects">
                15 проектов
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .navbar_container{
        width: 15rem;
        box-shadow: 0px 4px 10px rgb(223, 223, 223);
        height: 100vh;
        padding: 2rem;
        background-color: #fff;

        .navbar__item{
            display: flex;
            margin-bottom: 1rem;

            .item__year{
                margin-right: 1rem; 
                font-weight: 600;
                color: #3DC7BE;
            }

            .item__projects{
                color: #B1B1B1; 
                font-size: 0.9rem;
            }

            .item__projects:hover{
                color: #3DC7BE;
                cursor: pointer;
            }           
        }
    }
</style>

<script>
    export default {
        name: "ProjectsNavbar"
    }
</script>