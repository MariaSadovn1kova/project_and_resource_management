<template>
  <div class="projectp-list__container">
    <project-item v-for="project in projects" :key = "project.id" :project = "project"/>
  </div>
</template>

<script>
export default {
  name: 'project-list',
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.projectp-list__container{
    padding-top: 2rem;
    margin-bottom: 6rem;
}
</style>