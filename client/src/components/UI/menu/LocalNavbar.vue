<template>
  <div class="local-navbar__container">
    <div class="navabar-item__container">
        <div :class = "{'active' :this.active_menu_item==menu_item.name}" class="local-navbar__item" v-for="menu_item in menu_items" :key="menu_item.id" @click="changeActive(menu_item.name)">{{menu_item.title}}</div>
    </div>
    <div class="btn__container">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'local-navbar',
    props: {
        menu_items: {
            type: Array,
            required: true
        },
        active_menu_item: ''
    },

    methods: {
        changeActive(active){
            this.$emit('change', active)
        }
    }
}
</script>

<style lang="scss" scoped>
.local-navbar__container{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #D8D8D8;
    .navabar-item__container{
        display: flex;
    }
    .local-navbar__item{
        padding: 1rem 0rem 1rem 0;
        margin-right: 2rem;
        color: #828282;
    }
    .local-navbar__item.active{
        color:#FF594B;
        border-bottom: 3px solid #FF594B;
    }
    .local-navbar__item:hover{
        color: #FF594B;
        cursor: pointer;
    }
}
</style>