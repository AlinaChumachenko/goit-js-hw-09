const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};console.log(t.startBtn),console.log(t.stopBtn),t.startBtn.addEventListener("click",(function(t){n.start()})),t.stopBtn.addEventListener("click",(function(t){n.stop()}));const n={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3))},stop(){clearInterval(this.intervalId),this.isActive=!1}};
//# sourceMappingURL=01-color-switcher.29e133e9.js.map
