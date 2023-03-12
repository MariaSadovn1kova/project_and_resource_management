<template>
  <div class="building-form__container">
    <local-navbar :menu_items = "menu_items" :active_menu_item = "active_menu_item" @change="changeActive"/>
    <div class="content__container">
        <general-info v-if="this.active_menu_item === 'general_info'"/>
        <foundation-info v-if="this.active_menu_item === 'foundation'"/>
        <walls-info v-if="this.active_menu_item === 'walls'"/>
        <overlap-info v-if="this.active_menu_item === 'overlap'"/>
        <roof-info v-if="this.active_menu_item === 'roof'"/>
    </div>
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
    padding: 2.5rem 3rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0px 0px 4px #c7cac9;
    .content__container{
        margin-top: 2rem;
    }
}
</style>