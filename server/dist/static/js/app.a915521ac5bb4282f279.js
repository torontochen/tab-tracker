webpackJsonp([1],{"58o7":function(t,e){},"7zck":function(t,e){},KuPP:function(t,e){},MUUj:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"cyan",attrs:{dark:"",fixed:""}},[n("v-toolbar-title",{staticClass:"mr-4 mb-0 pb-0"},[n("router-link",{staticClass:"home",attrs:{tag:"span",to:{name:"songs"}}},[t._v("TabTracker\n    ")])],1),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{flat:"",dark:"",to:{name:"songs"}}},[t._v("\n    Browser\n    ")])],1),t._v(" "),n("v-spacer"),t._v(" "),t.$store.state.isUserLoggedIn?t._e():n("v-toolbar-items",[n("v-btn",{attrs:{flat:"",dark:"",to:{name:"login"}}},[t._v("\n      Login\n    ")])],1),t._v(" "),t.$store.state.isUserLoggedIn?t._e():n("v-toolbar-items",[n("v-btn",{attrs:{flat:"",dark:"",to:{name:"register"}}},[t._v("\n      Sign Up\n    ")])],1),t._v(" "),t.$store.state.isUserLoggedIn?n("v-toolbar-items",[n("v-btn",{attrs:{flat:"",dark:""},on:{"~click":function(e){t.logout(e)}}},[t._v("\n      Log Out\n    ")])],1):t._e()],1)},staticRenderFns:[]};var a={name:"App",components:{pageHeader:n("VU/8")({methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"songs"})}}},r,!1,function(t){n("MUUj")},"data-v-154a2530",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",[e("page-header"),this._v(" "),e("v-content",[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var i=n("VU/8")(a,o,!1,function(t){n("jkbq")},null,null).exports,l=n("/ocq"),c=n("Xxa5"),u=n.n(c),d=n("exGp"),v=n.n(d),g=n("mtWM"),p=n.n(g),m=n("NYxO");n("424j");s.a.use(m.a);var f=new m.a.Store({strict:!0,state:{token:null,user:null,isUserLoggedIn:!1},mutations:{setToken:function(t,e){t.token=e,t.isUserLoggedIn=!!e},setUser:function(t,e){t.user=e}},actions:{setToken:function(t,e){(0,t.commit)("setToken",e)},setUser:function(t,e){(0,t.commit)("setUser",e)}}}),b=function(){return p.a.create({baseURL:"http://localhost:8081/",headers:{Authorization:"Bearer "+f.state.token}})},x=function(t){return b().post("register",t)},h=function(t){return b().post("login",t)},_={data:function(){return{email:"",password:"",error:null,isError:!1}},methods:{register:function(){var t=this;return v()(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t.email+t.password),e.next=4,x({email:t.email,password:t.password});case 4:n=e.sent,t.$store.dispatch("setToken",n.data.token),t.$store.dispatch("setUser",n.data.user),t.$router.push({name:"songs"}),t.isError=!1,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),t.error=e.t0.response.data.error,t.isError=!0;case 15:case"end":return e.stop()}},e,t,[[0,11]])}))()}},components:{}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":""}},[n("v-flex",{staticClass:"mt-0 pt-0",attrs:{xs6:"","offset-xs3":""}},[n("panel",{attrs:{title:"Register"}},[n("form",{attrs:{name:"tab-tracker-form",autocomplete:"off"}},[n("v-text-field",{attrs:{label:"Email:"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{attrs:{label:"Password:",type:"password",autocomplete:"new-password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("br"),t._v(" "),1==t.isError?n("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}):t._e(),t._v(" "),n("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.register}},[t._v("Register")])],1)])],1)],1)},staticRenderFns:[]};var w=n("VU/8")(_,k,!1,function(t){n("vF46")},"data-v-2fc18a1e",null).exports,y={data:function(){return{email:"",password:"",error:null,isError:!1}},methods:{login:function(){var t=this;return v()(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h({email:t.email,password:t.password});case 3:n=e.sent,t.isError=!1,t.$store.dispatch("setToken",n.data.token),t.$store.dispatch("setUser",n.data.user),t.$router.push({name:"songs"}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t.error=e.t0.response.data.error,t.isError=!0;case 14:case"end":return e.stop()}},e,t,[[0,10]])}))()}},components:{}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":""}},[t.$store.state.isUserLoggedIn?t._e():n("v-flex",{staticClass:"mt-0 pt-0",attrs:{xs6:"","offset-xs3":""}},[n("panel",{attrs:{title:"Log In"}},[n("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[n("v-text-field",{attrs:{label:"Email:"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{attrs:{label:"Password:",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("br"),t._v(" "),1==t.isError?n("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}):t._e(),t._v(" "),n("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.login}},[t._v("Log In")])],1)])],1)],1)},staticRenderFns:[]};var I=n("VU/8")(y,U,!1,function(t){n("oDb3")},"data-v-0e40ff0a",null).exports,$=n("Dd8w"),C=n.n($),q=function(t){return b().get("songs",{params:{search:t}})},L=function(t){return b().get("songs/"+t)},T=function(t){return b().post("songs",t)},E=function(t){return b().put("songs/"+t.id,t)},S={components:{},data:function(){return{songs:null}},watch:{"$route.query.search":{immediate:!0,handler:function(t){var e=this;return v()(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q(t);case 2:e.songs=n.sent.data;case 3:case"end":return n.stop()}},n,e)}))()}}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"cyan accent-2 mb-5",attrs:{slot:"action",fixed:"",fab:"",light:"",medium:"",dark:"",bottom:"",right:"",to:{name:"songs-create"}},slot:"action"},[n("v-tooltip",{attrs:{bottom:""}},[n("v-icon",{attrs:{slot:"activator"},slot:"activator"},[t._v("add")]),t._v(" "),n("span",[t._v("Add a song")])],1)],1),t._v(" "),n("panel",{attrs:{title:"Songs"}},t._l(t.songs,function(e){return n("div",{key:e.id,staticClass:"song"},[n("v-layout",[n("v-flex",{attrs:{xs6:""}},[n("div",{staticClass:"song-title"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"song-artist"},[t._v("\n          "+t._s(e.artist)+"\n        ")]),t._v(" "),n("div",{staticClass:"song-genre"},[t._v("\n          "+t._s(e.genre)+"\n        ")]),t._v(" "),n("v-btn",{staticClass:"cyan",attrs:{dark:"",to:{name:"song",params:{songId:e._id}}}},[t._v("\n          View\n        ")])],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("img",{staticClass:"album-image",attrs:{src:e.albumImageUrl}})])],1)],1)}))],1)},staticRenderFns:[]};var A,V=n("VU/8")(S,R,!1,function(t){n("hYHz")},"data-v-016ef139",null).exports,F=n("M4fF"),P={data:function(){return{search:""}},watch:{search:n.n(F).a.debounce((A=v()(u.a.mark(function t(e){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n={name:"songs"},""!==this.search&&(n.query={search:this.search}),this.$router.push(n);case 3:case"end":return t.stop()}},t,this)})),function(t){return A.apply(this,arguments)}),700),"$route.query.search":{immediate:!0,handler:function(t){this.search=t}}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{attrs:{title:"Search"}},[n("v-text-field",{attrs:{label:"Search by song title, artist, album, or genre"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)},staticRenderFns:[]};var j=n("VU/8")(P,M,!1,function(t){n("58o7")},null,null).exports,B=function(t){return b().get("bookmarks",{params:t})},O=function(t){return b().post("bookmarks",t)},W=function(t){return b().delete("bookmarks/"+t)},D={data:function(){return{header:[{text:"Title",value:"title"},{text:"Artist",value:"title"}],pagination:{sortBy:"createdAt",descending:!0},bookmarks:[]}},computed:C()({},Object(m.b)(["isUserLoggedIn","user"])),mounted:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isUserLoggedIn){e.next=4;break}return e.next=3,B();case 3:t.bookmarks=e.sent.data;case 4:case"end":return e.stop()}},e,t)}))()}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{attrs:{title:"Bookmarks"}},[n("v-data-table",{attrs:{headers:t.header,pagination:t.pagination,items:t.bookmarks},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.song.title)+"\n      ")]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.song.artist)+"\n      ")])]}}])})],1)},staticRenderFns:[]};var N=n("VU/8")(D,H,!1,function(t){n("lGWX")},"data-v-a2ca9d50",null).exports,Y=function(t){return b().get("histories",{params:t})},z=function(t){return b().post("histories",t)},G={data:function(){return{headers:[{text:"Title",value:"title"},{text:"Artist",value:"artist"}],pagination:{sortBy:"createdAt",descending:!0},histories:[]}},computed:C()({},Object(m.b)(["isUserLoggedIn","user"])),mounted:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isUserLoggedIn){e.next=4;break}return e.next=3,Y();case 3:t.histories=e.sent.data;case 4:case"end":return e.stop()}},e,t)}))()}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",{attrs:{title:"Recently Viewed Songs"}},[n("v-data-table",{attrs:{headers:t.headers,pagination:t.pagination,items:t.histories},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.song.title)+"\n      ")]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v("\n        "+t._s(e.item.song.artist)+"\n      ")])]}}])})],1)},staticRenderFns:[]};var J={components:{SongsPanel:V,SongsSearchPanel:j,SongsBookmarks:N,RecentlyViewedSongs:n("VU/8")(G,X,!1,function(t){n("WfDR")},null,null).exports},computed:C()({},Object(m.b)(["isUserLoggedIn"])),data:function(){return{songs:null}},methods:{},mounted:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t.songs=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[this.isUserLoggedIn?e("v-flex",{staticClass:"mt-5 mb-3 mr-1",attrs:{xs6:""}},[e("songs-bookmarks"),this._v(" "),e("recently-viewed-songs",{staticClass:"mt-2"})],1):this._e(),this._v(" "),e("v-flex",{staticClass:"mt-5 mb-3 ml-1",class:{xs12:!this.isUserLoggedIn,xs6:this.isUserLoggedIn},attrs:{xs6:""}},[e("songs-search-panel"),this._v(" "),e("songs-panel",{staticClass:"mt-1"})],1)],1)},staticRenderFns:[]};var Z=n("VU/8")(J,K,!1,function(t){n("Tic8")},"data-v-4f9d5380",null).exports,Q=n("fZjL"),tt=n.n(Q),et={components:{},data:function(){return{song:{title:null,artist:null,genre:null,album:null,albumImageUrl:null,youtubeId:null,lyrics:null,tab:null},error:null,required:function(t){return!!t||"Required."}}},methods:{create:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.error=null,tt()(t.song).every(function(e){return!!t.song[e]})){e.next=5;break}return t.error="please fill in all the required fields",e.abrupt("return");case 5:return e.prev=5,e.next=8,T(t.song);case 8:t.$router.push({name:"songs"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),console.log(e.t0);case 14:case"end":return e.stop()}},e,t,[[5,11]])}))()}},mounted:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t.songs=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":""}},[n("v-flex",{staticClass:"pt-2",attrs:{xs4:""}},[n("panel",{attrs:{title:"Song Metadata"}},[n("v-text-field",{attrs:{label:"Title:",required:"",rules:[t.required]},model:{value:t.song.title,callback:function(e){t.$set(t.song,"title",e)},expression:"song.title"}}),t._v(" "),n("v-text-field",{attrs:{label:"Artist:",required:"",rules:[t.required]},model:{value:t.song.artist,callback:function(e){t.$set(t.song,"artist",e)},expression:"song.artist"}}),t._v(" "),n("v-text-field",{attrs:{label:"Genre:",required:"",rules:[t.required]},model:{value:t.song.genre,callback:function(e){t.$set(t.song,"genre",e)},expression:"song.genre"}}),t._v(" "),n("v-text-field",{attrs:{label:"Album:",required:"",rules:[t.required]},model:{value:t.song.album,callback:function(e){t.$set(t.song,"album",e)},expression:"song.album"}}),t._v(" "),n("v-text-field",{attrs:{label:"Album Image Url:",required:"",rules:[t.required]},model:{value:t.song.albumImageUrl,callback:function(e){t.$set(t.song,"albumImageUrl",e)},expression:"song.albumImageUrl"}}),t._v(" "),n("v-text-field",{attrs:{label:"YouTube ID",required:"",rules:[t.required]},model:{value:t.song.youtubeId,callback:function(e){t.$set(t.song,"youtubeId",e)},expression:"song.youtubeId"}})],1)],1),t._v(" "),n("v-flex",{staticClass:"mt-0 pt-0 pl-2 pb-5 mb-1",attrs:{xs8:""}},[n("panel",{attrs:{title:"Song Structure"}},[n("v-text-field",{attrs:{label:"Tab:","multi-line":"",required:"",rules:[t.required]},model:{value:t.song.tab,callback:function(e){t.$set(t.song,"tab",e)},expression:"song.tab"}}),t._v(" "),n("v-text-field",{attrs:{label:"Lyrics","multi-line":"",required:"",rules:[t.required]},model:{value:t.song.lyrics,callback:function(e){t.$set(t.song,"lyrics",e)},expression:"song.lyrics"}})],1),t._v(" "),t.error?n("div",{staticClass:"danger-alert"},[t._v(t._s(t.error)+"\r\n   ")]):t._e(),t._v(" "),n("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.create}},[t._v("Create Song")])],1)],1)},staticRenderFns:[]};var st=n("VU/8")(et,nt,!1,function(t){n("KuPP")},"data-v-f7b430be",null).exports,rt={components:{},data:function(){return{song:{},bookmark:null}},computed:C()({},Object(m.b)(["isUserLoggedIn","user","route"])),watch:{song:function(){var t=this;return v()(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isUserLoggedIn){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,B({songId:t.song.id,userId:t.user.id});case 5:(n=e.sent.data).length&&(t.bookmark=n[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}},e,t,[[2,9]])}))()}},methods:{setAsBookmark:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.song._id),e.prev=1,e.next=4,O({songId:t.song._id});case 4:t.bookmark=e.sent.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}},e,t,[[1,7]])}))()},unsetAsBookmark:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(t.bookmark._id);case 3:t.bookmark=null,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}},e,t,[[0,6]])}))()}},mounted:function(){var t=this;return v()(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$store.state.route.params.songId,console.log(n),e.next=4,L(n);case 4:t.song=e.sent.data,t.isUserLoggedIn&&z({songId:n});case 6:case"end":return e.stop()}},e,t)}))()}},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{staticClass:"mt-1 pt-5 pl-2 mb-1",attrs:{"d-flex":""}},[n("panel",{attrs:{title:"Song Metadata"}},[n("v-layout",[n("v-flex",[n("v-flex",{staticClass:"song-title"},[t._v("\n                         "+t._s(t.song.title)+"\n                       ")]),t._v(" "),n("v-flex",{staticClass:"song-artist"},[t._v("\n                         "+t._s(t.song.artist)+"\n                       ")]),t._v(" "),n("v-flex",{staticClass:"song-genre"},[t._v("\n                         "+t._s(t.song.genre)+"\n\n                       ")]),t._v(" "),n("v-btn",{staticClass:"cyan",attrs:{dark:"",to:{name:"song-edit",params:function(){return{songId:t.song.id}}}}},[t._v("\n                         Edit\n                       ")]),t._v(" "),t.isUserLoggedIn&&!t.bookmark?n("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.setAsBookmark}},[t._v("\n                       Set As Bookmark\n                   ")]):t._e(),t._v(" "),t.isUserLoggedIn&&t.bookmark?n("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.unsetAsBookmark}},[t._v("\n                       Unset As Bookmark\n                   ")]):t._e()],1),t._v(" "),n("v-flex",{attrs:{wrap:""}},[n("img",{staticClass:"album-image",attrs:{src:t.song.albumImageUrl}}),t._v(" "),n("hr"),t._v("\n                       "+t._s(t.song.album)+"\n                     ")])],1)],1)],1),t._v(" "),n("v-flex",{staticClass:"mt-1 pt-5 pl-2 mb-1",attrs:{xs6:""}},[n("panel",{attrs:{title:"YouTube Video"}},[n("youtube",{attrs:{"video-id":t.song.youtubeId,"player-width":500,"player-height":200}})],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{staticClass:"pt-2 pl-2 pb-5 mb-1",attrs:{xs6:"",wrap:""}},[n("panel",{attrs:{title:"Lyrics"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.song.lyrics,expression:"song.lyrics"}],attrs:{readonly:""},domProps:{value:t.song.lyrics},on:{input:function(e){e.target.composing||t.$set(t.song,"lyrics",e.target.value)}}})])],1),t._v(" "),n("v-flex",{staticClass:"pt-2 pl-2 pb-5 mb-1",attrs:{xs6:"",wrap:""}},[n("panel",{attrs:{title:"Tabs"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.song.tab,expression:"song.tab"}],attrs:{readonly:""},domProps:{value:t.song.tab},on:{input:function(e){e.target.composing||t.$set(t.song,"tab",e.target.value)}}})])],1)],1)],1)},staticRenderFns:[]};var ot=n("VU/8")(rt,at,!1,function(t){n("lTLb")},"data-v-a8646d14",null).exports,it={components:{},data:function(){return{song:{title:null,artist:null,genre:null,album:null,albumImageUrl:null,youtubeId:null,lyrics:null,tab:null},error:null,required:function(t){return!!t||"Required."}}},methods:{save:function(){var t=this;return v()(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.error=null,tt()(t.song).every(function(e){return!!t.song[e]})){e.next=5;break}return t.error="Please fill in all the required fields.",e.abrupt("return");case 5:return n=t.$store.state.route.params.songId,e.prev=6,e.next=9,E(t.song);case 9:t.$router.push({name:"song",params:{songId:n}}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.log(e.t0);case 15:case"end":return e.stop()}},e,t,[[6,12]])}))()}},mounted:function(){var t=this;return v()(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.$store.state.route.params.songId,e.next=4,L(n);case 4:t.song=e.sent.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()}},lt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":""}},[n("v-flex",{staticClass:"pt-2",attrs:{xs4:""}},[n("panel",{attrs:{title:"Song Metadata"}},[n("v-text-field",{attrs:{label:"Title",required:"",rules:[t.required]},model:{value:t.song.title,callback:function(e){t.$set(t.song,"title",e)},expression:"song.title"}}),t._v(" "),n("v-text-field",{attrs:{label:"Artist",required:"",rules:[t.required]},model:{value:t.song.artist,callback:function(e){t.$set(t.song,"artist",e)},expression:"song.artist"}}),t._v(" "),n("v-text-field",{attrs:{label:"Genre",required:"",rules:[t.required]},model:{value:t.song.genre,callback:function(e){t.$set(t.song,"genre",e)},expression:"song.genre"}}),t._v(" "),n("v-text-field",{attrs:{label:"Album",required:"",rules:[t.required]},model:{value:t.song.album,callback:function(e){t.$set(t.song,"album",e)},expression:"song.album"}}),t._v(" "),n("v-text-field",{attrs:{label:"Album Image Url",required:"",rules:[t.required]},model:{value:t.song.albumImageUrl,callback:function(e){t.$set(t.song,"albumImageUrl",e)},expression:"song.albumImageUrl"}}),t._v(" "),n("v-text-field",{attrs:{label:"YouTube ID",required:"",rules:[t.required]},model:{value:t.song.youtubeId,callback:function(e){t.$set(t.song,"youtubeId",e)},expression:"song.youtubeId"}})],1)],1),t._v(" "),n("v-flex",{staticClass:"mt-0 pt-0 pl-2 pb-5 mb-1",attrs:{xs8:""}},[n("panel",{staticClass:"ml-2",attrs:{title:"Song Structure"}},[n("v-text-field",{attrs:{label:"Tab","multi-line":"",required:"",rules:[t.required]},model:{value:t.song.tab,callback:function(e){t.$set(t.song,"tab",e)},expression:"song.tab"}}),t._v(" "),n("v-text-field",{attrs:{label:"Lyrics","multi-line":"",required:"",rules:[t.required]},model:{value:t.song.lyrics,callback:function(e){t.$set(t.song,"lyrics",e)},expression:"song.lyrics"}})],1),t._v(" "),t.error?n("div",{staticClass:"danger-alert"},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e(),t._v(" "),n("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.save}},[t._v("\n      Save Song\n    ")])],1)],1)},staticRenderFns:[]};var ct=n("VU/8")(it,lt,!1,function(t){n("vT/x")},"data-v-7eb9e28f",null).exports;s.a.use(l.a);var ut=new l.a({mode:"history",routes:[{path:"/register",name:"register",component:w},{path:"/login",name:"login",component:I},{path:"/songs",name:"songs",component:Z},{path:"/songs/create",name:"songs-create",component:st},{path:"/songs/:songId",name:"song",component:ot},{path:"/songs/:songId/edit",name:"song-edit",component:ct},{path:"*",redirect:"songs"}]}),dt=n("3EgV"),vt=n.n(dt),gt=n("9JMe"),pt=(n("7zck"),n("5/be")),mt=n.n(pt),ft={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"white elevation-8"},[n("v-toolbar",{staticClass:"cyan",attrs:{flat:"",dense:"",dark:""}},[n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),t._t("action")],2),t._v(" "),n("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("\n            No slot content defined\n          ")])],2)],1)},staticRenderFns:[]};var bt=n("VU/8")({props:["title"]},ft,!1,function(t){n("WMCw")},"data-v-725a2b98",null).exports;s.a.use(mt.a),s.a.config.productionTip=!1,s.a.use(vt.a),s.a.component("panel",bt),Object(gt.sync)(f,ut),new s.a({el:"#app",router:ut,store:f,components:{App:i},template:"<App/>"})},Tic8:function(t,e){},WMCw:function(t,e){},WfDR:function(t,e){},hYHz:function(t,e){},jkbq:function(t,e){},lGWX:function(t,e){},lTLb:function(t,e){},oDb3:function(t,e){},vF46:function(t,e){},"vT/x":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a915521ac5bb4282f279.js.map