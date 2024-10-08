var e=globalThis,t={},a={},r=e.parcelRequire080d;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequire080d=r),(0,r.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>a,set:e=>a=e,enumerable:!0,configurable:!0});var a,r=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)r.set(t[a],{baseUrl:e,path:t[a+1]})}}),r("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["cC4lq","index.6299958a.js","4vc0w","card_back.e60fba34.jpg"]'));class n{constructor(e){this.id=e.id,this.name=e.name,this.title=e.title}getId(){return this.id}getName(){return this.name}getTitle(){return this.title}}var i={};i=new URL("card_back.e60fba34.jpg",import.meta.url).toString();var s=[];(async()=>{await fetch("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/es_ES/champion.json").then(function(e){return e.json()}).then(function(e){for(let a in e.data){var t;t=new n(e.data[a]),s.push(t)}}),s.length>0?await c():console.error("No se han cargado los campeones.")})();const c=async()=>{let e=document.getElementById("champCompendium");for(let a=0;a<s.length;a++){var t;e.innerHTML+=`
            <div class="card" id="card">
                <div class="cardInner">
                    <div class="front" id="front">
                        <img class="champSplash" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${s[a].id}_0.jpg"/>
                        <div class="champInfo">
                            <div class="champName">${s[a].name}</div>
                            <div class="champTitle">${s[a].title}</div>
                        </div>
                    </div>
                    <div class="back">
                        <img class="cardBack" src="${(t=i)&&t.__esModule?t.default:t}"/>
                    </div>
                </div>
            </div>
        `}};
//# sourceMappingURL=index.6299958a.js.map
