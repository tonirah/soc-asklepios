(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[484],{9474:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tasks/[id]",function(){return n(8759)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(s){i=!0,o=s}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1003),s=n(880),c=n(9246);var u={};function f(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),a=l.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,h=a.as,p=e.children,m=e.replace,x=e.shallow,y=e.scroll,v=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var g=(t=l.default.Children.only(p))&&"object"===typeof t&&t.ref,b=o(c.useIntersection({rootMargin:"200px"}),2),j=b[0],w=b[1],k=l.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);l.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),t="undefined"!==typeof v?v:r&&r.locale,o=u[d+"%"+h+(t?"%"+t:"")];e&&!o&&f(r,d,h,{locale:t})}),[h,d,w,v,n,r]);var N={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:l}))}(e,r,d,h,m,x,y,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(r,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof v?v:r&&r.locale,C=r&&r.isLocaleDomain&&i.getDomainLocale(h,L,r&&r.locales,r&&r.domainLocales);N.href=C||i.addBasePath(i.addLocale(h,L,r&&r.defaultLocale))}return l.default.cloneElement(t,N)};t.default=d},8759:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return b}});var r=n(5893),o=n(1664),a=n(8525),l=n(9008),i=n(9464),s=n(7389),c=n(7294),u=n(4184),f=n.n(u),d=n(1669);var h=c.forwardRef((function(e,t){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}))})),p=n(5762);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(s){i=!0,o=s}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=(0,d.lD)("false");var g=!0;function b(e){var t=e.taskData,n=function(e,t){return t?e:e.filter((function(e){return e.type!==a.n$.CodeSmell}))}(t.inputs,v),u=(0,c.useContext)(s.lm),d=u.setTaskProgress,m=u.getTaskPoints,g=u.getTaskProgress,b=u.useVisitedTimer,j=(0,c.useState)(!1),w=j[0],k=j[1],N=y((0,s.X8)(),2),L=N[0],C=N[1],E=y((0,s.cy)(),3),A=E[0],_=E[1],S=E[2];(0,c.useEffect)((function(){_&&(k(!0),d(t.uuid,s.ee.Solved))}),[_,k,d,t.uuid]),b(t.uuid,g);var M,O=n.map((function(e){return e.lines})).join();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{children:(0,r.jsx)("title",{children:t.name})}),(0,r.jsxs)("div",{className:"flex flex-row justify-center mb-3",children:[(0,r.jsx)(i.qD,{className:"h-16 w-16 mr-1 shrink-0",taskProgress:g(t.uuid)}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"font-mono text-3xl font-bold tracking-wider underline text-primary-focus decoration-accent",children:t.name}),(0,r.jsxs)("span",{className:"font-mono tracking-wider text-accent mr-4",children:[t.category,","]}),(0,r.jsxs)("span",{className:"font-mono tracking-wider text-info",children:["Punkte:"," ",(0,r.jsx)("span",{className:"font-bold",children:m(t.uuid)})]})]})]}),(0,r.jsxs)("div",{className:"flex flex-col xl:flex-row gap-3 mb-8 w-full items-stretch",children:[(0,r.jsx)("div",{className:" flex flex-col justify-end 2xl:justify-start xl:w-0 flex-auto bg-base-300 border border-neutral shadow-xl rounded-box",children:(0,r.jsx)(i.dn,{code:t.dirtyCode,highlightedLines:O,highlightColor:i.hE.Red,isLineHintActive:w,className:"text-sm"})}),_&&(0,r.jsx)("div",{className:" flex flex-col justify-end 2xl:justify-start xl:w-0 flex-auto bg-base-300 border border-neutral shadow-xl rounded-box",children:(0,r.jsx)(i.dn,{code:t.cleanCode,highlightedLines:t.cleanCodeHighlightedLines,highlightColor:i.hE.Green,isLineHintActive:w,className:"text-sm"})})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-3 mb-3",children:n.map((function(e,n){return(0,r.jsx)(i.II,{index:n,inputData:e,handleChangedInput:C,isLineHintActive:w,isValid:A[n],showAllOptions:t.showAllOptions},"input-".concat(n))}))}),_&&(0,r.jsx)(i.sv,{comment:t.comment}),(0,r.jsx)("div",{className:"mt-12 mb-3 flex justify-center",children:(0,r.jsxs)("label",{htmlFor:"lineHighlighter",className:"label justify-center gap-1.5 cursor-pointer p-0",children:[(0,r.jsx)("input",{className:"toggle",type:"checkbox",id:"lineHighlighter",onClick:function(){return k((function(e){return!e}))},onChange:function(){return{}},checked:w}),(0,r.jsx)("span",{className:"label-text",children:"Codestellen hervorheben"})]})}),(0,r.jsxs)("div",{className:"flex gap-3 justify-center",children:[(0,r.jsxs)("button",{className:f()("btn",(M={},x(M,"btn-primary",!_),x(M,"btn-disabled",_),M)),onClick:function(){S(n,L)},children:[(0,r.jsx)(h,{className:"h-5 w-5 mr-1"}),"Evaluieren"]}),(0,r.jsx)(o.default,{href:"/",children:(0,r.jsxs)("a",{className:f()("btn",x({},"btn-primary",_)),children:[(0,r.jsx)(p.Z,{className:"h-5 w-5 mr-1"}),"Zur\xfcck"]})})]})]})}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},5762:function(e,t,n){"use strict";var r=n(7294);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"}))}));t.Z=o}},function(e){e.O(0,[774,888,179],(function(){return t=9474,e(e.s=t);var t}));var t=e.O();_N_E=t}]);