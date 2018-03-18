<template>
<v-layout>
  <v-flex xs6 class="mt-5 mb-3 mr-1" v-if="isUserLoggedIn">
    <songs-bookmarks />
    <recently-viewed-songs class="mt-2" />
  </v-flex>
  <v-flex xs6 class="mt-5 mb-3 ml-1" :class="{
    xs12:!isUserLoggedIn,
    xs6:isUserLoggedIn}">
    <songs-search-panel />
     <songs-panel class="mt-1"/>     
  </v-flex>
</v-layout> 
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import {mapState} from 'vuex'
export default {
  components:{
  
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
   computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data(){
    return {
      songs:null
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

