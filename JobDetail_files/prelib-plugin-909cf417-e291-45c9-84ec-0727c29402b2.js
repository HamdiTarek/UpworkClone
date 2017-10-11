!function e(t,r,n){function o(a,u){if(!r[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[a]={exports:{}};t[a][0].call(l.exports,function(e){var r=t[a][1][e];return o(r?r:e)},l,l.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,r){var n,o,i=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{o="function"==typeof clearTimeout?clearTimeout:u}catch(e){o=u}}();function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}function c(e){if(o===clearTimeout)return clearTimeout(e);if((o===u||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{return o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}var l,f=[],p=!1,d=-1;function g(){if(!p||!l)return;p=!1,l.length?f=l.concat(f):d=-1,f.length&&y()}function y(){if(p)return;var e=s(g);p=!0;for(var t=f.length;t;){for(l=f,f=[];++d<t;)l&&l[d].run();d=-1,t=f.length}l=null,p=!1,c(e)}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new h(e,t)),1!==f.length||p||s(y)};function h(e,t){this.fun=e,this.array=t}h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={};function v(){}i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],2:[function(e,t,r){!function(){var e=function(e){e=e||{},e.version="0.3.3";e.logger=function(e,t){},e.log=function(t,r,n){r&&(t="[class="+r.name()+"] "+t),e.logger("DI - "+t,n||4)},e.error=function(t,r,n){e.log(t,r,n)},e.createContext=function(){var t={map:{},decorators:{}};t.decorate=function(e,r){t.decorators[e]||(t.decorators[e]=[]),t.decorators[e].push(r)},t.entry=function(e){return t.map[e]},t.register=function(r,n,o){var i=e.entry(r,t).type(n).args(o);return t.map[r]=i,i},t.has=function(e){return null!=t.entry(e)},t.get=function(r,n){return t.has(r)||e.error("Object["+r+"] is not registered"),t.entry(r).getObject(n)},t.create=function(r,n){if(t.entry(r).strategy()==e.strategy.singleton&&e.error("Attempt to create singleton object ["+r+"]"),t.has(r))return t.entry(r).create(n);e.error("Object["+r+"] is not registered")},t.initialize=function(){function r(r){var n=t.entry(r);n?n.initialize()&&n.strategy().initialize()&&t.get(r):e.error("Object["+r+"] is not registered")}return function(e){if(e)r(e);else for(var e in t.map)r(e)}}(),t.clear=function(){this.map={},this.decorators={}};function r(e){for(;e.indexOf(" ")>=0;)e=e.replace(" ","");return e}return t.resolve=function(r){var n=r.load(),o={};return t.eachDependency(r.dependencies(),function(i,a){var u=t.get(i,n);t.ready(u,t.entry(i)),null==u&&e.error("Dependency ["+r.name()+"."+a+"]->["+i+"] can not be satisfied",r),o[a]=u}),o},t.eachDependency=function(t,n){if(t)for(var o=r(t).split(","),i=0;i<o.length;i++){var a=o[i];if(a){var u=e.dependencyExpression(a);try{n(u.name,u.property,i)}catch(s){e.error("An exception was thrown while the DI tried to resolve class '"+u.name+"'. Check the class name, or if it was registred correctly. \r\n inner exception: \r\n"+s.message)}}}},t.ready=function(e,r){var n=r.wasReady();if(r.wasReady(!0),!n){var o=t.createCallback();o&&o(r.name(),e),e&&"function"==typeof e.ready&&e!=window&&e!=window.document&&e!=window.document.body&&(r.wasReady(!0),e.ready.apply(e,r.injector().ready(e,r)||[]))}return e},t.createCallback=function(){var e;return function(r){if(0==arguments.length)return e;return e=r,t}}(),t},e.dependencyExpression=function(e){var t={},r=e,n=e;if(e.indexOf("=")>0){var o=e.split("=");r=o[0],n=o[1]}return t.name=n,t.property=r,t},e.entry=function(t,r){var n,o={};o.name=function(){return t};for(var i=["load","wasReady","strategy","injector","type","dependencies","args","factory","initialize"],a={},u=0;u<i.length;u++){var s=i[u];c(s)}function c(e){o[e]=function(t){if(!arguments.length)return a[e];return a[e]=t,o}}o.depsDictionary=function(e){if(!arguments.length)return a.depsDictionary||o.depsDictionary(r.resolve(o)),a.depsDictionary;return a.depsDictionary=e,o},a.strategy=e.defaults.strategy,a.factory=e.defaults.factory,a.injector=e.defaults.injector,a.load=e.defaults.load,a.wasReady=!1,a.initialize=!0,o.create=function(t,i,u){u=u||e.load.recursive;var s=a.strategy.test(n,u);if(i)return s;s&&(t=a.injector.create(t?t:a.args,o,r,u));var c=a.strategy.create(n,a.factory,a.type,t,r,o,u);return r.ready(c,o)},o.getObject=function(e){return o.create(void 0,void 0,e)},o.object=function(e){return arguments.length?(n=e,o):o.create()};function l(e,t){return void 0!=t&&o.type(t),o.factory(e),o}o.asFunction=function(t){return l(e.factory.func,t)},o.asInstance=function(t){return l(e.factory.instance,t)},o.asCtor=function(t){return l(e.factory.constructor,t)},o.asSingleton=function(){return o.strategy(e.strategy.singleton)},o.asProto=function(){return o.strategy(e.strategy.proto)},o.injectToCtor=function(){return o.injector(e.injector.ctor)},o.injectToReady=function(){return o.injector(e.injector.ready)},o.injectToProperty=function(){return o.injector(e.injector.property)};function f(e,t){return void 0!=t&&o.dependencies(t),o.load(e),o}return o.flatDependencies=function(t){return f(e.load.flat,t)},o.recursiveDependencies=function(t){return f(e.load.recursive,t)},o},e.strategy={proto:{test:function(e,t){return!t||t()},initialize:function(){return!1},create:function(e,r,n,o,i,a,u){return e=t(r,n,o,a),u()&&a.injector().ready(e,a),a.depsDictionary(void 0),a.wasReady(!1),e}},singleton:{test:function(e,t){return!e&&(!t||t())},initialize:function(){return!0},create:function(e,r,n,o,i,a,u){return e||(e=t(r,n,o,a),a.object(e),a.wasReady(!0),u()&&a.injector().ready(e,a),a.wasReady(!1)),e}}};function t(e,t,n,o){var i=e(t,n,o),a=r.decorators[o.name()];if(a)for(var u=0;u<a.length;u++)i=a[u](i);return i}return e.factory={constructor:function(t,r,n){if(!(r instanceof Array))return new t(r);if(r.length<=10)return new t(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]);if(r.length<=30)return new t(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15],r[16],r[17],r[18],r[19],r[20],r[21],r[22],r[23],r[24],r[25],r[26],r[27],r[28],r[29]);e.error("trying to create a class with too many args!",n)},func:function(e,t,r){return t instanceof Array?e.apply(e,t):e(t)},instance:function(e,t,r){return e}},e.injector={property:{create:function(e,t,r){return e},ready:function(e,t){var r=t.depsDictionary();for(var n in r)e[n]=r[n];var o=t.args();void 0==o||r.hasOwnProperty("args")||(e.args=o)}},ready:{create:function(e,t,r){return e},ready:function(e,t){var n=t.args(),o=[],i=t.depsDictionary();if(r.eachDependency(t.dependencies(),function(e,t,r){o[r]=i[t]}),n){n=n instanceof Array?n:[n];for(var a=0;a<n.length;a++)o.push(n[a])}return o}},ctor:{create:function(e,t,r){var n=[],o=t.depsDictionary();if(r.eachDependency(t.dependencies(),function(e,t,r){n[r]=o[t]}),e){e=e instanceof Array?e:[e];for(var i=0;i<e.length;i++)n.push(e[i])}return n},ready:function(e,t){}}},e.load={flat:function(e,t,r){return!1},recursive:function(e,t,r){return!0}},e.defaults={strategy:e.strategy.singleton,factory:e.factory.constructor,injector:e.injector.ctor,load:e.load.recursive},e}(),r=e.createContext();t.exports=function(t){t.di=e,t.ctx=r}}()},{}],3:[function(e,t,r){"use strict";var n,o,i="walkme_prelib_log_enabled",a=1e4,u=[],s={write:c,getCookieName:d,setCookieName:p,enableLog:g,disableLog:y,isLogEnabled:h,readCookie:m,writeCookie:w,getLogHistoryRecords:f};function c(){if(h()){var e=arguments;try{e.stack=(new Error).stack}catch(t){}l(e);var r=Array().slice.call(e);console.log.apply(console,r)}}function l(e){var t=new Date;e.timeElapsed=t-(o||t),o=t,u.unshift(e),u=u.splice(0,a)}function f(){return u}function p(e){i=e}function d(){return i}function g(){n=!0,w(i,!0)}function y(){n=!1,w(i,"",-1)}function h(){if("undefined"!=typeof n)return n;return v(),n}function v(){var e=window.console&&(m(i)||!1);n=e&&"true"==e.toString().toLowerCase()}function m(e){var t=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)");return t?t.pop():void 0}function w(e,t,r){var n,o="";r&&(n=new Date,n.setTime(n.getTime()+864e5*r),o="; expires="+n.toUTCString()),document.cookie=e+"="+t+o+"; path=/"}t.exports=s},{}],4:[function(e,t,r){(function(t,r){!function(){var n,o=e("wm-prelib-logger");function i(){return n}window._walkmeInternals=window._walkmeInternals||{},e("wm-di")(window._walkmeInternals);var a=window._walkmeInternals.ctx;!function(){var i={},u=function(){function e(e){this.promiseManager=e,this._plugins=[]}return e.prototype.register=function(e){this._plugins.push(e)},e.prototype.run=function(e){for(var t,r=this._plugins,n=[],o=0;o<r.length;o++)t=r[o].run(e),t&&n.push(t);return this.promiseManager.all(n)},e}();i.PluginsManager=u;/*!
 * @overview RSVP - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/tildeio/rsvp.js/master/LICENSE
 * @version   3.1.0
 */
var s=i.promiseManager=function(){"use strict";function n(e){return"function"==typeof e||"object"==typeof e&&null!==e}function o(e){return"function"==typeof e}function i(e){return"object"==typeof e&&null!==e}var a;a=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var u=a,s=Date.now||function(){return(new Date).getTime()};function c(){}var l=Object.create||function(e){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof e)throw new TypeError("Argument must be an object");return c.prototype=e,new c};function f(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}function p(e){var t=e._promiseCallbacks;return t||(t=e._promiseCallbacks={}),t}var d={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function");var r,n=p(this);r=n[e],r||(r=n[e]=[]),f(r,t)===-1&&r.push(t)},off:function(e,t){var r,n,o=p(this);if(!t)return void(o[e]=[]);r=o[e],n=f(r,t),n!==-1&&r.splice(n,1)},trigger:function(e,t,r){var n,o,i=p(this);if(n=i[e])for(var a=0;a<n.length;a++)(o=n[a])(t,r)}},g={instrument:!1};d.mixin(g);function y(e,t){if("onerror"===e)return void g.on("error",t);if(2!==arguments.length)return g[e];g[e]=t}var h=[];function v(){setTimeout(function(){for(var e,t=0;t<h.length;t++){e=h[t];var r=e.payload;r.guid=r.key+r.id,r.childGuid=r.key+r.childId,r.error&&(r.stack=r.error.stack),g.trigger(e.name,e.payload)}h.length=0},50)}function m(e,t,r){1===h.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:r&&r._id,label:t._label,timeStamp:s(),error:g["instrument-with-stack"]?new Error(t._label):null}})&&v()}var w=m;function _(){return new TypeError("A promises callback cannot return that same promise.")}function b(){}var x=void 0,T=1,E=2,j=new R;function k(e){try{return e.then}catch(t){return j.error=t,j}}function A(e,t,r,n){try{e.call(t,r,n)}catch(o){return o}}function C(e,t,r){g.async(function(e){var n=!1,o=A(r,t,function(r){if(n)return;n=!0,t!==r?I(e,r):D(e,r)},function(t){if(n)return;n=!0,B(e,t)},"Settle: "+(e._label||" unknown promise"));!n&&o&&(n=!0,B(e,o))},e)}function P(e,t){t._state===T?D(e,t._result):t._state===E?(t._onError=null,B(e,t._result)):L(t,void 0,function(r){t!==r?I(e,r):D(e,r)},function(t){B(e,t)})}function S(e,t){if(t.constructor===e.constructor)P(e,t);else{var r=k(t);r===j?B(e,j.error):void 0===r?D(e,t):o(r)?C(e,t,r):D(e,t)}}function I(e,t){e===t?D(e,t):n(t)?S(e,t):D(e,t)}function M(e){e._onError&&e._onError(e._result),O(e)}function D(e,t){if(e._state!==x)return;e._result=t,e._state=T,0===e._subscribers.length?g.instrument&&w("fulfilled",e):g.async(O,e)}function B(e,t){if(e._state!==x)return;e._state=E,e._result=t,g.async(M,e)}function L(e,t,r,n){var o=e._subscribers,i=o.length;e._onError=null,o[i]=t,o[i+T]=r,o[i+E]=n,0===i&&e._state&&g.async(O,e)}function O(e){var t=e._subscribers,r=e._state;if(g.instrument&&w(r===T?"fulfilled":"rejected",e),0===t.length)return;for(var n,o,i=e._result,a=0;a<t.length;a+=3)n=t[a],o=t[a+r],n?W(r,n,o,i):o(i);e._subscribers.length=0}function R(){this.error=null}var N=new R;function F(e,t){try{return e(t)}catch(r){return N.error=r,N}}function W(e,t,r,n){var i,a,u,s,c=o(r);if(c){if(i=F(r,n),i===N?(s=!0,a=i.error,i=null):u=!0,t===i)return void B(t,_())}else i=n,u=!0;t._state!==x||(c&&u?I(t,i):s?B(t,a):e===T?D(t,i):e===E&&B(t,i))}function Q(e,t){var r=!1;try{t(function(t){if(r)return;r=!0,I(e,t)},function(t){if(r)return;r=!0,B(e,t)})}catch(n){B(e,n)}}function H(e,t,r){return e===T?{state:"fulfilled",value:r}:{state:"rejected",reason:r}}function U(e,t,r,n){var o=this;o._instanceConstructor=e,o.promise=new e(b,n),o._abortOnReject=r,o._validateInput(t)?(o._input=t,o.length=t.length,o._remaining=t.length,o._init(),0===o.length?D(o.promise,o._result):(o.length=o.length||0,o._enumerate(),0===o._remaining&&D(o.promise,o._result))):B(o.promise,o._validationError())}var q=U;U.prototype._validateInput=function(e){return u(e)},U.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},U.prototype._init=function(){this._result=new Array(this.length)},U.prototype._enumerate=function(){for(var e=this,t=e.length,r=e.promise,n=e._input,o=0;r._state===x&&o<t;o++)e._eachEntry(n[o],o)},U.prototype._eachEntry=function(e,t){var r=this,n=r._instanceConstructor;i(e)?e.constructor===n&&e._state!==x?(e._onError=null,r._settledAt(e._state,t,e._result)):r._willSettleAt(n.resolve(e),t):(r._remaining--,r._result[t]=r._makeResult(T,t,e))},U.prototype._settledAt=function(e,t,r){var n=this,o=n.promise;o._state===x&&(n._remaining--,n._abortOnReject&&e===E?B(o,r):n._result[t]=n._makeResult(e,t,r)),0===n._remaining&&D(o,n._result)},U.prototype._makeResult=function(e,t,r){return r},U.prototype._willSettleAt=function(e,t){var r=this;L(e,void 0,function(e){r._settledAt(T,t,e)},function(e){r._settledAt(E,t,e)})};function z(e,t){return new q(this,e,(!0),t).promise}var V=z;function Y(e,t){var r=this,n=new r(b,t);if(!u(e))return B(n,new TypeError("You must pass an array to race.")),n;var o=e.length;function i(e){I(n,e)}function a(e){B(n,e)}for(var s=0;n._state===x&&s<o;s++)L(r.resolve(e[s]),void 0,i,a);return n}var K=Y;function G(e,t){var r=this;if(e&&"object"==typeof e&&e.constructor===r)return e;var n=new r(b,t);return I(n,e),n}var J=G;function $(e,t){var r=this,n=new r(b,t);return B(n,e),n}var X=$,Z="rsvp_"+s()+"-",ee=0;function te(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function re(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function ne(e,t){var r=this;r._id=ee++,r._label=t,r._state=void 0,r._result=void 0,r._subscribers=[],g.instrument&&w("created",r),b!==e&&(o(e)||te(),r instanceof ne||re(),Q(r,e))}var oe=ne;ne.cast=J,ne.all=V,ne.race=K,ne.resolve=J,ne.reject=X,ne.prototype={constructor:ne,_guidKey:Z,_onError:function(e){var t=this;g.after(function(){t._onError&&g.trigger("error",e,t._label)})},then:function(e,t,r){var n=this,o=n._state;if(o===T&&!e||o===E&&!t)return g.instrument&&w("chained",n,n),n;n._onError=null;var i=new n.constructor(b,r),a=n._result;if(g.instrument&&w("chained",n,i),o){var u=arguments[o-1];g.async(function(){W(o,i,u,a)})}else L(n,i,e,t);return i},"catch":function(e,t){return this.then(void 0,e,t)},"finally":function(e,t){var r=this,n=r.constructor;return r.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})},t)}};function ie(e,t,r){this._superConstructor(e,t,!1,r)}ie.prototype=l(q.prototype),ie.prototype._superConstructor=q,ie.prototype._makeResult=H,ie.prototype._validationError=function(){return new Error("allSettled must be called with an array")};function ae(e,t){return new ie(oe,e,t).promise}var ue=ae;function se(e,t){return oe.all(e,t)}var ce,le=se,fe=0;({}).toString;function pe(e,t){Ee[fe]=e,Ee[fe+1]=t,fe+=2,2===fe&&Ae()}var de=pe,ge="undefined"!=typeof window?window:void 0,ye=ge||{},he=ye.MutationObserver||ye.WebKitMutationObserver,ve="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),me="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function we(){var e=t.nextTick,r=t.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);return Array.isArray(r)&&"0"===r[1]&&"10"===r[2]&&(e=setImmediate),function(){e(je)}}function _e(){return function(){ce(je)}}function be(){var e=0,t=new he(je),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){r.data=e=++e%2}}function xe(){var e=new MessageChannel;return e.port1.onmessage=je,function(){e.port2.postMessage(0)}}function Te(){return function(){setTimeout(je,1)}}var Ee=new Array(1e3);function je(){for(var e=0;e<fe;e+=2){var t=Ee[e],r=Ee[e+1];t(r),Ee[e]=void 0,Ee[e+1]=void 0}fe=0}function ke(){try{var t=e,r=t("vertx");return ce=r.runOnLoop||r.runOnContext,_e()}catch(n){return Te()}}var Ae;Ae=ve?we():he?be():me?xe():void 0===ge&&"function"==typeof e?ke():Te();function Ce(e){var t={};return t.promise=new oe(function(e,r){t.resolve=e,t.reject=r},e),t}var Pe=Ce;function Se(e,t,r){return oe.all(e,r).then(function(e){if(!o(t))throw new TypeError("You must pass a function as filter's second argument.");for(var n=e.length,i=new Array(n),a=0;a<n;a++)i[a]=t(e[a]);return oe.all(i,r).then(function(t){for(var r=new Array(n),o=0,i=0;i<n;i++)t[i]&&(r[o]=e[i],o++);return r.length=o,r})})}var Ie=Se;function Me(e,t,r){this._superConstructor(e,t,!0,r)}var De=Me;Me.prototype=l(q.prototype),Me.prototype._superConstructor=q,Me.prototype._init=function(){this._result={}},Me.prototype._validateInput=function(e){return e&&"object"==typeof e},Me.prototype._validationError=function(){return new Error("Promise.hash must be called with an object")},Me.prototype._enumerate=function(){var e=this,t=e.promise,r=e._input,n=[];for(var o in r)t._state===x&&Object.prototype.hasOwnProperty.call(r,o)&&n.push({position:o,entry:r[o]});var i=n.length;e._remaining=i;for(var a,u=0;t._state===x&&u<i;u++)a=n[u],e._eachEntry(a.entry,a.position)};function Be(e,t,r){this._superConstructor(e,t,!1,r)}Be.prototype=l(De.prototype),Be.prototype._superConstructor=q,Be.prototype._makeResult=H,Be.prototype._validationError=function(){return new Error("hashSettled must be called with an object")};function Le(e,t){return new Be(oe,e,t).promise}var Oe=Le;function Re(e,t){return new De(oe,e,t).promise}var Ne=Re;function Fe(e,t,r){return oe.all(e,r).then(function(e){if(!o(t))throw new TypeError("You must pass a function as map's second argument.");for(var n=e.length,i=new Array(n),a=0;a<n;a++)i[a]=t(e[a]);return oe.all(i,r)})}var We=Fe;function Qe(){this.value=void 0}var He=new Qe,Ue=new Qe;function qe(e){try{return e.then}catch(t){return He.value=t,He}}function ze(e,t,r){try{e.apply(t,r)}catch(n){return He.value=n,He}}function Ve(e,t){for(var r,n,o={},i=e.length,a=new Array(i),u=0;u<i;u++)a[u]=e[u];for(n=0;n<t.length;n++)r=t[n],o[r]=a[n+1];return o}function Ye(e){for(var t=e.length,r=new Array(t-1),n=1;n<t;n++)r[n-1]=e[n];return r}function Ke(e,t){return{then:function(r,n){return e.call(t,r,n)}}}function Ge(e,t){var r=function(){for(var r,n=this,o=arguments.length,i=new Array(o+1),a=!1,s=0;s<o;++s){if(r=arguments[s],!a){if(a=Ze(r),a===Ue){var c=new oe(b);return B(c,Ue.value),c}a&&a!==!0&&(r=Ke(a,r))}i[s]=r}var l=new oe(b);return i[o]=function(e,r){e?B(l,e):void 0===t?I(l,r):t===!0?I(l,Ye(arguments)):u(t)?I(l,Ve(arguments,t)):I(l,r)},a?Xe(l,i,e,n):$e(l,i,e,n)};return r.__proto__=e,r}var Je=Ge;function $e(e,t,r,n){var o=ze(r,n,t);return o===He&&B(e,o.value),e}function Xe(e,t,r,n){return oe.all(t).then(function(t){var o=ze(r,n,t);return o===He&&B(e,o.value),e})}function Ze(e){return!(!e||"object"!=typeof e)&&(e.constructor===oe||qe(e))}var et;if("object"==typeof self)et=self;else{if("object"!=typeof r)throw new Error("no global: `self` or `global` found");et=r}function tt(e,t){return oe.race(e,t)}var rt=tt;function nt(e,t){return oe.reject(e,t)}var ot=nt;function it(e,t){return oe.resolve(e,t)}var at=it;function ut(e){throw setTimeout(function(){throw e}),e}var st=ut;g.async=de,g.after=function(e){setTimeout(e,0)};function ct(e,t){g.async(e,t)}function lt(){g.on.apply(g,arguments)}function ft(){g.off.apply(g,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var pt=window.__PROMISE_INSTRUMENTATION__;y("instrument",!0);for(var dt in pt)pt.hasOwnProperty(dt)&&lt(dt,pt[dt])}var gt={race:rt,Promise:oe,allSettled:ue,hash:Ne,hashSettled:Oe,denodeify:Je,on:lt,off:ft,map:We,filter:Ie,resolve:at,reject:ot,all:le,rethrow:st,defer:Pe,EventTarget:d,configure:y,async:ct};return gt}(),c=function(){function e(e,t){this._eventsBase=e,this._promiseManager=t}return e.prototype.async=function(e,t,r,n){var o;try{o=this._eventsBase.triggerHandler(e,t)}catch(i){n&&n()}this._promiseManager.Promise.resolve(o).then(r,n)},e.prototype.sync=function(e,t,r){var n=t&&t.asyncCallback;n&&(t.__asyncResults=[]);var o=this._eventsBase.triggerHandler(e,t);if(n&&(o=this._promiseManager.all(t.__asyncResults).then(function(e){return e[e.length-1]})),void 0==o)return r;return o},e}();i.EventsTrigger=c;var l=function(){function e(e){this._eventsBase=e}return e.prototype.on=function(e,t){var r=f(t);this._eventsBase.on(e,r)},e.prototype.once=function(e,t){var r=f(t);this._eventsBase.one(e,r)},e.prototype.off=function(e,t){var r=d(t);this._eventsBase.off(e,r)},e}();i.EventsListener=l;function f(e){return e.__wmEventWrapped||(e.__wmEventWrapped=p(e)),e.__wmEventWrapped}function p(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r-0]=arguments[r];var n=e.apply(this,t),o=(t[0],t[1]);return o&&o.__asyncResults&&o.__asyncResults.push(n),n}}function d(e){return e&&e.__wmEventWrapped||e}var g=function(){function e(e,t,r){this.PluginsManager=t,this._configs=new this.PluginsManager(r),this._plugins=new this.PluginsManager(r),this.ctx=e.ctx,this.di=e.di}return e.prototype.config=function(e){this._configs.register(e)},e.prototype.plugin=function(e){this._plugins.register(e)},e.prototype.start=function(e){var t=this._configs,r=this._plugins,n=t.run(e);return n.then(function(){return r.run(e)}).then(this.callWalkmePreLibLoaded)["catch"](this.logError),n},e.prototype.callWalkmePreLibLoaded=function(){window.walkme_pre_lib_loaded&&window.walkme_pre_lib_loaded()},e.prototype.logError=function(e){n.ctx.has("PrelibLogger")&&n.ctx.get("PrelibLogger").write("Prelib encountered an error while loading: "+e+"\nDetails:\n"+e.stack)},e}();i.LegoDI=g,a.register("PromiseManager").asInstance(s),a.register("Promise").asCtor(s.Promise).asProto(),n=new g(window._walkmeInternals,u,s);var y=wmjQuery({}),h=new c(y,s),v=new l(y);window._walkmeInternals.events={listener:v,trigger:h,_eventsBase:y},n.ctx.register("EventsTrigger").asInstance(h),n.ctx.register("EventsListener").asInstance(v),n.ctx.register("PrelibLogger").asInstance(o)}(),e("wm-plugin-branch-io")(i),e("wm-plugin-multiple-permalink-params")(i),e("wm-plugin-pre-populate")(i);var u=function(){var e,t=window.wmSnippet||window.wmPlaySnippet||window.wmPreviewSnippet;return t&&(e=t.getSettingsFile()),e||(e={}),e}();n.start(u)}()}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:1,"wm-di":2,"wm-plugin-branch-io":10,"wm-plugin-multiple-permalink-params":11,"wm-plugin-pre-populate":12,"wm-prelib-logger":3}],5:[function(e,t,r){var n,o=function(){function e(e){var t=this;this._ctx=e,this._promiseManager=this._ctx.get("PromiseManager"),this._eventsListener=this._ctx.get("EventsListener"),this._eventsTrigger=this._ctx.get("EventsTrigger"),this._logger=this._ctx.get("PrelibLogger"),this._funcArray=[],this._eventsListener.on("DataLoadedEvent",function(){return t._siteConfig=e.get("SiteConfigManager").get(),t.generatePromise()})}return e.prototype.registerFunction=function(e){this._funcArray.push(e)},e.prototype.generatePromise=function(){for(var e=[],t=0;t<this._funcArray.length;t++){var r=this._funcArray[t](this._siteConfig);r&&e.push(r)}return this._promiseManager.all(e)},e}();t.exports=function(e){return n?n:n=new o(e)}},{}],6:[function(e,t,r){"use strict";var n=e("wm-prelib-plugin-entry-manager"),o=e("./logger").log,i=function(){function e(){this.formHandlerCreated=[]}return e.prototype.getHTML=function(e,t,r,n){switch(t.toLowerCase()){case"sendsms":return this.parseSendSMS(r,n);case"phone":return this.parsePhone(r,t);case"submit":return this.parseSubmit(r,n);default:o("Unhandled tag: ",t)}},e.prototype.init=function(e){this.phoneId="",this.config=e},e.prototype.parseSendSMS=function(e,t){var r=["id","class","data-key","data-stop"],n=this.parseAttributesAndProperties(r,e),i=n.attributes,a=n.properties;if(!a.id)return o("ID is mandatory for the [sendsms] BBCode tag"),"";if(this.bindEventsToFormTag(a.id),!a["data-key"])return o("No Key attribute defined in sendSMS BBCode Tag."),"";return this.key=a["data-key"],window.branch&&window.branch.init(this.key),"<form "+i+">"+t+"</form>"},e.prototype.parsePhone=function(e,t){var r=this.parseAttributesAndProperties(["id","class","placeholder"],e),n=r.attributes,i=r.properties;return i.id?(this.phoneId=i.id,"<input "+n+' name="'+this.phoneId+'" type="tel" data-'+t+'="'+e+'"/>'):(o("ID of the [phone] tag is mandatory."),"")},e.prototype.parseSubmit=function(e,t){var r=this.parseAttributesAndProperties(["id","class"],e),n=r.attributes;r.properties;return'<input type="submit" data-submit-sms '+n+' value="'+t+'"></input>'},e.prototype.parseAttributesAndProperties=function(e,t){var r=n.getCtx().get("BBCodeUtils").getStrictProperties(e,t),o=n.getCtx().get("BBCodeUtils").generateCustomTagAttributes(r);return{attributes:o,properties:r}},e.prototype.bindEventsToFormTag=function(e){if(wmjQuery.inArray(e,this.formHandlerCreated)>-1)return void o("Custom form events already created for #"+e);this.formHandlerCreated.push(e),this.createFormHandler(e),this.preventBalloonWiggle(e)},e.prototype.createFormHandler=function(e){var t=this;wmjQuery(document).on("submit","#"+e,function(e){e.preventDefault();var r=(wmjQuery(this).data("key"),wmjQuery(this).find('input[type="tel"]')[0]);return""!==r.value?(window.branch&&window.branch.sendSMS(r.value,t.config.linkData,t.config.options,t.formSentCallback),r.value="",wmjQuery(this).data("stop")===!0&&(o("Stopping WT from the plugin. Check the BBCode for the tag data-stop and remove it in order to prevent this action."),WalkMeAPI.stopWalkthru())):o("Destination phone is empty"),!1})},e.prototype.preventBalloonWiggle=function(e){n.getCtx().get("EventsListener").on("showStepBalloon",function(t,r){wmjQuery("#"+e).on("click mousedown mouseup",function(e){o("Preventing wiggle"),e.stopPropagation()})})},e.prototype.formSentCallback=function(e,t){if(e)return void o("Something went wrong with the communication.",e,t);o("SMS sent")},e}();r.handler=new i},{"./logger":9,"wm-prelib-plugin-entry-manager":13}],7:[function(e,t,r){var n=e("wm-prelib-plugin-entry-manager").getCtx,o=(e("./logger").log,e("./loadBranchIO").loadBranchIO),i=e("./bbcSmsForm").handler,a=e("wm-pause-lib-after-storage")(n());function u(){var e=this;e.run=c;var t,r,u={linkData:{channel:"sms",tags:[],campaign:"",feature:"",data:{}},loadBranchIOScript:!1};function s(){t=n().get("EventsListener")}function c(){return a.registerFunction(wmjQuery.proxy(l,this)),n().decorate("BBTagHandlerProvider",f),null}function l(e){var t=e.Custom;r=wmjQuery.extend({},u,t.BBCsms||{}),"false"!==r.loadBranchIOScript.toString().toLowerCase()&&o()}function f(e){e.originalGet=e.get;var t=["phone","submit","sendsms"];return e.get=function(n){if(wmjQuery.inArray(n.toLowerCase(),t)>-1)return i.init(r),i;return e.originalGet.apply(e,arguments)},e}s()}r.BranchIO=u},{"./bbcSmsForm":6,"./loadBranchIO":8,"./logger":9,"wm-pause-lib-after-storage":5,"wm-prelib-plugin-entry-manager":13}],8:[function(e,t,r){function n(){!function(e,t,r,n,o,i,a,u,s,c){if(!e[n]||!e[n]._q){for(;u<a.length;)o(i,a[u++]);s=t.createElement(r),s.async=1,s.src="https://cdn.branch.io/branch-latest.min.js",c=t.getElementsByTagName(r)[0],c.parentNode.insertBefore(s,c),e[n]=i}}(window,document,"script","branch",function(e,t){e[t]=function(){e._q.push([t,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode".split(" "),0)}r.loadBranchIO=n},{}],9:[function(e,t,r){var n=e("wm-prelib-plugin-entry-manager").getCtx,o=n().get("PrelibLogger");function i(){var e=Array().slice.call(arguments);e.unshift("[ BranchIO ]"),o.write.apply(o,e)}r.log=i},{"wm-prelib-plugin-entry-manager":13}],10:[function(e,t,r){var n=e("wm-prelib-plugin-entry-manager").createPluginEntry;t.exports=n(function(t){var r=e("./branchIO.js").BranchIO;t(new r)})},{"./branchIO.js":7,"wm-prelib-plugin-entry-manager":13}],11:[function(e,t,r){!function(e,r){"object"==typeof t&&"object"==typeof t.exports?t.exports=r:e.multiplePermalinkParamsPlugin=r}(this,function(e){var t=e(),r=(t.ctx,t.di,function(){function e(){this._promiseManager=t.ctx.get("PromiseManager"),this._eventsListener=t.ctx.get("EventsListener"),this._eventsTrigger=t.ctx.get("EventsTrigger"),this._logger=t.ctx.get("PrelibLogger"),this._deployableArr=[]}return e.prototype.run=function(){var e=this;return t.ctx.decorate("PermalinkString",function(r){if(e._deployableTypes=t.ctx.get("DeployableTypes"),e._deployablesManagerFactory=t.ctx.get("DeployablesManagerFactory"),e.setPemraPerams(r),e._deployableArr.length>0){e._logger.write(e._deployableArr.length+" deployables found");var n=e.getValidDeployable();return n}return r}),null},e.prototype.getValidDeployable=function(){for(var e=0;e<this._deployableArr.length;e++){this._logger.write("validating deployable: "+this._deployableArr[e].deployableId+" ,type: "+this._deployableArr[e].deployableType);var t=this.isValidDeployable(this._deployableArr[e]);if(t)return this._logger.write("deployable: "+this._deployableArr[e].deployableId+" is valid"),this._deployableArr[e].resultStr;this._logger.write("deployable: "+this._deployableArr[e].deployableId+" not valid")}},e.prototype.isValidDeployable=function(e){var t=this._deployablesManagerFactory.get(e.deployableType);if(!t)return!1;var r=t.getById(e.deployableId);if(!r)return!1;return!0},e.prototype.setPemraPerams=function(e){var t,r,n=this.getPermalinkRegex();do t=n.exec(e),t&&t.length>1&&(r=t[0],(t[0].indexOf("A")>-1||t[0].indexOf("B")>-1)&&(r=t[2]?"walkme="+t[2]:"walkme="+t[1]),this._deployableArr.push({resultStr:r,deployableId:t[2]||t[1],deployableType:t[2]?t[1]:this._deployableTypes.Tutorial}));while(t)},e.prototype.getPermalinkRegex=function(){var e,r=t.ctx.get("SiteConfigManager").get(),n=t.ctx.get("Consts");return e=r.IsDisplayPoweredBy===n.IS_DISPLAY_POWERED_BY.Hide?/(?:walkme|walkthroughid)[AB]?=([0-9]+)-?([0-9]*)/g:/walkme[AB]?=([0-9]+)-?([0-9]*)/g},e}());t.plugin(new r)})},{}],12:[function(e,t,r){!function(e,r){"object"==typeof t&&"object"==typeof t.exports?t.exports=r:e.prePopulatePlugin=r}(this,function(e){var t=e(),r=(t.ctx,t.di,function(){function e(){this._promiseManager=t.ctx.get("PromiseManager"),this._eventsListener=t.ctx.get("EventsListener"),this._eventsTrigger=t.ctx.get("EventsTrigger"),this._logger=t.ctx.get("PrelibLogger")}return e.prototype.run=function(){return this.decorateTextInject(),this.decorateTriggersManager(),null},e.prototype.decorateTriggersManager=function(){var r=this;t.ctx.decorate("TriggersManager",function(t){var n=t.getDelay;return t.getDelay=function(t){if(r.isWTprePopulate()&&r.isStepSelfExecute(t))return r._logger.write("Setting minimal time for self execute step of PrePopulate walkthru. Step ID: "+t.Id),t.Settings.reactionTime=e.MIN_TIME,e.MIN_TIME;n.apply(null,arguments)},t})},e.prototype.isStepSelfExecute=function(e){var r=t.ctx.get("SettingsValuesRetriever");return r.getSettingsValue(e.Settings,"isSelfExecuting",!1)},e.prototype.isWTprePopulate=function(){if(window._makeTutorial&&window._makeTutorial.getCurrentTutorial()){var e=window._makeTutorial.getCurrentTutorial();if(e&&e.CustomField1){var r=t.ctx.get("CommonUtils"),n=r.secureEvalJSON(e.CustomField1.replace(/&quot;/g,'"')),o=n&&n.prePopulateWT;return o}}},e.prototype.findMenuElement=function(e,t){var r;return t.each(function(t){var n=wmjQuery(this).text().toLowerCase().trim();n=n.split(" ").join("");var o=encodeURI(n);if(e==o)return r=this}),r},e.prototype.isElementAngularDropdownToggle=function(e){return window.angular&&wmjQuery(e).hasClass("dropdown-toggle")&&wmjQuery(e).is("button")},e.prototype.decorateTextInject=function(){var e=this;t.ctx.decorate("TextInjector",function(t){var r=t.injectText;return t.injectText=function(t,n,o){if(o&&o.textArray&&o.textArray[0]&&e.isElementAngularDropdownToggle(t)){for(var i=o.textArray[0].split("›"),a=0,u=t;a<i.length;){var s=wmjQuery(u).siblings("ul").children("li").children("a");if(u=e.findMenuElement(i[a],s),!u){e._logger.write("Failed to match menu element for step with description"+o.textArray[0]);break}a++}u?window.angular.element(u).triggerHandler("click"):e._logger.write("Unable to match menu element for step with description"+o.textArray[0])}else r.apply(null,arguments)},t})},e.MIN_TIME=1e-5,e}());t.plugin(new r)})},{}],13:[function(e,t,r){"use strict";var n,o={createPluginEntry:i,getCtx:a};function i(e){return function(t){n=t(),e(u)}}function a(){return n.ctx}function u(e){n.plugin(e)}r.__esModule=!0,r["default"]=o,r.createPluginEntry=o.createPluginEntry,r.getCtx=o.getCtx},{}]},{},[4]);