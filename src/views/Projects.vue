<template>
    <div class="projects__container">
        <ProjectsNavbar/>
        <div class="projects__content">
            <div class="projects__header">
                <div class="projects__tittle">
                    Проекты за 2023 год
                </div>
                <div class="new_project__button">
                    Создать новый проект
                </div>
            </div>
            <div class="project__sub_menu">
                <div class="sub_menu__item">
                    Все проекты
                </div>
                <div class="sub_menu__item">
                    Проекты в процессе
                </div>
                <div class="sub_menu__item">
                    Завершенные проекты
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .projects__container{
        display: flex;
        background-color: #F6FAF8;

        .projects__content{
            flex: auto;

            .projects__header{
            padding: 3rem;
            display: flex;
            width: 100%;

                .projects__tittle{
                    font-size: 1.4rem;
                    color: #525252;
                }

                .new_project__button{
                    background-color: #5DE5C3;
                    color: #1C6B66;
                    cursor: pointer;
                    height: 3.5rem;
                    padding: 1.1rem;
                    width: 15rem;
                    text-align: center;
                    border-radius: 15px;
                    margin-left: auto;
                    margin-right: 3rem;
                    font-weight: 600;
                }
            }
        }

        .project__sub_menu{
            margin: 0 6rem 0 3rem;
            display: flex;
            border-bottom: 1px solid #D8D8D8;

            .sub_menu__item{
                margin-right: 2rem;
                height: 100%;
                padding-bottom: 1rem;
                border-bottom: 5px solid #5DE5C3;
            }
        }

    }
</style>

<script>
    import ProjectsNavbar from '../components/ProjectsNavbar.vue'
    export default {
        name: "Projects",
        components:{
        ProjectsNavbar,
        }
    }
</script>