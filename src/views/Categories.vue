<template>
    <div class="categories-page">
      <cars :carsData="myCarsData"/>
    </div>
    
  </template>
  
  <script>
  

  import cars from '../components/cars/Cars.vue';
import carsJson from '../json/cars.json';
  
  const components={
  
  }
  export default {
    name: "Categories",
    components: {cars},
    data(){
      return{
        myCarsData:carsJson
      }
    }
  };
  </script>
  