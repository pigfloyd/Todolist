(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("MenuBar"),a("ItemList"),this.$store.state.isShow?a("MemoEditor"):t._e()],1)},s=[],r=a("d4ec"),o=a("262e"),c=a("2caf"),l=a("9ab4"),u=a("60a3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"collapse navbar-collapse navbar-right"},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"add dropdown"},[a("a",{staticClass:"create-new dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v("新建")]),a("ul",{staticClass:"dropdown-menu"},[a("li",{on:{click:t.doShow}},[a("a",[t._v("文本便签")])])])]),a("li",{staticClass:"categories dropdown"},[t._m(1),a("ul",{staticClass:"dropdown-menu"},[a("li",{staticClass:"total",on:{click:function(e){return t.clickCate(-1)}}},[a("a",[t._v(" 全部 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(-1)))])])]),a("li",{staticClass:"divider"}),a("li",{on:{click:function(e){return t.clickCate(0)}}},[a("a",[t._v(" 工作 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(0)))])])]),a("li",{on:{click:function(e){return t.clickCate(1)}}},[a("a",[t._v(" 生活 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(1)))])])]),a("li",{on:{click:function(e){return t.clickCate(2)}}},[a("a",[t._v(" 学习 "),a("span",{staticClass:"count badge"},[t._v(t._s(t.doFilter(2)))])])])])])])])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-header"},[n("a",{staticClass:"navbar-brand"},[n("img",{attrs:{height:"40",src:a("cf05")}}),n("img",{attrs:{height:"40"}})]),n("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-expanded":"false"}},[n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"current-category dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v(" 全部 "),a("span",{staticClass:"count badge"})])}],v=(a("4de4"),a("bee2")),p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(r["a"])(this,t),this.id=e,this.categoryId=a,this.title=n,this.content=i,this.createTime=this.toSelfDateStr(Date.now())}return Object(v["a"])(t,[{key:"toSelfDateStr",value:function(t){var e=new Date(t),a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes();return a}}]),t}(),f=p,h=function(t){Object(o["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"doShow",value:function(){this.$store.state.transMemo=new f,this.$store.state.isShow=!0}},{key:"doFilter",value:function(t){return-1==t?this.$store.state.aHelper.memoList.length:this.$store.state.aHelper.memoList.filter((function(e){return e.categoryId==t})).length}},{key:"clickCate",value:function(t){this.$store.state.filterCateId=t}}]),a}(u["c"]);h=Object(l["a"])([u["a"]],h);var g=h,b=g,y=a("2877"),C=Object(y["a"])(b,d,m,!1,null,null,null),O=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"memos"}},t._l(t.filterMemo(),(function(t){return a("MemoItem",{key:t.id,attrs:{memo:t}})})),1)},_=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"memo-container"},[a("div",{staticClass:"memo"},[a("div",{staticClass:"mark"}),a("div",{staticClass:"memo-heading"},[a("h5",{staticClass:"title"},[t._v(t._s(t.memo.title))]),a("ul",{staticClass:"tools"},[a("li",{staticClass:"edit",on:{click:t.showEdit}}),a("li",{staticClass:"delete",on:{click:function(e){return t.doDel()}}})])]),a("h6",{staticClass:"memo-info"},[a("span",{staticClass:"timeStamp"},[t._v(t._s(t.memo.createTime))]),a("span",{staticClass:"category"},[t._v("分类: "+t._s(t.$store.state.aHelper.getCategoryName(t.memo.categoryId)))])]),a("div",{staticClass:"content"},[a("div",{staticClass:"text",domProps:{innerHTML:t._s(t.memo.content)}})])])])])},k=[],$=function(t){Object(o["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"doDel",value:function(){window.confirm("确认要删除【".concat(this.memo.title,"】的笔记吗？"))&&this.$store.state.aHelper.remove(this.memo.id)}},{key:"showEdit",value:function(){var t=JSON.parse(JSON.stringify(this.memo));this.$store.commit("showEditMemo",t)}}]),a}(u["c"]);Object(l["a"])([Object(u["b"])()],$.prototype,"memo",void 0),$=Object(l["a"])([u["a"]],$);var I=$,S=I,x=Object(y["a"])(S,j,k,!1,null,null,null),D=x.exports,M=function(t){Object(o["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.memoArr=t.$store.state.aHelper.memoList,t}return Object(v["a"])(a,[{key:"filterMemo",value:function(){var t=this;return-1==this.$store.state.filterCateId?this.memoArr:this.memoArr.filter((function(e){return e.categoryId==t.$store.state.filterCateId}))}}]),a}(u["c"]);M=Object(l["a"])([Object(u["a"])({components:{MemoItem:D}})],M);var H=M,E=H,L=Object(y["a"])(E,w,_,!1,null,null,null),N=L.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"cover-layer"}),a("div",{staticClass:"editor-layer",attrs:{id:"new-markdown"}},[a("div",{staticClass:"editor-top"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.memo.title,expression:"memo.title"}],staticClass:"editor-title form-control",attrs:{type:"text",placeholder:"标题"},domProps:{value:t.memo.title},on:{input:function(e){e.target.composing||t.$set(t.memo,"title",e.target.value)}}}),a("div",{staticClass:"dropdown select-category"},[a("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[a("span",{staticClass:"category"},[t._v(t._s(this.$store.state.aHelper.getCategoryName(t.memo.categoryId)))]),a("span",{staticClass:"caret"})]),a("ul",{staticClass:"dropdown-menu"},[a("li",{on:{click:function(e){t.memo.categoryId=0}}},[a("a",[t._v("工作")])]),a("li",{on:{click:function(e){t.memo.categoryId=1}}},[a("a",[t._v("生活")])]),a("li",{on:{click:function(e){t.memo.categoryId=2}}},[a("a",[t._v("学习")])])])]),a("ul",{staticClass:"tools"},[a("li",{staticClass:"save",on:{click:t.saveNew}}),a("li",{staticClass:"cancel",on:{click:function(e){return t.doCancel()}}})])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.memo.content,expression:"memo.content"}],staticClass:"text-content form-control",attrs:{placeholder:"内容"},domProps:{value:t.memo.content},on:{input:function(e){e.target.composing||t.$set(t.memo,"content",e.target.value)}}})])])},T=[],K=(a("498a"),function(t){Object(o["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.memo=new f(-1,0),t}return Object(v["a"])(a,[{key:"created",value:function(){this.memo=this.$store.state.transMemo}},{key:"doCancel",value:function(){this.$store.state.isShow=!1}},{key:"saveNew",value:function(){this.memo&&this.memo.categoryId>-1&&this.memo.title.trim().length>0&&this.memo.content.trim().length>0?(this.memo.id<=-1?this.$store.state.aHelper.add(this.memo):this.$store.state.aHelpder.edit(this.memo),this.$store.state.isShow=!1):alert("对不起，输入错误~")}}]),a}(u["c"]));K=Object(l["a"])([u["a"]],K);var F=K,J=F,A=Object(y["a"])(J,P,T,!1,null,null,null),B=A.exports,Y=function(t){Object(o["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Y=Object(l["a"])([Object(u["a"])({components:{MenuBar:O,ItemList:N,MemoEditor:B}})],Y);var q=Y,z=q,G=Object(y["a"])(z,i,s,!1,null,null,null),Q=G.exports,R=a("2f62"),U=(a("7db0"),a("c740"),a("d81d"),a("a434"),function(){function t(e,a){Object(r["a"])(this,t),this.dataKey=e,this.primaryKey=a}return Object(v["a"])(t,[{key:"readData",value:function(){var t=localStorage.getItem(this.dataKey),e=[];return null!=t&&(e=JSON.parse(t)),e}},{key:"saveData",value:function(t){var e=JSON.stringify(t);localStorage.setItem(this.dataKey,e)}},{key:"addData",value:function(t){var e=this.readData();null==e&&(e=[]);var a=e.length>0?e[e.length-1][this.primaryKey]+1:1;return t[this.primaryKey]=a,e.push(t),this.saveData(e),a}},{key:"removeDataById",value:function(t){var e=this,a=this.readData(),n=a.findIndex((function(a){return a[e.primaryKey]==t}));return n>-1&&(a.splice(n,1),this.saveData(a),!0)}}]),t}()),V=U,W=function(){function t(){Object(r["a"])(this,t),this.dataHelper=new V("memoData","id"),this.memoList=this.readData()}return Object(v["a"])(t,[{key:"readData",value:function(){var t=this.dataHelper.readData(),e=t.map((function(t){var e=new f;return e.id=t.id,e.categoryId=t.categoryId,e.title=t.title,e.content=t.content,e.createTime=t.createTime,e}));return e}},{key:"add",value:function(t){return t.id=this.dataHelper.addData(t),this.memoList.push(t),t.id}},{key:"edit",value:function(t){var e=this.memoList.find((function(e){return e.id==t.id}));e&&(e.categoryId=t.categoryId,e.title=t.title,e.content=t.content),this.dataHelper.saveData(this.memoList)}},{key:"remove",value:function(t){var e=this.memoList.findIndex((function(e){return e.id==t}));e>-1&&(this.memoList.splice(e,1),this.dataHelper.saveData(this.memoList))}},{key:"getCategoryName",value:function(t){var e=["工作","生活","学习"];return e[t]}}]),t}(),X=W;n["a"].use(R["a"]);var Z=new R["a"].Store({state:{title:"这是vuex",aHelper:new X,isShow:!1,transMemo:null,filterCateId:-1},mutations:{showEditMemo:function(t,e){t.transMemo=e,t.isShow=!0}}}),tt=Z;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Q)},store:tt}).$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.3ae1ffc0.js.map