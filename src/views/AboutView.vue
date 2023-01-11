<template>
  <div class="about-view-page">
<About/>

  </div>
</template>

<script>

import About from '@/components/about/About.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
export default {
  name: "AboutView",
  components: {About, Sidebar},
};
</script>
