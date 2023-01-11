<template>
  <div class="justify-content-evently row">
    <!-- {{ getCarInfo[0].id }} -->
    <div class="col-8">
      <div>  
        <img 
        v-if="mainImageIs.length<1 ? mainImageIs=getImageUrl(getCarInfo.name,getCarInfo.mainImage):mainImageIs"
        :src="mainImageIs" 
        class="rounded mx-auto d-block mainImage">
      </div>
      <div class="row">
        <img 
         v-for="(eachCarImage,x) in getCarInfo.images" 
        :src="getImageUrl(getCarInfo.name, eachCarImage)"  
         @click="mainImageIs=getImageUrl(getCarInfo.name, eachCarImage)"
          :key="x"  
           class="rounded mx-auto d-block thumbnailImage" />

      </div>
    </div>
    <div class="col-4">
      <h2>{{ getCarInfo.name }}  | {{ getCarInfo.model }}</h2>
      <p> Description : {{ getCarInfo.description }}</p>
      <p> File Number  : {{ getCarInfo.fileNumber}}</p>
      <p> year : {{ getCarInfo.year}}</p>
      <p> Uploaded on :  {{ getCarInfo.uploadedOn }}</p>
    </div>
  </div>

</template>

<script>


import getCarInfo from '@/json/cars.json';

export default {
  name: "CarInfo",
  data() {
    return {
      myCarDetails: getCarInfo,
      carName: this.$route.params.carName,
      carFileId: this.$route.params.carFileId,
      mainImageIs:""
    };
  },
  methods: {
    getImageUrl(foldername, imageName) {
      let image = require.context('@/assets/')
      return image('./' + foldername + '/' + imageName);
    }
  },
  computed: {
    getCarInfo() {

      let carData = "";
      for (let i = 0; i < this.myCarDetails.length; i++) {
        if (this.myCarDetails[i].fileNumber == this.carFileId) {
          carData = this.myCarDetails[i];
          break;
        }
      }
      return carData;
    },
  },
};

</script>
<style lang="scss" scoped>
.mainImage{
  width:650px;
  height:450px;
  border:10px solid #eee;
  margin-bottom:20px;
}
.thumbnailImage{
width:220px;

}
</style>
