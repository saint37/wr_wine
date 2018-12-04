<template>
  <div class="adv">
    <div class="title">万&emsp;|&emsp;锐&emsp;|&emsp;旗&emsp;|&emsp;下&emsp;|&emsp;红&emsp;|&emsp;酒&emsp;|&emsp;优&emsp;|&emsp;势</div>
    <div class="divider"><img :src="divider"></div>
    <img :src="advantage">
  </div>
</template>

<script>
export default {
  name: 'Advantage',
  data () {
    return {
      advantage: require("../assets/index/advantage.png"),
      divider: require("../assets/index/divider.png")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adv{
    background: #c6c7c8;
    text-align: center;
    padding: 50px;
}
.adv img{
    width: 620px;
}
.divider{
    padding: 30px 0;
}
.divider img{
    width: 400px;
}
.title{
    color: #666;
    font-size: 18px;
}
</style>
