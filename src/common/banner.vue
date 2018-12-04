<template>
    <div class="banner">
        <img :src="banner">
        <div class="content">
            <transition
                name="fade"
                enter-active-class="fadeInDown"
                leave-active-class="fadeOut"
            >
                <div class="logo" v-if="show1">
                    <img :src="logo"> 
                </div>
            </transition>
            <transition
                name="fade"
                enter-active-class="fadeInDown"
                leave-active-class="fadeOut"
            >
                <img :src="divider" v-if="show2">
            </transition>
            <transition
                name="fade"
                enter-active-class="fadeInDown"
                leave-active-class="fadeOut"
            >
                <div class="eng" v-if="show3">
                    <img :src="eng">
                </div>
            </transition>
            <transition
                name="fade"
                enter-active-class="fadeInDown"
                leave-active-class="fadeOut"
            >
                <div class="chs" v-if="show4">  
                    <!-- <img :src="chs">    -->
                    只要能够怀念，就足够幸福。——谬塞
                </div>  
            </transition>       
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      logo: require("../assets/logo.png"),
      banner: require("../assets/index/banner.png"),
      chs: require("../assets/index/chs.png"),
      eng: require("../assets/index/eng.png"),
      divider: require("../assets/index/divider.png"),
      show1:false,
      show2:false,
      show3:false,
      show4:false,
    }
  },
  methods: {
    animate:function () {
        let _self = this;
        setTimeout(function(){
            _self.show1 = true;    
        },1000);
        setTimeout(function(){
            _self.show2 = true;    
        },1500);
        setTimeout(function(){
            _self.show3 = true;    
        },2000);
        setTimeout(function(){
            _self.show4 = true;    
        },2500);
    }
  },
  mounted() {
    this.animate()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
    position: relative;
    width: 100%;
    background: #191a1b;
}
.banner img{
    width: 100%;
}
.content{
    position: absolute;
    width: 400px;
    left: calc(50% - 200px);
    top: 200px;
    text-align:center;
}
.logo{
    width: 200px;
    margin: 0 auto 40px auto;
}
.eng{
    margin: 40px auto 10px auto;
}
.chs{
    text-align: left;
    font-family: 'STKaiti';
    font-size: 20px;
    color: #fff;
}
</style>
