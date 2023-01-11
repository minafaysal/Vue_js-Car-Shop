<template>
     <div class="justify-content-evently row">
    <div class="col-4 each-car" v-for="(eachCar,i) in getCarInfo" :key="i">
      <img :src="getImageUrl(eachCar.name,eachCar.mainImage)" class="  rounded d-block mx-auto " width="350px" height="250px"/>
      <h3 class="text-center">{{eachCar.name}} |  {{eachCar.model}}</h3>

      <div class="float-start">
        <button type="button" class="btn btn-primary">{{eachCar.price}}</button>
      </div>
      <div class="float-end">
        <router-link :to="{ name: 'carInfo',params:{ carName:eachCar.name,carFileId:eachCar.fileNumber} }" >
          <button type="button" class="btn btn-secondary">More Details</button>
        </router-link>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import carsJson from '@/json/cars.json';

  export default {
    name: "eachCar",
    data(){
      return {
        myCarDetails:carsJson,
        carType:this.$route.params.carType
      }
    },
    components: {},
    methods:{
    getImageUrl( foldername,imageName){
        let image =require.context ('@/assets/')
        return image('./'+foldername+'/'+imageName);
    }
  },
    computed: {
    getCarInfo() {

      let carData = [];
      for (let i = 0; i < this.myCarDetails.length; i++) {
        if (this.myCarDetails[i].name == this.carType) {
          carData.push( this.myCarDetails[i]);
          break;
        }
      }
      return carData;
    },
  },
  };
  </script>
  <style lang="scss" scoped>
  .each-car {
  padding: 10px;
  margin-bottom: 10px;
  border:3px solid #eee;
  box-sizing: border-box;
  border-radius: 9px;

  img {
    width: 300 px;
    height: 200 px;
    margin-bottom: 10px;
  }
}
.img{
    width: 100 px;
    height: 100 px;
}
  </style>
  