(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6c10"],{"1f05":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-9 left-col pull-right"},[s("div",{staticClass:"panel article-body article-index"},[s("div",{staticClass:"panel-body"},[s("h1",{staticClass:"all-articles"},[t._v(" 专栏文章 "),t.auth?s("router-link",{staticClass:"btn btn-primary pull-right",attrs:{to:"/articles/create"}},[s("i",{staticClass:"fa fa-paint-brush"}),t._v(" 创作文章 ")]):t._e()],1),s("ul",{staticClass:"list-group"},t._l(t.articles,(function(a){return s("li",{staticClass:"list-group-item"},[s("img",{staticClass:"avatar avatar-small",attrs:{src:a.uavatar}}),s("router-link",{staticClass:"title",attrs:{to:"/articles/"+a.articleId+"/content"}},[t._v(" "+t._s(a.title)+" ")]),s("span",{staticClass:"meta pull-right"},[s("span",{staticClass:"timeago"},[t._v(t._s(t._f("moment")(a.date,"from")))])])],1)})),0)])])])},l=[],i=s("5530"),r=s("2f62"),c={name:"List",data:function(){return{articles:[]}},computed:Object(i["a"])({},Object(r["b"])(["auth","user"])),beforeRouteEnter:function(t,a,s){s((function(a){a.articles=a.$store.getters.getArticlesByUid(null,t.params.user)}))}},n=c,u=s("0c7c"),o=Object(u["a"])(n,e,l,!1,null,"cb7926e6",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0b6c10.0ba010fe.js.map