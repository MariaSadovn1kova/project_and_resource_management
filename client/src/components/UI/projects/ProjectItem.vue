<template>
  <div class="project-item__container">
    <div class="project__status" :class = "{'finished' :project.status == 'finished', 'unfinished':project.status == 'unfinished'}"></div>
    <div class="project-info__container">
      <download-button/>
      <div class="project__date info">{{ project.date }}</div>
      <div class="project__client-name info">{{ project.client_name}}</div>
      <div class="project__address info">{{ project.address }}</div>
      <div class="project__bth-box">
        <button class="btn open__btn"></button>
        <button class="btn delete__btn"></button>                    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project-item',
  props: {
    project: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.project-item__container{
  background-color: #fff;
  height: 6rem;
  box-shadow: 0px 0px 4px #DEE1E0;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  .project__status{
    width: 3rem;
    height: 100%;
    border-radius: 0.5rem 0 0 0.5rem;
  }
    .unfinished{
      background-color: #FFE99C;
    }
    .finished{
      background-color: #CCF3E9;
    }
  .project-info__container{
    width: 100%;
    padding: 1.5rem 2.5rem 1.5rem 2.5rem;
    display: flex;
    justify-content: space-between;
    color: #828282;
  }
  .info{
    padding-top: 1rem;
  }
}
</style>