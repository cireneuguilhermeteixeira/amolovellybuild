(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/yGZ":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class i{}var e=u("pMnS"),t=u("MKJQ"),b=u("sZkV"),r=u("s7LF"),a=u("SVse"),s=u("KApT"),g=u("sM2F");class p{constructor(l,n,u,o){this.userData=l,this.router=n,this.errorChecker=u,this.fb=o,this.isLoading=!1}ngOnInit(){this.initForm()}initForm(){this.formLogin=this.fb.group({email:this.fb.control("",[r.p.required,r.p.email]),password:this.fb.control("",[r.p.required,r.p.minLength(6)])})}onLogin(){this.isLoading=!0,this.userData.login(this.formLogin.value.email,this.formLogin.value.password).then(()=>{console.log("logou"),this.formLogin.reset(),this.router.navigateByUrl("/app/tabs/estampas")}).catch(l=>{this.errorChecker.getErrorMessage("Erro ao se comunicar com o servidor. Email ou senha inv\xe1lidos.",l)}).then(()=>this.isLoading=!1)}onSignup(){this.router.navigateByUrl("/signup")}}var c=u("iInd"),d=o.nb({encapsulation:0,styles:[[".login-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]],data:{}});function h(l){return o.Kb(0,[(l()(),o.pb(0,0,null,null,1,"ion-spinner",[["name","lines"]],null,null,null,t.Mb,t.O)),o.ob(1,49152,null,0,b.qb,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"lines")}),null)}function m(l){return o.Kb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,t.qb,t.s)),o.ob(1,49152,null,0,b.C,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,t.Vb,t.X)),o.ob(3,49152,null,0,b.Ab,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,t.cb,t.e)),o.ob(5,49152,null,0,b.m,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,t.xb,t.A)),o.ob(7,49152,null,0,b.S,[o.h,o.k,o.x],null,null),(l()(),o.pb(8,0,null,0,2,"ion-title",[],null,null,null,t.Tb,t.V)),o.ob(9,49152,null,0,b.yb,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Login"])),(l()(),o.pb(11,0,null,null,52,"ion-content",[],null,null,null,t.kb,t.m)),o.ob(12,49152,null,0,b.v,[o.h,o.k,o.x],null,null),(l()(),o.pb(13,0,null,0,1,"div",[["class","login-logo"]],null,null,null,null,null)),(l()(),o.pb(14,0,null,null,0,"img",[["alt","Ionic Logo"],["src","assets/img/logo.png"]],null,null,null,null,null)),(l()(),o.pb(15,0,null,0,48,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==o.Bb(l,17).onSubmit(u)&&i),"reset"===n&&(i=!1!==o.Bb(l,17).onReset()&&i),i}),null,null)),o.ob(16,16384,null,0,r.t,[],null,null),o.ob(17,540672,null,0,r.e,[[8,null],[8,null]],{form:[0,"form"]},null),o.Fb(2048,null,r.a,null,[r.e]),o.ob(19,16384,null,0,r.k,[[4,r.a]],null,null),(l()(),o.pb(20,0,null,null,29,"ion-list",[],null,null,null,t.wb,t.x)),o.ob(21,49152,null,0,b.P,[o.h,o.k,o.x],null,null),(l()(),o.pb(22,0,null,0,13,"ion-item",[],null,null,null,t.tb,t.v)),o.ob(23,49152,null,0,b.I,[o.h,o.k,o.x],null,null),(l()(),o.pb(24,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,t.ub,t.w)),o.ob(25,49152,null,0,b.O,[o.h,o.k,o.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),o.Ib(-1,0,["Email"])),(l()(),o.pb(27,0,null,0,8,"ion-input",[["autocapitalize","off"],["formControlName","email"],["name","email"],["required",""],["spellcheck","false"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==o.Bb(l,30)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==o.Bb(l,30)._handleInputEvent(u.target)&&i),i}),t.sb,t.u)),o.ob(28,16384,null,0,r.o,[],{required:[0,"required"]},null),o.Fb(1024,null,r.g,(function(l){return[l]}),[r.o]),o.ob(30,16384,null,0,b.Ob,[o.k],null,null),o.Fb(1024,null,r.h,(function(l){return[l]}),[b.Ob]),o.ob(32,671744,null,0,r.d,[[3,r.a],[6,r.g],[8,null],[6,r.h],[2,r.s]],{name:[0,"name"]},null),o.Fb(2048,null,r.i,null,[r.d]),o.ob(34,16384,null,0,r.j,[[4,r.i]],null,null),o.ob(35,49152,null,0,b.H,[o.h,o.k,o.x],{autocapitalize:[0,"autocapitalize"],name:[1,"name"],required:[2,"required"],spellcheck:[3,"spellcheck"],type:[4,"type"]},null),(l()(),o.pb(36,0,null,0,13,"ion-item",[],null,null,null,t.tb,t.v)),o.ob(37,49152,null,0,b.I,[o.h,o.k,o.x],null,null),(l()(),o.pb(38,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,t.ub,t.w)),o.ob(39,49152,null,0,b.O,[o.h,o.k,o.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),o.Ib(-1,0,["Password"])),(l()(),o.pb(41,0,null,0,8,"ion-input",[["formControlName","password"],["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==o.Bb(l,44)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==o.Bb(l,44)._handleInputEvent(u.target)&&i),i}),t.sb,t.u)),o.ob(42,16384,null,0,r.o,[],{required:[0,"required"]},null),o.Fb(1024,null,r.g,(function(l){return[l]}),[r.o]),o.ob(44,16384,null,0,b.Ob,[o.k],null,null),o.Fb(1024,null,r.h,(function(l){return[l]}),[b.Ob]),o.ob(46,671744,null,0,r.d,[[3,r.a],[6,r.g],[8,null],[6,r.h],[2,r.s]],{name:[0,"name"]},null),o.Fb(2048,null,r.i,null,[r.d]),o.ob(48,16384,null,0,r.j,[[4,r.i]],null,null),o.ob(49,49152,null,0,b.H,[o.h,o.k,o.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),o.pb(50,0,null,null,13,"ion-row",[],null,null,null,t.Eb,t.G)),o.ob(51,49152,null,0,b.hb,[o.h,o.k,o.x],null,null),(l()(),o.pb(52,0,null,0,6,"ion-col",[],null,null,null,t.jb,t.l)),o.ob(53,49152,null,0,b.u,[o.h,o.k,o.x],null,null),(l()(),o.pb(54,0,null,0,4,"ion-button",[["expand","block"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onLogin()&&o),o}),t.bb,t.d)),o.ob(55,49152,null,0,b.l,[o.h,o.k,o.x],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),o.Ib(-1,0,[" Login\xa0 "])),(l()(),o.eb(16777216,null,0,1,null,h)),o.ob(58,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(59,0,null,0,4,"ion-col",[],null,null,null,t.jb,t.l)),o.ob(60,49152,null,0,b.u,[o.h,o.k,o.x],null,null),(l()(),o.pb(61,0,null,0,2,"ion-button",[["color","light"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onSignup()&&o),o}),t.bb,t.d)),o.ob(62,49152,null,0,b.l,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),o.Ib(-1,0,["Signup"]))],(function(l,n){var u=n.component;l(n,17,0,u.formLogin),l(n,25,0,"primary","stacked"),l(n,28,0,""),l(n,32,0,"email"),l(n,35,0,"off","email","","false","text"),l(n,39,0,"primary","stacked"),l(n,42,0,""),l(n,46,0,"password"),l(n,49,0,"password","","password"),l(n,55,0,!u.formLogin.valid,"block","submit"),l(n,58,0,u.isLoading),l(n,62,0,"light","block")}),(function(l,n){l(n,15,0,o.Bb(n,19).ngClassUntouched,o.Bb(n,19).ngClassTouched,o.Bb(n,19).ngClassPristine,o.Bb(n,19).ngClassDirty,o.Bb(n,19).ngClassValid,o.Bb(n,19).ngClassInvalid,o.Bb(n,19).ngClassPending),l(n,27,0,o.Bb(n,28).required?"":null,o.Bb(n,34).ngClassUntouched,o.Bb(n,34).ngClassTouched,o.Bb(n,34).ngClassPristine,o.Bb(n,34).ngClassDirty,o.Bb(n,34).ngClassValid,o.Bb(n,34).ngClassInvalid,o.Bb(n,34).ngClassPending),l(n,41,0,o.Bb(n,42).required?"":null,o.Bb(n,48).ngClassUntouched,o.Bb(n,48).ngClassTouched,o.Bb(n,48).ngClassPristine,o.Bb(n,48).ngClassDirty,o.Bb(n,48).ngClassValid,o.Bb(n,48).ngClassInvalid,o.Bb(n,48).ngClassPending)}))}function f(l){return o.Kb(0,[(l()(),o.pb(0,0,null,null,1,"page-login",[],null,null,null,m,d)),o.ob(1,114688,null,0,p,[s.a,c.m,g.a,r.b],null,null)],(function(l,n){l(n,1,0)}),null)}var k=o.lb("page-login",p,f,{},{},[]);class v{}u.d(n,"LoginModuleNgFactory",(function(){return B}));var B=o.mb(i,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[e.a,k]],[3,o.j],o.v]),o.zb(4608,a.l,a.k,[o.s,[2,a.s]]),o.zb(4608,r.r,r.r,[]),o.zb(4608,r.b,r.b,[]),o.zb(4608,b.c,b.c,[o.x,o.g]),o.zb(4608,b.Fb,b.Fb,[b.c,o.j,o.p]),o.zb(4608,b.Kb,b.Kb,[b.c,o.j,o.p]),o.zb(1073742336,a.b,a.b,[]),o.zb(1073742336,r.q,r.q,[]),o.zb(1073742336,r.f,r.f,[]),o.zb(1073742336,r.n,r.n,[]),o.zb(1073742336,b.Cb,b.Cb,[]),o.zb(1073742336,c.q,c.q,[[2,c.v],[2,c.m]]),o.zb(1073742336,v,v,[]),o.zb(1073742336,i,i,[]),o.zb(1024,c.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);