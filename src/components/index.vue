<template>
    <div>
        <Banner></Banner>
        <div class="wine">
            <div class="title">我&emsp;|&emsp;们&emsp;|&emsp;的&emsp;|&emsp;酒</div>
            <div class="winelist">
                <div class="col" v-for="img in imgArray">
                    <router-link :to="{path:img.url}"><img :src='img.img'>
                    <p>{{img.data}}</p></router-link>
                </div>
            </div> 
        </div>
        <div class="company">
            <div class="title">公&emsp;|&emsp;司&emsp;|&emsp;简&emsp;|&emsp;介</div>
        </div>
        <Advantage></Advantage>
    </div>
</template>

<script>
import Banner from '@/components/banner'
import Advantage from '@/components/advantage'
export default {
  name: 'index',
  components:{
    Banner,Advantage
  },
  data () {
    return {
      advantage: require("../assets/index/advantage.png"),
      imgArray: [
        {img:require("../assets/index/01.png"),data:"丹陛，Dompierre",url:"Dompierre"},
        {img:require("../assets/index/02.png"),data:"老爷车，Cauze",url:"Cauze"},
        {img:require("../assets/index/03.png"),data:"诺威，Nove",url:"Nove"},
        {img:require("../assets/index/04.png"),data:"榆树庄园，Saint-julien",url:"Julien"},
        {img:require("../assets/index/05.png"),data:"侯爵园，Marquisat",url:"Marquisat"},
        {img:require("../assets/index/06.png"),data:"卡玛萨克，Carmasac",url:"Carmasac"},
        {img:require("../assets/index/07.png"),data:"苏比洛，Subilaux",url:"Subilaux"}
      ]
    }
  },
  methods: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wine,.company{
    background: #191a1b;
}
.wine{
    text-align: center;
}
.winelist{
    display: block;
    width: 910px;
    height: 350px;
    margin: 0 auto;
}
.winelist .col{
    display: block;
    width: 130px;
    float: left;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}
.winelist img{
    position: relative;
    width: 100%;
    height: 306px;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}
.winelist .col:hover{
    position: relative;
    transform: scale(1.1,1.1);
    z-index: 999;
}
.winelist .col:hover img{
    border:3px solid #a4806e;  
}
.winelist p{
    color: #fff;
    position: relative;
    top: -40px;
    z-index: 1000;
}
.title{
    color: #bbb;
    font-size: 18px;
    text-align:center;
    padding: 50px 0;
}
.company{
    min-height: 400px;
}
</style>
