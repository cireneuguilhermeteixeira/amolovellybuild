(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{GDlp:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var i=u("pMnS"),t=u("MKJQ"),a=u("sZkV");class s{constructor(l,n,u){this.menu=l,this.router=n,this.storage=u,this.showSkip=!0}startApp(){this.router.navigateByUrl("/app/tabs/estampas",{replaceUrl:!0}).then(()=>this.storage.set("ion_did_tutorial",!0))}onSlideChangeStart(l){l.target.isEnd().then(l=>{this.showSkip=!l})}ionViewWillEnter(){this.storage.get("ion_did_tutorial").then(l=>{!0===l&&this.router.navigateByUrl("/app/tabs/estampas",{replaceUrl:!0})}),this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}}var r=u("iInd"),b=u("xgBC"),p=e.nb({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--border-color:transparent}.swiper-slide[_ngcontent-%COMP%]{display:block}.slide-title[_ngcontent-%COMP%]{margin-top:2.8rem}.slide-image[_ngcontent-%COMP%]{max-height:50%;max-width:60%;margin:36px 0;pointer-events:none}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600,#60646b)}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}"]],data:{}});function c(l){return e.Kb(0,[e.Gb(402653184,1,{slides:0}),(l()(),e.pb(1,0,null,null,8,"ion-header",[["no-border",""]],null,null,null,t.qb,t.s)),e.ob(2,49152,null,0,a.C,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,6,"ion-toolbar",[],null,null,null,t.Vb,t.X)),e.ob(4,49152,null,0,a.Ab,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,t.cb,t.e)),e.ob(6,49152,null,0,a.m,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,2,"ion-button",[["color","primary"]],[[8,"hidden",0]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.startApp()&&e),e}),t.bb,t.d)),e.ob(8,49152,null,0,a.l,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Ib(-1,0,["Pular"])),(l()(),e.pb(10,0,null,null,46,"ion-content",[["fullscreen","true"]],null,null,null,t.kb,t.m)),e.ob(11,49152,null,0,a.v,[e.h,e.k,e.x],{fullscreen:[0,"fullscreen"]},null),(l()(),e.pb(12,0,null,0,44,"ion-slides",[["pager","false"]],null,[[null,"ionSlideWillChange"]],(function(l,n,u){var e=!0;return"ionSlideWillChange"===n&&(e=!1!==l.component.onSlideChangeStart(u)&&e),e}),t.Lb,t.N)),e.ob(13,49152,[[1,4],["slides",4]],0,a.pb,[e.h,e.k,e.x],{pager:[0,"pager"]},null),(l()(),e.pb(14,0,null,0,11,"ion-slide",[],null,null,null,t.Kb,t.M)),e.ob(15,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,0,0,"img",[["class","slide-image"],["src","assets/img/ica-slidebox-img-1.png"]],null,null,null,null,null)),(l()(),e.pb(17,0,null,0,3,"h2",[["class","slide-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Bemvindo a "])),(l()(),e.pb(19,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Amolovelly"])),(l()(),e.pb(21,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" O "])),(l()(),e.pb(23,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["aplicativo Amolovelly"])),(l()(),e.Ib(-1,null,[" \xe9 uma forma simples de voc\xea fazer seu pedido de roupas e estampas de maneira mais automatizada e simples. "])),(l()(),e.pb(26,0,null,0,8,"ion-slide",[],null,null,null,t.Kb,t.M)),e.ob(27,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.pb(28,0,null,0,0,"img",[["class","slide-image"],["src","assets/img/ica-slidebox-img-2.png"]],null,null,null,null,null)),(l()(),e.pb(29,0,null,0,1,"h2",[["class","slide-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Como utilizar?"])),(l()(),e.pb(31,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),e.pb(32,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["No Amolovelly App"])),(l()(),e.Ib(-1,null,[" voc\xea pode consultar as estampas e roupas que est\xe3o dispon\xedveis no estoque, fazer um pedido desses itens, al\xe9m de gerar um relat\xf3rio, caso voc\xea seja administrador, com informa\xe7\xf5es detalhadas daquele pedido."])),(l()(),e.pb(35,0,null,0,11,"ion-slide",[],null,null,null,t.Kb,t.M)),e.ob(36,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.pb(37,0,null,0,0,"img",[["class","slide-image"],["src","assets/img/ica-slidebox-img-3.png"]],null,null,null,null,null)),(l()(),e.pb(38,0,null,0,1,"h2",[["class","slide-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Tem d\xfavidas?"])),(l()(),e.pb(40,0,null,0,5,"p",[],null,null,null,null,null)),(l()(),e.pb(41,0,null,null,0,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Contate o suporte pela "])),(l()(),e.pb(43,0,null,null,1,"a",[["href","#"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["link"])),(l()(),e.Ib(-1,null,[" e mande sua d\xfavida. Gostou do nosso servi\xe7o e quer fazer um contato. Entre em contato com o n\xfamero (85) 9 9999.9999 pelo email xxx@gmail.com"])),(l()(),e.Ib(-1,0,[" > "])),(l()(),e.pb(47,0,null,0,9,"ion-slide",[],null,null,null,t.Kb,t.M)),e.ob(48,49152,null,0,a.ob,[e.h,e.k,e.x],null,null),(l()(),e.pb(49,0,null,0,0,"img",[["class","slide-image"],["src","assets/img/ica-slidebox-img-4.png"]],null,null,null,null,null)),(l()(),e.pb(50,0,null,0,1,"h2",[["class","slide-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Pronto para acessar o App?"])),(l()(),e.pb(52,0,null,0,4,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.startApp()&&e),e}),t.bb,t.d)),e.ob(53,49152,null,0,a.l,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Ib(-1,0,[" Vamos l\xe1 "])),(l()(),e.pb(55,0,null,0,1,"ion-icon",[["name","arrow-forward"],["slot","end"]],null,null,null,t.rb,t.t)),e.ob(56,49152,null,0,a.D,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,8,0,"primary"),l(n,11,0,"true"),l(n,13,0,"false"),l(n,53,0,"clear"),l(n,56,0,"arrow-forward")}),(function(l,n){l(n,7,0,!n.component.showSkip)}))}function d(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"page-tutorial",[],null,null,null,c,p)),e.ob(1,49152,null,0,s,[a.Eb,r.m,b.b],null,null)],null,null)}var m=e.lb("page-tutorial",s,d,{},{},[]),g=u("SVse");class h{}u.d(n,"TutorialModuleNgFactory",(function(){return f}));var f=e.mb(o,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[i.a,m]],[3,e.j],e.v]),e.zb(4608,g.l,g.k,[e.s,[2,g.s]]),e.zb(4608,a.c,a.c,[e.x,e.g]),e.zb(4608,a.Fb,a.Fb,[a.c,e.j,e.p]),e.zb(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.zb(1073742336,g.b,g.b,[]),e.zb(1073742336,a.Cb,a.Cb,[]),e.zb(1073742336,r.q,r.q,[[2,r.v],[2,r.m]]),e.zb(1073742336,h,h,[]),e.zb(1073742336,o,o,[]),e.zb(1024,r.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);