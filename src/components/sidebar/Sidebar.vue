<template>
  <div>
    <ul class="sidebar-nav ">
      <router-link tag="li" v-for="(eachCar ,i) in carTypes"
       :key="i" :to="{ name: 'eachCar',params:{carType:eachCar.carName} }">
        <a>{{eachCar.carName  }}</a>
      </router-link>
     
    </ul>
  </div>
</template>
<script>
import carTypes from "@/json/carType.json"
export default {
  name: "sidebar",
  data(){
    return{
      carTypes:carTypes
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-nav {
 
  li {
    list-style: none;
    width: 100%;
    border-bottom: 2px solid #fff;
    background-color: #4c4f60;
   
    a {
      padding: 10px;
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      display: block;
      width: 100%;
    }
  }
}
</style>
