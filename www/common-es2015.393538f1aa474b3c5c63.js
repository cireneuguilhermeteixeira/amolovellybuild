(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1I5t":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("LRne"),s=r("lJxs"),i=r("KApT"),o=r("8Y7J"),a=r("IheW");let c=(()=>{class t{constructor(t,e){this.http=t,this.user=e}load(){return this.data?Object(n.a)(this.data):this.http.get("assets/data/data.json").pipe(Object(s.a)(this.processData,this))}processData(t){return this.data=t,this.data.schedule.forEach(t=>{t.groups.forEach(t=>{t.sessions.forEach(t=>{t.speakers=[],t.speakerNames&&t.speakerNames.forEach(e=>{const r=this.data.speakers.find(t=>t.name===e);r&&(t.speakers.push(r),r.sessions=r.sessions||[],r.sessions.push(t))})})})}),this.data}getTimeline(t,e="",r=[],n="all"){return this.load().pipe(Object(s.a)(s=>{const i=s.schedule[t];i.shownSessions=0;const o=(e=e.toLowerCase().replace(/,|\.|-/g," ")).split(" ").filter(t=>!!t.trim().length);return i.groups.forEach(t=>{t.hide=!0,t.sessions.forEach(e=>{this.filterSession(e,o,r,n),e.hide||(t.hide=!1,i.shownSessions++)})}),i}))}filterSession(t,e,r,n){let s=!1;e.length?e.forEach(e=>{t.name.toLowerCase().indexOf(e)>-1&&(s=!0)}):s=!0;let i=!1;t.tracks.forEach(t=>{-1===r.indexOf(t)&&(i=!0)});let o=!1;"favorites"===n?this.user.hasFavorite(t.name)&&(o=!0):o=!0,t.hide=!(s&&i&&o)}getSpeakers(){return this.load().pipe(Object(s.a)(t=>t.speakers.sort((t,e)=>{const r=t.name.split(" ").pop(),n=e.name.split(" ").pop();return r.localeCompare(n)})))}getTracks(){return this.load().pipe(Object(s.a)(t=>t.tracks.sort()))}getMap(){return this.load().pipe(Object(s.a)(t=>t.map))}}return t.ngInjectableDef=o.Ob({factory:function(){return new t(o.Pb(a.c),o.Pb(i.a))},token:t,providedIn:"root"}),t})()},"6i10":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n={bubbles:{dur:1e3,circles:9,fn:(t,e,r)=>{const n=`${t*e/r-t}ms`,s=2*Math.PI*e/r;return{r:5,style:{top:`${9*Math.sin(s)}px`,left:`${9*Math.cos(s)}px`,"animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(t,e,r)=>{const n=e/r,s=`${t*n-t}ms`,i=2*Math.PI*n;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:`${9-9*e}px`,"animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/r-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/r-t}ms`}})}}},HUy7:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("8Y7J"),s=r("IheW");let i=(()=>{class t{constructor(t){this.http=t}formatarData(t){return new Date(Number(t)).toLocaleString()}calculaIdade(t){var e=new Date(t),r=Date.now()-e.getTime();return Math.trunc(r*(1/31536e6))}openGalleryFromBrowser(t){let e=new FileReader;if(t.target.files&&t.target.files.length>0)return e.readAsDataURL(t.target.files[0]),e}}return t.ngInjectableDef=n.Ob({factory:function(){return new t(n.Pb(s.c))},token:t,providedIn:"root"}),t})()},JV4b:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r("mrSG"),s=r("AytR"),i=r("8Y7J"),o=r("IheW"),a=r("xgBC"),c=r("sZkV");let h=(()=>{class t{constructor(t,e,r){this.http=t,this.storage=e,this.toastCtlr=r,this.favorites=[],this.HAS_LOGGED_IN="hasLoggedIn",this.HAS_SEEN_TUTORIAL="hasSeenTutorial",this.carrinho=[]}create(t){return this.http.post(`${s.a.apiUrl}/estampas`,t,{observe:"response"}).toPromise().then(t=>t)}update(t,e){return this.http.put(`${s.a.apiUrl}/estampas/${e}`,t,{observe:"response"}).toPromise().then(t=>(console.log(t),t))}delete(t){return this.http.delete(`${s.a.apiUrl}/estampas/${t}`,{observe:"response"}).toPromise().then(t=>(console.log(t),t))}index(){return this.http.get(`${s.a.apiUrl}/estampas`,{observe:"response"}).toPromise().then(t=>{if(t.body.length>=0)return t.body;throw t})}findById(t){return this.http.get(`${s.a.apiUrl}/estampas/${t}`,{observe:"response"}).toPromise().then(t=>{if(t.body)return t.body;throw t})}getCarrinho(){return this.storage.get("carrinho")}limparCarrinho(){return this.storage.remove("carrinho")}addItemInCard(t){return n.a(this,void 0,void 0,(function*(){return this.carrinho=[],this.storage.get("carrinho").then(e=>(e&&(this.carrinho=e),0==this.carrinho.filter(e=>e.estampa_id==t.estampa_id).length?(this.carrinho.push(t),console.log(this.carrinho),this.toastCtlr.create({message:"Item adicionado no Carrinho",position:"top",duration:5e3}).then(t=>t.present()),this.storage.set("carrinho",this.carrinho)):(this.carrinho=this.carrinho.filter(e=>e.estampa_id!=t.estampa_id),this.carrinho.push(t),this.toastCtlr.create({message:"Item adicionado no Carrinho. Um item do mesmo tipo foi substitu\xeddo por um novo.",position:"top",duration:8e3}).then(t=>t.present()),this.storage.set("carrinho",this.carrinho))))}))}removeItemInCard(t){return n.a(this,void 0,void 0,(function*(){return this.carrinho=[],this.storage.get("carrinho").then(e=>(e&&(this.carrinho=e),this.carrinho=this.carrinho.filter(e=>e.estampa_id!=t.estampa_id),this.toastCtlr.create({message:"Item removido no Carrinho",position:"top",duration:5e3}).then(t=>t.present()),this.storage.set("carrinho",this.carrinho)))}))}}return t.ngInjectableDef=i.Ob({factory:function(){return new t(i.Pb(o.c),i.Pb(a.b),i.Pb(c.Pb))},token:t,providedIn:"root"}),t})()},KwJk:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return n})),r.d(e,"d",(function(){return a}));const n=(t,e)=>null!==e.closest(t),s=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,r)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const n=document.querySelector("ion-router");if(n)return null!=e&&e.preventDefault(),n.push(t,r)}return!1}},NqGI:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return s}));const n=async(t,e,r,n,s)=>{if(t)return t.attachViewToDom(e,r,s,n);if("string"!=typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r;return n&&n.forEach(t=>i.classList.add(t)),s&&Object.assign(i,s),e.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},XuiR:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("AytR"),s=r("8Y7J"),i=r("IheW"),o=r("xgBC"),a=r("sZkV");let c=(()=>{class t{constructor(t,e,r){this.http=t,this.storage=e,this.toastCtlr=r,this.favorites=[]}create(t){return console.log(t),this.http.post(`${n.a.apiUrl}/support`,t,{observe:"response"}).toPromise().then(t=>t)}index(){return this.http.get(`${n.a.apiUrl}/support`,{observe:"response"}).toPromise().then(t=>{if(t.body.length>=0)return t.body;throw t})}findById(t){return this.http.get(`${n.a.apiUrl}/support/${t}`,{observe:"response"}).toPromise().then(t=>{if(t.body)return t.body;throw t})}}return t.ngInjectableDef=s.Ob({factory:function(){return new t(s.Pb(i.c),s.Pb(o.b),s.Pb(a.Pb))},token:t,providedIn:"root"}),t})()},xgmX:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return a})),r.d(e,"e",(function(){return s}));const n={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:r})},notification(t){const e=this.getEngine();if(!e)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())}},s=()=>{n.selection()},i=()=>{n.selectionStart()},o=()=>{n.selectionChanged()},a=()=>{n.selectionEnd()},c=t=>{n.impact(t)}}}]);