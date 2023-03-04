<template>
  <div class="projects__container">
    <div class="header__container">
      <div class="projects__tittle">
        Проекты за 2023 год
      </div>
      <custom-button>
        <div class="button__content">  
          <div class="button__title">
            Новый проект
          </div>
          <img class="projects__img" src="@/assets/add__picture.svg">
        </div>
      </custom-button>
    </div>
    <local-navbar :menu_items = "menu_items" :active_menu_item = "active_menu_item" @change="changeActive"/>
    <input class="projects__search" type="text" placeholder="Адрес проекта..." v-model="searchQuery">
    <project-list :projects = "sortedAndSearchProject"/>
  </div>
</template>

<script>
export default {
  data() {
    return{
      menu_items:[
        { id: 1, title: 'Все посты', name: 'all' },
        { id: 2, title: 'Текущие проекты', name: 'unfinished' },
        { id: 3, title: 'Завершенные проекты', name: 'finished' }
      ],
      sidebar_menu_items:[
        { title:'2021'},
        { title:'2022'},
        { title:'2023'},
      ],
      projects: [
        {id: 1, address: 'ул. Поленова 30', client_name: 'Иванов Иван Иванович', date: '12.01.2020', status: 'unfinished'},
        {id: 2, address: 'ул. Некрасова 31', client_name: 'Петров Петр Петрович', date: '12.01.2023', status: 'finished'},
      ],
      active_menu_item: 'all',
      active_sidebar_menu_item: '2023',
      searchQuery: '',
      selectedSort: '',
    }
  },
  methods: {
    changeActive(active){
      this.active_menu_item = active;
    }
  },
  computed:{
        sortedProject(){
            return [...this.projects].sort((project1, project2) => project1[this.selectedSort]?.localeCompare(project2[this.selectedSort]))
        },
        sortedAndSearchProject(){
            return this.sortedProject.filter(project => project.address.includes(this.searchQuery))
        }
    }
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
      width: 0.8rem;
    }
    .button__content{
      display: flex;
      justify-content: space-between;
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