(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1058:function(n,e,t){"use strict";t.r(e);t(1035);var a,o,i,r,l,c,s,p,u,d,f,m,g=t(1038),h=t.n(g),y=t(0),b=t.n(y),x=t(965),v=t(48),w=t(264),E=t.n(w),P=t(272),k=t.n(P),O=t(285),j=t(145),S=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},_=v.a.div(a||(a=S(["\n  width: 100%;\n"],["\n  width: 100%;\n"]))),A=v.a.h1(o||(o=S(["\n  font-family: 'Press Start 2P', cursive;\n  line-height: 1.2em;\n  color: #9E2B0E;\n  text-align: center;\n"],["\n  font-family: 'Press Start 2P', cursive;\n  line-height: 1.2em;\n  color: #9E2B0E;\n  text-align: center;\n"]))),B=Object(v.a)(A)(i||(i=S(["\n  font-size: 1.4rem;\n"],["\n  font-size: 1.4rem;\n"]))),C=function(n){var e=n.children;return b.a.createElement(_,null,b.a.createElement(O.ContainerQuery,{query:j.a},(function(n){return E()([j.b.X_SMALL,j.b.SMALL],k()(n,(function(n){return n})))?b.a.createElement(B,null,e):b.a.createElement(A,null,e)})))},L=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},z=(r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}),D=v.a.div(l||(l=L(["\n  min-height: 100vh;\n  background-color: #fc3;\n  display: flex;\n  flex-direction: column;\n"],["\n  min-height: 100vh;\n  background-color: #fc3;\n  display: flex;\n  flex-direction: column;\n"]))),M=v.a.div(c||(c=L(["\n  padding-top: 10px;\n  padding-left: 10px;\n"],["\n  padding-top: 10px;\n  padding-left: 10px;\n"]))),X=v.a.div(s||(s=L(["\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"],["\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Y=v.a.div(p||(p=L(["\n  flex-grow: 1;\n  overflow: hidden;\n  text-align: center;\n  position: relative;\n  min-height: 200px;\n"],["\n  flex-grow: 1;\n  overflow: hidden;\n  text-align: center;\n  position: relative;\n  min-height: 200px;\n"]))),H=v.a.img(u||(u=L(["\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"],["\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n"]))),J=Object(v.b)(d||(d=L(["\n  @include keyframes(slide) {\n    0% {\n      transform: translate3d(0,0,0);\n    }\n    100% {\n      transform: translate3d(-600px,0,0);\n    }\n  }\n"],["\n  @include keyframes(slide) {\n    0% {\n      transform: translate3d(0,0,0);\n    }\n    100% {\n      transform: translate3d(-600px,0,0);\n    }\n  }\n"]))),q=v.a.div(f||(f=L(['\n  position: absolute;\n  background: url("/images/firecracker.gif") repeat-x left top;\n  animation: '," 3s linear infinite;\n  width: 300vw;\n  height: 150px;\n  top: 0;\n"],['\n  position: absolute;\n  background: url("/images/firecracker.gif") repeat-x left top;\n  animation: '," 3s linear infinite;\n  width: 300vw;\n  height: 150px;\n  top: 0;\n"])),J),F=Object(v.a)(q)(m||(m=L(["\n  background-position: 75px top;\n  top: 125px;\n"],["\n  background-position: 75px top;\n  top: 125px;\n"]))),N=function(n){function e(e){var t=n.call(this,e)||this;return t.audio=new Audio("/audios/ly-ngua-o.aac"),t.togglePlayback=function(){var n=t.state.isPlaying;n?t.audio.pause():t.audio.play(),t.setState({isPlaying:!n})},t.state={isPlaying:!0},t}return z(e,n),e.prototype.componentDidMount=function(){var n=this;this.audio.loop=!0,this.audio.volume=.5;var e=this.audio.play();void 0!==e&&e.catch((function(){n.setState({isPlaying:!1})}))},e.prototype.componentWillUnmount=function(){this.audio.pause(),this.audio.src="",this.audio.load()},e.prototype.render=function(){var n=this.state.isPlaying;return b.a.createElement(b.a.Fragment,null,b.a.createElement(x.Helmet,null,b.a.createElement("link",{href:"//fonts.googleapis.com/css?family=Press+Start+2P",rel:"stylesheet"}),b.a.createElement("meta",{property:"og:type",content:"website"}),b.a.createElement("meta",{property:"og:title",content:"BẢOLABS – Year of the Dog"}),b.a.createElement("meta",{property:"og:url",content:"http://labs.baohouse.net/year-of-the-dog"}),b.a.createElement("meta",{property:"og:image",content:"http://labs.baohouse.net/images/dog-app.thumb.png"}),b.a.createElement("title",null,"BẢOLABS – Year of the Dog")),b.a.createElement(D,null,b.a.createElement(M,null,b.a.createElement(h.a,{checked:n,checkedChildren:"Playing",unCheckedChildren:"Paused",onChange:this.togglePlayback})),b.a.createElement(X,null,b.a.createElement(C,null,"Happy New Year of the Dog!")),b.a.createElement(Y,null,b.a.createElement(H,{src:"/images/dogs.gif"}),b.a.createElement(q,null),b.a.createElement(F,null))))},e}(b.a.Component);e.default=N}}]);