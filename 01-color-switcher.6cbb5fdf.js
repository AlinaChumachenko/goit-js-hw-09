!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};console.log(t.startBtn),console.log(t.stopBtn),t.startBtn.addEventListener("click",(function(t){n.start()})),t.stopBtn.addEventListener("click",(function(t){n.stop()}));var n={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3))},stop:function(){clearInterval(this.intervalId),this.isActive=!1}}}();
//# sourceMappingURL=01-color-switcher.6cbb5fdf.js.map
