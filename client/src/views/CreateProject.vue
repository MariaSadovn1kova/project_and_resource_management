<template>
  <div class="create-project__container">
    <div class="header__container">
      <div class="projects__tittle">
        Проекты за 2023 год
      </div>
        <custom-button class="save__btn">
        <div class="button__content">  
          <div class="button__title">
            Сохранить
          </div>
          <img class="projects__img" src="@/assets/add__picture.svg">
        </div>
      </custom-button>
    </div>
    <div class=""></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .header__container{
    display: flex;
    justify-content: space-between;
    .projects__tittle{
      font-size: 1.2rem;
      color: #525252;
    }
    .projects__img{
      width: 0.8rem;
    }
    .button__content{
      display: flex;
      justify-content: space-between;
    }
    .save__btn{
        width: 10rem;
    }
  }
</style>