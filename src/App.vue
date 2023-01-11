<template>
  <div id="app" class="container">
    <Mainmenu />
    <router-view />
  </div>
</template>
<script>
import  Mainmenu  from "@/components/navbar/Mainmenu.vue";

export default ({
name:"App",
  components: {
    Mainmenu,
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
