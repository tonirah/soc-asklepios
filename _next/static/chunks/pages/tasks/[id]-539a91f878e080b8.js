(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{9474:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tasks/[id]",function(){return t(8759)}])},8759:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return j},default:function(){return v}});var r=t(5893),i=t(1664),s=t(8607),l=t(9008),a=t(4059),o=t(7389),c=t(7294),u=t(4184),d=t.n(u),f=t(1669);var h=c.forwardRef((function(e,n){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}))})),m=t(5762);function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,s=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(s.push(r.value),!n||s.length!==n);l=!0);}catch(o){a=!0,i=o}finally{try{l||null==t.return||t.return()}finally{if(a)throw i}}return s}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=(0,f.lD)("false");var j=!0;function v(e){var n=e.taskData,t=function(e,n){return n?e:e.filter((function(e){return e.type!==s.n$.CodeSmell}))}(n.inputs,p),u=(0,c.useContext)(o.lm),f=u.setTaskProgress,x=u.getTaskPoints,j=u.getTaskProgress,v=u.useVisitedTimer,w=(0,c.useState)(!1),y=w[0],k=w[1],N=b((0,o.X8)(),2),C=N[0],_=N[1],E=b((0,o.cy)(),3),A=E[0],L=E[1],S=E[2];(0,c.useEffect)((function(){L&&(k(!0),f(n.uuid,o.ee.Solved))}),[L,k,f,n.uuid]),v(n.uuid,j);var O,P=t.map((function(e){return e.lines})).join();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{children:(0,r.jsx)("title",{children:n.name})}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsxs)("h1",{className:"font-mono text-3xl font-bold tracking-wider underline text-primary-focus decoration-accent sm:-mb-3",children:[(0,r.jsx)(a.qD,{className:"h-16 w-16 inline-block mr-1",taskProgress:j(n.uuid)}),n.name]}),(0,r.jsxs)("span",{className:"font-mono tracking-wider text-accent",children:[n.category,","," "]}),(0,r.jsxs)("span",{className:"font-mono tracking-wider text-secondary",children:["Punkte:"," ",(0,r.jsx)("span",{className:"font-bold",children:x(n.uuid)})]})]}),(0,r.jsxs)("div",{className:"flex flex-col xl:flex-row gap-3 mb-8 w-full items-stretch",children:[(0,r.jsx)("div",{className:"flex flex-col justify-end 2xl:justify-start xl:w-0 flex-auto bg-base-300/70 border border-neutral rounded-box",children:(0,r.jsx)(a.dn,{code:n.dirtyCode,highlightedLines:P,highlightColor:a.hE.Red,isLineHintActive:y,className:"text-sm"})}),L&&(0,r.jsx)("div",{className:"flex flex-col justify-end 2xl:justify-start xl:w-0 flex-auto bg-base-300/70 border border-neutral rounded-box",children:(0,r.jsx)(a.dn,{code:n.cleanCode,highlightedLines:n.cleanCodeHighlightedLines,highlightColor:a.hE.Green,isLineHintActive:y,className:"text-sm"})})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-3 mb-3",children:t.map((function(e,t){return(0,r.jsx)(a.II,{index:t,inputData:e,handleChangedInput:_,isLineHintActive:y,isValid:A[t],showAllOptions:n.showAllOptions},"input-".concat(t))}))}),L&&(0,r.jsx)(a.sv,{comment:n.comment}),(0,r.jsx)("div",{className:"mt-12 mb-3 flex justify-center",children:(0,r.jsxs)("label",{htmlFor:"lineHighlighter",className:"label justify-center gap-1.5 cursor-pointer p-0",children:[(0,r.jsx)("input",{className:"toggle",type:"checkbox",id:"lineHighlighter",onClick:function(){return k((function(e){return!e}))},onChange:function(){return{}},checked:y}),(0,r.jsx)("span",{className:"label-text",children:"Codestellen hervorheben"})]})}),(0,r.jsxs)("div",{className:"flex gap-3 justify-center",children:[(0,r.jsxs)("button",{className:d()("btn",(O={},g(O,"btn-primary",!L),g(O,"btn-disabled",L),O)),onClick:function(){S(t,C)},children:[(0,r.jsx)(h,{className:"h-5 w-5 mr-1"}),"Evaluieren"]}),(0,r.jsx)(i.default,{href:"/",children:(0,r.jsxs)("a",{className:d()("btn",g({},"btn-primary",L)),children:[(0,r.jsx)(m.Z,{className:"h-5 w-5 mr-1"}),"Zur\xfcck"]})})]})]})}},9008:function(e,n,t){e.exports=t(3121)},5762:function(e,n,t){"use strict";var r=t(7294);const i=r.forwardRef((function(e,n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"}))}));n.Z=i}},function(e){e.O(0,[774,888,179],(function(){return n=9474,e(e.s=n);var n}));var n=e.O();_N_E=n}]);