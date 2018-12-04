<template>
  <div>
    <div class="titlewrap">
        <transition
            name="fade"
            enter-active-class="fadeInLeft"
            leave-active-class="fadeOut"
        >
            <div class="logo" v-if="show1">
                <img :src="title"> 
            </div>
        </transition>
    </div> 
    <div class="backimg">
        <img :src="back1"> 
    </div> 
    <div class="icon">
        <img :src="icon"> 
    </div> 
    <div class="divider">
        <img :src="back2" class="dividerback"> 
        <div class="text">法国总统最爱的红酒</div>
        <div class="textsm">怎样确定你的品味与法国总统是否相同？</div>
        <img :src="divider" class="dividerimg"> 
    </div> 
    <div class="cert">
        <img :src="certimg"> 
        <div class="t2">
            爱丽舍宫<br/>唯一指定宴席葡萄酒
        </div>
        <p>现任法国总统马克龙先生邀请Michel AROLDJ先生，<br/>携丹陛红葡萄酒入选爱丽舍宫亲笔邀请函。</p>
    </div>
    <div class="intro">
        <div class="t1">
            DOMPIERRE<br>PAUILLAC
        </div>
        <div class="t2">
            丹陛珍藏 <span>|&ensp;波亚克产区</span>
        </div>
        <div class="content">
            <p align="justify">{{para1}}</p>
            <p align="justify">{{para2}}</p>
        </div>
        <img :src="bottle" class="bottle"> 
        <img :src="map" class="map"> 
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Dompierre',
  data () {
    return { 
      show1:false,
      title: require("../assets/Dompierre/title.png"),
      back1: require("../assets/Dompierre/back1.png"),
      icon: require("../assets/Dompierre/icon.png"),
      divider: require("../assets/Marquisat/divider.png"),
      back2: require("../assets/Dompierre/back2.png"),
      certimg: require("../assets/Dompierre/cert.png"),
      map: require("../assets/Dompierre/map.png"),
      bottle: require("../assets/Dompierre/bottle.png"),
      para1:'坐落于波亚克产区的小山丘上，毗邻拉图酒庄、男爵酒庄及女爵酒庄，Michel AROLDI被这片优质的土地所吸引，并将期收入囊中。混合着鹅卵石的砾石质山丘，对酿造的精密控制，使得皮埃尔庄园的佳酿在短短几年间声名鹊起。',
      para2:'不仅入选法国一众米其林星级餐厅的酒单，米其林三星餐厅L’Ambroisie，米其林三星餐厅L’Arpege，米其林二星餐厅Le Grand Vefour，米其林二星餐厅Le Fouquets等。并于2015年选为的二十一届联合国气候变化大会（COP21）期间，各国首脑的特供酒款。2016年，法国总统府邸--爱丽舍宫首席侍酒师的青睐，为皮埃尔庄园辉煌的战绩留下了浓墨重彩的一笔，由些皮埃尔庄园的葡萄酒成功入选爱丽舍宫，成为法国总统御用葡萄酒。'
    }
  },
  methods: {
      animate:function () {
        let _self = this;
        setTimeout(function(){
            _self.show1 = true;    
        },1000);
      }
    },
  mounted() {
    this.animate()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titlewrap{
    position: relative;
    width: 100%;
    background: #a30023;
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
.backimg,.icon{
    background: #191a1b;
    text-align:center;
}
.backimg img{
    width: 100%;
}
.icon img{
    margin: 50px;
    width: 100px; 
}
.divider{
    height: 500px;
    background: #191a1b;
    text-align:center; 
    position: relative;
    padding: 50px;
    color: #eee;
}
.divider .dividerback{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.divider .text{
    font-size: 22px;
    font-family: "STKaiti";
    position: absolute;
    width: 240px;
    top: 188px;
    left: calc(50% - 120px);
}
.divider .textsm{
    padding-top: 30px;
    letter-spacing: 20px;
    position: absolute;
    top: 220px;
    left: calc(50% - 300px);
    width: 600px;
}
.divider .dividerimg{
    width: 240px;
    position: absolute;
    top: 178px;
    left: calc(50% - 120px);
}
.cert{
    background: #191a1b;
    color: #eee;
    padding: 80px 50px 50px 550px;
}
.cert img{
    width: 400px;
    left: 100px;
    margin-top: -200px;
    position: absolute;
}
.cert .t2{
    color: #a58070;
    font-size: 24px;
    font-family: "STKaiti";
}
.cert p{
    line-height: 20px;
}
.intro{
    background: #000;
    position: relative;
    min-height: 600px;
    color: #eee;
    padding: 100px;
    font-size: 14px;
}
.intro .bottle{
    position: absolute;
    width: 450px;
    right: 100px;
    top: 50px;
}
.intro .map{
    position: absolute;
    width: 250px;
    right: 400px;
    top: 250px;
}
.intro .t1{
    color: #7e071c;
    font-size: 24px;
    font-family: "STKaiti";
}
.intro .t2{
    color: #a58070;
    font-size: 24px;
    font-family: "STKaiti";
}
.intro .t2 span{
    color: #eee;
    font-size: 16px;
    font-family: "STKaiti";
}
.intro .content{
    width: 500px;
    margin-top: 20px;
}
.intro .content p{
    margin-top: 10px;
    line-height: 28px;
}
</style>
