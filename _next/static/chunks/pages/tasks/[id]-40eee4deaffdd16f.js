(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{9474:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tasks/[id]",function(){return t(8759)}])},8759:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return g},default:function(){return j}});var r=t(5893),s=t(8607),i=t(7544),l=t(7389),a=t(7294),o=t(4184),c=t.n(o),u=t(1669);var d=a.forwardRef((function(e,n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}))})),f=t(5762),m=t(1664);function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,s,i=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);l=!0);}catch(o){a=!0,s=o}finally{try{l||null==t.return||t.return()}finally{if(a)throw s}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=(0,u.lD)("false");var g=!0;function j(e){var n=e.taskData,t=function(e,n){return n?e:e.filter((function(e){return e.type!==s.n$.CodeSmell}))}(n.inputs,p),o=(0,a.useContext)(l.lm),u=o.setTaskProgress,h=o.getTaskPoints,g=o.getTaskProgress,j=o.useVisitedTimer,v=(0,a.useState)(!1),w=v[0],y=v[1],k=b((0,l.X8)(),2),N=k[0],C=k[1],_=b((0,l.cy)(),3),E=_[0],A=_[1],L=_[2];(0,a.useEffect)((function(){A&&(y(!0),u(n.uuid,l.ee.Solved))}),[A,y,u,n.uuid]),j(n.uuid,g);var S,O=t.map((function(e){return e.lines})).join();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Fb,{title:n.name}),(0,r.jsx)(i.wp,{}),(0,r.jsxs)("div",{className:"container mx-auto text-center pt-8 pb-32 px-2",children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsxs)("h1",{className:"font-mono text-3xl font-bold tracking-wider underline text-primary-focus decoration-accent sm:-mb-3",children:[(0,r.jsx)(i.qD,{className:"h-16 w-16 inline-block mr-1",taskProgress:g(n.uuid)}),n.name]}),(0,r.jsxs)("span",{className:"font-mono tracking-wider text-accent",children:[n.category,","," "]}),(0,r.jsxs)("span",{className:"font-mono tracking-wider text-secondary",children:["Punkte:"," ",(0,r.jsx)("span",{className:"font-bold",children:h(n.uuid)})]})]}),(0,r.jsxs)("div",{className:"flex flex-col xl:flex-row mb-8 w-full items-stretch",children:[(0,r.jsx)("div",{className:"flex flex-col justify-end m-0.5 2xl:justify-start xl:w-0 flex-auto bg-base-300 border border-neutral rounded-box",children:(0,r.jsx)(i.dn,{code:n.dirtyCode,highlightedLines:O,highlightColor:i.hE.Red,isLineHintActive:w,className:"text-sm"})}),A&&(0,r.jsx)("div",{className:"flex flex-col justify-end m-0.5 2xl:justify-start xl:w-0 flex-auto bg-base-300 border border-neutral rounded-box",children:(0,r.jsx)(i.dn,{code:n.cleanCode,highlightedLines:n.cleanCodeHighlightedLines,highlightColor:i.hE.Green,isLineHintActive:w,className:"text-sm"})})]}),(0,r.jsx)("div",{className:"mb-3",children:t.map((function(e,t){return(0,r.jsx)(i.II,{index:t,inputData:e,handleChangedInput:C,isLineHintActive:w,isValid:E[t],showAllOptions:n.showAllOptions},"input-".concat(t))}))}),A&&(0,r.jsx)(i.sv,{comment:n.comment}),(0,r.jsx)("div",{className:"mt-12 mb-3 flex justify-center",children:(0,r.jsxs)("label",{htmlFor:"lineHighlighter",className:"label justify-center cursor-pointer p-0",children:[(0,r.jsx)("input",{className:"toggle mr-1.5",type:"checkbox",id:"lineHighlighter",onClick:function(){return y((function(e){return!e}))},onChange:function(){return{}},checked:w}),(0,r.jsx)("span",{className:"label-text",children:"Codestellen hervorheben"})]})}),(0,r.jsxs)("div",{className:"flex justify-center",children:[(0,r.jsxs)("button",{className:c()("btn mx-1",(S={},x(S,"btn-primary",!A),x(S,"btn-disabled",A),S)),onClick:function(){L(t,N)},children:[(0,r.jsx)(d,{className:"h-5 w-5 mr-1"}),"Evaluieren"]}),(0,r.jsx)(m.default,{href:"/#soc-asklepios",scroll:!1,children:(0,r.jsxs)("a",{className:c()("btn mx-1",x({},"btn-primary",A)),children:[(0,r.jsx)(f.Z,{className:"h-5 w-5 mr-1"}),"SOC Asklepios"]})})]})]}),(0,r.jsx)(i.$_,{})]})}},5762:function(e,n,t){"use strict";var r=t(7294);const s=r.forwardRef((function(e,n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"}))}));n.Z=s}},function(e){e.O(0,[774,888,179],(function(){return n=9474,e(e.s=n);var n}));var n=e.O();_N_E=n}]);