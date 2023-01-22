<template>
  <div class="row footer ">
    <div class="col-lg-4   ">
      <ul class="footer-bar">
        <li>Office Education</li>
        <li>AppSource</li>
        <li>Careers</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div class="col-lg-4">
      <ul class="footer-bar">
        <li>New Collection</li>
        <li>Best Sellers</li>
        <li>New Trending</li>
        <li>Maintainance</li>
        <li>Check Your Car</li>
      </ul>
    </div>
    <div class="col-lg-4">
      <ul class="footer-bar">
        <li>Our Driving School</li>
        <li>Appliction</li>
        <li>Join us</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
    <div class="text-center text">
        All Rights Recieves @ 2023
    </div>
  </div>
  
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer{
    background-color: #4c4f60;

}
.footer-bar {
 margin-bottom :35px;
 li {
    margin-top:15px;
   list-style: none;
   width: 100%;
   background-color: #4c4f60;
   color: #fff;
   
  
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
.text{
    color:#fff;
}
</style>
