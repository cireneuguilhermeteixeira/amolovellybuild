(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"4cNi":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class i{}var e=u("pMnS"),t=u("MKJQ"),a=u("sZkV"),s=u("s7LF"),r=u("SVse"),b=u("KApT"),p=u("sM2F"),g=u("AytR");class d{constructor(l,n,u,o){this.formBuilder=l,this.router=n,this.userData=u,this.errorChecker=o,this.isLoading=!1}ngOnInit(){this.initForm()}initForm(){this.signupForm=this.formBuilder.group({username:new s.c("",s.p.required),email:new s.c("",[s.p.required,s.p.email]),fone:new s.c("",s.p.required),password:new s.c("",[s.p.required,s.p.minLength(6)]),passwordConfirm:new s.c("",[s.p.required,s.p.minLength(6)])})}passwordOk(){return this.signupForm.get("password").value==this.signupForm.get("passwordConfirm").value}onSignup(l){this.isLoading=!0,this.userData.signup(l.value).then(()=>{this.signupForm.reset(),location.replace(g.a.url+"/app/tabs/estampas")}).catch(l=>{this.errorChecker.getErrorMessage("Erro ao se comunicar com o servidor. Experimente mudar o email ou n\xfamero de telefone.",l)}).then(()=>this.isLoading=!1)}}var c=u("iInd"),m=o.nb({encapsulation:0,styles:[[".signup-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.signup-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}"]],data:{}});function h(l){return o.Kb(0,[(l()(),o.pb(0,0,null,null,1,"ion-spinner",[["name","lines"]],null,null,null,t.Kb,t.N)),o.ob(1,49152,null,0,a.qb,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"lines")}),null)}function C(l){return o.Kb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,t.qb,t.t)),o.ob(1,49152,null,0,a.C,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,t.Tb,t.W)),o.ob(3,49152,null,0,a.Ab,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,t.ab,t.d)),o.ob(5,49152,null,0,a.m,[o.h,o.k,o.x],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,t.xb,t.B)),o.ob(7,49152,null,0,a.S,[o.h,o.k,o.x],null,null),(l()(),o.pb(8,0,null,0,2,"ion-title",[],null,null,null,t.Rb,t.U)),o.ob(9,49152,null,0,a.yb,[o.h,o.k,o.x],null,null),(l()(),o.Ib(-1,0,["Cadastro"])),(l()(),o.pb(11,0,null,null,80,"ion-content",[],null,null,null,t.jb,t.m)),o.ob(12,49152,null,0,a.v,[o.h,o.k,o.x],null,null),(l()(),o.pb(13,0,null,0,1,"div",[["class","signup-logo"]],null,null,null,null,null)),(l()(),o.pb(14,0,null,null,0,"img",[["alt","Ionic Logo"],["src","assets/img/appicon.svg"]],null,null,null,null,null)),(l()(),o.pb(15,0,null,0,76,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==o.Bb(l,17).onSubmit(u)&&i),"reset"===n&&(i=!1!==o.Bb(l,17).onReset()&&i),i}),null,null)),o.ob(16,16384,null,0,s.t,[],null,null),o.ob(17,540672,null,0,s.e,[[8,null],[8,null]],{form:[0,"form"]},null),o.Fb(2048,null,s.a,null,[s.e]),o.ob(19,16384,null,0,s.k,[[4,s.a]],null,null),(l()(),o.pb(20,0,null,null,61,"ion-list",[["lines","none"]],null,null,null,t.wb,t.y)),o.ob(21,49152,null,0,a.P,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(22,0,null,0,11,"ion-item",[],null,null,null,t.tb,t.w)),o.ob(23,49152,null,0,a.I,[o.h,o.k,o.x],null,null),(l()(),o.pb(24,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,t.ub,t.x)),o.ob(25,49152,null,0,a.O,[o.h,o.k,o.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),o.Ib(-1,0,["Nome completo"])),(l()(),o.pb(27,0,null,0,6,"ion-input",[["formControlName","username"],["name","username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==o.Bb(l,28)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==o.Bb(l,28)._handleInputEvent(u.target)&&i),i}),t.sb,t.v)),o.ob(28,16384,null,0,a.Nb,[o.k],null,null),o.Fb(1024,null,s.h,(function(l){return[l]}),[a.Nb]),o.ob(30,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.s]],{name:[0,"name"]},null),o.Fb(2048,null,s.i,null,[s.d]),o.ob(32,16384,null,0,s.j,[[4,s.i]],null,null),o.ob(33,49152,null,0,a.H,[o.h,o.k,o.x],{name:[0,"name"],type:[1,"type"]},null),(l()(),o.pb(34,0,null,0,11,"ion-item",[],null,null,null,t.tb,t.w)),o.ob(35,49152,null,0,a.I,[o.h,o.k,o.x],null,null),(l()(),o.pb(36,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,t.ub,t.x)),o.ob(37,49152,null,0,a.O,[o.h,o.k,o.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),o.Ib(-1,0,["Email"])),(l()(),o.pb(39,0,null,0,6,"ion-input",[["formControlName","email"],["name","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==o.Bb(l,40)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==o.Bb(l,40)._handleInputEvent(u.target)&&i),i}),t.sb,t.v)),o.ob(40,16384,null,0,a.Nb,[o.k],null,null),o.Fb(1024,null,s.h,(function(l){return[l]}),[a.Nb]),o.ob(42,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.s]],{name:[0,"name"]},null),o.Fb(2048,null,s.i,null,[s.d]),o.ob(44,16384,null,0,s.j,[[4,s.i]],null,null),o.ob(45,49152,null,0,a.H,[o.h,o.k,o.x],{name:[0,"name"],type:[1,"type"]},null),(l()(),o.pb(46,0,null,0,11,"ion-item",[],null,null,null,t.tb,t.w)),o.ob(47,49152,null,0,a.I,[o.h,o.k,o.x],null,null),(l()(),o.pb(48,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,t.ub,t.x)),o.ob(49,49152,null,0,a.O,[o.h,o.k,o.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),o.Ib(-1,0,["Telefone"])),(l()(),o.pb(51,0,null,0,6,"ion-input",[["formControlName","fone"],["name","fone"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==o.Bb(l,52)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==o.Bb(l,52)._handleInputEvent(u.target)&&i),i}),t.sb,t.v)),o.ob(52,16384,null,0,a.Nb,[o.k],null,null),o.Fb(1024,null,s.h,(function(l){return[l]}),[a.Nb]),o.ob(54,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.s]],{name:[0,"name"]},null),o.Fb(2048,null,s.i,null,[s.d]),o.ob(56,16384,null,0,s.j,[[4,s.i]],null,null),o.ob(57,49152,null,0,a.H,[o.h,o.k,o.x],{name:[0,"name"],type:[1,"type"]},null),(l()(),o.pb(58,0,null,0,11,"ion-item",[],null,null,null,t.tb,t.w)),o.ob(59,49152,null,0,a.I,[o.h,o.k,o.x],null,null),(l()(),o.pb(60,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,t.ub,t.x)),o.ob(61,49152,null,0,a.O,[o.h,o.k,o.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),o.Ib(-1,0,["Senha"])),(l()(),o.pb(63,0,null,0,6,"ion-input",[["formControlName","password"],["name","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==o.Bb(l,64)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==o.Bb(l,64)._handleInputEvent(u.target)&&i),i}),t.sb,t.v)),o.ob(64,16384,null,0,a.Nb,[o.k],null,null),o.Fb(1024,null,s.h,(function(l){return[l]}),[a.Nb]),o.ob(66,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.s]],{name:[0,"name"]},null),o.Fb(2048,null,s.i,null,[s.d]),o.ob(68,16384,null,0,s.j,[[4,s.i]],null,null),o.ob(69,49152,null,0,a.H,[o.h,o.k,o.x],{name:[0,"name"],type:[1,"type"]},null),(l()(),o.pb(70,0,null,0,11,"ion-item",[],null,null,null,t.tb,t.w)),o.ob(71,49152,null,0,a.I,[o.h,o.k,o.x],null,null),(l()(),o.pb(72,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,t.ub,t.x)),o.ob(73,49152,null,0,a.O,[o.h,o.k,o.x],{color:[0,"color"],position:[1,"position"]},null),(l()(),o.Ib(-1,0,["Confirme a Senha"])),(l()(),o.pb(75,0,null,0,6,"ion-input",[["formControlName","passwordConfirm"],["name","passwordConfirm"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==o.Bb(l,76)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==o.Bb(l,76)._handleInputEvent(u.target)&&i),i}),t.sb,t.v)),o.ob(76,16384,null,0,a.Nb,[o.k],null,null),o.Fb(1024,null,s.h,(function(l){return[l]}),[a.Nb]),o.ob(78,671744,null,0,s.d,[[3,s.a],[8,null],[8,null],[6,s.h],[2,s.s]],{name:[0,"name"]},null),o.Fb(2048,null,s.i,null,[s.d]),o.ob(80,16384,null,0,s.j,[[4,s.i]],null,null),o.ob(81,49152,null,0,a.H,[o.h,o.k,o.x],{name:[0,"name"],type:[1,"type"]},null),(l()(),o.pb(82,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,t.Pb,t.S)),o.ob(83,49152,null,0,a.vb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(84,0,null,0,1,"p",[["class","ion-padding-start"]],[[8,"hidden",0]],null,null,null,null)),(l()(),o.Ib(-1,null,[" Senhas n\xe3o coincidem "])),(l()(),o.pb(86,0,null,null,5,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),o.pb(87,0,null,null,4,"ion-button",[["expand","block"],["type","submit"]],null,[[null,"click"]],(function(l,n,u){var o=!0,i=l.component;return"click"===n&&(o=!1!==i.onSignup(i.signupForm)&&o),o}),t.Z,t.c)),o.ob(88,49152,null,0,a.l,[o.h,o.k,o.x],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),o.Ib(-1,0,["Cadastrar-se\xa0 "])),(l()(),o.eb(16777216,null,0,1,null,h)),o.ob(91,16384,null,0,r.k,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,17,0,u.signupForm),l(n,21,0,"none"),l(n,25,0,"primary","stacked"),l(n,30,0,"username"),l(n,33,0,"username","text"),l(n,37,0,"primary","stacked"),l(n,42,0,"email"),l(n,45,0,"email","email"),l(n,49,0,"primary","stacked"),l(n,54,0,"fone"),l(n,57,0,"fone","text"),l(n,61,0,"primary","stacked"),l(n,66,0,"password"),l(n,69,0,"password","password"),l(n,73,0,"primary","stacked"),l(n,78,0,"passwordConfirm"),l(n,81,0,"passwordConfirm","password"),l(n,83,0,"danger"),l(n,88,0,!u.signupForm.valid||!u.passwordOk()||u.isLoading,"block","submit"),l(n,91,0,u.isLoading)}),(function(l,n){var u=n.component;l(n,15,0,o.Bb(n,19).ngClassUntouched,o.Bb(n,19).ngClassTouched,o.Bb(n,19).ngClassPristine,o.Bb(n,19).ngClassDirty,o.Bb(n,19).ngClassValid,o.Bb(n,19).ngClassInvalid,o.Bb(n,19).ngClassPending),l(n,27,0,o.Bb(n,32).ngClassUntouched,o.Bb(n,32).ngClassTouched,o.Bb(n,32).ngClassPristine,o.Bb(n,32).ngClassDirty,o.Bb(n,32).ngClassValid,o.Bb(n,32).ngClassInvalid,o.Bb(n,32).ngClassPending),l(n,39,0,o.Bb(n,44).ngClassUntouched,o.Bb(n,44).ngClassTouched,o.Bb(n,44).ngClassPristine,o.Bb(n,44).ngClassDirty,o.Bb(n,44).ngClassValid,o.Bb(n,44).ngClassInvalid,o.Bb(n,44).ngClassPending),l(n,51,0,o.Bb(n,56).ngClassUntouched,o.Bb(n,56).ngClassTouched,o.Bb(n,56).ngClassPristine,o.Bb(n,56).ngClassDirty,o.Bb(n,56).ngClassValid,o.Bb(n,56).ngClassInvalid,o.Bb(n,56).ngClassPending),l(n,63,0,o.Bb(n,68).ngClassUntouched,o.Bb(n,68).ngClassTouched,o.Bb(n,68).ngClassPristine,o.Bb(n,68).ngClassDirty,o.Bb(n,68).ngClassValid,o.Bb(n,68).ngClassInvalid,o.Bb(n,68).ngClassPending),l(n,75,0,o.Bb(n,80).ngClassUntouched,o.Bb(n,80).ngClassTouched,o.Bb(n,80).ngClassPristine,o.Bb(n,80).ngClassDirty,o.Bb(n,80).ngClassValid,o.Bb(n,80).ngClassInvalid,o.Bb(n,80).ngClassPending),l(n,84,0,u.passwordOk())}))}function B(l){return o.Kb(0,[(l()(),o.pb(0,0,null,null,1,"page-signup",[],null,null,null,C,m)),o.ob(1,114688,null,0,d,[s.b,c.m,b.a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var v=o.lb("page-signup",d,B,{},{},[]);class k{}u.d(n,"SignUpModuleNgFactory",(function(){return f}));var f=o.mb(i,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[e.a,v]],[3,o.j],o.v]),o.zb(4608,r.m,r.l,[o.s,[2,r.w]]),o.zb(4608,s.r,s.r,[]),o.zb(4608,s.b,s.b,[]),o.zb(4608,a.c,a.c,[o.x,o.g]),o.zb(4608,a.Fb,a.Fb,[a.c,o.j,o.p]),o.zb(4608,a.Kb,a.Kb,[a.c,o.j,o.p]),o.zb(1073742336,r.b,r.b,[]),o.zb(1073742336,s.q,s.q,[]),o.zb(1073742336,s.f,s.f,[]),o.zb(1073742336,s.n,s.n,[]),o.zb(1073742336,a.Cb,a.Cb,[]),o.zb(1073742336,c.q,c.q,[[2,c.v],[2,c.m]]),o.zb(1073742336,k,k,[]),o.zb(1073742336,i,i,[]),o.zb(1024,c.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);