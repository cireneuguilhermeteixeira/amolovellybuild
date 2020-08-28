function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{oCp2:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),u=function n(){_classCallCheck(this,n)},o=e("pMnS"),a=e("s7LF"),i=e("MKJQ"),r=e("sZkV"),b=e("SVse"),c=e("mrSG"),s=e("1I5t"),p=e("9B/o"),d=e("HUy7"),g=e("TMng"),m=e("KApT"),h=e("JV4b"),f=e("sM2F"),k=function n(){_classCallCheck(this,n)},v=function(){function n(l,e,t,u,o,a,i,r,b,c,s,p){_classCallCheck(this,n),this.modalController=l,this.utilsProvider=e,this.formBuilder=t,this.loadingCtrl=u,this.route=o,this.actionSheetCtrl=a,this.confData=i,this.inAppBrowser=r,this.auth=b,this.router=c,this.estampaProvider=s,this.errorCeck=p,this.iconsToAdmin=!1,this.loading=!1}return _createClass(n,[{key:"openImage",value:function(n){this.modalController.create({component:g.a,componentProps:{img:n}}).then((function(n){return n.present()}))}},{key:"ionViewWillEnter",value:function(){var n=this;this.loading=!0,this.initFormItem();var l=this.route.snapshot.paramMap.get("estampa_id");this.auth.getCurrentUser().then((function(l){l.is_admin&&(n.iconsToAdmin=!0)})).then((function(){return n.estampaProvider.findById(l)})).then((function(l){n.estampa=l,n.loading=!1}))}},{key:"editarEstampa",value:function(){return this.router.navigateByUrl("/estampa-form/"+this.estampa.id)}},{key:"initFormItem",value:function(){this.itemForm=this.formBuilder.group({quantidadeP:new a.c(0,[a.p.required,a.p.min(0)]),quantidadeM:new a.c(0,[a.p.required,a.p.min(0)]),quantidadeG:new a.c(0,[a.p.required,a.p.min(0)])})}},{key:"couldNotBeAllZero",value:function(){return 0===Number(this.itemForm.get("quantidadeP").value)&&0===Number(this.itemForm.get("quantidadeM").value)&&0===Number(this.itemForm.get("quantidadeG").value)}},{key:"openExternalUrl",value:function(n){this.inAppBrowser.create(n,"_blank")}},{key:"addCart",value:function(){var n=this,l=new k;l.estampa_id=this.estampa.id,l.quantidadeP=this.itemForm.get("quantidadeP").value,l.quantidadeM=this.itemForm.get("quantidadeM").value,l.quantidadeG=this.itemForm.get("quantidadeG").value,this.estampaProvider.addItemInCard(l).then((function(){return n.router.navigate(["/app/tabs/estampas"])}))}},{key:"openSocial",value:function(n,l){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingCtrl.create({message:"Posting to ".concat(n),duration:1e3*Math.random()+500});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.next=7,t.onWillDismiss();case 7:l.close();case 8:case"end":return e.stop()}}),e,this)})))}},{key:"openSpeakerShare",value:function(n){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.actionSheetCtrl.create({header:"Share "+n.name,buttons:[{text:"Copy Link",handler:function(){console.log("Copy link clicked on https://twitter.com/"+n.twitter),window.cordova&&window.cordova.plugins.clipboard&&window.cordova.plugins.clipboard.copy("https://twitter.com/"+n.twitter)}},{text:"Share via ..."},{text:"Cancel",role:"cancel"}]});case 2:return e=l.sent,l.next=5,e.present();case 5:case"end":return l.stop()}}),l,this)})))}},{key:"openContact",value:function(n){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.actionSheetCtrl.create({header:"Contact "+n.name,buttons:[{text:"Email ( ".concat(n.email," )"),icon:null,handler:function(){window.open("mailto:"+n.email)}},{text:"Call ( ".concat(n.phone," )"),icon:null,handler:function(){window.open("tel:"+n.phone)}},{text:"Cancel",role:"cancel"}]});case 2:return e=l.sent,l.next=5,e.present();case 5:case"end":return l.stop()}}),l,this)})))}}]),n}(),C=e("iInd"),x=t.nb({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;--background:transparent;--color:white}ion-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{--color:white}.bckg-img[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat}.speaker-background[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:flex;padding-top:var(--ion-safe-area-top);background:rgba(0,0,0,.8);-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:calc(230px + var(--ion-safe-area-top))}.speaker-background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%;margin-top:calc(-1 * var(--ion-safe-area-top))}.speaker-background[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:absolute;color:#fff;text-align:center;bottom:0}.md[_ngcontent-%COMP%]   .speaker-background[_ngcontent-%COMP%]{box-shadow:rgba(0,0,0,.2) 0 3px 1px -2px,rgba(0,0,0,.14) 0 2px 2px 0,rgba(0,0,0,.12) 0 1px 5px 0}.ios[_ngcontent-%COMP%]   .speaker-background[_ngcontent-%COMP%]{box-shadow:rgba(0,0,0,.12) 0 4px 16px}.speaker-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:6px;margin-right:6px}.speaker-detail[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;background:var(--ion-color-step-150,#d7d8da)}ion-input[_ngcontent-%COMP%]{text-align:right}"]],data:{}});function w(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,46,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,e){var u=!0;return"submit"===l&&(u=!1!==t.Bb(n,2).onSubmit(e)&&u),"reset"===l&&(u=!1!==t.Bb(n,2).onReset()&&u),u}),null,null)),t.ob(1,16384,null,0,a.t,[],null,null),t.ob(2,540672,null,0,a.e,[[8,null],[8,null]],{form:[0,"form"]},null),t.Fb(2048,null,a.a,null,[a.e]),t.ob(4,16384,null,0,a.k,[[4,a.a]],null,null),(n()(),t.pb(5,0,null,null,37,"ion-list",[["lines","none"]],null,null,null,i.yb,i.y)),t.ob(6,49152,null,0,r.P,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(7,0,null,0,11,"ion-item",[],null,null,null,i.vb,i.w)),t.ob(8,49152,null,0,r.I,[t.h,t.k,t.x],null,null),(n()(),t.pb(9,0,null,0,2,"ion-label",[],null,null,null,i.wb,i.x)),t.ob(10,49152,null,0,r.O,[t.h,t.k,t.x],null,null),(n()(),t.Ib(11,0,[" Quantidade de "," P "])),(n()(),t.pb(12,0,null,0,6,"ion-input",[["formControlName","quantidadeP"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.Bb(n,14)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Bb(n,14)._handleIonChange(e.target)&&u),u}),i.ub,i.v)),t.ob(13,49152,null,0,r.H,[t.h,t.k,t.x],{type:[0,"type"]},null),t.ob(14,16384,null,0,r.Ib,[t.k],null,null),t.Fb(1024,null,a.h,(function(n){return[n]}),[r.Ib]),t.ob(16,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.s]],{name:[0,"name"]},null),t.Fb(2048,null,a.i,null,[a.d]),t.ob(18,16384,null,0,a.j,[[4,a.i]],null,null),(n()(),t.pb(19,0,null,0,11,"ion-item",[],null,null,null,i.vb,i.w)),t.ob(20,49152,null,0,r.I,[t.h,t.k,t.x],null,null),(n()(),t.pb(21,0,null,0,2,"ion-label",[],null,null,null,i.wb,i.x)),t.ob(22,49152,null,0,r.O,[t.h,t.k,t.x],null,null),(n()(),t.Ib(23,0,[" Quantidade de "," M "])),(n()(),t.pb(24,0,null,0,6,"ion-input",[["formControlName","quantidadeM"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.Bb(n,26)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Bb(n,26)._handleIonChange(e.target)&&u),u}),i.ub,i.v)),t.ob(25,49152,null,0,r.H,[t.h,t.k,t.x],{type:[0,"type"]},null),t.ob(26,16384,null,0,r.Ib,[t.k],null,null),t.Fb(1024,null,a.h,(function(n){return[n]}),[r.Ib]),t.ob(28,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.s]],{name:[0,"name"]},null),t.Fb(2048,null,a.i,null,[a.d]),t.ob(30,16384,null,0,a.j,[[4,a.i]],null,null),(n()(),t.pb(31,0,null,0,11,"ion-item",[],null,null,null,i.vb,i.w)),t.ob(32,49152,null,0,r.I,[t.h,t.k,t.x],null,null),(n()(),t.pb(33,0,null,0,2,"ion-label",[],null,null,null,i.wb,i.x)),t.ob(34,49152,null,0,r.O,[t.h,t.k,t.x],null,null),(n()(),t.Ib(35,0,[" Quantidade de "," G "])),(n()(),t.pb(36,0,null,0,6,"ion-input",[["formControlName","quantidadeG"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.Bb(n,38)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Bb(n,38)._handleIonChange(e.target)&&u),u}),i.ub,i.v)),t.ob(37,49152,null,0,r.H,[t.h,t.k,t.x],{type:[0,"type"]},null),t.ob(38,16384,null,0,r.Ib,[t.k],null,null),t.Fb(1024,null,a.h,(function(n){return[n]}),[r.Ib]),t.ob(40,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.h],[2,a.s]],{name:[0,"name"]},null),t.Fb(2048,null,a.i,null,[a.d]),t.ob(42,16384,null,0,a.j,[[4,a.i]],null,null),(n()(),t.pb(43,0,null,null,3,"div",[["class","ion-padding"]],null,null,null,null,null)),(n()(),t.pb(44,0,null,null,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addCart()&&t),t}),i.cb,i.d)),t.ob(45,49152,null,0,r.l,[t.h,t.k,t.x],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(n()(),t.Ib(-1,0,["Adicionar no carrinho"]))],(function(n,l){var e=l.component;n(l,2,0,e.itemForm),n(l,6,0,"none"),n(l,13,0,"number"),n(l,16,0,"quantidadeP"),n(l,25,0,"number"),n(l,28,0,"quantidadeM"),n(l,37,0,"number"),n(l,40,0,"quantidadeG"),n(l,45,0,e.itemForm.invalid||e.couldNotBeAllZero(),"block")}),(function(n,l){var e=l.component;n(l,0,0,t.Bb(l,4).ngClassUntouched,t.Bb(l,4).ngClassTouched,t.Bb(l,4).ngClassPristine,t.Bb(l,4).ngClassDirty,t.Bb(l,4).ngClassValid,t.Bb(l,4).ngClassInvalid,t.Bb(l,4).ngClassPending),n(l,11,0,null==e.estampa?null:e.estampa.categoria),n(l,12,0,t.Bb(l,18).ngClassUntouched,t.Bb(l,18).ngClassTouched,t.Bb(l,18).ngClassPristine,t.Bb(l,18).ngClassDirty,t.Bb(l,18).ngClassValid,t.Bb(l,18).ngClassInvalid,t.Bb(l,18).ngClassPending),n(l,23,0,null==e.estampa?null:e.estampa.categoria),n(l,24,0,t.Bb(l,30).ngClassUntouched,t.Bb(l,30).ngClassTouched,t.Bb(l,30).ngClassPristine,t.Bb(l,30).ngClassDirty,t.Bb(l,30).ngClassValid,t.Bb(l,30).ngClassInvalid,t.Bb(l,30).ngClassPending),n(l,35,0,null==e.estampa?null:e.estampa.categoria),n(l,36,0,t.Bb(l,42).ngClassUntouched,t.Bb(l,42).ngClassTouched,t.Bb(l,42).ngClassPristine,t.Bb(l,42).ngClassDirty,t.Bb(l,42).ngClassValid,t.Bb(l,42).ngClassInvalid,t.Bb(l,42).ngClassPending)}))}function B(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["style","margin-top:80px"],["vertical","top"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.editarEstampa()&&t),t}),i.pb,i.o)),t.ob(1,49152,null,0,r.x,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),t.pb(2,0,null,0,3,"ion-fab-button",[["color","primary"],["title","Editar estampa"]],null,null,null,i.nb,i.p)),t.ob(3,49152,null,0,r.y,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.pb(4,0,null,0,1,"ion-icon",[["name","build"]],null,null,null,i.tb,i.u)),t.ob(5,49152,null,0,r.D,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"end","top"),n(l,3,0,"primary"),n(l,5,0,"build")}),null)}function y(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,40,"ion-content",[["class","speaker-detail"]],null,null,null,i.lb,i.m)),t.ob(1,49152,null,0,r.v,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,4,"div",[["class","bckg-img"]],[[4,"background-image",null]],null,null,null,null)),(n()(),t.pb(3,0,null,null,3,"div",[["class","speaker-background"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,0,"img",[],[[8,"src",4]],[[null,"click"]],(function(n,l,e){var t=!0,u=n.component;return"click"===l&&(t=!1!==u.openImage(null==u.estampa?null:u.estampa.imagem)&&t),t}),null,null)),(n()(),t.pb(5,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Ib(6,null,["",""])),(n()(),t.pb(7,0,null,0,3,"div",[["class","ion-padding speaker-detail"]],null,null,null,null,null)),(n()(),t.pb(8,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(9,null,[""," "])),(n()(),t.pb(10,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.pb(11,0,null,0,1,"h3",[["class","ion-padding-top ion-padding-start"]],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Tamanho"])),(n()(),t.eb(16777216,null,0,1,null,w)),t.ob(14,16384,null,0,b.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,0,1,null,B)),t.ob(16,16384,null,0,b.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(17,0,null,0,23,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,i.pb,i.o)),t.ob(18,49152,[["fab",4]],0,r.x,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),t.pb(19,0,null,0,3,"ion-fab-button",[["color","favorite"]],null,null,null,i.nb,i.p)),t.ob(20,49152,null,0,r.y,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.pb(21,0,null,0,1,"ion-icon",[["name","share-social"]],null,null,null,i.tb,i.u)),t.ob(22,49152,null,0,r.D,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.pb(23,0,null,0,17,"ion-fab-list",[["side","bottom"]],null,null,null,i.ob,i.q)),t.ob(24,49152,null,0,r.z,[t.h,t.k,t.x],{side:[0,"side"]},null),(n()(),t.pb(25,0,null,0,3,"ion-fab-button",[["color","favorite"]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.openSocial("Whatsapp",t.Bb(n,18))&&u),u}),i.nb,i.p)),t.ob(26,49152,null,0,r.y,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.pb(27,0,null,0,1,"ion-icon",[["name","logo-whatsapp"]],null,null,null,i.tb,i.u)),t.ob(28,49152,null,0,r.D,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.pb(29,0,null,0,3,"ion-fab-button",[["color","instagram"]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.openSocial("Instagram",t.Bb(n,18))&&u),u}),i.nb,i.p)),t.ob(30,49152,null,0,r.y,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.pb(31,0,null,0,1,"ion-icon",[["name","logo-instagram"]],null,null,null,i.tb,i.u)),t.ob(32,49152,null,0,r.D,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.pb(33,0,null,0,3,"ion-fab-button",[["color","twitter"]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.openSocial("Twitter",t.Bb(n,18))&&u),u}),i.nb,i.p)),t.ob(34,49152,null,0,r.y,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.pb(35,0,null,0,1,"ion-icon",[["name","logo-twitter"]],null,null,null,i.tb,i.u)),t.ob(36,49152,null,0,r.D,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.pb(37,0,null,0,3,"ion-fab-button",[["color","facebook"]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.openSocial("Facebook",t.Bb(n,18))&&u),u}),i.nb,i.p)),t.ob(38,49152,null,0,r.y,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.pb(39,0,null,0,1,"ion-icon",[["name","logo-facebook"]],null,null,null,i.tb,i.u)),t.ob(40,49152,null,0,r.D,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(n,l){var e=l.component;n(l,14,0,e.itemForm),n(l,16,0,e.iconsToAdmin),n(l,18,0,"end","top"),n(l,20,0,"favorite"),n(l,22,0,"share-social"),n(l,24,0,"bottom"),n(l,26,0,"favorite"),n(l,28,0,"logo-whatsapp"),n(l,30,0,"instagram"),n(l,32,0,"logo-instagram"),n(l,34,0,"twitter"),n(l,36,0,"logo-twitter"),n(l,38,0,"facebook"),n(l,40,0,"logo-facebook")}),(function(n,l){var e=l.component;n(l,2,0,"url("+(null==e.estampa?null:e.estampa.imagem)+")"),n(l,4,0,null==e.estampa?null:e.estampa.imagem),n(l,6,0,null==e.estampa?null:e.estampa.nome),n(l,9,0,null==e.estampa?null:e.estampa.descricao)}))}function P(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,3,"ion-content",[],null,null,null,i.lb,i.m)),t.ob(1,49152,null,0,r.v,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,1,"ion-spinner",[["class","loading-list"]],null,null,null,i.Ob,i.P)),t.ob(3,49152,null,0,r.qb,[t.h,t.k,t.x],null,null)],null,null)}function _(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,8,"ion-header",[["class","ion-no-border"]],null,null,null,i.sb,i.t)),t.ob(1,49152,null,0,r.C,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,6,"ion-toolbar",[],null,null,null,i.Xb,i.Y)),t.ob(3,49152,null,0,r.Ab,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.db,i.e)),t.ob(5,49152,null,0,r.m,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/app/tabs/estampas"]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Bb(n,8).onClick(e)&&u),u}),i.bb,i.c)),t.ob(7,49152,null,0,r.h,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.ob(8,16384,null,0,r.i,[[2,r.gb],r.Gb,r.e],{defaultHref:[0,"defaultHref"]},null),(n()(),t.eb(16777216,null,null,1,null,y)),t.ob(10,16384,null,0,b.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,P)),t.ob(12,16384,null,0,b.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,7,0,"/app/tabs/estampas"),n(l,8,0,"/app/tabs/estampas"),n(l,10,0,!e.loading),n(l,12,0,e.loading)}),null)}var I=t.lb("page-estampa-detalhes",v,(function(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"page-estampa-detalhes",[],null,null,null,_,x)),t.ob(1,49152,null,0,v,[r.Fb,d.a,a.b,r.Db,C.a,r.a,s.a,p.a,m.a,C.m,h.a,f.a],null,null)],null,null)}),{},{},[]),M=function n(){_classCallCheck(this,n)};e.d(l,"EstampaDetalhesModuleNgFactory",(function(){return q}));var q=t.mb(u,[],(function(n){return t.yb([t.zb(512,t.j,t.X,[[8,[o.a,I]],[3,t.j],t.v]),t.zb(4608,b.m,b.l,[t.s,[2,b.w]]),t.zb(4608,r.c,r.c,[t.x,t.g]),t.zb(4608,r.Fb,r.Fb,[r.c,t.j,t.p]),t.zb(4608,r.Kb,r.Kb,[r.c,t.j,t.p]),t.zb(4608,a.b,a.b,[]),t.zb(4608,a.r,a.r,[]),t.zb(1073742336,b.b,b.b,[]),t.zb(1073742336,r.Cb,r.Cb,[]),t.zb(1073742336,a.q,a.q,[]),t.zb(1073742336,a.n,a.n,[]),t.zb(1073742336,a.f,a.f,[]),t.zb(1073742336,C.q,C.q,[[2,C.v],[2,C.m]]),t.zb(1073742336,M,M,[]),t.zb(1073742336,u,u,[]),t.zb(1024,C.k,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);