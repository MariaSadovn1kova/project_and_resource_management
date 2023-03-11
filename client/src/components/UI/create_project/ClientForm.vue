<template>
  <div class="client-form__container">
    <div class="left__container">
        <custom-input :input_title = "'ФИО'" class="input"/>
        <custom-input :input_title = "'Адрес'" class="input" type="text"/>
        <custom-input :input_title = "'Телефонный номер'" class="input"/>
        <custom-input :input_title = "'Электронная почта'" class="input"/>
    </div>
    <div class="right__container">
        <custom-textarea :textarea_title = "'Комментарий'" class="input"/>
    </div>
  </div>
</template>

<script>
export default {
    name: 'client-form'
}
</script>

<style lang="scss" scoped>
.client-form__container{
    padding: 3rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0px 0px 4px #c7cac9;
    display: flex;
    justify-content: space-between;
    .left__container{
        display: flex;
        flex-direction: column;

        .input{
            width: 25rem;
        }
    }
    .right__container{
        .input{
            width: 50rem;
            min-width: 20rem;
            height: 20rem;
        }
    }
}
</style>