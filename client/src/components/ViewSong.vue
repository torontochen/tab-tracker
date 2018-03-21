<template>
  <v-container fluid> 
   
          <v-layout row  >
            <v-flex class="mt-1 pt-5 pl-2 mb-1" d-flex>
              <panel title="Song Metadata">
                  <v-layout>
                      <v-flex>
                        <v-flex class="song-title">
                          {{song.title}}
                        </v-flex>
                        <v-flex class="song-artist">
                          {{song.artist}}
                        </v-flex>
                        <v-flex class="song-genre">
                          {{song.genre}}

                        </v-flex>
                         <v-btn
                          dark
                          class="cyan"
                          :to="{
                            name: 'song-edit', 
                            params () {
                              return {
                                songId: song.id
                              }
                            }
                          }">
                          Edit
                        </v-btn>

                    <v-btn
                        v-if="isUserLoggedIn && !bookmark"
                        dark
                        class="cyan"
                        @click="setAsBookmark">
                        Set As Bookmark
                    </v-btn>

                    <v-btn
                        v-if="isUserLoggedIn && bookmark"
                        dark
                        class="cyan"
                        @click="unsetAsBookmark">
                        Unset As Bookmark
                    </v-btn>
      

                      </v-flex>

                      <v-flex wrap>
                        <img class="album-image"
                        :src="song.albumImageUrl"/>
                        <hr>
                        {{song.album}}
                      </v-flex>
                </v-layout>
              </panel>
          </v-flex>
        
            
          
            <v-flex xs6  class="mt-1 pt-5 pl-2 mb-1">
              <panel title="YouTube Video">
                <youtube
                  :video-id="song.youtubeId"
                  :player-width="500"
                  :player-height="200">
                </youtube>
              </panel>
          </v-flex>
          

          
            
          </v-layout >

            <v-layout row >
                <v-flex xs6 class="pt-2 pl-2 pb-5 mb-1" wrap>
                        <panel title="Lyrics">
                          <textarea 
                          readonly
                          v-model="song.lyrics">
                          </textarea>
                        </panel>                
                  </v-flex> 
                <v-flex xs6 class="pt-2 pl-2 pb-5 mb-1" wrap>
                        <panel title="Tabs">
                          <textarea 
                          readonly
                          v-model="song.tab">
                          </textarea>
                        </panel>                
                  </v-flex> 
            </v-layout> 

 </v-container>
</template>

<script>
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'
import BookmarksService from  '@/services/BookmarksService'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  components:{
    
  },
  data(){
    return {
        song : {},
        bookmark:null
     }
  },
  computed:{
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id,
          userId:this.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
//  async  mounted(){
   
//     const bookmark = await BookmarksService.index({
//       songId:1,
//       userId:1
//     })
    
//     console.log('bookmark',bookmark)
//   },
  methods:{
   async setAsBookmark () {
      console.log(this.song._id)
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song._id          
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark._id)
        //console.log(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },

  async mounted(){
      
      const songId = this.$store.state.route.params.songId
      console.log(songId)
      this.song = (await SongsService.show(songId)).data

     if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId        
      })
    } 
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
 
textarea {
  width:100%;
  font-family:monospace;
  border:none;
  height: 300px;
  border-style:none;
  border-color:transparent;
  overflow: auto;
  padding:40px;
}

 .album-image{
    width:50%;
    margin:0 auto;
  }
</style>


