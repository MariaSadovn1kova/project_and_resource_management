<template>
  <div class="sidebar__container">
    <div class="sidebar__element-container">
        <div :class="{'active' :this.$store.state.active_sidebar_menu_item == sidebar_menu_item.title}" class="sidebar__element" 
            v-for="sidebar_menu_item in sidebar_menu_items" 
            :key="sidebar_menu_item.title" 
            @click="changeActiveSidebar(sidebar_menu_item.title)">
            {{ sidebar_menu_item.title }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'main-sidebar',
    data(){
        return{
        }
    },
    props: {
        sidebar_menu_items: {
            type: Array,
            required: true
        },
        default_active_item: {
            type: Object,
            required: true
        },
    },
    methods: {
        changeActiveSidebar(newActive) {
            this.$store.state.active_sidebar_menu_item = newActive
        }
    },
}
</script>

<style lang="scss" scoped>
    .sidebar__container{
        flex-shrink: 0;
        width: 15rem;
        background-color: #fff;
        box-shadow: 0px 4px 4px #DEE1E0;
        min-height: 100vh;

        .sidebar__element{
            padding: 0.8rem 2rem 0.8rem 2rem;
            color: #868585;
            font-weight: 600;
        }

        .sidebar__element:hover{
            background-color: #E8F6F3;
            color: #34CAA5;
            cursor: pointer;
            font-weight: 600;
        }

        .active{
            background-color: #E8F6F3;
            color: #34CAA5;
            border-left: 5px solid #34CAA5;
        }
    }
</style>