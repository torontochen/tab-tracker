<template>

  <v-toolbar class="cyan" dark fixed>
    <v-toolbar-title class="mr-4 mb-0 pb-0">
      <router-link
      tag="span"
      :to="{name:'songs'}"
      class="home">TabTracker
      </router-link>
      </v-toolbar-title>
    <v-toolbar-items>
      <v-btn 
      flat
      dark
      :to="{name:'songs'}"
      >
      Browser
      </v-btn>      
    </v-toolbar-items>
    <v-spacer></v-spacer>

     <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-btn 
        
        flat 
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>
    </v-toolbar-items> 
     <v-toolbar-items  v-if="!$store.state.isUserLoggedIn"> 
      <v-btn 
       
        flat 
        dark
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>
    </v-toolbar-items> 
     <v-toolbar-items v-if="$store.state.isUserLoggedIn"> 
      <v-btn 
        
        flat 
        dark
        @click.once ="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
   
  </v-toolbar>

</template>

<script>
export default {

  methods: {
    
    logout() {
      this.$store.dispatch('setToken',null)
      this.$store.dispatch('setUser',null)
      //this.$store.state.isUserLoggedIn = false
      
      this.$router.push({name:'songs'})
      
    }
  }
}
</script>

<style scoped>
.home:hover {
  cursor:pointer;
  color:rgb(214, 171, 225);
}
</style>

 

