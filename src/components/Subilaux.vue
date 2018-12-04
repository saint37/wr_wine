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
            CHATEAU <br>SUBILAUX
        </div>
        <div class="t2">
            苏彼洛珍藏 <span>|&ensp;布莱伊产区</span>
        </div>
        <div class="content">
            <p align="justify">{{para1}}</p>
        </div>
        <img :src="bottle" class="bottle"> 
    </div> 
    <div class="food">
        <div class="wrap">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">庄主海维·拉迪</div>                
        </div>
        <img :src="img1" class="foodimg" style="left: 0;"> 
        <div class="wrap" style="margin-left: -1px;">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">土地面积10公顷</div>
        </div>
        <img :src="img2" class="foodimg" style="left: 50%;"> 
    </div>
    <div class="food">
        <div class="wrap">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">植株平均年龄30年</div>                
        </div>
        <img :src="img3" class="foodimg" style="left: 0;"> 
        <div class="wrap">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">黏土、石灰石性质土壤</div>
        </div>
        <img :src="img4" class="foodimg" style="left: 50%;"> 
    </div>
    <div class="food">
        <div class="wrap">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">50%赤霞珠，30%梅乐，20%品丽珠</div>                
        </div>
        <img :src="img5" class="foodimg" style="left: 0;"> 
        <div class="wrap" style="background: rgba(0, 0, 0, 0);">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">传统方式酿造</div>
        </div>
        <img :src="img6" class="foodimg" style="left: 50%;"> 
    </div>
    <div class="divider">
        <div class="text">获奖情况</div>
        <img :src="divider2" class="dividerimg"> 
        <div class="award" style="margin-right: 100px;">
        	<img :src="award1" class="imgs"> 
        	<p>世界女性竞赛金奖</p>
        </div>
        <div class="award" style="margin-right: 100px;">
        	<img :src="award2" class="imgs"> 
        	<p>吉尔伯特·盖拉德竞赛金奖</p>
        </div>
        <div class="award">
        	<img :src="award3" class="imgs"> 
        	<p>里昂竞赛金奖</p>
        </div>
    </div> 
    <div class="backimg">
        <img :src="back2"> 
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Subilaux',
  data () {
    return {
      show1:false,
      title: require("../assets/Subilaux/title.png"),
      back1: require("../assets/Subilaux/back1.png"),
      bottle: require("../assets/Subilaux/bottle.png"),
      divider: require("../assets/Marquisat/divider.png"),
      divider2: require("../assets/Subilaux/divider2.png"),
      img1: require("../assets/Subilaux/img1.png"),
      img2: require("../assets/Subilaux/img2.png"),
      img3: require("../assets/Subilaux/img3.png"),
      img4: require("../assets/Subilaux/img4.png"),
      img5: require("../assets/Subilaux/img5.png"),
      img6: require("../assets/Subilaux/img6.png"),
      para1: '苏彼洛酒庄位于波尔多布莱伊产区。罗马人和希腊人曾经是这里第一批葡萄种植的先驱，之后逐步进行酿造和葡萄酒贸易的扩张和发展。得益于临近海洋的优越地理位置，交通极便利，这极大地促进了该产区在葡萄种植方向上的发展，并早早领先于梅多克产区。这个产区的葡萄酒通常具有美丽诱人的色泽，丰富的水果气息和细腻丝滑的口感。',
      award1: require("../assets/Subilaux/award1.png"),
      award2: require("../assets/Subilaux/award2.png"),
      award3: require("../assets/Subilaux/award3.png"),
      back2: require("../assets/Subilaux/back2.png"),
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
    background: #ff4702;
    height: 450px;
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
.food{
    background: #191a1b;
    height: 400px;
    overflow: hidden;
    position: relative;
}
.food .foodimg{
    width: 50%;
    position: absolute;
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
}
.food .wrap{
    float:left;
    width: 50%;
    text-align: center;
    position: relative;
    z-index: 999;
    height: 400px;
    background: rgba(0, 0, 0, 0.5);
    transition: all 1s ease;
    -webkit-transition: all 1s ease;    
}
.food .wrap:hover{
    background: rgba(0, 0, 0, 0);
}
.food .wrap:hover +.foodimg{
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    -ms-filter: grayscale(0%);
    -o-filter: grayscale(0%);
    filter: grayscale(0%);
}
.food .wrap .foodc{
    color: #eee;
    font-size: 24px;
    margin-top: -64px;
}
.food .wrap .dividerimg{
    margin-top: 150px;
    width: 300px;
    height: 80px;
}
.divider{
    background: #191a1b;
    text-align:center; 
    position: relative;
    padding: 60px;
    color: #eee;
    height: 400px;
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
.divider .award{
	width: 200px;
	margin-top: 50px;
	display: inline-block;
}
.divider .award .imgs{
	width: 100px;
}
.divider .award p{
	padding-top: 20px;
	font-size: 16px;
	color: #eee;
}
</style>
