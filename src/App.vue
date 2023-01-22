<template>
  <div id="app" >
    <Mainmenu />
    <div class="container">
      
      <router-view />
    </div>
    <Footer/>
  </div>
</template>
<script>
import  Mainmenu  from "@/components/navbar/Mainmenu.vue";
import  Footer  from "@/components/footer/footer.vue";
export default ({
name:"App",
  components: {
    Mainmenu,Footer
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
