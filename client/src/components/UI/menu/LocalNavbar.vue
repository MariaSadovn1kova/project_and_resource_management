<template>
  <div class="local-navbar__container">
    <div class="local-navbar__item">
        Все проекты
    </div>
    <div class="local-navbar__item">
        Текущие проекты
    </div>
    <div class="local-navbar__item">
        Завершенные проекты
    </div>
  </div>
</template>

<script>
export default {
    name: 'local-navbar'
}
</script>

<style lang="scss" scoped>
.local-navbar__container{
    display: flex;
    border-bottom: 1px solid #D8D8D8;
    padding: 1rem 0 1rem 0;
    .local-navbar__item{
        margin-right: 2rem;
    }
    .local-navbar__item:hover{
        color: #34CAA5;
        cursor: pointer;
    }
}
</style>