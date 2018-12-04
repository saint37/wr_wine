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
    <div class="poem">
        <div class="content"><p v-html="poem"></p></div>
        <img :src="back2"> 
    </div>
    <div class="divider">
        <div class="text">老爷子最爱老爷车和酒</div>
        <img :src="divider" class="dividerimg"> 
        <img :src="img1" class="imgs" style="margin-right: 100px;"> 
        <img :src="img2" class="imgs"> 
    </div> 
    <div class="intro">
        <div class="t1">
            CHATEAU DU CAUZE <br>CUVÉE SANDRA
        </div>
        <div class="t2">
            老爷车珍藏 <span>|&ensp;圣艾美隆产区</span>
        </div>
        <div class="content">
            <p align="justify" v-html="para1"></p>
        </div>
        <img :src="bottle" class="bottle"> 
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Cauze',
  data () {
    return {
      show1:false,
      title: require("../assets/Cauze/title.png"),
      back1: require("../assets/Cauze/back1.png"),
      back2: require("../assets/Cauze/back2.png"),
      divider: require("../assets/Cauze/divider.png"),
      bottle: require("../assets/Cauze/bottle.png"),
      img1: require("../assets/Cauze/img1.png"),
      img2: require("../assets/Cauze/img2.png"),
      para1: '凯泽桑德拉城堡紧邻拉朗波美侯的小山顶上，<br/>城堡周围风景秀丽，空气清新。<br/>还有一个值得一提的是这个车库酒庄真的有车，<br/>完全是博物馆级别的Chateau Du Cauze酒庄，<br/>满足了你所有看车的欲望，<br/>所有老爷车都可以开动，庄主用一生时间收藏的绝世珍品，<br/>能够把车保养的精致如新，<br/>酒庄的车库葡萄酒也是美艳无双。',
      poem: '老爷车酒庄正式名称应该是凯泽酒庄，<br/>因为庄主布鲁诺·拉伯特以博物馆规格收藏着数十辆具有特别意义的珍贵老爷车，<br/>并且酒庄还出产一款稀有的车库酒：桑德拉(Sandra)<br/>大家更习惯称这款车库酒为老爷车车库酒。<br/><br/>凯泽桑德拉城堡建于一个城堡的废墟之上，<br/>百年战争使这个强大的城堡广厦倾颓。<br/>1622年，作为市政官吏的勒·杜克·德卡兹定居于此，<br/>直到1626年迁出城堡。<br/>而后，城堡接连易主直到 1986 年。<br/>终于，来自毗邻的圣艾美隆山峰产区的一个当地非常显赫的拉伯特家族<br/>从荷兰人手中彻底买下凯泽桑德拉城堡，<br/>从此凯泽桑德拉城堡有了最终的归属。<br/><br/>每年丰收时，<br/>用来酿造桑德拉佳酿的葡萄是凯泽桑德拉城堡最美丽的葡园中<br/>精挑细选出的最优质的葡萄。<br/>而后，这款酒利用热敏酒槽传统工艺酿造，<br/>经过冷浸渍3周，发酵酿成。<br/>70%于橡木桶中陈酿 12—18 个月，1/3 新橡木桶，1/3 一年用橡木桶。<br/>正因为严苛的葡萄筛选，桑德拉佳酿年产非常有限，异常珍贵，<br/>而酿酒师传统和创新的酿造技术和<br/>酿造理念使这款酒成为波尔多车库酒的杰出代表。<br/>布鲁诺·拉伯特庄主将这款酒视若珍宝，<br/>并于其冠有膝下最宠爱的独生女桑德拉的贞名。<br/>酒庄风土属于典型的圣艾米利永核心产区特点，<br/>桑德拉是庄主冠予此车库酒自己远在加拿大爱女的贞名，<br/>以托思念之情。'
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
    background: #274855;
    height: 400px;
}
.titlewrap img{
    position: absolute;
    width: 320px;
    top: 100px;
    left: 100px;
}
.backimg{
    background: #191a1b;
    text-align:center;
}
.backimg img{
    width: 100%;
    display: block;
}
.poem {
    position: relative;
    text-align: center;
    color: #ddd;
    background: #191a1b;
}
.poem img{
    width: 100%;
    height: 1000px;
}
.poem .content{
    width: 800px;
    position: absolute;
    top: 100px;
    left: calc(50% - 400px);
}
.poem .content p{
    font-size: 14px;
    line-height: 30px;
}
.divider{
    background: #191a1b;
    text-align:center; 
    position: relative;
    padding: 60px;
    color: #eee;
}
.divider .text{
    font-size: 20px;
    font-family: "STKaiti";
}
.divider .dividerimg{
    width: 500px;
    position: absolute;
    top: 75px;
    left: calc(50% - 250px);
}
.divider .imgs{
	width: 200px;
	margin-top: 50px;
}
.intro{
    background: #000;
    position: relative;
    min-height: 600px;
    color: #fff;
    padding: 100px;
}
.intro .bottle{
    position: absolute;
    width: 450px;
    right: 180px;
    top: 50px;
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
    color: #eee;
    font-size: 14px;
}
.intro .content p{
    margin-top: 10px;
    line-height: 28px;
}
</style>
