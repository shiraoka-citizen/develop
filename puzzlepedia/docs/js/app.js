(function(t){function e(e){for(var u,r,z=e[0],p=e[1],n=e[2],i=0,d=[];i<z.length;i++)r=z[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(u in p)Object.prototype.hasOwnProperty.call(p,u)&&(t[u]=p[u]);a&&a(e);while(d.length)d.shift()();return s.push.apply(s,n||[]),l()}function l(){for(var t,e=0;e<s.length;e++){for(var l=s[e],u=!0,z=1;z<l.length;z++){var p=l[z];0!==o[p]&&(u=!1)}u&&(s.splice(e--,1),t=r(r.s=l[0]))}return t}var u={},o={app:0},s=[];function r(e){if(u[e])return u[e].exports;var l=u[e]={i:e,l:!1,exports:{}};return t[e].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=t,r.c=u,r.d=function(t,e,l){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)r.d(l,u,function(e){return t[e]}.bind(null,u));return l},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var z=window["webpackJsonp"]=window["webpackJsonp"]||[],p=z.push.bind(z);z.push=e,z=z.slice();for(var n=0;n<z.length;n++)e(z[n]);var a=p;s.push([0,"chunk-vendors"]),l()})({0:function(t,e,l){t.exports=l("56d7")},"56d7":function(t,e,l){"use strict";l.r(e);l("e260"),l("e6cf"),l("cca6"),l("a79d");var u=l("2b0e"),o=l("8c4f"),s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-app",[l("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[l("v-app-bar-nav-icon"),l("v-toolbar-title",[t._v("Puzzlepedia")]),l("v-spacer"),l("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var u=e.on;return[l("v-btn",t._g({attrs:{icon:""}},u),[l("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])})],1),l("v-content",[l("Archive")],1),l("v-footer",{attrs:{color:"indigo",dark:"",fixed:""}},[l("v-spacer"),l("div",[t._v("© "+t._s((new Date).getFullYear())+" citizen, Shiraoka")])],1)],1)},r=[],z=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-card",[l("v-card-title",[t._v(" Puzzle Archive "),l("v-spacer"),l("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),l("v-data-table",{attrs:{headers:t.headers,items:t.Puzzles,search:t.search},scopedSlots:t._u([{key:"item.instruction",fn:function(e){var u=e.item;return[l("v-btn",{attrs:{icon:"",href:u.instruction_url,target:"_blank"}},[l("v-icon",[t._v(" mdi-link-variant ")])],1)]}},{key:"item.puzzle",fn:function(e){var u=e.item;return[l("v-btn",{attrs:{icon:"",href:u.puzzle_url,target:"_blank"}},[l("v-icon",[t._v(" mdi-link-variant ")])],1)]}}])})],1)},p=[],n={data:function(){return{search:"",headers:[{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Point",value:"point"},{text:"Total",value:"total"},{text:"Contest",value:"contest"},{text:"Category",value:"category"},{text:"Instruction",sortable:!1,value:"instruction"},{text:"Puzzle",value:"puzzle"},{text:"Password",value:"password"}],Puzzles:[{name:"Simple Loop",point:4,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Simple Loop",point:7,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Skyscrapers",point:8,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Skyscrapers",point:18,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Skyscrapers(Encoded)",point:70,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Shikaku(Off-by-One)",point:18,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Shikaku(Off-by-One)",point:20,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Products(Off-by-One)",point:31,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Products(Off-by-One)",point:95,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Tapa",point:17,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Tapa",point:37,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Tapa(LITS)",point:67,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Snake(Myopia)",point:13,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Pentominoes(Myopia)",point:34,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Pentominoes(Myopia)",point:27,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Yajilin",point:31,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Yajilin",point:47,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Yajilin(Battleships)",point:51,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Spiral Galaxies",point:44,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Spiral Galaxies",point:46,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Spiral Galaxies(Tetrominoes)",point:79,total:764,contest:"PGP2019R1",category:"PGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2019/2019_PuzzleRound1.pdf"},{name:"Classic Sudoku",point:21,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Classic Sudoku",point:27,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Classic Sudoku",point:28,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Classic Sudoku",point:30,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Classic Sudoku",point:35,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Diagonal Sudoku",point:21,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Quadruple Sudoku",point:24,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Product Sudoku",point:33,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Anti-Windoku",point:65,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Big Bands Sudoku",point:66,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Battenburg Little Killer Sudoku",point:77,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Irregular Alternating Stripes Sudoku",point:85,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"},{name:"Distance Sudoku",point:88,total:600,contest:"SGP2020R1",category:"SGP",instruction_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1_IB.pdf",puzzle_url:"https://gp.worldpuzzle.org/sites/default/files/Puzzles/2020/2020_SudokuRound1.pdf"}]}}},a=n,i=l("2877"),d=l("6544"),f=l.n(d),P=l("8336"),c=l("b0af"),g=l("99d9"),_=l("8fea"),h=l("132d"),R=l("2fa4"),S=l("8654"),w=Object(i["a"])(a,z,p,!1,null,null,null),v=w.exports;f()(w,{VBtn:P["a"],VCard:c["a"],VCardTitle:g["a"],VDataTable:_["a"],VIcon:h["a"],VSpacer:R["a"],VTextField:S["a"]});var G={name:"App",components:{Archive:v},data:function(){return{}}},y=G,m=l("7496"),k=l("40dc"),b=l("5bc1"),B=l("a75b"),I=l("553a"),x=l("e449"),O=l("2a7f"),V=Object(i["a"])(y,s,r,!1,null,null,null),j=V.exports;f()(V,{VApp:m["a"],VAppBar:k["a"],VAppBarNavIcon:b["a"],VBtn:P["a"],VContent:B["a"],VFooter:I["a"],VIcon:h["a"],VMenu:x["a"],VSpacer:R["a"],VToolbarTitle:O["a"]});var T=l("f309");u["a"].use(T["a"]);var C=new T["a"]({});u["a"].config.productionTip=!1,u["a"].use(o["a"]);var A=[{path:"/",component:v}],M=new o["a"]({mode:"history",routes:A});new u["a"]({vuetify:C,router:M,render:function(t){return t(j)}}).$mount("#app")}});