(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55ce335a"],{"33c5":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.lists}},[n("el-table-column",{attrs:{prop:"account",label:"用户名"}}),n("el-table-column",{attrs:{prop:"password",label:"密码"}}),n("el-table-column",{attrs:{prop:"reg_time",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(t._f("getDate")(a.reg_time)))])]}}])}),n("el-table-column",{attrs:{prop:"creator",label:"创建者"}}),n("el-table-column",{attrs:{prop:"role_name",label:"权限分配"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(t._f("getRole")(a.role_name)))])]}}])})],1)],1)},l=[],r=n("2423"),s={name:"input-manager",data:function(){return{lists:[]}},filters:{getDate:function(t){var e=new Date(t),n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();return n},getRole:function(t){switch(t){case"input":return"销售人员 ";case"approve":return"初审人员 ";default:return t}}},methods:{getlist:function(){var t=this;Object(r["u"])().then((function(e){console.log(e),2e4===e.code&&(t.lists=e.data)}))}},created:function(){this.getlist()}},o=s,u=(n("33f5"),n("2877")),c=Object(u["a"])(o,a,l,!1,null,"0e74bd23",null);e["default"]=c.exports},"33f5":function(t,e,n){"use strict";var a=n("957f"),l=n.n(a);l.a},"957f":function(t,e,n){}}]);
//# sourceMappingURL=chunk-55ce335a.722de65f.js.map