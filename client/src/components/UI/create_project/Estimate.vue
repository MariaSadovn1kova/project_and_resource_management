<template>
  <div class="estimate__container">
    <local-navbar :menu_items = "menu_items" :active_menu_item = "active_menu_item" @change="changeActive"/>
    <div class="estimate__table">
      <div class="table__header">
        <div class="header__item">П/П</div>
        <div class="header__item">Наименование</div>
        <div class="header__item">Ед. Изм.</div>
        <div class="header__item">Количество</div>
        <div class="header__item">Стоимость за ед.</div>
        <div class="header__item">Итого стоимость</div>
      </div>
      <div class="table__title">Материалы</div>
      <div class="table__item"></div>
      <div class="table__item dark"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'estimate',
    data(){
        return{
            menu_items:[
            { id: 1, title: 'Фундамент', name: 'foundation' },
            { id: 2, title: 'Коробка', name: 'frame' },
            { id: 3, title: 'Крыша', name: 'roof' }
            ],
            active_menu_item: 'foundation',
        }
    },
    methods: {
        changeActive(active){
        this.active_menu_item = active;
        },
    },
}
</script>

<style lang="scss" scoped>
  .estimate__container{
    padding: 2.5rem 3rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0px 0px 4px #c7cac9;
    .estimate__table{
      margin-top: 2rem;
      .table__header{
        background-color: #FFE8E2;
        height: 3rem;
        border-radius: 0.5rem 0.5rem 0 0;
        display: flex;
        justify-content: space-around;
        .header__item{
          padding: 0.9rem;
          color: #FF594B;
          font-weight: 600;
        }
      }
      .table__title{
        color: #828282;
        margin: 1rem 0;
      }
      .table__item{
        border: 2px solid #FFEDE9;
        height: 3rem;
        margin-bottom: 0.8rem;
      }
      .table__item.dark{
        background-color: #FFF8F6;
      }
    }
  }
</style>