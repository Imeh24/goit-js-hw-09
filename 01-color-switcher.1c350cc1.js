!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");var e=null;t.addEventListener("click",(function(){t.disabled=!0,e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){clearInterval(e),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.1c350cc1.js.map
