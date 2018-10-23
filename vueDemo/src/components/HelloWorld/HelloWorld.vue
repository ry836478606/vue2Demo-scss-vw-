<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 class="ignore"></h2>
    <div class="example">111px</div>
    <div class="two-px">bbb</div>
    <img class="img1" :src="img1">
    <mt-switch :value.sync="value">开关</mt-switch>
    <div aspectratio w-188-246></div>
    <router-link to="/component01" tag="div">前往component01</router-link>
  </div>
</template>

<script>
  import Vue from 'vue';
  import img1 from './img/pic_com_detail@2x.png';
  import {MessageBox, Switch } from 'mint-ui';
  Vue.component(Switch.name, Switch);

  export default {
    name: 'HelloWorld',
    data () {
      return {
        value: true,
        staticImg: '/static/img/',
        img1: img1,
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.$nextTick(function () {
        MessageBox('aa', 'bb');
      })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  [aspectratio] {
    position: relative;
  }
  [aspectratio]::before {
    content: '';
    display: block;
    width: 1px;
    margin-left: -1px;
    height: 0;
  }
  [aspectratio-content] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  [w-188-246] {
    width: 188px;
    background-color: red;
  }
  [w-188-246] {
    aspect-ratio: '188:246';
  }
  h1, h2 {
    font-weight: normal;
  }
  h2.ignore{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 20px;
    height: 20px;
    margin: 0 auto;
    background: red;
    border-radius: 9999px;
  }
  .example{
    width: 50%;
    margin: 0 auto;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-image: svg(1px-border param(--color #00b1ff)) 2 0 stretch;
  }
  .two-px{
    margin-top: 10px;
    border: 1px solid #00b1ff;
  }
  .img1{
    width: 100px;
  }
</style>
