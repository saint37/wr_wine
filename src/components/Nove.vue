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
            <div class="text">拉莫宝爵龙绝品大师作</div>
            <div class="textsm">触摸天鹅绒质感，寻味红酒本质</div>
            <img :src="divider" class="dividerimg"> 
        </div> 
        <div class="intro">
            <div class="t1">
                PAR LE CHATEAU<br>LAMOTHE-BERGERON
            </div>
            <div class="t2">
                诺威珍藏 <span>|&ensp;上梅多克产区</span>
            </div>
            <div class="content">
                <p align="justify">{{para1}}</p>
            </div>
            <img :src="bottle" class="bottle"> 
            <img :src="map" class="map"> 
        </div>  
        <div class="note">
            <img :src="back3"> 
            <div class="head">品酒 /<br/> 笔记</div>
            <div class="notec">
                <h5>酒体</h5>
                <p>亮丽的紫红色酒裙反射出宝石般的光芒。</p>
                <div class="line"></div>
                <h5>嗅觉</h5>
                <p>香气复杂，突出表现为成熟的水果香气，香调有覆盆子，黑樱桃，桑椹和蓝莓。尾调有惹人爱的巧克力香气。</p>
                <div class="line"></div>
                <h5>口感</h5>
                <p>入口圆润，单宁清爽，浓郁的果香味随后绽放，随着口腔温度的上升，香草，木质香气更加凸显，余味优雅且持久。</p>
            </div>
        </div>
        <div class="foodinfo">
            美&emsp;|&emsp;食&emsp;|&emsp;搭&emsp;|&emsp;配
        </div>
        <div class="food">
            <img :src="food1" class="foodimg"> 
            <img :src="food2" class="foodimg" style="left: 50%;"> 
            <div class="wrap">
                <img :src="divider" class="dividerimg"> 
                <div class="foodc">黑椒牛柳</div>                
            </div>
            <div class="wrap">
                <img :src="divider" class="dividerimg"> 
                <div class="foodc">法式奶酪</div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Nove',
  data () {
    return {
      show1:false,
      title: require("../assets/Nove/title.png"),
      back1: require("../assets/Nove/back1.png"),
      icon: require("../assets/Nove/icon.png"),
      back2: require("../assets/Nove/back2.png"),
      divider: require("../assets/Marquisat/divider.png"),
      map: require("../assets/Nove/map.png"),
      bottle: require("../assets/Nove/bottle.png"),
      back3: require("../assets/Nove/back3.png"),
      para1: '诺威是拉莫宝爵龙酒庄最后一个诞生的珍藏酒款。作为19世界最主要的超级中级庄之一并持续至今，从始至今，拉莫宝爵龙酒庄都是上梅多克产区的代表。作为负有盛名的农学家杰克·德·宝爵龙坚持酒庄以他名字的一部分命名。从1796年开始，这个古老的议会通过革命终于回归葡园，并致力于各项葡园文化的探索和试验。依偎在玛歌村和圣·朱利安的土地旁，作为独有的沿河酒庄，拥有基隆大区最优质的砾石土壤。这片神奇的土地能够拥有完美的排水系统赋予葡萄平衡的酸度……这款佳酿由一级庄金钟酒庄赫赫有名的酿酒师Hubert de BOÜARD酿造。',
      food1: require("../assets/Nove/food1.png"),
      food2: require("../assets/Nove/food2.png"),
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
.backimg img{
    width: 100%;
}
.icon img{
    margin: 50px;
    width: 180px; 
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
    left: calc(50% - 250px);
    width: 500px;
}
.divider .dividerimg{
    width: 240px;
    position: absolute;
    top: 178px;
    left: calc(50% - 120px);
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
.note{
    background: #191a1b;
    position: relative;
    min-height: 610px;
    padding: 100px;
    overflow: hidden;
}
.note img{
    width: 100%;
    position: absolute;
    top: 0; left: 0;
}
.note .head{
    position: absolute;
    color: #800319;
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
    background: #800319;
    margin: 20px 0;
}
.foodinfo{
    background: #191a1b;
    text-align: center;
    font-size: 20px;
    padding: 50px;
    color: #ddd;
}
.food{
    background: #191a1b;
    height: 400px;
    overflow: hidden;
    position: relative;
}
.food .foodimg{
    width: 50%;
    height: 100%;
    position: absolute;
}
.food .wrap{
    float:left;
    width: 50%;
    text-align: center;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    height: 400px;
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
}
.food .wrap:hover{
    background: rgba(0, 0, 0, 0);
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
</style>
