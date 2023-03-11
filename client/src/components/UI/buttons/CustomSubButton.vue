<template>
  <button class="custom-subbutton__container">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'custom-subbutton'
}
</script>

<style lang="scss" scoped>
.custom-subbutton__container{
    background-color: #FFEDE9;
    border: none;
    padding: 1rem;
    border-radius: 2rem;
    color: #34CAA5;
    font-weight: 600;
}
.custom-subbutton__container:hover{
    cursor: pointer;
    background-color: #fcdfd8;
}
</style>