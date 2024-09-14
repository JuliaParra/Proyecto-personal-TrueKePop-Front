<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue';

</script>

<template>
  <div id="app">
    <body >
      <Header />
        <main class="content">
          <router-view /> 
      
        </main>
    <Footer />
  </body>
  </div>
</template>

<style scoped>


#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
 
  
}


.content {
  flex:1;
  
  
}
</style>
