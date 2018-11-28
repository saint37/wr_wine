<template>
  <div class="myfooter">
    <img :src="logo">
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      logo: require("../assets/logo.png"),
      msg: 'footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myfooter{
    padding: 40px;
    background: #191a1b;
    text-align: center;
/*    position: fixed;
    bottom: 0;
    width: 100%*/
}
.myfooter img{
    margin: 0 auto;
    width: 200px;
}
</style>
