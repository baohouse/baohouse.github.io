(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{674:function(e,t,n){var r;r=function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r=function(e){};r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")},e.exports=function(e,t,n,o,i,a,u,s){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,o,i,a,u,s],l=0;(c=new Error(t.replace(/%s/g,function(){return f[l++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){"use strict";var r=n(0);r=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}}).apply(void 0,[t].concat(r))}},e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n(8)(function(e){return"object"===(void 0===e?"undefined":r(e))&&null!==e&&e.$$typeof===o},!0)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(1),i=n(2),a=n(3),u={};e.exports=function(e,t,n,s,c){for(var f in e)if(e.hasOwnProperty(f)){var l;try{o("function"==typeof e[f],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",s||"React class",n,f),l=e[f](t,f,s,n,null,a)}catch(e){l=e}if(i(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",n,f,void 0===l?"undefined":r(l)),l instanceof Error&&!(l.message in u)){u[l.message]=!0;var d=c?c():"";i(!1,"Failed %s type: %s%s",n,l.message,null!=d?d:"")}}}},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(0),i=n(1),a=n(2),u=n(3),s=n(7);e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,c="@@iterator";var f="<<anonymous>>",l={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:y(o.thatReturnsNull),arrayOf:function(e){return y(function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a)){var s=m(a);return new p("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<a.length;c++){var f=e(a,c,r,o,i+"["+c+"]",u);if(f instanceof Error)return f}return null})},element:function(){return y(function(t,n,r,o,i){var a=t[n];if(!e(a)){var u=m(a);return new p("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected a single ReactElement.")}return null})}(),instanceOf:function(e){return y(function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||f,u=function(e){if(!e.constructor||!e.constructor.name)return f;return e.constructor.name}(t[n]);return new p("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null})},node:function(){return y(function(e,t,n,r,o){if(!v(e[t]))return new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.");return null})}(),objectOf:function(e){return y(function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=t[n],s=m(a);if("object"!==s)return new p("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var c in a)if(a.hasOwnProperty(c)){var f=e(a,c,r,o,i+"."+c,u);if(f instanceof Error)return f}return null})},oneOf:function(e){if(!Array.isArray(e))return a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),o.thatReturnsNull;return y(function(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(d(a,e[u]))return null;var s=JSON.stringify(e);return new p("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+s+".")})},oneOfType:function(e){if(!Array.isArray(e))return a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),o.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return a(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",g(n),t),o.thatReturnsNull}return y(function(t,n,r,o,i){for(var a=0;a<e.length;a++){var s=e[a];if(null==s(t,n,r,o,i,u))return null}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")})},shape:function(e){return y(function(t,n,r,o,i){var a=t[n],s=m(a);if("object"!==s)return new p("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var f=e[c];if(f){var l=f(a,c,r,o,i+"."+c,u);if(l)return l}}return null})}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e){this.message=e,this.stack=""}function y(e){var n={},r=0;function o(o,s,c,l,d,y,h){if(l=l||f,y=y||c,h!==u)if(t)i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("undefined"!=typeof console){var v=l+":"+c;!n[v]&&r<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,l),n[v]=!0,r++)}return null==s[c]?o?null===s[c]?new p("The "+d+" `"+y+"` is marked as required in `"+l+"`, but its value is `null`."):new p("The "+d+" `"+y+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(s,c,l,d,y)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function h(e){return y(function(t,n,r,o,i,a){var u=t[n];return m(u)!==e?new p("Invalid "+o+" `"+i+"` of type `"+b(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function v(t){switch(void 0===t?"undefined":r(t)){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var o=function(e){var t=e&&(n&&e[n]||e[c]);if("function"==typeof t)return t}(t);if(!o)return!1;var i,a=o.call(t);if(o!==t.entries){for(;!(i=a.next()).done;)if(!v(i.value))return!1}else for(;!(i=a.next()).done;){var u=i.value;if(u&&!v(u[1]))return!1}return!0;default:return!1}}function m(e){var t=void 0===e?"undefined":r(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function b(e){if(void 0===e||null===e)return""+e;var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,l.checkPropTypes=s,l.PropTypes=l,l}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5),i=s(o),a=s(n(4)),u=n(6);function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={hasUserMedia:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentDidMount",value:function(){(navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia)&&(t.mountedInstances.push(this),this.state.hasUserMedia||t.userMediaRequested||this.requestUserMedia())}},{key:"componentWillUnmount",value:function(){var e=t.mountedInstances.indexOf(this);t.mountedInstances.splice(e,1),0===t.mountedInstances.length&&this.state.hasUserMedia&&(this.stream.stop?this.stream.stop():(this.stream.getVideoTracks&&this.stream.getVideoTracks().map(function(e){return e.stop()}),this.stream.getAudioTracks&&this.stream.getAudioTracks().map(function(e){return e.stop()})),t.userMediaRequested=!1,window.URL.revokeObjectURL(this.state.src))}},{key:"getScreenshot",value:function(){if(!this.state.hasUserMedia)return null;var e=this.getCanvas();return e&&e.toDataURL(this.props.screenshotFormat)}},{key:"getCanvas",value:function(){var e=(0,u.findDOMNode)(this);if(!this.state.hasUserMedia||!e.videoHeight)return null;if(!this.ctx){var t=document.createElement("canvas"),n=e.videoWidth/e.videoHeight;t.width=e.clientWidth,t.height=e.clientWidth/n,this.canvas=t,this.ctx=t.getContext("2d")}var r=this.ctx,o=this.canvas;return r.drawImage(e,0,0,o.width,o.height),o}},{key:"requestUserMedia",value:function(){var e=this;navigator.getUserMedia=navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var n=function(n,r){var o={video:{optional:[{sourceId:r}]}};e.props.audio&&(o.audio={optional:[{sourceId:n}]}),navigator.mediaDevices.getUserMedia(o).then(function(e){t.mountedInstances.forEach(function(t){return t.handleUserMedia(null,e)})}).catch(function(e){t.mountedInstances.forEach(function(t){return t.handleUserMedia(e)})})};this.props.audioSource&&this.props.videoSource?n(this.props.audioSource,this.props.videoSource):"mediaDevices"in navigator?navigator.mediaDevices.enumerateDevices().then(function(e){var t=null,r=null;e.forEach(function(e){"audio"===e.kind?t=e.id:"video"===e.kind&&(r=e.id)}),n(t,r)}).catch(function(e){console.log(e.name+": "+e.message)}):MediaStreamTrack.getSources(function(e){var t=null,r=null;e.forEach(function(e){"audio"===e.kind?t=e.id:"video"===e.kind&&(r=e.id)}),n(t,r)}),t.userMediaRequested=!0}},{key:"handleUserMedia",value:function(e,t){if(e)this.setState({hasUserMedia:!1});else try{var n=window.URL.createObjectURL(t);this.stream=t,this.setState({hasUserMedia:!0,src:n}),this.props.onUserMedia()}catch(e){this.stream=t,this.video.srcObject=t,this.setState({hasUserMedia:!0})}}},{key:"render",value:function(){var e=this;return i.default.createElement("video",{autoPlay:!0,width:this.props.width,height:this.props.height,src:this.state.src,muted:this.props.muted,className:this.props.className,playsInline:!0,style:this.props.style,ref:function(t){return e.video=t}})}}]),t}();c.defaultProps={audio:!0,className:"",height:480,muted:!1,onUserMedia:function(){},screenshotFormat:"image/webp",width:640},c.propTypes={audio:a.default.bool,muted:a.default.bool,onUserMedia:a.default.func,height:a.default.oneOfType([a.default.number,a.default.string]),width:a.default.oneOfType([a.default.number,a.default.string]),screenshotFormat:a.default.oneOf(["image/webp","image/png","image/jpeg"]),style:a.default.object,className:a.default.string,audioSource:a.default.string,videoSource:a.default.string},c.mountedInstances=[],c.userMediaRequested=!1,t.default=c,e.exports=t.default}])},e.exports=r(n(1),n(7))}}]);