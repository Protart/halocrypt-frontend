(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{1581:function(t,e,n){t.exports=n(3474)},4350:function(t,e,n){"use strict";n.r(e);var i=n(3109),r=n.n(i),a=(n(5666),n(4382)),o=n.n(a),s=n(1161),c=n.n(s),l=n(2386),u=n(6961),h=n(1581),d=n.n(h),f=n(7766),g=n.n(f),p=n(1222),v=n.n(p),m=n(7672),b=n.n(m),z=n(5804),w=function(t){return(1===(t=""+t).length?"0":"")+t},y=function(t){function e(){for(var e,n,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return n=t.call.apply(t,g()(e=[this]).call(e,r))||this,b()(v()(n),"state",{timeLeft:z.h.getStore().eventBeginTimeStamp-+new Date}),b()(v()(n),"_updateTime",(function(){return n.setState((function(t){var e=t.timeLeft-1e3;return{timeLeft:e,isTiming:e>500}}))})),n}o()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this.state.timeLeft>500;this.setState({isTiming:t}),t&&(this.__interval=d()(this._updateTime,1e3))},n.componentWillUnmount=function(){clearInterval(this.__interval)},n.componentDidUpdate=function(){this.state.isTiming||this.state.eventEmitted||(z.h.set("eventBegan",!0),this.setState({eventEmitted:!0}),clearInterval(this.__interval))},n.parseTime=function(t){var e,n=t/1e3,i=Math.floor(n/3600);e=n%3600;var r=Math.floor(n/3600),a=e=Math.round(e%60);if(a>3&&0===i&&0===r)return w(i)+":"+w(r)+":"+w(a);var o="Ready?";switch(a){case 3:return"Are";case 2:return"You";case 1:default:return o}},n.render=function(t,e){return this.state.isTiming?(0,l.az)(l.HY,{children:[(0,l.az)("div",{class:"heading-text goes-live",children:"Going Live In"}),(0,l.az)("div",{class:"heading-text going-live-time-delta",children:this.parseTime(e.timeLeft)})]}):null},e}(l.wA),S=n(8118),x=n(3662),_=n(4776);n.d(e,{default:function(){return I}});var A=z.h.getStore();function L(){return T.apply(this,arguments)}function T(){return(T=c()(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=k,!A.isLoggedIn){t.next=3;break}return t.abrupt("return",e);case 3:return t.next=5,S.y.checkAuth();case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var k=function(t){function e(){return t.apply(this,arguments)||this}return o()(e,t),e.prototype.render=function(t){return(0,l.az)("div",{children:[(0,l.az)("div",{class:"animated-landing-title",children:[(0,l.az)("div",{class:"front-logo",children:(0,l.az)(u.Z,{size:"200"})}),(0,l.az)("div",{class:"heading-text main-title",children:"HALOCRYPT"})]}),(0,l.az)(y,{}),(0,l.az)("div",{class:"reg-btn-box",children:A.isLoggedIn?(0,l.az)(l.A,{href:A.eventBegan?"/play":"Profile",class:"heading-text hoverable landing-action-button",children:A.eventBegan?"Play":"Profile"}):(0,l.az)(l.HY,{children:[(0,l.az)(l.A,{href:"/register",class:"landing-action-button heading-text hoverable",children:"Register"}),(0,l.az)(l.A,{href:"/login",class:"heading-text hoverable landing-action-button",children:"Login"})]})})]})},e}(x.Z),I=function(){return(0,l.az)(l.gr,{componentPromise:L,fallbackComponent:_.uW})}},3662:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var i=n(7766),r=n.n(i),a=n(1222),o=n.n(a),s=n(4382),c=n.n(s),l=n(7672),u=n.n(l),h=n(2386),d=n(5804),f=function(t){function e(){for(var e,n,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=t.call.apply(t,r()(e=[this]).call(e,a))||this,u()(o()(n),"_globalStoreStateChanged",(function(){return n.setState({hasNewData:!0})})),n}c()(e,t);var n=e.prototype;return n.componentDidMount=function(){d.h.subscribe(this._globalStoreStateChanged)},n.componentWillUnmount=function(){d.h.unsubscribe(this._globalStoreStateChanged)},e}(h.wA)},3474:function(t,e,n){n(1249);var i=n(4058);t.exports=i.setInterval}}]);