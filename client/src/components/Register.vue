<template>
<v-layout  align-center>
  <v-flex xs6 offset-xs3 class="mt-0 pt-0">
    <panel title="Register">
              <form
                name="tab-tracker-form"
                autocomplete="off">
                <v-text-field                  
                  label="Email:"                                   
                  v-model="email"                   
                ></v-text-field>
                <v-text-field                  
                  label="Password:" 
                  type="password"                 
                  v-model="password"
                  autocomplete="new-password"
                ></v-text-field>                
              <br>              
              <div v-if="isError==true" class="danger-alert" v-html="error"></div>
              <v-btn 
              @click="register"
              class="cyan"
              dark
              >Register</v-btn>
              </form>
    </panel>
    
  </v-flex>
</v-layout> 
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email:'',
      password:'',
      error:null,
      isError:false
    }
  },
  // watch:{
  //   email(value){
  //     console.log(`email has changed ${value}`);
  //   }
  // },

  methods: {
   async register(){
     try {
      console.log(this.email+this.password) 
        const response = await AuthenticationService.register({

          email:this.email,
           password: this.password
       })
     
     this.$store.dispatch('setToken',response.data.token)
     this.$store.dispatch('setUser',response.data.user)
     this.$router.push({
       name:'songs'
     })
     this.isError = false
     //console.log(this.isError)
     } catch(error){
       this.error = error.response.data.error;
       this.isError = true
     }
      // console.log(response.data)
     
    }
  },
  components:{
 
  }
  // mounted(){
  //   setTimeout(function(){
  //     this.email = 'hello world'
  //   },2000)
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .danger-alert {
    color:red;
  }

 
</style>
