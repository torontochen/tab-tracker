<template>
 <div id="app">
  <v-app>
    <page-header></page-header>
    <v-content>    
      <v-container fluid fill-height>        
        <router-view/>
      </v-container>
    </v-content>      
  </v-app>
</div>
</template>

<script>
import pageHeader from '@/components/Header.vue'
export default {
  
  name: 'App',
  components:{
    pageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>
