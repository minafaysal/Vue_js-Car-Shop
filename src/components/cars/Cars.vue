<template>
  <div class="justify-content-evently row">
    
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/banner-1.jpg" class="d-block w-100" alt="banner-img">
      <div class="carousel-caption d-none d-md-block">
        <h5>Find Your Next Car</h5>
        <p>Check Our Services in 86 Country</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/banner-2.jpg" class="d-block w-100" alt="banner-img">
      <div class="carousel-caption d-none d-md-block">
        <h5>Find Your Next Car</h5>
        <p>Best Services wherever you want </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/banner-3.jpg" class="d-block w-100" alt="banner-img">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Check Our Lattest Brand New Cars</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>





<h1 class="title "> Check our Latest Collection in 2023</h1 >


    <div class="col-4 each-car" v-for="(eachCar,i) in carsInfo" :key="i">
      <img :src="getImageUrl(eachCar.name,eachCar.mainImage)" class="  rounded d-block mx-auto " width="280px" height="240px"/>
      <h4 class="text-center">{{eachCar.name}} |  {{eachCar.model}}</h4>

      <div class="float-start">
        <button type="button" class="btn btn-primary">{{eachCar.price}}</button>
      </div>
      <div class="float-end">
        <router-link :to="{ name: 'carInfo',
        params:{ carName:eachCar.name,carFileId:eachCar.fileNumber  } }" >
          <button type="button" class="btn btn-secondary">More Details</button>
        </router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "cars",
  components: {},
  data(){
    return {
        carsInfo:this.$attrs.carsData
    }
  },
  methods:{
    getImageUrl( foldername,imageName){
        let image =require.context ('@/assets/')
        return image('./'+foldername+'/'+imageName);
    }
  }
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

.title{
  padding-top: 25px;
}
</style>
