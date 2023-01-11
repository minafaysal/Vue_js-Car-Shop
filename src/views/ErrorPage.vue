<template>
    <div class="error-page">
        <ErrorPage/>
    </div>
  </template>
  
  <script>
  
  import ErrorPage from "@/components/errorPage/ErrorPage.vue";

  const components={
    ErrorPage,
  }
  export default {
    name: "ErrorPageView",
    components,
  };
  </script>
  