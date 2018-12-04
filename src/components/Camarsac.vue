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
            CHATEAU DE<br>CAMARSAC
        </div>
        <div class="t2">
            卡玛萨克珍藏 <span>|&ensp;波尔多产区</span>
        </div>
        <div class="content">
            <p align="justify">{{para1}}</p>
        </div>
        <img :src="bottle" class="bottle"> 
    </div>  
    <div class="food">
        <div class="wrap">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">土地面积84公顷</div>                
        </div>
        <img :src="img1" class="foodimg" style="left: 0;"> 
        <div class="wrap" style="margin-left: -1px;">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">植株平均年龄30年</div>
        </div>
        <img :src="img2" class="foodimg" style="left: 50%;"> 
    </div>
    <div class="food">
        <div class="wrap">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">65%赤霞珠，35%美乐</div>                
        </div>
        <img :src="img3" class="foodimg" style="left: 0;"> 
        <div class="wrap">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">沙石，石灰石性质土壤</div>
        </div>
        <img :src="img4" class="foodimg" style="left: 50%;"> 
    </div>
    <div class="food">
        <div class="wrap">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">传统方式酿造</div>                
        </div>
        <img :src="img5" class="foodimg" style="left: 0;"> 
        <div class="wrap" style="background: rgba(0, 0, 0, 0);">
            <img :src="divider" class="dividerimg"> 
            <div class="foodc">贮藏12年以上</div>
        </div>
        <img :src="img6" class="foodimg" style="left: 50%;"> 
    </div>
    <div class="note">
            <img :src="back3"> 
            <div class="head">品酒 /<br/> 笔记</div>
            <div class="notec">
                <h5>酒体</h5>
                <p>亮丽的宝石红色。</p>
                <div class="line"></div>
                <h5>嗅觉</h5>
                <p>香气复杂而且浓郁，充满成熟黑色水果芳香,具有诱惑力，并且伴有香草气息收尾，令人陶醉其中。</p>
                <div class="line"></div>
                <h5>口感</h5>
                <p>酒体厚实，丹宁触感强烈，入口略为收紧，绝妙的酿造技艺给与此酒强大的陈年潜力。</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Camarsac',
  data () {
    return {
      show1:false,
      title: require("../assets/Camarsac/title.png"),
      back1: require("../assets/Camarsac/back1.png"),
      bottle: require("../assets/Camarsac/bottle.png"),
      divider: require("../assets/Marquisat/divider.png"),
      img1: require("../assets/Camarsac/img1.png"),
      img2: require("../assets/Camarsac/img2.png"),
      img3: require("../assets/Camarsac/img3.png"),
      img4: require("../assets/Camarsac/img4.png"),
      img5: require("../assets/Camarsac/img5.png"),
      img6: require("../assets/Camarsac/img6.png"),
      back3: require("../assets/Camarsac/back3.png"),
      para1: '卡玛萨克位于于圣爱美隆和波尔多之间的两海之间产区。卡玛萨克葡萄园土壤肥沃，地势恢宏，城堡位于葡萄园环绕的山丘顶峰，位于城堡之上可以俯瞰圣爱美隆全景，极为壮观。它是波尔多产区最为迷人的城堡之一，素有“波尔多黑王子”之称，它始建于十四世纪，曾在1377年被战争损坏。然而当时的庄主，康泰卢又重新修建了“黑王子”，随后卢锡安-卢顿成为了酒庄持有者，并在2007年传给了他的儿子提尔-卢顿。就像做菜一样，我们都想摆满一桌菜色招待朋友，我们追求不同的味道，不同的特点。酿酒也是一样的，提尔卢顿拥有最传统的卡玛萨克风土（粘土石灰石性质土壤）和他父亲卢锡安·卢顿买下的卢贝产区的风土（粘土沙砾性质土壤）。提尔·卢顿扩建了杜尔涅河畔(Dordogne)的葡萄园，他们特意选择了富含石灰石和粘土的优质土壤。在临近圣爱美隆200米的优质土地上，他们买下了培育年轻葡萄藤的土地（沙土，粘土），专门用来酿造他们清新口感的葡萄酒。',
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
    background: #805601;
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
.note{
    background: #191a1b;
    position: relative;
    min-height: 610px;
    padding: 100px;
    overflow: hidden;
    border-top: 5px solid #a7806d;
}
.note img{
    width: 100%;
    position: absolute;
    top: 0; left: 0;
}
.note .head{
    position: absolute;
    color: #a7806d;
    font-size: 26px;
}
.note .notec{
    position: absolute;
    top: 220px;
    color: #eee;
    font-size: 14px;
    width: 480px;
}
.note .notec h5{
    font-weight: bold;
    font-size: 16px;
}
.note .notec .line{
    width: 50px;
    height: 2px;
    background: #a7806d;
    margin: 20px 0;
}
</style>
