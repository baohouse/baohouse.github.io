(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{786:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(824);var a=s(n(821)),i=s(n(1)),r=n(789),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(144)),l=s(n(818));function s(e){return e&&e.__esModule?e:{default:e}}var c,d,f,u,p,h,g,m,b,w=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},k=(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),y=o.default.div(d||(d=w(["\n  min-height: 100vh;\n  background-color: #fc3;\n  display: flex;\n  flex-direction: column;\n"],["\n  min-height: 100vh;\n  background-color: #fc3;\n  display: flex;\n  flex-direction: column;\n"]))),x=o.default.div(f||(f=w(["\n  padding-top: 10px;\n  padding-left: 10px;\n"],["\n  padding-top: 10px;\n  padding-left: 10px;\n"]))),v=o.default.div(u||(u=w(["\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),C=o.default.div(p||(p=w(["\n  flex-grow: 1;\n  overflow: hidden;\n  text-align: center;\n  position: relative;\n  min-height: 200px;\n"],["\n  flex-grow: 1;\n  overflow: hidden;\n  text-align: center;\n  position: relative;\n  min-height: 200px;\n"]))),P=o.default.img(h||(h=w(["\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"],["\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"]))),O=(0,o.keyframes)(g||(g=w(["\n  @include keyframes(slide) {\n    0% {\n      transform: translate3d(0,0,0);\n    }\n    100% {\n      transform: translate3d(-600px,0,0);\n    }\n  }\n"],["\n  @include keyframes(slide) {\n    0% {\n      transform: translate3d(0,0,0);\n    }\n    100% {\n      transform: translate3d(-600px,0,0);\n    }\n  }\n"]))),_=o.default.div(m||(m=w(['\n  position: absolute;\n  background: url("/images/firecracker.gif") repeat-x left top;\n  animation: '," 3s linear infinite;\n  width: 300vw;\n  height: 150px;\n  top: 0;\n"],['\n  position: absolute;\n  background: url("/images/firecracker.gif") repeat-x left top;\n  animation: '," 3s linear infinite;\n  width: 300vw;\n  height: 150px;\n  top: 0;\n"])),O),E=(0,o.default)(_)(b||(b=w(["\n  background-position: 75px top;\n  top: 125px;\n"],["\n  background-position: 75px top;\n  top: 125px;\n"]))),S=function(e){function t(t){var n=e.call(this,t)||this;return n.audio=new Audio("/audios/ly-ngua-o.aac"),n.togglePlayback=function(){var e=n.state.isPlaying;e?n.audio.pause():n.audio.play(),n.setState({isPlaying:!e})},n.state={isPlaying:!0},n}return k(t,e),t.prototype.componentDidMount=function(){var e=this;this.audio.loop=!0,this.audio.volume=.5;var t=this.audio.play();void 0!==t&&t.catch(function(){e.setState({isPlaying:!1})})},t.prototype.componentWillUnmount=function(){this.audio.pause(),this.audio.src="",this.audio.load()},t.prototype.render=function(){var e=this.state.isPlaying;return i.default.createElement(i.default.Fragment,null,i.default.createElement(r.Helmet,null,i.default.createElement("link",{href:"//fonts.googleapis.com/css?family=Press+Start+2P",rel:"stylesheet"}),i.default.createElement("meta",{property:"og:type",content:"website"}),i.default.createElement("meta",{property:"og:title",content:"BẢOLABS – Year of the Dog"}),i.default.createElement("meta",{property:"og:url",content:"http://labs.baohouse.net/year-of-the-dog"}),i.default.createElement("meta",{property:"og:image",content:"http://labs.baohouse.net/images/dog-app.thumb.png"}),i.default.createElement("title",null,"BẢOLABS – Year of the Dog")),i.default.createElement(y,null,i.default.createElement(x,null,i.default.createElement(a.default,{checked:e,checkedChildren:"Playing",unCheckedChildren:"Paused",onChange:this.togglePlayback})),i.default.createElement(v,null,i.default.createElement(l.default,null,"Happy New Year of the Dog!")),i.default.createElement(C,null,i.default.createElement(P,{src:"/images/dogs.gif"}),i.default.createElement(_,null),i.default.createElement(E,null))))},t}(i.default.Component);t.default=S},818:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(318)),i=c(n(316)),r=c(n(1)),o=n(315),l=c(n(144)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(314));function c(e){return e&&e.__esModule?e:{default:e}}var d,f,u,p=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},h=l.default.div(d||(d=p(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),g=l.default.h1(f||(f=p(["\n  font-family: 'Press Start 2P', cursive;\n  line-height: 1.2em;\n  color: #9E2B0E;\n  text-align: center;\n"],["\n  font-family: 'Press Start 2P', cursive;\n  line-height: 1.2em;\n  color: #9E2B0E;\n  text-align: center;\n"]))),m=(0,l.default)(g)(u||(u=p(["\n  font-size: 1.4rem;\n"],["\n  font-size: 1.4rem;\n"]))),b=function(e){var t=e.children;return r.default.createElement(h,null,r.default.createElement(o.ContainerQuery,{query:s.BreakpointsMap},function(e){return(0,a.default)([s.default.X_SMALL,s.default.SMALL],(0,i.default)(e,function(e){return e}))?r.default.createElement(m,null,t):r.default.createElement(g,null,t)}))};t.default=b},819:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),r=n(56),o=n.n(r),l=n(140),s=n.n(l),c=n(12),d=n.n(c),f=n(21),u=n.n(f),p=n(10),h=n.n(p),g=n(11),m=n.n(g),b=n(1),w=n.n(b),k=n(0),y=n.n(k),x=n(27);function v(){}var C=function(e){function t(e){d()(this,t);var n=h()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));P.call(n);var a=!1;return a="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:a},n}return m()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"setChecked",value:function(e){this.props.disabled||("checked"in this.props||this.setState({checked:e}),this.props.onChange(e))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.prefixCls,r=t.disabled,l=t.checkedChildren,c=t.tabIndex,d=t.unCheckedChildren,f=s()(t,["className","prefixCls","disabled","checkedChildren","tabIndex","unCheckedChildren"]),u=this.state.checked,p=r?-1:c||0,h=x((e={},o()(e,n,!!n),o()(e,a,!0),o()(e,a+"-checked",u),o()(e,a+"-disabled",r),e));return w.a.createElement("span",i()({},f,{className:h,tabIndex:p,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.toggle,onMouseUp:this.handleMouseUp}),w.a.createElement("span",{className:a+"-inner"},u?l:d))}}]),t}(b.Component),P=function(){var e=this;this.toggle=function(){var t=e.props.onClick,n=!e.state.checked;e.setChecked(n),t(n)},this.handleKeyDown=function(t){37===t.keyCode?e.setChecked(!1):39===t.keyCode?e.setChecked(!0):32!==t.keyCode&&13!==t.keyCode||e.toggle()},this.handleMouseUp=function(t){e.node&&e.node.blur(),e.props.onMouseUp&&e.props.onMouseUp(t)},this.saveNode=function(t){e.node=t}};C.propTypes={className:y.a.string,prefixCls:y.a.string,disabled:y.a.bool,checkedChildren:y.a.any,unCheckedChildren:y.a.any,onChange:y.a.func,onMouseUp:y.a.func,onClick:y.a.func,tabIndex:y.a.number,checked:y.a.bool,defaultChecked:y.a.bool,autoFocus:y.a.bool},C.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1,onChange:v,onClick:v},t.default=C},820:function(e,t,n){e.exports=n(819)},821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(n(3)),i=h(n(56)),r=h(n(12)),o=h(n(21)),l=h(n(10)),s=h(n(11)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),d=h(n(0)),f=h(n(820)),u=h(n(27)),p=h(n(210));function h(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(){(0,r.default)(this,t);var e=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.saveSwitch=function(t){e.rcSwitch=t},e}return(0,s.default)(t,e),(0,o.default)(t,[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.size,o=t.loading,l=t.className,s=void 0===l?"":l,d=(0,u.default)(s,(e={},(0,i.default)(e,n+"-small","small"===r),(0,i.default)(e,n+"-loading",o),e));return c.createElement(f.default,(0,a.default)({},(0,p.default)(this.props,["loading"]),{className:d,ref:this.saveSwitch}))}}]),t}(c.Component);t.default=g,g.defaultProps={prefixCls:"ant-switch"},g.propTypes={prefixCls:d.default.string,size:d.default.oneOf(["small","default","large"]),className:d.default.string},e.exports=t.default},822:function(e,t,n){(e.exports=n(96)(!1)).push([e.i,'.ant-switch{font-family:Monospaced Number,Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.5;color:rgba(0,0,0,.65);margin:0;padding:0;list-style:none;position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;height:22px;min-width:44px;line-height:20px;vertical-align:middle;border-radius:100px;border:1px solid transparent;background-color:rgba(0,0,0,.25);cursor:pointer;-webkit-transition:all .36s;transition:all .36s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ant-switch-inner{color:#fff;font-size:12px;margin-left:24px;margin-right:6px;display:block}.ant-switch:after,.ant-switch:before{position:absolute;width:18px;height:18px;left:1px;top:1px;border-radius:18px;background-color:#fff;content:" ";cursor:pointer;-webkit-transition:all .36s cubic-bezier(.78,.14,.15,.86);transition:all .36s cubic-bezier(.78,.14,.15,.86)}.ant-switch:after{-webkit-box-shadow:0 2px 4px 0 rgba(0,35,11,.2);box-shadow:0 2px 4px 0 rgba(0,35,11,.2)}.ant-switch:active:after,.ant-switch:active:before{width:24px}.ant-switch:before{content:"\\E64D";font-family:anticon;-webkit-animation:loadingCircle 1s infinite linear;animation:loadingCircle 1s infinite linear;text-align:center;background:transparent;z-index:1;display:none;font-size:12px}.ant-switch-loading:before{display:inline-block;color:rgba(0,0,0,.65)}.ant-switch-checked.ant-switch-loading:before{color:#1890ff}.ant-switch:focus{-webkit-box-shadow:0 0 0 2px rgba(24,144,255,.2);box-shadow:0 0 0 2px rgba(24,144,255,.2);outline:0}.ant-switch:focus:hover{-webkit-box-shadow:none;box-shadow:none}.ant-switch-small{height:16px;min-width:28px;line-height:14px}.ant-switch-small .ant-switch-inner{margin-left:18px;margin-right:3px;font-size:12px}.ant-switch-small:after,.ant-switch-small:before{width:12px;height:12px}.ant-switch-small:active:after,.ant-switch-small:active:before{width:16px}.ant-switch-small.ant-switch-checked:after,.ant-switch-small.ant-switch-checked:before{left:100%;margin-left:-13px}.ant-switch-small.ant-switch-checked .ant-switch-inner{margin-left:3px;margin-right:18px}.ant-switch-small:active.ant-switch-checked:after,.ant-switch-small:active.ant-switch-checked:before{margin-left:-16.5px}.ant-switch-small.ant-switch-loading:before{-webkit-animation:AntSwitchSmallLoadingCircle 1s infinite linear;animation:AntSwitchSmallLoadingCircle 1s infinite linear;font-weight:700}.ant-switch-checked{background-color:#1890ff}.ant-switch-checked .ant-switch-inner{margin-left:6px;margin-right:24px}.ant-switch-checked:after,.ant-switch-checked:before{left:100%;margin-left:-19px}.ant-switch-checked:active:after,.ant-switch-checked:active:before{margin-left:-25px}.ant-switch-disabled,.ant-switch-loading{pointer-events:none;opacity:.4}@-webkit-keyframes AntSwitchSmallLoadingCircle{0%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(0deg) scale(.66667);transform:rotate(0deg) scale(.66667)}to{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(1turn) scale(.66667);transform:rotate(1turn) scale(.66667)}}@keyframes AntSwitchSmallLoadingCircle{0%{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(0deg) scale(.66667);transform:rotate(0deg) scale(.66667)}to{-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(1turn) scale(.66667);transform:rotate(1turn) scale(.66667)}}',""])},823:function(e,t,n){var a=n(822);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(95)(a,i);a.locals&&(e.exports=a.locals)},824:function(e,t,n){"use strict";n(145),n(823)}}]);