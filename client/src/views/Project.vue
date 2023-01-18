<script>
    import ProjectsNavbar from '../components/ProjectsNavbar.vue'
    export default {
        name: "Project",
        components:{
        ProjectsNavbar,
        }
    }
</script>

<template>
    <div class="project__container">
        <ProjectsNavbar/>
        <div class="project__header">
            <div class="project__tittle">
                Создать новый проект
            </div>
            <div class="save_project__button">
                Сохранить проект
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .project__container{
        display: flex;
        background-color: #F6FAF8;

        .project__header{
            padding: 3rem;
            display: flex;
            width: 100%;
            border-bottom: 1px solid #D8D8D8;
            
                .project__tittle{
                    font-size: 1.4rem;
                    color: #525252;
                }

                .save_project__button{
                    background-color: #34caa5;
                    color: #fff;
                    cursor: pointer;
                    height: 3rem;
                    padding: 1rem;
                    width: 15rem;
                    text-align: center;
                    border-radius: 15px;
                    margin-left: auto;
                    margin-right: 3rem;
                    font-weight: 600;
                }

                .new_project__button:hover{
                    box-shadow: 0px 4px 10px rgb(230, 230, 230);
                }
            }
        }

</style>
