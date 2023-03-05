import { createStore } from 'vuex'

const store = createStore({
    state() {
      return{
        active_sidebar_menu_item: ''
      }
    }
})

export default store;