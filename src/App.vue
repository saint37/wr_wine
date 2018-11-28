<template>
  <div id="app">
<!--     <router-link to="/">index</router-link>
    <router-link to="/test">test</router-link> -->
    <transition
        name="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
    >
        <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/common/footer';
import 'vue2-animate/dist/vue2-animate.min.css';
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style>

</style>
