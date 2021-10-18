/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(){return t=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},t.apply(this,arguments)};function e(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function u(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((i=i.apply(t,e||[])).next())}))}function n(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var o=function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function a(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function u(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((i=i.apply(t,e||[])).next())}))}function u(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function s(t,e){void 0===e&&(e=!1);var n=function(){var t=new Int8Array(1);window.crypto.getRandomValues(t);var e=new Uint8Array(Math.max(16,Math.abs(t[0])));return window.crypto.getRandomValues(e),e.join("")}();return Object.defineProperty(window,n,{value:function(i){return e&&Reflect.deleteProperty(window,n),null==t?void 0:t(i)},writable:!1,configurable:!0}),n}function c(t,e){return void 0===e&&(e={}),a(this,void 0,void 0,(function(){return u(this,(function(n){return[2,new Promise((function(n,i){var r=s((function(t){n(t),Reflect.deleteProperty(window,a)}),!0),a=s((function(t){i(t),Reflect.deleteProperty(window,r)}),!0);window.rpc.notify(t,o({__invokeKey:__TAURI_INVOKE_KEY__,callback:r,error:a},e))}))]}))}))}function l(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){return[2,c("tauri",t)]}))}))}function d(t,e,n){return a(this,void 0,void 0,(function(){return u(this,(function(i){switch(i.label){case 0:return[4,l({__tauriModule:"Event",message:{cmd:"emit",event:t,windowLabel:e,payload:n}})];case 1:return i.sent(),[2]}}))}))}function h(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){return[2,l({__tauriModule:"Event",message:{cmd:"unlisten",eventId:t}})]}))}))}function f(t,e){return a(this,void 0,void 0,(function(){var n=this;return u(this,(function(i){return[2,l({__tauriModule:"Event",message:{cmd:"listen",event:t,handler:s(e)}}).then((function(t){return function(){return a(n,void 0,void 0,(function(){return u(this,(function(e){return[2,h(t)]}))}))}}))]}))}))}function p(t,e){return a(this,void 0,void 0,(function(){return u(this,(function(n){return[2,f(t,(function(t){e(t),h(t.id).catch((function(){}))}))]}))}))}Object.freeze({__proto__:null,transformCallback:s,invoke:c,convertFileSrc:function(t){return navigator.userAgent.includes("Windows")?"https://asset.localhost/"+t:"asset://"+t}}),Object.freeze({__proto__:null,listen:f,once:p,emit:function(t,e){return a(this,void 0,void 0,(function(){return u(this,(function(n){return[2,d(t,void 0,e)]}))}))}});var m,y=function(t,e){this.type="Logical",this.width=t,this.height=e},v=function(){function t(t,e){this.type="Physical",this.width=t,this.height=e}return t.prototype.toLogical=function(t){return new y(this.width/t,this.height/t)},t}(),w=function(t,e){this.type="Logical",this.x=t,this.y=e},b=function(){function t(t,e){this.type="Physical",this.x=t,this.y=e}return t.prototype.toLogical=function(t){return new w(this.x/t,this.y/t)},t}();function g(){return window.__TAURI__.__windows.map((function(t){return new z(t.label,{skip:!0})}))}!function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"}(m||(m={}));var _=["tauri://created","tauri://error"],M=function(){function t(t){this.label=t,this.listeners=Object.create(null)}return t.prototype.listen=function(t,e){return a(this,void 0,void 0,(function(){var n=this;return u(this,(function(i){return this._handleTauriEvent(t,e)?[2,Promise.resolve((function(){var i=n.listeners[t];i.splice(i.indexOf(e),1)}))]:[2,f(t,e)]}))}))},t.prototype.once=function(t,e){return a(this,void 0,void 0,(function(){var n=this;return u(this,(function(i){return this._handleTauriEvent(t,e)?[2,Promise.resolve((function(){var i=n.listeners[t];i.splice(i.indexOf(e),1)}))]:[2,p(t,e)]}))}))},t.prototype.emit=function(t,e){return a(this,void 0,void 0,(function(){var n,i;return u(this,(function(r){if(_.includes(t)){for(n=0,i=this.listeners[t]||[];n<i.length;n++)(0,i[n])({event:t,id:-1,payload:e});return[2,Promise.resolve()]}return[2,d(t,this.label,e)]}))}))},t.prototype._handleTauriEvent=function(t,e){return!!_.includes(t)&&(t in this.listeners?this.listeners[t].push(e):this.listeners[t]=[e],!0)},t}(),W=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.scaleFactor=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})]}))}))},e.prototype.innerPosition=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}})]}))}))},e.prototype.outerPosition=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}})]}))}))},e.prototype.innerSize=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}})]}))}))},e.prototype.outerSize=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}})]}))}))},e.prototype.isFullscreen=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})]}))}))},e.prototype.isMaximized=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})]}))}))},e.prototype.isDecorated=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})]}))}))},e.prototype.isResizable=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})]}))}))},e.prototype.isVisible=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})]}))}))},e.prototype.center=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})]}))}))},e.prototype.requestUserAttention=function(t){return a(this,void 0,void 0,(function(){var e;return u(this,(function(n){return e=null,t&&(e=t===m.Critical?{type:"Critical"}:{type:"Informational"}),[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:e}}}})]}))}))},e.prototype.setResizable=function(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:t}}}})]}))}))},e.prototype.setTitle=function(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:t}}}})]}))}))},e.prototype.maximize=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})]}))}))},e.prototype.unmaximize=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})]}))}))},e.prototype.toggleMaximize=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})]}))}))},e.prototype.minimize=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})]}))}))},e.prototype.unminimize=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})]}))}))},e.prototype.show=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})]}))}))},e.prototype.hide=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})]}))}))},e.prototype.close=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})]}))}))},e.prototype.setDecorations=function(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:t}}}})]}))}))},e.prototype.setAlwaysOnTop=function(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:t}}}})]}))}))},e.prototype.setSize=function(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:t.type,data:{width:t.width,height:t.height}}}}}})]}))}))},e.prototype.setMinSize=function(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},e.prototype.setMaxSize=function(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},e.prototype.setPosition=function(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:t.type,data:{x:t.x,y:t.y}}}}}})]}))}))},e.prototype.setFullscreen=function(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:t}}}})]}))}))},e.prototype.setFocus=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})]}))}))},e.prototype.setIcon=function(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:t}}}}})]}))}))},e.prototype.setSkipTaskbar=function(t){return a(this,void 0,void 0,(function(){return u(this,(function(e){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:t}}}})]}))}))},e.prototype.startDragging=function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})]}))}))},e}(M),z=function(t){function e(e,n){void 0===n&&(n={});var i=t.call(this,e)||this;return(null==n?void 0:n.skip)||l({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:o({label:e},n)}}}).then((function(){return a(i,void 0,void 0,(function(){return u(this,(function(t){return[2,this.emit("tauri://created")]}))}))})).catch((function(t){return a(i,void 0,void 0,(function(){return u(this,(function(e){return[2,this.emit("tauri://error",t)]}))}))})),i}return r(e,t),e.getByLabel=function(t){return g().some((function(e){return e.label===t}))?new e(t,{skip:!0}):null},e}(W),P=new z(null,{skip:!0});function x(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,c("plugin:fs-watch|unwatch",{id:t})];case 1:return e.sent(),[2]}}))}))}function S(i,r,o){return e(this,void 0,void 0,(function(){var a,u,s,l,d=this;return n(this,(function(h){switch(h.label){case 0:return a=t({recursive:!1,delayMs:2e3},r),u="string"==typeof i?[i]:i,[4,c("plugin:fs-watch|watch",{id:s=window.crypto.getRandomValues(new Uint32Array(1))[0],paths:u,options:a})];case 1:return h.sent(),[4,P.listen("watcher://debounced-event/"+s,(function(t){o(t.payload)}))];case 2:return l=h.sent(),[2,function(){return e(d,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,x(s)];case 1:return t.sent(),[4,l()];case 2:return t.sent(),[2]}}))}))}]}}))}))}function k(i,r,o){return e(this,void 0,void 0,(function(){var a,u,s,l,d=this;return n(this,(function(h){switch(h.label){case 0:return a=t(t({recursive:!1},r),{delayMs:null}),u="string"==typeof i?[i]:i,[4,c("plugin:fs-watch|watch",{id:s=window.crypto.getRandomValues(new Uint32Array(1))[0],paths:u,options:a})];case 1:return h.sent(),[4,P.listen("watcher://raw-event/"+s,(function(t){o(t.payload)}))];case 2:return l=h.sent(),[2,function(){return e(d,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return[4,x(s)];case 1:return t.sent(),[4,l()];case 2:return t.sent(),[2]}}))}))}]}}))}))}Object.freeze({__proto__:null,WebviewWindow:z,WebviewWindowHandle:M,WindowManager:W,getCurrent:function(){return new z(window.__TAURI__.__currentWindow.label,{skip:!0})},getAll:g,appWindow:P,LogicalSize:y,PhysicalSize:v,LogicalPosition:w,PhysicalPosition:b,get UserAttentionType(){return m},currentMonitor:function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}})]}))}))},primaryMonitor:function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}})]}))}))},availableMonitors:function(){return a(this,void 0,void 0,(function(){return u(this,(function(t){return[2,l({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}})]}))}))}});export{S as watch,k as watchImmediate};