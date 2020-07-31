function _defineProperties(n,l){for(var u=0;u<l.length;u++){var e=l[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,u){return l&&_defineProperties(n.prototype,l),u&&_defineProperties(n,u),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"8k80":function(n,l,u){"use strict";u.r(l);var e=u("8Y7J"),t=function n(){_classCallCheck(this,n)},o=u("pMnS"),r=u("MKJQ"),a=u("sZkV"),i=u("SVse"),c=u("mrSG"),s=u("KApT"),b=function(){function n(l,u,e){_classCallCheck(this,n),this.alertCtrl=l,this.router=u,this.userData=e}return _createClass(n,[{key:"ngAfterViewInit",value:function(){this.getUsername()}},{key:"updatePicture",value:function(){console.log("Clicked to update picture")}},{key:"changeUsername",value:function(){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,u=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertCtrl.create({header:"Change Username",buttons:["Cancel",{text:"Ok",handler:function(n){u.userData.setUsername(n.username),u.getUsername()}}],inputs:[{type:"text",name:"username",value:this.username,placeholder:"username"}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"getUsername",value:function(){var n=this;this.userData.getUsername().then((function(l){n.username="Usu\xe1rio teste"}))}},{key:"changePassword",value:function(){console.log("Clicked to change password")}},{key:"logout",value:function(){this.userData.logout(),this.router.navigateByUrl("/login")}},{key:"support",value:function(){this.router.navigateByUrl("/support")}}]),n}(),p=u("iInd"),h=e.nb({encapsulation:0,styles:[["img[_ngcontent-%COMP%]{max-width:140px;border-radius:50%}"]],data:{}});function m(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,20,"div",[["class","ion-padding-top ion-text-center"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,0,"img",[["alt","avatar"],["src","https://www.gravatar.com/avatar?d=mm&s=140"]],null,null,null,null,null)),(n()(),e.pb(2,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Ib(3,null,["",""])),(n()(),e.pb(4,0,null,null,16,"ion-list",[["inset",""]],null,null,null,r.wb,r.y)),e.ob(5,49152,null,0,a.P,[e.h,e.k,e.x],{inset:[0,"inset"]},null),(n()(),e.pb(6,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.updatePicture()&&e),e}),r.tb,r.w)),e.ob(7,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(n()(),e.Ib(-1,0,["Update Picture"])),(n()(),e.pb(9,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.changeUsername()&&e),e}),r.tb,r.w)),e.ob(10,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(n()(),e.Ib(-1,0,["Change Username"])),(n()(),e.pb(12,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.changePassword()&&e),e}),r.tb,r.w)),e.ob(13,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(n()(),e.Ib(-1,0,["Change Password"])),(n()(),e.pb(15,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.support()&&e),e}),r.tb,r.w)),e.ob(16,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(n()(),e.Ib(-1,0,["Support"])),(n()(),e.pb(18,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.logout()&&e),e}),r.tb,r.w)),e.ob(19,49152,null,0,a.I,[e.h,e.k,e.x],null,null),(n()(),e.Ib(-1,0,["Logout"]))],(function(n,l){n(l,5,0,"")}),(function(n,l){n(l,3,0,l.component.username)}))}function f(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,r.qb,r.t)),e.ob(1,49152,null,0,a.C,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.Tb,r.W)),e.ob(3,49152,null,0,a.Ab,[e.h,e.k,e.x],null,null),(n()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.ab,r.d)),e.ob(5,49152,null,0,a.m,[e.h,e.k,e.x],null,null),(n()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.xb,r.B)),e.ob(7,49152,null,0,a.S,[e.h,e.k,e.x],null,null),(n()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,r.Rb,r.U)),e.ob(9,49152,null,0,a.yb,[e.h,e.k,e.x],null,null),(n()(),e.Ib(-1,0,["Account"])),(n()(),e.pb(11,0,null,null,3,"ion-content",[],null,null,null,r.jb,r.m)),e.ob(12,49152,null,0,a.v,[e.h,e.k,e.x],null,null),(n()(),e.eb(16777216,null,0,1,null,m)),e.ob(14,16384,null,0,i.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,14,0,l.component.username)}),null)}var k=e.lb("page-account",b,(function(n){return e.Kb(0,[(n()(),e.pb(0,0,null,null,1,"page-account",[],null,null,null,f,h)),e.ob(1,4243456,null,0,b,[a.b,p.m,s.a],null,null)],null,null)}),{},{},[]),g=function n(){_classCallCheck(this,n)};u.d(l,"AccountModuleNgFactory",(function(){return d}));var d=e.mb(t,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[o.a,k]],[3,e.j],e.v]),e.zb(4608,i.m,i.l,[e.s,[2,i.w]]),e.zb(4608,a.c,a.c,[e.x,e.g]),e.zb(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.zb(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.zb(1073742336,i.b,i.b,[]),e.zb(1073742336,a.Cb,a.Cb,[]),e.zb(1073742336,p.q,p.q,[[2,p.v],[2,p.m]]),e.zb(1073742336,g,g,[]),e.zb(1073742336,t,t,[]),e.zb(1024,p.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);