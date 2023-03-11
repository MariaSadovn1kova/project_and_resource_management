<template>
  <div class="estimate__container">
    <local-navbar :menu_items = "menu_items" :active_menu_item = "active_menu_item" @change="changeActive">
      <div class="navbar__container">
        <div class="total">
          <div>
            Итого:
          </div>
          <div class="total__value">
            3 500 000, 00
          </div>
        </div>
        <custom-subbutton class="custom-subbutton">
          <div class="button__content">  
            <img class="projects__img" src="@/assets/add__picture_dark.svg">
          </div>
        </custom-subbutton>
      </div>
    </local-navbar>
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
    .custom-subbutton{
      .projects__img{
        width: 0.8rem;
      }
      .button__content{
        display: flex;
        justify-content: space-between;
      }
    }
    .navbar__container{
      display: flex;
      .total{
        display: flex;
        color: #FF594B;
        margin: 0.9rem;
      }
      .total__value{
        font-weight: 600;
        margin-left: 1rem;
      }
    }
    .estimate__table{
      margin-top: 2rem;
      .table__header{
        background-color: #e7f8f5;
        height: 3rem;
        border-radius: 0.5rem 0.5rem 0 0;
        display: flex;
        justify-content: space-around;
        .header__item{
          padding: 0.9rem;
          color: #34CAA5;
          font-weight: 600;
        }
      }
      .table__title{
        color: #828282;
        margin: 1rem 0;
      }
      .table__item{
        border: 2px solid #dbf1ed;
        height: 3rem;
        margin-bottom: 0.8rem;
      }
      .table__item.dark{
        background-color: #effaf8;
      }
    }
  }
</style>