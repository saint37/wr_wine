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
    <div class="intro">
        <div class="t1">
            CHATEAU <br>LES ORMES
        </div>
        <div class="t2">
            榆树庄园珍藏 <span>|&ensp;圣朱利安产区</span>
        </div>
        <div class="content">
            <p align="justify" v-html="para1"></p>
        </div>
        <img :src="bottle" class="bottle"> 
    </div>  
    <div class="grid1">
	    <div class="divider">
	        <div class="text">酿造技术</div>
	        <div class="textsm">人工采收，传统方式恒温发酵，33%新橡木桶中陈酿</div>
	        <img :src="divider" class="dividerimg"> 
	    </div> 
        <img :src="img1" class="gridimg"> 
    </div>
    <div class="grid2">
	    <img :src="img2" class="gridimg"> 
	    <div class="divider">
	        <div class="text">品尝笔记</div>
	        <div class="textsm">非常优雅令人愉悦的一款酒，带有圆润如丝的单宁</div>
	        <img :src="divider" class="dividerimg"> 
	    </div> 
    </div>
    <div class="grid3">
	    <div class="divider">
	        <div class="text">美食搭配</div>
	        <div class="textsm">牛排，三文鱼和烤鸭</div>
	        <img :src="divider" class="dividerimg"> 
	    </div> 
        <img :src="img3" class="gridimg"> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Julien',
  data () {
    return {
      show1:false,
      title: require("../assets/Julien/title.png"),
      back1: require("../assets/Julien/back1.png"),
      bottle: require("../assets/Julien/bottle.png"),
      divider: require("../assets/Julien/divider.png"),
      img1: require("../assets/Julien/img1.png"),
      img2: require("../assets/Julien/img2.png"),
      img3: require("../assets/Julien/img3.png"),
      para1: '榆树庄园拥有圣-朱利安产区最精华的土地，<br/>拥有和龙船酒庄相同的土壤。<br/>这个只有1.5公顷的小家族酒庄的葡萄酒非常难寻，<br/>是所有葡萄酒行家的珍藏。<br/>榆树庄园的葡园座落于圣朱利安产区最美丽的砾石质小山丘上，<br/>这个小山丘90%的葡园都归列级庄所有。<br/>榆树庄园的葡萄酒圆润而丹宁强劲，<br/>带有这片山丘独有的风格印记。',
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
    background: #325d4b;
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
.divider{
    text-align:center; 
    position: relative;
    padding: 160px 0;
    color: #eee;
    height: 100%;
}
.divider .text{
    font-size: 28px;
    font-family: "STKaiti";
}
.divider .textsm{
    padding-top: 10px;
    font-size: 16px;
}
.divider .dividerimg{
    width: 340px;
    position: absolute;
    top: 180px;
    left: calc(50% - 170px);
}
.grid1,.grid2,.grid3{
	height: 400px;
	overflow: hidden;
}
.grid1{
	background: #325d4b;	
}
.grid2{
	background: #075c56;	
}
.grid3{
	background: #006636;	
}
.grid1 .divider,.grid2 .divider,.grid3 .divider{
	width: 50%;
	float: left;
}
.grid1 img,.grid2 img,.grid3 img{
	width: 50%;
	float: left;	
}
.gridimg{
    height: 100%;
}
.grid3 .textsm{
	letter-spacing: 22px;
}
</style>
