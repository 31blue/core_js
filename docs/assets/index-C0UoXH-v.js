(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();function i(e,r=document){if(typeof e!="string")throw new Error("getNode 함수의 인수는 문자 타입 이어야 합니다.");return r.nodeType!==document.DOCUMENT_NODE&&(r=document.querySelector(r)),r.querySelector(e)}function f(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}const a=e=>f(e)==="object",d=e=>f(e)==="number";function p(e,r){typeof e=="string"&&(e=i(e)),e.insertAdjacentHTML("beforeend",r)}i(".first");i(".second");const u={shouldReject:!1,timeout:1e3,data:"아싸 성공!",errorMessage:"알 수 없는 오류가 발생했습니다."};function m(e){let r={...u};d(e)&&(r.timeout=e),a(e)&&(r={...u,...e});let{timeout:c,shouldReject:n,errorMessage:t,data:o}=r;return new Promise((s,l)=>{setTimeout(()=>{n?l({message:t}):s(o)},c)})}m(1e3);const g="/assets/santa-Ck56z81l.png",y="style-module__btn__cDGNe",b=i("#app"),O=`
  <figure class="container">
    <img style="width:30vw" src="${g}"/>
    <figcaption>산타 모자를 쓴 호랑이</figcaption>
  </figure>
  <button type="button" class="${y}">BUTTON</button>
`;p(b,O);