<template>
<v-layout  align-center>
  <v-flex xs4 class="pt-2">
    <panel title="Song Metadata">
      <v-text-field                  
        label="Title:"
        required  
        :rules="[required]"              
        v-model="song.title"
      ></v-text-field> 

      <v-text-field                  
        label="Artist:" 
        required 
        :rules="[required]"           
        v-model="song.artist"
      ></v-text-field> 

      <v-text-field                  
        label="Genre:"
        required
        :rules="[required]"               
        v-model="song.genre"
      ></v-text-field> 

      <v-text-field                  
        label="Album:"
        required
        :rules="[required]"               
        v-model="song.album"
      ></v-text-field> 

      <v-text-field                  
        label="Album Image Url:"
        required 
        :rules="[required]"             
        v-model="song.albumImageUrl"
      ></v-text-field> 

       <v-text-field
          label="YouTube ID"
          required 
          :rules="[required]"
          v-model="song.youtubeId"
        ></v-text-field>
    </panel>
  </v-flex>
  
  
 <v-flex xs8 class="mt-0 pt-0 pl-2 pb-5 mb-1">
   <panel title="Song Structure" >
      <v-text-field
        label="Tab:"                  
        multi-line 
         required 
        :rules="[required]"             
        v-model="song.tab"
      ></v-text-field> 

       <v-text-field
          label="Lyrics"
          multi-line
          required 
          :rules="[required]"
          v-model="song.lyrics"
        ></v-text-field>
   </panel>
   
   <div
   class="danger-alert" v-if="error">{{error}}
   </div>
   <v-btn
   dark
   class="cyan"
   @click="create"
   >Create Song</v-btn>
 </v-flex>
</v-layout> 
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  components:{
  
  },
  data(){
    return {
        song : {
          title:null,
          artist:null ,
          genre: null,
          album: null,
          albumImageUrl: null,
          youtubeId: null,
          lyrics:null,     
          tab: null
        },
        error:null,
          required:(value)=>!!value || 'Required.'
     
     }
  },
  methods:{
    async create(){
      this.error = null
      const areAllFieldsFilledIn = Object
      .keys(this.song)
      .every(key=>!!this.song[key])
      if (!areAllFieldsFilledIn){
        this.error = 'please fill in all the required fields'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name:'songs'
        })
    }
  catch(err){
    console.log(err)
        }
     }    
  },

  async mounted(){
      this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .danger-alert{
    color:red;
  }
 
</style>


