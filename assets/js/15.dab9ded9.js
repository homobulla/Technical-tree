(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{163:function(t,s,n){t.exports=n.p+"assets/img/locaation.ae03987e.png"},168:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("HTML5 Geolocation API 用于获得用户的地理位置。")]),t._v(" "),a("p",[t._v("鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。\n下例是一个简单的地理定位实例，可返回用户位置的经度和纬度。\n地理定位：使用 JS 获取浏览器当前所在的地理坐标，实现 LBS（Location Based Service，基于定位的服务），具体数据包括：")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("技术上如何获取浏览器所在的定位信息：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v("点击"),a("a",{attrs:{href:"https://homobulla.site/Technical-tree/code/getCu.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("此处"),a("OutboundLink")],1),t._v("查看在线演示。\n返回结果：\n"),a("img",{attrs:{src:n(163),alt:"location"}})])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"地理位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#地理位置","aria-hidden":"true"}},[this._v("#")]),this._v(" 地理位置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("经度：longitude")]),this._v(" "),s("li",[this._v("纬度：latitude")]),this._v(" "),s("li",[this._v("海拔：altitude")]),this._v(" "),s("li",[this._v("速度：speed")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("手机中的浏览器\n靠手机内置的 GPS 芯片数据，精度在“米”级\n靠手机与之通讯基站数据，精度在“公里”级。")]),this._v(" "),s("li",[this._v("PC 中的浏览器\n靠 IP 地址反向解析，精度在“公里”级。")]),this._v(" "),s("li",[this._v("最简单的是直接接入百度地图 ip 来实现。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"demo"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getLocation")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getCurrentPosition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("showPosition"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Geolocation is not supported by this browser."')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("showPosition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("position"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"Latitude: "')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" position"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),n("span",{attrs:{class:"token string"}},[t._v('"<br />Longitude: "')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" position"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token operator"}},[t._v("<")]),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("该方法在 IP 地址反向解析中默认用的是"),s("code",[this._v("https://www.googleapis.com/")]),this._v(",所以只有翻墙才能使用。")])])}],!1,null,null,null);e.options.__file="5.md";s.default=e.exports}}]);