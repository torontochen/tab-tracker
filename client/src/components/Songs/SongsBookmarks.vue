<template>
  <panel title="Bookmarks">
    <v-data-table
      :headers="header"
      :pagination.sync="pagination"
      :items="bookmarks">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          {{props.item.song.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.song.artist}}
        </td>
      </template>
    </v-data-table>
   </panel> 
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  data(){
    return {
      header:[
        {
          text:'Title',
          value:'title'
        },
        {
          text:'Artist',
          value:'title'
        }

      ],
      pagination:{
        sortBy:'createdAt',
        descending:true
      },
      bookmarks:[]
    }
  },
  computed:{
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted(){
    if (this.isUserLoggedIn){
      this.bookmarks = (await BookmarksService.index()).data
      //console.log(this.bookmarks)
    }
  }

}
</script>


<style scoped>

</style>