(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5dfa388"],{"159b":function(t,r,a){var e=a("da84"),o=a("fdbc"),n=a("785a"),s=a("17c2"),i=a("9112"),c=function(t){if(t&&t.forEach!==s)try{i(t,"forEach",s)}catch(r){t.forEach=s}};for(var u in o)o[u]&&c(e[u]&&e[u].prototype);c(n)},"15ae":function(t,r,a){},"17c2":function(t,r,a){"use strict";var e=a("b727").forEach,o=a("a640"),n=o("forEach");t.exports=n?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,r,a){var e=a("d039"),o=a("b622"),n=a("2d00"),s=o("species");t.exports=function(t){return n>=51||!e((function(){var r=[],a=r.constructor={};return a[s]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"4df4":function(t,r,a){"use strict";var e=a("da84"),o=a("0366"),n=a("c65b"),s=a("7b0b"),i=a("9bdd"),c=a("e95a"),u=a("68ee"),l=a("07fa"),d=a("8418"),f=a("9a1f"),p=a("35a1"),m=e.Array;t.exports=function(t){var r=s(t),a=u(this),e=arguments.length,h=e>1?arguments[1]:void 0,v=void 0!==h;v&&(h=o(h,e>2?arguments[2]:void 0));var g,b,w,y,C,x,A=p(r),S=0;if(!A||this==m&&c(A))for(g=l(r),b=a?new this(g):m(g);g>S;S++)x=v?h(r[S],S):r[S],d(b,S,x);else for(y=f(r,A),C=y.next,b=a?new this:[];!(w=n(C,y)).done;S++)x=v?i(y,h,[w.value,S],!0):w.value,d(b,S,x);return b.length=S,b}},"935e":function(t,r,a){"use strict";a.r(r);var e=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[a("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(r){t.msgShow=r}}}),a("div",{staticClass:"panel panel-default"},[t._m(0),a("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("用户名")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator:input.required",value:{regex:/^[a-zA-Z]+\w*\s?\w*$/,error:"用户名要求以字母开头的单词字符"},expression:"{ regex: /^[a-zA-Z]+\\w*\\s?\\w*$/, error: '用户名要求以字母开头的单词字符' }",arg:"input",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写用户名"},domProps:{value:t.username},on:{input:function(r){r.target.composing||(t.username=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("密码")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{regex:/^\w{6,16}$/,error:"密码要求 6 ~ 16 个单词字符"},expression:"{ regex: /^\\w{6,16}$/, error: '密码要求 6 ~ 16 个单词字符' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("确认密码")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.cpassword,expression:"cpassword",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{target:"#password"},expression:"{ target: '#password' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"password",placeholder:"请填写确认密码"},domProps:{value:t.cpassword},on:{input:function(r){r.target.composing||(t.cpassword=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("图片验证码")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.captcha,expression:"captcha",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"图片验证码"},expression:"{ title: '图片验证码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写验证码"},domProps:{value:t.captcha},on:{input:function(r){r.target.composing||(t.captcha=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}})]),a("div",{staticClass:"thumbnail",attrs:{title:"点击图片重新获取验证码"},on:{click:t.getCaptcha}},[a("div",{staticClass:"captcha vcenter",domProps:{innerHTML:t._s(t.captchaTpl)}})]),a("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.register}},[a("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" 注册 ")])])])],1)])},o=[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title"},[t._v("请注册")])])}];a("b0c0");function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,e=new Array(r);a<r;a++)e[a]=t[a];return e}function s(t){if(Array.isArray(t))return n(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}a("fb6a"),a("ac1f"),a("00b4");function c(t,r){if(t){if("string"===typeof t)return n(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,r):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return s(t)||i(t)||c(t)||u()}a("d81d"),a("159b"),a("a15b");var d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890",a="",e=[];try{e=l(Array(t)).map((function(){return r[Math.floor(Math.random()*r.length)]}))}catch(o){}return e.forEach((function(t){a+='<span class="flex1 hcenter">'.concat(t,"</span>")})),e=e.join(""),{tpl:a,captcha:e}},f=(a("e8ec"),{name:"Register",data:function(){return{captchaTpl:"",username:"",password:"",cpassword:"",captcha:"",msg:"",msgType:"",msgShow:!1}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=d(6),r=t.tpl,a=t.captcha;this.captchaTpl=r,this.localCaptcha=a},register:function(t){var r=this;this.$nextTick((function(){var a="submit"===t.target.type?t.target:t.target.parentElement;a.canSubmit&&r.submit()}))},submit:function(){if(this.captcha.toUpperCase()!==this.localCaptcha)this.showMsg("验证码不正确"),this.getCaptcha();else{var t={name:this.username,password:this.password,avatar:"https://api.adorable.io/avatars/200/".concat(this.username,".png")},r=this.$store.state.user;r&&r.name===t.name?this.showMsg("用户名已存在"):this.login(t)}},login:function(t){this.$store.dispatch("login",t),this.showMsg("注册成功","success")},showMsg:function(t){var r=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";this.msg=t,this.msgType=a,this.msgShow=!1,this.$nextTick((function(){r.msgShow=!0}))}}}),p=f,m=(a("c3a9"),a("0c7c")),h=Object(m["a"])(p,e,o,!1,null,"21e2dde2",null);r["default"]=h.exports},"9bdd":function(t,r,a){var e=a("825a"),o=a("2a62");t.exports=function(t,r,a,n){try{return n?r(e(a)[0],a[1]):r(a)}catch(s){o(t,"throw",s)}}},a15b:function(t,r,a){"use strict";var e=a("23e7"),o=a("e330"),n=a("44ad"),s=a("fc6a"),i=a("a640"),c=o([].join),u=n!=Object,l=i("join",",");e({target:"Array",proto:!0,forced:u||!l},{join:function(t){return c(s(this),void 0===t?",":t)}})},a630:function(t,r,a){var e=a("23e7"),o=a("4df4"),n=a("1c7e"),s=!n((function(t){Array.from(t)}));e({target:"Array",stat:!0,forced:s},{from:o})},a640:function(t,r,a){"use strict";var e=a("d039");t.exports=function(t,r){var a=[][t];return!!a&&e((function(){a.call(null,r||function(){throw 1},1)}))}},b0c0:function(t,r,a){var e=a("83ab"),o=a("5e77").EXISTS,n=a("e330"),s=a("9bf2").f,i=Function.prototype,c=n(i.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=n(u.exec),d="name";e&&!o&&s(i,d,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},c3a9:function(t,r,a){"use strict";a("15ae")},d81d:function(t,r,a){"use strict";var e=a("23e7"),o=a("b727").map,n=a("1dde"),s=n("map");e({target:"Array",proto:!0,forced:!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(t,r,a){"use strict";var e=a("23e7"),o=a("da84"),n=a("e8b5"),s=a("68ee"),i=a("861d"),c=a("23cb"),u=a("07fa"),l=a("fc6a"),d=a("8418"),f=a("b622"),p=a("1dde"),m=a("f36a"),h=p("slice"),v=f("species"),g=o.Array,b=Math.max;e({target:"Array",proto:!0,forced:!h},{slice:function(t,r){var a,e,o,f=l(this),p=u(f),h=c(t,p),w=c(void 0===r?p:r,p);if(n(f)&&(a=f.constructor,s(a)&&(a===g||n(a.prototype))?a=void 0:i(a)&&(a=a[v],null===a&&(a=void 0)),a===g||void 0===a))return m(f,h,w);for(e=new(void 0===a?g:a)(b(w-h,0)),o=0;h<w;h++,o++)h in f&&d(e,o,f[h]);return e.length=o,e}})}}]);
//# sourceMappingURL=chunk-b5dfa388.f3ad2053.js.map