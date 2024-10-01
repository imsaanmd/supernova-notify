(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(t,n){var o="",s="",e="",r="";t=="Success"?(s="text-[#5AE348]",o="bg-[#5AE348]",r="check.png",e="border-2 border-solid border-[#5AE348]"):t=="Error"?(s="text-[#E2342E]",o="bg-[#E2342E]",r="error.png",e="border-2 border-solid border-[#E2342E]"):t=="Info"?(s="text-[#4891E3]",o="bg-[#4891E3]",r="info.png",e="border-2 border-solid border-[#4891E3]"):t=="Warning"&&(s="text-[#E3B248]",o="bg-[#E3B248]",r="warning.png",e="border-2 border-solid border-[#E3B248]");const i=document.createElement("notify");i.className="",i.innerHTML=`
        <div class="flex flex-col w-[400px] h-[110px] justify-center items-center gap-2 bg-[#0D0D0D] bg-opacity-50 ${e} rounded-xl">
            <div class="flex justify-center ml-8">
                <div class="flex justify-center items-center w-[68px] h-[68px] ${o} bg-opacity-40 ${e} rounded-xl">
                    <img src=${r} class="" alt="">
                </div>
                 <div class="flex flex-col font-medium w-[339px] pl-2">
                    <h1 class="font-bold text-[16px] ${s}"> ${t}</h1>
                    <p class="font-light text-white">${n}</p>
                </div>
            </div>
            <div class="w-[369px] h-2 ${o} bg-opacity-60 rounded-xl relative">
                <div class="inner-bar h-2 ${o} rounded-xl" style="width: 0;"></div>
            </div>
        </div>
    `,document.getElementById("createNotify").appendChild(i);const c=i.querySelector(".inner-bar");c.style.transition="width 5s linear",setTimeout(()=>{c.style.width="100%"},100),setTimeout(function(){i.remove()},5e3)}d("Success","Supernova Teste");d("Error","Supernova Teste");d("Info","Supernova Teste");d("Warning","Supernova Teste");window.addEventListener("message",function(t){t.data.action==="notify"&&d(t.data.notificationType,t.data.message)});
