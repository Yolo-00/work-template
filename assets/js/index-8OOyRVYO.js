import{d as E,b as S,_ as F,Q as U,R as N,r as o,i as d,g as b,q as l,h as e,w as t,$ as C,a0 as k,u as n,U as T,W as j,X as z,a1 as V,V as M,a2 as q,a3 as G,C as L,a4 as K,a5 as O}from"./vendor-C7EFnCic.js";import{u as P}from"./useLanguage-CYYjU2cq.js";import{p as Q,u as W,_ as X}from"./index-CNxpSwrv.js";const H=""+new URL("../png/avatar-DNkpT6eM.png",import.meta.url).href,y=E({id:"appState",state:()=>({isCollapse:!1}),getters:{},actions:{setIsCollapse(a){this.isCollapse=a}},persist:Q("appState")}),J={flex:"~ justify-between items-center","px-5":"",shadow:"","h-full":""},Y={flex:"~ items-center"},Z={flex:"~ items-center"},ee={"mr-4":""},te={"cursor-pointer":""},oe={"mr-4":"","cursor-pointer":""},ne={"mr-4":""},le=S({__name:"index",setup(a){const{isFullscreen:_,toggle:u}=F(),i=U(),m=N(i),{setLanguage:c}=P(),h=W(),r=y(),v=()=>{h.setReset()};return(I,s)=>{const p=o("Expand"),g=o("Fold"),w=o("el-icon"),$=o("SvgIcon"),x=o("el-dropdown-item"),D=o("el-dropdown-menu"),R=o("el-dropdown"),A=o("el-switch"),B=o("el-image");return d(),b("div",J,[l("div",Y,[e(w,{size:25,"cursor-pointer":"",onClick:s[0]||(s[0]=f=>n(r).setIsCollapse(!n(r).isCollapse))},{default:t(()=>[C(e(p,null,null,512),[[k,n(r).isCollapse]]),C(e(g,null,null,512),[[k,!n(r).isCollapse]])]),_:1})]),l("div",Z,[l("div",ee,[e(R,null,{dropdown:t(()=>[e(D,null,{default:t(()=>[e(x,null,{default:t(()=>[l("div",{class:"px-4",onClick:s[1]||(s[1]=f=>n(c)("en"))},"English")]),_:1}),e(x,{divided:""},{default:t(()=>[l("div",{class:"px-4",onClick:s[2]||(s[2]=f=>n(c)("zh"))},"简体中文")]),_:1})]),_:1})]),default:t(()=>[l("div",te,[e($,{color:"#333","icon-style":{width:"20px",height:"20px"},name:"language"})])]),_:1})]),l("div",oe,[e($,{color:"#333","icon-style":{width:"20px",height:"20px"},name:n(_)?"fullscreen-exit":"fullscreen",onClick:n(u)},null,8,["name","onClick"])]),l("div",ne,[e(A,{width:45,modelValue:n(i),"onUpdate:modelValue":s[3]||(s[3]=f=>T(i)?i.value=f:null),"inline-prompt":"","active-icon":n(j),"inactive-icon":n(z),onChange:n(m)},null,8,["modelValue","active-icon","inactive-icon","onChange"])]),e(R,null,{dropdown:t(()=>[e(D,null,{default:t(()=>[e(x,null,{default:t(()=>[l("div",{onClick:v},"退出")]),_:1})]),_:1})]),default:t(()=>[e(B,{"cursor-pointer":"",src:n(H),"w-10":"","h-10":"","rounded-lg":"",fit:"cover"},null,8,["src"])]),_:1})])])}}}),se=""+new URL("../../favicon.svg",import.meta.url).href,ae=a=>(q("data-v-ca32034e"),a=a(),G(),a),ie={class:"bg-[var(--theme-bg)]","h-full":""},ce=ae(()=>l("img",{"w-10":"","h-10":"",src:se,alt:""},null,-1)),re=S({__name:"index",setup(a){const _=y(),u="work-template";return(i,m)=>{const c=o("RouterLink");return d(),b("div",ie,[e(c,{to:"/","w-full":"","h-15":"",flex:"~ items-center justify-center"},{default:t(()=>[ce,e(V,null,{default:t(()=>[C(l("div",{"ml-2":"","whitespace-nowrap":"","no-underline":""},M(n(u)),513),[[k,!n(_).isCollapse]])]),_:1})]),_:1})])}}}),_e=X(re,[["__scopeId","data-v-ca32034e"]]),pe={"p-3":""},fe=S({__name:"index",setup(a){const _=y();return(u,i)=>{const m=o("el-aside"),c=o("el-header"),h=o("router-view"),r=o("el-scrollbar"),v=o("el-main"),I=o("SvgIcon"),s=o("el-backtop"),p=o("el-container");return d(),b("div",null,[e(p,{class:"h-100vh"},{default:t(()=>[e(m,{style:{transition:"width 0.5s"},width:n(_).isCollapse?"64px":"200px"},{default:t(()=>[e(_e)]),_:1},8,["width"]),e(p,null,{default:t(()=>[e(c,null,{default:t(()=>[e(le)]),_:1}),e(p,null,{default:t(()=>[e(v,{style:{height:"calc(100vh - 60px)"}},{default:t(()=>[e(r,null,{default:t(()=>[l("div",pe,[e(h,null,{default:t(({Component:g,route:w})=>[e(V,{name:"slide-fade"},{default:t(()=>[(d(),L(O,null,[(d(),L(K(g),{key:w.path}))],1024))]),_:2},1024)]),_:1})])]),_:1})]),_:1}),e(s,{target:".el-main .el-scrollbar__wrap"},{default:t(()=>[e(I,{color:"#409eff","icon-style":{width:"25px",height:"25px"},name:"backtop"})]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{fe as default};
