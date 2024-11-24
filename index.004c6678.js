!function(t){let e,i,s,n,a,o;let r={numStars:250,baseSpeed:1,trailLength:.8,starColor:"rgb(255, 255, 255)",hueJitter:0,maxAcceleration:10,accelerationRate:.2,decelerationRate:.2,minSpawnRadius:80,maxSpawnRadius:500,auto:!0,originX:null,originY:null},h=[],l=!1,u=0,p=0,c=0,d=0,g=0,f=0;function y(t,e){let i=t.getBoundingClientRect(),s=e.getBoundingClientRect();return i.top-s.top+i.height/2}function v(t,e){let i=t.getBoundingClientRect(),s=e.getBoundingClientRect();return i.left-s.left+i.width/2}function x(){let t=b(0,2*Math.PI),e=b(r.minSpawnRadius,r.maxSpawnRadius);return new m(p+Math.cos(t)*e,c+Math.sin(t)*e)}class m{constructor(t,e){this.pos={x:t,y:e},this.prevpos={x:t,y:e},this.vel={x:0,y:0},this.angle=Math.atan2(e-c,t-p),this.baseSpeed=b(.5*r.baseSpeed,1.5*r.baseSpeed),this.hueOffset=b(-r.hueJitter,r.hueJitter)}reset(){let t=x();this.pos.x=t.pos.x,this.pos.y=t.pos.y,this.prevpos.x=this.pos.x,this.prevpos.y=this.pos.y,this.vel.x=0,this.vel.y=0,this.angle=Math.atan2(this.pos.y-c,this.pos.x-p),this.baseSpeed=b(.5*r.baseSpeed,1.5*r.baseSpeed),this.hueOffset=b(-r.hueJitter,r.hueJitter)}update(t,e){let i=t*this.baseSpeed;this.vel.x+=Math.cos(this.angle)*i*e,this.vel.y+=Math.sin(this.angle)*i*e,this.prevpos.x=this.pos.x,this.prevpos.y=this.pos.y,this.pos.x+=this.vel.x*e,this.pos.y+=this.vel.y*e}draw(){let t=Math.sqrt(this.vel.x*this.vel.x+this.vel.y*this.vel.y);i.lineWidth=(t-0)/10*2+1;let[e,s,n]=function(t){let e=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]:[255,255,255]}(r.starColor),[a,o,h]=function(t,e,i){let s=Math.max(t/=255,e/=255,i/=255),n=Math.min(t,e,i),a,o,r=(s+n)/2;if(s===n)a=o=0;else{let h=s-n;switch(o=r>.5?h/(2-s-n):h/(s+n),s){case t:a=(e-i)/h+(e<i?6:0);break;case e:a=(i-t)/h+2;break;case i:a=(t-e)/h+4}a/=6}return[360*a,o,r]}(e,s,n),[l,u,p]=(function(t,e,i){let s,n,a;if(t/=360,0===e)s=n=a=i;else{let o=(t,e,i)=>(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?t+(e-t)*6*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t,r=i<.5?i*(1+e):i+e-i*e,h=2*i-r;s=o(h,r,t+1/3),n=o(h,r,t),a=o(h,r,t-1/3)}return[255*s,255*n,255*a]})((a+this.hueOffset+360)%360,o,h).map(t=>Math.round(t));i.strokeStyle=`rgba(${l}, ${u}, ${p}, ${(t-0)/10*1+0})`,i.beginPath(),i.moveTo(this.prevpos.x,this.prevpos.y),i.lineTo(this.pos.x,this.pos.y),i.stroke()}isActive(){var t,e;return t=this.pos.x,e=this.pos.y,t>=0&&t<=s&&e>=0&&e<=n}updateAngle(){this.angle=Math.atan2(this.pos.y-c,this.pos.x-p)}}function S(t){f||(f=t);let e=(t-f)/16.67;f=t,r.auto&&(p=v(a,o),c=y(a,o),(p!==d||c!==g)&&(h.forEach(t=>{t.updateAngle()}),d=p,g=c)),i.fillStyle=`rgba(0, 0, 0, ${1-r.trailLength})`,i.fillRect(0,0,s,n);let x=.01*(1+10*(u=l?Math.min(u+r.accelerationRate*e,r.maxAcceleration):Math.max(u-r.decelerationRate*e,0)));for(let t of h)t.update(x,e),t.draw(),t.isActive()||t.reset();requestAnimationFrame(S)}function b(t,e){return Math.random()*(e-t)+t}t.setup=function(t={}){Object.assign(r,t),(o=document.querySelector(".starfield")).style.position="relative",s=o.clientWidth,n=o.clientHeight,(e=document.createElement("canvas")).width=s,e.height=n,e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.zIndex="-1",o.appendChild(e),i=e.getContext("2d"),r.auto?(p=v(a=document.querySelector(".starfield-origin"),o),c=y(a,o),a.addEventListener("mouseenter",()=>l=!0),a.addEventListener("mouseleave",()=>l=!1),window.addEventListener("resize",()=>{var t,i;return t=o,i=a,void(s=t.clientWidth,n=t.clientHeight,e.width=s,e.height=n,p=v(i,t),c=y(i,t),h.forEach(t=>t.reset()))})):(p=null!==r.originX?r.originX:s/2,c=null!==r.originY?r.originY:n/2);for(let t=0;t<r.numStars;t++){let t=x();h.push(t)}document.addEventListener("visibilitychange",function(){"visible"===document.visibilityState&&(f=performance.now())}),requestAnimationFrame(S)},t.setAccelerate=function(t){l=t},t.setOrigin=function(t,e){p=t,c=e,h.forEach(t=>{t.angle=Math.atan2(t.pos.y-c,t.pos.x-p)})},t.setOriginX=function(t){p=t,h.forEach(t=>{t.angle=Math.atan2(t.pos.y-c,t.pos.x-p)})},t.setOriginY=function(t){c=t,h.forEach(t=>{t.angle=Math.atan2(t.pos.y-c,t.pos.x-p)})},t.resize=function(t,i){s=t,n=i,e.width=s,e.height=n,c=null!==r.originY?r.originY:n/2,h.forEach(t=>t.reset())},t.config=r}(window.Starfield=window.Starfield||{});