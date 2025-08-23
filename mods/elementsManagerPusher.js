(function(){
if(window.elManagerPlus)return;
window.elManagerPlus=true;
let c=document.createElement("div");
c.style="position:fixed;top:10px;right:10px;background:rgba(0,0,0,.85);padding:10px;border-radius:10px;color:#fff;font-family:sans-serif;width:200px;z-index:9999";
c.innerHTML=`<h3 style="margin:0 0 10px 0;font-size:16px;">Element Manager+</h3>
<input id="n" placeholder="Name" style="width:100%;margin-bottom:5px">
<input id="col" type="color" value="#ff0000" style="width:100%;margin-bottom:5px">
<select id="beh" style="width:100%;margin-bottom:5px">
<option value="solid">Solid</option>
<option value="liquid">Liquid</option>
<option value="powder">Powder</option>
<option value="gas">Gas</option>
<option value="pusher">Pusher</option>
</select>
<select id="dir" style="width:100%;margin-bottom:5px;display:none">
<option value="up">Up</option><option value="down">Down</option><option value="left">Left</option><option value="right">Right</option>
</select>
<input id="cat" placeholder="Category" style="width:100%;margin-bottom:5px" value="custom">
<select id="st" style="width:100%;margin-bottom:5px">
<option value="solid">Solid</option><option value="liquid">Liquid</option><option value="powder">Powder</option><option value="gas">Gas</option>
</select>
<button id="btn" style="width:100%;margin-top:5px;padding:5px;background:#4caf50;color:#fff;border:none;border-radius:5px">Create</button>`;
document.body.appendChild(c);
let beh=c.querySelector("#beh"),dir=c.querySelector("#dir");
beh.onchange=()=>dir.style.display=beh.value=="pusher"?"block":"none";
c.querySelector("#btn").onclick=()=>{
let name=c.querySelector("#n").value.trim().toLowerCase();
if(!name)return;
let color=c.querySelector("#col").value;
let category=c.querySelector("#cat").value||"custom";
let state=c.querySelector("#st").value;
let b=beh.value;
if(b=="pusher"){
let d=dir.value;
if(!behaviors[d])behaviors[d]=p=>{let dx=0,dy=0;if(d=="up")dy=-1;if(d=="down")dy=1;if(d=="left")dx=-1;if(d=="right")dx=1;let x=p.x+dx,y=p.y+dy;if(outOfBounds(x,y))return;let t=pixelMap[x][y];if(t&&elements[t.element].movable)movePixel(t,x+dx,y+dy);};
elements[name]={color:color,behavior:[["XX",d=="up"?"UP":d=="down"?"DOWN":d=="left"?"LEFT":"RIGHT","XX"],["XX","M1","XX"],["XX","XX","XX"]],category:category,state:state,movable:false};
}else{
let m={solid:behaviors.SOLID,liquid:behaviors.LIQUID,powder:behaviors.POWDER,gas:behaviors.GAS};
elements[name]={color:color,behavior:m[b],category:category,state:state};
}
alert("Element '"+name+"' created in "+category);
};
})();
