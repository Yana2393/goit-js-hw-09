const t=document.body,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");function r(t){e.disabled=t}e.addEventListener("click",(()=>{r(!0),timerId=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),o.addEventListener("click",(()=>{r(!1),clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.6fab1400.js.map
