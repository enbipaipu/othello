(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(85)}])},85:function(e,n,r){"use strict";r.r(n);var i=r(5893),s=r(7294),c=r(2729),o=r.n(c);n.default=()=>{let[e,n]=(0,s.useState)(1),r=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,3,0,0,0,0],[0,0,3,2,1,0,0,0],[0,0,0,1,2,3,0,0],[0,0,0,0,3,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],[c,a]=(0,s.useState)(r),t=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]],l=(r,i)=>{let s=JSON.parse(JSON.stringify(c)),o=e=>{s.forEach((e,n)=>{e.forEach((e,r)=>{3===s[n][r]&&(s[n][r]=0)})}),s.forEach((n,r)=>{n.forEach((n,i)=>{if(0===s[r][i])for(let n of t){let c=!1;for(let o=1;o<8;o++){let a=r+n[0]*o,t=i+n[1]*o;if(void 0===s[a]||void 0===s[t])break;if(s[a][t]%3==0)break;if(s[a][t]===e)c=!0;else if(s[a][t]===3-e){c&&(s[r][i]=3);break}}}})}),a(s)};if(3!==c[i][r])return;let l=!1;for(let n of t){let o=!1;for(let a=1;a<8;a++){let t=i+n[0]*a,d=r+n[1]*a;if(void 0===c[t]||c[t][d]%3==0)break;if(c[t][d]===3-e)o=!0;else if(c[t][d]===e){if(!0!==o)break;for(let c=0;c<=a;c++)l=!0,s[i+n[0]*c][r+n[1]*c]=e;break}}}l&&(a(s),o(e),n(3-e)),!1===s.some(e=>e.includes(3))&&(o(3-e),n(e),alert("石を置ける場所がないため".concat(3-e==1?"黒":"白","のターンがスキップされます")))},d=0,_=0;return c.forEach(e=>{e.forEach(e=>{1===e?d++:2===e&&_++})}),(0,i.jsxs)("div",{className:o().container,children:[(0,i.jsx)("div",{className:o().board,children:c.map((e,n)=>e.map((e,r)=>(0,i.jsx)("div",{className:"".concat(o().cell," ").concat(3===e?o().orangeBorder:""),onClick:()=>l(r,n),children:0!==e&&3!==e&&(0,i.jsx)("div",{className:o().stone,style:{background:1===e?"#000":"#fff"}})},"".concat(r,"-").concat(n))))}),(0,i.jsxs)("div",{className:o().sidePanel,children:[(0,i.jsx)("div",{className:o().turn,children:(0,i.jsxs)("h1",{children:[1===e?"黒":"白","の番です"]})}),(0,i.jsxs)("div",{className:o().score,children:[(0,i.jsx)("h1",{children:"＜得点＞"}),(0,i.jsxs)("h1",{children:["黒: ",d]}),(0,i.jsxs)("h1",{children:["白: ",_]})]}),(0,i.jsx)("button",{className:o().button,onClick:()=>{a(r),n(1)},children:"リセット"})]})]})}},2729:function(e){e.exports={container:"index_container___q52_",board:"index_board__dNO5V",cell:"index_cell__E8qMc",orangeBorder:"index_orangeBorder__J34yu",blink:"index_blink__oSKOY",stone:"index_stone__5i_qa",sidePanel:"index_sidePanel__oxJPZ",turn:"index_turn__RsQgv",score:"index_score__lmU91",button:"index_button__STkB1"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);