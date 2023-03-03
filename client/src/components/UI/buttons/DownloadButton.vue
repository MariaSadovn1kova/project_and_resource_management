<template>
  <button class="download-button__container">
    <div class="download-button__text">XLSX</div>
    <img class="download-button__picture" src="@/assets/download__picture.svg">
  </button>
</template>

<script>
export default {
    name: 'download-button'
}
</script>

<style lang="scss" scoped>
.download-button__container{
    background-color: #E8F6F3;
    width: 7.5rem;
    height: 3rem;
    display: flex;
    border-radius: 5rem;
    padding: 1rem 1.5rem 1rem 1.5rem;
    justify-content: space-between;
    border: none;

    .download-button__text{
        color: #34CAA5;
        font-weight: 600;
    }

    .download-button__picture{
        width: 1.5rem;
    }
}

.download-button__container:hover{
    cursor: pointer;
}

</style>