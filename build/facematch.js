(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{785:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(801);var o=h(n(312));n(799);var a=h(n(797));n(794);var r=h(n(793));n(804);var i=h(n(802));n(792);var u=h(n(791)),c=h(n(813)),s=n(19),l=n(313),d=h(n(1)),f=h(n(812)),p=h(n(145));function h(e){return e&&e.__esModule?e:{default:e}}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var g,v,y,b,w,x,M,k,E=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},S=(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),U=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":m(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},O=p.default.img(v||(v=E(["\n  width: 480px;\n  height: 360px;\n  background-color: lightgray;\n  margin-bottom: 1px;\n  margin-left: 1px;\n"],["\n  width: 480px;\n  height: 360px;\n  background-color: lightgray;\n  margin-bottom: 1px;\n  margin-left: 1px;\n"]))),_=p.default.div(y||(y=E(["\n  position: absolute;\n  top: 1px;\n  left: 2px;\n"],["\n  position: absolute;\n  top: 1px;\n  left: 2px;\n"]))),j=p.default.div(b||(b=E(["\n  position: absolute;\n  border: 2px solid blue;\n"],["\n  position: absolute;\n  border: 2px solid blue;\n"]))),R=p.default.div(w||(w=E(["\n  font-size: 72px;\n  line-height: 72px;\n  display: block;\n"],["\n  font-size: 72px;\n  line-height: 72px;\n  display: block;\n"]))),P=p.default.div(x||(x=E(["\n  margin-bottom: 1em;\n"],["\n  margin-bottom: 1em;\n"]))),C=p.default.div(M||(M=E(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 480px;\n  height: 360px;\n  margin: 0 0 0 auto;\n  background-color: white;\n  text-align: center;\n"],["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 480px;\n  height: 360px;\n  margin: 0 0 0 auto;\n  background-color: white;\n  text-align: center;\n"]))),I=p.default.div(k||(k=E(["\n  video {\n    display: block;\n    background-color: lightgray;\n    margin: 0 0 1px auto;\n  }\n"],["\n  video {\n    display: block;\n    background-color: lightgray;\n    margin: 0 0 1px auto;\n  }\n"]))),T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.capture=function(e){return function(){var n=t.webcam.getScreenshot();(0,s.runInAction)(function(){1===e?t.props.faceCognitionStore.photo1={data:n,faceId:""}:t.props.faceCognitionStore.photo2={data:n,faceId:""}})}},t.getMatchConfidence=function(){t.props.faceCognitionStore.getFaceMatchConfidence()},t}return S(t,e),t.prototype.render=function(){var e=this,t=this.props.faceCognitionStore,n=t.isLoading,c=t.matchConfidence,s=t.photo1,l=t.photo2,p=n?d.default.createElement(u.default,{size:"large"}):d.default.createElement("div",null,d.default.createElement(R,null,this.formatPercentage(c)),d.default.createElement(P,null,"match confidence"),d.default.createElement("div",null,d.default.createElement(i.default,{onClick:this.getMatchConfidence},"Update")));return d.default.createElement(d.default.Fragment,null,d.default.createElement(r.default,null,d.default.createElement(a.default,{span:12},d.default.createElement(I,null,d.default.createElement(f.default,{audio:!1,height:360,ref:function(t){return e.webcam=t},screenshotFormat:"image/png",width:480}))),d.default.createElement(a.default,{span:12},s.faceRectangle&&d.default.createElement(j,{style:{height:s.faceRectangle.height,left:s.faceRectangle.left,top:s.faceRectangle.top,width:s.faceRectangle.width}}),d.default.createElement(O,{src:s.data}),d.default.createElement(_,null,d.default.createElement(i.default,{onClick:this.capture(1)},d.default.createElement(o.default,{type:"pushpin"}))))),d.default.createElement(r.default,null,d.default.createElement(a.default,{span:12},d.default.createElement(C,null,p)),d.default.createElement(a.default,{span:12},l.faceRectangle&&d.default.createElement(j,{style:{height:l.faceRectangle.height,left:l.faceRectangle.left,top:l.faceRectangle.top,width:l.faceRectangle.width}}),d.default.createElement(O,{src:l.data}),d.default.createElement(_,null,d.default.createElement(i.default,{onClick:this.capture(2)},d.default.createElement(o.default,{type:"pushpin"}))))))},t.prototype.formatPercentage=function(e){return(0,c.default)(e)?(100*e).toFixed(0)+"%":"TBD"},U([s.action],t.prototype,"capture",void 0),t=U([l.observer],t)}(d.default.Component);t.default=T},812:function(e,t,n){var o;o=function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(1),r=u(a),i=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={hasUserMedia:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){(navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia)&&(t.mountedInstances.push(this),this.state.hasUserMedia||t.userMediaRequested||this.requestUserMedia())}},{key:"componentWillUpdate",value:function(e){e.videoSource===this.props.videoSource&&e.audioSource===this.props.audioSource||this.requestUserMedia()}},{key:"componentWillUnmount",value:function(){var e=t.mountedInstances.indexOf(this);t.mountedInstances.splice(e,1),0===t.mountedInstances.length&&this.state.hasUserMedia&&(this.stream.stop?this.stream.stop():(this.stream.getVideoTracks&&this.stream.getVideoTracks().map(function(e){return e.stop()}),this.stream.getAudioTracks&&this.stream.getAudioTracks().map(function(e){return e.stop()})),t.userMediaRequested=!1,window.URL.revokeObjectURL(this.state.src))}},{key:"getScreenshot",value:function(){if(!this.state.hasUserMedia)return null;var e=this.getCanvas();return e&&e.toDataURL(this.props.screenshotFormat)}},{key:"getCanvas",value:function(){if(!this.state.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var e=document.createElement("canvas"),t=this.video.videoWidth/this.video.videoHeight;e.width=this.video.clientWidth,e.height=this.video.clientWidth/t,this.canvas=e,this.ctx=e.getContext("2d")}var n=this.ctx,o=this.canvas;return n.drawImage(this.video,0,0,o.width,o.height),o}},{key:"requestUserMedia",value:function(){var e=this;navigator.getUserMedia=navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var n=function(n,o){var a={video:{optional:[{sourceId:o}]}};e.props.audio&&(a.audio={optional:[{sourceId:n}]}),navigator.mediaDevices.getUserMedia(a).then(function(e){t.mountedInstances.forEach(function(t){return t.handleUserMedia(null,e)})}).catch(function(e){t.mountedInstances.forEach(function(t){return t.handleUserMedia(e)})})};this.props.audioSource&&this.props.videoSource?n(this.props.audioSource,this.props.videoSource):"mediaDevices"in navigator?navigator.mediaDevices.enumerateDevices().then(function(t){var o=null,a=null;t.forEach(function(e){"audioinput"===e.kind?o=e.id:"videoinput"===e.kind&&(a=e.id)}),e.props.audioSource&&(o=e.props.audioSource),e.props.videoSource&&(a=e.props.videoSource),n(o,a)}).catch(function(e){console.log(e.name+": "+e.message)}):MediaStreamTrack.getSources(function(t){var o=null,a=null;t.forEach(function(e){"audio"===e.kind?o=e.id:"video"===e.kind&&(a=e.id)}),e.props.audioSource&&(o=e.props.audioSource),e.props.videoSource&&(a=e.props.videoSource),n(o,a)}),t.userMediaRequested=!0}},{key:"handleUserMedia",value:function(e,t){if(e)this.setState({hasUserMedia:!1});else{try{var n=window.URL.createObjectURL(t);this.stream=t,this.setState({hasUserMedia:!0,src:n})}catch(e){this.stream=t,this.video.srcObject=t,this.setState({hasUserMedia:!0})}this.props.onUserMedia()}}},{key:"render",value:function(){var e=this;return r.default.createElement("video",{autoPlay:!0,width:this.props.width,height:this.props.height,src:this.state.src,muted:this.props.audio,className:this.props.className,playsInline:!0,style:this.props.style,ref:function(t){e.video=t}})}}]),t}();c.defaultProps={audio:!0,className:"",height:480,onUserMedia:function(){},screenshotFormat:"image/webp",width:640},c.propTypes={audio:i.default.bool,onUserMedia:i.default.func,height:i.default.oneOfType([i.default.number,i.default.string]),width:i.default.oneOfType([i.default.number,i.default.string]),screenshotFormat:i.default.oneOf(["image/webp","image/png","image/jpeg"]),style:i.default.object,className:i.default.string,audioSource:i.default.string,videoSource:i.default.string},c.mountedInstances=[],c.userMediaRequested=!1,t.default=c,e.exports=t.default}])},e.exports=o(n(0),n(1))},813:function(e,t,n){var o=n(74),a=n(73),r="[object Number]";e.exports=function(e){return"number"==typeof e||a(e)&&o(e)==r}}}]);