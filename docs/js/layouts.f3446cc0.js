(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layouts"],{"04dd":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"default-layout"},[n("div",{staticClass:"content"},[n("router-view")],1)])},o=[],a=(n("4ded"),n("2877")),s={},i=Object(a["a"])(s,e,o,!1,null,null,null);r["default"]=i.exports},"05f8":function(t,r,n){t.exports=n.p+"img/500.f56a3587.svg"},4555:function(t,r,n){var e={"./403.svg":"ac42","./404.svg":"eb2b","./500.svg":"05f8","./503.svg":"b140"};function o(t){var r=a(t);return n(r)}function a(t){var r=e[t];if(!(r+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r}o.keys=function(){return Object.keys(e)},o.resolve=a,t.exports=o,o.id="4555"},"4ded":function(t,r,n){"use strict";var e=n("5a14"),o=n.n(e);o.a},"5a14":function(t,r,n){},ac42:function(t,r,n){t.exports=n.p+"img/403.93d6475b.svg"},b140:function(t,r,n){t.exports=n.p+"img/503.bb681f2a.svg"},dead:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"app-layout"},[n("div",{staticClass:"content"},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/home"}},[t._v("Home")]),t._v(" |\n          "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1),n("div",{staticClass:"background"},[n("div",{staticClass:"cover",style:{backgroundImage:"url("+t.errorCover+")"}})])])},o=[],a={data:function(){return{errors:["403","404","500","503"]}},methods:{reandomError:function(){return this.errors[Math.floor(Math.random()*this.errors.length)]}},computed:{errorCover:function(){return n("4555")("./".concat(this.reandomError(),".svg"))}}},s=a,i=n("2877"),u=Object(i["a"])(s,e,o,!1,null,null,null);r["default"]=u.exports},eb2b:function(t,r,n){t.exports=n.p+"img/404.ea2bc467.svg"}}]);
//# sourceMappingURL=layouts.f3446cc0.js.map