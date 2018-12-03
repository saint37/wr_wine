<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Dompierre',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titlewrap{
    position: relative;
    width: 100%;
    background: #04011f;
    height: 400px;
}
.titlewrap img{
    position: absolute;
    width: 220px;
    top: 100px;
    left: 100px;
}
.backimg,.icon{
    background: #191a1b;
    text-align:center;
}
</style>
