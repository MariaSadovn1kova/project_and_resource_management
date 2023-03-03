<template>
  <div class="project-item__container">
    <div class="project__status"></div>
    <div class="project-info__container">
      <download-button/>
      <div class="project__data">12.01.2023</div>
      <div class="project__client-name">Иванов Иван Иванович</div>
      <div class="project__address">ул. Некрасова 30</div>
      <div class="project__bth-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project-item'
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
    background-color: #D0EBF4;
    border-radius: 0.5rem 0 0 0.5rem;
  }
  .project-info__container{
    padding: 1.5rem 2.5rem 1.5rem 2.5rem;
    display: flex;
    justify-content: end;
  }
}
</style>