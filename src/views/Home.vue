<template>
  <div class="home row ">
<div class="col-lg-2">
<sidebar />
</div>
<div class="col-lg-10">
  <cars :carsData="myCarsData"/>
</div>
  </div>
</template>

<script>
import sidebar from '../components/sidebar/Sidebar.vue';
import cars from '../components/cars/Cars.vue';
import carsJson from '../json/cars.json';

export default {
  name: "Home",
  data(){
    return {
      
      myCarsData:carsJson
    }
  },
  components: {sidebar,cars},
};

</script>
