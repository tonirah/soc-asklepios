(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(8565)}])},1551:function(e,t,s){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,a=new Array(t);s<t;s++)a[s]=e[s];return a}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var a,n,r=[],l=!0,i=!1;try{for(s=s.call(e);!(l=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);l=!0);}catch(c){i=!0,n=c}finally{try{l||null==s.return||s.return()}finally{if(i)throw n}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var r,l=(r=s(7294))&&r.__esModule?r:{default:r},i=s(1003),c=s(880),o=s(9246);var d={};function u(e,t,s,a){if(e&&i.isLocalURL(t)){e.prefetch(t,s,a).catch((function(e){0}));var n=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;d[t+"%"+s+(n?"%"+n:"")]=!0}}var f=function(e){var t,s=!1!==e.prefetch,a=c.useRouter(),r=l.default.useMemo((function(){var t=n(i.resolveHref(a,e.href,!0),2),s=t[0],r=t[1];return{href:s,as:e.as?i.resolveHref(a,e.as):r||s}}),[a,e.href,e.as]),f=r.href,h=r.as,m=e.children,x=e.replace,g=e.shallow,p=e.scroll,v=e.locale;"string"===typeof m&&(m=l.default.createElement("a",null,m));var b=(t=l.default.Children.only(m))&&"object"===typeof t&&t.ref,A=n(o.useIntersection({rootMargin:"200px"}),2),j=A[0],w=A[1],N=l.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);l.default.useEffect((function(){var e=w&&s&&i.isLocalURL(f),t="undefined"!==typeof v?v:a&&a.locale,n=d[f+"%"+h+(t?"%"+t:"")];e&&!n&&u(a,f,h,{locale:t})}),[h,f,w,v,s,a]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,s,a,n,r,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(s))&&(e.preventDefault(),t[n?"replace":"push"](s,a,{shallow:r,locale:c,scroll:l}))}(e,a,f,h,x,g,p,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(f)&&u(a,f,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var y="undefined"!==typeof v?v:a&&a.locale,C=a&&a.isLocaleDomain&&i.getDomainLocale(h,y,a&&a.locales,a&&a.domainLocales);k.href=C||i.addBasePath(i.addLocale(h,y,a&&a.defaultLocale))}return l.default.cloneElement(t,k)};t.default=f},8565:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return g},default:function(){return p}});var a=s(5893),n=s(9008),r=s(8607),l=s(1664),i=s(7294),c=s(7389),o=s(9464);var d=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"}))}));var u=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))}));var f=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}))})),h={src:"/soc-asklepios/_next/static/media/vtc-base.577a3ac5.png",height:234,width:416,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoElEQVR42hXDPQ6CMAAG0OpNdNDBTVmICYjQ0BaIUQIqKTQGjOJPdPByDh5LJ+ATXvLIVGN93QhJezCe2OM5lSOTJkOirUm7RxyedI/eKsM2Pvwydf3mxRNuoErSEUK+qSfrPL/jXL6QqhJS3WB6CjzIPoTxGBZLsPDTWrd3iOQFxenRzIwNuBOCcBFVzEsaKvZgboglDWGZASxDNL7Jqz/4m0A+gVWSwwAAAABJRU5ErkJggg=="},m={src:"/soc-asklepios/_next/static/media/vtc-highlight.d8c9935d.png",height:234,width:416,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAp0lEQVR42mOwsA5gZAACc5sgRXYxK3Vd5yQ1ZoMQJZAYm3cWWI7B2TMqwycw/n9SYva3mprWr11dk/9HJZdmgiV9feP3uvnE/k9PL/hfU9/xv7Nn2v958zf/Tyjo/O8fmraXwcs74r+zV8x/l4Ckf27BGf9TSrv+d/Qt+Red0fjf1yf6P4OXV+gfT5/of24+Mf893AL/u/vG/w8JSfnv7x74z9fR+w8ABaNDLn7ryRMAAAAASUVORK5CYII="},x={src:"/soc-asklepios/_next/static/media/soc-center-base.0e048f87.png",height:234,width:416,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAWklEQVR42hWGwQ3DMBDDJPkawx2sQBfo/jv0YSA4n2LzQZKf74+uDcHMJFHGgGPnnpNU75eaAPSI1SL2j/G2i6Sk45MWV7zsWlkgANtwlbmU81/LFJo2RyBJPsfuKSpB0TU9AAAAAElFTkSuQmCC"},g=!0;function p(e){var t=e.allTasks,s=(0,i.useContext)(c.lm),g=s.getTaskProgress,p=s.resetProgress,v=s.getCategoryProgressPercentage,b=s.getTotalScore,A=s.getRandomTaskId,j=(0,i.useState)(!1),w=j[0],N=j[1],k="SOC Asklepios";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{children:(0,a.jsx)("title",{children:k})}),(0,a.jsxs)("h1",{className:"font-mono text-6xl font-bold tracking-wider underline text-primary-focus decoration-accent leading-relaxed",children:[(0,a.jsx)(d,{className:"h-16 w-16 inline-block mr-2 text-secondary"}),k]}),(0,a.jsxs)("div",{className:"mx-auto w-full xl:w-4/5 2xl:w-2/3 mb-12",children:[(0,a.jsxs)("div",{className:"flex w-full gap-2 justify-center items-end",children:[(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsx)(l.default,{href:"/tasks/".concat(A(r.WD.CentralFlightSystem)),children:(0,a.jsxs)("a",{className:"btn btn-block btn-link justify-start h-fit",children:[(0,a.jsx)("div",{className:"mb-1",children:r.WD.CentralFlightSystem}),(0,a.jsx)("progress",{className:"block progress progress-accent mb-4",value:v(r.WD.CentralFlightSystem),max:"100"})]})})}),(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsx)(l.default,{href:"/tasks/".concat(A(r.WD.VentilationThermalControl)),children:(0,a.jsxs)("a",{className:"btn btn-block btn-link justify-end h-fit",children:[(0,a.jsx)("div",{className:"mb-1",children:r.WD.VentilationThermalControl}),(0,a.jsx)("progress",{className:"block progress progress-secondary mb-4",value:v(r.WD.VentilationThermalControl),max:"100"})]})})})]}),(0,a.jsxs)("div",{className:"mx-auto w-full aspect-video flex mb-2",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(l.default,{href:"/tasks/".concat(A(r.WD.CentralFlightSystem)),children:(0,a.jsx)("a",{children:(0,a.jsx)("div",{className:"h-full w-full bg-cfs-highlight lg:bg-cfs-base hover:bg-cfs-highlight bg-contain"})})})}),(0,a.jsxs)("div",{className:"w-full flex flex-col",children:[(0,a.jsx)("div",{className:"h-full",children:(0,a.jsx)(l.default,{href:"/tasks/".concat(A(r.WD.VentilationThermalControl)),children:(0,a.jsx)("a",{children:(0,a.jsx)("div",{className:"h-full w-full",onMouseEnter:function(){return N(!0)},onMouseLeave:function(){return N(!1)},children:w?(0,a.jsx)(o.Ee,{src:m,layout:"responsive",className:"object-contain"}):(0,a.jsx)(o.Ee,{src:h,layout:"responsive",className:"object-contain"})})})})}),(0,a.jsxs)("div",{className:"relative h-full",children:[(0,a.jsx)(o.Ee,{src:x,layout:"responsive",className:"object-contain"}),(0,a.jsxs)("div",{className:"absolute top-0 w-full",children:[(0,a.jsx)("div",{className:"opacity-80 text-xs sm:text-base mt-3",children:"Gesamtpunkte"}),(0,a.jsx)("div",{className:"font-bold text-4xl sm:text-6xl",children:b()})]})]}),(0,a.jsx)("div",{className:"h-full",children:(0,a.jsx)(l.default,{href:"/tasks/".concat(A(r.WD.CrewHealthHypersleep)),children:(0,a.jsx)("a",{children:(0,a.jsx)("div",{className:"h-full w-full bg-chh-highlight lg:bg-chh-base hover:bg-chh-highlight bg-contain"})})})})]}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(l.default,{href:"/tasks/".concat(A(r.WD.SpaceRadiationProtection)),children:(0,a.jsx)("a",{children:(0,a.jsx)("div",{className:"h-full w-full bg-srp-highlight lg:bg-srp-base hover:bg-srp-highlight bg-contain"})})})})]}),(0,a.jsxs)("div",{className:"flex w-full gap-2 justify-center items-start",children:[(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsx)(l.default,{href:"/tasks/".concat(A(r.WD.CrewHealthHypersleep)),children:(0,a.jsxs)("a",{className:"btn btn-block btn-link justify-start h-fit",children:[(0,a.jsx)("progress",{className:"block progress progress-success mt-4 mb-1",value:v(r.WD.CrewHealthHypersleep),max:"100"}),(0,a.jsx)("div",{className:"",children:r.WD.CrewHealthHypersleep})]})})}),(0,a.jsx)("div",{className:"w-1/2",children:(0,a.jsx)(l.default,{href:"/tasks/".concat(A(r.WD.SpaceRadiationProtection)),children:(0,a.jsxs)("a",{className:"btn btn-block btn-link justify-end h-fit",children:[(0,a.jsx)("progress",{className:"block progress progress-primary mt-4 mb-1",value:v(r.WD.SpaceRadiationProtection),max:"100"}),(0,a.jsx)("div",{className:"",children:r.WD.SpaceRadiationProtection})]})})})]})]}),(0,a.jsxs)("div",{className:"bg-neutral/70 rounded-box shadow-xl mb-12 text-neutral-content pt-8 pb-3 px-8",children:[(0,a.jsxs)("p",{className:"font-mono",children:[(0,a.jsx)("span",{className:"font-bold",children:"\u201eIm Jahr 2094."})," Du befindest dich auf einer interplanetaren Reise, und warst bis gerade eben im Hyperschlaf. Die AI (SOLID) des Schiffes 'SOC Asklepios' hat dich geweckt. Du musst ihr helfen, die Boardsoftware zu pr\xfcfen und zu refaktorisieren, um sicher auf dem Planet 'Yagni' landen zu k\xf6nnen.",(0,a.jsx)("span",{className:"font-bold",children:"\u201c"})]}),(0,a.jsx)(l.default,{href:"/info",children:(0,a.jsxs)("a",{className:"btn btn-link",children:[(0,a.jsx)(u,{className:"h-6 w-6 mr-1 text-info"}),"Story, Mission, Refactorings"]})})]}),(0,a.jsx)("h2",{className:"font-mono text-2xl font-bold tracking-wider underline text-secondary decoration-accent mb-4",children:"Kritische Codestellen"}),(0,a.jsx)("div",{className:"w-max mx-auto mb-24",children:t.map((function(e){return(0,a.jsx)(l.default,{href:"/tasks/".concat(e.uuid),children:(0,a.jsx)("a",{className:"btn btn-link block w-fit",children:(0,a.jsxs)("div",{className:"flex flex-row items-center",children:[(0,a.jsx)(o.qD,{taskProgress:g(e.uuid),className:"h-8 w-8 mr-1"}),e.name]},e.uuid)})},e.uuid)}))}),(0,a.jsx)("div",{className:"divider max-w-lg mx-auto mb-2"}),(0,a.jsxs)("button",{className:"btn btn-sm btn-outline btn-warning",onClick:function(){return p()},children:[(0,a.jsx)(f,{className:"h-5 w-5 mr-1"}),"Fortschritt zur\xfccksetzen"]})]})}},9008:function(e,t,s){e.exports=s(3121)},1664:function(e,t,s){e.exports=s(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);