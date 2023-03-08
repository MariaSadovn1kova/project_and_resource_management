<template>
  <div class="app">
    <main-navbar class="main__navbar"/>
    <div class="app__container">
      <main-sidebar v-if = "this.$route.name=='Projects'" class="main__sidebar" :sidebar_menu_items = "sidebar_projects_items" :page="'Project'" :default_active_item = "sidebar_projects_items[0].title"/>
      <main-sidebar v-if = "this.$route.name=='Materials'" class="main__sidebar" :sidebar_menu_items = "sidebar_materials_items" :page="'Materials'" :default_active_item = "sidebar_materials_items[0].title"/>
      <main-sidebar v-if = "this.$route.name=='CreateProject'" class="main__sidebar" :sidebar_menu_items = "sidebar_create_project_items" :page="'CreateProject'"/>
      <router-view class="router-view"/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        sidebar_projects_items:[
        { title:'2023'},
        { title:'2022'},
        { title:'2021'},
        ],
        sidebar_materials_items:[
        { title:'Фундамент'},
        { title:'Коробка'},
        { title:'Крыша'},
        ],
        sidebar_create_project_items:[
        { title:'Здания и клиент'},
        { title:'Смета'},
        { title:'Список стройматериалов'},
        ],
      }
    }
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;

    .app{
      min-height: 100vh;
      background-color: #F6FAF8;

      .main__navbar{
        position: absolute;
        width: 100%;
      }
      
      .app__container{
        display: flex;

        .main__sidebar {
          padding-top: 6rem;
        }

        .router-view{
          width: 100%;
          padding: 8rem 6rem 0rem 6rem;
        }
      }
    }
  }
</style>
