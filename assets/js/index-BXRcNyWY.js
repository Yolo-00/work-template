import{e as V,a5 as n,h as d,i as f,w as h,u as k,t as y,F as C,q as S,v as $,U as g,G as b,r as B,j as v,ax as X}from"./vendor-tduSOmKd.js";const Y={class:"w-80 grid grid-cols-3 bg-gray-300 p-5 gap-5 md:hidden"},j=["onTouchstart"],N=V({__name:"index",setup(E){const l=n([{id:1,name:"张三"},{id:2,name:"李四"},{id:3,name:"王五"},{id:3,name:"aaa"}]),o=n(!1),p=n(0),m=n(""),s=n(0),u=n(0),i=n({}),x=(a,t)=>{p.value=a,m.value=l.value[a].name,i.value={left:`${t.touches[0].clientX-40}px`,top:`${t.touches[0].clientY-40}px`,opacity:.5},o.value=!0},_=a=>{o.value&&(i.value={left:`${a.touches[0].clientX-40}px`,top:`${a.touches[0].clientY-40}px`,opacity:.5}),s.value=a.touches[0].clientX,u.value=a.touches[0].clientY},w=()=>{s.value,u.value,document.querySelectorAll(".grid-item").forEach((t,c)=>{const e=t.getBoundingClientRect();s.value>e.left&&s.value<e.left+e.width&&u.value>e.top&&u.value<e.top+e.height&&o.value&&(l.value[p.value].name=l.value[c].name,l.value[c].name=m.value)}),o.value=!1,i.value={}};return(a,t)=>{const c=B("el-card");return v(),d("div",null,[f(k(X),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),"item-key":"id",class:"max-md:hidden"},{item:h(({element:e})=>[f(c,{class:"mt-5"},{default:h(()=>[y("div",null,g(e.name),1)]),_:2},1024)]),_:1},8,["modelValue"]),y("div",Y,[(v(!0),d(C,null,S(l.value,(e,T)=>(v(),d("div",{key:e.id,class:"w-20 h-20 bg-white flex justify-center items-center grid-item",onTouchstart:r=>x(T,r),onTouchmove:t[1]||(t[1]=r=>_(r)),onTouchend:t[2]||(t[2]=r=>w())},g(e.name),41,j))),128)),o.value?(v(),d("div",{key:0,class:"w-20 h-20 bg-white flex justify-center items-center fixed",style:$(i.value)},g(m.value),5)):b("",!0)])])}}});export{N as default};