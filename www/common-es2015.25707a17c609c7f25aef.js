(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=`${t*e/n-t}ms`,i=2*Math.PI*e/n;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,i=`${t*r-t}ms`,o=2*Math.PI*r;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:`${9-9*e}px`,"animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})}}},HUy7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("8Y7J");let i=(()=>{class t{constructor(){}formatarData(t){return new Date(Number(t)).toLocaleString()}calculaIdade(t){var e=new Date(t),n=Date.now()-e.getTime();return Math.trunc(n*(1/31536e6))}openGalleryFromBrowser(t){let e=new FileReader;if(t.target.files&&t.target.files.length>0)return e.readAsDataURL(t.target.files[0]),e}}return t.ngInjectableDef=r.Ob({factory:function(){return new t},token:t,providedIn:"root"}),t})()},JV4b:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("AytR"),i=n("8Y7J"),o=n("IheW"),s=n("xgBC");let a=(()=>{class t{constructor(t,e){this.http=t,this.storage=e,this.favorites=[],this.HAS_LOGGED_IN="hasLoggedIn",this.HAS_SEEN_TUTORIAL="hasSeenTutorial"}create(t){return this.http.post(`${r.a.apiUrl}/estampas`,t,{observe:"response"}).toPromise().then(t=>t)}update(t,e){return this.http.put(`${r.a.apiUrl}/estampas/${e}`,t,{observe:"response"}).toPromise().then(t=>(console.log(t),t))}delete(t){return this.http.delete(`${r.a.apiUrl}/estampas/${t}`,{observe:"response"}).toPromise().then(t=>(console.log(t),t))}index(){return this.http.get(`${r.a.apiUrl}/estampas`,{observe:"response"}).toPromise().then(t=>{if(t.body.length)return t.body;throw t})}findById(t){return this.http.get(`${r.a.apiUrl}/estampas/${t}`,{observe:"response"}).toPromise().then(t=>{if(t.body)return t.body;throw t})}}return t.ngInjectableDef=i.Ob({factory:function(){return new t(i.Pb(o.c),i.Pb(s.b))},token:t,providedIn:"root"}),t})()},KwJk:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a}));const r=(t,e)=>null!==e.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n)}return!1}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));const r=async(t,e,n,r,i)=>{if(t)return t.attachViewToDom(e,n,i,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>o.classList.add(t)),i&&Object.assign(o,i),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},xgmX:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return i}));const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},i=()=>{r.selection()},o=()=>{r.selectionStart()},s=()=>{r.selectionChanged()},a=()=>{r.selectionEnd()},c=t=>{r.impact(t)}}}]);