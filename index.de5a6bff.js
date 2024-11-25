function e(e){return e&&e.__esModule?e.default:e}var t,n,i={};t=i,n=function(){let e,t,n,i,a,o;let s={},r={numStars:250,baseSpeed:1,trailLength:.8,starColor:"rgb(255, 255, 255)",canvasColor:"rgb(0, 0, 0)",hueJitter:0,maxAcceleration:10,accelerationRate:.2,decelerationRate:.2,minSpawnRadius:80,maxSpawnRadius:500,auto:!0,originX:null,originY:null,container:null,originElement:null},l=[],c=!1,d=0,u=0,h=0,p=0,m=0,g=0,f=[0,0,0],v=r.canvasColor,y=()=>c=!0,x=()=>c=!1,w=()=>{var t,s;return t=o,s=a,void(n=t.clientWidth,i=t.clientHeight,e.width=n,e.height=i,u=b(s,t),h=E(s,t),l.forEach(e=>e.reset()))};function S(){"visible"===document.visibilityState&&(g=performance.now())}function E(e,t){let n=e.getBoundingClientRect(),i=t.getBoundingClientRect();return n.top-i.top+n.height/2}function b(e,t){let n=e.getBoundingClientRect(),i=t.getBoundingClientRect();return n.left-i.left+n.width/2}function R(){let e=M(0,2*Math.PI),t=M(r.minSpawnRadius,r.maxSpawnRadius);return new L(u+Math.cos(e)*t,h+Math.sin(e)*t)}class L{constructor(e,t){this.pos={x:e,y:t},this.prevpos={x:e,y:t},this.vel={x:0,y:0},this.angle=Math.atan2(t-h,e-u),this.baseSpeed=M(.5*r.baseSpeed,1.5*r.baseSpeed),this.hueOffset=M(-r.hueJitter,r.hueJitter)}reset(){let e=R();this.pos.x=e.pos.x,this.pos.y=e.pos.y,this.prevpos.x=this.pos.x,this.prevpos.y=this.pos.y,this.vel.x=0,this.vel.y=0,this.angle=Math.atan2(this.pos.y-h,this.pos.x-u),this.baseSpeed=M(.5*r.baseSpeed,1.5*r.baseSpeed),this.hueOffset=M(-r.hueJitter,r.hueJitter)}update(e,t){let n=e*this.baseSpeed;this.vel.x+=Math.cos(this.angle)*n*t,this.vel.y+=Math.sin(this.angle)*n*t,this.prevpos.x=this.pos.x,this.prevpos.y=this.pos.y,this.pos.x+=this.vel.x*t,this.pos.y+=this.vel.y*t}draw(){let e=Math.sqrt(this.vel.x*this.vel.x+this.vel.y*this.vel.y);t.lineWidth=(e-0)/10*2+1;let[n,i,a]=$(r.starColor),[o,s,l]=function(e,t,n){let i=Math.max(e/=255,t/=255,n/=255),a=Math.min(e,t,n),o,s,r=(i+a)/2;if(i===a)o=s=0;else{let l=i-a;switch(s=r>.5?l/(2-i-a):l/(i+a),i){case e:o=(t-n)/l+(t<n?6:0);break;case t:o=(n-e)/l+2;break;case n:o=(e-t)/l+4}o/=6}return[360*o,s,r]}(n,i,a),[c,d,u]=(function(e,t,n){let i,a,o;if(e/=360,0===t)i=a=o=n;else{let s=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e,r=n<.5?n*(1+t):n+t-n*t,l=2*n-r;i=s(l,r,e+1/3),a=s(l,r,e),o=s(l,r,e-1/3)}return[255*i,255*a,255*o]})((o+this.hueOffset+360)%360,s,l).map(e=>Math.round(e));t.strokeStyle=`rgba(${c}, ${d}, ${u}, ${(e-0)/10*1+0})`,t.beginPath(),t.moveTo(this.prevpos.x,this.prevpos.y),t.lineTo(this.pos.x,this.pos.y),t.stroke()}isActive(){var e,t;return e=this.pos.x,t=this.pos.y,e>=0&&e<=n&&t>=0&&t<=i}updateAngle(){this.angle=Math.atan2(this.pos.y-h,this.pos.x-u)}}function C(e){g||(g=e);let s=(e-g)/16.67;g=e,r.auto&&(u=b(a,o),h=E(a,o),(u!==p||h!==m)&&(l.forEach(e=>{e.updateAngle()}),p=u,m=h)),v!==r.canvasColor&&(f=$(r.canvasColor),v=r.canvasColor);let[y,x,w]=f;t.fillStyle=`rgba(${y}, ${x}, ${w}, ${1-r.trailLength})`,t.fillRect(0,0,n,i);let S=.01*(1+10*(d=c?Math.min(d+r.accelerationRate*s,r.maxAcceleration):Math.max(d-r.decelerationRate*s,0)));for(let e of l)e.update(S,s),e.draw(),e.isActive()||e.reset();requestAnimationFrame(C)}function M(e,t){return Math.random()*(t-e)+e}function $(e){let t=e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return t?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]:[255,255,255]}return s.setup=function(s={}){if(Object.assign(r,s),!(o=r.container||document.querySelector(".starfield")))throw Error("Starfield: No container element found.");if(o.style.position="relative",n=o.clientWidth,i=o.clientHeight,(e=document.createElement("canvas")).width=n,e.height=i,e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.zIndex="-1",f=$(r.canvasColor),o.appendChild(e),t=e.getContext("2d"),r.auto){if(!(a=r.originElement||document.querySelector(".starfield-origin")))throw Error("Starfield: No origin element found.");u=b(a,o),h=E(a,o),a.addEventListener("mouseenter",y),a.addEventListener("mouseleave",x),window.addEventListener("resize",w)}else u=null!==r.originX?r.originX:n/2,h=null!==r.originY?r.originY:i/2;for(let e=0;e<r.numStars;e++){let e=R();l.push(e)}document.addEventListener("visibilitychange",S),requestAnimationFrame(C)},s.setAccelerate=function(e){c=e},s.setOrigin=function(e,t){u=e,h=t,l.forEach(e=>{e.angle=Math.atan2(e.pos.y-h,e.pos.x-u)})},s.setOriginX=function(e){u=e,l.forEach(e=>{e.angle=Math.atan2(e.pos.y-h,e.pos.x-u)})},s.setOriginY=function(e){h=e,l.forEach(e=>{e.angle=Math.atan2(e.pos.y-h,e.pos.x-u)})},s.resize=function(t,a){n=t,i=a,e.width=n,e.height=i,h=null!==r.originY?r.originY:i/2,l.forEach(e=>e.reset())},s.config=r,s.cleanup=function(){a&&(a.removeEventListener("mouseenter",y),a.removeEventListener("mouseleave",x)),window.removeEventListener("resize",w),document.removeEventListener("visibilitychange",S),e&&e.parentNode&&e.parentNode.removeChild(e),l=[],c=!1,d=0,u=0,h=0,p=0,m=0,g=0},s},"function"==typeof define&&define.amd?define([],n):i?i=n():t.Starfield=n(),document.addEventListener("DOMContentLoaded",()=>{/*@__PURE__*/e(i).setup({baseSpeed:3,maxAcceleration:2,accelerationRate:.05,decelerationRate:.05}),function(){let e=!1,t=document.querySelector(".starfield-origin");t&&(t.addEventListener("mousedown",()=>{e=!0}),window.addEventListener("mouseup",()=>{e=!1}),window.addEventListener("mousemove",n=>{e&&(t.style.top=`${n.clientY}px`,t.style.left=`${n.clientX}px`)}))}(),function(){let e=document.getElementById("open-docs"),t=document.getElementById("close-docs"),n=document.getElementById("documentation-overlay");e&&t&&n&&(e.addEventListener("click",()=>{n.style.display="block"}),t.addEventListener("click",()=>{n.style.display="none"}),n.addEventListener("click",function(e){e.target===this&&(this.style.display="none")}))}(),function(e){let t={starColor:t=>{let n=parseInt(t.replace("#",""),16);e.config.starColor=`rgb(${n>>16&255}, ${n>>8&255}, ${255&n})`},hueJitter:t=>{""!==t&&(e.config.hueJitter=parseInt(t))},trailLength:t=>{""!==t&&(e.config.trailLength=parseFloat(t))},baseSpeed:t=>{""!==t&&(e.config.baseSpeed=parseFloat(t))},maxAcceleration:t=>{""!==t&&(e.config.maxAcceleration=parseFloat(t))},accelerationRate:t=>{""!==t&&(e.config.accelerationRate=parseFloat(t))},decelerationRate:t=>{""!==t&&(e.config.decelerationRate=parseFloat(t))},minSpawnRadius:t=>{""!==t&&(e.config.minSpawnRadius=parseInt(t,10))},maxSpawnRadius:t=>{""!==t&&(e.config.maxSpawnRadius=parseInt(t,10))}};function n(){let e={};["starColor","hueJitter","trailLength","baseSpeed","maxAcceleration","accelerationRate","decelerationRate","minSpawnRadius","maxSpawnRadius"].forEach(t=>{let n=document.getElementById(t);n&&(e[t]=n.value)});let t=parseInt(e.starColor.replace("#",""),16),n=`rgb(${t>>16&255}, ${t>>8&255}, ${255&t})`,i=`<script src="starfield.js"></script>
<script>
  Starfield.setup({
    starColor: "${n}",
    hueJitter: ${e.hueJitter},
    trailLength: ${e.trailLength},
    baseSpeed: ${e.baseSpeed},
    maxAcceleration: ${e.maxAcceleration},
    accelerationRate: ${e.accelerationRate},
    decelerationRate: ${e.decelerationRate},
    minSpawnRadius: ${e.minSpawnRadius},
    maxSpawnRadius: ${e.maxSpawnRadius}
  });
</script>`;document.getElementById("embed-code").textContent=i}function i(){let e=document.querySelector(".config-panel");if(!e)return;if(e.classList.contains("minimized")){e.style.maxHeight="",e.style.overflowY="";return}let t=e.scrollHeight,n=window.innerHeight-20-20;e.style.maxHeight=`${Math.min(t,n)}px`,e.style.overflowY=t>n?"auto":"hidden"}n(),["trailLength","starColor","hueJitter","baseSpeed","maxAcceleration","accelerationRate","decelerationRate","minSpawnRadius","maxSpawnRadius"].forEach(e=>{let i=document.getElementById(e);i&&i.addEventListener("input",i=>{let a=i.target.value;t[e]&&(t[e](a),n())})}),function(){let e=document.getElementById("toggle-config-panel"),t=document.querySelector(".config-panel");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("minimized"),t.classList.contains("minimized")?(e.textContent="+",e.title="Maximize Panel"):(e.textContent="−",e.title="Minimize Panel")})}(),function(){let e=document.getElementById("copy-embed-code"),t=document.getElementById("embed-code");e&&t&&e.addEventListener("click",()=>{let n=t.textContent;navigator.clipboard.writeText(n).then(()=>{e.textContent="Copied!",setTimeout(()=>{e.textContent="Copy"},2e3)})})}(),i(),window.addEventListener("resize",i)}(/*@__PURE__*/e(i)),window.onload=function(){if(function(){if(/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768||"ontouchstart"in window||navigator.msMaxTouchPoints>0)return!0}()){let e=document.getElementById("mobilePopup");e.style.display="block",document.getElementById("confirmButton").onclick=function(){e.style.display="none"}}}});