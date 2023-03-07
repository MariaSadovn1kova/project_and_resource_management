<template>
  <div class="building-form__container">
    <local-navbar :menu_items = "menu_items" :active_menu_item = "active_menu_item" @change="changeActive"/>
  </div>
</template>

<script>
export default {
    name: 'building-form',
    data(){
        return{
            menu_items:[
            { id: 1, title: 'Общая информация', name: 'general_info' },
            { id: 2, title: 'Фундамент', name: 'foundation' },
            { id: 3, title: 'Стены', name: 'walls' },
            { id: 4, title: 'Перекрытие', name: 'overlap' },
            { id: 5, title: 'Крыша', name: 'roof' }
            ],
            active_menu_item: 'general_info',
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
.building-form__container{
    padding: 3rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0px 0px 4px #c7cac9;
}
</style>