<template>
  <div class="input__container">
    <label for="my-input" class="label">{{input_title}}</label>
    <input class="my-input" type="text">
  </div>
</template>

<script>
export default {
    name: 'custom-input',
    props: {
        input_title: ''
    }
}
</script>

<style lang="scss" scoped>
.input__container{
    display: flex;
    flex-direction: column;
    width: 15rem;
    margin: 0.5rem 0 0.5rem 0;
    .my-input{
        background-color: #F6FFFD;
        border: 1px solid #34CAA5;
        border-radius: 0.4rem;
        padding: 0.5rem;
        outline: none;
        margin-top: 0.2rem;
    }
    .label{
        color: #868585;
    }
}
</style>