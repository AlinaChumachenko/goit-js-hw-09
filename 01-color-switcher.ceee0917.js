const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let n=null;t.startBtn.addEventListener("click",(function(e){n=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3),t.startBtn.disabled=!0})),t.stopBtn.addEventListener("click",(function(e){t.startBtn.disabled=!1,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.ceee0917.js.map