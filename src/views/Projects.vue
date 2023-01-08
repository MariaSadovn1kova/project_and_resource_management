<template>
    <div class="projects__container">
        <ProjectsNavbar/>
        <div>
            Проектики
        </div>
    </div>
</template>

<style>
    .projects__container{
        display: flex;
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