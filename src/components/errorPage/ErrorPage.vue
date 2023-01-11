<template>
    <div class="Error-Page">
    <img src="@/assets/Error.png" class="rounded d-block mx-auto h-400"/> 
    <div>
      <button type="button"  @click="goBack()" class="btn btn-secondary">GO Back</button>
      <button @click="goBack()"> GO Back</button>
    </div>
    </div>

  </template>
  
  <script>
  
  
  export default {
    name: "ErrorPage",
    components: {},
    methods:{
      goBack(){
        this.$router.push({name:"Home"})
      }
    }
  };
  </script>
  