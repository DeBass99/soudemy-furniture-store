(window.webpackJsonp=window.webpackJsonp||[]).push([[11,6],{350:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAASCAYAAACJgPRIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABLSURBVHgB5c3BDQAQDIXhMoGRbNIR2IARjGAUG7FBVTi3jhJ/8tLLlxSIKPIQpBhU2uUvoTcK7HyaBbnBczfvUAPpZVBEcFBYA6EJTv6uDoyrsdMAAAAASUVORK5CYII="},351:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},353:function(t,e,o){t.exports=o.p+"img/slide 1.d28b312.png"},354:function(t,e,o){var content=o(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(59).default)("1abb9b47",content,!0,{sourceMap:!1})},360:function(t,e,o){"use strict";o(354)},361:function(t,e,o){var n=o(58),c=o(351),r=o(362),l=o(363),A=n(!1),d=c(r),m=c(l);A.push([t.i,".carousel-control-next,.carousel-control-prev{top:40%;height:129px!important;width:60px!important;background:#eee!important}.carousel-control-prev-icon{background-image:url("+d+")!important;height:22px!important;width:10px!important}.carousel-control-next-icon{background-image:url("+m+")!important;height:22px!important;width:10px!important}.carousel-caption{position:absolute;top:20%;display:flex;flex-direction:column;align-items:center}.caro-h1{font-style:normal;font-weight:700;font-size:49px}.caro-p{width:584px;font-size:23px}.caro-btn,.caro-p{font-style:normal;font-weight:400;color:#fff}.caro-btn{width:242px;height:78px;background:none;border:1px solid #fff;font-size:20px}.caro-btn:hover img{margin-left:10px;transition:all .7s ease-in-out}@media only screen and (max-width:600px){.caro-h1{font-size:20px}.caro-p{font-size:10px}.carousel-control-next,.carousel-control-prev{display:none}.caro-p{width:100%}}",""]),t.exports=A},362:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAYCAYAAAAh8HdUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACjSURBVHgB7dTBDQIhEAVQxikAaQDGDrQiW9gO1A7swBLUErzZjXDTC/hJNDFmd5k9mjjJkIHkcfoZMsoSkW0pZU1EKzUIIRTv/eEPfgtIBeijUdYMvawD4rGbguYvdJuCTuiYc95rEccY7865B+bOWisppXMT1QPwCmi0kN8D4EUL+fOihfz9oIHc91ML9qIWHERjcBQNQTLKQq43WGEd4rZ4Av95eQ0OHMrQAAAAAElFTkSuQmCC"},363:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAYCAYAAAAh8HdUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7dS7DcMgEAZgLlelAhYAXGaLbJBRokzgVbJBMkLKtJkgZVro0uHfki1Zlh9HacknHQfoPhoQHEIwWusf8phSeilBcIzxD3AioisqSSC3AxqfAJUUcj8pgTxcSCGPNySQp05ag5NoDc6iJbiIxtBam3Cvb1LCwMt55JzPwNVByeOGNMhLCTJdjSWo7upH1O2cu3vvM2q9gw2B9gsD+IoBogFzy3Wb3TUdJAAAAABJRU5ErkJggg=="},366:function(t,e,o){var content=o(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(59).default)("129a7c87",content,!0,{sourceMap:!1})},367:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},c=(o(360),o(40)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[e("b-carousel-slide",{staticClass:"slide-wrap",attrs:{"img-src":o(353)}},[e("div",{staticClass:"carousel-caption"},[e("h1",{staticClass:"caro-h1"},[t._v("All for your home")]),t._v(" "),e("p",{staticClass:"caro-p"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio\n          odio malesuada at condimentum adipiscing iaculis semper.\n        ")]),t._v(" "),e("button",{staticClass:"caro-btn"},[t._v("\n          view more "),e("img",{attrs:{src:o(350),alt:""}})])])]),t._v(" "),e("b-carousel-slide",{attrs:{"img-src":o(353)}},[e("div",{staticClass:"carousel-caption"},[e("h1",{staticClass:"caro-h1"},[t._v("All for your home")]),t._v(" "),e("p",{staticClass:"caro-p"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio\n          odio malesuada at condimentum adipiscing iaculis semper.\n        ")]),t._v(" "),e("button",{staticClass:"caro-btn"},[t._v("\n          view more "),e("img",{attrs:{src:o(350),alt:""}})])])])],1)],1)}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,o){"use strict";o(366)},383:function(t,e,o){var n=o(58)(!1);n.push([t.i,".comment[data-v-46b56df0]{display:flex;flex-direction:column;text-align:center;align-items:center}p.quote[data-v-46b56df0]{font-weight:700;font-size:200px;margin-bottom:-150px}p.post[data-v-46b56df0],p.quote[data-v-46b56df0]{font-style:normal;color:#2e2e2e}p.post[data-v-46b56df0]{font-weight:400;font-size:15px}.text[data-v-46b56df0]{width:434px}@media only screen and (max-width:600px){.text[data-v-46b56df0]{width:100%}}",""]),t.exports=n},398:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{}},mounted:function(){}},c=(o(382),o(40)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("carousel",{attrs:{scrollPerPage:!0,"mouse-drag":!0,perPageCustom:[[200,1],[768,1]],navigationEnabled:!1,navigationClickTargetSize:15,paginationColor:"#b8b8b8"}},[e("slide",[e("div",{staticClass:"comment"},[e("p",{staticClass:"quote"},[t._v('"')]),t._v(" "),e("p",{staticClass:"text"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue\n          id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus\n          luctus amet. Aliquam\n        ")]),t._v(" "),e("h4",[t._v("Soroush norozy")]),t._v(" "),e("p",{staticClass:"post"},[t._v("Designer")])])]),t._v(" "),e("slide",[e("div",{staticClass:"comment"},[e("p",{staticClass:"quote"},[t._v('"')]),t._v(" "),e("p",{staticClass:"text"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue\n          id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus\n          luctus amet. Aliquam\n        ")]),t._v(" "),e("h4",[t._v("Soroush norozy")]),t._v(" "),e("p",{staticClass:"post"},[t._v("Designer")])])]),t._v(" "),e("slide",[e("div",{staticClass:"comment"},[e("p",{staticClass:"quote"},[t._v('"')]),t._v(" "),e("p",{staticClass:"text"},[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue\n          id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus\n          luctus amet. Aliquam\n        ")]),t._v(" "),e("h4",[t._v("Soroush norozy")]),t._v(" "),e("p",{staticClass:"post"},[t._v("Designer")])])])],1)],1)}),[],!1,null,"46b56df0",null);e.default=component.exports;installComponents(component,{Carousel:o(367).default})}}]);