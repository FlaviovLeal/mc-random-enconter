(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function B(){}function et(e){return e()}function Ge(){return Object.create(null)}function X(e){e.forEach(et)}function tt(e){return typeof e=="function"}function ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function lt(e){return Object.keys(e).length===0}function ot(e,...t){if(e==null)return B;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function be(e,t,n){e.$$.on_destroy.push(ot(t,n))}function we(e,t,n){return e.set(n),t}function h(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function k(e){e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function C(){return H(" ")}function ie(){return H("")}function P(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function A(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Te(e){return e===""?null:+e}function rt(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ce(e,t){e.value=t==null?"":t}let $e;function oe(e){$e=e}const le=[],Ee=[],pe=[],He=[],ut=Promise.resolve();let ve=!1;function st(){ve||(ve=!0,ut.then(nt))}function Me(e){pe.push(e)}const ke=new Set;let de=0;function nt(){const e=$e;do{for(;de<le.length;){const t=le[de];de++,oe(t),ft(t.$$)}for(oe(null),le.length=0,de=0;Ee.length;)Ee.pop()();for(let t=0;t<pe.length;t+=1){const n=pe[t];ke.has(n)||(ke.add(n),n())}pe.length=0}while(le.length);for(;He.length;)He.pop()();ve=!1,ke.clear(),oe(e)}function ft(e){if(e.fragment!==null){e.update(),X(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Me)}}const _e=new Set;let x;function me(){x={r:0,c:[],p:x}}function he(){x.r||X(x.c),x=x.p}function W(e,t){e&&e.i&&(_e.delete(e),e.i(t))}function F(e,t,n,i){if(e&&e.o){if(_e.has(e))return;_e.add(e),x.c.push(()=>{_e.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ye(e){e&&e.c()}function re(e,t,n,i){const{fragment:l,after_update:r}=e.$$;l&&l.m(t,n),i||Me(()=>{const f=e.$$.on_mount.map(et).filter(tt);e.$$.on_destroy?e.$$.on_destroy.push(...f):X(f),e.$$.on_mount=[]}),r.forEach(Me)}function ue(e,t){const n=e.$$;n.fragment!==null&&(X(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function at(e,t){e.$$.dirty[0]===-1&&(le.push(e),st(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(e,t,n,i,l,r,f,o=[-1]){const g=$e;oe(e);const u=e.$$={fragment:null,ctx:[],props:r,update:B,not_equal:l,bound:Ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:Ge(),dirty:o,skip_bound:!1,root:t.target||g.$$.root};f&&f(u.root);let a=!1;if(u.ctx=n?n(e,t.props||{},(c,_,...p)=>{const $=p.length?p[0]:_;return u.ctx&&l(u.ctx[c],u.ctx[c]=$)&&(!u.skip_bound&&u.bound[c]&&u.bound[c]($),a&&at(e,c)),_}):[],u.update(),a=!0,X(u.before_update),u.fragment=i?i(u.ctx):!1,t.target){if(t.hydrate){const c=rt(t.target);u.fragment&&u.fragment.l(c),c.forEach(k)}else u.fragment&&u.fragment.c();t.intro&&W(e.$$.fragment),re(e,t.target,t.anchor,t.customElement),nt()}oe(g)}class fe{$destroy(){ue(this,1),this.$destroy=B}$on(t,n){if(!tt(n))return B;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!lt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ct(e){return e<=4?"Beginner":e<=10?"Standard!":e<=16?"Hard!!":e<=22?"Heroic!!!":"Impossible!!!!"}function Ne(e){return[...new Set(e.map(t=>t.set))].map(t=>({name:t,enabled:!0}))}function Ae(e,t,n){for(let i=0;i<e.length;i++)e[i].set===t&&e[i].type!=="standard"&&e[i].type!=="expert"&&e[i].type!=="skirmish"&&(e[i].enabled=n);return e}const ee=[];function it(e,t=B){let n;const i=new Set;function l(o){if(ne(e,o)&&(e=o,n)){const g=!ee.length;for(const u of i)u[1](),ee.push(u,e);if(g){for(let u=0;u<ee.length;u+=2)ee[u][0](ee[u+1]);ee.length=0}}}function r(o){l(o(e))}function f(o,g=B){const u=[o,g];return i.add(u),i.size===1&&(n=t(l)||B),o(e),()=>{i.delete(u),i.size===0&&(n(),n=null)}}return{set:l,update:r,subscribe:f}}class s{constructor(t,n,i,l,r,f,o){this.type=t,this.set=n,this.name=i,this.difficulty=l,this.difficultyMultiplayer=r,this.difficultySolo=f,this.enabled=!0,this.obligatoryModules=o!=null?o:[]}getDifficulty(t){return this.difficulty!==void 0?this.difficulty:t?this.difficultySolo:this.difficultyMultiplayer}}function Z(e,t){return e.filter(n=>n.type===t)}const Y=it([new s("villain","Core Set","Rhino",void 0,6,0),new s("villain","Core Set","Klaw",void 0,10,3),new s("villain","Core Set","Ultron",void 0,9,12),new s("villain","Wrecking Crew","Wrecking Crew",void 0,-2,2),new s("villain","Green Goblin","Risky Business",void 0,0,-1),new s("villain","Green Goblin","Mutagen Formula",void 0,11,10),new s("villain","Rise of Red Skull","Crossbones",void 0,3,0,["Experimental Weapons"]),new s("villain","Rise of Red Skull","Absorbing Man",void 0,2,-1),new s("villain","Rise of Red Skull","Taskmaster",void 0,4,5,["Hydra Patrol"]),new s("villain","Rise of Red Skull","Zola",void 0,14,9),new s("villain","Rise of Red Skull","Red Skull",void 0,14,16),new s("villain","Kang","Kang",void 0,10,9),new s("villain","Galaxy's Most Wanted","Brotherhood of Badoon",void 0,-1,6,["Ship Command"]),new s("villain","Galaxy's Most Wanted","Infiltrate the Museum",void 0,10,8,["Galactic Artifacts"]),new s("villain","Galaxy's Most Wanted","Escape the Museum",void 0,8,10,["Galactic Artifacts","Ship Command"]),new s("villain","Galaxy's Most Wanted","Nebula",void 0,13,16,["Ship Command"]),new s("villain","Galaxy's Most Wanted","Ronan the Accuser",void 0,23,22,["Ship Command"]),new s("villain","Mad Titan's Shadow","Ebony Maw",void 0,5,9),new s("villain","Mad Titan's Shadow","Tower Defense",void 0,-2,-1),new s("villain","Mad Titan's Shadow","Thanos",void 0,3,4,["Infinity Gauntlet"]),new s("villain","Mad Titan's Shadow","Hela",void 0,5,3),new s("villain","Mad Titan's Shadow","Loki",void 0,13,13,["Infinity Gauntlet"]),new s("villain","The Hood","The Hood",void 0,6,6),new s("villain","Sinister Motives","Sandman",void 0,3,0,["City in Chaos"]),new s("villain","Sinister Motives","Venom",void 0,12,1,["Symbiotic Strength"]),new s("villain","Sinister Motives","Mysterio",void 0,-2,-3,["Personal Nightmare"]),new s("villain","Sinister Motives","The Sinister Six",void 0,6,2),new s("villain","Sinister Motives","Venom Goblin",void 0,12,15,["Symbiotic Strength"]),new s("module","Core Set","Bomb Scare",-3),new s("module","Core Set","Masters of Evil",1),new s("module","Core Set","Under Attack",1),new s("module","Core Set","Legions of Hydra",4),new s("module","Core Set","Doomsday Chair",3),new s("module","Green Goblin","Goblin Gimmicks",-4),new s("module","Green Goblin","Mess of Things",0),new s("module","Green Goblin","Power Drain",-3),new s("module","Green Goblin","Running Interference",-1),new s("module","Green Goblin","Kree Fanatic",8),new s("module","Rise of Red Skull","Experimental Weapons",-2),new s("module","Rise of Red Skull","Hydra Assault",-2),new s("module","Rise of Red Skull","Hydra Patrol",-1),new s("module","Rise of Red Skull","Weapon Master",0),new s("module","Kang","Temporal",-3),new s("module","Kang","Master of Time",0),new s("module","Kang","Anachronauts",1),new s("module","Galaxy's Most Wanted","Band of Badoon",-3),new s("module","Galaxy's Most Wanted","Menagerie Medley",3),new s("module","Galaxy's Most Wanted","Galactic Artifacts",0),new s("module","Galaxy's Most Wanted","Space Pirates",-1),new s("module","Galaxy's Most Wanted","Kree Militants",-3),new s("module","Galaxy's Most Wanted","Ship Command",0),new s("module","Galaxy's Most Wanted","Badoon Headhunter",-2),new s("module","Mad Titan's Shadow","Black Order",1),new s("module","Mad Titan's Shadow","Armies of Titan",-3),new s("module","Mad Titan's Shadow","Children of Thanos",3),new s("module","Mad Titan's Shadow","Legions of Hel",-2),new s("module","Mad Titan's Shadow","Frost Giants",3),new s("module","Mad Titan's Shadow","Enchantress",6),new s("module","Mad Titan's Shadow","Infinity Gauntlet",7),new s("module","The Hood","Beasty Boys",1),new s("module","The Hood","Brothers Grimm",1),new s("module","The Hood","Crossfire's Crew",2),new s("module","The Hood","Mister Hyde",-3),new s("module","The Hood","Ransacked Armory",-3),new s("module","The Hood","Sinister Syndicate",0),new s("module","The Hood","State of Emergency",0),new s("module","The Hood","Streets of Mayhem",2),new s("module","The Hood","Wrecking Crew",2),new s("module","Sinister Motives","City in Chaos",4),new s("module","Sinister Motives","Down to Earth",-2),new s("module","Sinister Motives","Goblin Gear",5),new s("module","Sinister Motives","Guerrilla Tactics",2),new s("module","Sinister Motives","Osborn Tech",0),new s("module","Sinister Motives","Personal Nightmare",2),new s("module","Sinister Motives","Symbiotic Strength",4),new s("module","Sinister Motives","Whispers of Paranoia",4),new s("module","Hero Packs","Armadillo",2),new s("module","Hero Packs","Zzzax",-1),new s("standard","Core Set","Standard I",0),new s("standard","The Hood","Standard II",7),new s("expert","Core Set","No Expert",0),new s("expert","Core Set","Expert I",5),new s("expert","The Hood","Expert II",14),new s("heroic","Core Set","No Heroic",0),new s("heroic","Core Set","Heroic 1",9),new s("heroic","Core Set","Heroic 2",18),new s("heroic","Core Set","Heroic 3",26),new s("skirmish","Core Set","No Skirmish",0),new s("skirmish","Core Set","Skirmish Level 1",-16),new s("skirmish","Core Set","Skirmish Level 2",-6)]);function De(e,t,n){const i=e.slice();return i[7]=t[n],i}function je(e,t,n){const i=e.slice();return i[10]=t[n],i[11]=t,i[12]=n,i}function Re(e,t,n){const i=e.slice();return i[13]=t[n],i}function Ie(e,t,n){const i=e.slice();return i[10]=t[n],i[16]=t,i[17]=n,i}function Oe(e){let t=e[10].name+"",n,i,l,r,f,o;function g(){e[3].call(l,e[16],e[17])}return{c(){n=H(t),i=C(),l=w("input"),r=w("br"),A(l,"type","checkbox")},m(u,a){S(u,n,a),S(u,i,a),S(u,l,a),l.checked=e[10].enabled,S(u,r,a),f||(o=P(l,"change",g),f=!0)},p(u,a){e=u,a&1&&t!==(t=e[10].name+"")&&J(n,t),a&1&&(l.checked=e[10].enabled)},d(u){u&&k(n),u&&k(i),u&&k(l),u&&k(r),f=!1,o()}}}function We(e){let t,n=e[10].type===e[13]&&Oe(e);return{c(){n&&n.c(),t=ie()},m(i,l){n&&n.m(i,l),S(i,t,l)},p(i,l){i[10].type===i[13]?n?n.p(i,l):(n=Oe(i),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(i){n&&n.d(i),i&&k(t)}}}function Pe(e){let t,n,i,l,r=e[0],f=[];for(let o=0;o<r.length;o+=1)f[o]=We(Ie(e,r,o));return{c(){t=w("b"),t.textContent="Pick at least one",n=w("br"),i=C();for(let o=0;o<f.length;o+=1)f[o].c();l=ie()},m(o,g){S(o,t,g),S(o,n,g),S(o,i,g);for(let u=0;u<f.length;u+=1)f[u].m(o,g);S(o,l,g)},p(o,g){if(g&1){r=o[0];let u;for(u=0;u<r.length;u+=1){const a=Ie(o,r,u);f[u]?f[u].p(a,g):(f[u]=We(a),f[u].c(),f[u].m(l.parentNode,l))}for(;u<f.length;u+=1)f[u].d(1);f.length=r.length}},d(o){o&&k(t),o&&k(n),o&&k(i),te(f,o),o&&k(l)}}}function Be(e){let t=e[10].name+"",n,i,l,r,f,o,g;function u(){e[6].call(l,e[11],e[12])}return{c(){n=H(t),i=C(),l=w("input"),r=C(),f=w("br"),A(l,"type","checkbox")},m(a,c){S(a,n,c),S(a,i,c),S(a,l,c),l.checked=e[10].enabled,S(a,r,c),S(a,f,c),o||(g=P(l,"change",u),o=!0)},p(a,c){e=a,c&1&&t!==(t=e[10].name+"")&&J(n,t),c&1&&(l.checked=e[10].enabled)},d(a){a&&k(n),a&&k(i),a&&k(l),a&&k(r),a&&k(f),o=!1,g()}}}function Le(e){let t,n=e[10].set===e[7].name&&(e[10].type==="villain"||e[10].type==="module")&&Be(e);return{c(){n&&n.c(),t=ie()},m(i,l){n&&n.m(i,l),S(i,t,l)},p(i,l){i[10].set===i[7].name&&(i[10].type==="villain"||i[10].type==="module")?n?n.p(i,l):(n=Be(i),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(i){n&&n.d(i),i&&k(t)}}}function Ke(e){let t,n=e[7].name+"",i,l,r,f,o,g,u,a,c,_;function p(){return e[4](e[7])}function $(){return e[5](e[7])}let m=e[0],G=[];for(let b=0;b<m.length;b+=1)G[b]=Le(je(e,m,b));return{c(){t=w("b"),i=H(n),l=C(),r=w("button"),r.textContent="select all",f=C(),o=w("button"),o.textContent="select none ",g=w("br"),u=C();for(let b=0;b<G.length;b+=1)G[b].c();a=ie()},m(b,M){S(b,t,M),h(t,i),S(b,l,M),S(b,r,M),S(b,f,M),S(b,o,M),S(b,g,M),S(b,u,M);for(let T=0;T<G.length;T+=1)G[T].m(b,M);S(b,a,M),c||(_=[P(r,"click",p),P(o,"click",$)],c=!0)},p(b,M){if(e=b,M&1&&n!==(n=e[7].name+"")&&J(i,n),M&1){m=e[0];let T;for(T=0;T<m.length;T+=1){const D=je(e,m,T);G[T]?G[T].p(D,M):(G[T]=Le(D),G[T].c(),G[T].m(a.parentNode,a))}for(;T<G.length;T+=1)G[T].d(1);G.length=m.length}},d(b){b&&k(t),b&&k(l),b&&k(r),b&&k(f),b&&k(o),b&&k(g),b&&k(u),te(G,b),b&&k(a),c=!1,X(_)}}}function dt(e){let t,n,i,l,r,f,o,g,u=["standard","expert","skirmish","heroic"],a=[];for(let p=0;p<4;p+=1)a[p]=Pe(Re(e,u,p));let c=Ne(e[0]),_=[];for(let p=0;p<c.length;p+=1)_[p]=Ke(De(e,c,p));return{c(){t=w("main"),n=w("div"),i=w("button"),i.textContent="Save modifications ",l=w("br"),r=C();for(let p=0;p<4;p+=1)a[p].c();f=C();for(let p=0;p<_.length;p+=1)_[p].c()},m(p,$){S(p,t,$),h(t,n),h(n,i),h(n,l),h(n,r);for(let m=0;m<4;m+=1)a[m].m(n,null);h(n,f);for(let m=0;m<_.length;m+=1)_[m].m(n,null);o||(g=P(i,"click",e[2]),o=!0)},p(p,[$]){if($&1){u=["standard","expert","skirmish","heroic"];let m;for(m=0;m<4;m+=1){const G=Re(p,u,m);a[m]?a[m].p(G,$):(a[m]=Pe(G),a[m].c(),a[m].m(n,f))}for(;m<4;m+=1)a[m].d(1)}if($&1){c=Ne(p[0]);let m;for(m=0;m<c.length;m+=1){const G=De(p,c,m);_[m]?_[m].p(G,$):(_[m]=Ke(G),_[m].c(),_[m].m(n,null))}for(;m<_.length;m+=1)_[m].d(1);_.length=c.length}},i:B,o:B,d(p){p&&k(t),te(a,p),te(_,p),o=!1,g()}}}function mt(e,t,n){var a;let i;be(e,Y,c=>n(0,i=c)),console.log(i.length);for(let c=0;c<i.length;c++)JSON.parse((a=localStorage.getItem("enabledHeroes"))!=null?a:"[]").some(p=>p.name===i[c].name&&p.type===i[c].type)&&we(Y,i[c].enabled=!1,i);function l(){let c=[];for(let _=0;_<i.length;_++)i[_].enabled||c.push({name:i[_].name,type:i[_].type});console.log(JSON.stringify(c)),localStorage.setItem("enabledHeroes",JSON.stringify(c))}const r=()=>{l()};function f(c,_){c[_].enabled=this.checked,Y.set(i)}const o=c=>{we(Y,i=Ae(i,c.name,!0),i)},g=c=>{we(Y,i=Ae(i,c.name,!1),i)};function u(c,_){c[_].enabled=this.checked,Y.set(i)}return[i,l,r,f,o,g,u]}class ht extends fe{constructor(t){super(),se(this,t,mt,dt,ne,{})}}class pt{constructor(){this.villain=void 0,this.module=[],this.adjustment=void 0}calc_difficulty(t){let n,i;this.villain!==void 0?n=this.villain.getDifficulty(t):n=0;const l=this.module.reduce((r,f)=>r+f.getDifficulty(t),0);return this.adjustment!==void 0?i=this.adjustment.getDifficulty(t):i=0,console.log("Dificuldade calculada vma",n,l,i),n+l+i}addVillain(t){this.villain=t}addModule(t){this.module.push(t)}addAdjustment(t){this.adjustment=t}}function Se(e,t=void 0,n=void 0,i){let l=[];if(t!==void 0&&n!==void 0&&(console.log("Trying to find an ",e[0].constructor.name,"error: ",n,"target: ",t),l=e,l=l.filter(o=>o.getDifficulty(i)>=t-n&&o.getDifficulty(i)<=t+n)),l.length>0)return console.log("random pick:",l[0].type,l.length),l[Math.floor(Math.random()*l.length)];console.log("best pick",e[0].type);let r=Math.abs(t-e[0].getDifficulty(i)),f=e[0];for(let o=0;o<e.length;o++)Math.abs(t-e[o].getDifficulty(i))<r&&(f=e[o],r=t-e[o].getDifficulty(i));return f}class _t{constructor(t,n,i,l){this.standard=t,this.expert=n,this.skirmish=i,this.heroic=l}getDifficulty(t){return this.standard.difficulty+this.expert.difficulty+this.skirmish.difficulty+this.heroic.difficulty}}function bt(e){const t=[];for(let n=0;n<Z(e,"standard").length;n++)for(let i=0;i<Z(e,"expert").length;i++)for(let l=0;l<Z(e,"skirmish").length;l++)for(let r=0;r<Z(e,"heroic").length;r++)t.push(new _t(Z(e,"standard")[n],Z(e,"expert")[i],Z(e,"skirmish")[l],Z(e,"heroic")[r]));return t}function gt(e,t){const n=e.difficulty;let i=e.moduleNumber;const l=e.solo,r=new pt,f=t.filter(b=>b.enabled),o=Z(f,"module"),g=Z(f,"villain"),u=bt(f),a=Math.max(...u.map(b=>b.getDifficulty(l))),c=Math.min(...u.map(b=>b.getDifficulty(l)));console.log("maxAdjustment",a),console.log("minAdjustment",c);let _=(a-c)/2,p=e.difficulty-a+_;_<5&&(_=5,p=n);const $=Se(g,p,_,l);r.addVillain($),$.name==="Wrecking Crew"&&(i=0),$.name==="The Hood"&&(i=7),console.log($.obligatoryModules);for(let b=0;b<$.obligatoryModules.length;b++){const M=t.find(D=>D.type==="module"&&$.obligatoryModules[b]===D.name);r.addModule(M);const T=o.findIndex(D=>D.name===M.name);o.splice(T,1)}e.settingObligatoryModule&&(i=i-$.obligatoryModules.length),i<0&&(i=0),console.log($.name,$.getDifficulty(l));let m;a-c<8||i<2?m=1/3:m=2/3;for(let b=0;b<Math.round(i*m);b++){const M=Math.floor(Math.random()*o.length);console.log(o[M].name,o[M].getDifficulty(l)),r.addModule(o[M]),o.splice(M,1)}p=n-r.calc_difficulty(l);const G=Se(u,p,0,l);r.addAdjustment(G),console.log("adjustment",G.getDifficulty(l));for(let b=0;b<Math.round(i*(1-m));b++){console.log("Difficulty",n),console.log("Encounter",r.calc_difficulty(l)),p=n-r.calc_difficulty(l),console.log("Target module");const M=Se(o,p,1,l),T=o.findIndex(D=>D.name===M.name);r.addModule(M),o.splice(T,1),console.log(M.name,M.getDifficulty(l))}return($.name==="Nebula"||$.name==="Ronan the Accuser")&&r.addModule(new s("module","Galaxy's Most Wanted","Power Stone",0)),r}var xe;const ge=it(JSON.parse((xe=window.localStorage.getItem("settingObligatoryModule"))!=null?xe:"false"));ge.subscribe(e=>{console.log("Saving settingObligatoryModule to localStorage",e),window.localStorage.setItem("settingObligatoryModule",JSON.stringify(e))});function qe(e,t,n){const i=e.slice();return i[12]=t[n],i}function Fe(e,t,n){const i=e.slice();return i[15]=t[n],i}function yt(e){let t;return{c(){t=H("Extra modular sets")},m(n,i){S(n,t,i)},d(n){n&&k(t)}}}function wt(e){let t;return{c(){t=H("Modular sets")},m(n,i){S(n,t,i)},d(n){n&&k(t)}}}function kt(e){let t;return{c(){t=H("Multiplayer")},m(n,i){S(n,t,i)},d(n){n&&k(t)}}}function St(e){let t;return{c(){t=H("Solo")},m(n,i){S(n,t,i)},d(n){n&&k(t)}}}function Je(e){let t,n,i,l=e[3].calc_difficulty(e[4])+"",r,f,o,g,u,a=e[3].villain.name+"",c,_,p=e[3].villain.set+"",$,m,G,b,M,T,D,z,K,q=e[3].module,E=[];for(let d=0;d<q.length;d+=1)E[d]=Ve(Fe(e,q,d));let U=["standard","expert","skirmish","heroic"],O=[];for(let d=0;d<4;d+=1)O[d]=Ue(qe(e,U,d));return{c(){t=w("p"),n=w("b"),n.textContent="Encounter Difficulty:",i=C(),r=H(l),f=C(),o=w("p"),g=w("b"),g.textContent="Encounter:",u=C(),c=H(a),_=H(" - ("),$=H(p),m=H(")"),G=C(),b=w("p"),b.innerHTML="<b>Modules:</b>",M=C();for(let d=0;d<E.length;d+=1)E[d].c();T=C(),D=w("p"),D.innerHTML="<b>Modes:</b>",z=C();for(let d=0;d<4;d+=1)O[d].c();K=ie()},m(d,v){S(d,t,v),h(t,n),h(t,i),h(t,r),S(d,f,v),S(d,o,v),h(o,g),h(o,u),h(o,c),h(o,_),h(o,$),h(o,m),S(d,G,v),S(d,b,v),S(d,M,v);for(let y=0;y<E.length;y+=1)E[y].m(d,v);S(d,T,v),S(d,D,v),S(d,z,v);for(let y=0;y<4;y+=1)O[y].m(d,v);S(d,K,v)},p(d,v){if(v&24&&l!==(l=d[3].calc_difficulty(d[4])+"")&&J(r,l),v&8&&a!==(a=d[3].villain.name+"")&&J(c,a),v&8&&p!==(p=d[3].villain.set+"")&&J($,p),v&8){q=d[3].module;let y;for(y=0;y<q.length;y+=1){const N=Fe(d,q,y);E[y]?E[y].p(N,v):(E[y]=Ve(N),E[y].c(),E[y].m(T.parentNode,T))}for(;y<E.length;y+=1)E[y].d(1);E.length=q.length}if(v&8){U=["standard","expert","skirmish","heroic"];let y;for(y=0;y<4;y+=1){const N=qe(d,U,y);O[y]?O[y].p(N,v):(O[y]=Ue(N),O[y].c(),O[y].m(K.parentNode,K))}for(;y<4;y+=1)O[y].d(1)}},d(d){d&&k(t),d&&k(f),d&&k(o),d&&k(G),d&&k(b),d&&k(M),te(E,d),d&&k(T),d&&k(D),d&&k(z),te(O,d),d&&k(K)}}}function Ve(e){let t,n=e[15].name+"",i,l,r=e[15].set+"",f,o;return{c(){t=w("p"),i=H(n),l=H(" - ("),f=H(r),o=H(")")},m(g,u){S(g,t,u),h(t,i),h(t,l),h(t,f),h(t,o)},p(g,u){u&8&&n!==(n=g[15].name+"")&&J(i,n),u&8&&r!==(r=g[15].set+"")&&J(f,r)},d(g){g&&k(t)}}}function ze(e){let t,n=e[3].adjustment[e[12]].name+"",i;return{c(){t=w("p"),i=H(n)},m(l,r){S(l,t,r),h(t,i)},p(l,r){r&8&&n!==(n=l[3].adjustment[l[12]].name+"")&&J(i,n)},d(l){l&&k(t)}}}function Ue(e){let t=!["No Skirmish","No Heroic","No Expert"].includes(e[3].adjustment[e[12]].name),n,i=t&&ze(e);return{c(){i&&i.c(),n=ie()},m(l,r){i&&i.m(l,r),S(l,n,r)},p(l,r){r&8&&(t=!["No Skirmish","No Heroic","No Expert"].includes(l[3].adjustment[l[12]].name)),t?i?i.p(l,r):(i=ze(l),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(l){i&&i.d(l),l&&k(n)}}}function vt(e){let t,n,i,l,r,f,o,g,u,a,c,_,p,$,m,G,b,M,T,D,z,K,q,E,U,O,d,v,y;function N(j,V){return j[6]?wt:yt}let R=N(e),I=R(e);function Ce(j,V){return j[4]?St:kt}let ae=Ce(e),Q=ae(e),L=e[2]&&Je(e);return{c(){t=w("main"),n=w("div"),i=w("p"),i.textContent="Dificult setting",l=C(),r=w("input"),f=C(),o=w("p"),g=H(e[0]),u=C(),a=w("p"),c=H(e[5]),_=C(),p=w("p"),I.c(),$=C(),m=w("input"),G=C(),b=w("p"),M=H(e[1]),T=C(),D=w("button"),D.textContent="Generate Encounter",z=C(),K=w("p"),K.textContent="Number of players",q=C(),E=w("input"),U=C(),O=w("p"),Q.c(),d=C(),L&&L.c(),A(r,"type","range"),A(r,"min","1"),A(r,"max","30"),A(r,"class","slider"),A(r,"id","myRange"),A(m,"type","range"),A(m,"min","0"),A(m,"max","10"),A(m,"class","slider"),A(m,"id","myRange"),A(E,"type","checkbox")},m(j,V){S(j,t,V),h(t,n),h(n,i),h(n,l),h(n,r),ce(r,e[0]),h(n,f),h(n,o),h(o,g),h(n,u),h(n,a),h(a,c),h(n,_),h(n,p),I.m(p,null),h(n,$),h(n,m),ce(m,e[1]),h(n,G),h(n,b),h(b,M),h(n,T),h(n,D),h(n,z),h(n,K),h(n,q),h(n,E),E.checked=e[4],h(n,U),h(n,O),Q.m(O,null),h(n,d),L&&L.m(n,null),v||(y=[P(r,"change",e[8]),P(r,"input",e[8]),P(m,"change",e[9]),P(m,"input",e[9]),P(D,"click",e[7]),P(E,"change",e[10])],v=!0)},p(j,[V]){V&1&&ce(r,j[0]),V&1&&J(g,j[0]),V&32&&J(c,j[5]),R!==(R=N(j))&&(I.d(1),I=R(j),I&&(I.c(),I.m(p,null))),V&2&&ce(m,j[1]),V&2&&J(M,j[1]),V&16&&(E.checked=j[4]),ae!==(ae=Ce(j))&&(Q.d(1),Q=ae(j),Q&&(Q.c(),Q.m(O,null))),j[2]?L?L.p(j,V):(L=Je(j),L.c(),L.m(n,null)):L&&(L.d(1),L=null)},i:B,o:B,d(j){j&&k(t),I.d(),Q.d(),L&&L.d(),v=!1,X(y)}}}function Mt(e,t,n){let i,l,r;be(e,Y,m=>n(11,l=m)),be(e,ge,m=>n(6,r=m));let f=10,o=2,g=!1,u,a=!0;function c(){n(3,u=gt({difficulty:f,moduleNumber:o,solo:a,settingObligatoryModule:r},l)),n(2,g=!0)}function _(){f=Te(this.value),n(0,f)}function p(){o=Te(this.value),n(1,o)}function $(){a=this.checked,n(4,a)}return e.$$.update=()=>{e.$$.dirty&1&&n(5,i=ct(f))},[f,o,g,u,a,i,r,c,_,p,$]}class $t extends fe{constructor(t){super(),se(this,t,Mt,vt,ne,{})}}function Ct(e){let t;return{c(){t=H("Not including required modules")},m(n,i){S(n,t,i)},d(n){n&&k(t)}}}function Gt(e){let t;return{c(){t=H("Including required modules")},m(n,i){S(n,t,i)},d(n){n&&k(t)}}}function Tt(e){let t,n,i,l,r,f,o,g;function u(_,p){return _[0]?Gt:Ct}let a=u(e),c=a(e);return{c(){t=w("main"),n=w("p"),i=H(`Include required modules in the module count\r
`),l=w("input"),r=C(),f=w("p"),c.c(),A(l,"type","checkbox")},m(_,p){S(_,t,p),h(t,n),h(n,i),h(n,l),l.checked=e[0],h(t,r),h(t,f),c.m(f,null),o||(g=P(l,"change",e[1]),o=!0)},p(_,[p]){p&1&&(l.checked=_[0]),a!==(a=u(_))&&(c.d(1),c=a(_),c&&(c.c(),c.m(f,null)))},i:B,o:B,d(_){_&&k(t),c.d(),o=!1,g()}}}function Et(e,t,n){let i;be(e,ge,r=>n(0,i=r));function l(){i=this.checked,ge.set(i)}return[i,l]}class Ht extends fe{constructor(t){super(),se(this,t,Et,Tt,ne,{})}}function Nt(e){let t;return{c(){t=w("main"),t.innerHTML=`Big thanks to  <a href="https://boardgamegeek.com/user/gatchaman">Matt Crawford</a> and
<a href="https://boardgamegeek.com/user/Dormammu">Max Maloney</a> for the star difficulty system used as base for the balance.
<br/> 

<a href="https://boardgamegeek.com/thread/2335981/gameplay-statistics-record-your-plays">Gameplay statistics (record your plays)</a> 
<br/> 
<a href="https://boardgamegeek.com/thread/2438111/star-difficulty-levels">Star Difficulty Levels</a> 
<br/>

Help improving the difficulty accuracy by recording your plays on Gameplay statistics (record your plays)`},m(n,i){S(n,t,i)},p:B,i:B,o:B,d(n){n&&k(t)}}}class At extends fe{constructor(t){super(),se(this,t,null,Nt,ne,{})}}function Ze(e){let t,n;return t=new $t({}),{c(){ye(t.$$.fragment)},m(i,l){re(t,i,l),n=!0},i(i){n||(W(t.$$.fragment,i),n=!0)},o(i){F(t.$$.fragment,i),n=!1},d(i){ue(t,i)}}}function Qe(e){let t,n;return t=new ht({}),{c(){ye(t.$$.fragment)},m(i,l){re(t,i,l),n=!0},i(i){n||(W(t.$$.fragment,i),n=!0)},o(i){F(t.$$.fragment,i),n=!1},d(i){ue(t,i)}}}function Xe(e){let t,n;return t=new Ht({}),{c(){ye(t.$$.fragment)},m(i,l){re(t,i,l),n=!0},i(i){n||(W(t.$$.fragment,i),n=!0)},o(i){F(t.$$.fragment,i),n=!1},d(i){ue(t,i)}}}function Ye(e){let t,n;return t=new At({}),{c(){ye(t.$$.fragment)},m(i,l){re(t,i,l),n=!0},i(i){n||(W(t.$$.fragment,i),n=!0)},o(i){F(t.$$.fragment,i),n=!1},d(i){ue(t,i)}}}function Dt(e){let t,n,i,l,r,f,o,g,u,a,c,_,p,$,m,G,b,M,T,D,z,K,q,E,U,O,d=e[0]==="EncounterGenerator"&&Ze(),v=e[0]==="CollectionConfig"&&Qe(),y=e[0]==="Settings"&&Xe(),N=e[0]==="About"&&Ye();return{c(){t=w("main"),n=w("div"),i=w("nobr"),l=w("button"),r=H(`Encounter Generator\r
    `),o=w("button"),g=H(`Collection Config\r
    `),a=w("button"),c=H(`Settings\r
    `),p=w("button"),$=H("About"),G=C(),b=w("br"),M=C(),T=w("br"),D=C(),d&&d.c(),z=C(),v&&v.c(),K=C(),y&&y.c(),q=C(),N&&N.c(),A(l,"class",f=e[0]==="EncounterGenerator"?"active":"inactive"),A(o,"class",u=e[0]==="CollectionConfig"?"active":"inactive"),A(a,"class",_=e[0]==="Settings"?"active":"inactive"),A(p,"class",m=e[0]==="About"?"active":"inactive"),A(n,"class","topnav")},m(R,I){S(R,t,I),h(t,n),h(n,i),h(i,l),h(l,r),h(i,o),h(o,g),h(i,a),h(a,c),h(i,p),h(p,$),h(t,G),h(t,b),h(t,M),h(t,T),h(t,D),d&&d.m(t,null),h(t,z),v&&v.m(t,null),h(t,K),y&&y.m(t,null),h(t,q),N&&N.m(t,null),E=!0,U||(O=[P(l,"click",e[1]),P(o,"click",e[2]),P(a,"click",e[3]),P(p,"click",e[4])],U=!0)},p(R,[I]){(!E||I&1&&f!==(f=R[0]==="EncounterGenerator"?"active":"inactive"))&&A(l,"class",f),(!E||I&1&&u!==(u=R[0]==="CollectionConfig"?"active":"inactive"))&&A(o,"class",u),(!E||I&1&&_!==(_=R[0]==="Settings"?"active":"inactive"))&&A(a,"class",_),(!E||I&1&&m!==(m=R[0]==="About"?"active":"inactive"))&&A(p,"class",m),R[0]==="EncounterGenerator"?d?I&1&&W(d,1):(d=Ze(),d.c(),W(d,1),d.m(t,z)):d&&(me(),F(d,1,1,()=>{d=null}),he()),R[0]==="CollectionConfig"?v?I&1&&W(v,1):(v=Qe(),v.c(),W(v,1),v.m(t,K)):v&&(me(),F(v,1,1,()=>{v=null}),he()),R[0]==="Settings"?y?I&1&&W(y,1):(y=Xe(),y.c(),W(y,1),y.m(t,q)):y&&(me(),F(y,1,1,()=>{y=null}),he()),R[0]==="About"?N?I&1&&W(N,1):(N=Ye(),N.c(),W(N,1),N.m(t,null)):N&&(me(),F(N,1,1,()=>{N=null}),he())},i(R){E||(W(d),W(v),W(y),W(N),E=!0)},o(R){F(d),F(v),F(y),F(N),E=!1},d(R){R&&k(t),d&&d.d(),v&&v.d(),y&&y.d(),N&&N.d(),U=!1,X(O)}}}function jt(e,t,n){let i="EncounterGenerator";return[i,()=>n(0,i="EncounterGenerator"),()=>n(0,i="CollectionConfig"),()=>n(0,i="Settings"),()=>n(0,i="About")]}class Rt extends fe{constructor(t){super(),se(this,t,jt,Dt,ne,{})}}new Rt({target:document.getElementById("app")});
