import { createStore } from 'vuex'

const store = createStore({
    state() {
      return{
        active_sidebar_project_item: '',
        active_sidebar_create_project_item: '',
        active_sidebar_matertials_item: ''
      }
    }
})

export default store;