<template>
  <div class="projects__container">
    <div class="header__container">
      <div class="projects__tittle">
        Проекты за 2023 год
      </div>
      <custom-button>
        Новый проект
        <img class="projects__img" src="@/assets/add__picture.svg">
      </custom-button>
    </div>
    <local-navbar/>
    <input class="projects__search" type="text" placeholder="Адрес проекта...">
    <project-list/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.projects__container{
  .header__container{
    display: flex;
    justify-content: space-between;
    .projects__tittle{
      font-size: 1.2rem;
      color: #525252;
    }
    .projects__img{
      width: 1rem;
    }
  }
  .projects__search{
    margin-top: 2rem;
    width: 30rem;
    height: 2.5rem;
    border-radius: 2rem;
    border: 1px solid #E4E7E6;
    padding: 1rem;
    outline: none;
  }
}
</style>