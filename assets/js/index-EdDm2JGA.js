import{g as y,w as k}from"./index-DrdBoU9J.js";import{e as S,a3 as p,f as D,o as U,Q,h as w,D as E,v as C,as as z,r as f,an as $,j as m,i as a,w as u,u as l}from"./vendor-BVCdggem.js";import{a as x}from"./avatar-BYK3sYuU.js";const H=["id"],P=S({__name:"index",props:{type:{default:"img"},size:{default:200},iconSize:{default:40},content:{},logo:{},options:{},errorLevel:{default:"H"}},setup(h,{expose:_}){const e=h,n=p(""),s=p("canvas"+y()),v=p(!0),c=D(()=>({width:e.size+"px",height:e.size+"px"})),b=async()=>{if(e.type==="canvas"){const o=await z.toCanvas(document.getElementById(s.value),e.content,{width:e.size,margin:2,errorCorrectionLevel:e.errorLevel,...e.options});if(e.logo){const i=o.getContext("2d"),t=e.iconSize+5,r=e.iconSize+5,L=(o.width-t)/2,R=(o.width-r)/2;i.fillStyle="#fff",i.fillRect(L,R,t,r);const B=(o.width-e.iconSize)/2,I=(o.width-e.iconSize)/2,d=new Image;d.crossOrigin="Anonymous",d.onload=()=>{i.drawImage(d,B,I,e.iconSize,e.iconSize),n.value=o.toDataURL()},d.src=e.logo}else n.value=o.toDataURL();v.value=!1}else{const o=await z.toDataURL(e.content,{width:e.size,margin:2,errorCorrectionLevel:e.errorLevel,...e.options});n.value=o,v.value=!1}},F=(o=y(),i=".png")=>{const t=document.createElement("a");t.style.display="none",t.download=`${o}${i}`,t.href=n.value,document.body.appendChild(t),t.click(),document.body.removeChild(t)};return U(()=>{b()}),_({downLoadQRCode:F}),(o,i)=>{const t=f("ImagePreview"),r=$("loading");return Q((m(),w("div",{style:C(c.value),"overflow-hidden":"","rounded-lg":"",border:"","border-slate-300":"","border-solid":""},[o.type==="img"?(m(),E(t,{key:0,width:c.value.width,height:c.value.height,"image-url":n.value},null,8,["width","height","image-url"])):(m(),w("canvas",{key:1,style:C(c.value),id:s.value},null,12,H))],4)),[[r,v.value]])}}}),g=k(P),q=S({__name:"index",setup(h){return(_,e)=>{const n=f("el-col"),s=f("el-row");return m(),w("div",null,[a(s,{gutter:24},{default:u(()=>[a(n,{span:8},{default:u(()=>[a(l(g),{content:"www.baidu.com"})]),_:1}),a(n,{span:8},{default:u(()=>[a(l(g),{type:"canvas",logo:l(x),content:"www.baidu.com"},null,8,["logo"])]),_:1}),a(n,{span:8},{default:u(()=>[a(l(g),{type:"canvas",options:{color:{dark:"#FFFF00",light:"#00FFFF"}},logo:l(x),content:"www.baidu.com"},null,8,["logo"])]),_:1})]),_:1})])}}});export{q as default};