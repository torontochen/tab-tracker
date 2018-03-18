<template>
<v-layout  align-center>
  <v-flex xs6 offset-xs3 >
     
        <v-btn
            fixed
            fab
            slot="action"
            light
            medium
            dark
            bottom
            right
            :to="{name:'songs-create'}"
            class="cyan accent-2 mb-5">
            <v-tooltip bottom>
              <v-icon slot="activator">add</v-icon>
                   <span>Add a song</span>
            </v-tooltip>
            </v-btn>
       
    
    <panel title="Songs">
      
      
            
      <div v-for="song in songs" :key="song.id" class="song">
        <v-layout>
          <v-flex xs-6>
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-genre">
              {{song.genre}}
            </div>
             <v-btn
              dark
              class="cyan"
              :to="{
                name:'song',
                params:{
                  songId:song.id
                  }
                }"
              >View</v-btn>
              <hr>
            
          </v-flex>

          <v-flex xs6>
            <img class="album-image"
            :src="song.albumImageUrl"/>
          </v-flex>
        </v-layout>

         
      </div>
    </panel>
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
      songs:[]
    }
  },
  methods:{
   
  },
  async mounted(){
      this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .album-image{
    width:50%;
    margin:0 auto;
  }

  .song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}

 
</style>

