<template>
  <div class="create-project__container">
    <div class="header__container">
      <div class="projects__tittle">
        Создать новый проект
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
    <div class="border"></div>
    <div class="create-project__subtitle"> 
      <div class="decorate__border"></div>
      <div class="subtitle">Заполните данные о клиенте</div>
    </div>
    <client-form/>
    <div class="create-project__subtitle"> 
      <div class="decorate__border"></div>
      <div class="subtitle">Заполните данные о зданиях</div>
    </div>
    <building-form/>
  </div>
</template>

<script>
import ClientForm from '../components/UI/create_project/ClientForm.vue'
export default {
  components: { ClientForm },

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
  .border{
    height: 1px;
    background-color: #D9D9D9;
    margin: 2rem 0 0 0;
  }

  .create-project__subtitle{
    display: flex;
    margin-top: 2rem;
    margin-bottom: 1rem;
    .decorate__border{
      width: 0.5rem;
      height: 2.5rem;
      background: #34CAA5;
    }
    .subtitle{
      color: #828282;
      padding: 0.7rem 0 0 1rem;
    }
  }
</style>