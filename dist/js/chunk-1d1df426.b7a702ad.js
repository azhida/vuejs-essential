(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d1df426"],{"42bd":function(t,e,i){},c038:function(t,e,i){"use strict";i("42bd")},e369:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blog-container"},[i("div",{staticClass:"blog-pages"},[i("div",{staticClass:"col-md-12 panel"},[i("div",{staticClass:"panel-body"},[i("h2",{staticClass:"text-center"},[t._v(t._s(t.articleId?"编辑文章":"创作文章"))]),i("hr"),i("div",{attrs:{"data-validator-form":""}},[i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.title,expression:"title",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator:blur.required",value:{title:"标题"},expression:"{ title: '标题' }",arg:"blur",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写标题"},domProps:{value:t.title},on:{input:[function(e){e.target.composing||(t.title=e.target.value.trim())},t.saveTitle],blur:function(e){return t.$forceUpdate()}}})]),t._m(0),i("br"),i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.post}},[t._v("发 布")])])])])])])])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group"},[i("textarea",{attrs:{id:"editor"}})])}],n=(i("498a"),i("ebfb")),s=i.n(n),l=i("1487"),o=i.n(l),c=i("e8ec");window.hljs=o.a;var d={name:"Create",data:function(){return{title:"",content:"",articleId:void 0}},beforeRouteEnter:function(t,e,i){i((function(t){t.$nextTick().then((function(){t.setArticleId(t.$route.params.articleId)}))}))},beforeRouteLeave:function(t,e,i){this.clearData(),i()},watch:{$route:function(t){this.clearData(),this.setArticleId(t.params.articleId)}},mounted:function(){var t=this,e=new s.a({element:document.querySelector("#editor"),placeholder:"请使用 Markdown 格式书写 ;-)，代码片段黏贴时请注意使用高亮语法。",spellChecker:!1,autoDownloadFontAwesome:!1,autosave:{enabled:!0,uniqueId:"vuejs-essential"},renderingConfig:{codeSyntaxHighlighting:!0}});e.codemirror.on("change",(function(){t.content=e.value()})),this.simplemde=e},methods:{saveTitle:function(){c["a"].setItem("smde_title",this.title)},fillContent:function(t){var e=this.simplemde,i=c["a"].getItem("smde_title");if(void 0!==t){var a=this.$store.getters.getArticleById(t);if(a){var r=a.title,n=a.content;this.title=i||r,this.content=e.value()||n,e.value(this.content)}}else this.title=i,this.content=e.value()},post:function(){var t=this.title,e=this.content;if(""!==t&&""!==e.trim()){var i={title:t,content:e};this.$store.dispatch("post",{article:i,articleId:this.articleId}),this.clearData()}},clearData:function(){this.title="",c["a"].removeItem("smde_title"),this.simplemde.value(""),this.simplemde.clearAutosavedValue()},setArticleId:function(t){var e=c["a"].getItem("articleId");void 0!==t&&t!==e&&this.clearData(),this.articleId=t,this.fillContent(t),c["a"].setItem("articleId",t)}}},u=d,m=(i("c038"),i("0c7c")),v=Object(m["a"])(u,a,r,!1,null,"34fcef30",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-1d1df426.b7a702ad.js.map