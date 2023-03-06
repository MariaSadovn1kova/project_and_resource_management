<template>
  <div class="textarea-container">
    <label for="my-input" class="label">{{textarea_title}}</label>
    <textarea class="my-textarea" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
export default {
    name: 'custom-textarea',
    props: {
        textarea_title: ''
    }
}
</script>

<style lang="scss" scoped>
.textarea-container{
    display: flex;
    flex-direction: column;
    width: 15rem;
    margin: 0.5rem 0 0.5rem 0;
    .my-textarea{
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