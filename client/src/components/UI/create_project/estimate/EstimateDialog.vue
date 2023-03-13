<template>
   <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'estimate-dialog',
    props: {
      show: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      hideDialog() {
        this.$emit('update:show', false)
      }
    }
}
</script>

<style lang="scss" scoped>
.dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    position: fixed;
    display: flex;
    .dialog__content{
      padding: 4rem 3rem;
      margin: auto;
      background: white;
      border-radius:0.5rem;
      height: 22rem;
      width: 70rem;
  }
}
</style>