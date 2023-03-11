<template>
  <div class="foundation-info__container">
    <div class="left__container">
      <div class="foundation-type__container">
        <div class="foundation-type__item">
          <img src="@/assets/foundation__types/foundation__type1.svg" class="foundation-type__img">
        </div>
        <div class="foundation-type__item">
          <img src="@/assets/foundation__types/foundation__type2.svg" class="foundation-type__img">
        </div>
        <div class="foundation-type__item">
          <img src="@/assets/foundation__types/foundation__type3.svg" class="foundation-type__img">
        </div>
        <div class="foundation-type__item">
          <img src="@/assets/foundation__types/foundation__type4.svg" class="foundation-type__img">
        </div>
      </div>
      <div class="foundation-type__container">
        <div class="foundation-type__item">
          <img src="@/assets/foundation__types/foundation__type5.svg" class="foundation-type__img">
        </div>
        <div class="foundation-type__item">
          <img src="@/assets/foundation__types/foundation__type6.svg" class="foundation-type__img">
        </div>
        <div class="foundation-type__item">
          <img src="@/assets/foundation__types/foundation__type7.svg" class="foundation-type__img">
        </div>
      </div>
    </div>
    <div class="right__container">

    </div>
  </div>
</template>

<script>
export default {
    name: 'foundation-info'
}
</script>

<style lang="scss" scoped>
.foundation-info__container{
  display: flex;
  .foundation-type__container{
    display: flex;
    margin-bottom: 2rem;
    .foundation-type__item{
      width: 7rem;
      height: 7rem;
      background-color: #FFEDE9;
      border: 1px solid #FF594B;
      border-radius: 1rem;
      padding: 1.7rem;
      margin-right: 2rem;
    }
    .foundation-type__item:hover{
      cursor: pointer;
      background-color: #fcdfd8;
    }
  }
}
</style>