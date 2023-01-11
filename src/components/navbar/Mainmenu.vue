<template>
  <div>
    <ul class="nav">
      
 
       <img src="@/assets/logo.png">
     
      <router-link
        tag="li"
        :to="{ name: 'Home', params: { pageTitle: 'Main page' } }"
      >
        <a>Home</a>
      </router-link>
      <router-link tag="li" :to="{ name: 'Categories' }">
        <a>Categories</a>
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'About', params: { pageTitle: 'About' } }"
      >
        <a>About</a>
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'Contact', params: { pageTitle: 'Contact' } }"
      >
        <a>Contact</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Mainmenu",
};
</script>

<style lang="scss" scoped>
.nav {
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  background-color: #4c4f60;

 

  li {
    display: inline-block;
    margin: 0 5px;
    border-bottom: 3px solid #4c4f60;; 
  

    a {
      padding: 10px;
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      display: block; 
      
    }
  }

  li:hover {
    border-bottom: 3px solid #fff;
  }

  li.router-link-exact-active {
    border-bottom: 3px solid #fff;

    a {
      color: #fff;
    }
  }
  img {
    width:100px;
   margin-right:837px;
   
  }
}
</style>
