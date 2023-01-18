<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>


<script>
  import Navbar from './components/Navbar.vue'

  export default {
    name: "App",
    components:{
      Navbar,
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
  }
</style>
