<template>
  <div class="sidebar__container">
    <div class="sidebar__element-container">
        <div class="sidebar__element">
            2023
        </div>
        <div class="sidebar__element">
            2022
        </div>
        <div class="sidebar__element">
            2021
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'main-sidebar'
}
</script>

<style lang="scss" scoped>
    .sidebar__container{
        flex-shrink: 0;
        width: 15rem;
        background-color: #fff;
        box-shadow: 0px 4px 4px #DEE1E0;
        height: 100vh;

        .sidebar__element{
            padding: 0.8rem 2rem 0.8rem 2rem;
            color: #868585;
            font-weight: 600;
        }

        .sidebar__element:hover{
            background-color: #E8F6F3;
            color: #34CAA5;
            cursor: pointer;
            font-weight: 600;
        }
    }
</style>