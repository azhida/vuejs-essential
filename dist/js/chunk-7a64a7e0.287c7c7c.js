(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a64a7e0"],{"0a5b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"blog-container"},[e("div",{staticClass:"blog-pages"},[e("router-view"),e("div",{staticClass:"col-md-3 main-col pull-left"},[e("div",{staticClass:"panel panel-default corner-radius"},[e("div",{staticClass:"panel-body text-center topic-author-box blog-info"},[e("div",{staticClass:"image blog-cover"},[e("router-link",{attrs:{to:"/"+t.userName}},[e("img",{staticClass:"avatar-112 avatar img-thumbnail",attrs:{src:t.userAvatar}})])],1),e("div",{staticClass:"blog-name"},[e("h4",[e("router-link",{attrs:{to:"/"+t.userName}},[t._v(t._s(t.userName)+" 的专栏")])],1)]),e("hr"),e("router-link",{attrs:{to:"/"+t.userName}},[e("li",{staticClass:"list-group-item"},[e("i",{staticClass:"text-md fa fa-list-ul"}),t._v(" 专栏文章（"+t._s(t.articleNum)+"）")])])],1)])])],1)])},r=[],i=e("5530"),u=(e("b0c0"),e("2f62")),l={name:"Column",data:function(){return{userName:"",userAvatar:"",articles:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["user"])),{},{articleNum:function(){return this.articles.length}}),beforeRouteEnter:function(t,a,e){e((function(a){a.setDataByParams(t.params)}))},watch:{$route:function(t){this.setDataByParams(t.params)}},methods:{setDataByParams:function(t){var a=t.user,e=t.articleId,s=this.$store.getters.getArticleById(e);if(s)this.userName=s.uname,this.userAvatar=s.uavatar,this.articles=this.$store.getters.getArticlesByUid(null,s.uname);else if(a){var r=this.$store.getters.getArticlesByUid(null,a);r.length?(this.userName=r[0].uname,this.userAvatar=r[0].uavatar):this.user&&(this.userName=this.user.name,this.userAvatar=this.user.avatar),this.articles=r}}}},n=l,c=(e("b85d"),e("0c7c")),o=Object(c["a"])(n,s,r,!1,null,"f5c71646",null);a["default"]=o.exports},b85d:function(t,a,e){"use strict";e("d927")},d927:function(t,a,e){}}]);
//# sourceMappingURL=chunk-7a64a7e0.287c7c7c.js.map