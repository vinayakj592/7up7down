(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}})();const s=document.querySelector(".one"),a=document.querySelector(".two");document.querySelector(".roll");let o=document.getElementById("balance").innerHTML,c;o=Number(o);const f=document.getElementById("bet"),g=document.getElementById("reset"),m=document.getElementById("result"),u=document.getElementById("errormsg");g.onclick=function(){document.getElementById("balance").innerHTML=1e4,o=1e4};f.onmouseover=function(){m.innerHTML="Place Your Bet !!!"};f.onclick=function(){u.innerHTML="Bet amount should be greater than 0 and less than available balance",document.getElementById("error").style.display="none",c=Number(document.getElementById("current").value);let t=document.getElementsByName("check");if(t[0].checked==!1&&t[1].checked==!1&&t[2].checked==!1)u.innerHTML="Select an option",document.getElementById("error").style.display="flex";else if(c>o||c<=0)document.getElementById("error").style.display="flex";else{let l=y(),d=b();setTimeout(()=>{let n=0;if(t[1].checked?n=1:t[2].checked&&(n=2),c<=o){let e=l+d;e<7&&n==2||e==7&&n==1||e>7&&n==0?(o+=c,e==7&&n==1&&(o+=c),m.innerHTML="You Won !!"):(o-=c,m.innerHTML="You Lose"),o.innerHTML=o}document.getElementById("balance").innerHTML=o,console.log(n)},5e3)}};const y=()=>{const t=Math.floor(Math.random()*6+1);return h(t),t},b=()=>{const t=Math.floor(Math.random()*6+1);return p(t),t},h=t=>{s.style.animation="rolling 4s",setTimeout(()=>{switch(t){case 1:s.style.transform="rotateX(0deg) rotateY(0deg)";break;case 6:s.style.transform="rotateX(180deg) rotateY(0deg)";break;case 2:s.style.transform="rotateX(-90deg) rotateY(0deg)";break;case 5:s.style.transform="rotateX(90deg) rotateY(0deg)";break;case 3:s.style.transform="rotateX(0deg) rotateY(90deg)";break;case 4:s.style.transform="rotateX(0deg) rotateY(-90deg)";break}s.style.animation="none"},4050)},p=t=>{a.style.animation="rolling 4s",setTimeout(()=>{switch(t){case 1:a.style.transform="rotateX(0deg) rotateY(0deg)";break;case 6:a.style.transform="rotateX(180deg) rotateY(0deg)";break;case 2:a.style.transform="rotateX(-90deg) rotateY(0deg)";break;case 5:a.style.transform="rotateX(90deg) rotateY(0deg)";break;case 3:a.style.transform="rotateX(0deg) rotateY(90deg)";break;case 4:a.style.transform="rotateX(0deg) rotateY(-90deg)";break}a.style.animation="none"},4050)};