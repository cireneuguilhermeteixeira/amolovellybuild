function asyncGeneratorStep(t,n,e,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function _asyncToGenerator(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){asyncGeneratorStep(o,r,i,a,c,"next",t)}function c(t){asyncGeneratorStep(o,r,i,a,c,"throw",t)}a(void 0)}))}}function _defineProperty(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var r="".concat(t*n/e-t,"ms"),i=2*Math.PI*n/e;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var r=n/e,i="".concat(t*r-t,"ms"),o=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:"".concat(9-9*n,"px"),"animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(t*n/e-t,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(t*n/e-t,"ms")}}}}}},HUy7:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("8Y7J"),i=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"formatarData",value:function(t){return new Date(Number(t)).toLocaleString()}},{key:"calculaIdade",value:function(t){var n=new Date(t),e=Date.now()-n.getTime();return Math.trunc(e*(1/31536e6))}},{key:"openGalleryFromBrowser",value:function(t){var n=new FileReader;if(t.target.files&&t.target.files.length>0)return n.readAsDataURL(t.target.files[0]),n}}]),t}();return t.ngInjectableDef=r.Ob({factory:function(){return new t},token:t,providedIn:"root"}),t}()},JV4b:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("AytR"),i=e("8Y7J"),o=e("IheW"),a=e("xgBC"),c=function(){var t=function(){function t(n,e){_classCallCheck(this,t),this.http=n,this.storage=e,this.favorites=[],this.HAS_LOGGED_IN="hasLoggedIn",this.HAS_SEEN_TUTORIAL="hasSeenTutorial"}return _createClass(t,[{key:"create",value:function(t){return this.http.post("".concat(r.a.apiUrl,"/estampas"),t,{observe:"response"}).toPromise().then((function(t){return t}))}},{key:"update",value:function(t,n){return this.http.put("".concat(r.a.apiUrl,"/estampas/").concat(n),t,{observe:"response"}).toPromise().then((function(t){return console.log(t),t}))}},{key:"delete",value:function(t){return this.http.delete("".concat(r.a.apiUrl,"/estampas/").concat(t),{observe:"response"}).toPromise().then((function(t){return console.log(t),t}))}},{key:"index",value:function(){return this.http.get("".concat(r.a.apiUrl,"/estampas"),{observe:"response"}).toPromise().then((function(t){if(t.body.length)return t.body;throw t}))}},{key:"findById",value:function(t){return this.http.get("".concat(r.a.apiUrl,"/estampas/").concat(t),{observe:"response"}).toPromise().then((function(t){if(t.body)return t.body;throw t}))}}]),t}();return t.ngInjectableDef=i.Ob({factory:function(){return new t(i.Pb(o.c),i.Pb(a.b))},token:t,providedIn:"root"}),t}()},KwJk:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return c}));var r=function(t,n){return null!==n.closest(t)},i=function(t){return"string"==typeof t&&t.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(t),!0):void 0},o=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},a=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(n,e,r){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||a.test(n)){t.next=4;break}if(!(i=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),i.push(n,r)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}()},NqGI:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i}));var r=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(n,e,r,i,o){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach((function(t){return a.classList.add(t)})),o&&Object.assign(a,o),e.appendChild(a),t.t0=a.componentOnReady,!t.t0){t.next=12;break}return t.next=12,a.componentOnReady();case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t)})));return function(n,e,r,i,o){return t.apply(this,arguments)}}(),i=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},xgmX:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return i}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},c=function(){r.selectionEnd()},u=function(t){r.impact(t)}}}]);