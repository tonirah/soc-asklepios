"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[330],{6330:function(e,n,t){t.r(n),t.d(n,{TaskProgress:function(){return d},ProgressContext:function(){return p},default:function(){return b}});var r=t(5893),o=t(7294),a=t(6092),i=t(5236),u=t(419),s=t(1669),l=t(4201);function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(s){u=!0,o=s}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d,h=(0,s.Nb)("soc-progress"),v=(0,s.iz)("1"),g=(0,s.iz)("4"),m=(0,s.iz)("10");!function(e){e.Visited="Visited",e.Solved="Solved"}(d||(d={}));var p=(0,o.createContext)({}),y=function(e){switch(e){case d.Visited:return v;case d.Solved:return g;default:return 0}},S=function(e){var n=0;return e.forEach((function(e){n+=y(e.taskProgress)})),n};function b(e){var n=e.children,t=f((0,a.V)(h,[]),3),s=t[0],c=t[1],v=t[2],b=(0,o.useCallback)((function(){c([]),v()}),[c,v]),C=(0,o.useCallback)((function(){return S(s)}),[s]),O=(0,o.useCallback)((function(e){var n=s.find((function(n){return n.uuid===e}));return null===n||void 0===n?void 0:n.taskProgress}),[s]),L=(0,o.useCallback)((function(e){var n=O(e);return y(n)}),[O]),k=(0,o.useCallback)((function(e){return function(e,n){var t=l.s3.filter((function(n){return n.category===e}));if(0===t.length)throw new Error('No tasks found for category "'.concat(e,'"'));var r=n.filter((function(e){return t.some((function(n){return n.uuid===e.uuid}))})),o=t.length*g,a=S(r);return Math.round(100*a/o)}(e,s)}),[s]),w=(0,o.useCallback)((function(e,n){c((function(t){var r=t.filter((function(n){return(null===n||void 0===n?void 0:n.uuid)!==e}));return r.push({uuid:e,taskProgress:n}),r}))}),[c]);return(0,r.jsx)(p.Provider,{value:{resetProgress:b,getTotalScore:C,getTaskProgress:O,getTaskPoints:L,getCategoryProgressPercentage:k,setTaskProgress:w,useVisitedTimer:function(e,n){var t=(0,o.useRef)(n);(0,o.useEffect)((function(){t.current=n}),[n]);var r=(0,o.useRef)();(0,i.H)((function(){r.current=setTimeout((function(){void 0===t.current(e)&&w(e,d.Visited)}),1e3*m)})),(0,u.b)((function(){r.current&&clearTimeout(r.current)}))}},children:n})}},4201:function(e,n,t){var r,o,a,i,u;t.d(n,{WD:function(){return r},oT:function(){return i},Gb:function(){return a},s3:function(){return s}}),function(e){e.CentralFlightSystem="Central Flight System",e.VentilationThermalControl="Cabin Ventilation and Thermal Control"}(r||(r={})),function(e){e[e.Simple=0]="Simple",e[e.Medium=1]="Medium",e[e.Hard=2]="Hard"}(o||(o={})),function(e){e.ExtractClass="Klasse extrahieren (Extract Class)",e.MoveMethod="Methode verlagern (Move Method)",e.ExtractMethod="Methode extrahieren (Extract Method)",e.GuardClauses="Verschachtelte Bedingungen durch W\xe4chter ersetzen (Replace Nested Conditional with Guard Clauses)"}(a||(a={})),function(e){e.Comment="Kommentar (Comment)",e.LongMethod="Lange Methode (Long Method)",e.LongParameterList="Lange Parameterliste (Long Parameter List)"}(i||(i={})),function(e){e.Refactoring="Refactoring",e.CodeSmell="Code Smell"}(u||(u={}));var s=[{uuid:"031b215a-dc73-41e1-bcfb-d796a173f75e",name:"Velocity increase control",difficulty:o.Simple,category:r.CentralFlightSystem,dirtyCode:"class PropulsionController {\n  private Velocity currentSpeed;\n  ...\n\n  private void increaseMainThrust(Delta<Thrust> thrustIncrease) {\n    ...\n    this.mainRocket.increaseThrust(thrustIncrease);\n  }\n\n  public void setCurrentSpeed(Velocity currentSpeed) {\n    this.currentSpeed = currentSpeed;\n  }\n\n  public void increaseVelocity(Delta<Velocity> deltaV) throws PropulsionError {\n    Delta<Thrust> thrustIncrease = this.calculateThrustIncrease(deltaV);\n\n    // prepare main rocket engine\n    if (!this.mainRocket.isAvailable()) {\n      throw new PropulsionError(PropulsionError.messages.MAIN_UNAVAILABLE);\n    }\n    this.mainRocket.prepareForThrustIncrease();\n\n    this.increaseMainThrust(thrustIncrease);\n  }\n}",cleanCode:"class PropulsionController {\n  private Velocity currentSpeed;\n  ...\n\n  private void increaseMainThrust(Delta<Thrust> thrustIncrease) {\n    ...\n    this.mainRocket.increaseThrust(thrustIncrease);\n  }\n\n  private void prepareMainRocket() throws PropulsionError {\n    if (!this.mainRocket.isAvailable()) {\n      throw new PropulsionError(PropulsionError.messages.MAIN_UNAVAILABLE);\n    }\n    this.mainRocket.prepareForDeltaThrust();\n  }\n\n  public void setCurrentSpeed(Velocity currentSpeed) {\n    this.currentSpeed = currentSpeed;\n  }\n\n  public void increaseVelocity(Delta<Velocity> deltaV) throws PropulsionError {\n    Delta<Thrust> thrustIncrease = this.calculateThrustIncrease(deltaV);\n    this.prepareMainRocket();\n    this.increaseMainThrust(thrustIncrease);\n  }\n}",cleanCodeHighlightedLines:"10-15,23",comment:"Der durch den Kommentar beschriebene Code kann in eine Methode mit \xe4hnlichem Namen ausgelagert werden.\n\nDann ist auch das Abstraktionsniveau innerhalb von `increaseVelocity()` konsistent.\n\nDetails: [Code Smells](/info/#code-smells), [Refactorings](/info/#refactorings).",inputs:[{type:u.CodeSmell,options:[{value:i.LongMethod},{value:i.Comment,isValid:!0}],lines:"17-21"},{type:u.Refactoring,options:[{value:a.ExtractClass},{value:a.MoveMethod},{value:a.ExtractMethod,isValid:!0}],lines:"17-21"}]},{uuid:"bf8bb3be-bd1a-4380-8d5b-87270cb58f7c",name:"O2 Level Status",difficulty:o.Simple,category:r.VentilationThermalControl,dirtyCode:"...\n  public O2LevelStatus getO2LevelStatus(OxygenSensorData  levelOfOxygen) {\n    O2LevelStatus status;\n    if (levelOfOxygen < this.lowerLimit) {\n      status = O2LevelStatus.TOO_LOW;\n    } else if (levelOfOxygen > this.upperLimit) {\n      status = O2LevelStatus.TOO_HIGH;\n    } else {\n      status = O2LevelStatus.RIGHT_AMOUNT;\n    }\n    return status;\n  }\n...",cleanCode:"...\n  public O2LevelStatus getO2LevelStatus(OxygenSensorData  levelOfOxygen) {\n    if (levelOfOxygen < this.lowerLimit) {\n      return O2LevelStatus.TOO_LOW;\n    }\n    if (levelOfOxygen > this.upperLimit) {\n      return O2LevelStatus.TOO_HIGH;\n    }\n    return O2LevelStatus.RIGHT_AMOUNT;\n  }\n...",cleanCodeHighlightedLines:"3-9",comment:"Viel besser lesbar (testbar/wartbar/erweiterbar), und in diesem Fall auch k\xfcrzer.\n\nDetails: [Refactorings](/info/#refactorings).",inputs:[{type:u.Refactoring,options:[{value:a.ExtractClass},{value:a.MoveMethod},{value:a.ExtractMethod},{value:a.GuardClauses,isValid:!0}],lines:"4-10"}]}]},5236:function(e,n,t){t.d(n,{H:function(){return o}});var r=t(7294);function o(e){(0,r.useEffect)((function(){"function"===typeof e&&e()}),[])}},6092:function(e,n,t){t.d(n,{V:function(){return a}});var r=t(7294);function o(e,n){var t=function(e){var n;if("undefined"===typeof localStorage)return null;var t=null!==(n=localStorage.getItem(e))&&void 0!==n?n:"null";try{return JSON.parse(t)}catch(r){console.error(r)}return t}(e);return null===t?n:t}function a(e,n){var t=(0,r.useState)((function(){return o(e,n)})),a=t[0],i=t[1],u=(0,r.useRef)(!1),s=(0,r.useRef)(!1),l=(0,r.useMemo)((function(){return"rooks-".concat(e,"-localstorage-update")}),[e]);(0,r.useEffect)((function(){u.current&&s.current||function(e,n){"undefined"===typeof localStorage||localStorage.setItem(e,JSON.stringify(n))}(e,a)}),[e,a]);var c=(0,r.useCallback)((function(n){var t;if(n.storageArea===localStorage&&n.key===e)try{u.current=!0;var r=JSON.parse(null!==(t=n.newValue)&&void 0!==t?t:"null");a!==r&&i(r)}catch(o){console.log(o)}}),[e,a]);(0,r.useEffect)((function(){return"undefined"!==typeof window?(window.addEventListener("storage",c),function(){window.removeEventListener("storage",c)}):(console.warn("useLocalstorageState: window is undefined."),function(){})}),[c]);var f=(0,r.useCallback)((function(e){try{s.current=!0;var n=e.detail.newValue;a!==n&&i(n)}catch(t){console.log(t)}}),[a]);(0,r.useEffect)((function(){return"undefined"!==typeof document?(document.addEventListener(l,f),function(){document.removeEventListener(l,f)}):(console.warn("[useLocalstorageState] document is undefined."),function(){})}),[l,f]);var d=(0,r.useCallback)((function(e){if("undefined"!==typeof document){var n=new CustomEvent(l,{detail:{newValue:e}});document.dispatchEvent(n)}else console.warn("[useLocalstorageState] document is undefined.")}),[l]),h=(0,r.useCallback)((function(e){u.current=!1,s.current=!1,i(e),d(e)}),[d]),v=(0,r.useCallback)((function(){localStorage.removeItem(e)}),[e]);return[a,h,v]}},419:function(e,n,t){t.d(n,{b:function(){return o}});var r=t(7294);function o(e){(0,r.useEffect)((function(){return e}),[])}}}]);