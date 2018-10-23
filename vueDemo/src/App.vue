<template>
  <div id="app">
    <img :src="staticImg + 'logo.png'" alt="logo">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      staticImg: '/static/img/'
    }
  }
}
</script>

<style>
</style>
