<template>
  <button class="custom__btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'custom-button'
}
</script>

<style lang="scss" scoped>
    .custom__btn{
        padding: 1rem 1.8rem;
        background: none;
        border: none;
        color: white;
        background-color: #34CAA5;
        border-radius: 2rem;
        width: 12rem;
        font-weight: 600;
    }

    .custom__btn:hover{
        cursor: pointer;
        box-shadow: 0 0 0.1rem 0.1rem #9be7d7;
    }
</style>