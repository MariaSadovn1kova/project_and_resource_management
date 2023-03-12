<template>
  <div class="create-project__container">
    <div class="header__container">
      <div class="projects__tittle">
        Создать новый проект
      </div>
      <div class="btns">
        <download-button class="download__button" v-if="this.$store.state.active_sidebar_matertials_item === 'Смета'"/>
        <custom-button class="save__btn">
          <div class="button__content">  
            <div class="button__title">
              Сохранить
            </div>
            <img class="projects__img" src="@/assets/add__picture.svg">
          </div>
        </custom-button>
      </div>
    </div>
    <div class="border"></div>
    <div class="building__client" v-if="this.$store.state.active_sidebar_matertials_item === 'Здания и клиент'">
      <div class="create-project__subtitle"> 
      <div class="subtitle">Заполните данные о клиенте</div>
      </div>
      <client-form/>
      <div class="create-project__subtitle"> 
      <div class="subtitle">Заполните данные о зданиях</div>
        <div class="btn__container">
          <custom-subbutton class="custom-subbutton">
            <div class="button__content">  
              <img class="projects__img" src="@/assets/add__picture_dark.svg">
            </div>
          </custom-subbutton>
        </div>
      </div>
      <building-form/>
    </div>
    <div class="estimate" v-if="this.$store.state.active_sidebar_matertials_item === 'Смета'">
      <div class="create-project__subtitle"> 
        <div class="subtitle">Здание 1</div>
      </div>
      <estimate/>
    </div>
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
    .btns{
      display: flex;
      .download__button{
        margin-right: 1.5rem;
      }
    }
    .projects__tittle{
      font-size: 1.2rem;
      color: #525252;
      padding-top: 0.5rem;
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
    margin: 1rem 0 0 0;
  }
  .custom-subbutton{
      .projects__img{
        width: 0.8rem;
      }
      .button__content{
        display: flex;
        justify-content: space-between;
      }
    }
  .create-project__subtitle{
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 1rem;
    .subtitle{
      color: #828282;
    }
  }
</style>