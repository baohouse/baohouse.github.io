(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{893:function(e,t,n){"use strict";n.r(t);n(659);var o=n(71),a=(n(726),n(741)),r=(n(728),n(740)),c=(n(725),n(739)),i=(n(660),n(687)),l=n(863),u=n.n(l),p=n(650),f=n(742),s=n(0),h=n.n(s),d=n(864),y=n.n(d),m=n(39),b=n(865),g=n.n(b),v=function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function c(e){try{l(o.next(e))}catch(e){r(e)}}function i(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}l((o=o.apply(e,t||[])).next())}))},w=function(e,t){var n,o,a,r,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function i(r){return function(i){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(a=2&r[0]?o.return:r[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;switch(o=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){c.label=r[1];break}if(6===r[0]&&c.label<a[1]){c.label=a[1],a=r;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(r);break}a[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(e){r=[6,e],o=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,i])}}},x=function(){function e(e,t){this.axiosInstance=g.a.create({baseURL:t,headers:{"Ocp-Apim-Subscription-Key":e}})}return e.prototype.detectFace=function(e){return v(this,void 0,void 0,(function(){var t,n;return w(this,(function(o){switch(o.label){case 0:return[4,fetch(e)];case 1:return[4,o.sent().blob()];case 2:return t=o.sent(),[4,this.axiosInstance.post("/detect",t,{headers:{"Content-Type":"application/octet-stream"}})];case 3:return n=o.sent(),[2,Promise.resolve(n.data[0])]}}))}))},e.prototype.compareFaces=function(e,t){return v(this,void 0,void 0,(function(){var n;return w(this,(function(o){switch(o.label){case 0:return[4,this.axiosInstance.post("/verify",{faceId1:e,faceId2:t})];case 1:return n=o.sent(),[2,Promise.resolve(n.data)]}}))}))},e}(),A=n(188);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E=function(){return(E=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},S=function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":C(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},k=function(e,t,n,o){return new(n||(n=Promise))((function(a,r){function c(e){try{l(o.next(e))}catch(e){r(e)}}function i(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}l((o=o.apply(e,t||[])).next())}))},I=function(e,t){var n,o,a,r,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function i(r){return function(i){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(a=2&r[0]?o.return:r[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;switch(o=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){c.label=r[1];break}if(6===r[0]&&c.label<a[1]){c.label=a[1],a=r;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(r);break}a[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(e,c)}catch(e){r=[6,e],o=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,i])}}};Object(p.f)({enforceActions:"observed"});var O=new x(A.microsoftFaceApiKey,A.microsoftFaceApiUrl),R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",j=function(){function e(){this.isLoading=!1,this.photo1={data:R,faceId:""},this.photo2={data:R,faceId:""}}return e.prototype.getFaceMatchConfidence=function(){return k(this,void 0,void 0,(function(){var e,t,n,o,a=this;return I(this,(function(r){switch(r.label){case 0:if(this.photo1.faceId&&this.photo2.faceId)return[2];this.isLoading=!0,r.label=1;case 1:return r.trys.push([1,6,,7]),[4,Promise.all([this.getFaceDetectionDetails(this.photo1),this.getFaceDetectionDetails(this.photo2)])];case 2:return e=r.sent(),Object(p.m)((function(){a.photo1=E(E({},a.photo1),e[0]),a.photo2=E(E({},a.photo2),e[1])})),t=e[0].faceId,n=e[1].faceId,t&&n?[4,O.compareFaces(t,n)]:[3,4];case 3:return o=r.sent(),Object(p.m)((function(){a.isLoading=!1,a.matchConfidence=o.confidence})),[3,5];case 4:Object(p.m)((function(){return a.isLoading=!1})),r.label=5;case 5:return[3,7];case 6:return r.sent(),Object(p.m)((function(){return a.isLoading=!1})),[3,7];case 7:return[2]}}))}))},e.prototype.getFaceDetectionDetails=function(e){return k(this,void 0,void 0,(function(){var t;return I(this,(function(n){switch(n.label){case 0:return e.data===R||e.faceId?[3,2]:[4,O.detectFace(e.data)];case 1:return t=n.sent(),[2,E(E({},e),t)];case 2:return[2,e]}}))}))},S([p.l],e.prototype,"isLoading",void 0),S([p.l],e.prototype,"matchConfidence",void 0),S([p.l],e.prototype,"photo1",void 0),S([p.l],e.prototype,"photo2",void 0),S([p.d],e.prototype,"getFaceMatchConfidence",null),e}();function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var P,N,D,L,_,M,U,B,K=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},T=(P=function(e,t){return(P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}P(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),z=function(e,t,n,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":F(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(r<3?a(c):r>3?a(t,n,c):a(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},G=m.b.img.withConfig({displayName:"CapturedImage",componentId:"sc-1h5cvpn-0"})(N||(N=K(["\n  width: 480px;\n  height: 360px;\n  background-color: lightgray;\n  margin-bottom: 1px;\n  margin-left: 1px;\n"],["\n  width: 480px;\n  height: 360px;\n  background-color: lightgray;\n  margin-bottom: 1px;\n  margin-left: 1px;\n"]))),V=m.b.div.withConfig({displayName:"CaptureButtonContainer",componentId:"sc-1h5cvpn-1"})(D||(D=K(["\n  position: absolute;\n  top: 1px;\n  left: 2px;\n"],["\n  position: absolute;\n  top: 1px;\n  left: 2px;\n"]))),Y=m.b.div.withConfig({displayName:"FaceRectangle",componentId:"sc-1h5cvpn-2"})(L||(L=K(["\n  position: absolute;\n  border: 2px solid blue;\n"],["\n  position: absolute;\n  border: 2px solid blue;\n"]))),J=m.b.div.withConfig({displayName:"MatchNumber",componentId:"sc-1h5cvpn-3"})(_||(_=K(["\n  font-size: 72px;\n  line-height: 72px;\n  display: block;\n"],["\n  font-size: 72px;\n  line-height: 72px;\n  display: block;\n"]))),Q=m.b.div.withConfig({displayName:"MatchNumberLabel",componentId:"sc-1h5cvpn-4"})(M||(M=K(["\n  margin-bottom: 1em;\n"],["\n  margin-bottom: 1em;\n"]))),H=m.b.div.withConfig({displayName:"SpinnerContainer",componentId:"sc-1h5cvpn-5"})(U||(U=K(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 480px;\n  height: 360px;\n  margin: 0 0 0 auto;\n  background-color: white;\n  text-align: center;\n"],["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 480px;\n  height: 360px;\n  margin: 0 0 0 auto;\n  background-color: white;\n  text-align: center;\n"]))),W=m.b.div.withConfig({displayName:"StyledWebcam",componentId:"sc-1h5cvpn-6"})(B||(B=K(["\n  video {\n    display: block;\n    background-color: lightgray;\n    margin: 0 0 1px auto;\n  }\n"],["\n  video {\n    display: block;\n    background-color: lightgray;\n    margin: 0 0 1px auto;\n  }\n"]))),q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.faceCognitionStore=new j,t.capture=function(e){return function(){var n=t.webcam.getScreenshot();Object(p.m)((function(){1===e?t.faceCognitionStore.photo1={data:n,faceId:""}:t.faceCognitionStore.photo2={data:n,faceId:""}}))}},t.getMatchConfidence=function(){t.props.faceCognitionStore.getFaceMatchConfidence()},t}return T(t,e),t.prototype.render=function(){var e=this,t=this.faceCognitionStore,n=t.isLoading,l=t.matchConfidence,u=t.photo1,p=t.photo2,f=n?h.a.createElement(i.a,{size:"large"}):h.a.createElement("div",null,h.a.createElement(J,null,this.formatPercentage(l)),h.a.createElement(Q,null,"match confidence"),h.a.createElement("div",null,h.a.createElement(c.a,{onClick:this.getMatchConfidence},"Update")));return h.a.createElement(h.a.Fragment,null,h.a.createElement(r.a,null,h.a.createElement(a.a,{span:12},h.a.createElement(W,null,h.a.createElement(y.a,{audio:!1,height:360,ref:function(t){return e.webcam=t},screenshotFormat:"image/png",width:480}))),h.a.createElement(a.a,{span:12},u.faceRectangle&&h.a.createElement(Y,{style:{height:u.faceRectangle.height,left:u.faceRectangle.left,top:u.faceRectangle.top,width:u.faceRectangle.width}}),h.a.createElement(G,{src:u.data}),h.a.createElement(V,null,h.a.createElement(c.a,{onClick:this.capture(1)},h.a.createElement(o.a,{type:"pushpin"}))))),h.a.createElement(r.a,null,h.a.createElement(a.a,{span:12},h.a.createElement(H,null,f)),h.a.createElement(a.a,{span:12},p.faceRectangle&&h.a.createElement(Y,{style:{height:p.faceRectangle.height,left:p.faceRectangle.left,top:p.faceRectangle.top,width:p.faceRectangle.width}}),h.a.createElement(G,{src:p.data}),h.a.createElement(V,null,h.a.createElement(c.a,{onClick:this.capture(2)},h.a.createElement(o.a,{type:"pushpin"}))))))},t.prototype.formatPercentage=function(e){return u()(e)?(100*e).toFixed(0)+"%":"TBD"},z([p.d],t.prototype,"capture",void 0),t=z([f.a],t)}(h.a.Component);t.default=q}}]);