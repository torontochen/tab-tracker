<template>
   <div>
    

   
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
   

    <div 
      v-for="song in songs"
      class="song"
      :key="song.id">

      <v-layout>
        <v-flex xs6>
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
              name: 'song', 
              params: {                
                  songId: song._id                               
              }
            }">
            View
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
  </div>

</template>

<script>
import SongsService from '@/services/SongsService'

export default {
   components:{

    
  },

  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
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
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>