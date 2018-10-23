<template>
    <div class="div01">im Component01</div>
</template>

<script>
    export default {
        name: "Component01",
      data() {
          return {

          }
      },
      created() {
        this.Toast('im created');
      },
    }
</script>

<style scoped lang="scss">
  $color: red;
  .div01{
    @include display-flex();
    color: $color;
  }
</style>
