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
                MARQUISAT<br>LA PEROUSE
            </div>
            <div class="t2">
                侯爵园珍藏 <span>|布莱伊产区</span>
            </div>
            <div class="content">
                <p align="justify">{{para1}}</p>
            </div>
            <img :src="bottle" class="bottle"> 
            <img :src="map" class="map"> 
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
    color: #fff;
}
.divider .dividerback{
    position: absolute;
    top: 0;
    left: 0;
}
.divider .text{
    font-size: 18px;
    font-family: "STKaiti";
    position: absolute;
    width: 200px;
    top: 188px;
    left: calc(50% - 101px);
}
.divider .textsm{
    padding-top: 20px;
    letter-spacing: 20px;
    position: absolute;
    top: 220px;
    left: calc(50% - 250px);
    width: 500px;
}
.divider .dividerimg{
    width: 200px;
    position: absolute;
    top: 180px;
    left: calc(50% - 100px);
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
    color: #fff;
    font-size: 16px;
    font-family: "STHeiti";
}
.intro .content{
    width: 500px;
    margin-top: 20px;
}
.intro .content p{
    margin-top: 10px;
}
</style>
