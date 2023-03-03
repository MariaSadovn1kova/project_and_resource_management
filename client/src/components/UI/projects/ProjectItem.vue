<template>
  <div class="project-item__container">
    <div class="project__status"></div>
    <div class="project-info__container">
      <download-button/>
      <div class="project__data info">12.01.2023</div>
      <div class="project__client-name info">Иванов Иван Иванович</div>
      <div class="project__address info">ул. Некрасова 30</div>
      <div class="project__bth-box">
        <button class="btn open__btn"></button>
        <button class="btn delete__btn"></button>                    
      </div>
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
    background-color: #FFE99C;
    border-radius: 0.5rem 0 0 0.5rem;
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