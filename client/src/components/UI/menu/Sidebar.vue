<template>
  <div class="sidebar__container">
    <div class="sidebar__element-container">
        <div :class="{'active' :this.active == sidebar_menu_item.title}" class="sidebar__element" 
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
            active: this.default_active_item
        }
    },
    props: {
        sidebar_menu_items: {
            type: Array,
            required: true
        },
        page: '',
        default_active_item: ''
    },
    methods: {
        changeActiveSidebar(newActive) {
            this.active = newActive
            if (this.page === 'Project'){
                this.$store.state.active_sidebar_project_item = newActive
            } else if (this.page === 'Materials'){
                this.$store.state.active_sidebar_create_project_item = newActive
            } else if (this.page === 'CreateProject'){
                this.$store.state.active_sidebar_matertials_item = newActive
            }
        }
    },

    mounted(){
        this.changeActiveSidebar(this.active);
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
            background-color: #FFEDE9;
            color: #FF594B;
            cursor: pointer;
            font-weight: 600;
        }

        .active{
            background-color: #FFEDE9;
            color: #FF594B;
            border-left: 5px solid #FF594B;
        }
    }
</style>