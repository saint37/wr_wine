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
        <div class="intro">
            <div class="t1">
                MARQUISAT<br>LA PEROUSE
            </div>
            <div class="t2">
                侯爵园珍藏 <span>|&ensp;布莱伊产区</span>
            </div>
            <div class="content">
                <p align="justify">{{para1}}</p>
                <p align="justify">{{para2}}</p>
                <p align="justify">{{para3}}</p>
                <p align="justify">{{para4}}</p>
            </div>
            <img :src="bottle" class="bottle"> 
            <img :src="map" class="map"> 
        </div>   
        <div class="divider">
            <div class="text">开创生物动力酿造技术典范</div>
            <div class="textsm">千分之六的高度，百分之百的用心</div>
            <img :src="divider"> 
        </div> 
        <div class="poem">
            <div class="content"><p v-html="poem"></p></div>
            <img :src="back2"> 
        </div> 
    </div>
</template>

<script>
export default {
  name: 'Marquisat',
  data () {
    return {
      back1: require("../assets/Marquisat/back1.png"),
      back2: require("../assets/Marquisat/back2.png"),
      title: require("../assets/Marquisat/title.png"),
      map: require("../assets/Marquisat/map.png"),
      bottle: require("../assets/Marquisat/bottle.png"),
      divider: require("../assets/Marquisat/divider.png"),
      icon: require("../assets/Marquisat/icon.png"),
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      para1: '侯爵园酒庄，开创生物动力技术的典范。酒庄位于吉伦特河右岸的布莱伊产区，布莱伊产区是波尔多最古老的产区之一，并且于上世纪七十年代的那场横扫波尔多的根瘤蚜病灾难中得以幸免，使得产区有很多超过50年树龄的老藤葡萄，甚至树龄达到70年以上，这是左岸难以见到的。',
      para2: '产区以北不远处就是大西洋入海口，站在十七世纪临河建造的军事要塞布莱伊堡放眼望去，流经此地的吉伦特河平缓而开阔，千百年形成的冲积平原让植被异常丰富和茂盛，小丘陵地貌让原始景观变得非常立体，山坡上到处是成片的薰衣草和洋甘菊花海，有人说过美丽的葡萄园才能酿出美酒，那么侯爵园的葡萄园可以称之为精致的美了。',
      para3: '酒庄周围有很多原始植物群落和未开发的地块，最为宝贵的是那一片酒庄自有的橡树林，提供了包括用作药物的橡树皮等优质生物动力资源，庄主还在林中放养了几只橡木黑猪，喂以酿造后残留的葡萄酒渣，漫步葡萄园中，无论是超大的植株间隙还是遍地不加清除的野草、野菜、蚕豆，茂密的草丛中悠然自在的黄牛、羊群和母鸡，一切都是动植物与人自然和谐共处的原野风光。',
      para4: '而生物动力技术远远不仅如此，讲究相互依存并且汇聚能量的原理，加以星相学说的运用，完美阐释了天地人合一而酿出葡萄酒，整个过程不加入任何人为干预，采用最传统的工艺流程，葡萄皮自有酵母菌发酵，火山硫抗氧化，地下酒桶成年，装瓶选择依据历法表的果日。',
      poem: '得益于远远超越有机标准的生物动力种植酿造工艺，<br/>产量极低的侯爵园特酿与生俱来不同风格：<br/>如红石榴般的酒色鲜艳而且光亮清沏，<br/>开瓶即是果香花香四溢，<br/>脑海里立即浮现出葡萄园中遍布的各种植物鲜花野果，<br/>好似有聚集的精华逐渐施展开来，<br/>酒体紧致丰满圆润，<br/>这是生物动力法汇聚各种自然能量的结果。<br/>单宁细腻而光滑，配以法国西南部特色烹饪的鸭肉，<br/>唇齿留香，余韵悠长，<br/>让人不知不觉沉浸在这片土地古老的回忆中。<br/>随着开瓶时间的推移，酒体开始呈现不一样的变化，<br/>以草本香料为主的香味开始占领主导，<br/>伴随有可可、烤肉、烘焙以及焦糖香味，粉墨登场……<br/>醒酒时间越来越长，酒体紧致程度却几乎一直保持最佳状态，<br/>生物动力技术最神奇的地方得以体现，<br/>并且在花日饮用时会花香弥漫，果日饮用，果香和酒体呈现极高水准。<br/>法国的有机葡萄种植只占总面积的百分之六，<br/>而生物动力技术种植仅有千分之六，<br/>因为管理种植成本极高，葡萄园小生态环境要求严苛，<br/>大部分为传统列级酒庄所有，<br/>所以侯爵园级别的有机生物动力葡萄酒是万分之几的比例，<br/>可谓是弥足珍贵。'
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
    background: #52042f;
    height: 400px;
}
.titlewrap img{
    position: absolute;
    width: 400px;
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
    width: 100px; 
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
    width: 350px;
    right: 100px;
    top: 50px;
}
.intro .map{
    position: absolute;
    width: 200px;
    right: 300px;
    top: 300px;
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
}
.intro .content p{
    margin-top: 10px;
    line-height: 20px;
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
.divider .textsm{
    padding-top: 30px;
    letter-spacing: 20px;
}
.divider img{
    width: 240px;
    position: absolute;
    top: 50px;
    left: calc(50% - 120px);
}
.poem {
    position: relative;
    text-align: center;
    color: #ddd;
    background: #191a1b;
}
.poem img{
    width: 100%;
}
.poem .content{
    width: 500px;
    position: absolute;
    top: 200px;
    left: calc(50% - 250px);
}
.poem .content p{
    font-size: 16px;
    line-height: 36px;
}
</style>
