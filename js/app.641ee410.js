(function(e){function t(t){for(var a,o,l=t[0],i=t[1],c=t[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,l=1;l<r.length;l++){var i=r[l];0!==n[i]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/rl_ladder/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=r("7496"),s=r("40dc"),o=r("f6c4"),l=r("2a7f"),i=function(){var e=this,t=e._self._c;return t(n["a"],[t(s["a"],{attrs:{app:"",color:"primary",dark:""}},[t(l["a"],[e._v("RL Ladder")])],1),t(o["a"],[t("Ladder")],1)],1)},c=[],u=r("8212"),d=r("8336"),f=r("b0af"),p=r("99d9"),h=r("a523"),v=r("8fea"),m=r("169a"),_=r("adda"),g=r("1f4f"),b=r("2fa4"),y=r("71d9"),x=function(){var e=this,t=e._self._c;return t(h["a"],[t(v["a"],{staticClass:"elevation-1",attrs:{headers:e.filteredHeaders,items:e.results,"items-per-page":10,"sort-by":["avg_score"],"sort-desc":[!0]},scopedSlots:e._u([{key:"top",fn:function(){return[t(y["a"],{attrs:{flat:""}},[t(l["a"],[e._v("RL Algorithm Ladder")])],1)]},proxy:!0},{key:"item.avatar",fn:function({item:e}){return[t("a",{attrs:{href:e.html_url,target:"_blank",rel:"noopener noreferrer"}},[t(u["a"],{attrs:{size:"40"}},[t(_["a"],{attrs:{src:e.avatar_url,alt:e.name}})],1)],1)]}},{key:"item.name",fn:function({item:r}){return[t("a",{attrs:{href:r.html_url,target:"_blank",rel:"noopener noreferrer"}},[e._v(" "+e._s(r.name)+" ")])]}},{key:"item.created_at",fn:function({item:t}){return[e._v(" "+e._s(e.formatDate(t.created_at))+" ")]}},{key:"item.avg_score",fn:function({item:t}){return[e._v(" "+e._s(null!=t.avg_score?t.avg_score.toFixed(2):"N/A")+" ")]}},{key:"item.actions",fn:function({item:r}){return[t(d["a"],{attrs:{small:""},on:{click:function(t){return e.showDetails(r)}}},[e._v("Details")])]}}])}),t(m["a"],{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(f["a"],[t(p["c"],[e._v("Details")]),t(p["b"],[t(g["a"],{scopedSlots:e._u([{key:"default",fn:function(){return[t("tbody",e._l(e.selectedItem,(function(r,a){return t("tr",{key:a},[t("td",[e._v(e._s(a))]),t("td",[e._v(e._s(r))])])})),0)]},proxy:!0}])})],1),t(p["a"],[t(b["a"]),t(d["a"],{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")])],1)],1)],1)],1)},w=[],k=(r("d9e2"),r("14d9"),r("13d5"),{data:()=>({headers:[{text:"Avatar",value:"avatar",sortable:!1},{text:"Name",value:"name"},{text:"Algorithm",value:"algorithm"},{text:"Avg Score",value:"avg_score"},{text:"Submitted At",value:"created_at"},{text:"Actions",value:"actions",sortable:!1}],results:[],dialog:!1,selectedItem:null,baseUrl:"/rl_ladder/"}),computed:{filteredHeaders(){const e=this.results.reduce((e,t)=>(Object.keys(t).forEach(r=>{const a=this.cleanKey(r);["avatar","name","algorithm","avg_score","created_at","actions","avatar_url","html_url","train episodes","eval episodes","state"].includes(a.toLowerCase())||e.some(e=>e.value===a)||"number"!==typeof t[r]||e.push({text:this.capitalizeFirstLetter(a),value:a})}),e),[]);e.sort((e,t)=>e.text.localeCompare(t.text));const t=this.results.some(e=>"Train episodes"in e)?[{text:"Train Episodes",value:"Train episodes"}]:[],r=this.results.some(e=>"Eval episodes"in e)?[{text:"Eval Episodes",value:"Eval episodes"}]:[];return[this.headers[0],this.headers[1],this.headers[2],this.headers[3],...e,this.headers[4],...t,...r,this.headers[5]]}},mounted(){this.fetchResults()},methods:{async fetchResults(){try{console.log("Fetching results...");const e=this.baseUrl+"ladder_data.json";console.log("Fetching from URL:",e);const t=await fetch(e);if(!t.ok)throw new Error("HTTP error! status: "+t.status);const r=await t.json(),a=r.filter(e=>"open"===e.state);this.results=this.cleanResults(a),console.log(`Fetched ${this.results.length} open issues.`)}catch(e){console.error("Error fetching results:",e)}},cleanResults(e){return e.map(e=>{const t={};for(const[r,a]of Object.entries(e)){const e=this.cleanKey(r);t[e]=a}if(!("avg_score"in t)){const e=Object.entries(t).filter(([e,t])=>"number"===typeof t&&!["Train episodes","Eval episodes"].includes(e)).map(([e,t])=>t);t.avg_score=e.length>0?e.reduce((e,t)=>e+t,0)/e.length:null}return t})},cleanKey(e){return e.replace(/^[-@.\s]+|[-@.\s]+$/g,"")},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)},showDetails(e){this.selectedItem=e,this.dialog=!0},formatDate(e){const t={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(e).toLocaleDateString("en-US",t)}}}),j=k,O=(r("a450"),r("2877")),L=Object(O["a"])(j,x,w,!1,null,"cdbbabb0",null),S=L.exports,A={name:"App",components:{Ladder:S}},E=A,T=Object(O["a"])(E,i,c,!1,null,null,null),D=T.exports,P=r("f309");a["a"].use(P["a"]);var R=new P["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:R,render:e=>e(D)}).$mount("#app")},7890:function(e,t,r){},a450:function(e,t,r){"use strict";r("7890")}});
//# sourceMappingURL=app.641ee410.js.map