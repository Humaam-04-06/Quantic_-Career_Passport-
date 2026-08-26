function Bw(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function uS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fS={exports:{}},Gh={},dS={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu=Symbol.for("react.element"),Vw=Symbol.for("react.portal"),Hw=Symbol.for("react.fragment"),Gw=Symbol.for("react.strict_mode"),Ww=Symbol.for("react.profiler"),jw=Symbol.for("react.provider"),Xw=Symbol.for("react.context"),$w=Symbol.for("react.forward_ref"),Yw=Symbol.for("react.suspense"),qw=Symbol.for("react.memo"),Kw=Symbol.for("react.lazy"),Cv=Symbol.iterator;function Zw(t){return t===null||typeof t!="object"?null:(t=Cv&&t[Cv]||t["@@iterator"],typeof t=="function"?t:null)}var hS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pS=Object.assign,mS={};function cc(t,e,n){this.props=t,this.context=e,this.refs=mS,this.updater=n||hS}cc.prototype.isReactComponent={};cc.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cc.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gS(){}gS.prototype=cc.prototype;function R_(t,e,n){this.props=t,this.context=e,this.refs=mS,this.updater=n||hS}var P_=R_.prototype=new gS;P_.constructor=R_;pS(P_,cc.prototype);P_.isPureReactComponent=!0;var Rv=Array.isArray,_S=Object.prototype.hasOwnProperty,N_={current:null},xS={key:!0,ref:!0,__self:!0,__source:!0};function vS(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)_S.call(e,i)&&!xS.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Zu,type:t,key:s,ref:a,props:r,_owner:N_.current}}function Qw(t,e){return{$$typeof:Zu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function D_(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zu}function Jw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pv=/\/+/g;function Ep(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jw(""+t.key):e.toString(36)}function vd(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Zu:case Vw:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ep(a,0):i,Rv(r)?(n="",t!=null&&(n=t.replace(Pv,"$&/")+"/"),vd(r,e,n,"",function(c){return c})):r!=null&&(D_(r)&&(r=Qw(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Pv,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Rv(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ep(s,o);a+=vd(s,e,n,l,r)}else if(l=Zw(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ep(s,o++),a+=vd(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function hf(t,e,n){if(t==null)return t;var i=[],r=0;return vd(t,i,"","",function(s){return e.call(n,s,r++)}),i}function eT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mi={current:null},yd={transition:null},tT={ReactCurrentDispatcher:mi,ReactCurrentBatchConfig:yd,ReactCurrentOwner:N_};function yS(){throw Error("act(...) is not supported in production builds of React.")}ft.Children={map:hf,forEach:function(t,e,n){hf(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hf(t,function(){e++}),e},toArray:function(t){return hf(t,function(e){return e})||[]},only:function(t){if(!D_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ft.Component=cc;ft.Fragment=Hw;ft.Profiler=Ww;ft.PureComponent=R_;ft.StrictMode=Gw;ft.Suspense=Yw;ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tT;ft.act=yS;ft.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=pS({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=N_.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)_S.call(e,l)&&!xS.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Zu,type:t.type,key:r,ref:s,props:i,_owner:a}};ft.createContext=function(t){return t={$$typeof:Xw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jw,_context:t},t.Consumer=t};ft.createElement=vS;ft.createFactory=function(t){var e=vS.bind(null,t);return e.type=t,e};ft.createRef=function(){return{current:null}};ft.forwardRef=function(t){return{$$typeof:$w,render:t}};ft.isValidElement=D_;ft.lazy=function(t){return{$$typeof:Kw,_payload:{_status:-1,_result:t},_init:eT}};ft.memo=function(t,e){return{$$typeof:qw,type:t,compare:e===void 0?null:e}};ft.startTransition=function(t){var e=yd.transition;yd.transition={};try{t()}finally{yd.transition=e}};ft.unstable_act=yS;ft.useCallback=function(t,e){return mi.current.useCallback(t,e)};ft.useContext=function(t){return mi.current.useContext(t)};ft.useDebugValue=function(){};ft.useDeferredValue=function(t){return mi.current.useDeferredValue(t)};ft.useEffect=function(t,e){return mi.current.useEffect(t,e)};ft.useId=function(){return mi.current.useId()};ft.useImperativeHandle=function(t,e,n){return mi.current.useImperativeHandle(t,e,n)};ft.useInsertionEffect=function(t,e){return mi.current.useInsertionEffect(t,e)};ft.useLayoutEffect=function(t,e){return mi.current.useLayoutEffect(t,e)};ft.useMemo=function(t,e){return mi.current.useMemo(t,e)};ft.useReducer=function(t,e,n){return mi.current.useReducer(t,e,n)};ft.useRef=function(t){return mi.current.useRef(t)};ft.useState=function(t){return mi.current.useState(t)};ft.useSyncExternalStore=function(t,e,n){return mi.current.useSyncExternalStore(t,e,n)};ft.useTransition=function(){return mi.current.useTransition()};ft.version="18.3.1";dS.exports=ft;var J=dS.exports;const Wh=uS(J),nT=Bw({__proto__:null,default:Wh},[J]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iT=J,rT=Symbol.for("react.element"),sT=Symbol.for("react.fragment"),aT=Object.prototype.hasOwnProperty,oT=iT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lT={key:!0,ref:!0,__self:!0,__source:!0};function SS(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)aT.call(e,i)&&!lT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:rT,type:t,key:s,ref:a,props:r,_owner:oT.current}}Gh.Fragment=sT;Gh.jsx=SS;Gh.jsxs=SS;fS.exports=Gh;var E=fS.exports,Km={},ES={exports:{}},Ki={},MS={exports:{}},bS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,W){var P=I.length;I.push(W);e:for(;0<P;){var ie=P-1>>>1,fe=I[ie];if(0<r(fe,W))I[ie]=W,I[P]=fe,P=ie;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var W=I[0],P=I.pop();if(P!==W){I[0]=P;e:for(var ie=0,fe=I.length,$e=fe>>>1;ie<$e;){var Ge=2*(ie+1)-1,We=I[Ge],Z=Ge+1,oe=I[Z];if(0>r(We,P))Z<fe&&0>r(oe,We)?(I[ie]=oe,I[Z]=P,ie=Z):(I[ie]=We,I[Ge]=P,ie=Ge);else if(Z<fe&&0>r(oe,P))I[ie]=oe,I[Z]=P,ie=Z;else break e}}return W}function r(I,W){var P=I.sortIndex-W.sortIndex;return P!==0?P:I.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,d=null,f=3,h=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=I)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function v(I){if(_=!1,y(I),!g)if(n(l)!==null)g=!0,X(b);else{var W=n(c);W!==null&&U(v,W.startTime-I)}}function b(I,W){g=!1,_&&(_=!1,p(S),S=-1),h=!0;var P=f;try{for(y(W),d=n(l);d!==null&&(!(d.expirationTime>W)||I&&!D());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var fe=ie(d.expirationTime<=W);W=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(l)&&i(l),y(W)}else i(l);d=n(l)}if(d!==null)var $e=!0;else{var Ge=n(c);Ge!==null&&U(v,Ge.startTime-W),$e=!1}return $e}finally{d=null,f=P,h=!1}}var T=!1,w=null,S=-1,A=5,R=-1;function D(){return!(t.unstable_now()-R<A)}function L(){if(w!==null){var I=t.unstable_now();R=I;var W=!0;try{W=w(!0,I)}finally{W?G():(T=!1,w=null)}}else T=!1}var G;if(typeof x=="function")G=function(){x(L)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,k=Y.port2;Y.port1.onmessage=L,G=function(){k.postMessage(null)}}else G=function(){m(L,0)};function X(I){w=I,T||(T=!0,G())}function U(I,W){S=m(function(){I(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,X(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var P=f;f=W;try{return I()}finally{f=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=f;f=I;try{return W()}finally{f=P}},t.unstable_scheduleCallback=function(I,W,P){var ie=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ie+P:ie):P=ie,I){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=P+fe,I={id:u++,callback:W,priorityLevel:I,startTime:P,expirationTime:fe,sortIndex:-1},P>ie?(I.sortIndex=P,e(c,I),n(l)===null&&I===n(c)&&(_?(p(S),S=-1):_=!0,U(v,P-ie))):(I.sortIndex=fe,e(l,I),g||h||(g=!0,X(b))),I},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(I){var W=f;return function(){var P=f;f=W;try{return I.apply(this,arguments)}finally{f=P}}}})(bS);MS.exports=bS;var cT=MS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uT=J,$i=cT;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wS=new Set,xu={};function Fo(t,e){jl(t,e),jl(t+"Capture",e)}function jl(t,e){for(xu[t]=e,t=0;t<e.length;t++)wS.add(e[t])}var Cs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zm=Object.prototype.hasOwnProperty,fT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nv={},Dv={};function dT(t){return Zm.call(Dv,t)?!0:Zm.call(Nv,t)?!1:fT.test(t)?Dv[t]=!0:(Nv[t]=!0,!1)}function hT(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pT(t,e,n,i){if(e===null||typeof e>"u"||hT(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gi(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vn[t]=new gi(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vn[e]=new gi(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vn[t]=new gi(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vn[t]=new gi(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vn[t]=new gi(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vn[t]=new gi(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vn[t]=new gi(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vn[t]=new gi(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vn[t]=new gi(t,5,!1,t.toLowerCase(),null,!1,!1)});var L_=/[\-:]([a-z])/g;function I_(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(L_,I_);Vn[e]=new gi(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(L_,I_);Vn[e]=new gi(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(L_,I_);Vn[e]=new gi(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vn[t]=new gi(t,1,!1,t.toLowerCase(),null,!1,!1)});Vn.xlinkHref=new gi("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vn[t]=new gi(t,1,!1,t.toLowerCase(),null,!0,!0)});function F_(t,e,n,i){var r=Vn.hasOwnProperty(e)?Vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pT(e,n,r,i)&&(n=null),i||r===null?dT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zs=uT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pf=Symbol.for("react.element"),dl=Symbol.for("react.portal"),hl=Symbol.for("react.fragment"),U_=Symbol.for("react.strict_mode"),Qm=Symbol.for("react.profiler"),TS=Symbol.for("react.provider"),AS=Symbol.for("react.context"),O_=Symbol.for("react.forward_ref"),Jm=Symbol.for("react.suspense"),e0=Symbol.for("react.suspense_list"),k_=Symbol.for("react.memo"),ta=Symbol.for("react.lazy"),CS=Symbol.for("react.offscreen"),Lv=Symbol.iterator;function gc(t){return t===null||typeof t!="object"?null:(t=Lv&&t[Lv]||t["@@iterator"],typeof t=="function"?t:null)}var Qt=Object.assign,Mp;function Ic(t){if(Mp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mp=e&&e[1]||""}return`
`+Mp+t}var bp=!1;function wp(t,e){if(!t||bp)return"";bp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{bp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ic(t):""}function mT(t){switch(t.tag){case 5:return Ic(t.type);case 16:return Ic("Lazy");case 13:return Ic("Suspense");case 19:return Ic("SuspenseList");case 0:case 2:case 15:return t=wp(t.type,!1),t;case 11:return t=wp(t.type.render,!1),t;case 1:return t=wp(t.type,!0),t;default:return""}}function t0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hl:return"Fragment";case dl:return"Portal";case Qm:return"Profiler";case U_:return"StrictMode";case Jm:return"Suspense";case e0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case AS:return(t.displayName||"Context")+".Consumer";case TS:return(t._context.displayName||"Context")+".Provider";case O_:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k_:return e=t.displayName||null,e!==null?e:t0(t.type)||"Memo";case ta:e=t._payload,t=t._init;try{return t0(t(e))}catch{}}return null}function gT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return t0(e);case 8:return e===U_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ra(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function RS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _T(t){var e=RS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mf(t){t._valueTracker||(t._valueTracker=_T(t))}function PS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=RS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function qd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function n0(t,e){var n=e.checked;return Qt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Iv(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ra(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function NS(t,e){e=e.checked,e!=null&&F_(t,"checked",e,!1)}function i0(t,e){NS(t,e);var n=Ra(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?r0(t,e.type,n):e.hasOwnProperty("defaultValue")&&r0(t,e.type,Ra(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function r0(t,e,n){(e!=="number"||qd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fc=Array.isArray;function Cl(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ra(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function s0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return Qt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(Fc(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ra(n)}}function DS(t,e){var n=Ra(e.value),i=Ra(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ov(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function LS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function a0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?LS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gf,IS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gf=gf||document.createElement("div"),gf.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gf.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xT=["Webkit","ms","Moz","O"];Object.keys(Yc).forEach(function(t){xT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yc[e]=Yc[t]})});function FS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yc.hasOwnProperty(t)&&Yc[t]?(""+e).trim():e+"px"}function US(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=FS(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var vT=Qt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function o0(t,e){if(e){if(vT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function l0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var c0=null;function z_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var u0=null,Rl=null,Pl=null;function kv(t){if(t=ef(t)){if(typeof u0!="function")throw Error(he(280));var e=t.stateNode;e&&(e=qh(e),u0(t.stateNode,t.type,e))}}function OS(t){Rl?Pl?Pl.push(t):Pl=[t]:Rl=t}function kS(){if(Rl){var t=Rl,e=Pl;if(Pl=Rl=null,kv(t),e)for(t=0;t<e.length;t++)kv(e[t])}}function zS(t,e){return t(e)}function BS(){}var Tp=!1;function VS(t,e,n){if(Tp)return t(e,n);Tp=!0;try{return zS(t,e,n)}finally{Tp=!1,(Rl!==null||Pl!==null)&&(BS(),kS())}}function yu(t,e){var n=t.stateNode;if(n===null)return null;var i=qh(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var f0=!1;if(Cs)try{var _c={};Object.defineProperty(_c,"passive",{get:function(){f0=!0}}),window.addEventListener("test",_c,_c),window.removeEventListener("test",_c,_c)}catch{f0=!1}function yT(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var qc=!1,Kd=null,Zd=!1,d0=null,ST={onError:function(t){qc=!0,Kd=t}};function ET(t,e,n,i,r,s,a,o,l){qc=!1,Kd=null,yT.apply(ST,arguments)}function MT(t,e,n,i,r,s,a,o,l){if(ET.apply(this,arguments),qc){if(qc){var c=Kd;qc=!1,Kd=null}else throw Error(he(198));Zd||(Zd=!0,d0=c)}}function Uo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function HS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zv(t){if(Uo(t)!==t)throw Error(he(188))}function bT(t){var e=t.alternate;if(!e){if(e=Uo(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zv(r),t;if(s===i)return zv(r),e;s=s.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function GS(t){return t=bT(t),t!==null?WS(t):null}function WS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=WS(t);if(e!==null)return e;t=t.sibling}return null}var jS=$i.unstable_scheduleCallback,Bv=$i.unstable_cancelCallback,wT=$i.unstable_shouldYield,TT=$i.unstable_requestPaint,cn=$i.unstable_now,AT=$i.unstable_getCurrentPriorityLevel,B_=$i.unstable_ImmediatePriority,XS=$i.unstable_UserBlockingPriority,Qd=$i.unstable_NormalPriority,CT=$i.unstable_LowPriority,$S=$i.unstable_IdlePriority,jh=null,Qr=null;function RT(t){if(Qr&&typeof Qr.onCommitFiberRoot=="function")try{Qr.onCommitFiberRoot(jh,t,void 0,(t.current.flags&128)===128)}catch{}}var Ar=Math.clz32?Math.clz32:DT,PT=Math.log,NT=Math.LN2;function DT(t){return t>>>=0,t===0?32:31-(PT(t)/NT|0)|0}var _f=64,xf=4194304;function Uc(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jd(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Uc(o):(s&=a,s!==0&&(i=Uc(s)))}else a=n&~r,a!==0?i=Uc(a):s!==0&&(i=Uc(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ar(e),r=1<<n,i|=t[n],e&=~r;return i}function LT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Ar(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=LT(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function h0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function YS(){var t=_f;return _f<<=1,!(_f&4194240)&&(_f=64),t}function Ap(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ar(e),t[e]=n}function FT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ar(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function V_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ar(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Tt=0;function qS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var KS,H_,ZS,QS,JS,p0=!1,vf=[],_a=null,xa=null,va=null,Su=new Map,Eu=new Map,ra=[],UT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vv(t,e){switch(t){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":Su.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eu.delete(e.pointerId)}}function xc(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ef(e),e!==null&&H_(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function OT(t,e,n,i,r){switch(e){case"focusin":return _a=xc(_a,t,e,n,i,r),!0;case"dragenter":return xa=xc(xa,t,e,n,i,r),!0;case"mouseover":return va=xc(va,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Su.set(s,xc(Su.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Eu.set(s,xc(Eu.get(s)||null,t,e,n,i,r)),!0}return!1}function eE(t){var e=ro(t.target);if(e!==null){var n=Uo(e);if(n!==null){if(e=n.tag,e===13){if(e=HS(n),e!==null){t.blockedOn=e,JS(t.priority,function(){ZS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=m0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);c0=i,n.target.dispatchEvent(i),c0=null}else return e=ef(n),e!==null&&H_(e),t.blockedOn=n,!1;e.shift()}return!0}function Hv(t,e,n){Sd(t)&&n.delete(e)}function kT(){p0=!1,_a!==null&&Sd(_a)&&(_a=null),xa!==null&&Sd(xa)&&(xa=null),va!==null&&Sd(va)&&(va=null),Su.forEach(Hv),Eu.forEach(Hv)}function vc(t,e){t.blockedOn===e&&(t.blockedOn=null,p0||(p0=!0,$i.unstable_scheduleCallback($i.unstable_NormalPriority,kT)))}function Mu(t){function e(r){return vc(r,t)}if(0<vf.length){vc(vf[0],t);for(var n=1;n<vf.length;n++){var i=vf[n];i.blockedOn===t&&(i.blockedOn=null)}}for(_a!==null&&vc(_a,t),xa!==null&&vc(xa,t),va!==null&&vc(va,t),Su.forEach(e),Eu.forEach(e),n=0;n<ra.length;n++)i=ra[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ra.length&&(n=ra[0],n.blockedOn===null);)eE(n),n.blockedOn===null&&ra.shift()}var Nl=zs.ReactCurrentBatchConfig,eh=!0;function zT(t,e,n,i){var r=Tt,s=Nl.transition;Nl.transition=null;try{Tt=1,G_(t,e,n,i)}finally{Tt=r,Nl.transition=s}}function BT(t,e,n,i){var r=Tt,s=Nl.transition;Nl.transition=null;try{Tt=4,G_(t,e,n,i)}finally{Tt=r,Nl.transition=s}}function G_(t,e,n,i){if(eh){var r=m0(t,e,n,i);if(r===null)Op(t,e,i,th,n),Vv(t,i);else if(OT(r,t,e,n,i))i.stopPropagation();else if(Vv(t,i),e&4&&-1<UT.indexOf(t)){for(;r!==null;){var s=ef(r);if(s!==null&&KS(s),s=m0(t,e,n,i),s===null&&Op(t,e,i,th,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Op(t,e,i,null,n)}}var th=null;function m0(t,e,n,i){if(th=null,t=z_(i),t=ro(t),t!==null)if(e=Uo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=HS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return th=t,null}function tE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AT()){case B_:return 1;case XS:return 4;case Qd:case CT:return 16;case $S:return 536870912;default:return 16}default:return 16}}var la=null,W_=null,Ed=null;function nE(){if(Ed)return Ed;var t,e=W_,n=e.length,i,r="value"in la?la.value:la.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ed=r.slice(t,1<i?1-i:void 0)}function Md(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yf(){return!0}function Gv(){return!1}function Zi(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yf:Gv,this.isPropagationStopped=Gv,this}return Qt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yf)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yf)},persist:function(){},isPersistent:yf}),e}var uc={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},j_=Zi(uc),Ju=Qt({},uc,{view:0,detail:0}),VT=Zi(Ju),Cp,Rp,yc,Xh=Qt({},Ju,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:X_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yc&&(yc&&t.type==="mousemove"?(Cp=t.screenX-yc.screenX,Rp=t.screenY-yc.screenY):Rp=Cp=0,yc=t),Cp)},movementY:function(t){return"movementY"in t?t.movementY:Rp}}),Wv=Zi(Xh),HT=Qt({},Xh,{dataTransfer:0}),GT=Zi(HT),WT=Qt({},Ju,{relatedTarget:0}),Pp=Zi(WT),jT=Qt({},uc,{animationName:0,elapsedTime:0,pseudoElement:0}),XT=Zi(jT),$T=Qt({},uc,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),YT=Zi($T),qT=Qt({},uc,{data:0}),jv=Zi(qT),KT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QT[t])?!!e[t]:!1}function X_(){return JT}var eA=Qt({},Ju,{key:function(t){if(t.key){var e=KT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Md(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ZT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:X_,charCode:function(t){return t.type==="keypress"?Md(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Md(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tA=Zi(eA),nA=Qt({},Xh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xv=Zi(nA),iA=Qt({},Ju,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:X_}),rA=Zi(iA),sA=Qt({},uc,{propertyName:0,elapsedTime:0,pseudoElement:0}),aA=Zi(sA),oA=Qt({},Xh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lA=Zi(oA),cA=[9,13,27,32],$_=Cs&&"CompositionEvent"in window,Kc=null;Cs&&"documentMode"in document&&(Kc=document.documentMode);var uA=Cs&&"TextEvent"in window&&!Kc,iE=Cs&&(!$_||Kc&&8<Kc&&11>=Kc),$v=" ",Yv=!1;function rE(t,e){switch(t){case"keyup":return cA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pl=!1;function fA(t,e){switch(t){case"compositionend":return sE(e);case"keypress":return e.which!==32?null:(Yv=!0,$v);case"textInput":return t=e.data,t===$v&&Yv?null:t;default:return null}}function dA(t,e){if(pl)return t==="compositionend"||!$_&&rE(t,e)?(t=nE(),Ed=W_=la=null,pl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iE&&e.locale!=="ko"?null:e.data;default:return null}}var hA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hA[t.type]:e==="textarea"}function aE(t,e,n,i){OS(i),e=nh(e,"onChange"),0<e.length&&(n=new j_("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Zc=null,bu=null;function pA(t){_E(t,0)}function $h(t){var e=_l(t);if(PS(e))return t}function mA(t,e){if(t==="change")return e}var oE=!1;if(Cs){var Np;if(Cs){var Dp="oninput"in document;if(!Dp){var Kv=document.createElement("div");Kv.setAttribute("oninput","return;"),Dp=typeof Kv.oninput=="function"}Np=Dp}else Np=!1;oE=Np&&(!document.documentMode||9<document.documentMode)}function Zv(){Zc&&(Zc.detachEvent("onpropertychange",lE),bu=Zc=null)}function lE(t){if(t.propertyName==="value"&&$h(bu)){var e=[];aE(e,bu,t,z_(t)),VS(pA,e)}}function gA(t,e,n){t==="focusin"?(Zv(),Zc=e,bu=n,Zc.attachEvent("onpropertychange",lE)):t==="focusout"&&Zv()}function _A(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $h(bu)}function xA(t,e){if(t==="click")return $h(e)}function vA(t,e){if(t==="input"||t==="change")return $h(e)}function yA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rr=typeof Object.is=="function"?Object.is:yA;function wu(t,e){if(Rr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Zm.call(e,r)||!Rr(t[r],e[r]))return!1}return!0}function Qv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jv(t,e){var n=Qv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qv(n)}}function cE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uE(){for(var t=window,e=qd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qd(t.document)}return e}function Y_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SA(t){var e=uE(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cE(n.ownerDocument.documentElement,n)){if(i!==null&&Y_(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jv(n,s);var a=Jv(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var EA=Cs&&"documentMode"in document&&11>=document.documentMode,ml=null,g0=null,Qc=null,_0=!1;function e1(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_0||ml==null||ml!==qd(i)||(i=ml,"selectionStart"in i&&Y_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qc&&wu(Qc,i)||(Qc=i,i=nh(g0,"onSelect"),0<i.length&&(e=new j_("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ml)))}function Sf(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gl={animationend:Sf("Animation","AnimationEnd"),animationiteration:Sf("Animation","AnimationIteration"),animationstart:Sf("Animation","AnimationStart"),transitionend:Sf("Transition","TransitionEnd")},Lp={},fE={};Cs&&(fE=document.createElement("div").style,"AnimationEvent"in window||(delete gl.animationend.animation,delete gl.animationiteration.animation,delete gl.animationstart.animation),"TransitionEvent"in window||delete gl.transitionend.transition);function Yh(t){if(Lp[t])return Lp[t];if(!gl[t])return t;var e=gl[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fE)return Lp[t]=e[n];return t}var dE=Yh("animationend"),hE=Yh("animationiteration"),pE=Yh("animationstart"),mE=Yh("transitionend"),gE=new Map,t1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function za(t,e){gE.set(t,e),Fo(e,[t])}for(var Ip=0;Ip<t1.length;Ip++){var Fp=t1[Ip],MA=Fp.toLowerCase(),bA=Fp[0].toUpperCase()+Fp.slice(1);za(MA,"on"+bA)}za(dE,"onAnimationEnd");za(hE,"onAnimationIteration");za(pE,"onAnimationStart");za("dblclick","onDoubleClick");za("focusin","onFocus");za("focusout","onBlur");za(mE,"onTransitionEnd");jl("onMouseEnter",["mouseout","mouseover"]);jl("onMouseLeave",["mouseout","mouseover"]);jl("onPointerEnter",["pointerout","pointerover"]);jl("onPointerLeave",["pointerout","pointerover"]);Fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oc));function n1(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,MT(i,e,void 0,t),t.currentTarget=null}function _E(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;n1(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;n1(r,o,c),s=l}}}if(Zd)throw t=d0,Zd=!1,d0=null,t}function Ht(t,e){var n=e[E0];n===void 0&&(n=e[E0]=new Set);var i=t+"__bubble";n.has(i)||(xE(e,t,2,!1),n.add(i))}function Up(t,e,n){var i=0;e&&(i|=4),xE(n,t,i,e)}var Ef="_reactListening"+Math.random().toString(36).slice(2);function Tu(t){if(!t[Ef]){t[Ef]=!0,wS.forEach(function(n){n!=="selectionchange"&&(wA.has(n)||Up(n,!1,t),Up(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ef]||(e[Ef]=!0,Up("selectionchange",!1,e))}}function xE(t,e,n,i){switch(tE(e)){case 1:var r=zT;break;case 4:r=BT;break;default:r=G_}n=r.bind(null,e,n,t),r=void 0,!f0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Op(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=ro(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}VS(function(){var c=s,u=z_(n),d=[];e:{var f=gE.get(t);if(f!==void 0){var h=j_,g=t;switch(t){case"keypress":if(Md(n)===0)break e;case"keydown":case"keyup":h=tA;break;case"focusin":g="focus",h=Pp;break;case"focusout":g="blur",h=Pp;break;case"beforeblur":case"afterblur":h=Pp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Wv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=GT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=rA;break;case dE:case hE:case pE:h=XT;break;case mE:h=aA;break;case"scroll":h=VT;break;case"wheel":h=lA;break;case"copy":case"cut":case"paste":h=YT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Xv}var _=(e&4)!==0,m=!_&&t==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var x=c,y;x!==null;){y=x;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,p!==null&&(v=yu(x,p),v!=null&&_.push(Au(x,v,y)))),m)break;x=x.return}0<_.length&&(f=new h(f,g,null,n,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==c0&&(g=n.relatedTarget||n.fromElement)&&(ro(g)||g[Rs]))break e;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=c,g=g?ro(g):null,g!==null&&(m=Uo(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=c),h!==g)){if(_=Wv,v="onMouseLeave",p="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=Xv,v="onPointerLeave",p="onPointerEnter",x="pointer"),m=h==null?f:_l(h),y=g==null?f:_l(g),f=new _(v,x+"leave",h,n,u),f.target=m,f.relatedTarget=y,v=null,ro(u)===c&&(_=new _(p,x+"enter",g,n,u),_.target=y,_.relatedTarget=m,v=_),m=v,h&&g)t:{for(_=h,p=g,x=0,y=_;y;y=Wo(y))x++;for(y=0,v=p;v;v=Wo(v))y++;for(;0<x-y;)_=Wo(_),x--;for(;0<y-x;)p=Wo(p),y--;for(;x--;){if(_===p||p!==null&&_===p.alternate)break t;_=Wo(_),p=Wo(p)}_=null}else _=null;h!==null&&i1(d,f,h,_,!1),g!==null&&m!==null&&i1(d,m,g,_,!0)}}e:{if(f=c?_l(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var b=mA;else if(qv(f))if(oE)b=vA;else{b=_A;var T=gA}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=xA);if(b&&(b=b(t,c))){aE(d,b,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&r0(f,"number",f.value)}switch(T=c?_l(c):window,t){case"focusin":(qv(T)||T.contentEditable==="true")&&(ml=T,g0=c,Qc=null);break;case"focusout":Qc=g0=ml=null;break;case"mousedown":_0=!0;break;case"contextmenu":case"mouseup":case"dragend":_0=!1,e1(d,n,u);break;case"selectionchange":if(EA)break;case"keydown":case"keyup":e1(d,n,u)}var w;if($_)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else pl?rE(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(iE&&n.locale!=="ko"&&(pl||S!=="onCompositionStart"?S==="onCompositionEnd"&&pl&&(w=nE()):(la=u,W_="value"in la?la.value:la.textContent,pl=!0)),T=nh(c,S),0<T.length&&(S=new jv(S,t,null,n,u),d.push({event:S,listeners:T}),w?S.data=w:(w=sE(n),w!==null&&(S.data=w)))),(w=uA?fA(t,n):dA(t,n))&&(c=nh(c,"onBeforeInput"),0<c.length&&(u=new jv("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=w))}_E(d,e)})}function Au(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nh(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=yu(t,n),s!=null&&i.unshift(Au(t,s,r)),s=yu(t,e),s!=null&&i.push(Au(t,s,r))),t=t.return}return i}function Wo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function i1(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=yu(n,s),l!=null&&a.unshift(Au(n,l,o))):r||(l=yu(n,s),l!=null&&a.push(Au(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var TA=/\r\n?/g,AA=/\u0000|\uFFFD/g;function r1(t){return(typeof t=="string"?t:""+t).replace(TA,`
`).replace(AA,"")}function Mf(t,e,n){if(e=r1(e),r1(t)!==e&&n)throw Error(he(425))}function ih(){}var x0=null,v0=null;function y0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var S0=typeof setTimeout=="function"?setTimeout:void 0,CA=typeof clearTimeout=="function"?clearTimeout:void 0,s1=typeof Promise=="function"?Promise:void 0,RA=typeof queueMicrotask=="function"?queueMicrotask:typeof s1<"u"?function(t){return s1.resolve(null).then(t).catch(PA)}:S0;function PA(t){setTimeout(function(){throw t})}function kp(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Mu(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Mu(e)}function ya(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function a1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fc=Math.random().toString(36).slice(2),Hr="__reactFiber$"+fc,Cu="__reactProps$"+fc,Rs="__reactContainer$"+fc,E0="__reactEvents$"+fc,NA="__reactListeners$"+fc,DA="__reactHandles$"+fc;function ro(t){var e=t[Hr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rs]||n[Hr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=a1(t);t!==null;){if(n=t[Hr])return n;t=a1(t)}return e}t=n,n=t.parentNode}return null}function ef(t){return t=t[Hr]||t[Rs],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _l(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function qh(t){return t[Cu]||null}var M0=[],xl=-1;function Ba(t){return{current:t}}function Gt(t){0>xl||(t.current=M0[xl],M0[xl]=null,xl--)}function kt(t,e){xl++,M0[xl]=t.current,t.current=e}var Pa={},ti=Ba(Pa),Ei=Ba(!1),Eo=Pa;function Xl(t,e){var n=t.type.contextTypes;if(!n)return Pa;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mi(t){return t=t.childContextTypes,t!=null}function rh(){Gt(Ei),Gt(ti)}function o1(t,e,n){if(ti.current!==Pa)throw Error(he(168));kt(ti,e),kt(Ei,n)}function vE(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,gT(t)||"Unknown",r));return Qt({},n,i)}function sh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pa,Eo=ti.current,kt(ti,t),kt(Ei,Ei.current),!0}function l1(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=vE(t,e,Eo),i.__reactInternalMemoizedMergedChildContext=t,Gt(Ei),Gt(ti),kt(ti,t)):Gt(Ei),kt(Ei,n)}var ps=null,Kh=!1,zp=!1;function yE(t){ps===null?ps=[t]:ps.push(t)}function LA(t){Kh=!0,yE(t)}function Va(){if(!zp&&ps!==null){zp=!0;var t=0,e=Tt;try{var n=ps;for(Tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ps=null,Kh=!1}catch(r){throw ps!==null&&(ps=ps.slice(t+1)),jS(B_,Va),r}finally{Tt=e,zp=!1}}return null}var vl=[],yl=0,ah=null,oh=0,rr=[],sr=0,Mo=null,vs=1,ys="";function Ka(t,e){vl[yl++]=oh,vl[yl++]=ah,ah=t,oh=e}function SE(t,e,n){rr[sr++]=vs,rr[sr++]=ys,rr[sr++]=Mo,Mo=t;var i=vs;t=ys;var r=32-Ar(i)-1;i&=~(1<<r),n+=1;var s=32-Ar(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,vs=1<<32-Ar(e)+r|n<<r|i,ys=s+t}else vs=1<<s|n<<r|i,ys=t}function q_(t){t.return!==null&&(Ka(t,1),SE(t,1,0))}function K_(t){for(;t===ah;)ah=vl[--yl],vl[yl]=null,oh=vl[--yl],vl[yl]=null;for(;t===Mo;)Mo=rr[--sr],rr[sr]=null,ys=rr[--sr],rr[sr]=null,vs=rr[--sr],rr[sr]=null}var Wi=null,Vi=null,jt=!1,Mr=null;function EE(t,e){var n=cr(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function c1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wi=t,Vi=ya(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wi=t,Vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mo!==null?{id:vs,overflow:ys}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=cr(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wi=t,Vi=null,!0):!1;default:return!1}}function b0(t){return(t.mode&1)!==0&&(t.flags&128)===0}function w0(t){if(jt){var e=Vi;if(e){var n=e;if(!c1(t,e)){if(b0(t))throw Error(he(418));e=ya(n.nextSibling);var i=Wi;e&&c1(t,e)?EE(i,n):(t.flags=t.flags&-4097|2,jt=!1,Wi=t)}}else{if(b0(t))throw Error(he(418));t.flags=t.flags&-4097|2,jt=!1,Wi=t}}}function u1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wi=t}function bf(t){if(t!==Wi)return!1;if(!jt)return u1(t),jt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!y0(t.type,t.memoizedProps)),e&&(e=Vi)){if(b0(t))throw ME(),Error(he(418));for(;e;)EE(t,e),e=ya(e.nextSibling)}if(u1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vi=ya(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vi=null}}else Vi=Wi?ya(t.stateNode.nextSibling):null;return!0}function ME(){for(var t=Vi;t;)t=ya(t.nextSibling)}function $l(){Vi=Wi=null,jt=!1}function Z_(t){Mr===null?Mr=[t]:Mr.push(t)}var IA=zs.ReactCurrentBatchConfig;function Sc(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function wf(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function f1(t){var e=t._init;return e(t._payload)}function bE(t){function e(p,x){if(t){var y=p.deletions;y===null?(p.deletions=[x],p.flags|=16):y.push(x)}}function n(p,x){if(!t)return null;for(;x!==null;)e(p,x),x=x.sibling;return null}function i(p,x){for(p=new Map;x!==null;)x.key!==null?p.set(x.key,x):p.set(x.index,x),x=x.sibling;return p}function r(p,x){return p=ba(p,x),p.index=0,p.sibling=null,p}function s(p,x,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<x?(p.flags|=2,x):y):(p.flags|=2,x)):(p.flags|=1048576,x)}function a(p){return t&&p.alternate===null&&(p.flags|=2),p}function o(p,x,y,v){return x===null||x.tag!==6?(x=Xp(y,p.mode,v),x.return=p,x):(x=r(x,y),x.return=p,x)}function l(p,x,y,v){var b=y.type;return b===hl?u(p,x,y.props.children,v,y.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ta&&f1(b)===x.type)?(v=r(x,y.props),v.ref=Sc(p,x,y),v.return=p,v):(v=Pd(y.type,y.key,y.props,null,p.mode,v),v.ref=Sc(p,x,y),v.return=p,v)}function c(p,x,y,v){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=$p(y,p.mode,v),x.return=p,x):(x=r(x,y.children||[]),x.return=p,x)}function u(p,x,y,v,b){return x===null||x.tag!==7?(x=po(y,p.mode,v,b),x.return=p,x):(x=r(x,y),x.return=p,x)}function d(p,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Xp(""+x,p.mode,y),x.return=p,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pf:return y=Pd(x.type,x.key,x.props,null,p.mode,y),y.ref=Sc(p,null,x),y.return=p,y;case dl:return x=$p(x,p.mode,y),x.return=p,x;case ta:var v=x._init;return d(p,v(x._payload),y)}if(Fc(x)||gc(x))return x=po(x,p.mode,y,null),x.return=p,x;wf(p,x)}return null}function f(p,x,y,v){var b=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:o(p,x,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pf:return y.key===b?l(p,x,y,v):null;case dl:return y.key===b?c(p,x,y,v):null;case ta:return b=y._init,f(p,x,b(y._payload),v)}if(Fc(y)||gc(y))return b!==null?null:u(p,x,y,v,null);wf(p,y)}return null}function h(p,x,y,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(y)||null,o(x,p,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pf:return p=p.get(v.key===null?y:v.key)||null,l(x,p,v,b);case dl:return p=p.get(v.key===null?y:v.key)||null,c(x,p,v,b);case ta:var T=v._init;return h(p,x,y,T(v._payload),b)}if(Fc(v)||gc(v))return p=p.get(y)||null,u(x,p,v,b,null);wf(x,v)}return null}function g(p,x,y,v){for(var b=null,T=null,w=x,S=x=0,A=null;w!==null&&S<y.length;S++){w.index>S?(A=w,w=null):A=w.sibling;var R=f(p,w,y[S],v);if(R===null){w===null&&(w=A);break}t&&w&&R.alternate===null&&e(p,w),x=s(R,x,S),T===null?b=R:T.sibling=R,T=R,w=A}if(S===y.length)return n(p,w),jt&&Ka(p,S),b;if(w===null){for(;S<y.length;S++)w=d(p,y[S],v),w!==null&&(x=s(w,x,S),T===null?b=w:T.sibling=w,T=w);return jt&&Ka(p,S),b}for(w=i(p,w);S<y.length;S++)A=h(w,p,S,y[S],v),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?S:A.key),x=s(A,x,S),T===null?b=A:T.sibling=A,T=A);return t&&w.forEach(function(D){return e(p,D)}),jt&&Ka(p,S),b}function _(p,x,y,v){var b=gc(y);if(typeof b!="function")throw Error(he(150));if(y=b.call(y),y==null)throw Error(he(151));for(var T=b=null,w=x,S=x=0,A=null,R=y.next();w!==null&&!R.done;S++,R=y.next()){w.index>S?(A=w,w=null):A=w.sibling;var D=f(p,w,R.value,v);if(D===null){w===null&&(w=A);break}t&&w&&D.alternate===null&&e(p,w),x=s(D,x,S),T===null?b=D:T.sibling=D,T=D,w=A}if(R.done)return n(p,w),jt&&Ka(p,S),b;if(w===null){for(;!R.done;S++,R=y.next())R=d(p,R.value,v),R!==null&&(x=s(R,x,S),T===null?b=R:T.sibling=R,T=R);return jt&&Ka(p,S),b}for(w=i(p,w);!R.done;S++,R=y.next())R=h(w,p,S,R.value,v),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?S:R.key),x=s(R,x,S),T===null?b=R:T.sibling=R,T=R);return t&&w.forEach(function(L){return e(p,L)}),jt&&Ka(p,S),b}function m(p,x,y,v){if(typeof y=="object"&&y!==null&&y.type===hl&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pf:e:{for(var b=y.key,T=x;T!==null;){if(T.key===b){if(b=y.type,b===hl){if(T.tag===7){n(p,T.sibling),x=r(T,y.props.children),x.return=p,p=x;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ta&&f1(b)===T.type){n(p,T.sibling),x=r(T,y.props),x.ref=Sc(p,T,y),x.return=p,p=x;break e}n(p,T);break}else e(p,T);T=T.sibling}y.type===hl?(x=po(y.props.children,p.mode,v,y.key),x.return=p,p=x):(v=Pd(y.type,y.key,y.props,null,p.mode,v),v.ref=Sc(p,x,y),v.return=p,p=v)}return a(p);case dl:e:{for(T=y.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(p,x.sibling),x=r(x,y.children||[]),x.return=p,p=x;break e}else{n(p,x);break}else e(p,x);x=x.sibling}x=$p(y,p.mode,v),x.return=p,p=x}return a(p);case ta:return T=y._init,m(p,x,T(y._payload),v)}if(Fc(y))return g(p,x,y,v);if(gc(y))return _(p,x,y,v);wf(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(p,x.sibling),x=r(x,y),x.return=p,p=x):(n(p,x),x=Xp(y,p.mode,v),x.return=p,p=x),a(p)):n(p,x)}return m}var Yl=bE(!0),wE=bE(!1),lh=Ba(null),ch=null,Sl=null,Q_=null;function J_(){Q_=Sl=ch=null}function ex(t){var e=lh.current;Gt(lh),t._currentValue=e}function T0(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Dl(t,e){ch=t,Q_=Sl=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Si=!0),t.firstContext=null)}function pr(t){var e=t._currentValue;if(Q_!==t)if(t={context:t,memoizedValue:e,next:null},Sl===null){if(ch===null)throw Error(he(308));Sl=t,ch.dependencies={lanes:0,firstContext:t}}else Sl=Sl.next=t;return e}var so=null;function tx(t){so===null?so=[t]:so.push(t)}function TE(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,tx(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ps(t,i)}function Ps(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var na=!1;function nx(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function AE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ms(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,vt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ps(t,n)}return r=i.interleaved,r===null?(e.next=e,tx(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ps(t,n)}function bd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,V_(t,n)}}function d1(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uh(t,e,n,i){var r=t.updateQueue;na=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,h=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,_=o;switch(f=e,h=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(h,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(h,d,f):g,f==null)break e;d=Qt({},d,f);break e;case 2:na=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else h={eventTime:h,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wo|=a,t.lanes=a,t.memoizedState=d}}function h1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var tf={},Jr=Ba(tf),Ru=Ba(tf),Pu=Ba(tf);function ao(t){if(t===tf)throw Error(he(174));return t}function ix(t,e){switch(kt(Pu,e),kt(Ru,t),kt(Jr,tf),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:a0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=a0(e,t)}Gt(Jr),kt(Jr,e)}function ql(){Gt(Jr),Gt(Ru),Gt(Pu)}function CE(t){ao(Pu.current);var e=ao(Jr.current),n=a0(e,t.type);e!==n&&(kt(Ru,t),kt(Jr,n))}function rx(t){Ru.current===t&&(Gt(Jr),Gt(Ru))}var Yt=Ba(0);function fh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bp=[];function sx(){for(var t=0;t<Bp.length;t++)Bp[t]._workInProgressVersionPrimary=null;Bp.length=0}var wd=zs.ReactCurrentDispatcher,Vp=zs.ReactCurrentBatchConfig,bo=0,Zt=null,Sn=null,Dn=null,dh=!1,Jc=!1,Nu=0,FA=0;function Wn(){throw Error(he(321))}function ax(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rr(t[n],e[n]))return!1;return!0}function ox(t,e,n,i,r,s){if(bo=s,Zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wd.current=t===null||t.memoizedState===null?zA:BA,t=n(i,r),Jc){s=0;do{if(Jc=!1,Nu=0,25<=s)throw Error(he(301));s+=1,Dn=Sn=null,e.updateQueue=null,wd.current=VA,t=n(i,r)}while(Jc)}if(wd.current=hh,e=Sn!==null&&Sn.next!==null,bo=0,Dn=Sn=Zt=null,dh=!1,e)throw Error(he(300));return t}function lx(){var t=Nu!==0;return Nu=0,t}function Or(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?Zt.memoizedState=Dn=t:Dn=Dn.next=t,Dn}function mr(){if(Sn===null){var t=Zt.alternate;t=t!==null?t.memoizedState:null}else t=Sn.next;var e=Dn===null?Zt.memoizedState:Dn.next;if(e!==null)Dn=e,Sn=t;else{if(t===null)throw Error(he(310));Sn=t,t={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},Dn===null?Zt.memoizedState=Dn=t:Dn=Dn.next=t}return Dn}function Du(t,e){return typeof e=="function"?e(t):e}function Hp(t){var e=mr(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=Sn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((bo&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,Zt.lanes|=u,wo|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Rr(i,e.memoizedState)||(Si=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Zt.lanes|=s,wo|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gp(t){var e=mr(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Rr(s,e.memoizedState)||(Si=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function RE(){}function PE(t,e){var n=Zt,i=mr(),r=e(),s=!Rr(i.memoizedState,r);if(s&&(i.memoizedState=r,Si=!0),i=i.queue,cx(LE.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dn!==null&&Dn.memoizedState.tag&1){if(n.flags|=2048,Lu(9,DE.bind(null,n,i,r,e),void 0,null),In===null)throw Error(he(349));bo&30||NE(n,e,r)}return r}function NE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Zt.updateQueue,e===null?(e={lastEffect:null,stores:null},Zt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function DE(t,e,n,i){e.value=n,e.getSnapshot=i,IE(e)&&FE(t)}function LE(t,e,n){return n(function(){IE(e)&&FE(t)})}function IE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rr(t,n)}catch{return!0}}function FE(t){var e=Ps(t,1);e!==null&&Cr(e,t,1,-1)}function p1(t){var e=Or();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Du,lastRenderedState:t},e.queue=t,t=t.dispatch=kA.bind(null,Zt,t),[e.memoizedState,t]}function Lu(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Zt.updateQueue,e===null?(e={lastEffect:null,stores:null},Zt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function UE(){return mr().memoizedState}function Td(t,e,n,i){var r=Or();Zt.flags|=t,r.memoizedState=Lu(1|e,n,void 0,i===void 0?null:i)}function Zh(t,e,n,i){var r=mr();i=i===void 0?null:i;var s=void 0;if(Sn!==null){var a=Sn.memoizedState;if(s=a.destroy,i!==null&&ax(i,a.deps)){r.memoizedState=Lu(e,n,s,i);return}}Zt.flags|=t,r.memoizedState=Lu(1|e,n,s,i)}function m1(t,e){return Td(8390656,8,t,e)}function cx(t,e){return Zh(2048,8,t,e)}function OE(t,e){return Zh(4,2,t,e)}function kE(t,e){return Zh(4,4,t,e)}function zE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function BE(t,e,n){return n=n!=null?n.concat([t]):null,Zh(4,4,zE.bind(null,e,t),n)}function ux(){}function VE(t,e){var n=mr();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ax(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function HE(t,e){var n=mr();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ax(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function GE(t,e,n){return bo&21?(Rr(n,e)||(n=YS(),Zt.lanes|=n,wo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Si=!0),t.memoizedState=n)}function UA(t,e){var n=Tt;Tt=n!==0&&4>n?n:4,t(!0);var i=Vp.transition;Vp.transition={};try{t(!1),e()}finally{Tt=n,Vp.transition=i}}function WE(){return mr().memoizedState}function OA(t,e,n){var i=Ma(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},jE(t))XE(e,n);else if(n=TE(t,e,n,i),n!==null){var r=pi();Cr(n,t,i,r),$E(n,e,i)}}function kA(t,e,n){var i=Ma(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(jE(t))XE(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Rr(o,a)){var l=e.interleaved;l===null?(r.next=r,tx(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=TE(t,e,r,i),n!==null&&(r=pi(),Cr(n,t,i,r),$E(n,e,i))}}function jE(t){var e=t.alternate;return t===Zt||e!==null&&e===Zt}function XE(t,e){Jc=dh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $E(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,V_(t,n)}}var hh={readContext:pr,useCallback:Wn,useContext:Wn,useEffect:Wn,useImperativeHandle:Wn,useInsertionEffect:Wn,useLayoutEffect:Wn,useMemo:Wn,useReducer:Wn,useRef:Wn,useState:Wn,useDebugValue:Wn,useDeferredValue:Wn,useTransition:Wn,useMutableSource:Wn,useSyncExternalStore:Wn,useId:Wn,unstable_isNewReconciler:!1},zA={readContext:pr,useCallback:function(t,e){return Or().memoizedState=[t,e===void 0?null:e],t},useContext:pr,useEffect:m1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Td(4194308,4,zE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Td(4194308,4,t,e)},useInsertionEffect:function(t,e){return Td(4,2,t,e)},useMemo:function(t,e){var n=Or();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Or();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=OA.bind(null,Zt,t),[i.memoizedState,t]},useRef:function(t){var e=Or();return t={current:t},e.memoizedState=t},useState:p1,useDebugValue:ux,useDeferredValue:function(t){return Or().memoizedState=t},useTransition:function(){var t=p1(!1),e=t[0];return t=UA.bind(null,t[1]),Or().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Zt,r=Or();if(jt){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),In===null)throw Error(he(349));bo&30||NE(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,m1(LE.bind(null,i,s,t),[t]),i.flags|=2048,Lu(9,DE.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Or(),e=In.identifierPrefix;if(jt){var n=ys,i=vs;n=(i&~(1<<32-Ar(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Nu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BA={readContext:pr,useCallback:VE,useContext:pr,useEffect:cx,useImperativeHandle:BE,useInsertionEffect:OE,useLayoutEffect:kE,useMemo:HE,useReducer:Hp,useRef:UE,useState:function(){return Hp(Du)},useDebugValue:ux,useDeferredValue:function(t){var e=mr();return GE(e,Sn.memoizedState,t)},useTransition:function(){var t=Hp(Du)[0],e=mr().memoizedState;return[t,e]},useMutableSource:RE,useSyncExternalStore:PE,useId:WE,unstable_isNewReconciler:!1},VA={readContext:pr,useCallback:VE,useContext:pr,useEffect:cx,useImperativeHandle:BE,useInsertionEffect:OE,useLayoutEffect:kE,useMemo:HE,useReducer:Gp,useRef:UE,useState:function(){return Gp(Du)},useDebugValue:ux,useDeferredValue:function(t){var e=mr();return Sn===null?e.memoizedState=t:GE(e,Sn.memoizedState,t)},useTransition:function(){var t=Gp(Du)[0],e=mr().memoizedState;return[t,e]},useMutableSource:RE,useSyncExternalStore:PE,useId:WE,unstable_isNewReconciler:!1};function Sr(t,e){if(t&&t.defaultProps){e=Qt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function A0(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Qt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qh={isMounted:function(t){return(t=t._reactInternals)?Uo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pi(),r=Ma(t),s=Ms(i,r);s.payload=e,n!=null&&(s.callback=n),e=Sa(t,s,r),e!==null&&(Cr(e,t,r,i),bd(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pi(),r=Ma(t),s=Ms(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sa(t,s,r),e!==null&&(Cr(e,t,r,i),bd(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pi(),i=Ma(t),r=Ms(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sa(t,r,i),e!==null&&(Cr(e,t,i,n),bd(e,t,i))}};function g1(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!wu(n,i)||!wu(r,s):!0}function YE(t,e,n){var i=!1,r=Pa,s=e.contextType;return typeof s=="object"&&s!==null?s=pr(s):(r=Mi(e)?Eo:ti.current,i=e.contextTypes,s=(i=i!=null)?Xl(t,r):Pa),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qh,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _1(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Qh.enqueueReplaceState(e,e.state,null)}function C0(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nx(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=pr(s):(s=Mi(e)?Eo:ti.current,r.context=Xl(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(A0(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Qh.enqueueReplaceState(r,r.state,null),uh(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Kl(t,e){try{var n="",i=e;do n+=mT(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function R0(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HA=typeof WeakMap=="function"?WeakMap:Map;function qE(t,e,n){n=Ms(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){mh||(mh=!0,z0=i),R0(t,e)},n}function KE(t,e,n){n=Ms(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){R0(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){R0(t,e),typeof i!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function x1(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new HA;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=nC.bind(null,t,e,n),e.then(t,t))}function v1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function y1(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ms(-1,1),e.tag=2,Sa(n,e,1))),n.lanes|=1),t)}var GA=zs.ReactCurrentOwner,Si=!1;function ui(t,e,n,i){e.child=t===null?wE(e,null,n,i):Yl(e,t.child,n,i)}function S1(t,e,n,i,r){n=n.render;var s=e.ref;return Dl(e,r),i=ox(t,e,n,i,s,r),n=lx(),t!==null&&!Si?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ns(t,e,r)):(jt&&n&&q_(e),e.flags|=1,ui(t,e,i,r),e.child)}function E1(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!xx(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ZE(t,e,s,i,r)):(t=Pd(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:wu,n(a,i)&&t.ref===e.ref)return Ns(t,e,r)}return e.flags|=1,t=ba(s,i),t.ref=e.ref,t.return=e,e.child=t}function ZE(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wu(s,i)&&t.ref===e.ref)if(Si=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Si=!0);else return e.lanes=t.lanes,Ns(t,e,r)}return P0(t,e,n,i,r)}function QE(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ml,Fi),Fi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,kt(Ml,Fi),Fi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,kt(Ml,Fi),Fi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,kt(Ml,Fi),Fi|=i;return ui(t,e,r,n),e.child}function JE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function P0(t,e,n,i,r){var s=Mi(n)?Eo:ti.current;return s=Xl(e,s),Dl(e,r),n=ox(t,e,n,i,s,r),i=lx(),t!==null&&!Si?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ns(t,e,r)):(jt&&i&&q_(e),e.flags|=1,ui(t,e,n,r),e.child)}function M1(t,e,n,i,r){if(Mi(n)){var s=!0;sh(e)}else s=!1;if(Dl(e,r),e.stateNode===null)Ad(t,e),YE(e,n,i),C0(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=pr(c):(c=Mi(n)?Eo:ti.current,c=Xl(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&_1(e,a,i,c),na=!1;var f=e.memoizedState;a.state=f,uh(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Ei.current||na?(typeof u=="function"&&(A0(e,n,u,i),l=e.memoizedState),(o=na||g1(e,n,o,i,f,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,AE(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Sr(e.type,o),a.props=c,d=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=pr(l):(l=Mi(n)?Eo:ti.current,l=Xl(e,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&_1(e,a,i,l),na=!1,f=e.memoizedState,a.state=f,uh(e,i,a,r);var g=e.memoizedState;o!==d||f!==g||Ei.current||na?(typeof h=="function"&&(A0(e,n,h,i),g=e.memoizedState),(c=na||g1(e,n,c,i,f,g,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return N0(t,e,n,i,s,r)}function N0(t,e,n,i,r,s){JE(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&l1(e,n,!1),Ns(t,e,s);i=e.stateNode,GA.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Yl(e,t.child,null,s),e.child=Yl(e,null,o,s)):ui(t,e,o,s),e.memoizedState=i.state,r&&l1(e,n,!0),e.child}function eM(t){var e=t.stateNode;e.pendingContext?o1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&o1(t,e.context,!1),ix(t,e.containerInfo)}function b1(t,e,n,i,r){return $l(),Z_(r),e.flags|=256,ui(t,e,n,i),e.child}var D0={dehydrated:null,treeContext:null,retryLane:0};function L0(t){return{baseLanes:t,cachePool:null,transitions:null}}function tM(t,e,n){var i=e.pendingProps,r=Yt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),kt(Yt,r&1),t===null)return w0(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=tp(a,i,0,null),t=po(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=L0(n),e.memoizedState=D0,t):fx(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return WA(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ba(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ba(o,s):(s=po(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?L0(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=D0,i}return s=t.child,t=s.sibling,i=ba(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fx(t,e){return e=tp({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tf(t,e,n,i){return i!==null&&Z_(i),Yl(e,t.child,null,n),t=fx(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function WA(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Wp(Error(he(422))),Tf(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=tp({mode:"visible",children:i.children},r,0,null),s=po(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Yl(e,t.child,null,a),e.child.memoizedState=L0(a),e.memoizedState=D0,s);if(!(e.mode&1))return Tf(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(he(419)),i=Wp(s,i,void 0),Tf(t,e,a,i)}if(o=(a&t.childLanes)!==0,Si||o){if(i=In,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ps(t,r),Cr(i,t,r,-1))}return _x(),i=Wp(Error(he(421))),Tf(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=iC.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Vi=ya(r.nextSibling),Wi=e,jt=!0,Mr=null,t!==null&&(rr[sr++]=vs,rr[sr++]=ys,rr[sr++]=Mo,vs=t.id,ys=t.overflow,Mo=e),e=fx(e,i.children),e.flags|=4096,e)}function w1(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),T0(t.return,e,n)}function jp(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function nM(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ui(t,e,i.children,n),i=Yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&w1(t,n,e);else if(t.tag===19)w1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(kt(Yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&fh(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),jp(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&fh(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}jp(e,!0,n,null,s);break;case"together":jp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ad(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ns(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=ba(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ba(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jA(t,e,n){switch(e.tag){case 3:eM(e),$l();break;case 5:CE(e);break;case 1:Mi(e.type)&&sh(e);break;case 4:ix(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;kt(lh,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(kt(Yt,Yt.current&1),e.flags|=128,null):n&e.child.childLanes?tM(t,e,n):(kt(Yt,Yt.current&1),t=Ns(t,e,n),t!==null?t.sibling:null);kt(Yt,Yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return nM(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),kt(Yt,Yt.current),i)break;return null;case 22:case 23:return e.lanes=0,QE(t,e,n)}return Ns(t,e,n)}var iM,I0,rM,sM;iM=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};I0=function(){};rM=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ao(Jr.current);var s=null;switch(n){case"input":r=n0(t,r),i=n0(t,i),s=[];break;case"select":r=Qt({},r,{value:void 0}),i=Qt({},i,{value:void 0}),s=[];break;case"textarea":r=s0(t,r),i=s0(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ih)}o0(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xu.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xu.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ht("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};sM=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ec(t,e){if(!jt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function XA(t,e,n){var i=e.pendingProps;switch(K_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jn(e),null;case 1:return Mi(e.type)&&rh(),jn(e),null;case 3:return i=e.stateNode,ql(),Gt(Ei),Gt(ti),sx(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(bf(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mr!==null&&(H0(Mr),Mr=null))),I0(t,e),jn(e),null;case 5:rx(e);var r=ao(Pu.current);if(n=e.type,t!==null&&e.stateNode!=null)rM(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return jn(e),null}if(t=ao(Jr.current),bf(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hr]=e,i[Cu]=s,t=(e.mode&1)!==0,n){case"dialog":Ht("cancel",i),Ht("close",i);break;case"iframe":case"object":case"embed":Ht("load",i);break;case"video":case"audio":for(r=0;r<Oc.length;r++)Ht(Oc[r],i);break;case"source":Ht("error",i);break;case"img":case"image":case"link":Ht("error",i),Ht("load",i);break;case"details":Ht("toggle",i);break;case"input":Iv(i,s),Ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ht("invalid",i);break;case"textarea":Uv(i,s),Ht("invalid",i)}o0(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Mf(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Mf(i.textContent,o,t),r=["children",""+o]):xu.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Ht("scroll",i)}switch(n){case"input":mf(i),Fv(i,s,!0);break;case"textarea":mf(i),Ov(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ih)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=LS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Hr]=e,t[Cu]=i,iM(t,e,!1,!1),e.stateNode=t;e:{switch(a=l0(n,i),n){case"dialog":Ht("cancel",t),Ht("close",t),r=i;break;case"iframe":case"object":case"embed":Ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oc.length;r++)Ht(Oc[r],t);r=i;break;case"source":Ht("error",t),r=i;break;case"img":case"image":case"link":Ht("error",t),Ht("load",t),r=i;break;case"details":Ht("toggle",t),r=i;break;case"input":Iv(t,i),r=n0(t,i),Ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Qt({},i,{value:void 0}),Ht("invalid",t);break;case"textarea":Uv(t,i),r=s0(t,i),Ht("invalid",t);break;default:r=i}o0(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?US(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&IS(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vu(t,l):typeof l=="number"&&vu(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ht("scroll",t):l!=null&&F_(t,s,l,a))}switch(n){case"input":mf(t),Fv(t,i,!1);break;case"textarea":mf(t),Ov(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ra(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cl(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cl(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ih)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jn(e),null;case 6:if(t&&e.stateNode!=null)sM(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=ao(Pu.current),ao(Jr.current),bf(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hr]=e,(s=i.nodeValue!==n)&&(t=Wi,t!==null))switch(t.tag){case 3:Mf(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mf(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hr]=e,e.stateNode=i}return jn(e),null;case 13:if(Gt(Yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(jt&&Vi!==null&&e.mode&1&&!(e.flags&128))ME(),$l(),e.flags|=98560,s=!1;else if(s=bf(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(he(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(he(317));s[Hr]=e}else $l(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jn(e),s=!1}else Mr!==null&&(H0(Mr),Mr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Yt.current&1?bn===0&&(bn=3):_x())),e.updateQueue!==null&&(e.flags|=4),jn(e),null);case 4:return ql(),I0(t,e),t===null&&Tu(e.stateNode.containerInfo),jn(e),null;case 10:return ex(e.type._context),jn(e),null;case 17:return Mi(e.type)&&rh(),jn(e),null;case 19:if(Gt(Yt),s=e.memoizedState,s===null)return jn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ec(s,!1);else{if(bn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=fh(t),a!==null){for(e.flags|=128,Ec(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return kt(Yt,Yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&cn()>Zl&&(e.flags|=128,i=!0,Ec(s,!1),e.lanes=4194304)}else{if(!i)if(t=fh(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ec(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!jt)return jn(e),null}else 2*cn()-s.renderingStartTime>Zl&&n!==1073741824&&(e.flags|=128,i=!0,Ec(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=cn(),e.sibling=null,n=Yt.current,kt(Yt,i?n&1|2:n&1),e):(jn(e),null);case 22:case 23:return gx(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fi&1073741824&&(jn(e),e.subtreeFlags&6&&(e.flags|=8192)):jn(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function $A(t,e){switch(K_(e),e.tag){case 1:return Mi(e.type)&&rh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ql(),Gt(Ei),Gt(ti),sx(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rx(e),null;case 13:if(Gt(Yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));$l()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Gt(Yt),null;case 4:return ql(),null;case 10:return ex(e.type._context),null;case 22:case 23:return gx(),null;case 24:return null;default:return null}}var Af=!1,Kn=!1,YA=typeof WeakSet=="function"?WeakSet:Set,Re=null;function El(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){nn(t,e,i)}else n.current=null}function F0(t,e,n){try{n()}catch(i){nn(t,e,i)}}var T1=!1;function qA(t,e){if(x0=eh,t=uE(),Y_(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var h;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(v0={focusedElem:t,selectionRange:n},eh=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,p=e.stateNode,x=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Sr(e.type,_),m);p.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(v){nn(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return g=T1,T1=!1,g}function eu(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&F0(e,n,s)}r=r.next}while(r!==i)}}function Jh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function U0(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function aM(t){var e=t.alternate;e!==null&&(t.alternate=null,aM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hr],delete e[Cu],delete e[E0],delete e[NA],delete e[DA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function oM(t){return t.tag===5||t.tag===3||t.tag===4}function A1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||oM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function O0(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ih));else if(i!==4&&(t=t.child,t!==null))for(O0(t,e,n),t=t.sibling;t!==null;)O0(t,e,n),t=t.sibling}function k0(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(k0(t,e,n),t=t.sibling;t!==null;)k0(t,e,n),t=t.sibling}var Un=null,Er=!1;function js(t,e,n){for(n=n.child;n!==null;)lM(t,e,n),n=n.sibling}function lM(t,e,n){if(Qr&&typeof Qr.onCommitFiberUnmount=="function")try{Qr.onCommitFiberUnmount(jh,n)}catch{}switch(n.tag){case 5:Kn||El(n,e);case 6:var i=Un,r=Er;Un=null,js(t,e,n),Un=i,Er=r,Un!==null&&(Er?(t=Un,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Un.removeChild(n.stateNode));break;case 18:Un!==null&&(Er?(t=Un,n=n.stateNode,t.nodeType===8?kp(t.parentNode,n):t.nodeType===1&&kp(t,n),Mu(t)):kp(Un,n.stateNode));break;case 4:i=Un,r=Er,Un=n.stateNode.containerInfo,Er=!0,js(t,e,n),Un=i,Er=r;break;case 0:case 11:case 14:case 15:if(!Kn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&F0(n,e,a),r=r.next}while(r!==i)}js(t,e,n);break;case 1:if(!Kn&&(El(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){nn(n,e,o)}js(t,e,n);break;case 21:js(t,e,n);break;case 22:n.mode&1?(Kn=(i=Kn)||n.memoizedState!==null,js(t,e,n),Kn=i):js(t,e,n);break;default:js(t,e,n)}}function C1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YA),e.forEach(function(i){var r=rC.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function gr(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Un=o.stateNode,Er=!1;break e;case 3:Un=o.stateNode.containerInfo,Er=!0;break e;case 4:Un=o.stateNode.containerInfo,Er=!0;break e}o=o.return}if(Un===null)throw Error(he(160));lM(s,a,r),Un=null,Er=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){nn(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cM(e,t),e=e.sibling}function cM(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gr(e,t),Ir(t),i&4){try{eu(3,t,t.return),Jh(3,t)}catch(_){nn(t,t.return,_)}try{eu(5,t,t.return)}catch(_){nn(t,t.return,_)}}break;case 1:gr(e,t),Ir(t),i&512&&n!==null&&El(n,n.return);break;case 5:if(gr(e,t),Ir(t),i&512&&n!==null&&El(n,n.return),t.flags&32){var r=t.stateNode;try{vu(r,"")}catch(_){nn(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&NS(r,s),l0(o,a);var c=l0(o,s);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?US(r,d):u==="dangerouslySetInnerHTML"?IS(r,d):u==="children"?vu(r,d):F_(r,u,d,c)}switch(o){case"input":i0(r,s);break;case"textarea":DS(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Cl(r,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Cl(r,!!s.multiple,s.defaultValue,!0):Cl(r,!!s.multiple,s.multiple?[]:"",!1))}r[Cu]=s}catch(_){nn(t,t.return,_)}}break;case 6:if(gr(e,t),Ir(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){nn(t,t.return,_)}}break;case 3:if(gr(e,t),Ir(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mu(e.containerInfo)}catch(_){nn(t,t.return,_)}break;case 4:gr(e,t),Ir(t);break;case 13:gr(e,t),Ir(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(px=cn())),i&4&&C1(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Kn=(c=Kn)||u,gr(e,t),Kn=c):gr(e,t),Ir(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Re=t,u=t.child;u!==null;){for(d=Re=u;Re!==null;){switch(f=Re,h=f.child,f.tag){case 0:case 11:case 14:case 15:eu(4,f,f.return);break;case 1:El(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){nn(i,n,_)}}break;case 5:El(f,f.return);break;case 22:if(f.memoizedState!==null){P1(d);continue}}h!==null?(h.return=f,Re=h):P1(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=FS("display",a))}catch(_){nn(t,t.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){nn(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gr(e,t),Ir(t),i&4&&C1(t);break;case 21:break;default:gr(e,t),Ir(t)}}function Ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(oM(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(vu(r,""),i.flags&=-33);var s=A1(t);k0(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=A1(t);O0(t,o,a);break;default:throw Error(he(161))}}catch(l){nn(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KA(t,e,n){Re=t,uM(t)}function uM(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Af;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Kn;o=Af;var c=Kn;if(Af=a,(Kn=l)&&!c)for(Re=r;Re!==null;)a=Re,l=a.child,a.tag===22&&a.memoizedState!==null?N1(r):l!==null?(l.return=a,Re=l):N1(r);for(;s!==null;)Re=s,uM(s),s=s.sibling;Re=r,Af=o,Kn=c}R1(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):R1(t)}}function R1(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kn||Jh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Sr(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&h1(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}h1(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Mu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}Kn||e.flags&512&&U0(e)}catch(f){nn(e,e.return,f)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function P1(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function N1(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jh(4,e)}catch(l){nn(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){nn(e,r,l)}}var s=e.return;try{U0(e)}catch(l){nn(e,s,l)}break;case 5:var a=e.return;try{U0(e)}catch(l){nn(e,a,l)}}}catch(l){nn(e,e.return,l)}if(e===t){Re=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Re=o;break}Re=e.return}}var ZA=Math.ceil,ph=zs.ReactCurrentDispatcher,dx=zs.ReactCurrentOwner,dr=zs.ReactCurrentBatchConfig,vt=0,In=null,gn=null,zn=0,Fi=0,Ml=Ba(0),bn=0,Iu=null,wo=0,ep=0,hx=0,tu=null,vi=null,px=0,Zl=1/0,ds=null,mh=!1,z0=null,Ea=null,Cf=!1,ca=null,gh=0,nu=0,B0=null,Cd=-1,Rd=0;function pi(){return vt&6?cn():Cd!==-1?Cd:Cd=cn()}function Ma(t){return t.mode&1?vt&2&&zn!==0?zn&-zn:IA.transition!==null?(Rd===0&&(Rd=YS()),Rd):(t=Tt,t!==0||(t=window.event,t=t===void 0?16:tE(t.type)),t):1}function Cr(t,e,n,i){if(50<nu)throw nu=0,B0=null,Error(he(185));Qu(t,n,i),(!(vt&2)||t!==In)&&(t===In&&(!(vt&2)&&(ep|=n),bn===4&&sa(t,zn)),bi(t,i),n===1&&vt===0&&!(e.mode&1)&&(Zl=cn()+500,Kh&&Va()))}function bi(t,e){var n=t.callbackNode;IT(t,e);var i=Jd(t,t===In?zn:0);if(i===0)n!==null&&Bv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bv(n),e===1)t.tag===0?LA(D1.bind(null,t)):yE(D1.bind(null,t)),RA(function(){!(vt&6)&&Va()}),n=null;else{switch(qS(i)){case 1:n=B_;break;case 4:n=XS;break;case 16:n=Qd;break;case 536870912:n=$S;break;default:n=Qd}n=xM(n,fM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fM(t,e){if(Cd=-1,Rd=0,vt&6)throw Error(he(327));var n=t.callbackNode;if(Ll()&&t.callbackNode!==n)return null;var i=Jd(t,t===In?zn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=_h(t,i);else{e=i;var r=vt;vt|=2;var s=hM();(In!==t||zn!==e)&&(ds=null,Zl=cn()+500,ho(t,e));do try{eC();break}catch(o){dM(t,o)}while(!0);J_(),ph.current=s,vt=r,gn!==null?e=0:(In=null,zn=0,e=bn)}if(e!==0){if(e===2&&(r=h0(t),r!==0&&(i=r,e=V0(t,r))),e===1)throw n=Iu,ho(t,0),sa(t,i),bi(t,cn()),n;if(e===6)sa(t,i);else{if(r=t.current.alternate,!(i&30)&&!QA(r)&&(e=_h(t,i),e===2&&(s=h0(t),s!==0&&(i=s,e=V0(t,s))),e===1))throw n=Iu,ho(t,0),sa(t,i),bi(t,cn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:Za(t,vi,ds);break;case 3:if(sa(t,i),(i&130023424)===i&&(e=px+500-cn(),10<e)){if(Jd(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pi(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=S0(Za.bind(null,t,vi,ds),e);break}Za(t,vi,ds);break;case 4:if(sa(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Ar(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=cn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ZA(i/1960))-i,10<i){t.timeoutHandle=S0(Za.bind(null,t,vi,ds),i);break}Za(t,vi,ds);break;case 5:Za(t,vi,ds);break;default:throw Error(he(329))}}}return bi(t,cn()),t.callbackNode===n?fM.bind(null,t):null}function V0(t,e){var n=tu;return t.current.memoizedState.isDehydrated&&(ho(t,e).flags|=256),t=_h(t,e),t!==2&&(e=vi,vi=n,e!==null&&H0(e)),t}function H0(t){vi===null?vi=t:vi.push.apply(vi,t)}function QA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Rr(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sa(t,e){for(e&=~hx,e&=~ep,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ar(e),i=1<<n;t[n]=-1,e&=~i}}function D1(t){if(vt&6)throw Error(he(327));Ll();var e=Jd(t,0);if(!(e&1))return bi(t,cn()),null;var n=_h(t,e);if(t.tag!==0&&n===2){var i=h0(t);i!==0&&(e=i,n=V0(t,i))}if(n===1)throw n=Iu,ho(t,0),sa(t,e),bi(t,cn()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Za(t,vi,ds),bi(t,cn()),null}function mx(t,e){var n=vt;vt|=1;try{return t(e)}finally{vt=n,vt===0&&(Zl=cn()+500,Kh&&Va())}}function To(t){ca!==null&&ca.tag===0&&!(vt&6)&&Ll();var e=vt;vt|=1;var n=dr.transition,i=Tt;try{if(dr.transition=null,Tt=1,t)return t()}finally{Tt=i,dr.transition=n,vt=e,!(vt&6)&&Va()}}function gx(){Fi=Ml.current,Gt(Ml)}function ho(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,CA(n)),gn!==null)for(n=gn.return;n!==null;){var i=n;switch(K_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rh();break;case 3:ql(),Gt(Ei),Gt(ti),sx();break;case 5:rx(i);break;case 4:ql();break;case 13:Gt(Yt);break;case 19:Gt(Yt);break;case 10:ex(i.type._context);break;case 22:case 23:gx()}n=n.return}if(In=t,gn=t=ba(t.current,null),zn=Fi=e,bn=0,Iu=null,hx=ep=wo=0,vi=tu=null,so!==null){for(e=0;e<so.length;e++)if(n=so[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}so=null}return t}function dM(t,e){do{var n=gn;try{if(J_(),wd.current=hh,dh){for(var i=Zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dh=!1}if(bo=0,Dn=Sn=Zt=null,Jc=!1,Nu=0,dx.current=null,n===null||n.return===null){bn=1,Iu=e,gn=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=zn,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=v1(a);if(h!==null){h.flags&=-257,y1(h,a,o,s,e),h.mode&1&&x1(s,c,e),e=h,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){x1(s,c,e),_x();break e}l=Error(he(426))}}else if(jt&&o.mode&1){var m=v1(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),y1(m,a,o,s,e),Z_(Kl(l,o));break e}}s=l=Kl(l,o),bn!==4&&(bn=2),tu===null?tu=[s]:tu.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=qE(s,l,e);d1(s,p);break e;case 1:o=l;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ea===null||!Ea.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=KE(s,o,e);d1(s,v);break e}}s=s.return}while(s!==null)}mM(n)}catch(b){e=b,gn===n&&n!==null&&(gn=n=n.return);continue}break}while(!0)}function hM(){var t=ph.current;return ph.current=hh,t===null?hh:t}function _x(){(bn===0||bn===3||bn===2)&&(bn=4),In===null||!(wo&268435455)&&!(ep&268435455)||sa(In,zn)}function _h(t,e){var n=vt;vt|=2;var i=hM();(In!==t||zn!==e)&&(ds=null,ho(t,e));do try{JA();break}catch(r){dM(t,r)}while(!0);if(J_(),vt=n,ph.current=i,gn!==null)throw Error(he(261));return In=null,zn=0,bn}function JA(){for(;gn!==null;)pM(gn)}function eC(){for(;gn!==null&&!wT();)pM(gn)}function pM(t){var e=_M(t.alternate,t,Fi);t.memoizedProps=t.pendingProps,e===null?mM(t):gn=e,dx.current=null}function mM(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$A(n,e),n!==null){n.flags&=32767,gn=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bn=6,gn=null;return}}else if(n=XA(n,e,Fi),n!==null){gn=n;return}if(e=e.sibling,e!==null){gn=e;return}gn=e=t}while(e!==null);bn===0&&(bn=5)}function Za(t,e,n){var i=Tt,r=dr.transition;try{dr.transition=null,Tt=1,tC(t,e,n,i)}finally{dr.transition=r,Tt=i}return null}function tC(t,e,n,i){do Ll();while(ca!==null);if(vt&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FT(t,s),t===In&&(gn=In=null,zn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cf||(Cf=!0,xM(Qd,function(){return Ll(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dr.transition,dr.transition=null;var a=Tt;Tt=1;var o=vt;vt|=4,dx.current=null,qA(t,n),cM(n,t),SA(v0),eh=!!x0,v0=x0=null,t.current=n,KA(n),TT(),vt=o,Tt=a,dr.transition=s}else t.current=n;if(Cf&&(Cf=!1,ca=t,gh=r),s=t.pendingLanes,s===0&&(Ea=null),RT(n.stateNode),bi(t,cn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(mh)throw mh=!1,t=z0,z0=null,t;return gh&1&&t.tag!==0&&Ll(),s=t.pendingLanes,s&1?t===B0?nu++:(nu=0,B0=t):nu=0,Va(),null}function Ll(){if(ca!==null){var t=qS(gh),e=dr.transition,n=Tt;try{if(dr.transition=null,Tt=16>t?16:t,ca===null)var i=!1;else{if(t=ca,ca=null,gh=0,vt&6)throw Error(he(331));var r=vt;for(vt|=4,Re=t.current;Re!==null;){var s=Re,a=s.child;if(Re.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Re=c;Re!==null;){var u=Re;switch(u.tag){case 0:case 11:case 15:eu(8,u,s)}var d=u.child;if(d!==null)d.return=u,Re=d;else for(;Re!==null;){u=Re;var f=u.sibling,h=u.return;if(aM(u),u===c){Re=null;break}if(f!==null){f.return=h,Re=f;break}Re=h}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Re=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Re=a;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:eu(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Re=p;break e}Re=s.return}}var x=t.current;for(Re=x;Re!==null;){a=Re;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Re=y;else e:for(a=x;Re!==null;){if(o=Re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Jh(9,o)}}catch(b){nn(o,o.return,b)}if(o===a){Re=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,Re=v;break e}Re=o.return}}if(vt=r,Va(),Qr&&typeof Qr.onPostCommitFiberRoot=="function")try{Qr.onPostCommitFiberRoot(jh,t)}catch{}i=!0}return i}finally{Tt=n,dr.transition=e}}return!1}function L1(t,e,n){e=Kl(n,e),e=qE(t,e,1),t=Sa(t,e,1),e=pi(),t!==null&&(Qu(t,1,e),bi(t,e))}function nn(t,e,n){if(t.tag===3)L1(t,t,n);else for(;e!==null;){if(e.tag===3){L1(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ea===null||!Ea.has(i))){t=Kl(n,t),t=KE(e,t,1),e=Sa(e,t,1),t=pi(),e!==null&&(Qu(e,1,t),bi(e,t));break}}e=e.return}}function nC(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pi(),t.pingedLanes|=t.suspendedLanes&n,In===t&&(zn&n)===n&&(bn===4||bn===3&&(zn&130023424)===zn&&500>cn()-px?ho(t,0):hx|=n),bi(t,e)}function gM(t,e){e===0&&(t.mode&1?(e=xf,xf<<=1,!(xf&130023424)&&(xf=4194304)):e=1);var n=pi();t=Ps(t,e),t!==null&&(Qu(t,e,n),bi(t,n))}function iC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gM(t,n)}function rC(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),gM(t,n)}var _M;_M=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ei.current)Si=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Si=!1,jA(t,e,n);Si=!!(t.flags&131072)}else Si=!1,jt&&e.flags&1048576&&SE(e,oh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ad(t,e),t=e.pendingProps;var r=Xl(e,ti.current);Dl(e,n),r=ox(null,e,i,t,r,n);var s=lx();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mi(i)?(s=!0,sh(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nx(e),r.updater=Qh,e.stateNode=r,r._reactInternals=e,C0(e,i,t,n),e=N0(null,e,i,!0,s,n)):(e.tag=0,jt&&s&&q_(e),ui(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ad(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=aC(i),t=Sr(i,t),r){case 0:e=P0(null,e,i,t,n);break e;case 1:e=M1(null,e,i,t,n);break e;case 11:e=S1(null,e,i,t,n);break e;case 14:e=E1(null,e,i,Sr(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sr(i,r),P0(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sr(i,r),M1(t,e,i,r,n);case 3:e:{if(eM(e),t===null)throw Error(he(387));i=e.pendingProps,s=e.memoizedState,r=s.element,AE(t,e),uh(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Kl(Error(he(423)),e),e=b1(t,e,i,n,r);break e}else if(i!==r){r=Kl(Error(he(424)),e),e=b1(t,e,i,n,r);break e}else for(Vi=ya(e.stateNode.containerInfo.firstChild),Wi=e,jt=!0,Mr=null,n=wE(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($l(),i===r){e=Ns(t,e,n);break e}ui(t,e,i,n)}e=e.child}return e;case 5:return CE(e),t===null&&w0(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,y0(i,r)?a=null:s!==null&&y0(i,s)&&(e.flags|=32),JE(t,e),ui(t,e,a,n),e.child;case 6:return t===null&&w0(e),null;case 13:return tM(t,e,n);case 4:return ix(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Yl(e,null,i,n):ui(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sr(i,r),S1(t,e,i,r,n);case 7:return ui(t,e,e.pendingProps,n),e.child;case 8:return ui(t,e,e.pendingProps.children,n),e.child;case 12:return ui(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,kt(lh,i._currentValue),i._currentValue=a,s!==null)if(Rr(s.value,a)){if(s.children===r.children&&!Ei.current){e=Ns(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ms(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),T0(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(he(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),T0(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ui(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Dl(e,n),r=pr(r),i=i(r),e.flags|=1,ui(t,e,i,n),e.child;case 14:return i=e.type,r=Sr(i,e.pendingProps),r=Sr(i.type,r),E1(t,e,i,r,n);case 15:return ZE(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Sr(i,r),Ad(t,e),e.tag=1,Mi(i)?(t=!0,sh(e)):t=!1,Dl(e,n),YE(e,i,r),C0(e,i,r,n),N0(null,e,i,!0,t,n);case 19:return nM(t,e,n);case 22:return QE(t,e,n)}throw Error(he(156,e.tag))};function xM(t,e){return jS(t,e)}function sC(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cr(t,e,n,i){return new sC(t,e,n,i)}function xx(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aC(t){if(typeof t=="function")return xx(t)?1:0;if(t!=null){if(t=t.$$typeof,t===O_)return 11;if(t===k_)return 14}return 2}function ba(t,e){var n=t.alternate;return n===null?(n=cr(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pd(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")xx(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case hl:return po(n.children,r,s,e);case U_:a=8,r|=8;break;case Qm:return t=cr(12,n,e,r|2),t.elementType=Qm,t.lanes=s,t;case Jm:return t=cr(13,n,e,r),t.elementType=Jm,t.lanes=s,t;case e0:return t=cr(19,n,e,r),t.elementType=e0,t.lanes=s,t;case CS:return tp(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case TS:a=10;break e;case AS:a=9;break e;case O_:a=11;break e;case k_:a=14;break e;case ta:a=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=cr(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function po(t,e,n,i){return t=cr(7,t,i,e),t.lanes=n,t}function tp(t,e,n,i){return t=cr(22,t,i,e),t.elementType=CS,t.lanes=n,t.stateNode={isHidden:!1},t}function Xp(t,e,n){return t=cr(6,t,null,e),t.lanes=n,t}function $p(t,e,n){return e=cr(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oC(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ap(0),this.expirationTimes=Ap(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ap(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vx(t,e,n,i,r,s,a,o,l){return t=new oC(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=cr(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nx(s),t}function lC(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dl,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function vM(t){if(!t)return Pa;t=t._reactInternals;e:{if(Uo(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(Mi(n))return vE(t,n,e)}return e}function yM(t,e,n,i,r,s,a,o,l){return t=vx(n,i,!0,t,r,s,a,o,l),t.context=vM(null),n=t.current,i=pi(),r=Ma(n),s=Ms(i,r),s.callback=e??null,Sa(n,s,r),t.current.lanes=r,Qu(t,r,i),bi(t,i),t}function np(t,e,n,i){var r=e.current,s=pi(),a=Ma(r);return n=vM(n),e.context===null?e.context=n:e.pendingContext=n,e=Ms(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sa(r,e,a),t!==null&&(Cr(t,r,a,s),bd(t,r,a)),a}function xh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function I1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yx(t,e){I1(t,e),(t=t.alternate)&&I1(t,e)}function cC(){return null}var SM=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sx(t){this._internalRoot=t}ip.prototype.render=Sx.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));np(t,e,null,null)};ip.prototype.unmount=Sx.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;To(function(){np(null,t,null,null)}),e[Rs]=null}};function ip(t){this._internalRoot=t}ip.prototype.unstable_scheduleHydration=function(t){if(t){var e=QS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ra.length&&e!==0&&e<ra[n].priority;n++);ra.splice(n,0,t),n===0&&eE(t)}};function Ex(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function F1(){}function uC(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=xh(a);s.call(c)}}var a=yM(e,i,t,0,null,!1,!1,"",F1);return t._reactRootContainer=a,t[Rs]=a.current,Tu(t.nodeType===8?t.parentNode:t),To(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=xh(l);o.call(c)}}var l=vx(t,0,!1,null,null,!1,!1,"",F1);return t._reactRootContainer=l,t[Rs]=l.current,Tu(t.nodeType===8?t.parentNode:t),To(function(){np(e,l,n,i)}),l}function sp(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=xh(a);o.call(l)}}np(e,a,t,r)}else a=uC(n,e,t,r,i);return xh(a)}KS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Uc(e.pendingLanes);n!==0&&(V_(e,n|1),bi(e,cn()),!(vt&6)&&(Zl=cn()+500,Va()))}break;case 13:To(function(){var i=Ps(t,1);if(i!==null){var r=pi();Cr(i,t,1,r)}}),yx(t,1)}};H_=function(t){if(t.tag===13){var e=Ps(t,134217728);if(e!==null){var n=pi();Cr(e,t,134217728,n)}yx(t,134217728)}};ZS=function(t){if(t.tag===13){var e=Ma(t),n=Ps(t,e);if(n!==null){var i=pi();Cr(n,t,e,i)}yx(t,e)}};QS=function(){return Tt};JS=function(t,e){var n=Tt;try{return Tt=t,e()}finally{Tt=n}};u0=function(t,e,n){switch(e){case"input":if(i0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=qh(i);if(!r)throw Error(he(90));PS(i),i0(i,r)}}}break;case"textarea":DS(t,n);break;case"select":e=n.value,e!=null&&Cl(t,!!n.multiple,e,!1)}};zS=mx;BS=To;var fC={usingClientEntryPoint:!1,Events:[ef,_l,qh,OS,kS,mx]},Mc={findFiberByHostInstance:ro,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dC={bundleType:Mc.bundleType,version:Mc.version,rendererPackageName:Mc.rendererPackageName,rendererConfig:Mc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zs.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=GS(t),t===null?null:t.stateNode},findFiberByHostInstance:Mc.findFiberByHostInstance||cC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rf.isDisabled&&Rf.supportsFiber)try{jh=Rf.inject(dC),Qr=Rf}catch{}}Ki.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fC;Ki.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ex(e))throw Error(he(200));return lC(t,e,null,n)};Ki.createRoot=function(t,e){if(!Ex(t))throw Error(he(299));var n=!1,i="",r=SM;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vx(t,1,!1,null,null,n,!1,i,r),t[Rs]=e.current,Tu(t.nodeType===8?t.parentNode:t),new Sx(e)};Ki.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=GS(e),t=t===null?null:t.stateNode,t};Ki.flushSync=function(t){return To(t)};Ki.hydrate=function(t,e,n){if(!rp(e))throw Error(he(200));return sp(null,t,e,!0,n)};Ki.hydrateRoot=function(t,e,n){if(!Ex(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=SM;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=yM(e,null,t,1,n??null,r,!1,s,a),t[Rs]=e.current,Tu(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ip(e)};Ki.render=function(t,e,n){if(!rp(e))throw Error(he(200));return sp(null,t,e,!1,n)};Ki.unmountComponentAtNode=function(t){if(!rp(t))throw Error(he(40));return t._reactRootContainer?(To(function(){sp(null,null,t,!1,function(){t._reactRootContainer=null,t[Rs]=null})}),!0):!1};Ki.unstable_batchedUpdates=mx;Ki.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!rp(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return sp(t,e,n,!1,i)};Ki.version="18.3.1-next-f1338f8080-20240426";function EM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(EM)}catch(t){console.error(t)}}EM(),ES.exports=Ki;var hC=ES.exports,U1=hC;Km.createRoot=U1.createRoot,Km.hydrateRoot=U1.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Fu.apply(null,arguments)}var ua;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ua||(ua={}));const O1="popstate";function pC(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return G0("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:vh(r)}return gC(e,n,null,t)}function _n(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function MM(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mC(){return Math.random().toString(36).substr(2,8)}function k1(t,e){return{usr:t.state,key:t.key,idx:e}}function G0(t,e,n,i){return n===void 0&&(n=null),Fu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?dc(e):e,{state:n,key:e&&e.key||i||mC()})}function vh(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function dc(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function gC(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=ua.Pop,l=null,c=u();c==null&&(c=0,a.replaceState(Fu({},a.state,{idx:c}),""));function u(){return(a.state||{idx:null}).idx}function d(){o=ua.Pop;let m=u(),p=m==null?null:m-c;c=m,l&&l({action:o,location:_.location,delta:p})}function f(m,p){o=ua.Push;let x=G0(_.location,m,p);c=u()+1;let y=k1(x,c),v=_.createHref(x);try{a.pushState(y,"",v)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(v)}s&&l&&l({action:o,location:_.location,delta:1})}function h(m,p){o=ua.Replace;let x=G0(_.location,m,p);c=u();let y=k1(x,c),v=_.createHref(x);a.replaceState(y,"",v),s&&l&&l({action:o,location:_.location,delta:0})}function g(m){let p=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof m=="string"?m:vh(m);return x=x.replace(/ $/,"%20"),_n(p,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,p)}let _={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(O1,d),l=m,()=>{r.removeEventListener(O1,d),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let p=g(m);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:h,go(m){return a.go(m)}};return _}var z1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(z1||(z1={}));function _C(t,e,n){return n===void 0&&(n="/"),xC(t,e,n)}function xC(t,e,n,i){let r=typeof e=="string"?dc(e):e,s=Mx(r.pathname||"/",n);if(s==null)return null;let a=bM(t);vC(a);let o=null,l=NC(s);for(let c=0;o==null&&c<a.length;++c)o=CC(a[c],l);return o}function bM(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(_n(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=wa([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(_n(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),bM(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:TC(c,s.index),routesMeta:u})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of wM(s.path))r(s,a,l)}),e}function wM(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=wM(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function vC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:AC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const yC=/^:[\w-]+$/,SC=3,EC=2,MC=1,bC=10,wC=-2,B1=t=>t==="*";function TC(t,e){let n=t.split("/"),i=n.length;return n.some(B1)&&(i+=wC),e&&(i+=EC),n.filter(r=>!B1(r)).reduce((r,s)=>r+(yC.test(s)?SC:s===""?MC:bC),i)}function AC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function CC(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=RC({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d)return null;Object.assign(r,d.params),a.push({params:r,pathname:wa([s,d.pathname]),pathnameBase:IC(wa([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=wa([s,d.pathnameBase]))}return a}function RC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=PC(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,u,d)=>{let{paramName:f,isOptional:h}=u;if(f==="*"){let _=o[d]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const g=o[d];return h&&!g?c[f]=void 0:c[f]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function PC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),MM(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function NC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return MM(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Mx(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function DC(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?dc(t):t,s;return n?(n=CM(n),n.startsWith("/")?s=V1(n.substring(1),"/"):s=V1(n,e)):s=e,{pathname:s,search:FC(i),hash:UC(r)}}function V1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Yp(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function TM(t,e){let n=LC(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function AM(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=dc(t):(r=Fu({},t),_n(!r.pathname||!r.pathname.includes("?"),Yp("?","pathname","search",r)),_n(!r.pathname||!r.pathname.includes("#"),Yp("#","pathname","hash",r)),_n(!r.search||!r.search.includes("#"),Yp("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let d=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}o=d>=0?e[d]:"/"}let l=DC(r,o),c=a&&a!=="/"&&a.endsWith("/"),u=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const CM=t=>t.replace(/\/\/+/g,"/"),wa=t=>CM(t.join("/")),IC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),FC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,UC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function OC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const RM=["post","put","patch","delete"];new Set(RM);const kC=["get",...RM];new Set(kC);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uu(){return Uu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Uu.apply(null,arguments)}const bx=J.createContext(null),zC=J.createContext(null),Oo=J.createContext(null),ap=J.createContext(null),ko=J.createContext({outlet:null,matches:[],isDataRoute:!1}),PM=J.createContext(null);function BC(t,e){let{relative:n}=e===void 0?{}:e;nf()||_n(!1);let{basename:i,navigator:r}=J.useContext(Oo),{hash:s,pathname:a,search:o}=DM(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:wa([i,a])),r.createHref({pathname:l,search:o,hash:s})}function nf(){return J.useContext(ap)!=null}function rf(){return nf()||_n(!1),J.useContext(ap).location}function NM(t){J.useContext(Oo).static||J.useLayoutEffect(t)}function wx(){let{isDataRoute:t}=J.useContext(ko);return t?JC():VC()}function VC(){nf()||_n(!1);let t=J.useContext(bx),{basename:e,future:n,navigator:i}=J.useContext(Oo),{matches:r}=J.useContext(ko),{pathname:s}=rf(),a=JSON.stringify(TM(r,n.v7_relativeSplatPath)),o=J.useRef(!1);return NM(()=>{o.current=!0}),J.useCallback(function(c,u){if(u===void 0&&(u={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let d=AM(c,JSON.parse(a),s,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:wa([e,d.pathname])),(u.replace?i.replace:i.push)(d,u.state,u)},[e,i,a,s,t])}function DM(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=J.useContext(Oo),{matches:r}=J.useContext(ko),{pathname:s}=rf(),a=JSON.stringify(TM(r,i.v7_relativeSplatPath));return J.useMemo(()=>AM(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function HC(t,e){return GC(t,e)}function GC(t,e,n,i){nf()||_n(!1);let{navigator:r}=J.useContext(Oo),{matches:s}=J.useContext(ko),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=rf(),u;if(e){var d;let m=typeof e=="string"?dc(e):e;l==="/"||(d=m.pathname)!=null&&d.startsWith(l)||_n(!1),u=m}else u=c;let f=u.pathname||"/",h=f;if(l!=="/"){let m=l.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=_C(t,{pathname:h}),_=YC(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:wa([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:wa([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&_?J.createElement(ap.Provider,{value:{location:Uu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ua.Pop}},_):_}function WC(){let t=QC(),e=OC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),n?J.createElement("pre",{style:r},n):null,null)}const jC=J.createElement(WC,null);class XC extends J.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?J.createElement(ko.Provider,{value:this.props.routeContext},J.createElement(PM.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $C(t){let{routeContext:e,match:n,children:i}=t,r=J.useContext(bx);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),J.createElement(ko.Provider,{value:e},i)}function YC(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let u=a.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);u>=0||_n(!1),a=a.slice(0,Math.min(a.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<a.length;u++){let d=a[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:h}=n,g=d.route.loader&&f[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||g){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((u,d,f)=>{let h,g=!1,_=null,m=null;n&&(h=o&&d.route.id?o[d.route.id]:void 0,_=d.route.errorElement||jC,l&&(c<0&&f===0?(eR("route-fallback"),g=!0,m=null):c===f&&(g=!0,m=d.route.hydrateFallbackElement||null)));let p=e.concat(a.slice(0,f+1)),x=()=>{let y;return h?y=_:g?y=m:d.route.Component?y=J.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=u,J.createElement($C,{match:d,routeContext:{outlet:u,matches:p,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?J.createElement(XC,{location:n.location,revalidation:n.revalidation,component:_,error:h,children:x(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):x()},null)}var LM=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(LM||{}),IM=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(IM||{});function qC(t){let e=J.useContext(bx);return e||_n(!1),e}function KC(t){let e=J.useContext(zC);return e||_n(!1),e}function ZC(t){let e=J.useContext(ko);return e||_n(!1),e}function FM(t){let e=ZC(),n=e.matches[e.matches.length-1];return n.route.id||_n(!1),n.route.id}function QC(){var t;let e=J.useContext(PM),n=KC(),i=FM();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function JC(){let{router:t}=qC(LM.UseNavigateStable),e=FM(IM.UseNavigateStable),n=J.useRef(!1);return NM(()=>{n.current=!0}),J.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Uu({fromRouteId:e},s)))},[t,e])}const H1={};function eR(t,e,n){H1[t]||(H1[t]=!0)}function tR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function W0(t){_n(!1)}function nR(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ua.Pop,navigator:s,static:a=!1,future:o}=t;nf()&&_n(!1);let l=e.replace(/^\/*/,"/"),c=J.useMemo(()=>({basename:l,navigator:s,static:a,future:Uu({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=dc(i));let{pathname:u="/",search:d="",hash:f="",state:h=null,key:g="default"}=i,_=J.useMemo(()=>{let m=Mx(u,l);return m==null?null:{location:{pathname:m,search:d,hash:f,state:h,key:g},navigationType:r}},[l,u,d,f,h,g,r]);return _==null?null:J.createElement(Oo.Provider,{value:c},J.createElement(ap.Provider,{children:n,value:_}))}function iR(t){let{children:e,location:n}=t;return HC(j0(e),n)}new Promise(()=>{});function j0(t,e){e===void 0&&(e=[]);let n=[];return J.Children.forEach(t,(i,r)=>{if(!J.isValidElement(i))return;let s=[...e,r];if(i.type===J.Fragment){n.push.apply(n,j0(i.props.children,s));return}i.type!==W0&&_n(!1),!i.props.index||!i.props.children||_n(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=j0(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X0(){return X0=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},X0.apply(null,arguments)}function rR(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function sR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function aR(t,e){return t.button===0&&(!e||e==="_self")&&!sR(t)}const oR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lR="6";try{window.__reactRouterVersion=lR}catch{}const cR="startTransition",G1=nT[cR];function uR(t){let{basename:e,children:n,future:i,window:r}=t,s=J.useRef();s.current==null&&(s.current=pC({window:r,v5Compat:!0}));let a=s.current,[o,l]=J.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},u=J.useCallback(d=>{c&&G1?G1(()=>l(d)):l(d)},[l,c]);return J.useLayoutEffect(()=>a.listen(u),[a,u]),J.useEffect(()=>tR(i),[i]),J.createElement(nR,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const fR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lt=J.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:u,viewTransition:d}=e,f=rR(e,oR),{basename:h}=J.useContext(Oo),g,_=!1;if(typeof c=="string"&&dR.test(c)&&(g=c,fR))try{let y=new URL(window.location.href),v=c.startsWith("//")?new URL(y.protocol+c):new URL(c),b=Mx(v.pathname,h);v.origin===y.origin&&b!=null?c=b+v.search+v.hash:_=!0}catch{}let m=BC(c,{relative:r}),p=hR(c,{replace:a,state:o,target:l,preventScrollReset:u,relative:r,viewTransition:d});function x(y){i&&i(y),y.defaultPrevented||p(y)}return J.createElement("a",X0({},f,{href:g||m,onClick:_||s?i:x,ref:n,target:l}))});var W1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(W1||(W1={}));var j1;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(j1||(j1={}));function hR(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=wx(),c=rf(),u=DM(t,{relative:a});return J.useCallback(d=>{if(aR(d,n)){d.preventDefault();let f=i!==void 0?i:vh(c)===vh(u);l(t,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,u,i,r,n,t,s,a,o])}let pR={data:""},mR=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||pR},gR=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,_R=/\/\*[^]*?\*\/|  +/g,X1=/\n+/g,aa=(t,e)=>{let n="",i="",r="";for(let s in t){let a=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+a+";":i+=s[1]=="f"?aa(a,s):s+"{"+aa(a,s[1]=="k"?"":e)+"}":typeof a=="object"?i+=aa(a,e?e.replace(/([^,])+/g,o=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):s):a!=null&&(s=s[1]=="-"?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=aa.p?aa.p(s,a):s+":"+a+";")}return n+(e&&r?e+"{"+r+"}":r)+i},Xs={},UM=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+UM(t[n]);return e}return t},xR=(t,e,n,i,r)=>{let s=UM(t),a=Xs[s]||(Xs[s]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(s));if(!Xs[a]){let l=s!==t?t:(c=>{let u,d,f=[{}];for(;u=gR.exec(c.replace(_R,""));)u[4]?f.shift():u[3]?(d=u[3].replace(X1," ").trim(),f.unshift(f[0][d]=f[0][d]||{})):f[0][u[1]]=u[2].replace(X1," ").trim();return f[0]})(t);Xs[a]=aa(r?{["@keyframes "+a]:l}:l,n?"":"."+a)}let o=n&&Xs.g;return n&&(Xs.g=Xs[a]),((l,c,u,d)=>{d?c.data=c.data.replace(d,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(Xs[a],e,i,o),a},vR=(t,e,n)=>t.reduce((i,r,s)=>{let a=e[s];if(a&&a.call){let o=a(n),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;a=l?"."+l:o&&typeof o=="object"?o.props?"":aa(o,""):o===!1?"":o}return i+r+(a??"")},"");function op(t){let e=this||{},n=t.call?t(e.p):t;return xR(n.unshift?n.raw?vR(n,[].slice.call(arguments,1),e.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(e.p):r),{}):n,mR(e.target),e.g,e.o,e.k)}let OM,$0,Y0;op.bind({g:1});let Ds=op.bind({k:1});function yR(t,e,n,i){aa.p=e,OM=t,$0=n,Y0=i}function Ha(t,e){let n=this||{};return function(){let i=arguments;function r(s,a){let o=Object.assign({},s),l=o.className||r.className;n.p=Object.assign({theme:$0&&$0()},o),n.o=/go\d/.test(l),o.className=op.apply(n,i)+(l?" "+l:"");let c=t;return t[0]&&(c=o.as||t,delete o.as),Y0&&c[0]&&Y0(o),OM(c,o)}return r}}var SR=t=>typeof t=="function",yh=(t,e)=>SR(t)?t(e):t,ER=(()=>{let t=0;return()=>(++t).toString()})(),kM=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),MR=20,Tx="default",zM=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:i}=e;return zM(t,{type:t.toasts.find(a=>a.id===i.id)?1:0,toast:i});case 3:let{toastId:r}=e;return{...t,toasts:t.toasts.map(a=>a.id===r||r===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},Nd=[],BM={toasts:[],pausedAt:void 0,settings:{toastLimit:MR}},jr={},VM=(t,e=Tx)=>{jr[e]=zM(jr[e]||BM,t),Nd.forEach(([n,i])=>{n===e&&i(jr[e])})},HM=t=>Object.keys(jr).forEach(e=>VM(t,e)),bR=t=>Object.keys(jr).find(e=>jr[e].toasts.some(n=>n.id===t)),lp=(t=Tx)=>e=>{VM(e,t)},wR={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},TR=(t={},e=Tx)=>{let[n,i]=J.useState(jr[e]||BM),r=J.useRef(jr[e]);J.useEffect(()=>(r.current!==jr[e]&&i(jr[e]),Nd.push([e,i]),()=>{let a=Nd.findIndex(([o])=>o===e);a>-1&&Nd.splice(a,1)}),[e]);let s=n.toasts.map(a=>{var o,l,c;return{...t,...t[a.type],...a,removeDelay:a.removeDelay||((o=t[a.type])==null?void 0:o.removeDelay)||(t==null?void 0:t.removeDelay),duration:a.duration||((l=t[a.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||wR[a.type],style:{...t.style,...(c=t[a.type])==null?void 0:c.style,...a.style}}});return{...n,toasts:s}},AR=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||ER()}),sf=t=>(e,n)=>{let i=AR(e,t,n);return lp(i.toasterId||bR(i.id))({type:2,toast:i}),i.id},Mn=(t,e)=>sf("blank")(t,e);Mn.error=sf("error");Mn.success=sf("success");Mn.loading=sf("loading");Mn.custom=sf("custom");Mn.dismiss=(t,e)=>{let n={type:3,toastId:t};e?lp(e)(n):HM(n)};Mn.dismissAll=t=>Mn.dismiss(void 0,t);Mn.remove=(t,e)=>{let n={type:4,toastId:t};e?lp(e)(n):HM(n)};Mn.removeAll=t=>Mn.remove(void 0,t);Mn.promise=(t,e,n)=>{let i=Mn.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(r=>{let s=e.success?yh(e.success,r):void 0;return s?Mn.success(s,{id:i,...n,...n==null?void 0:n.success}):Mn.dismiss(i),r}).catch(r=>{let s=e.error?yh(e.error,r):void 0;s?Mn.error(s,{id:i,...n,...n==null?void 0:n.error}):Mn.dismiss(i)}),t};var CR=1e3,RR=(t,e="default")=>{let{toasts:n,pausedAt:i}=TR(t,e),r=J.useRef(new Map).current,s=J.useCallback((d,f=CR)=>{if(r.has(d))return;let h=setTimeout(()=>{r.delete(d),a({type:4,toastId:d})},f);r.set(d,h)},[]);J.useEffect(()=>{if(i)return;let d=Date.now(),f=n.map(h=>{if(h.duration===1/0)return;let g=(h.duration||0)+h.pauseDuration-(d-h.createdAt);if(g<0){h.visible&&Mn.dismiss(h.id);return}return setTimeout(()=>Mn.dismiss(h.id,e),g)});return()=>{f.forEach(h=>h&&clearTimeout(h))}},[n,i,e]);let a=J.useCallback(lp(e),[e]),o=J.useCallback(()=>{a({type:5,time:Date.now()})},[a]),l=J.useCallback((d,f)=>{a({type:1,toast:{id:d,height:f}})},[a]),c=J.useCallback(()=>{i&&a({type:6,time:Date.now()})},[i,a]),u=J.useCallback((d,f)=>{let{reverseOrder:h=!1,gutter:g=8,defaultPosition:_}=f||{},m=n.filter(y=>(y.position||_)===(d.position||_)&&y.height),p=m.findIndex(y=>y.id===d.id),x=m.filter((y,v)=>v<p&&y.visible).length;return m.filter(y=>y.visible).slice(...h?[x+1]:[0,x]).reduce((y,v)=>y+(v.height||0)+g,0)},[n]);return J.useEffect(()=>{n.forEach(d=>{if(d.dismissed)s(d.id,d.removeDelay);else{let f=r.get(d.id);f&&(clearTimeout(f),r.delete(d.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:o,endPause:c,calculateOffset:u}}},PR=Ds`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,NR=Ds`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,DR=Ds`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,LR=Ha("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${PR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${NR} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${DR} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,IR=Ds`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,FR=Ha("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${IR} 1s linear infinite;
`,UR=Ds`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,OR=Ds`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,kR=Ha("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${UR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${OR} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,zR=Ha("div")`
  position: absolute;
`,BR=Ha("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,VR=Ds`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,HR=Ha("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${VR} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,GR=({toast:t})=>{let{icon:e,type:n,iconTheme:i}=t;return e!==void 0?typeof e=="string"?J.createElement(HR,null,e):e:n==="blank"?null:J.createElement(BR,null,J.createElement(FR,{...i}),n!=="loading"&&J.createElement(zR,null,n==="error"?J.createElement(LR,{...i}):J.createElement(kR,{...i})))},WR=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,jR=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,XR="0%{opacity:0;} 100%{opacity:1;}",$R="0%{opacity:1;} 100%{opacity:0;}",YR=Ha("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,qR=Ha("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,KR=(t,e)=>{let n=t.includes("top")?1:-1,[i,r]=kM()?[XR,$R]:[WR(n),jR(n)];return{animation:e?`${Ds(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ds(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ZR=J.memo(({toast:t,position:e,style:n,children:i})=>{let r=t.height?KR(t.position||e||"top-center",t.visible):{opacity:0},s=J.createElement(GR,{toast:t}),a=J.createElement(qR,{...t.ariaProps},yh(t.message,t));return J.createElement(YR,{className:t.className,style:{...r,...n,...t.style}},typeof i=="function"?i({icon:s,message:a}):J.createElement(J.Fragment,null,s,a))});yR(J.createElement);var QR=({id:t,className:e,style:n,onHeightUpdate:i,children:r})=>{let s=J.useCallback(a=>{if(a){let o=()=>{let l=a.getBoundingClientRect().height;i(t,l)};o(),new MutationObserver(o).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return J.createElement("div",{ref:s,className:e,style:n},r)},JR=(t,e)=>{let n=t.includes("top"),i=n?{top:0}:{bottom:0},r=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:kM()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...i,...r}},eP=op`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Pf=16,tP=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:i,children:r,toasterId:s,containerStyle:a,containerClassName:o})=>{let{toasts:l,handlers:c}=RR(n,s);return J.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Pf,left:Pf,right:Pf,bottom:Pf,pointerEvents:"none",...a},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(u=>{let d=u.position||e,f=c.calculateOffset(u,{reverseOrder:t,gutter:i,defaultPosition:e}),h=JR(d,f);return J.createElement(QR,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?eP:"",style:h},u.type==="custom"?yh(u.message,u):r?r(u):J.createElement(ZR,{toast:u,position:d}))}))},nP=Mn;function hs(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function GM(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ji={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ou={duration:.5,overwrite:!1,delay:0},Ax,Bn,Xt,ur=1e8,It=1/ur,q0=Math.PI*2,iP=q0/4,rP=0,WM=Math.sqrt,sP=Math.cos,aP=Math.sin,Fn=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},Ls=function(e){return typeof e=="number"},Cx=function(e){return typeof e>"u"},rs=function(e){return typeof e=="object"},wi=function(e){return e!==!1},Rx=function(){return typeof window<"u"},Nf=function(e){return rn(e)||Fn(e)},jM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jn=Array.isArray,oP=/random\([^)]+\)/g,lP=/,\s*/g,$1=/(?:-?\.?\d|\.)+/gi,XM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$M=/[+-]=-?[.\d]+/,cP=/[^,'"\[\]\s]+/gi,uP=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,kr,K0,Px,Yi={},Sh={},YM,qM=function(e){return(Sh=Ql(e,Yi))&&Pi},Nx=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},ku=function(e,n){return!n&&console.warn(e)},KM=function(e,n){return e&&(Yi[e]=n)&&Sh&&(Sh[e]=n)||Yi},zu=function(){return 0},fP={suppressEvents:!0,isStart:!0,kill:!1},Dd={suppressEvents:!0,kill:!1},dP={suppressEvents:!0},Dx={},Ta=[],Z0={},ZM,Oi={},Kp={},Y1=30,Ld=[],Lx="",Ix=function(e){var n=e[0],i,r;if(rs(n)||rn(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Ld.length;r--&&!Ld[r].targetTest(n););i=Ld[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new vb(e[r],i)))||e.splice(r,1);return e},mo=function(e){return e._gsap||Ix(fr(e))[0]._gsap},QM=function(e,n,i){return(i=e[n])&&rn(i)?e[n]():Cx(i)&&e.getAttribute&&e.getAttribute(n)||i},Ti=function(e,n){return(e=e.split(",")).forEach(n)||e},ln=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},Il=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},hP=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},Eh=function(){var e=Ta.length,n=Ta.slice(0),i,r;for(Z0={},Ta.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Fx=function(e){return!!(e._initted||e._startAt||e.add)},JM=function(e,n,i,r){Ta.length&&!Bn&&Eh(),e.render(n,i,!!(Bn&&n<0&&Fx(e))),Ta.length&&!Bn&&Eh()},eb=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(cP).length<2?n:Fn(e)?e.trim():e},tb=function(e){return e},qi=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},pP=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},Ql=function(e,n){for(var i in n)e[i]=n[i];return e},q1=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=rs(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},Mh=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},iu=function(e){var n=e.parent||qt,i=e.keyframes?pP(Jn(e.keyframes)):qi;if(wi(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},mP=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},nb=function(e,n,i,r,s){var a=e[r],o;if(s)for(o=n[s];a&&a[s]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=a,n.parent=n._dp=e,n},cp=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,a=n._next;s?s._next=a:e[i]===n&&(e[i]=a),a?a._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},Na=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},go=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},gP=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Q0=function(e,n,i,r){return e._startAt&&(Bn?e._startAt.revert(Dd):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},_P=function t(e){return!e||e._ts&&t(e.parent)},K1=function(e){return e._repeat?Jl(e._tTime,e=e.duration()+e._rDelay)*e:0},Jl=function(e,n){var i=Math.floor(e=$t(e/n));return e&&i===e?i-1:i},bh=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},up=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},fp=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=$t(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),up(e),i._dirty||go(i,e)),e},ib=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=bh(e.rawTime(),n),(!n._dur||af(0,n.totalDuration(),i)-n._tTime>It)&&n.render(i,!0)),go(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-It}},Gr=function(e,n,i,r){return n.parent&&Na(n),n._start=$t((Ls(i)?i:i||e!==qt?nr(e,i,n):e._time)+n._delay),n._end=$t(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),nb(e,n,"_first","_last",e._sort?"_start":0),J0(n)||(e._recent=n),r||ib(e,n),e._ts<0&&fp(e,e._tTime),e},rb=function(e,n){return(Yi.ScrollTrigger||Nx("scrollTrigger",n))&&Yi.ScrollTrigger.create(n,e)},sb=function(e,n,i,r,s){if(Ox(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!Bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ZM!==zi.frame)return Ta.push(e),e._lazy=[s,r],1},xP=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},J0=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},vP=function(e,n,i,r){var s=e.ratio,a=n<0||!n&&(!e._start&&xP(e)&&!(!e._initted&&J0(e))||(e._ts<0||e._dp._ts<0)&&!J0(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=af(0,e._tDur,n),u=Jl(l,o),e._yoyo&&u&1&&(a=1-a),u!==Jl(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Bn||r||e._zTime===It||!n&&e._zTime){if(!e._initted&&sb(e,n,r,i,l))return;for(d=e._zTime,e._zTime=n||(i?It:0),i||(i=n&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;n<0&&Q0(e,n,i,!0),e._onUpdate&&!i&&Hi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Hi(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===a&&(a&&Na(e,1),!i&&!Bn&&(Hi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},yP=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},ec=function(e,n,i,r){var s=e._repeat,a=$t(n)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:$t(a*(s+1)+e._rDelay*s):a,o>0&&!r&&fp(e,e._tTime=e._tDur*o),e.parent&&up(e),i||go(e.parent,e),e},Z1=function(e){return e instanceof yi?go(e):ec(e,e._dur)},SP={_start:0,endTime:zu,totalDuration:zu},nr=function t(e,n,i){var r=e.labels,s=e._recent||SP,a=e.duration()>=ur?s.endTime(!1):e._dur,o,l,c;return Fn(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=a),r[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(Jn(i)?i[0]:i).totalDuration()),o>1?t(e,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},ru=function(e,n,i){var r=Ls(n[1]),s=(r?2:1)+(e<2?0:1),a=n[s],o,l;if(r&&(a.duration=n[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=wi(l.vars.inherit)&&l.parent;a.immediateRender=wi(o.immediateRender),e<2?a.runBackwards=1:a.startAt=n[s-1]}return new mn(n[0],a,n[s+1])},Ga=function(e,n){return e||e===0?n(e):n},af=function(e,n,i){return i<e?e:i>n?n:i},Zn=function(e,n){return!Fn(e)||!(n=uP.exec(e))?"":n[1]},EP=function(e,n,i){return Ga(i,function(r){return af(e,n,r)})},eg=[].slice,ab=function(e,n){return e&&rs(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&rs(e[0]))&&!e.nodeType&&e!==kr},MP=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Fn(r)&&!n||ab(r,1)?(s=i).push.apply(s,fr(r)):i.push(r)})||i},fr=function(e,n,i){return Xt&&!n&&Xt.selector?Xt.selector(e):Fn(e)&&!i&&(K0||!tc())?eg.call((n||Px).querySelectorAll(e),0):Jn(e)?MP(e,i):ab(e)?eg.call(e,0):e?[e]:[]},tg=function(e){return e=fr(e)[0]||ku("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return fr(n,i.querySelectorAll?i:i===e?ku("Invalid scope")||Px.createElement("div"):e)}},ob=function(e){return e.sort(function(){return .5-Math.random()})},lb=function(e){if(rn(e))return e;var n=rs(e)?e:{each:e},i=_o(n.ease),r=n.from||0,s=parseFloat(n.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=n.axis,u=r,d=r;return Fn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],d=r[1]),function(f,h,g){var _=(g||n).length,m=a[_],p,x,y,v,b,T,w,S,A;if(!m){if(A=n.grid==="auto"?0:(n.grid||[1,ur])[1],!A){for(w=-ur;w<(w=g[A++].getBoundingClientRect().left)&&A<_;);A<_&&A--}for(m=a[_]=[],p=l?Math.min(A,_)*u-.5:r%A,x=A===ur?0:l?_*d/A-.5:r/A|0,w=0,S=ur,T=0;T<_;T++)y=T%A-p,v=x-(T/A|0),m[T]=b=c?Math.abs(c==="y"?v:y):WM(y*y+v*v),b>w&&(w=b),b<S&&(S=b);r==="random"&&ob(m),m.max=w-S,m.min=S,m.v=_=(parseFloat(n.amount)||parseFloat(n.each)*(A>_?_-1:c?c==="y"?_/A:A:Math.max(A,_/A))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Zn(n.amount||n.each)||0,i=i&&_<0?UP(i):i}return _=(m[f]-m.min)/m.max||0,$t(m.b+(i?i(_):_)*m.v)+m.u}},ng=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=$t(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(Ls(i)?0:Zn(i))}},cb=function(e,n){var i=Jn(e),r,s;return!i&&rs(e)&&(r=i=e.radius||ur,e.values?(e=fr(e.values),(s=!Ls(e[0]))&&(r*=r)):e=ng(e.increment)),Ga(n,i?rn(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ur,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:a,s||u===a||Ls(a)?u:u+Zn(a)}:ng(e))},ub=function(e,n,i,r){return Ga(Jn(e)?!n:i===!0?!!(i=0):!r,function(){return Jn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},bP=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,a){return a(s)},r)}},wP=function(e,n){return function(i){return e(parseFloat(i))+(n||Zn(i))}},TP=function(e,n,i){return db(e,n,0,1,i)},fb=function(e,n,i){return Ga(i,function(r){return e[~~n(r)]})},AP=function t(e,n,i){var r=n-e;return Jn(e)?fb(e,t(0,e.length),n):Ga(i,function(s){return(r+(s-e)%r)%r+e})},CP=function t(e,n,i){var r=n-e,s=r*2;return Jn(e)?fb(e,t(0,e.length-1),n):Ga(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Bu=function(e){return e.replace(oP,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(lP);return ub(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},db=function(e,n,i,r,s){var a=n-e,o=r-i;return Ga(s,function(l){return i+((l-e)/a*o||0)})},RP=function t(e,n,i,r){var s=isNaN(e+n)?0:function(h){return(1-h)*e+h*n};if(!s){var a=Fn(e),o={},l,c,u,d,f;if(i===!0&&(r=1)&&(i=null),a)e={p:e},n={p:n};else if(Jn(e)&&!Jn(n)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(t(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return u[_](g-_)},i=n}else r||(e=Ql(Jn(e)?[]:{},e));if(!u){for(l in n)Ux.call(o,e,l,"get",n[l]);s=function(g){return Bx(g,o)||(a?e.p:e)}}}return Ga(i,s)},Q1=function(e,n,i){var r=e.labels,s=ur,a,o,l;for(a in r)o=r[a]-n,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Hi=function(e,n,i){var r=e.vars,s=r[n],a=Xt,o=e._ctx,l,c,u;if(s)return l=r[n+"Params"],c=r.callbackScope||e,i&&Ta.length&&Eh(),o&&(Xt=o),u=l?s.apply(c,l):s.call(c),Xt=a,u},kc=function(e){return Na(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bn),e.progress()<1&&Hi(e,"onInterrupt"),e},wl,hb=[],pb=function(e){if(e)if(e=!e.name&&e.default||e,Rx()||e.headless){var n=e.name,i=rn(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:zu,render:Bx,add:Ux,kill:XP,modifier:jP,rawVars:0},a={targetTest:0,get:0,getSetter:zx,aliases:{},register:0};if(tc(),e!==r){if(Oi[n])return;qi(r,qi(Mh(e,s),a)),Ql(r.prototype,Ql(s,Mh(e,a))),Oi[r.prop=n]=r,e.targetTest&&(Ld.push(r),Dx[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}KM(n,r),e.register&&e.register(Pi,r,Ai)}else hb.push(e)},Dt=255,zc={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},Zp=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*Dt+.5|0},mb=function(e,n,i){var r=e?Ls(e)?[e>>16,e>>8&Dt,e&Dt]:0:zc.black,s,a,o,l,c,u,d,f,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),zc[e])r=zc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Dt,r&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match($1),!n)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Zp(l+1/3,s,a),r[1]=Zp(l,s,a),r[2]=Zp(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(XM),i&&r.length<4&&(r[3]=1),r}else r=e.match($1)||zc.transparent;r=r.map(Number)}return n&&!g&&(s=r[0]/Dt,a=r[1]/Dt,o=r[2]/Dt,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},gb=function(e){var n=[],i=[],r=-1;return e.split(Aa).forEach(function(s){var a=s.match(bl)||[];n.push.apply(n,a),i.push(r+=a.length+1)}),n.c=i,n},J1=function(e,n,i){var r="",s=(e+r).match(Aa),a=n?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=mb(f,n,1))&&a+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=gb(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Aa,"1").split(bl),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Aa),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},Aa=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in zc)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),PP=/hsl[a]?\(/,_b=function(e){var n=e.join(" "),i;if(Aa.lastIndex=0,Aa.test(n))return i=PP.test(n),e[1]=J1(e[1],i),e[0]=J1(e[0],i,gb(e[1])),!0},Vu,zi=function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,a=s,o=[],l,c,u,d,f,h,g=function _(m){var p=t()-r,x=m===!0,y,v,b,T;if((p>e||p<0)&&(i+=p-n),r+=p,b=r-i,y=b-a,(y>0||x)&&(T=++d.frame,f=b-d.time*1e3,d.time=b=b/1e3,a+=y+(y>=s?4:s-y),v=1),x||(l=c(_)),v)for(h=0;h<o.length;h++)o[h](b,f,T,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){YM&&(!K0&&Rx()&&(kr=K0=window,Px=kr.document||{},Yi.gsap=Pi,(kr.gsapVersions||(kr.gsapVersions=[])).push(Pi.version),qM(Sh||kr.GreenSockGlobals||!kr.gsap&&kr||{}),hb.forEach(pb)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Vu=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Vu=0,c=zu},lagSmoothing:function(m,p){e=m||1/0,n=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,p,x){var y=p?function(v,b,T,w){m(v,b,T,w),d.remove(y)}:m;return d.remove(m),o[x?"unshift":"push"](y),tc(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},d}(),tc=function(){return!Vu&&zi.wake()},mt={},NP=/^[\d.\-M][\d.\-,\s]/,DP=/["']/g,LP=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[r]=isNaN(c)?c.replace(DP,"").trim():+c,r=l.substr(o+1).trim();return n},IP=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},FP=function(e){var n=(e+"").split("("),i=mt[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[LP(n[1])]:IP(e).split(",").map(eb)):mt._CE&&NP.test(e)?mt._CE("",e):i},UP=function(e){return function(n){return 1-e(1-n)}},_o=function(e,n){return e&&(rn(e)?e:mt[e]||FP(e))||n},zo=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},a;return Ti(e,function(o){mt[o]=Yi[o]=s,mt[a=o.toLowerCase()]=i;for(var l in s)mt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=mt[o+"."+l]=s[l]}),s},xb=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Qp=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),a=s/q0*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*aP((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:xb(o);return s=q0/s,l.config=function(c,u){return t(e,c,u)},l},Jp=function t(e,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:xb(i);return r.config=function(s){return t(e,s)},r};Ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;zo(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});mt.Linear.easeNone=mt.none=mt.Linear.easeIn;zo("Elastic",Qp("in"),Qp("out"),Qp());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(o){return o<n?t*o*o:o<i?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};zo("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);zo("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});zo("Circ",function(t){return-(WM(1-t*t)-1)});zo("Sine",function(t){return t===1?1:-sP(t*iP)+1});zo("Back",Jp("in"),Jp("out"),Jp());mt.SteppedEase=mt.steps=Yi.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,a=1-It;return function(o){return((r*af(0,a,o)|0)+s)*i}}};Ou.ease=mt["quad.out"];Ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Lx+=t+","+t+"Params,"});var vb=function(e,n){this.id=rP++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:QM,this.set=n?n.getSetter:zx},Hu=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,ec(this,+n.duration,1,1),this.data=n.data,Xt&&(this._ctx=Xt,Xt.data.push(this)),Vu||zi.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ec(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(tc(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fp(this,i),!s._dp||s.parent||ib(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Gr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),JM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+K1(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+K1(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Jl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?bh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-It?0:this._rts,this.totalTime(af(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),up(this),gP(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(tc(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==It&&(this._tTime-=It)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=$t(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Gr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(wi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bh(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=dP);var r=Bn;return Bn=i,Fx(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Bn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Z1(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Z1(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(nr(this,i),wi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,wi(r)),this._dur||(this._zTime=-It),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-It)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=rn(i)?i:tb,l=function(){var u=r.then;r.then=null,s&&s(),rn(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){kc(this)},t}();qi(Hu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var yi=function(t){GM(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=wi(i.sortChildren),qt&&Gr(i.parent||qt,hs(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&rb(hs(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,a){return ru(0,arguments,this),this},n.from=function(r,s,a){return ru(1,arguments,this),this},n.fromTo=function(r,s,a,o){return ru(2,arguments,this),this},n.set=function(r,s,a){return s.duration=0,s.parent=this,iu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new mn(r,s,nr(this,a),1),this},n.call=function(r,s,a){return Gr(this,mn.delayedCall(0,r,s),a)},n.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new mn(r,a,nr(this,l)),this},n.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,iu(a).immediateRender=wi(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},n.staggerFromTo=function(r,s,a,o,l,c,u,d){return o.startAt=a,iu(o).immediateRender=wi(o.immediateRender),this.staggerTo(r,s,o,l,c,u,d)},n.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:$t(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,h,g,_,m,p,x,y,v,b,T,w;if(this!==qt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),f=u,v=this._start,y=this._ts,p=!y,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=$t(u%m),u===l?(_=this._repeat,f=c):(b=$t(u/m),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=Jl(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),T&&_&1&&(f=c-f,w=1),_!==b&&!this._lock){var S=T&&b&1,A=S===(T&&_&1);if(_<b&&(S=!S),o=S?0:u%c?c:u,this._lock=1,this.render(o||(w?0:$t(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Hi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,A&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=yP(this,$t(o),$t(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!b&&(Hi(this,"onStart"),this._tTime!==u))return this;if(f>=o&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=-It);break}}h=g}else{h=this._last;for(var R=r<0?r:f;h;){if(g=h._prev,(h._act||R<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,s,a||Bn&&Fx(h)),f!==this._time||!this._ts&&!p){x=0,g&&(u+=this._zTime=R?-It:It);break}}h=g}}if(x&&!s&&(this.pause(),x.render(f>=o?0:-It)._zTime=f>=o?1:-1,this._ts))return this._start=v,up(this),this.render(r,s,a);this._onUpdate&&!s&&Hi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Na(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Hi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var a=this;if(Ls(s)||(s=nr(this,s,r)),!(r instanceof Hu)){if(Jn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Fn(r))return this.addLabel(r,s);if(rn(r))r=mn.delayedCall(0,r);else return this}return this!==r?Gr(this,r,s):this},n.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ur);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof mn?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},n.remove=function(r){return Fn(r)?this.removeLabel(r):rn(r)?this.killTweensOf(r):(r.parent===this&&cp(this,r),r===this._recent&&(this._recent=this._last),go(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(zi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=nr(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,a){var o=mn.delayedCall(0,s||zu,a);return o.data="isPause",this._hasPause=1,Gr(this,o,nr(this,r))},n.removePause=function(r){var s=this._first;for(r=nr(this,r);s;)s._start===r&&s.data==="isPause"&&Na(s),s=s._next},n.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)fa!==o[l]&&o[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var a=[],o=fr(r),l=this._first,c=Ls(s),u;l;)l instanceof mn?hP(l._targets,o)&&(c?(!fa||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},n.tweenTo=function(r,s){s=s||{};var a=this,o=nr(a,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=mn.to(a,qi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||It,onStart:function(){if(a.pause(),!h){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&ec(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,d||[])}},s));return f?g.render(0):g},n.tweenFromTo=function(r,s,a){return this.tweenTo(s,qi({startAt:{time:nr(this,r)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),Q1(this,nr(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),Q1(this,nr(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+It)},n.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=$t(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return go(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),go(this)},n.totalDuration=function(r){var s=0,a=this,o=a._last,l=ur,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Gr(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=$t(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ec(a,a===qt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(qt._ts&&(JM(qt,bh(r,qt)),ZM=zi.frame),zi.frame>=Y1){Y1+=ji.autoSleep||120;var s=qt._first;if((!s||!s._ts)&&ji.autoSleep&&zi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||zi.sleep()}}},e}(Hu);qi(yi.prototype,{_lock:0,_hasPause:0,_forcing:0});var OP=function(e,n,i,r,s,a,o){var l=new Ai(this._pt,e,n,0,1,wb,null,s),c=0,u=0,d,f,h,g,_,m,p,x;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Bu(r)),a&&(x=[i,r],a(x,e,n),i=x[0],r=x[1]),f=i.match(qp)||[];d=qp.exec(r);)g=d[0],_=r.substring(c,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Il(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=qp.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,($M.test(r)||p)&&(l.e=0),this._pt=l,l},Ux=function(e,n,i,r,s,a,o,l,c,u){rn(r)&&(r=r(s||0,e,a));var d=e[n],f=i!=="get"?i:rn(d)?c?e[n.indexOf("set")||!rn(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():d,h=rn(d)?c?HP:Mb:kx,g;if(Fn(r)&&(~r.indexOf("random(")&&(r=Bu(r)),r.charAt(1)==="="&&(g=Il(f,r)+(Zn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||ig)return!isNaN(f*r)&&r!==""?(g=new Ai(this._pt,e,n,+f||0,r-(f||0),typeof d=="boolean"?WP:bb,0,h),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(n in e)&&Nx(n,r),OP.call(this,e,n,f,r,h,l||ji.stringFilter,c))},kP=function(e,n,i,r,s){if(rn(e)&&(e=su(e,s,n,i,r)),!rs(e)||e.style&&e.nodeType||Jn(e)||jM(e))return Fn(e)?su(e,s,n,i,r):e;var a={},o;for(o in e)a[o]=su(e[o],s,n,i,r);return a},yb=function(e,n,i,r,s,a){var o,l,c,u;if(Oi[e]&&(o=new Oi[e]).init(s,o.rawVars?n[e]:kP(n[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Ai(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==wl))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},fa,ig,Ox=function t(e,n,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!Ax,v=e.timeline,b=r.easeReverse||d,T,w,S,A,R,D,L,G,Y,k,X,U,I;if(v&&(!f||!s)&&(s="none"),e._ease=_o(s,Ou.ease),e._rEase=b&&(_o(b)||e._ease),e._from=!v&&!!r.runBackwards,e._from&&(e.ratio=1),!v||f&&!r.stagger){if(G=m[0]?mo(m[0]).harness:0,U=G&&r[G.prop],T=Mh(r,Dx),_&&(_._zTime<0&&_.progress(1),n<0&&u&&o&&!h?_.render(-1,!0):_.revert(u&&g?Dd:fP),_._lazy=0),a){if(Na(e._startAt=mn.set(m,qi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&wi(l),startAt:null,delay:0,onUpdate:c&&function(){return Hi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Bn||!o&&!h)&&e._startAt.revert(Dd),o&&g&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(u&&g&&!_){if(n&&(o=!1),S=qi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&wi(l),immediateRender:o,stagger:0,parent:p},T),U&&(S[G.prop]=U),Na(e._startAt=mn.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Bn?e._startAt.revert(Dd):e._startAt.render(-1,!0)),e._zTime=n,!o)t(e._startAt,It,It);else if(!n)return}for(e._pt=e._ptCache=0,l=g&&wi(l)||l&&!g,w=0;w<m.length;w++){if(R=m[w],L=R._gsap||Ix(m)[w]._gsap,e._ptLookup[w]=k={},Z0[L.id]&&Ta.length&&Eh(),X=x===m?w:x.indexOf(R),G&&(Y=new G).init(R,U||T,e,X,x)!==!1&&(e._pt=A=new Ai(e._pt,R,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(W){k[W]=A}),Y.priority&&(D=1)),!G||U)for(S in T)Oi[S]&&(Y=yb(S,T,e,X,R,x))?Y.priority&&(D=1):k[S]=A=Ux.call(e,R,S,"get",T[S],X,x,0,r.stringFilter);e._op&&e._op[w]&&e.kill(R,e._op[w]),y&&e._pt&&(fa=e,qt.killTweensOf(R,k,e.globalTime(n)),I=!e.parent,fa=0),e._pt&&l&&(Z0[L.id]=1)}D&&Tb(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!I,f&&n<=0&&v.render(ur,!0,!0)},zP=function(e,n,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[n],u,d,f,h;if(!c)for(c=e._ptCache[n]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return ig=1,e.vars[n]="+=0",Ox(e,o),ig=0,l?ku(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,d.e&&(d.e=ln(i)+Zn(d.e)),d.b&&(d.b=u.s+Zn(d.b))},BP=function(e,n){var i=e[0]?mo(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return n;s=Ql({},n);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},VP=function(e,n,i,r){var s=n.ease||r||"power1.inOut",a,o;if(Jn(n))o=i[e]||(i[e]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:s})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:n[a],e:s})},su=function(e,n,i,r,s){return rn(e)?e.call(n,i,r,s):Fn(e)&&~e.indexOf("random(")?Bu(e):e},Sb=Lx+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Eb={};Ti(Sb+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Eb[t]=1});var mn=function(t){GM(e,t);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=t.call(this,a?r:iu(r))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=r.parent||qt,x=(Jn(i)||jM(i)?Ls(i[0]):"length"in r)?[i]:fr(i),y,v,b,T,w,S,A,R;if(o._targets=x.length?Ix(x):ku("GSAP target "+i+" not found. https://gsap.com",!ji.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||f||Nf(c)||Nf(u)){r=o.vars;var D=r.easeReverse||r.yoyoEase;if(y=o.timeline=new yi({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:x}),y.kill(),y.parent=y._dp=hs(o),y._start=0,f||Nf(c)||Nf(u)){if(T=x.length,A=f&&lb(f),rs(f))for(w in f)~Sb.indexOf(w)&&(R||(R={}),R[w]=f[w]);for(v=0;v<T;v++)b=Mh(r,Eb),b.stagger=0,D&&(b.easeReverse=D),R&&Ql(b,R),S=x[v],b.duration=+su(c,hs(o),v,S,x),b.delay=(+su(u,hs(o),v,S,x)||0)-o._delay,!f&&T===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),y.to(S,b,A?A(v,S,x):0),y._ease=mt.none;y.duration()?c=u=0:o.timeline=0}else if(g){iu(qi(y.vars.defaults,{ease:"none"})),y._ease=_o(g.ease||r.ease||"none");var L=0,G,Y,k;if(Jn(g))g.forEach(function(X){return y.to(x,X,">")}),y.duration();else{b={};for(w in g)w==="ease"||w==="easeEach"||VP(w,g[w],b,g.easeEach);for(w in b)for(G=b[w].sort(function(X,U){return X.t-U.t}),L=0,v=0;v<G.length;v++)Y=G[v],k={ease:Y.e,duration:(Y.t-(v?G[v-1].t:0))/100*c},k[w]=Y.v,y.to(x,k,L),L+=k.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return h===!0&&!Ax&&(fa=hs(o),qt.killTweensOf(x),fa=0),Gr(p,hs(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!g&&o._start===$t(p._time)&&wi(d)&&_P(hs(o))&&p.data!=="nested")&&(o._tTime=-It,o.render(Math.max(0,-u)||0)),m&&rb(hs(o),m),o}var n=e.prototype;return n.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-It&&!u?l:r<It?0:r,f,h,g,_,m,p,x,y;if(!c)vP(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(f=$t(d%_),d===l?(g=this._repeat,f=c):(m=$t(d/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(f=c-f),m=Jl(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render($t(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(sb(this,u?r:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var v=f<o;if(v!==this._inv){var b=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(v?-1:1)/b:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(Hi(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Q0(this,r,s,a),Hi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Hi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Q0(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Na(this,1),!s&&!(u&&!o)&&(d||o||p)&&(Hi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,a,o,l){Vu||zi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ox(this,c),u=this._ease(c/this._dur),zP(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(fp(this,0),this.parent||nb(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?kc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,fa&&fa.vars.overwrite!==!0)._first||kc(this),this.parent&&a!==this.timeline.totalDuration()&&ec(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?fr(r):o,c=this._ptLookup,u=this._pt,d,f,h,g,_,m,p;if((!s||s==="all")&&mP(o,l))return s==="all"&&(this._pt=0),kc(this);for(d=this._op=this._op||[],s!=="all"&&(Fn(s)&&(_={},Ti(s,function(x){return _[x]=1}),s=_),s=BP(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(d[p]=s,g=f,h={}):(h=d[p]=d[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&cp(this,m,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&kc(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ru(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return ru(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return qt.killTweensOf(r,s,a)},e}(Hu);qi(mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ti("staggerTo,staggerFrom,staggerFromTo",function(t){mn[t]=function(){var e=new yi,n=eg.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var kx=function(e,n,i){return e[n]=i},Mb=function(e,n,i){return e[n](i)},HP=function(e,n,i,r){return e[n](r.fp,i)},GP=function(e,n,i){return e.setAttribute(n,i)},zx=function(e,n){return rn(e[n])?Mb:Cx(e[n])&&e.setAttribute?GP:kx},bb=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},WP=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},wb=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},Bx=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},jP=function(e,n,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,n,i),s=a},XP=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?cp(this,n,"_pt"):n.dep||(i=1),n=r;return!i},$P=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},Tb=function(e){for(var n=e._pt,i,r,s,a;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:a)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:a=n,n=i}e._pt=s},Ai=function(){function t(n,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||bb,this.d=l||this,this.set=c||kx,this.pr=u||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=$P,this.m=i,this.mt=s,this.tween=r},t}();Ti(Lx+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return Dx[t]=1});Yi.TweenMax=Yi.TweenLite=mn;Yi.TimelineLite=Yi.TimelineMax=yi;qt=new yi({sortChildren:!1,defaults:Ou,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ji.stringFilter=_b;var xo=[],Id={},YP=[],ey=0,qP=0,em=function(e){return(Id[e]||YP).map(function(n){return n()})},rg=function(){var e=Date.now(),n=[];e-ey>2&&(em("matchMediaInit"),xo.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=kr.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&n.push(i))}),em("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),ey=e,em("matchMedia"))},Ab=function(){function t(n,i){this.selector=i&&tg(i),this.data=[],this._r=[],this.isReverted=!1,this.id=qP++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){rn(i)&&(s=r,r=i,i=rn);var a=this,o=function(){var c=Xt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=tg(s)),Xt=a,d=r.apply(a,arguments),rn(d)&&a._r.push(d),Xt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,i===rn?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=Xt;Xt=null,i(this),Xt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof mn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof yi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof mn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=xo.length;a--;)xo[a].id===this.id&&xo.splice(a,1)},e.revert=function(i){this.kill(i||{})},t}(),KP=function(){function t(n){this.contexts=[],this.scope=n,Xt&&Xt.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){rs(i)||(i={matches:i});var a=new Ab(0,s||this.scope),o=a.conditions={},l,c,u;Xt&&!a.selector&&(a.selector=Xt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=kr.matchMedia(i[c]),l&&(xo.indexOf(a)<0&&xo.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(rg):l.addEventListener("change",rg)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t}(),wh={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return pb(r)})},timeline:function(e){return new yi(e)},getTweensOf:function(e,n){return qt.getTweensOf(e,n)},getProperty:function(e,n,i,r){Fn(e)&&(e=fr(e)[0]);var s=mo(e||{}).get,a=i?tb:eb;return i==="native"&&(i=""),e&&(n?a((Oi[n]&&Oi[n].get||s)(e,n,i,r)):function(o,l,c){return a((Oi[o]&&Oi[o].get||s)(e,o,l,c))})},quickSetter:function(e,n,i){if(e=fr(e),e.length>1){var r=e.map(function(u){return Pi.quickSetter(u,n,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=Oi[n],o=mo(e),l=o.harness&&(o.harness.aliases||{})[n]||n,c=a?function(u){var d=new a;wl._pt=0,d.init(e,i?u+i:u,wl,0,[e]),d.render(1,d),wl._pt&&Bx(1,wl)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,n,i){var r,s=Pi.to(e,qi((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(n,l,c,u)};return a.tween=s,a},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_o(e.ease,Ou.ease)),q1(Ou,e||{})},config:function(e){return q1(ji,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Oi[o]&&!Yi[o]&&ku(n+" effect requires "+o+" plugin.")}),Kp[n]=function(o,l,c){return i(fr(o),qi(l||{},s),c)},a&&(yi.prototype[n]=function(o,l,c){return this.add(Kp[n](o,rs(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){mt[e]=_o(n)},parseEase:function(e,n){return arguments.length?_o(e,n):mt},getById:function(e){return qt.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new yi(e),r,s;for(i.smoothChildTiming=wi(e.smoothChildTiming),qt.remove(i),i._dp=0,i._time=i._tTime=qt._time,r=qt._first;r;)s=r._next,(n||!(!r._dur&&r instanceof mn&&r.vars.onComplete===r._targets[0]))&&Gr(i,r,r._start-r._delay),r=s;return Gr(qt,i,0),i},context:function(e,n){return e?new Ab(e,n):Xt},matchMedia:function(e){return new KP(e)},matchMediaRefresh:function(){return xo.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||rg()},addEventListener:function(e,n){var i=Id[e]||(Id[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Id[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:AP,wrapYoyo:CP,distribute:lb,random:ub,snap:cb,normalize:TP,getUnit:Zn,clamp:EP,splitColor:mb,toArray:fr,selector:tg,mapRange:db,pipe:bP,unitize:wP,interpolate:RP,shuffle:ob},install:qM,effects:Kp,ticker:zi,updateRoot:yi.updateRoot,plugins:Oi,globalTimeline:qt,core:{PropTween:Ai,globals:KM,Tween:mn,Timeline:yi,Animation:Hu,getCache:mo,_removeLinkedListItem:cp,reverting:function(){return Bn},context:function(e){return e&&Xt&&(Xt.data.push(e),e._ctx=Xt),Xt},suppressOverwrites:function(e){return Ax=e}}};Ti("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return wh[t]=mn[t]});zi.add(yi.updateRoot);wl=wh.to({},{duration:0});var ZP=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},QP=function(e,n){var i=e._targets,r,s,a;for(r in n)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=ZP(a,r)),a&&a.modifier&&a.modifier(n[r],e,i[s],r))},tm=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Fn(s)&&(l={},Ti(s,function(u){return l[u]=1}),s=l),n){l={};for(c in s)l[c]=n(s[c]);s=l}QP(o,s)}}}},Pi=wh.registerPlugin({name:"attr",init:function(e,n,i,r,s){var a,o,l;this.tween=i;for(a in n)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",n[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,n){for(var i=n._pt;i;)Bn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},tm("roundProps",ng),tm("modifiers"),tm("snap",cb))||wh;mn.version=yi.version=Pi.version="3.15.0";YM=1;Rx()&&tc();mt.Power0;mt.Power1;mt.Power2;mt.Power3;mt.Power4;mt.Linear;mt.Quad;mt.Cubic;mt.Quart;mt.Quint;mt.Strong;mt.Elastic;mt.Back;mt.SteppedEase;mt.Bounce;mt.Sine;mt.Expo;mt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ty,da,Fl,Vx,oo,ny,Hx,JP=function(){return typeof window<"u"},Is={},Qa=180/Math.PI,Ul=Math.PI/180,jo=Math.atan2,iy=1e8,Gx=/([A-Z])/g,e4=/(left|right|width|margin|padding|x)/i,t4=/[\s,\(]\S/,Xr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sg=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},n4=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},i4=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},r4=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},s4=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},Cb=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},Rb=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},a4=function(e,n,i){return e.style[n]=i},o4=function(e,n,i){return e.style.setProperty(n,i)},l4=function(e,n,i){return e._gsap[n]=i},c4=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},u4=function(e,n,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},f4=function(e,n,i,r,s){var a=e._gsap;a[n]=i,a.renderTransform(s,a)},Kt="transform",Ci=Kt+"Origin",d4=function t(e,n){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Is&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Xr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ms(r,o)}):this.tfm[e]=a.x?a[e]:ms(r,e),e===Ci&&(this.tfm.zOrigin=a.zOrigin);else return Xr.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(Kt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ci,n,"")),e=Kt}(s||n)&&this.props.push(e,n,s[e])},Pb=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},h4=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?n[e[s]](e[s+2]):n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Gx,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=Hx(),(!s||!s.isStart)&&!i[Kt]&&(Pb(i),r.zOrigin&&i[Ci]&&(i[Ci]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Nb=function(e,n){var i={target:e,props:[],revert:h4,save:d4};return e._gsap||Pi.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},Db,ag=function(e,n){var i=da.createElementNS?da.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):da.createElement(e);return i&&i.style?i:da.createElement(e)},Gi=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(Gx,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,nc(n)||n,1)||""},ry="O,Moz,ms,Ms,Webkit".split(","),nc=function(e,n,i){var r=n||oo,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ry[a]+e in s););return a<0?null:(a===3?"ms":a>=0?ry[a]:"")+e},og=function(){JP()&&window.document&&(ty=window,da=ty.document,Fl=da.documentElement,oo=ag("div")||{style:{}},ag("div"),Kt=nc(Kt),Ci=Kt+"Origin",oo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Db=!!nc("perspective"),Hx=Pi.core.reverting,Vx=1)},sy=function(e){var n=e.ownerSVGElement,i=ag("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Fl.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Fl.removeChild(i),s},ay=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},Lb=function(e){var n,i;try{n=e.getBBox()}catch{n=sy(e),i=1}return n&&(n.width||n.height)||i||(n=sy(e)),n&&!n.width&&!n.x&&!n.y?{x:+ay(e,["x","cx","x1"])||0,y:+ay(e,["y","cy","y1"])||0,width:0,height:0}:n},Ib=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Lb(e))},Da=function(e,n){if(n){var i=e.style,r;n in Is&&n!==Ci&&(n=Kt),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(Gx,"-$1").toLowerCase())):i.removeAttribute(n)}},ha=function(e,n,i,r,s,a){var o=new Ai(e._pt,n,i,0,1,a?Rb:Cb);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},oy={deg:1,rad:1,turn:1},p4={grid:1,flex:1},La=function t(e,n,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=oo.style,l=e4.test(n),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",g,_,m,p;if(r===a||!s||oy[r]||oy[a])return s;if(a!=="px"&&!f&&(s=t(e,n,i,"px")),p=e.getCTM&&Ib(e),(h||a==="%")&&(Is[n]||~n.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],ln(h?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(f?a:r),_=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===da||!_.appendChild)&&(_=da.body),m=_._gsap,m&&h&&m.width&&l&&m.time===zi.time&&!m.uncache)return ln(s/m.width*d);if(h&&(n==="height"||n==="width")){var x=e.style[n];e.style[n]=d+r,g=e[u],x?e.style[n]=x:Da(e,n)}else(h||a==="%")&&!p4[Gi(_,"display")]&&(o.position=Gi(e,"position")),_===e&&(o.position="static"),_.appendChild(oo),g=oo[u],_.removeChild(oo),o.position="absolute";return l&&h&&(m=mo(_),m.time=zi.time,m.width=_[u]),ln(f?g*s/d:g&&s?d/g*s:0)},ms=function(e,n,i,r){var s;return Vx||og(),n in Xr&&n!=="transform"&&(n=Xr[n],~n.indexOf(",")&&(n=n.split(",")[0])),Is[n]&&n!=="transform"?(s=Wu(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:Ah(Gi(e,Ci))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Th[n]&&Th[n](e,n,i)||Gi(e,n)||QM(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?La(e,n,s,i)+i:s},m4=function(e,n,i,r){if(!i||i==="none"){var s=nc(n,e,1),a=s&&Gi(e,s,1);a&&a!==i?(n=s,i=a):n==="borderColor"&&(i=Gi(e,"borderTopColor"))}var o=new Ai(this._pt,e.style,n,0,1,wb),l=0,c=0,u,d,f,h,g,_,m,p,x,y,v,b;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Gi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[n],e.style[n]=r,r=Gi(e,n)||r,_?e.style[n]=_:Da(e,n)),u=[i,r],_b(u),i=u[0],r=u[1],f=i.match(bl)||[],b=r.match(bl)||[],b.length){for(;d=bl.exec(r);)m=d[0],x=r.substring(l,d.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(h=parseFloat(_)||0,v=_.substr((h+"").length),m.charAt(1)==="="&&(m=Il(h,m)+v),p=parseFloat(m),y=m.substr((p+"").length),l=bl.lastIndex-y.length,y||(y=y||ji.units[n]||v,l===r.length&&(r+=y,o.e+=y)),v!==y&&(h=La(e,n,_,y)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:h,c:p-h,m:g&&g<4||n==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=n==="display"&&r==="none"?Rb:Cb;return $M.test(r)&&(o.e=0),this._pt=o,o},ly={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},g4=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=ly[i]||i,n[1]=ly[r]||r,n.join(" ")},_4=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Is[o]&&(l=1,o=o==="transformOrigin"?Ci:Kt),Da(i,o);l&&(Da(i,Kt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Wu(i,1),a.uncache=1,Pb(r)))}},Th={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Ai(e._pt,n,i,0,0,_4);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Gu=[1,0,0,1,0,0],Fb={},Ub=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},cy=function(e){var n=Gi(e,Kt);return Ub(n)?Gu:n.substr(7).match(XM).map(ln)},Wx=function(e,n){var i=e._gsap||mo(e),r=e.style,s=cy(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Gu:s):(s===Gu&&!e.offsetParent&&e!==Fl&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Fl.appendChild(e)),s=cy(e),l?r.display=l:Da(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Fl.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lg=function(e,n,i,r,s,a){var o=e._gsap,l=s||Wx(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],y=n.split(" "),v=parseFloat(y[0])||0,b=parseFloat(y[1])||0,T,w,S,A;i?l!==Gu&&(w=h*m-g*_)&&(S=v*(m/w)+b*(-_/w)+(_*x-m*p)/w,A=v*(-g/w)+b*(h/w)-(h*x-g*p)/w,v=S,b=A):(T=Lb(e),v=T.x+(~y[0].indexOf("%")?v/100*T.width:v),b=T.y+(~(y[1]||y[0]).indexOf("%")?b/100*T.height:b)),r||r!==!1&&o.smooth?(p=v-c,x=b-u,o.xOffset=d+(p*h+x*_)-p,o.yOffset=f+(p*g+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,e.style[Ci]="0px 0px",a&&(ha(a,o,"xOrigin",c,v),ha(a,o,"yOrigin",u,b),ha(a,o,"xOffset",d,o.xOffset),ha(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},Wu=function(e,n){var i=e._gsap||new vb(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Gi(e,Ci)||"0",u,d,f,h,g,_,m,p,x,y,v,b,T,w,S,A,R,D,L,G,Y,k,X,U,I,W,P,ie,fe,$e,Ge,We;return u=d=f=_=m=p=x=y=v=0,h=g=1,i.svg=!!(e.getCTM&&Ib(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Kt]!=="none"?l[Kt]:"")),r.scale=r.rotate=r.translate="none"),w=Wx(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),c=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",U=""):U=!n&&e.getAttribute("data-svg-origin"),lg(e,U||c,!!U||i.originIsAbsolute,i.smooth!==!1,w)),b=i.xOrigin||0,T=i.yOrigin||0,w!==Gu&&(D=w[0],L=w[1],G=w[2],Y=w[3],u=k=w[4],d=X=w[5],w.length===6?(h=Math.sqrt(D*D+L*L),g=Math.sqrt(Y*Y+G*G),_=D||L?jo(L,D)*Qa:0,x=G||Y?jo(G,Y)*Qa+_:0,x&&(g*=Math.abs(Math.cos(x*Ul))),i.svg&&(u-=b-(b*D+T*G),d-=T-(b*L+T*Y))):(We=w[6],$e=w[7],P=w[8],ie=w[9],fe=w[10],Ge=w[11],u=w[12],d=w[13],f=w[14],S=jo(We,fe),m=S*Qa,S&&(A=Math.cos(-S),R=Math.sin(-S),U=k*A+P*R,I=X*A+ie*R,W=We*A+fe*R,P=k*-R+P*A,ie=X*-R+ie*A,fe=We*-R+fe*A,Ge=$e*-R+Ge*A,k=U,X=I,We=W),S=jo(-G,fe),p=S*Qa,S&&(A=Math.cos(-S),R=Math.sin(-S),U=D*A-P*R,I=L*A-ie*R,W=G*A-fe*R,Ge=Y*R+Ge*A,D=U,L=I,G=W),S=jo(L,D),_=S*Qa,S&&(A=Math.cos(S),R=Math.sin(S),U=D*A+L*R,I=k*A+X*R,L=L*A-D*R,X=X*A-k*R,D=U,k=I),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=ln(Math.sqrt(D*D+L*L+G*G)),g=ln(Math.sqrt(X*X+We*We)),S=jo(k,X),x=Math.abs(S)>2e-4?S*Qa:0,v=Ge?1/(Ge<0?-Ge:Ge):0),i.svg&&(U=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ub(Gi(e,Kt)),U&&e.setAttribute("transform",U))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=ln(h),i.scaleY=ln(g),i.rotation=ln(_)+o,i.rotationX=ln(m)+o,i.rotationY=ln(p)+o,i.skewX=x+o,i.skewY=y+o,i.transformPerspective=v+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(r[Ci]=Ah(c)),i.xOffset=i.yOffset=0,i.force3D=ji.force3D,i.renderTransform=i.svg?v4:Db?Ob:x4,i.uncache=0,i},Ah=function(e){return(e=e.split(" "))[0]+" "+e[1]},nm=function(e,n,i){var r=Zn(n);return ln(parseFloat(n)+parseFloat(La(e,"x",i+"px",r)))+r},x4=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Ob(e,n)},Wa="0deg",bc="0px",ja=") ",Ob=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,x=i.target,y=i.zOrigin,v="",b=p==="auto"&&e&&e!==1||p===!0;if(y&&(d!==Wa||u!==Wa)){var T=parseFloat(u)*Ul,w=Math.sin(T),S=Math.cos(T),A;T=parseFloat(d)*Ul,A=Math.cos(T),a=nm(x,a,w*A*-y),o=nm(x,o,-Math.sin(T)*-y),l=nm(x,l,S*A*-y+y)}m!==bc&&(v+="perspective("+m+ja),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(b||a!==bc||o!==bc||l!==bc)&&(v+=l!==bc||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ja),c!==Wa&&(v+="rotate("+c+ja),u!==Wa&&(v+="rotateY("+u+ja),d!==Wa&&(v+="rotateX("+d+ja),(f!==Wa||h!==Wa)&&(v+="skew("+f+", "+h+ja),(g!==1||_!==1)&&(v+="scale("+g+", "+_+ja),x.style[Kt]=v||"translate(0, 0)"},v4=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,x=i.forceCSS,y=parseFloat(a),v=parseFloat(o),b,T,w,S,A;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ul,c*=Ul,b=Math.cos(l)*d,T=Math.sin(l)*d,w=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(u*=Ul,A=Math.tan(c-u),A=Math.sqrt(1+A*A),w*=A,S*=A,u&&(A=Math.tan(u),A=Math.sqrt(1+A*A),b*=A,T*=A)),b=ln(b),T=ln(T),w=ln(w),S=ln(S)):(b=d,S=f,T=w=0),(y&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=La(h,"x",a,"px"),v=La(h,"y",o,"px")),(g||_||m||p)&&(y=ln(y+g-(g*b+_*w)+m),v=ln(v+_-(g*T+_*S)+p)),(r||s)&&(A=h.getBBox(),y=ln(y+r/100*A.width),v=ln(v+s/100*A.height)),A="matrix("+b+","+T+","+w+","+S+","+y+","+v+")",h.setAttribute("transform",A),x&&(h.style[Kt]=A)},y4=function(e,n,i,r,s){var a=360,o=Fn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Qa:1),c=l-r,u=r+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*iy)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*iy)%a-~~(c/a)*a)),e._pt=f=new Ai(e._pt,n,i,r,c,n4),f.e=u,f.u="deg",e._props.push(i),f},uy=function(e,n){for(var i in n)e[i]=n[i];return e},S4=function(e,n,i){var r=uy({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,d,f,h,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Kt]=n,o=Wu(i,1),Da(i,Kt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Kt],a[Kt]=n,o=Wu(i,1),a[Kt]=c);for(l in Is)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=Zn(c),g=Zn(u),d=h!==g?La(i,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Ai(e._pt,o,l,d,f-d,sg),e._pt.u=g||0,e._props.push(l));uy(o,r)};Ti("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",a=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(o){return e<2?t+o:"border"+o+t});Th[e>1?"border"+t:t]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(g){return ms(o,g,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(g,_){return h[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,h,d)}});var kb={name:"css",register:og,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,d,f,h,g,_,m,p,x,y,v,b,T,w,S,A;Vx||og(),this.styles=this.styles||Nb(e),S=this.styles.props,this.tween=i;for(_ in n)if(_!=="autoRound"&&(u=n[_],!(Oi[_]&&yb(_,n,i,r,e,s)))){if(h=typeof u,g=Th[_],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Bu(u)),g)g(this,e,_,u,i)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Aa.lastIndex=0,Aa.test(c)||(m=Zn(c),p=Zn(u),p?m!==p&&(c=La(e,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),S.push(_,0,o[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Fn(c)&&~c.indexOf("random(")&&(c=Bu(c)),Zn(c+"")||c==="auto"||(c+=ji.units[_]||Zn(ms(e,_))||""),(c+"").charAt(1)==="="&&(c=ms(e,_))):c=ms(e,_),f=parseFloat(c),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),_ in Xr&&(_==="autoAlpha"&&(f===1&&ms(e,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,o.visibility),ha(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Xr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Is,y){if(this.styles.save(_),A=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Gi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=Gi(e,"perspective"),R?e.style.perspective=R:Da(e,"perspective")}d=parseFloat(u)}if(v||(b=e._gsap,b.renderTransform&&!n.parseTransform||Wu(e,n.parseTransform),T=n.smoothOrigin!==!1&&b.smooth,v=this._pt=new Ai(this._pt,o,Kt,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new Ai(this._pt,b,"scaleY",b.scaleY,(x?Il(b.scaleY,x+d):d)-b.scaleY||0,sg),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(Ci,0,o[Ci]),u=g4(u),b.svg?lg(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&ha(this,b,"zOrigin",b.zOrigin,p),ha(this,o,_,Ah(c),Ah(u)));continue}else if(_==="svgOrigin"){lg(e,u,1,T,0,this);continue}else if(_ in Fb){y4(this,b,_,f,x?Il(f,x+u):u);continue}else if(_==="smoothOrigin"){ha(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){S4(this,u,e);continue}}else _ in o||(_=nc(_)||_);if(y||(d||d===0)&&(f||f===0)&&!t4.test(u)&&_ in o)m=(c+"").substr((f+"").length),d||(d=0),p=Zn(u)||(_ in ji.units?ji.units[_]:m),m!==p&&(f=La(e,_,c,p)),this._pt=new Ai(this._pt,y?b:o,_,f,(x?Il(f,x+d):d)-f,!y&&(p==="px"||_==="zIndex")&&n.autoRound!==!1?s4:sg),this._pt.u=p||0,y&&A!==u?(this._pt.b=c,this._pt.e=A,this._pt.r=r4):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=i4);else if(_ in o)m4.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,r,s);else if(_!=="parseTransform"){Nx(_,u);continue}y||(_ in o?S.push(_,0,o[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,c||e[_])),a.push(_)}}w&&Tb(this)},render:function(e,n){if(n.tween._time||!Hx())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:ms,aliases:Xr,getSetter:function(e,n,i){var r=Xr[n];return r&&r.indexOf(",")<0&&(n=r),n in Is&&n!==Ci&&(e._gsap.x||ms(e,"x"))?i&&ny===i?n==="scale"?c4:l4:(ny=i||{})&&(n==="scale"?u4:f4):e.style&&!Cx(e.style[n])?a4:~n.indexOf("-")?o4:zx(e,n)},core:{_removeProperty:Da,_getMatrix:Wx}};Pi.utils.checkPrefix=nc;Pi.core.getStyleSaver=Nb;(function(t,e,n,i){var r=Ti(t+","+e+","+n,function(s){Is[s]=1});Ti(e,function(s){ji.units[s]="deg",Fb[s]=1}),Xr[r[13]]=t+","+e,Ti(i,function(s){var a=s.split(":");Xr[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){ji.units[t]="px"});Pi.registerPlugin(kb);var gs=Pi.registerPlugin(kb)||Pi;gs.core.Tween;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function E4(t,e,n){return(e=b4(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function de(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fy(Object(n),!0).forEach(function(i){E4(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fy(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function M4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function b4(t){var e=M4(t,"string");return typeof e=="symbol"?e:e+""}const dy=()=>{};let jx={},zb={},Bb=null,Vb={mark:dy,measure:dy};try{typeof window<"u"&&(jx=window),typeof document<"u"&&(zb=document),typeof MutationObserver<"u"&&(Bb=MutationObserver),typeof performance<"u"&&(Vb=performance)}catch{}const{userAgent:hy=""}=jx.navigator||{},Ia=jx,Wt=zb,py=Bb,Df=Vb;Ia.document;const Bs=!!Wt.documentElement&&!!Wt.head&&typeof Wt.addEventListener=="function"&&typeof Wt.createElement=="function",Hb=~hy.indexOf("MSIE")||~hy.indexOf("Trident/");var w4=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,T4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Gb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},A4={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Wb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ni="classic",dp="duotone",C4="sharp",R4="sharp-duotone",jb=[ni,dp,C4,R4],P4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},N4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},D4=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),L4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},I4=["fak","fa-kit","fakd","fa-kit-duotone"],my={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},F4=["kit"],U4={kit:{"fa-kit":"fak"}},O4=["fak","fakd"],k4={kit:{fak:"fa-kit"}},gy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Lf={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},z4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],B4=["fak","fa-kit","fakd","fa-kit-duotone"],V4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},H4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},G4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},cg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},W4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ug=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...z4,...W4],j4=["solid","regular","light","thin","duotone","brands"],Xb=[1,2,3,4,5,6,7,8,9,10],X4=Xb.concat([11,12,13,14,15,16,17,18,19,20]),$4=[...Object.keys(G4),...j4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Lf.GROUP,Lf.SWAP_OPACITY,Lf.PRIMARY,Lf.SECONDARY].concat(Xb.map(t=>"".concat(t,"x"))).concat(X4.map(t=>"w-".concat(t))),Y4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Fs="___FONT_AWESOME___",fg=16,$b="fa",Yb="svg-inline--fa",Ao="data-fa-i2svg",dg="data-fa-pseudo-element",q4="data-fa-pseudo-element-pending",Xx="data-prefix",$x="data-icon",_y="fontawesome-i2svg",K4="async",Z4=["HTML","HEAD","STYLE","SCRIPT"],qb=(()=>{try{return!0}catch{return!1}})();function of(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[ni]}})}const Kb=de({},Gb);Kb[ni]=de(de(de(de({},{"fa-duotone":"duotone"}),Gb[ni]),my.kit),my["kit-duotone"]);const Q4=of(Kb),hg=de({},L4);hg[ni]=de(de(de(de({},{duotone:"fad"}),hg[ni]),gy.kit),gy["kit-duotone"]);const xy=of(hg),pg=de({},cg);pg[ni]=de(de({},pg[ni]),k4.kit);const Yx=of(pg),mg=de({},H4);mg[ni]=de(de({},mg[ni]),U4.kit);of(mg);const J4=w4,Zb="fa-layers-text",eN=T4,tN=de({},P4);of(tN);const nN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],im=A4,iN=[...F4,...$4],au=Ia.FontAwesomeConfig||{};function rN(t){var e=Wt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function sN(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Wt&&typeof Wt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const r=sN(rN(n));r!=null&&(au[i]=r)});const Qb={styleDefault:"solid",familyDefault:ni,cssPrefix:$b,replacementClass:Yb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};au.familyPrefix&&(au.cssPrefix=au.familyPrefix);const ic=de(de({},Qb),au);ic.autoReplaceSvg||(ic.observeMutations=!1);const Ue={};Object.keys(Qb).forEach(t=>{Object.defineProperty(Ue,t,{enumerable:!0,set:function(e){ic[t]=e,ou.forEach(n=>n(Ue))},get:function(){return ic[t]}})});Object.defineProperty(Ue,"familyPrefix",{enumerable:!0,set:function(t){ic.cssPrefix=t,ou.forEach(e=>e(Ue))},get:function(){return ic.cssPrefix}});Ia.FontAwesomeConfig=Ue;const ou=[];function aN(t){return ou.push(t),()=>{ou.splice(ou.indexOf(t),1)}}const $s=fg,$r={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function oN(t){if(!t||!Bs)return;const e=Wt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Wt.head.childNodes;let i=null;for(let r=n.length-1;r>-1;r--){const s=n[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return Wt.head.insertBefore(e,i),t}const lN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ju(){let t=12,e="";for(;t-- >0;)e+=lN[Math.random()*62|0];return e}function hc(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function qx(t){return t.classList?hc(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Jb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cN(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Jb(t[n]),'" '),"").trim()}function hp(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Kx(t){return t.size!==$r.size||t.x!==$r.x||t.y!==$r.y||t.rotate!==$r.rotate||t.flipX||t.flipY}function uN(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function fN(t){let{transform:e,width:n=fg,height:i=fg,startCentered:r=!1}=t,s="";return r&&Hb?s+="translate(".concat(e.x/$s-n/2,"em, ").concat(e.y/$s-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/$s,"em), calc(-50% + ").concat(e.y/$s,"em)) "):s+="translate(".concat(e.x/$s,"em, ").concat(e.y/$s,"em) "),s+="scale(".concat(e.size/$s*(e.flipX?-1:1),", ").concat(e.size/$s*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var dN=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function e3(){const t=$b,e=Yb,n=Ue.cssPrefix,i=Ue.replacementClass;let r=dN;if(n!==t||i!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(i))}return r}let vy=!1;function rm(){Ue.autoAddCss&&!vy&&(oN(e3()),vy=!0)}var hN={mixout(){return{dom:{css:e3,insertCss:rm}}},hooks(){return{beforeDOMElementCreation(){rm()},beforeI2svg(){rm()}}}};const Us=Ia||{};Us[Fs]||(Us[Fs]={});Us[Fs].styles||(Us[Fs].styles={});Us[Fs].hooks||(Us[Fs].hooks={});Us[Fs].shims||(Us[Fs].shims=[]);var Yr=Us[Fs];const t3=[],n3=function(){Wt.removeEventListener("DOMContentLoaded",n3),Ch=1,t3.map(t=>t())};let Ch=!1;Bs&&(Ch=(Wt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Wt.readyState),Ch||Wt.addEventListener("DOMContentLoaded",n3));function pN(t){Bs&&(Ch?setTimeout(t,0):t3.push(t))}function lf(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?Jb(t):"<".concat(e," ").concat(cN(n),">").concat(i.map(lf).join(""),"</").concat(e,">")}function yy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var sm=function(e,n,i,r){var s=Object.keys(e),a=s.length,o=n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function mN(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function gg(t){const e=mN(t);return e.length===1?e[0].toString(16):null}function gN(t,e){const n=t.length;let i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Sy(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function _g(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,r=Sy(e);typeof Yr.hooks.addPack=="function"&&!i?Yr.hooks.addPack(t,Sy(e)):Yr.styles[t]=de(de({},Yr.styles[t]||{}),r),t==="fas"&&_g("fa",e)}const{styles:Xu,shims:_N}=Yr,i3=Object.keys(Yx),xN=i3.reduce((t,e)=>(t[e]=Object.keys(Yx[e]),t),{});let Zx=null,r3={},s3={},a3={},o3={},l3={};function vN(t){return~iN.indexOf(t)}function yN(t,e){const n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!vN(r)?r:null}const c3=()=>{const t=i=>sm(Xu,(r,s,a)=>(r[a]=sm(s,i,{}),r),{});r3=t((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{i[o.toString(16)]=s}),i)),s3=t((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{i[o]=s}),i)),l3=t((i,r,s)=>{const a=r[2];return i[s]=s,a.forEach(o=>{i[o]=s}),i});const e="far"in Xu||Ue.autoFetchSvg,n=sm(_N,(i,r)=>{const s=r[0];let a=r[1];const o=r[2];return a==="far"&&!e&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:o}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:o}),i},{names:{},unicodes:{}});a3=n.names,o3=n.unicodes,Zx=pp(Ue.styleDefault,{family:Ue.familyDefault})};aN(t=>{Zx=pp(t.styleDefault,{family:Ue.familyDefault})});c3();function Qx(t,e){return(r3[t]||{})[e]}function SN(t,e){return(s3[t]||{})[e]}function lo(t,e){return(l3[t]||{})[e]}function u3(t){return a3[t]||{prefix:null,iconName:null}}function EN(t){const e=o3[t],n=Qx("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Fa(){return Zx}const f3=()=>({prefix:null,iconName:null,rest:[]});function MN(t){let e=ni;const n=i3.reduce((i,r)=>(i[r]="".concat(Ue.cssPrefix,"-").concat(r),i),{});return jb.forEach(i=>{(t.includes(n[i])||t.some(r=>xN[i].includes(r)))&&(e=i)}),e}function pp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ni}=e,i=Q4[n][t];if(n===dp&&!t)return"fad";const r=xy[n][t]||xy[n][i],s=t in Yr.styles?t:null;return r||s||null}function bN(t){let e=[],n=null;return t.forEach(i=>{const r=yN(Ue.cssPrefix,i);r?n=r:i&&e.push(i)}),{iconName:n,rest:e}}function Ey(t){return t.sort().filter((e,n,i)=>i.indexOf(e)===n)}function mp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let i=null;const r=ug.concat(B4),s=Ey(t.filter(d=>r.includes(d))),a=Ey(t.filter(d=>!ug.includes(d))),o=s.filter(d=>(i=d,!Wb.includes(d))),[l=null]=o,c=MN(s),u=de(de({},bN(a)),{},{prefix:pp(l,{family:c})});return de(de(de({},u),CN({values:t,family:c,styles:Xu,config:Ue,canonical:u,givenPrefix:i})),wN(n,i,u))}function wN(t,e,n){let{prefix:i,iconName:r}=n;if(t||!i||!r)return{prefix:i,iconName:r};const s=e==="fa"?u3(r):{},a=lo(i,r);return r=s.iconName||a||r,i=s.prefix||i,i==="far"&&!Xu.far&&Xu.fas&&!Ue.autoFetchSvg&&(i="fas"),{prefix:i,iconName:r}}const TN=jb.filter(t=>t!==ni||t!==dp),AN=Object.keys(cg).filter(t=>t!==ni).map(t=>Object.keys(cg[t])).flat();function CN(t){const{values:e,family:n,canonical:i,givenPrefix:r="",styles:s={},config:a={}}=t,o=n===dp,l=e.includes("fa-duotone")||e.includes("fad"),c=a.familyDefault==="duotone",u=i.prefix==="fad"||i.prefix==="fa-duotone";if(!o&&(l||c||u)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&TN.includes(n)&&(Object.keys(s).find(f=>AN.includes(f))||a.autoFetchSvg)){const f=D4.get(n).defaultShortPrefixId;i.prefix=f,i.iconName=lo(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||r==="fa")&&(i.prefix=Fa()||"fas"),i}class RN{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=de(de({},this.definitions[s]||{}),r[s]),_g(s,r[s]);const a=Yx[ni][s];a&&_g(a,r[s]),c3()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{const{prefix:s,iconName:a,icon:o}=i[r],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=o)}),e[s][a]=o}),e}}let My=[],Tl={};const Ol={},PN=Object.keys(Ol);function NN(t,e){let{mixoutsTo:n}=e;return My=t,Tl={},Object.keys(Ol).forEach(i=>{PN.indexOf(i)===-1&&delete Ol[i]}),My.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(a=>{n[s]||(n[s]={}),n[s][a]=r[s][a]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(a=>{Tl[a]||(Tl[a]=[]),Tl[a].push(s[a])})}i.provides&&i.provides(Ol)}),n}function xg(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(Tl[t]||[]).forEach(a=>{e=a.apply(null,[e,...i])}),e}function Co(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(Tl[t]||[]).forEach(s=>{s.apply(null,n)})}function Ua(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ol[t]?Ol[t].apply(null,e):void 0}function vg(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Fa();if(e)return e=lo(n,e)||e,yy(d3.definitions,n,e)||yy(Yr.styles,n,e)}const d3=new RN,DN=()=>{Ue.autoReplaceSvg=!1,Ue.observeMutations=!1,Co("noAuto")},LN={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bs?(Co("beforeI2svg",t),Ua("pseudoElements2svg",t),Ua("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;Ue.autoReplaceSvg===!1&&(Ue.autoReplaceSvg=!0),Ue.observeMutations=!0,pN(()=>{FN({autoReplaceSvgRoot:e}),Co("watch",t)})}},IN={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:lo(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=pp(t[0]);return{prefix:n,iconName:lo(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(Ue.cssPrefix,"-"))>-1||t.match(J4))){const e=mp(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Fa(),iconName:lo(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Fa();return{prefix:e,iconName:lo(e,t)||t}}}},Qi={noAuto:DN,config:Ue,dom:LN,parse:IN,library:d3,findIconDefinition:vg,toHtml:lf},FN=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Wt}=t;(Object.keys(Yr.styles).length>0||Ue.autoFetchSvg)&&Bs&&Ue.autoReplaceSvg&&Qi.dom.i2svg({node:e})};function gp(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>lf(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Bs)return;const n=Wt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function UN(t){let{children:e,main:n,mask:i,attributes:r,styles:s,transform:a}=t;if(Kx(a)&&n.found&&!i.found){const{width:o,height:l}=n,c={x:o/l/2,y:.5};r.style=hp(de(de({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ON(t){let{prefix:e,iconName:n,children:i,attributes:r,symbol:s}=t;const a=s===!0?"".concat(e,"-").concat(Ue.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:de(de({},r),{},{id:a}),children:i}]}]}function Jx(t){const{icons:{main:e,mask:n},prefix:i,iconName:r,transform:s,symbol:a,title:o,maskId:l,titleId:c,extra:u,watchable:d=!1}=t,{width:f,height:h}=n.found?n:e,g=O4.includes(i),_=[Ue.replacementClass,r?"".concat(Ue.cssPrefix,"-").concat(r):""].filter(b=>u.classes.indexOf(b)===-1).filter(b=>b!==""||!!b).concat(u.classes).join(" ");let m={children:[],attributes:de(de({},u.attributes),{},{"data-prefix":i,"data-icon":r,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(h)})};const p=g&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/h*16*.0625,"em")}:{};d&&(m.attributes[Ao]=""),o&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||ju())},children:[o]}),delete m.attributes.title);const x=de(de({},m),{},{prefix:i,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:a,styles:de(de({},p),u.styles)}),{children:y,attributes:v}=n.found&&e.found?Ua("generateAbstractMask",x)||{children:[],attributes:{}}:Ua("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=y,x.attributes=v,a?ON(x):UN(x)}function by(t){const{content:e,width:n,height:i,transform:r,title:s,extra:a,watchable:o=!1}=t,l=de(de(de({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});o&&(l[Ao]="");const c=de({},a.styles);Kx(r)&&(c.transform=fN({transform:r,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);const u=hp(c);u.length>0&&(l.style=u);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function kN(t){const{content:e,title:n,extra:i}=t,r=de(de(de({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),s=hp(i.styles);s.length>0&&(r.style=s);const a=[];return a.push({tag:"span",attributes:r,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:am}=Yr;function yg(t){const e=t[0],n=t[1],[i]=t.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(Ue.cssPrefix,"-").concat(im.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ue.cssPrefix,"-").concat(im.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Ue.cssPrefix,"-").concat(im.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:r}}const zN={found:!1,width:512,height:512};function BN(t,e){!qb&&!Ue.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Sg(t,e){let n=e;return e==="fa"&&Ue.styleDefault!==null&&(e=Fa()),new Promise((i,r)=>{if(n==="fa"){const s=u3(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&am[e]&&am[e][t]){const s=am[e][t];return i(yg(s))}BN(t,e),i(de(de({},zN),{},{icon:Ue.showMissingIcons&&t?Ua("missingIconAbstract")||{}:{}}))})}const wy=()=>{},Eg=Ue.measurePerformance&&Df&&Df.mark&&Df.measure?Df:{mark:wy,measure:wy},Bc='FA "6.7.2"',VN=t=>(Eg.mark("".concat(Bc," ").concat(t," begins")),()=>h3(t)),h3=t=>{Eg.mark("".concat(Bc," ").concat(t," ends")),Eg.measure("".concat(Bc," ").concat(t),"".concat(Bc," ").concat(t," begins"),"".concat(Bc," ").concat(t," ends"))};var ev={begin:VN,end:h3};const Fd=()=>{};function Ty(t){return typeof(t.getAttribute?t.getAttribute(Ao):null)=="string"}function HN(t){const e=t.getAttribute?t.getAttribute(Xx):null,n=t.getAttribute?t.getAttribute($x):null;return e&&n}function GN(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Ue.replacementClass)}function WN(){return Ue.autoReplaceSvg===!0?Ud.replace:Ud[Ue.autoReplaceSvg]||Ud.replace}function jN(t){return Wt.createElementNS("http://www.w3.org/2000/svg",t)}function XN(t){return Wt.createElement(t)}function p3(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?jN:XN}=e;if(typeof t=="string")return Wt.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){i.appendChild(p3(s,{ceFn:n}))}),i}function $N(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ud={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(p3(n),e)}),e.getAttribute(Ao)===null&&Ue.keepOriginalSource){let n=Wt.createComment($N(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~qx(e).indexOf(Ue.replacementClass))return Ud.replace(t);const i=new RegExp("".concat(Ue.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((a,o)=>(o===Ue.replacementClass||o.match(i)?a.toSvg.push(o):a.toNode.push(o),a),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>lf(s)).join(`
`);e.setAttribute(Ao,""),e.innerHTML=r}};function Ay(t){t()}function m3(t,e){const n=typeof e=="function"?e:Fd;if(t.length===0)n();else{let i=Ay;Ue.mutateApproach===K4&&(i=Ia.requestAnimationFrame||Ay),i(()=>{const r=WN(),s=ev.begin("mutate");t.map(r),s(),n()})}}let tv=!1;function g3(){tv=!0}function Mg(){tv=!1}let Rh=null;function Cy(t){if(!py||!Ue.observeMutations)return;const{treeCallback:e=Fd,nodeCallback:n=Fd,pseudoElementsCallback:i=Fd,observeMutationsRoot:r=Wt}=t;Rh=new py(s=>{if(tv)return;const a=Fa();hc(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Ty(o.addedNodes[0])&&(Ue.searchPseudoElements&&i(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&Ue.searchPseudoElements&&i(o.target.parentNode),o.type==="attributes"&&Ty(o.target)&&~nN.indexOf(o.attributeName))if(o.attributeName==="class"&&HN(o.target)){const{prefix:l,iconName:c}=mp(qx(o.target));o.target.setAttribute(Xx,l||a),c&&o.target.setAttribute($x,c)}else GN(o.target)&&n(o.target)})}),Bs&&Rh.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function YN(){Rh&&Rh.disconnect()}function qN(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,r)=>{const s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),n}function KN(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let r=mp(qx(t));return r.prefix||(r.prefix=Fa()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=SN(r.prefix,t.innerText)||Qx(r.prefix,gg(t.innerText))),!r.iconName&&Ue.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ZN(t){const e=hc(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Ue.autoA11y&&(n?e["aria-labelledby"]="".concat(Ue.replacementClass,"-title-").concat(i||ju()):(e["aria-hidden"]="true",e.focusable="false")),e}function QN(){return{iconName:null,title:null,titleId:null,prefix:null,transform:$r,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ry(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:r}=KN(t),s=ZN(t),a=xg("parseNodeAttributes",{},t);let o=e.styleParser?qN(t):[];return de({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:$r,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},a)}const{styles:JN}=Yr;function _3(t){const e=Ue.autoReplaceSvg==="nest"?Ry(t,{styleParser:!1}):Ry(t);return~e.extra.classes.indexOf(Zb)?Ua("generateLayersText",t,e):Ua("generateSvgReplacementMutation",t,e)}function eD(){return[...I4,...ug]}function Py(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bs)return Promise.resolve();const n=Wt.documentElement.classList,i=u=>n.add("".concat(_y,"-").concat(u)),r=u=>n.remove("".concat(_y,"-").concat(u)),s=Ue.autoFetchSvg?eD():Wb.concat(Object.keys(JN));s.includes("fa")||s.push("fa");const a=[".".concat(Zb,":not([").concat(Ao,"])")].concat(s.map(u=>".".concat(u,":not([").concat(Ao,"])"))).join(", ");if(a.length===0)return Promise.resolve();let o=[];try{o=hc(t.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();const l=ev.begin("onTree"),c=o.reduce((u,d)=>{try{const f=_3(d);f&&u.push(f)}catch(f){qb||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,d)=>{Promise.all(c).then(f=>{m3(f,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(f=>{l(),d(f)})})}function tD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_3(t).then(n=>{n&&m3([n],e)})}function nD(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:vg(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:vg(r||{})),t(i,de(de({},n),{},{mask:r}))}}const iD=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=$r,symbol:i=!1,mask:r=null,maskId:s=null,title:a=null,titleId:o=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:f,icon:h}=t;return gp(de({type:"icon"},t),()=>(Co("beforeDOMElementCreation",{iconDefinition:t,params:e}),Ue.autoA11y&&(a?c["aria-labelledby"]="".concat(Ue.replacementClass,"-title-").concat(o||ju()):(c["aria-hidden"]="true",c.focusable="false")),Jx({icons:{main:yg(h),mask:r?yg(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:de(de({},$r),n),symbol:i,title:a,maskId:s,titleId:o,extra:{attributes:c,styles:u,classes:l}})))};var rD={mixout(){return{icon:nD(iD)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Py,t.nodeCallback=tD,t}}},provides(t){t.i2svg=function(e){const{node:n=Wt,callback:i=()=>{}}=e;return Py(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:r,titleId:s,prefix:a,transform:o,symbol:l,mask:c,maskId:u,extra:d}=n;return new Promise((f,h)=>{Promise.all([Sg(i,a),c.iconName?Sg(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[_,m]=g;f([e,Jx({icons:{main:_,mask:m},prefix:a,iconName:i,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:r,transform:s,styles:a}=e;const o=hp(a);o.length>0&&(i.style=o);let l;return Kx(s)&&(l=Ua("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},sD={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return gp({type:"layer"},()=>{Co("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(Ue.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},aD={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:r={},styles:s={}}=e;return gp({type:"counter",content:t},()=>(Co("beforeDOMElementCreation",{content:t,params:e}),kN({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(Ue.cssPrefix,"-layers-counter"),...i]}})))}}}},oD={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=$r,title:i=null,classes:r=[],attributes:s={},styles:a={}}=e;return gp({type:"text",content:t},()=>(Co("beforeDOMElementCreation",{content:t,params:e}),by({content:t,transform:de(de({},$r),n),title:i,extra:{attributes:s,styles:a,classes:["".concat(Ue.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:r,extra:s}=n;let a=null,o=null;if(Hb){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();a=c.width/l,o=c.height/l}return Ue.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,by({content:e.innerHTML,width:a,height:o,transform:r,title:i,extra:s,watchable:!0})])}}};const lD=new RegExp('"',"ug"),Ny=[1105920,1112319],Dy=de(de(de(de({},{FontAwesome:{normal:"fas",400:"fas"}}),N4),Y4),V4),bg=Object.keys(Dy).reduce((t,e)=>(t[e.toLowerCase()]=Dy[e],t),{}),cD=Object.keys(bg).reduce((t,e)=>{const n=bg[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function uD(t){const e=t.replace(lD,""),n=gN(e,0),i=n>=Ny[0]&&n<=Ny[1],r=e.length===2?e[0]===e[1]:!1;return{value:gg(r?e[0]:e),isSecondary:i||r}}function fD(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(bg[n]||{})[r]||cD[n]}function Ly(t,e){const n="".concat(q4).concat(e.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(n)!==null)return i();const a=hc(t.children).filter(f=>f.getAttribute(dg)===e)[0],o=Ia.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),c=l.match(eN),u=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(a&&!c)return t.removeChild(a),i();if(c&&d!=="none"&&d!==""){const f=o.getPropertyValue("content");let h=fD(l,u);const{value:g,isSecondary:_}=uD(f),m=c[0].startsWith("FontAwesome");let p=Qx(h,g),x=p;if(m){const y=EN(g);y.iconName&&y.prefix&&(p=y.iconName,h=y.prefix)}if(p&&!_&&(!a||a.getAttribute(Xx)!==h||a.getAttribute($x)!==x)){t.setAttribute(n,x),a&&t.removeChild(a);const y=QN(),{extra:v}=y;v.attributes[dg]=e,Sg(p,h).then(b=>{const T=Jx(de(de({},y),{},{icons:{main:b,mask:f3()},prefix:h,iconName:x,extra:v,watchable:!0})),w=Wt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=T.map(S=>lf(S)).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function dD(t){return Promise.all([Ly(t,"::before"),Ly(t,"::after")])}function hD(t){return t.parentNode!==document.head&&!~Z4.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(dg)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Iy(t){if(Bs)return new Promise((e,n)=>{const i=hc(t.querySelectorAll("*")).filter(hD).map(dD),r=ev.begin("searchPseudoElements");g3(),Promise.all(i).then(()=>{r(),Mg(),e()}).catch(()=>{r(),Mg(),n()})})}var pD={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Iy,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Wt}=e;Ue.searchPseudoElements&&Iy(n)}}};let Fy=!1;var mD={mixout(){return{dom:{unwatch(){g3(),Fy=!0}}}},hooks(){return{bootstrap(){Cy(xg("mutationObserverCallbacks",{}))},noAuto(){YN()},watch(t){const{observeMutationsRoot:e}=t;Fy?Mg():Cy(xg("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Uy=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let a=r.slice(1).join("-");if(s&&a==="h")return n.flipX=!0,n;if(s&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(s){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},e)};var gD={mixout(){return{parse:{transform:t=>Uy(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Uy(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:r,iconWidth:s}=e;const a={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},f={outer:a,inner:u,path:d};return{tag:"g",attributes:de({},f.outer),children:[{tag:"g",attributes:de({},f.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:de(de({},n.icon.attributes),f.path)}]}]}}}};const om={x:0,y:0,width:"100%",height:"100%"};function Oy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function _D(t){return t.tag==="g"?t.children:[t]}var xD={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?mp(n.split(" ").map(r=>r.trim())):f3();return i.prefix||(i.prefix=Fa()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:r,mask:s,maskId:a,transform:o}=e;const{width:l,icon:c}=r,{width:u,icon:d}=s,f=uN({transform:o,containerWidth:u,iconWidth:l}),h={tag:"rect",attributes:de(de({},om),{},{fill:"white"})},g=c.children?{children:c.children.map(Oy)}:{},_={tag:"g",attributes:de({},f.inner),children:[Oy(de({tag:c.tag,attributes:de(de({},c.attributes),f.path)},g))]},m={tag:"g",attributes:de({},f.outer),children:[_]},p="mask-".concat(a||ju()),x="clip-".concat(a||ju()),y={tag:"mask",attributes:de(de({},om),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,m]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:_D(d)},y]};return n.push(v,{tag:"rect",attributes:de({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(p,")")},om)}),{children:n,attributes:i}}}},vD={provides(t){let e=!1;Ia.matchMedia&&(e=Ia.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:de(de({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=de(de({},r),{},{attributeName:"opacity"}),a={tag:"circle",attributes:de(de({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||a.children.push({tag:"animate",attributes:de(de({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:de(de({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(a),n.push({tag:"path",attributes:de(de({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:de(de({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:de(de({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:de(de({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},yD={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},SD=[hN,rD,sD,aD,oD,pD,mD,gD,xD,vD,yD];NN(SD,{mixoutsTo:Qi});Qi.noAuto;Qi.config;Qi.library;Qi.dom;const wg=Qi.parse;Qi.findIconDefinition;Qi.toHtml;const ED=Qi.icon;Qi.layer;Qi.text;Qi.counter;var x3={exports:{}},MD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bD=MD,wD=bD;function v3(){}function y3(){}y3.resetWarningCache=v3;var TD=function(){function t(i,r,s,a,o,l){if(l!==wD){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:y3,resetWarningCache:v3};return n.PropTypes=n,n};x3.exports=TD();var AD=x3.exports;const rt=uS(AD);var CD={};function Tg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function RD(t){if(Array.isArray(t))return t}function PD(t){if(Array.isArray(t))return Tg(t)}function ia(t,e,n){return(e=kD(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ND(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function DD(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,s,a,o=[],l=!0,c=!1;try{if(s=(n=n.call(t)).next,e!==0)for(;!(l=(i=s.call(n)).done)&&(o.push(i.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return o}}function LD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ID(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ky(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Br(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ky(Object(n),!0).forEach(function(i){ia(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ky(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function FD(t,e){if(t==null)return{};var n,i,r=UD(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function UD(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function zy(t,e){return RD(t)||DD(t,e)||S3(t,e)||LD()}function Ag(t){return PD(t)||ND(t)||S3(t)||ID()}function OD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function kD(t){var e=OD(t,"string");return typeof e=="symbol"?e:e+""}function Ph(t){"@babel/helpers - typeof";return Ph=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ph(t)}function S3(t,e){if(t){if(typeof t=="string")return Tg(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Tg(t,e):void 0}}var zD="7.0.0",Cg;try{var BD=require("@fortawesome/fontawesome-svg-core/package.json");Cg=BD.version}catch{Cg=typeof process<"u"&&CD.FA_VERSION||"7.0.0"}function VD(t){var e=t.beat,n=t.fade,i=t.beatFade,r=t.bounce,s=t.shake,a=t.flash,o=t.spin,l=t.spinPulse,c=t.spinReverse,u=t.pulse,d=t.fixedWidth,f=t.inverse,h=t.border,g=t.listItem,_=t.flip,m=t.size,p=t.rotation,x=t.pull,y=t.swapOpacity,v=t.rotateBy,b=t.widthAuto,T=HD(Cg,zD),w=ia(ia(ia(ia(ia(ia({"fa-beat":e,"fa-fade":n,"fa-beat-fade":i,"fa-bounce":r,"fa-shake":s,"fa-flash":a,"fa-spin":o,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":d,"fa-inverse":f,"fa-border":h,"fa-li":g,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},"fa-".concat(m),typeof m<"u"&&m!==null),"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),"fa-pull-".concat(x),typeof x<"u"&&x!==null),"fa-swap-opacity",y),"fa-rotate-by",T&&v),"fa-width-auto",T&&b);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function HD(t,e){for(var n=t.split("-"),i=zy(n,2),r=i[0],s=i[1],a=e.split("-"),o=zy(a,2),l=o[0],c=o[1],u=r.split("."),d=l.split("."),f=0;f<Math.max(u.length,d.length);f++){var h=u[f]||"0",g=d[f]||"0",_=parseInt(h,10),m=parseInt(g,10);if(_!==m)return _>m}for(var p=0;p<Math.max(u.length,d.length);p++){var x=u[p]||"0",y=d[p]||"0";if(x!==y&&x.length!==y.length)return x.length<y.length}return!(s&&!c)}function GD(t){return t=t-0,t===t}function E3(t){return GD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var WD=["style"];function jD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function XD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=E3(n.slice(0,i)),s=n.slice(i+1).trim();return r.startsWith("webkit")?e[jD(r)]=s:e[r]=s,e},{})}function M3(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return M3(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=XD(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[E3(c)]=u}return l},{attrs:{}}),s=n.style,a=s===void 0?{}:s,o=FD(n,WD);return r.attrs.style=Br(Br({},r.attrs.style),a),t.apply(void 0,[e.tag,Br(Br({},r.attrs),o)].concat(Ag(i)))}var b3=!1;try{b3=!0}catch{}function $D(){if(!b3&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function By(t){if(t&&Ph(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(wg.icon)return wg.icon(t);if(t===null)return null;if(t&&Ph(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function lm(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ia({},t,e):{}}var Vy={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},ke=Wh.forwardRef(function(t,e){var n=Br(Br({},Vy),t),i=n.icon,r=n.mask,s=n.symbol,a=n.className,o=n.title,l=n.titleId,c=n.maskId,u=By(i),d=lm("classes",[].concat(Ag(VD(n)),Ag((a||"").split(" ")))),f=lm("transform",typeof n.transform=="string"?wg.transform(n.transform):n.transform),h=lm("mask",By(r)),g=ED(u,Br(Br(Br(Br({},d),f),h),{},{symbol:s,title:o,titleId:l,maskId:c}));if(!g)return $D("Could not find icon",u),null;var _=g.abstract,m={ref:e};return Object.keys(n).forEach(function(p){Vy.hasOwnProperty(p)||(m[p]=n[p])}),YD(_[0],m)});ke.displayName="FontAwesomeIcon";ke.propTypes={beat:rt.bool,border:rt.bool,beatFade:rt.bool,bounce:rt.bool,className:rt.string,fade:rt.bool,flash:rt.bool,mask:rt.oneOfType([rt.object,rt.array,rt.string]),maskId:rt.string,fixedWidth:rt.bool,inverse:rt.bool,flip:rt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:rt.oneOfType([rt.object,rt.array,rt.string]),listItem:rt.bool,pull:rt.oneOf(["right","left"]),pulse:rt.bool,rotation:rt.oneOf([0,90,180,270]),rotateBy:rt.bool,shake:rt.bool,size:rt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:rt.bool,spinPulse:rt.bool,spinReverse:rt.bool,symbol:rt.oneOfType([rt.bool,rt.string]),title:rt.string,titleId:rt.string,transform:rt.oneOfType([rt.string,rt.object]),swapOpacity:rt.bool,widthAuto:rt.bool};var YD=M3.bind(null,Wh.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const qD={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},w3={prefix:"fas",iconName:"compass",icon:[512,512,[129517],"f14e","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},KD={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},ZD={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},QD={prefix:"fas",iconName:"sitemap",icon:[576,512,[],"f0e8","M208 80c0-26.5 21.5-48 48-48l64 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-8 0 0 40 152 0c30.9 0 56 25.1 56 56l0 32 8 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l8 0 0-32c0-4.4-3.6-8-8-8l-152 0 0 40 8 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l8 0 0-40-152 0c-4.4 0-8 3.6-8 8l0 32 8 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-64 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l8 0 0-32c0-30.9 25.1-56 56-56l152 0 0-40-8 0c-26.5 0-48-21.5-48-48l0-64z"]},JD={prefix:"fas",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"]},Nh={prefix:"fas",iconName:"wand-magic-sparkles",icon:[576,512,["magic-wand-sparkles"],"e2ca","M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"]},T3={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},eL={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},tL={prefix:"fas",iconName:"folder-open",icon:[576,512,[128194,128449,61717],"f07c","M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"]},nL={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},A3={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},Pr={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},C3={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},iL={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},rL={prefix:"fas",iconName:"headphones",icon:[512,512,[127911],"f025","M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80l0-16 0-48 0-48C0 146.6 114.6 32 256 32s256 114.6 256 256l0 48 0 48 0 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"]},sL={prefix:"fas",iconName:"file-pdf",icon:[512,512,[],"f1c1","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"]},aL={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},oL={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"]},Hy={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},Gy={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},lL={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},cL=lL,R3={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},uL={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"]},P3={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},fL={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},dL={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},N3={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z"]},hL={prefix:"fas",iconName:"dollar-sign",icon:[320,512,[128178,61781,"dollar","usd"],"24","M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"]},pL={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]},D3={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};function mL(){const t=wx(),e=rf(),[n,i]=J.useState("Overview"),[r,s]=J.useState(!1),a=[{name:"Overview",path:"/"},{name:"Careers",path:"/careers"},{name:"Interest Quiz",path:"/quiz"},{name:"Multimedia",path:"/multimedia"},{name:"Success Stories",path:"/stories"},{name:"Resource Library",path:"/resources"}],o=J.useRef(null),l=J.useRef(null);J.useEffect(()=>{const d=a.find(f=>f.path===e.pathname);d&&i(d.name)},[e.pathname]);const c=d=>{if(!o.current||!l.current)return;const f=d.currentTarget,h=l.current.getBoundingClientRect(),g=f.getBoundingClientRect(),_=g.left-h.left,m=g.width;gs.to(o.current,{left:_,width:m,opacity:1,scale:1,duration:.3,ease:"power2.out"})},u=()=>{o.current&&gs.to(o.current,{opacity:0,scale:.95,duration:.25,ease:"power2.out"})};return E.jsx("header",{className:"fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4",children:E.jsxs("div",{className:"relative pointer-events-auto bg-black text-white px-5 py-2.5 rounded-b-[24px] shadow-2xl flex items-center justify-between gap-6 sm:gap-8 max-w-full",children:[E.jsx("svg",{className:"notch-curve-left text-black fill-current",viewBox:"0 0 20 20","aria-hidden":"true",children:E.jsx("path",{d:"M 0 0 C 12 0 20 8 20 20 L 20 0 Z"})}),E.jsx("svg",{className:"notch-curve-right text-black fill-current",viewBox:"0 0 20 20","aria-hidden":"true",children:E.jsx("path",{d:"M 20 0 C 8 0 0 8 0 20 L 0 0 Z"})}),E.jsxs(Lt,{to:"/",className:"flex items-center gap-2.5 group flex-shrink-0",children:[E.jsx("div",{className:"w-8 h-8 rounded-xl bg-gradient-to-b from-[#FF7A45] via-[#E8602E] to-[#BC4C22] p-[1px] shadow-[0_2px_10px_rgba(232,96,46,0.5)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105",children:E.jsx("div",{className:"w-full h-full bg-gradient-to-b from-[#E8602E] to-[#BC4C22] rounded-[11px] flex items-center justify-center border-t border-white/40",children:E.jsx(ke,{icon:D3,className:"w-4 h-4 text-white drop-shadow"})})}),E.jsxs("span",{className:"text-base font-extrabold tracking-tight text-white font-sans",children:["Path",E.jsx("span",{className:"text-[#E8602E]",children:"Seeker"})]})]}),E.jsxs("nav",{ref:l,onMouseLeave:u,className:"hidden md:flex items-center gap-1 relative py-1",children:[E.jsx("div",{ref:o,className:"absolute top-1 bottom-1 bg-white/15 rounded-full pointer-events-none opacity-0",style:{left:0,width:0}}),a.map(d=>E.jsx("button",{onMouseEnter:c,onClick:()=>{i(d.name),t(d.path)},className:`relative z-10 px-3.5 py-1 text-xs sm:text-[13px] font-medium transition-colors rounded-full ${n===d.name?"text-white font-semibold":"text-slate-300 hover:text-white"}`,children:d.name},d.name))]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsxs(Lt,{to:"/register",className:"group flex items-center gap-1.5 bg-[#E8602E] hover:bg-[#BC4C22] text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex-shrink-0",children:[E.jsx(ke,{icon:P3,className:"w-3.5 h-3.5 mb-0.5"}),E.jsx("span",{children:"Get Started"})]}),E.jsx("button",{onClick:()=>s(!r),className:"md:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10","aria-label":"Toggle Navigation Menu",children:E.jsx(ke,{icon:r?R3:KD,className:"w-4 h-4"})})]}),r&&E.jsxs("div",{className:"absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-2 md:hidden",children:[a.map(d=>E.jsx("button",{onClick:()=>{i(d.name),s(!1),t(d.path)},className:`text-left px-4 py-2 rounded-xl text-sm font-medium transition-colors ${n===d.name?"bg-[#E8602E]/25 text-[#E8602E] font-bold":"text-slate-300 hover:bg-white/10"}`,children:d.name},d.name)),E.jsxs("div",{className:"pt-2 border-t border-white/10 flex items-center gap-2",children:[E.jsx(Lt,{to:"/login",onClick:()=>s(!1),className:"flex-1 text-center py-2 rounded-xl bg-white/10 text-white text-xs font-semibold",children:"Login"}),E.jsx(Lt,{to:"/register",onClick:()=>s(!1),className:"flex-1 text-center py-2 rounded-xl bg-[#E8602E] text-white text-xs font-bold",children:"Sign Up"})]})]})]})})}function gL(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _L(t,e,n){return e&&gL(t.prototype,e),t}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On,Od,Bi,pa,ma,kl,L3,Ja,zl,I3,Ss,yr,F3,U3=function(){return On||typeof window<"u"&&(On=window.gsap)&&On.registerPlugin&&On},O3=1,Al=[],lt=[],es=[],lu=Date.now,Rg=function(e,n){return n},xL=function(){var e=zl.core,n=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,lt),r.push.apply(r,es),lt=i,es=r,Rg=function(a,o){return n[a](o)}},Ca=function(e,n){return~es.indexOf(e)&&es[es.indexOf(e)+1][n]},cu=function(e){return!!~I3.indexOf(e)},oi=function(e,n,i,r,s){return e.addEventListener(n,i,{passive:r!==!1,capture:!!s})},si=function(e,n,i,r){return e.removeEventListener(n,i,!!r)},If="scrollLeft",Ff="scrollTop",Pg=function(){return Ss&&Ss.isPressed||lt.cache++},Dh=function(e,n){var i=function r(s){if(s||s===0){O3&&(Bi.history.scrollRestoration="manual");var a=Ss&&Ss.isPressed;s=r.v=Math.round(s)||(Ss&&Ss.iOS?1:0),e(s),r.cacheID=lt.cache,a&&Rg("ss",s)}else(n||lt.cache!==r.cacheID||Rg("ref"))&&(r.cacheID=lt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},hi={s:If,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Dh(function(t){return arguments.length?Bi.scrollTo(t,En.sc()):Bi.pageXOffset||pa[If]||ma[If]||kl[If]||0})},En={s:Ff,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:hi,sc:Dh(function(t){return arguments.length?Bi.scrollTo(hi.sc(),t):Bi.pageYOffset||pa[Ff]||ma[Ff]||kl[Ff]||0})},xi=function(e,n){return(n&&n._ctx&&n._ctx.selector||On.utils.toArray)(e)[0]||(typeof e=="string"&&On.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},vL=function(e,n){for(var i=n.length;i--;)if(n[i]===e||n[i].contains(e))return!0;return!1},Oa=function(e,n){var i=n.s,r=n.sc;cu(e)&&(e=pa.scrollingElement||ma);var s=lt.indexOf(e),a=r===En.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+a]||oi(e,"scroll",Pg);var o=lt[s+a],l=o||(lt[s+a]=Dh(Ca(e,i),!0)||(cu(e)?r:Dh(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=On.getProperty(e,"scrollBehavior")==="smooth"),l},Ng=function(e,n,i){var r=e,s=e,a=lu(),o=a,l=n||50,c=Math.max(500,l*3),u=function(g,_){var m=lu();_||m-a>l?(s=r,r=g,o=a,a=m):i?r+=g:r=s+(g-s)/(m-o)*(a-o)},d=function(){s=r=i?0:r,o=a=0},f=function(g){var _=o,m=s,p=lu();return(g||g===0)&&g!==r&&u(g),a===o||p-o>c?0:(r+(i?m:-m))/((i?p:a)-_)*1e3};return{update:u,reset:d,getVelocity:f}},wc=function(e,n){return n&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Wy=function(e){var n=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(i)?n:i},k3=function(){zl=On.core.globals().ScrollTrigger,zl&&zl.core&&xL()},z3=function(e){return On=e||U3(),!Od&&On&&typeof document<"u"&&document.body&&(Bi=window,pa=document,ma=pa.documentElement,kl=pa.body,I3=[Bi,pa,ma,kl],On.utils.clamp,F3=On.core.context||function(){},Ja="onpointerenter"in kl?"pointer":"mouse",L3=un.isTouch=Bi.matchMedia&&Bi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,yr=un.eventTypes=("ontouchstart"in ma?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ma?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return O3=0},500),Od=1),zl||k3(),Od};hi.op=En;lt.cache=0;var un=function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(i){Od||z3(On)||console.warn("Please gsap.registerPlugin(Observer)"),zl||k3();var r=i.tolerance,s=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,x=i.onDrag,y=i.onPress,v=i.onRelease,b=i.onRight,T=i.onLeft,w=i.onUp,S=i.onDown,A=i.onChangeX,R=i.onChangeY,D=i.onChange,L=i.onToggleX,G=i.onToggleY,Y=i.onHover,k=i.onHoverEnd,X=i.onMove,U=i.ignoreCheck,I=i.isNormalizer,W=i.onGestureStart,P=i.onGestureEnd,ie=i.onWheel,fe=i.onEnable,$e=i.onDisable,Ge=i.onClick,We=i.scrollSpeed,Z=i.capture,oe=i.allowClicks,ae=i.lockAxis,De=i.onLockAxis;this.target=o=xi(o)||ma,this.vars=i,h&&(h=On.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,We=We||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Bi.getComputedStyle(kl).lineHeight)||22);var je,Ce,ct,Te,Xe,Ze,qe,$=this,gt=0,At=0,Ft=i.passive||!u&&i.passive!==!1,Qe=Oa(o,hi),St=Oa(o,En),O=Qe(),Jt=St(),Ye=~a.indexOf("touch")&&!~a.indexOf("pointer")&&yr[0]==="pointerdown",N=cu(o),M=o.ownerDocument||pa,B=[0,0,0],H=[0,0,0],Q=0,me=function(){return Q=lu()},ue=function(se,Ve){return($.event=se)&&h&&vL(se.target,h)||Ve&&Ye&&se.pointerType!=="touch"||U&&U(se,Ve)},ee=function(){$._vx.reset(),$._vy.reset(),Ce.pause(),d&&d($)},te=function(){var se=$.deltaX=Wy(B),Ve=$.deltaY=Wy(H),ce=Math.abs(se)>=r,He=Math.abs(Ve)>=r;D&&(ce||He)&&D($,se,Ve,B,H),ce&&(b&&$.deltaX>0&&b($),T&&$.deltaX<0&&T($),A&&A($),L&&$.deltaX<0!=gt<0&&L($),gt=$.deltaX,B[0]=B[1]=B[2]=0),He&&(S&&$.deltaY>0&&S($),w&&$.deltaY<0&&w($),R&&R($),G&&$.deltaY<0!=At<0&&G($),At=$.deltaY,H[0]=H[1]=H[2]=0),(Te||ct)&&(X&&X($),ct&&(m&&ct===1&&m($),x&&x($),ct=0),Te=!1),Ze&&!(Ze=!1)&&De&&De($),Xe&&(ie($),Xe=!1),je=0},xe=function(se,Ve,ce){B[ce]+=se,H[ce]+=Ve,$._vx.update(se),$._vy.update(Ve),c?je||(je=requestAnimationFrame(te)):te()},Ne=function(se,Ve){ae&&!qe&&($.axis=qe=Math.abs(se)>Math.abs(Ve)?"x":"y",Ze=!0),qe!=="y"&&(B[2]+=se,$._vx.update(se,!0)),qe!=="x"&&(H[2]+=Ve,$._vy.update(Ve,!0)),c?je||(je=requestAnimationFrame(te)):te()},ve=function(se){if(!ue(se,1)){se=wc(se,u);var Ve=se.clientX,ce=se.clientY,He=Ve-$.x,Le=ce-$.y,Je=$.isDragging;$.x=Ve,$.y=ce,(Je||(He||Le)&&(Math.abs($.startX-Ve)>=s||Math.abs($.startY-ce)>=s))&&(ct||(ct=Je?2:1),Je||($.isDragging=!0),Ne(He,Le))}},_e=$.onPress=function(le){ue(le,1)||le&&le.button||($.axis=qe=null,Ce.pause(),$.isPressed=!0,le=wc(le),gt=At=0,$.startX=$.x=le.clientX,$.startY=$.y=le.clientY,$._vx.reset(),$._vy.reset(),oi(I?o:M,yr[1],ve,Ft,!0),$.deltaX=$.deltaY=0,y&&y($))},pe=$.onRelease=function(le){if(!ue(le,1)){si(I?o:M,yr[1],ve,!0);var se=!isNaN($.y-$.startY),Ve=$.isDragging,ce=Ve&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),He=wc(le);!ce&&se&&($._vx.reset(),$._vy.reset(),u&&oe&&On.delayedCall(.08,function(){if(lu()-Q>300&&!le.defaultPrevented){if(le.target.click)le.target.click();else if(M.createEvent){var Le=M.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,Bi,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),le.target.dispatchEvent(Le)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,d&&Ve&&!I&&Ce.restart(!0),ct&&te(),p&&Ve&&p($),v&&v($,ce)}},Fe=function(se){return se.touches&&se.touches.length>1&&($.isGesturing=!0)&&W(se,$.isDragging)},Be=function(){return($.isGesturing=!1)||P($)},F=function(se){if(!ue(se)){var Ve=Qe(),ce=St();xe((Ve-O)*We,(ce-Jt)*We,1),O=Ve,Jt=ce,d&&Ce.restart(!0)}},ge=function(se){if(!ue(se)){se=wc(se,u),ie&&(Xe=!0);var Ve=(se.deltaMode===1?l:se.deltaMode===2?Bi.innerHeight:1)*g;xe(se.deltaX*Ve,se.deltaY*Ve,0),d&&!I&&Ce.restart(!0)}},ne=function(se){if(!ue(se)){var Ve=se.clientX,ce=se.clientY,He=Ve-$.x,Le=ce-$.y;$.x=Ve,$.y=ce,Te=!0,d&&Ce.restart(!0),(He||Le)&&Ne(He,Le)}},ye=function(se){$.event=se,Y($)},Se=function(se){$.event=se,k($)},re=function(se){return ue(se)||wc(se,u)&&Ge($)};Ce=$._dc=On.delayedCall(f||.25,ee).pause(),$.deltaX=$.deltaY=0,$._vx=Ng(0,50,!0),$._vy=Ng(0,50,!0),$.scrollX=Qe,$.scrollY=St,$.isDragging=$.isGesturing=$.isPressed=!1,F3(this),$.enable=function(le){return $.isEnabled||(oi(N?M:o,"scroll",Pg),a.indexOf("scroll")>=0&&oi(N?M:o,"scroll",F,Ft,Z),a.indexOf("wheel")>=0&&oi(o,"wheel",ge,Ft,Z),(a.indexOf("touch")>=0&&L3||a.indexOf("pointer")>=0)&&(oi(o,yr[0],_e,Ft,Z),oi(M,yr[2],pe),oi(M,yr[3],pe),oe&&oi(o,"click",me,!0,!0),Ge&&oi(o,"click",re),W&&oi(M,"gesturestart",Fe),P&&oi(M,"gestureend",Be),Y&&oi(o,Ja+"enter",ye),k&&oi(o,Ja+"leave",Se),X&&oi(o,Ja+"move",ne)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Te=ct=!1,$._vx.reset(),$._vy.reset(),O=Qe(),Jt=St(),le&&le.type&&_e(le),fe&&fe($)),$},$.disable=function(){$.isEnabled&&(Al.filter(function(le){return le!==$&&cu(le.target)}).length||si(N?M:o,"scroll",Pg),$.isPressed&&($._vx.reset(),$._vy.reset(),si(I?o:M,yr[1],ve,!0)),si(N?M:o,"scroll",F,Z),si(o,"wheel",ge,Z),si(o,yr[0],_e,Z),si(M,yr[2],pe),si(M,yr[3],pe),si(o,"click",me,!0),si(o,"click",re),si(M,"gesturestart",Fe),si(M,"gestureend",Be),si(o,Ja+"enter",ye),si(o,Ja+"leave",Se),si(o,Ja+"move",ne),$.isEnabled=$.isPressed=$.isDragging=!1,$e&&$e($))},$.kill=$.revert=function(){$.disable();var le=Al.indexOf($);le>=0&&Al.splice(le,1),Ss===$&&(Ss=0)},Al.push($),I&&cu(o)&&(Ss=$),$.enable(_)},_L(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();un.version="3.15.0";un.create=function(t){return new un(t)};un.register=z3;un.getAll=function(){return Al.slice()};un.getById=function(t){return Al.filter(function(e){return e.vars.id===t})[0]};U3()&&On.registerPlugin(un);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,cl,ot,bt,ki,Et,nv,Lh,$u,uu,Vc,Uf,Yn,_p,Dg,fi,jy,Xy,ul,B3,cm,V3,ci,Lg,H3,G3,ea,Ig,iv,Bl,rv,fu,Fg,um,Of=1,qn=Date.now,fm=qn(),hr=0,Hc=0,$y=function(e,n,i){var r=Ui(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+n+"Clamp"]=r,r?e.substr(6,e.length-7):e},Yy=function(e,n){return n&&(!Ui(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},yL=function t(){return Hc&&requestAnimationFrame(t)},qy=function(){return _p=1},Ky=function(){return _p=0},zr=function(e){return e},Gc=function(e){return Math.round(e*1e5)/1e5||0},W3=function(){return typeof window<"u"},j3=function(){return Pe||W3()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},Ro=function(e){return!!~nv.indexOf(e)},X3=function(e){return(e==="Height"?rv:ot["inner"+e])||ki["client"+e]||Et["client"+e]},$3=function(e){return Ca(e,"getBoundingClientRect")||(Ro(e)?function(){return Hd.width=ot.innerWidth,Hd.height=rv,Hd}:function(){return _s(e)})},SL=function(e,n,i){var r=i.d,s=i.d2,a=i.a;return(a=Ca(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(n?X3(s):e["client"+s])||0}},EL=function(e,n){return!n||~es.indexOf(e)?$3(e):function(){return Hd}},qr=function(e,n){var i=n.s,r=n.d2,s=n.d,a=n.a;return Math.max(0,(i="scroll"+r)&&(a=Ca(e,i))?a()-$3(e)()[s]:Ro(e)?(ki[i]||Et[i])-X3(r):e[i]-e["offset"+r])},kf=function(e,n){for(var i=0;i<ul.length;i+=3)(!n||~n.indexOf(ul[i+1]))&&e(ul[i],ul[i+1],ul[i+2])},Ui=function(e){return typeof e=="string"},Qn=function(e){return typeof e=="function"},Wc=function(e){return typeof e=="number"},eo=function(e){return typeof e=="object"},Tc=function(e,n,i){return e&&e.progress(n?0:1)&&i&&e.pause()},Xo=function(e,n,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return n(e,i)}):n(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},$o=Math.abs,Y3="left",q3="top",sv="right",av="bottom",vo="width",yo="height",du="Right",hu="Left",pu="Top",mu="Bottom",pn="padding",ar="margin",rc="Width",ov="Height",yn="px",or=function(e){return ot.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},ML=function(e){var n=or(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},Zy=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},_s=function(e,n){var i=n&&or(e)[Dg]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Ih=function(e,n){var i=n.d2;return e["offset"+i]||e["client"+i]||0},K3=function(e){var n=[],i=e.labels,r=e.duration(),s;for(s in i)n.push(i[s]/r);return n},bL=function(e){return function(n){return Pe.utils.snap(K3(e),n)}},lv=function(e){var n=Pe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return n(r);if(s>0){for(r-=a,o=0;o<i.length;o++)if(i[o]>=r)return i[o];return i[o-1]}else for(o=i.length,r+=a;o--;)if(i[o]<=r)return i[o];return i[0]}:function(r,s,a){a===void 0&&(a=.001);var o=n(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:n(s<0?r-e:r+e)}},wL=function(e){return function(n,i){return lv(K3(e))(n,i.direction)}},zf=function(e,n,i,r){return i.split(",").forEach(function(s){return e(n,s,r)})},Nn=function(e,n,i,r,s){return e.addEventListener(n,i,{passive:!r,capture:!!s})},Pn=function(e,n,i,r){return e.removeEventListener(n,i,!!r)},Bf=function(e,n,i){i=i&&i.wheelHandler,i&&(e(n,"wheel",i),e(n,"touchmove",i))},Qy={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Vf={toggleActions:"play",anticipatePin:0},Fh={top:0,left:0,center:.5,bottom:1,right:1},kd=function(e,n){if(Ui(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=n/100),e=e.substr(0,i-1)),e=r+(e in Fh?Fh[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},Hf=function(e,n,i,r,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,g=bt.createElement("div"),_=Ro(i)||Ca(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Et:i.tagName==="IFRAME"?i.contentDocument.body:i,x=e.indexOf("start")!==-1,y=x?c:u,v="border-color:"+y+";font-size:"+d+";color:"+y+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(r===En?sv:av)+":"+(a+parseFloat(f))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),g.style.cssText=v,g.innerText=n||n===0?e+"-"+n:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],zd(g,0,r,x),g},zd=function(e,n,i,r){var s={display:"block"},a=i[r?"os2":"p2"],o=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+a+rc]=1,s["border"+o+rc]=0,s[i.p]=n+"px",Pe.set(e,s)},st=[],Ug={},Yu,Jy=function(){return qn()-hr>34&&(Yu||(Yu=requestAnimationFrame(bs)))},Yo=function(){(!ci||!ci.isPressed||ci.startX>Et.clientWidth)&&(lt.cache++,ci?Yu||(Yu=requestAnimationFrame(bs)):bs(),hr||No("scrollStart"),hr=qn())},dm=function(){G3=ot.innerWidth,H3=ot.innerHeight},jc=function(e){lt.cache++,(e===!0||!Yn&&!V3&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Lg||G3!==ot.innerWidth||Math.abs(ot.innerHeight-H3)>ot.innerHeight*.25))&&Lh.restart(!0)},Po={},TL=[],Z3=function t(){return Pn(ut,"scrollEnd",t)||co(!0)},No=function(e){return Po[e]&&Po[e].map(function(n){return n()})||TL},Ii=[],Q3=function(e){for(var n=0;n<Ii.length;n+=5)(!e||Ii[n+4]&&Ii[n+4].query===e)&&(Ii[n].style.cssText=Ii[n+1],Ii[n].getBBox&&Ii[n].setAttribute("transform",Ii[n+2]||""),Ii[n+3].uncache=1)},J3=function(){return lt.forEach(function(e){return Qn(e)&&++e.cacheID&&(e.rec=e())})},cv=function(e,n){var i;for(fi=0;fi<st.length;fi++)i=st[fi],i&&(!n||i._ctx===n)&&(e?i.kill(1):i.revert(!0,!0));fu=!0,n&&Q3(n),n||No("revert")},ew=function(e,n){lt.cache++,(n||!di)&&lt.forEach(function(i){return Qn(i)&&i.cacheID++&&(i.rec=0)}),Ui(e)&&(ot.history.scrollRestoration=iv=e)},di,So=0,e2,AL=function(){if(e2!==So){var e=e2=So;requestAnimationFrame(function(){return e===So&&co(!0)})}},tw=function(){Et.appendChild(Bl),rv=!ci&&Bl.offsetHeight||ot.innerHeight,Et.removeChild(Bl)},t2=function(e){return $u(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},co=function(e,n){if(ki=bt.documentElement,Et=bt.body,nv=[ot,bt,ki,Et],hr&&!e&&!fu){Nn(ut,"scrollEnd",Z3);return}tw(),di=ut.isRefreshing=!0,fu||J3();var i=No("refreshInit");B3&&ut.sort(),n||cv(),lt.forEach(function(r){Qn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),st.slice(0).forEach(function(r){return r.refresh()}),fu=!1,st.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Fg=1,t2(!0),st.forEach(function(r){var s=qr(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),t2(!1),Fg=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),lt.forEach(function(r){Qn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),ew(iv,1),Lh.pause(),So++,di=2,bs(2),st.forEach(function(r){return Qn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),di=ut.isRefreshing=!1,No("refresh")},Og=0,Bd=1,gu,bs=function(e){if(e===2||!di&&!fu){ut.isUpdating=!0,gu&&gu.update(0);var n=st.length,i=qn(),r=i-fm>=50,s=n&&st[0].scroll();if(Bd=Og>s?-1:1,di||(Og=s),r&&(hr&&!_p&&i-hr>200&&(hr=0,No("scrollEnd")),Vc=fm,fm=i),Bd<0){for(fi=n;fi-- >0;)st[fi]&&st[fi].update(0,r);Bd=1}else for(fi=0;fi<n;fi++)st[fi]&&st[fi].update(0,r);ut.isUpdating=!1}Yu=0},kg=[Y3,q3,av,sv,ar+mu,ar+du,ar+pu,ar+hu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Vd=kg.concat([vo,yo,"boxSizing","max"+rc,"max"+ov,"position",ar,pn,pn+pu,pn+du,pn+mu,pn+hu]),CL=function(e,n,i){Vl(i);var r=e._gsap;if(r.spacerIsNative)Vl(r.spacerState);else if(e._gsap.swappedIn){var s=n.parentNode;s&&(s.insertBefore(e,n),s.removeChild(n))}e._gsap.swappedIn=!1},hm=function(e,n,i,r){if(!e._gsap.swappedIn){for(var s=kg.length,a=n.style,o=e.style,l;s--;)l=kg[s],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[av]=o[sv]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[vo]=Ih(e,hi)+yn,a[yo]=Ih(e,En)+yn,a[pn]=o[ar]=o[q3]=o[Y3]="0",Vl(r),o[vo]=o["max"+rc]=i[vo],o[yo]=o["max"+ov]=i[yo],o[pn]=i[pn],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},RL=/([A-Z])/g,Vl=function(e){if(e){var n=e.t.style,i=e.length,r=0,s,a;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;r<i;r+=2)a=e[r+1],s=e[r],a?n[s]=a:n[s]&&n.removeProperty(s.replace(RL,"-$1").toLowerCase())}},Gf=function(e){for(var n=Vd.length,i=e.style,r=[],s=0;s<n;s++)r.push(Vd[s],i[Vd[s]]);return r.t=e,r},PL=function(e,n,i){for(var r=[],s=e.length,a=i?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in n?n[o]:e[a+1]);return r.t=e.t,r},Hd={left:0,top:0},n2=function(e,n,i,r,s,a,o,l,c,u,d,f,h,g){Qn(e)&&(e=e(l)),Ui(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?kd("0"+e.substr(3),i):0));var _=h?h.time():0,m,p,x;if(h&&h.seek(0),isNaN(e)||(e=+e),Wc(e))h&&(e=Pe.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&zd(o,i,r,!0);else{Qn(n)&&(n=n(l));var y=(e||"0").split(" "),v,b,T,w;x=xi(n,l)||Et,v=_s(x)||{},(!v||!v.left&&!v.top)&&or(x).display==="none"&&(w=x.style.display,x.style.display="block",v=_s(x),w?x.style.display=w:x.style.removeProperty("display")),b=kd(y[0],v[r.d]),T=kd(y[1]||"0",i),e=v[r.p]-c[r.p]-u+b+s-T,o&&zd(o,T,r,i-T<20||o._isStart&&T>20),i-=i-T}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var S=e+i,A=a._isStart;m="scroll"+r.d2,zd(a,S,r,A&&S>20||!A&&(d?Math.max(Et[m],ki[m]):a.parentNode[m])<=S+1),d&&(c=_s(o),d&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+yn))}return h&&x&&(m=_s(x),h.seek(f),p=_s(x),h._caScrollDist=m[r.p]-p[r.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},NL=/(webkit|moz|length|cssText|inset)/i,i2=function(e,n,i,r){if(e.parentNode!==n){var s=e.style,a,o;if(n===Et){e._stOrig=s.cssText,o=or(e);for(a in o)!+a&&!NL.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=i,s.left=r}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,n.appendChild(e)}},nw=function(e,n,i){var r=n,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,i&&i()),s=r,r=Math.round(a),r}},Wf=function(e,n,i){var r={};r[n.p]="+="+i,Pe.set(e,r)},r2=function(e,n){var i=Oa(e,n),r="_scroll"+n.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,g={};c=c||i();var _=nw(i,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[r]=o,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,a.tween&&bs()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=Pe.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Nn(e,"wheel",i.wheelHandler),ut.isTouch&&Nn(e,"touchmove",i.wheelHandler),s},ut=function(){function t(n,i){cl||t.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ig(this),this.init(n,i)}var e=t.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Hc){this.update=this.refresh=this.kill=zr;return}i=Zy(Ui(i)||Wc(i)||i.nodeType?{trigger:i}:i,Vf);var s=i,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,y=s.once,v=s.snap,b=s.pinReparent,T=s.pinSpacer,w=s.containerAnimation,S=s.fastScrollEnd,A=s.preventOverlaps,R=i.horizontal||i.containerAnimation&&i.horizontal!==!1?hi:En,D=!d&&d!==0,L=xi(i.scroller||ot),G=Pe.core.getCache(L),Y=Ro(L),k=("pinType"in i?i.pinType:Ca(L,"pinType")||Y&&"fixed")==="fixed",X=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],U=D&&i.toggleActions.split(" "),I="markers"in i?i.markers:Vf.markers,W=Y?0:parseFloat(or(L)["border"+R.p2+rc])||0,P=this,ie=i.onRefreshInit&&function(){return i.onRefreshInit(P)},fe=SL(L,Y,R),$e=EL(L,Y),Ge=0,We=0,Z=0,oe=Oa(L,R),ae,De,je,Ce,ct,Te,Xe,Ze,qe,$,gt,At,Ft,Qe,St,O,Jt,Ye,N,M,B,H,Q,me,ue,ee,te,xe,Ne,ve,_e,pe,Fe,Be,F,ge,ne,ye,Se;if(P._startClamp=P._endClamp=!1,P._dir=R,m*=45,P.scroller=L,P.scroll=w?w.time.bind(w):oe,Ce=oe(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(B3=1,i.refreshPriority===-9999&&(gu=P)),G.tweenScroll=G.tweenScroll||{top:r2(L,En),left:r2(L,hi)},P.tweenTo=ae=G.tweenScroll[R.p],P.scrubDuration=function(ce){Fe=Wc(ce)&&ce,Fe?pe?pe.duration(ce):pe=Pe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Fe,paused:!0,onComplete:function(){return p&&p(P)}}):(pe&&pe.progress(1).kill(),pe=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),ve=0,l||(l=r.vars.id)),v&&((!eo(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Et.style&&Pe.set(Y?[Et,ki]:L,{scrollBehavior:"auto"}),lt.forEach(function(ce){return Qn(ce)&&ce.target===(Y?bt.scrollingElement||ki:L)&&(ce.smooth=!1)}),je=Qn(v.snapTo)?v.snapTo:v.snapTo==="labels"?bL(r):v.snapTo==="labelsDirectional"?wL(r):v.directional!==!1?function(ce,He){return lv(v.snapTo)(ce,qn()-We<500?0:He.direction)}:Pe.utils.snap(v.snapTo),Be=v.duration||{min:.1,max:2},Be=eo(Be)?uu(Be.min,Be.max):uu(Be,Be),F=Pe.delayedCall(v.delay||Fe/2||.1,function(){var ce=oe(),He=qn()-We<500,Le=ae.tween;if((He||Math.abs(P.getVelocity())<10)&&!Le&&!_p&&Ge!==ce){var Je=(ce-Te)/Qe,fn=r&&!D?r.totalProgress():Je,at=He?0:(fn-_e)/(qn()-Vc)*1e3||0,Bt=Pe.utils.clamp(-Je,1-Je,$o(at/2)*at/.185),An=Je+(v.inertia===!1?0:Bt),Vt,Rt,dt=v,ii=dt.onStart,Ut=dt.onInterrupt,Hn=dt.onComplete;if(Vt=je(An,P),Wc(Vt)||(Vt=An),Rt=Math.max(0,Math.round(Te+Vt*Qe)),ce<=Xe&&ce>=Te&&Rt!==ce){if(Le&&!Le._initted&&Le.data<=$o(Rt-ce))return;v.inertia===!1&&(Bt=Vt-Je),ae(Rt,{duration:Be($o(Math.max($o(An-fn),$o(Vt-fn))*.185/at/.05||0)),ease:v.ease||"power3",data:$o(Rt-ce),onInterrupt:function(){return F.restart(!0)&&Ut&&Xo(P,Ut)},onComplete:function(){P.update(),Ge=oe(),r&&!D&&(pe?pe.resetTo("totalProgress",Vt,r._tTime/r._tDur):r.progress(Vt)),ve=_e=r&&!D?r.totalProgress():P.progress,x&&x(P),Hn&&Xo(P,Hn)}},ce,Bt*Qe,Rt-ce-Bt*Qe),ii&&Xo(P,ii,ae.tween)}}else P.isActive&&Ge!==ce&&F.restart(!0)}).pause()),l&&(Ug[l]=P),f=P.trigger=xi(f||h!==!0&&h),Se=f&&f._gsap&&f._gsap.stRevert,Se&&(Se=Se(P)),h=h===!0?f:xi(h),Ui(o)&&(o={targets:f,className:o}),h&&(g===!1||g===ar||(g=!g&&h.parentNode&&h.parentNode.style&&or(h.parentNode).display==="flex"?!1:pn),P.pin=h,De=Pe.core.getCache(h),De.spacer?St=De.pinState:(T&&(T=xi(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),De.spacerIsNative=!!T,T&&(De.spacerState=Gf(T))),De.spacer=Ye=T||bt.createElement("div"),Ye.classList.add("pin-spacer"),l&&Ye.classList.add("pin-spacer-"+l),De.pinState=St=Gf(h)),i.force3D!==!1&&Pe.set(h,{force3D:!0}),P.spacer=Ye=De.spacer,Ne=or(h),me=Ne[g+R.os2],M=Pe.getProperty(h),B=Pe.quickSetter(h,R.a,yn),hm(h,Ye,Ne),Jt=Gf(h)),I){At=eo(I)?Zy(I,Qy):Qy,$=Hf("scroller-start",l,L,R,At,0),gt=Hf("scroller-end",l,L,R,At,0,$),N=$["offset"+R.op.d2];var re=xi(Ca(L,"content")||L);Ze=this.markerStart=Hf("start",l,re,R,At,N,0,w),qe=this.markerEnd=Hf("end",l,re,R,At,N,0,w),w&&(ye=Pe.quickSetter([Ze,qe],R.a,yn)),!k&&!(es.length&&Ca(L,"fixedMarkers")===!0)&&(ML(Y?Et:L),Pe.set([$,gt],{force3D:!0}),ee=Pe.quickSetter($,R.a,yn),xe=Pe.quickSetter(gt,R.a,yn))}if(w){var le=w.vars.onUpdate,se=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),le&&le.apply(w,se||[])})}if(P.previous=function(){return st[st.indexOf(P)-1]},P.next=function(){return st[st.indexOf(P)+1]},P.revert=function(ce,He){if(!He)return P.kill(!0);var Le=ce!==!1||!P.enabled,Je=Yn;Le!==P.isReverted&&(Le&&(ge=Math.max(oe(),P.scroll.rec||0),Z=P.progress,ne=r&&r.progress()),Ze&&[Ze,qe,$,gt].forEach(function(fn){return fn.style.display=Le?"none":"block"}),Le&&(Yn=P,P.update(Le)),h&&(!b||!P.isActive)&&(Le?CL(h,Ye,St):hm(h,Ye,or(h),ue)),Le||P.update(Le),Yn=Je,P.isReverted=Le)},P.refresh=function(ce,He,Le,Je){if(!((Yn||!P.enabled)&&!He)){if(h&&ce&&hr){Nn(t,"scrollEnd",Z3);return}!di&&ie&&ie(P),Yn=P,ae.tween&&!Le&&(ae.tween.kill(),ae.tween=0),pe&&pe.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Me){return Me.vars.immediateRender&&Me.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var fn=fe(),at=$e(),Bt=w?w.duration():qr(L,R),An=Qe<=.01||!Qe,Vt=0,Rt=Je||0,dt=eo(Le)?Le.end:i.end,ii=i.endTrigger||f,Ut=eo(Le)?Le.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),Hn=P.pinnedContainer=i.pinnedContainer&&xi(i.pinnedContainer,P),ri=f&&Math.max(0,st.indexOf(P))||0,dn=ri,en,vn,Dr,Vo,Cn,sn,Ji,C,z,q,V,j,Ee;for(I&&eo(Le)&&(j=Pe.getProperty($,R.p),Ee=Pe.getProperty(gt,R.p));dn-- >0;)sn=st[dn],sn.end||sn.refresh(0,1)||(Yn=P),Ji=sn.pin,Ji&&(Ji===f||Ji===h||Ji===Hn)&&!sn.isReverted&&(q||(q=[]),q.unshift(sn),sn.revert(!0,!0)),sn!==st[dn]&&(ri--,dn--);for(Qn(Ut)&&(Ut=Ut(P)),Ut=$y(Ut,"start",P),Te=n2(Ut,f,fn,R,oe(),Ze,$,P,at,W,k,Bt,w,P._startClamp&&"_startClamp")||(h?-.001:0),Qn(dt)&&(dt=dt(P)),Ui(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(Ui(Ut)?Ut.split(" ")[0]:"")+dt:(Vt=kd(dt.substr(2),fn),dt=Ui(Ut)?Ut:(w?Pe.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Te):Te)+Vt,ii=f)),dt=$y(dt,"end",P),Xe=Math.max(Te,n2(dt||(ii?"100% 0":Bt),ii,fn,R,oe()+Vt,qe,gt,P,at,W,k,Bt,w,P._endClamp&&"_endClamp"))||-.001,Vt=0,dn=ri;dn--;)sn=st[dn]||{},Ji=sn.pin,Ji&&sn.start-sn._pinPush<=Te&&!w&&sn.end>0&&(en=sn.end-(P._startClamp?Math.max(0,sn.start):sn.start),(Ji===f&&sn.start-sn._pinPush<Te||Ji===Hn)&&isNaN(Ut)&&(Vt+=en*(1-sn.progress)),Ji===h&&(Rt+=en));if(Te+=Vt,Xe+=Vt,P._startClamp&&(P._startClamp+=Vt),P._endClamp&&!di&&(P._endClamp=Xe||-.001,Xe=Math.min(Xe,qr(L,R))),Qe=Xe-Te||(Te-=.01)&&.001,An&&(Z=Pe.utils.clamp(0,1,Pe.utils.normalize(Te,Xe,ge))),P._pinPush=Rt,Ze&&Vt&&(en={},en[R.a]="+="+Vt,Hn&&(en[R.p]="-="+oe()),Pe.set([Ze,qe],en)),h&&!(Fg&&P.end>=qr(L,R)))en=or(h),Vo=R===En,Dr=oe(),H=parseFloat(M(R.a))+Rt,!Bt&&Xe>1&&(V=(Y?bt.scrollingElement||ki:L).style,V={style:V,value:V["overflow"+R.a.toUpperCase()]},Y&&or(Et)["overflow"+R.a.toUpperCase()]!=="scroll"&&(V.style["overflow"+R.a.toUpperCase()]="scroll")),hm(h,Ye,en),Jt=Gf(h),vn=_s(h,!0),C=k&&Oa(L,Vo?hi:En)(),g?(ue=[g+R.os2,Qe+Rt+yn],ue.t=Ye,dn=g===pn?Ih(h,R)+Qe+Rt:0,dn&&(ue.push(R.d,dn+yn),Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=dn+yn)),Vl(ue),Hn&&st.forEach(function(Me){Me.pin===Hn&&Me.vars.pinSpacing!==!1&&(Me._subPinOffset=!0)}),k&&oe(ge)):(dn=Ih(h,R),dn&&Ye.style.flexBasis!=="auto"&&(Ye.style.flexBasis=dn+yn)),k&&(Cn={top:vn.top+(Vo?Dr-Te:C)+yn,left:vn.left+(Vo?C:Dr-Te)+yn,boxSizing:"border-box",position:"fixed"},Cn[vo]=Cn["max"+rc]=Math.ceil(vn.width)+yn,Cn[yo]=Cn["max"+ov]=Math.ceil(vn.height)+yn,Cn[ar]=Cn[ar+pu]=Cn[ar+du]=Cn[ar+mu]=Cn[ar+hu]="0",Cn[pn]=en[pn],Cn[pn+pu]=en[pn+pu],Cn[pn+du]=en[pn+du],Cn[pn+mu]=en[pn+mu],Cn[pn+hu]=en[pn+hu],O=PL(St,Cn,b),di&&oe(0)),r?(z=r._initted,cm(1),r.render(r.duration(),!0,!0),Q=M(R.a)-H+Qe+Rt,te=Math.abs(Qe-Q)>1,k&&te&&O.splice(O.length-2,2),r.render(0,!0,!0),z||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),cm(0)):Q=Qe,V&&(V.value?V.style["overflow"+R.a.toUpperCase()]=V.value:V.style.removeProperty("overflow-"+R.a));else if(f&&oe()&&!w)for(vn=f.parentNode;vn&&vn!==Et;)vn._pinOffset&&(Te-=vn._pinOffset,Xe-=vn._pinOffset),vn=vn.parentNode;q&&q.forEach(function(Me){return Me.revert(!1,!0)}),P.start=Te,P.end=Xe,Ce=ct=di?ge:oe(),!w&&!di&&(Ce<ge&&oe(ge),P.scroll.rec=0),P.revert(!1,!0),We=qn(),F&&(Ge=-1,F.restart(!0)),Yn=0,r&&D&&(r._initted||ne)&&r.progress()!==ne&&r.progress(ne||0,!0).render(r.time(),!0,!0),(An||Z!==P.progress||w||_||r&&!r._initted)&&(r&&!D&&(r._initted||Z||r.vars.immediateRender!==!1)&&r.totalProgress(w&&Te<-.001&&!Z?Pe.utils.normalize(Te,Xe,0):Z,!0),P.progress=An||(Ce-Te)/Qe===Z?0:Z),h&&g&&(Ye._pinOffset=Math.round(P.progress*Q)),pe&&pe.invalidate(),isNaN(j)||(j-=Pe.getProperty($,R.p),Ee-=Pe.getProperty(gt,R.p),Wf($,R,j),Wf(Ze,R,j-(Je||0)),Wf(gt,R,Ee),Wf(qe,R,Ee-(Je||0))),An&&!di&&P.update(),u&&!di&&!Ft&&(Ft=!0,u(P),Ft=!1)}},P.getVelocity=function(){return(oe()-ct)/(qn()-Vc)*1e3||0},P.endAnimation=function(){Tc(P.callbackAnimation),r&&(pe?pe.progress(1):r.paused()?D||Tc(r,P.direction<0,1):Tc(r,r.reversed()))},P.labelToScroll=function(ce){return r&&r.labels&&(Te||P.refresh()||Te)+r.labels[ce]/r.duration()*Qe||0},P.getTrailing=function(ce){var He=st.indexOf(P),Le=P.direction>0?st.slice(0,He).reverse():st.slice(He+1);return(Ui(ce)?Le.filter(function(Je){return Je.vars.preventOverlaps===ce}):Le).filter(function(Je){return P.direction>0?Je.end<=Te:Je.start>=Xe})},P.update=function(ce,He,Le){if(!(w&&!Le&&!ce)){var Je=di===!0?ge:P.scroll(),fn=ce?0:(Je-Te)/Qe,at=fn<0?0:fn>1?1:fn||0,Bt=P.progress,An,Vt,Rt,dt,ii,Ut,Hn,ri;if(He&&(ct=Ce,Ce=w?oe():Je,v&&(_e=ve,ve=r&&!D?r.totalProgress():at)),m&&h&&!Yn&&!Of&&hr&&(!at&&Te<Je+(Je-ct)/(qn()-Vc)*m?at=1e-4:at===1&&Xe>Je+(Je-ct)/(qn()-Vc)*m&&(at=.9999)),at!==Bt&&P.enabled){if(An=P.isActive=!!at&&at<1,Vt=!!Bt&&Bt<1,Ut=An!==Vt,ii=Ut||!!at!=!!Bt,P.direction=at>Bt?1:-1,P.progress=at,ii&&!Yn&&(Rt=at&&!Bt?0:at===1?1:Bt===1?2:3,D&&(dt=!Ut&&U[Rt+1]!=="none"&&U[Rt+1]||U[Rt],ri=r&&(dt==="complete"||dt==="reset"||dt in r))),A&&(Ut||ri)&&(ri||d||!r)&&(Qn(A)?A(P):P.getTrailing(A).forEach(function(Dr){return Dr.endAnimation()})),D||(pe&&!Yn&&!Of?(pe._dp._time-pe._start!==pe._time&&pe.render(pe._dp._time-pe._start),pe.resetTo?pe.resetTo("totalProgress",at,r._tTime/r._tDur):(pe.vars.totalProgress=at,pe.invalidate().restart())):r&&r.totalProgress(at,!!(Yn&&(We||ce)))),h){if(ce&&g&&(Ye.style[g+R.os2]=me),!k)B(Gc(H+Q*at));else if(ii){if(Hn=!ce&&at>Bt&&Xe+1>Je&&Je+1>=qr(L,R),b)if(!ce&&(An||Hn)){var dn=_s(h,!0),en=Je-Te;i2(h,Et,dn.top+(R===En?en:0)+yn,dn.left+(R===En?0:en)+yn)}else i2(h,Ye);Vl(An||Hn?O:Jt),te&&at<1&&An||B(H+(at===1&&!Hn?Q:0))}}v&&!ae.tween&&!Yn&&!Of&&F.restart(!0),o&&(Ut||y&&at&&(at<1||!um))&&$u(o.targets).forEach(function(Dr){return Dr.classList[An||y?"add":"remove"](o.className)}),a&&!D&&!ce&&a(P),ii&&!Yn?(D&&(ri&&(dt==="complete"?r.pause().totalProgress(1):dt==="reset"?r.restart(!0).pause():dt==="restart"?r.restart(!0):r[dt]()),a&&a(P)),(Ut||!um)&&(c&&Ut&&Xo(P,c),X[Rt]&&Xo(P,X[Rt]),y&&(at===1?P.kill(!1,1):X[Rt]=0),Ut||(Rt=at===1?1:3,X[Rt]&&Xo(P,X[Rt]))),S&&!An&&Math.abs(P.getVelocity())>(Wc(S)?S:2500)&&(Tc(P.callbackAnimation),pe?pe.progress(1):Tc(r,dt==="reverse"?1:!at,1))):D&&a&&!Yn&&a(P)}if(xe){var vn=w?Je/w.duration()*(w._caScrollDist||0):Je;ee(vn+($._isFlipped?1:0)),xe(vn)}ye&&ye(-Je/w.duration()*(w._caScrollDist||0))}},P.enable=function(ce,He){P.enabled||(P.enabled=!0,Nn(L,"resize",jc),Y||Nn(L,"scroll",Yo),ie&&Nn(t,"refreshInit",ie),ce!==!1&&(P.progress=Z=0,Ce=ct=Ge=oe()),He!==!1&&P.refresh())},P.getTween=function(ce){return ce&&ae?ae.tween:pe},P.setPositions=function(ce,He,Le,Je){if(w){var fn=w.scrollTrigger,at=w.duration(),Bt=fn.end-fn.start;ce=fn.start+Bt*ce/at,He=fn.start+Bt*He/at}P.refresh(!1,!1,{start:Yy(ce,Le&&!!P._startClamp),end:Yy(He,Le&&!!P._endClamp)},Je),P.update()},P.adjustPinSpacing=function(ce){if(ue&&ce){var He=ue.indexOf(R.d)+1;ue[He]=parseFloat(ue[He])+ce+yn,ue[1]=parseFloat(ue[1])+ce+yn,Vl(ue)}},P.disable=function(ce,He){if(ce!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,He||pe&&pe.pause(),ge=0,De&&(De.uncache=1),ie&&Pn(t,"refreshInit",ie),F&&(F.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!Y)){for(var Le=st.length;Le--;)if(st[Le].scroller===L&&st[Le]!==P)return;Pn(L,"resize",jc),Y||Pn(L,"scroll",Yo)}},P.kill=function(ce,He){P.disable(ce,He),pe&&!He&&pe.kill(),l&&delete Ug[l];var Le=st.indexOf(P);Le>=0&&st.splice(Le,1),Le===fi&&Bd>0&&fi--,Le=0,st.forEach(function(Je){return Je.scroller===P.scroller&&(Le=1)}),Le||di||(P.scroll.rec=0),r&&(r.scrollTrigger=null,ce&&r.revert({kill:!1}),He||r.kill()),Ze&&[Ze,qe,$,gt].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),gu===P&&(gu=0),h&&(De&&(De.uncache=1),Le=0,st.forEach(function(Je){return Je.pin===h&&Le++}),Le||(De.spacer=0)),i.onKill&&i.onKill(P)},st.push(P),P.enable(!1,!1),Se&&Se(P),r&&r.add&&!Qe){var Ve=P.update;P.update=function(){P.update=Ve,lt.cache++,Te||Xe||P.refresh()},Pe.delayedCall(.01,P.update),Qe=.01,Te=Xe=0}else P.refresh();h&&AL()},t.register=function(i){return cl||(Pe=i||j3(),W3()&&window.document&&t.enable(),cl=Hc),cl},t.defaults=function(i){if(i)for(var r in i)Vf[r]=i[r];return Vf},t.disable=function(i,r){Hc=0,st.forEach(function(a){return a[r?"kill":"disable"](i)}),Pn(ot,"wheel",Yo),Pn(bt,"scroll",Yo),clearInterval(Uf),Pn(bt,"touchcancel",zr),Pn(Et,"touchstart",zr),zf(Pn,bt,"pointerdown,touchstart,mousedown",qy),zf(Pn,bt,"pointerup,touchend,mouseup",Ky),Lh.kill(),kf(Pn);for(var s=0;s<lt.length;s+=3)Bf(Pn,lt[s],lt[s+1]),Bf(Pn,lt[s],lt[s+2])},t.enable=function(){if(ot=window,bt=document,ki=bt.documentElement,Et=bt.body,Pe){if($u=Pe.utils.toArray,uu=Pe.utils.clamp,Ig=Pe.core.context||zr,cm=Pe.core.suppressOverwrites||zr,iv=ot.history.scrollRestoration||"auto",Og=ot.pageYOffset||0,Pe.core.globals("ScrollTrigger",t),Et){Hc=1,Bl=document.createElement("div"),Bl.style.height="100vh",Bl.style.position="absolute",tw(),yL(),un.register(Pe),t.isTouch=un.isTouch,ea=un.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Lg=un.isTouch===1,Nn(ot,"wheel",Yo),nv=[ot,bt,ki,Et],Pe.matchMedia?(t.matchMedia=function(u){var d=Pe.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},Pe.addEventListener("matchMediaInit",function(){J3(),cv()}),Pe.addEventListener("matchMediaRevert",function(){return Q3()}),Pe.addEventListener("matchMedia",function(){co(0,1),No("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return dm(),dm})):console.warn("Requires GSAP 3.11.0 or later"),dm(),Nn(bt,"scroll",Yo);var i=Et.hasAttribute("style"),r=Et.style,s=r.borderTopStyle,a=Pe.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=_s(Et),En.m=Math.round(o.top+En.sc())||0,hi.m=Math.round(o.left+hi.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Et.setAttribute("style",""),Et.removeAttribute("style")),Uf=setInterval(Jy,250),Pe.delayedCall(.5,function(){return Of=0}),Nn(bt,"touchcancel",zr),Nn(Et,"touchstart",zr),zf(Nn,bt,"pointerdown,touchstart,mousedown",qy),zf(Nn,bt,"pointerup,touchend,mouseup",Ky),Dg=Pe.utils.checkPrefix("transform"),Vd.push(Dg),cl=qn(),Lh=Pe.delayedCall(.2,co).pause(),ul=[bt,"visibilitychange",function(){var u=ot.innerWidth,d=ot.innerHeight;bt.hidden?(jy=u,Xy=d):(jy!==u||Xy!==d)&&jc()},bt,"DOMContentLoaded",co,ot,"load",co,ot,"resize",jc],kf(Nn),st.forEach(function(u){return u.enable(0,1)}),l=0;l<lt.length;l+=3)Bf(Pn,lt[l],lt[l+1]),Bf(Pn,lt[l],lt[l+2])}else if(bt){var c=function u(){t.enable(),bt.removeEventListener("DOMContentLoaded",u)};bt.addEventListener("DOMContentLoaded",c)}}},t.config=function(i){"limitCallbacks"in i&&(um=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Uf)||(Uf=r)&&setInterval(Jy,r),"ignoreMobileResize"in i&&(Lg=t.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(kf(Pn)||kf(Nn,i.autoRefreshEvents||"none"),V3=(i.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(i,r){var s=xi(i),a=lt.indexOf(s),o=Ro(s);~a&&lt.splice(a,o?6:2),r&&(o?es.unshift(ot,r,Et,r,ki,r):es.unshift(s,r))},t.clearMatchMedia=function(i){st.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},t.isInViewport=function(i,r,s){var a=(Ui(i)?xi(i):i).getBoundingClientRect(),o=a[s?vo:yo]*r||0;return s?a.right-o>0&&a.left+o<ot.innerWidth:a.bottom-o>0&&a.top+o<ot.innerHeight},t.positionInViewport=function(i,r,s){Ui(i)&&(i=xi(i));var a=i.getBoundingClientRect(),o=a[s?vo:yo],l=r==null?o/2:r in Fh?Fh[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/ot.innerWidth:(a.top+l)/ot.innerHeight},t.killAll=function(i){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Po.killAll||[];Po={},r.forEach(function(s){return s()})}},t}();ut.version="3.15.0";ut.saveStyles=function(t){return t?$u(t).forEach(function(e){if(e&&e.style){var n=Ii.indexOf(e);n>=0&&Ii.splice(n,5),Ii.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),Ig())}}):Ii};ut.revert=function(t,e){return cv(!t,e)};ut.create=function(t,e){return new ut(t,e)};ut.refresh=function(t){return t?jc(!0):(cl||ut.register())&&co(!0)};ut.update=function(t){return++lt.cache&&bs(t===!0?2:0)};ut.clearScrollMemory=ew;ut.maxScroll=function(t,e){return qr(t,e?hi:En)};ut.getScrollFunc=function(t,e){return Oa(xi(t),e?hi:En)};ut.getById=function(t){return Ug[t]};ut.getAll=function(){return st.filter(function(t){return t.vars.id!=="ScrollSmoother"})};ut.isScrolling=function(){return!!hr};ut.snapDirectional=lv;ut.addEventListener=function(t,e){var n=Po[t]||(Po[t]=[]);~n.indexOf(e)||n.push(e)};ut.removeEventListener=function(t,e){var n=Po[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)};ut.batch=function(t,e){var n=[],i={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],f=[],h=Pe.delayedCall(r,function(){u(d,f),d=[],f=[]}).pause();return function(g){d.length||h.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&h.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&Qn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Qn(s)&&(s=s(),Nn(ut,"refresh",function(){return s=e.batchMax()})),$u(t).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,n.push(ut.create(c))}),n};var s2=function(e,n,i,r){return n>r?e(r):n<0&&e(0),i>r?(r-n)/(i-n):i<0?n/(n-i):1},pm=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(un.isTouch?" pinch-zoom":""):"none",e===ki&&t(Et,n)},jf={auto:1,scroll:1},DL=function(e){var n=e.event,i=e.target,r=e.axis,s=(n.changedTouches?n.changedTouches[0]:n).target,a=s._gsap||Pe.core.getCache(s),o=qn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Et&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(jf[(l=or(s)).overflowY]||jf[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==i&&!Ro(s)&&(jf[(l=or(s)).overflowY]||jf[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},iw=function(e,n,i,r){return un.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&DL,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Nn(bt,un.eventTypes[0],o2,!1,!0)},onDisable:function(){return Pn(bt,un.eventTypes[0],o2,!0)}})},LL=/(input|label|select|textarea)/i,a2,o2=function(e){var n=LL.test(e.target.tagName);(n||a2)&&(e._gsapAllow=!0,a2=n)},IL=function(e){eo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,i=n.normalizeScrollX,r=n.momentum,s=n.allowNestedScroll,a=n.onRelease,o,l,c=xi(e.target)||ki,u=Pe.core.globals().ScrollSmoother,d=u&&u.get(),f=ea&&(e.content&&xi(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Oa(c,En),g=Oa(c,hi),_=1,m=(un.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,p=0,x=Qn(r)?function(){return r(o)}:function(){return r||2.8},y,v,b=iw(c,e.type,!0,s),T=function(){return v=!1},w=zr,S=zr,A=function(){l=qr(c,En),S=uu(ea?1:0,l),i&&(w=uu(0,qr(c,hi))),y=So},R=function(){f._gsap.y=Gc(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(v){requestAnimationFrame(T);var I=Gc(o.deltaY/2),W=S(h.v-I);if(f&&W!==h.v+h.offset){h.offset=W-h.v;var P=Gc((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",h.cacheID=lt.cache,bs()}return!0}h.offset&&R(),v=!0},L,G,Y,k,X=function(){A(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return f&&Pe.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return ea&&U.type==="touchmove"&&D()||_>1.05&&U.type!=="touchstart"||o.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){v=!1;var U=_;_=Gc((ot.visualViewport&&ot.visualViewport.scale||1)/m),L.pause(),U!==_&&pm(c,_>1.01?!0:i?!1:"x"),G=g(),Y=h(),A(),y=So},e.onRelease=e.onGestureStart=function(U,I){if(h.offset&&R(),!I)k.restart(!0);else{lt.cache++;var W=x(),P,ie;i&&(P=g(),ie=P+W*.05*-U.velocityX/.227,W*=s2(g,P,ie,qr(c,hi)),L.vars.scrollX=w(ie)),P=h(),ie=P+W*.05*-U.velocityY/.227,W*=s2(h,P,ie,qr(c,En)),L.vars.scrollY=S(ie),L.invalidate().duration(W).play(.01),(ea&&L.vars.scrollY>=l||P>=l-1)&&Pe.to({},{onUpdate:X,duration:W})}a&&a(U)},e.onWheel=function(){L._ts&&L.pause(),qn()-p>1e3&&(y=0,p=qn())},e.onChange=function(U,I,W,P,ie){if(So!==y&&A(),I&&i&&g(w(P[2]===I?G+(U.startX-U.x):g()+I-P[1])),W){h.offset&&R();var fe=ie[2]===W,$e=fe?Y+U.startY-U.y:h()+W-ie[1],Ge=S($e);fe&&$e!==Ge&&(Y+=Ge-$e),h(Ge)}(W||I)&&bs()},e.onEnable=function(){pm(c,i?!1:"x"),ut.addEventListener("refresh",X),Nn(ot,"resize",X),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){pm(c,!0),Pn(ot,"resize",X),ut.removeEventListener("refresh",X),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new un(e),o.iOS=ea,ea&&!h()&&h(1),ea&&Pe.ticker.add(zr),k=o._dc,L=Pe.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:nw(h,h(),function(){return L.pause()})},onUpdate:bs,onComplete:k.vars.onComplete}),o};ut.sort=function(t){if(Qn(t))return st.sort(t);var e=ot.pageYOffset||0;return ut.getAll().forEach(function(n){return n._sortY=n.trigger?e+n.trigger.getBoundingClientRect().top:n.start+ot.innerHeight}),st.sort(t||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ut.observe=function(t){return new un(t)};ut.normalizeScroll=function(t){if(typeof t>"u")return ci;if(t===!0&&ci)return ci.enable();if(t===!1){ci&&ci.kill(),ci=t;return}var e=t instanceof un?t:IL(t);return ci&&ci.target===e.target&&ci.kill(),Ro(e.target)&&(ci=e),e};ut.core={_getVelocityProp:Ng,_inputObserver:iw,_scrollers:lt,_proxies:es,bridge:{ss:function(){hr||No("scrollStart"),hr=qn()},ref:function(){return Yn}}};j3()&&Pe.registerPlugin(ut);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uv="185",FL=0,l2=1,UL=2,Gd=1,OL=2,Xc=3,ka=0,Ri=1,xs=2,ws=0,Hl=1,c2=2,u2=3,f2=4,kL=5,no=100,zL=101,BL=102,VL=103,HL=104,GL=200,WL=201,jL=202,XL=203,zg=204,Bg=205,$L=206,YL=207,qL=208,KL=209,ZL=210,QL=211,JL=212,eI=213,tI=214,Vg=0,Hg=1,Gg=2,sc=3,Wg=4,jg=5,Xg=6,$g=7,rw=0,nI=1,iI=2,ts=0,sw=1,aw=2,ow=3,lw=4,cw=5,uw=6,fw=7,dw=300,Do=301,ac=302,mm=303,gm=304,xp=306,Yg=1e3,Es=1001,qg=1002,kn=1003,rI=1004,Xf=1005,Ln=1006,_m=1007,uo=1008,lr=1009,hw=1010,pw=1011,qu=1012,fv=1013,ss=1014,Kr=1015,Os=1016,dv=1017,hv=1018,Ku=1020,mw=35902,gw=35899,_w=1021,xw=1022,Tr=1023,ks=1026,fo=1027,vw=1028,pv=1029,Lo=1030,mv=1031,gv=1033,Wd=33776,jd=33777,Xd=33778,$d=33779,Kg=35840,Zg=35841,Qg=35842,Jg=35843,e_=36196,t_=37492,n_=37496,i_=37488,r_=37489,Uh=37490,s_=37491,a_=37808,o_=37809,l_=37810,c_=37811,u_=37812,f_=37813,d_=37814,h_=37815,p_=37816,m_=37817,g_=37818,__=37819,x_=37820,v_=37821,y_=36492,S_=36494,E_=36495,M_=36283,b_=36284,Oh=36285,w_=36286,sI=3200,d2=0,aI=1,oa="",ir="srgb",kh="srgb-linear",zh="linear",wt="srgb",qo=7680,h2=519,oI=512,lI=513,cI=514,_v=515,uI=516,fI=517,xv=518,dI=519,p2=35044,m2="300 es",Zr=2e3,Bh=2001;function hI(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vh(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pI(){const t=Vh("canvas");return t.style.display="block",t}const g2={};function _2(...t){const e="THREE."+t.shift();console.log(e,...t)}function yw(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ke(...t){t=yw(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function xt(...t){t=yw(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Gl(...t){const e=t.join(" ");e in g2||(g2[e]=!0,Ke(...t))}function mI(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const gI={[Vg]:Hg,[Gg]:Xg,[Wg]:$g,[sc]:jg,[Hg]:Vg,[Xg]:Gg,[$g]:Wg,[jg]:sc};class Bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xm=Math.PI/180,T_=180/Math.PI;function cf(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xn[t&255]+Xn[t>>8&255]+Xn[t>>16&255]+Xn[t>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[n&63|128]+Xn[n>>8&255]+"-"+Xn[n>>16&255]+Xn[n>>24&255]+Xn[i&255]+Xn[i>>8&255]+Xn[i>>16&255]+Xn[i>>24&255]).toLowerCase()}function pt(t,e,n){return Math.max(e,Math.min(n,t))}function _I(t,e){return(t%e+e)%e}function vm(t,e,n){return(1-n)*t+n*e}function Ac(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _i(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ev=class Ev{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ev.prototype.isVector2=!0;let yt=Ev;class pc{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==f||c!==h||u!==g){let m=l*f+c*h+u*g+d*_;m<0&&(f=-f,h=-h,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const x=Math.acos(m),y=Math.sin(x);p=Math.sin(p*x)/y,o=Math.sin(o*x)/y,l=l*p+f*o,c=c*p+h*o,u=u*p+g*o,d=d*p+_*o}else{l=l*p+f*o,c=c*p+h*o,u=u*p+g*o,d=d*p+_*o;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[n]=o*g+u*d+l*h-c*f,e[n+1]=l*g+u*f+c*d-o*h,e[n+2]=c*g+u*h+o*f-l*d,e[n+3]=u*g-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mv=class Mv{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(x2.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(x2.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ym.copy(this).projectOnVector(e),this.sub(ym)}reflect(e){return this.sub(ym.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mv.prototype.isVector3=!0;let K=Mv;const ym=new K,x2=new pc,bv=class bv{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],x=r[1],y=r[4],v=r[7],b=r[2],T=r[5],w=r[8];return s[0]=a*_+o*x+l*b,s[3]=a*m+o*y+l*T,s[6]=a*p+o*v+l*w,s[1]=c*_+u*x+d*b,s[4]=c*m+u*y+d*T,s[7]=c*p+u*v+d*w,s[2]=f*_+h*x+g*b,s[5]=f*m+h*y+g*T,s[8]=f*p+h*v+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,g=n*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Gl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sm.makeScale(e,n)),this}rotate(e){return Gl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sm.makeRotation(-e)),this}translate(e,n){return Gl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sm.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bv.prototype.isMatrix3=!0;let et=bv;const Sm=new et,v2=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y2=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xI(){const t={enabled:!0,workingColorSpace:kh,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===wt&&(r.r=Ts(r.r),r.g=Ts(r.g),r.b=Ts(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(r.r=Wl(r.r),r.g=Wl(r.g),r.b=Wl(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oa?zh:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[kh]:{primaries:e,whitePoint:i,transfer:zh,toXYZ:v2,fromXYZ:y2,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ir},outputColorSpaceConfig:{drawingBufferColorSpace:ir}},[ir]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:v2,fromXYZ:y2,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ir}}}),t}const ht=xI();function Ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ko;class vI{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ko===void 0&&(Ko=Vh("canvas")),Ko.width=e.width,Ko.height=e.height;const r=Ko.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ko}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vh("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ts(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ts(n[i]/255)*255):n[i]=Ts(n[i]);return{data:n,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yI=0;class vv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yI++}),this.uuid=cf(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Em(r[a].image)):s.push(Em(r[a]))}else s=Em(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Em(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vI.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let SI=0;const Mm=new K;class ei extends Bo{constructor(e=ei.DEFAULT_IMAGE,n=ei.DEFAULT_MAPPING,i=Es,r=Es,s=Ln,a=uo,o=Tr,l=lr,c=ei.DEFAULT_ANISOTROPY,u=oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SI++}),this.uuid=cf(),this.name="",this.source=new vv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mm).x}get height(){return this.source.getSize(Mm).y}get depth(){return this.source.getSize(Mm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dw)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yg:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case qg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yg:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case qg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=dw;ei.DEFAULT_ANISOTROPY=1;const wv=class wv{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,v=(h+1)/2,b=(p+1)/2,T=(u+f)/4,w=(d+_)/4,S=(g+m)/4;return y>v&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=w/i):v>b?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=T/r,s=S/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=S/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this.w=pt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this.w=pt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wv.prototype.isVector4=!0;let zt=wv;class EI extends Bo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new ei(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new vv(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends EI{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Sw extends ei{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MI extends ei{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hh=class Hh{constructor(e,n,i,r,s,a,o,l,c,u,d,f,h,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,f,h,g,_,m)}set(e,n,i,r,s,a,o,l,c,u,d,f,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hh().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Zo.setFromMatrixColumn(e,0).length(),s=1/Zo.setFromMatrixColumn(e,1).length(),a=1/Zo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,g=o*u,_=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+g*c,n[5]=f-_*c,n[9]=-o*l,n[2]=_-f*c,n[6]=g+h*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,_=c*d;n[0]=f+_*o,n[4]=g*o-h,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=h*o-g,n[6]=_+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,_=c*d;n[0]=f-_*o,n[4]=-a*d,n[8]=g+h*o,n[1]=h+g*o,n[5]=a*u,n[9]=_-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,g=o*u,_=o*d;n[0]=l*u,n[4]=g*c-h,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=h*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=_-f*d,n[8]=g*d+h,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,h=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=a*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=o*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bI,e,wI)}lookAt(e,n,i){const r=this.elements;return Di.subVectors(e,n),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Ys.crossVectors(i,Di),Ys.lengthSq()===0&&(Math.abs(i.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Ys.crossVectors(i,Di)),Ys.normalize(),$f.crossVectors(Di,Ys),r[0]=Ys.x,r[4]=$f.x,r[8]=Di.x,r[1]=Ys.y,r[5]=$f.y,r[9]=Di.y,r[2]=Ys.z,r[6]=$f.z,r[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],y=i[7],v=i[11],b=i[15],T=r[0],w=r[4],S=r[8],A=r[12],R=r[1],D=r[5],L=r[9],G=r[13],Y=r[2],k=r[6],X=r[10],U=r[14],I=r[3],W=r[7],P=r[11],ie=r[15];return s[0]=a*T+o*R+l*Y+c*I,s[4]=a*w+o*D+l*k+c*W,s[8]=a*S+o*L+l*X+c*P,s[12]=a*A+o*G+l*U+c*ie,s[1]=u*T+d*R+f*Y+h*I,s[5]=u*w+d*D+f*k+h*W,s[9]=u*S+d*L+f*X+h*P,s[13]=u*A+d*G+f*U+h*ie,s[2]=g*T+_*R+m*Y+p*I,s[6]=g*w+_*D+m*k+p*W,s[10]=g*S+_*L+m*X+p*P,s[14]=g*A+_*G+m*U+p*ie,s[3]=x*T+y*R+v*Y+b*I,s[7]=x*w+y*D+v*k+b*W,s[11]=x*S+y*L+v*X+b*P,s[15]=x*A+y*G+v*U+b*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15],x=l*h-c*f,y=o*h-c*d,v=o*f-l*d,b=a*h-c*u,T=a*f-l*u,w=a*d-o*u;return n*(_*x-m*y+p*v)-i*(g*x-m*b+p*T)+r*(g*y-_*b+p*w)-s*(g*v-_*T+m*w)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=n*o-i*a,y=n*l-r*a,v=n*c-s*a,b=i*l-r*o,T=i*c-s*o,w=r*c-s*l,S=u*_-d*g,A=u*m-f*g,R=u*p-h*g,D=d*m-f*_,L=d*p-h*_,G=f*p-h*m,Y=x*G-y*L+v*D+b*R-T*A+w*S;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/Y;return e[0]=(o*G-l*L+c*D)*k,e[1]=(r*L-i*G-s*D)*k,e[2]=(_*w-m*T+p*b)*k,e[3]=(f*T-d*w-h*b)*k,e[4]=(l*R-a*G-c*A)*k,e[5]=(n*G-r*R+s*A)*k,e[6]=(m*v-g*w-p*y)*k,e[7]=(u*w-f*v+h*y)*k,e[8]=(a*L-o*R+c*S)*k,e[9]=(i*R-n*L-s*S)*k,e[10]=(g*T-_*v+p*x)*k,e[11]=(d*v-u*T-h*x)*k,e[12]=(o*A-a*D-l*S)*k,e[13]=(n*D-i*A+r*S)*k,e[14]=(_*y-g*b-m*x)*k,e[15]=(u*b-d*y+f*x)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,g=s*d,_=a*u,m=a*d,p=o*d,x=l*c,y=l*u,v=l*d,b=i.x,T=i.y,w=i.z;return r[0]=(1-(_+p))*b,r[1]=(h+v)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(h-v)*T,r[5]=(1-(f+p))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(g+y)*w,r[9]=(m-x)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Zo.set(r[0],r[1],r[2]).length();const o=Zo.set(r[4],r[5],r[6]).length(),l=Zo.set(r[8],r[9],r[10]).length();s<0&&(a=-a),_r.copy(this);const c=1/a,u=1/o,d=1/l;return _r.elements[0]*=c,_r.elements[1]*=c,_r.elements[2]*=c,_r.elements[4]*=u,_r.elements[5]*=u,_r.elements[6]*=u,_r.elements[8]*=d,_r.elements[9]*=d,_r.elements[10]*=d,n.setFromRotationMatrix(_r),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Zr,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Zr)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Bh)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Zr,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Zr)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Bh)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Hh.prototype.isMatrix4=!0;let xn=Hh;const Zo=new K,_r=new xn,bI=new K(0,0,0),wI=new K(1,1,1),Ys=new K,$f=new K,Di=new K,S2=new xn,E2=new pc;class Io{constructor(e=0,n=0,i=0,r=Io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return S2.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S2,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return E2.setFromEuler(this),this.setFromQuaternion(E2,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Io.DEFAULT_ORDER="XYZ";class Ew{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TI=0;const M2=new K,Qo=new pc,os=new xn,Yf=new K,Cc=new K,AI=new K,CI=new pc,b2=new K(1,0,0),w2=new K(0,1,0),T2=new K(0,0,1),A2={type:"added"},RI={type:"removed"},Jo={type:"childadded",child:null},bm={type:"childremoved",child:null};class Xi extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TI++}),this.uuid=cf(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xi.DEFAULT_UP.clone();const e=new K,n=new Io,i=new pc,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xn},normalMatrix:{value:new et}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=Xi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ew,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qo.setFromAxisAngle(e,n),this.quaternion.multiply(Qo),this}rotateOnWorldAxis(e,n){return Qo.setFromAxisAngle(e,n),this.quaternion.premultiply(Qo),this}rotateX(e){return this.rotateOnAxis(b2,e)}rotateY(e){return this.rotateOnAxis(w2,e)}rotateZ(e){return this.rotateOnAxis(T2,e)}translateOnAxis(e,n){return M2.copy(e).applyQuaternion(this.quaternion),this.position.add(M2.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(b2,e)}translateY(e){return this.translateOnAxis(w2,e)}translateZ(e){return this.translateOnAxis(T2,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Yf.copy(e):Yf.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Cc,Yf,this.up):os.lookAt(Yf,Cc,this.up),this.quaternion.setFromRotationMatrix(os),r&&(os.extractRotation(r.matrixWorld),Qo.setFromRotationMatrix(os),this.quaternion.premultiply(Qo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A2),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(RI),bm.child=e,this.dispatchEvent(bm),bm.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A2),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cc,e,AI),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cc,CI,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xi.DEFAULT_UP=new K(0,1,0);Xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qf extends Xi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PI={type:"move"};class wm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(PI)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qf;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Mw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qs={h:0,s:0,l:0},Kf={h:0,s:0,l:0};function Tm(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Mt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ir){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ht.workingColorSpace){return this.r=e,this.g=n,this.b=i,ht.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ht.workingColorSpace){if(e=_I(e,1),n=pt(n,0,1),i=pt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Tm(a,s,e+1/3),this.g=Tm(a,s,e),this.b=Tm(a,s,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,n=ir){function i(s){s!==void 0&&parseFloat(s)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ir){const i=Mw[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Wl(e.r),this.g=Wl(e.g),this.b=Wl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ir){return ht.workingToColorSpace($n.copy(this),e),Math.round(pt($n.r*255,0,255))*65536+Math.round(pt($n.g*255,0,255))*256+Math.round(pt($n.b*255,0,255))}getHexString(e=ir){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ht.workingColorSpace){ht.workingToColorSpace($n.copy(this),n);const i=$n.r,r=$n.g,s=$n.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ht.workingColorSpace){return ht.workingToColorSpace($n.copy(this),n),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=ir){ht.workingToColorSpace($n.copy(this),e);const n=$n.r,i=$n.g,r=$n.b;return e!==ir?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qs),this.setHSL(qs.h+e,qs.s+n,qs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qs),e.getHSL(Kf);const i=vm(qs.h,Kf.h,n),r=vm(qs.s,Kf.s,n),s=vm(qs.l,Kf.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new Mt;Mt.NAMES=Mw;class NI extends Xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Io,this.environmentIntensity=1,this.environmentRotation=new Io,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xr=new K,ls=new K,Am=new K,cs=new K,el=new K,tl=new K,C2=new K,Cm=new K,Rm=new K,Pm=new K,Nm=new zt,Dm=new zt,Lm=new zt;class wr{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),xr.subVectors(e,n),r.cross(xr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){xr.subVectors(r,n),ls.subVectors(i,n),Am.subVectors(e,n);const a=xr.dot(xr),o=xr.dot(ls),l=xr.dot(Am),c=ls.dot(ls),u=ls.dot(Am),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cs.x),l.addScaledVector(a,cs.y),l.addScaledVector(o,cs.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Nm.setScalar(0),Dm.setScalar(0),Lm.setScalar(0),Nm.fromBufferAttribute(e,n),Dm.fromBufferAttribute(e,i),Lm.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Nm,s.x),a.addScaledVector(Dm,s.y),a.addScaledVector(Lm,s.z),a}static isFrontFacing(e,n,i,r){return xr.subVectors(i,n),ls.subVectors(e,n),xr.cross(ls).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xr.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),xr.cross(ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return wr.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return wr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;el.subVectors(r,i),tl.subVectors(s,i),Cm.subVectors(e,i);const l=el.dot(Cm),c=tl.dot(Cm);if(l<=0&&c<=0)return n.copy(i);Rm.subVectors(e,r);const u=el.dot(Rm),d=tl.dot(Rm);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(el,a);Pm.subVectors(e,s);const h=el.dot(Pm),g=tl.dot(Pm);if(g>=0&&h<=g)return n.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(tl,o);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return C2.subVectors(s,r),o=(d-u)/(d-u+(h-g)),n.copy(r).addScaledVector(C2,o);const p=1/(m+_+f);return a=_*p,o=f*p,n.copy(i).addScaledVector(el,a).addScaledVector(tl,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class uf{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vr):vr.fromBufferAttribute(s,a),vr.applyMatrix4(e.matrixWorld),this.expandByPoint(vr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zf.copy(i.boundingBox)),Zf.applyMatrix4(e.matrixWorld),this.union(Zf)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vr),vr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rc),Qf.subVectors(this.max,Rc),nl.subVectors(e.a,Rc),il.subVectors(e.b,Rc),rl.subVectors(e.c,Rc),Ks.subVectors(il,nl),Zs.subVectors(rl,il),Xa.subVectors(nl,rl);let n=[0,-Ks.z,Ks.y,0,-Zs.z,Zs.y,0,-Xa.z,Xa.y,Ks.z,0,-Ks.x,Zs.z,0,-Zs.x,Xa.z,0,-Xa.x,-Ks.y,Ks.x,0,-Zs.y,Zs.x,0,-Xa.y,Xa.x,0];return!Im(n,nl,il,rl,Qf)||(n=[1,0,0,0,1,0,0,0,1],!Im(n,nl,il,rl,Qf))?!1:(Jf.crossVectors(Ks,Zs),n=[Jf.x,Jf.y,Jf.z],Im(n,nl,il,rl,Qf))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(us),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const us=[new K,new K,new K,new K,new K,new K,new K,new K],vr=new K,Zf=new uf,nl=new K,il=new K,rl=new K,Ks=new K,Zs=new K,Xa=new K,Rc=new K,Qf=new K,Jf=new K,$a=new K;function Im(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){$a.fromArray(t,s);const o=r.x*Math.abs($a.x)+r.y*Math.abs($a.y)+r.z*Math.abs($a.z),l=e.dot($a),c=n.dot($a),u=i.dot($a);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const hn=new K,ed=new yt;let DI=0;class is extends Bo{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DI++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=p2,this.updateRanges=[],this.gpuType=Kr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ed.fromBufferAttribute(this,n),ed.applyMatrix3(e),this.setXY(n,ed.x,ed.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ac(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_i(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ac(n,this.array)),n}setX(e,n){return this.normalized&&(n=_i(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ac(n,this.array)),n}setY(e,n){return this.normalized&&(n=_i(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ac(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_i(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ac(n,this.array)),n}setW(e,n){return this.normalized&&(n=_i(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_i(n,this.array),i=_i(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=_i(n,this.array),i=_i(i,this.array),r=_i(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=_i(n,this.array),i=_i(i,this.array),r=_i(r,this.array),s=_i(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p2&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class bw extends is{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ww extends is{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class As extends is{constructor(e,n,i){super(new Float32Array(e),n,i)}}const LI=new uf,Pc=new K,Fm=new K;class yv{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LI.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pc.subVectors(e,this.center);const n=Pc.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Pc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pc.copy(e.center).add(Fm)),this.expandByPoint(Pc.copy(e.center).sub(Fm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let II=0;const tr=new xn,Um=new Xi,sl=new K,Li=new uf,Nc=new uf,Rn=new K;class Vs extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:II++}),this.uuid=cf(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hI(e)?ww:bw)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return tr.makeRotationFromQuaternion(e),this.applyMatrix4(tr),this}rotateX(e){return tr.makeRotationX(e),this.applyMatrix4(tr),this}rotateY(e){return tr.makeRotationY(e),this.applyMatrix4(tr),this}rotateZ(e){return tr.makeRotationZ(e),this.applyMatrix4(tr),this}translate(e,n,i){return tr.makeTranslation(e,n,i),this.applyMatrix4(tr),this}scale(e,n,i){return tr.makeScale(e,n,i),this.applyMatrix4(tr),this}lookAt(e){return Um.lookAt(e),Um.updateMatrix(),this.applyMatrix4(Um.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sl).negate(),this.translate(sl.x,sl.y,sl.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new As(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Li.setFromBufferAttribute(s),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yv);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Nc.setFromBufferAttribute(o),this.morphTargetsRelative?(Rn.addVectors(Li.min,Nc.min),Li.expandByPoint(Rn),Rn.addVectors(Li.max,Nc.max),Li.expandByPoint(Rn)):(Li.expandByPoint(Nc.min),Li.expandByPoint(Nc.max))}Li.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rn));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Rn.fromBufferAttribute(o,c),l&&(sl.fromBufferAttribute(e,c),Rn.add(sl)),r=Math.max(r,i.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new is(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new K,l[S]=new K;const c=new K,u=new K,d=new K,f=new yt,h=new yt,g=new yt,_=new K,m=new K;function p(S,A,R){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,R),f.fromBufferAttribute(s,S),h.fromBufferAttribute(s,A),g.fromBufferAttribute(s,R),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),o[S].add(_),o[A].add(_),o[R].add(_),l[S].add(m),l[A].add(m),l[R].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,A=x.length;S<A;++S){const R=x[S],D=R.start,L=R.count;for(let G=D,Y=D+L;G<Y;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new K,v=new K,b=new K,T=new K;function w(S){b.fromBufferAttribute(r,S),T.copy(b);const A=o[S];y.copy(A),y.sub(b.multiplyScalar(b.dot(A))).normalize(),v.crossVectors(T,A);const D=v.dot(l[S])<0?-1:1;a.setXYZW(S,y.x,y.y,y.z,D)}for(let S=0,A=x.length;S<A;++S){const R=x[S],D=R.start,L=R.count;for(let G=D,Y=D+L;G<Y;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new is(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,d=new K;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rn.fromBufferAttribute(e,n),Rn.normalize(),e.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new is(f,u,d)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vs,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let FI=0;class vp extends Bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FI++}),this.uuid=cf(),this.name="",this.type="Material",this.blending=Hl,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zg,this.blendDst=Bg,this.blendEquation=no,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hl&&(i.blending=this.blending),this.side!==ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zg&&(i.blendSrc=this.blendSrc),this.blendDst!==Bg&&(i.blendDst=this.blendDst),this.blendEquation!==no&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h2&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new yt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fs=new K,Om=new K,td=new K,Qs=new K,km=new K,nd=new K,zm=new K;class UI{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fs)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fs.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fs.copy(this.origin).addScaledVector(this.direction,n),fs.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Om.copy(e).add(n).multiplyScalar(.5),td.copy(n).sub(e).normalize(),Qs.copy(this.origin).sub(Om);const s=e.distanceTo(n)*.5,a=-this.direction.dot(td),o=Qs.dot(this.direction),l=-Qs.dot(td),c=Qs.lengthSq(),u=Math.abs(1-a*a);let d,f,h,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Om).addScaledVector(td,f),h}intersectSphere(e,n){fs.subVectors(e.center,this.origin);const i=fs.dot(this.direction),r=fs.dot(fs)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fs)!==null}intersectTriangle(e,n,i,r,s){km.subVectors(n,e),nd.subVectors(i,e),zm.crossVectors(km,nd);let a=this.direction.dot(zm),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qs.subVectors(this.origin,e);const l=o*this.direction.dot(nd.crossVectors(Qs,nd));if(l<0)return null;const c=o*this.direction.dot(km.cross(Qs));if(c<0||l+c>a)return null;const u=-o*Qs.dot(zm);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tw extends vp{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Io,this.combine=rw,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const R2=new xn,Ya=new UI,id=new yv,P2=new K,rd=new K,sd=new K,ad=new K,Bm=new K,od=new K,N2=new K,ld=new K;class as extends Xi{constructor(e=new Vs,n=new Tw){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){od.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Bm.fromBufferAttribute(d,e),a?od.addScaledVector(Bm,u):od.addScaledVector(Bm.sub(n),u))}n.add(od)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),id.copy(i.boundingSphere),id.applyMatrix4(s),Ya.copy(e.ray).recast(e.near),!(id.containsPoint(Ya.origin)===!1&&(Ya.intersectSphere(id,P2)===null||Ya.origin.distanceToSquared(P2)>(e.far-e.near)**2))&&(R2.copy(s).invert(),Ya.copy(e.ray).applyMatrix4(R2),!(i.boundingBox!==null&&Ya.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ya)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],x=Math.max(m.start,h.start),y=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let v=x,b=y;v<b;v+=3){const T=o.getX(v),w=o.getX(v+1),S=o.getX(v+2);r=cd(this,p,e,i,c,u,d,T,w,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);r=cd(this,a,e,i,c,u,d,x,y,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],x=Math.max(m.start,h.start),y=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=x,b=y;v<b;v+=3){const T=v,w=v+1,S=v+2;r=cd(this,p,e,i,c,u,d,T,w,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;r=cd(this,a,e,i,c,u,d,x,y,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function OI(t,e,n,i,r,s,a,o){let l;if(e.side===Ri?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ka,o),l===null)return null;ld.copy(o),ld.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ld);return c<n.near||c>n.far?null:{distance:c,point:ld.clone(),object:t}}function cd(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,rd),t.getVertexPosition(l,sd),t.getVertexPosition(c,ad);const u=OI(t,e,n,i,rd,sd,ad,N2);if(u){const d=new K;wr.getBarycoord(N2,rd,sd,ad,d),r&&(u.uv=wr.getInterpolatedAttribute(r,o,l,c,d,new yt)),s&&(u.uv1=wr.getInterpolatedAttribute(s,o,l,c,d,new yt)),a&&(u.normal=wr.getInterpolatedAttribute(a,o,l,c,d,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new K,materialIndex:0};wr.getNormal(rd,sd,ad,f.normal),u.face=f,u.barycoord=d}return u}class kI extends ei{constructor(e=null,n=1,i=1,r,s,a,o,l,c=kn,u=kn,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vm=new K,zI=new K,BI=new et;class to{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vm.subVectors(i,n).cross(zI.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Vm),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||BI.getNormalMatrix(e),r=this.coplanarPoint(Vm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qa=new yv,VI=new yt(.5,.5),ud=new K;class Aw{constructor(e=new to,n=new to,i=new to,r=new to,s=new to,a=new to){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Zr,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],x=s[12],y=s[13],v=s[14],b=s[15];if(r[0].setComponents(c-a,h-u,p-g,b-x).normalize(),r[1].setComponents(c+a,h+u,p+g,b+x).normalize(),r[2].setComponents(c+o,h+d,p+_,b+y).normalize(),r[3].setComponents(c-o,h-d,p-_,b-y).normalize(),i)r[4].setComponents(l,f,m,v).normalize(),r[5].setComponents(c-l,h-f,p-m,b-v).normalize();else if(r[4].setComponents(c-l,h-f,p-m,b-v).normalize(),n===Zr)r[5].setComponents(c+l,h+f,p+m,b+v).normalize();else if(n===Bh)r[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qa)}intersectsSprite(e){qa.center.set(0,0,0);const n=VI.distanceTo(e.center);return qa.radius=.7071067811865476+n,qa.applyMatrix4(e.matrixWorld),this.intersectsSphere(qa)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ud.x=r.normal.x>0?e.max.x:e.min.x,ud.y=r.normal.y>0?e.max.y:e.min.y,ud.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ud)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cw extends ei{constructor(e=[],n=Do,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HI extends ei{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oc extends ei{constructor(e,n,i=ss,r,s,a,o=kn,l=kn,c,u=ks,d=1){if(u!==ks&&u!==fo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vv(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class GI extends oc{constructor(e,n=ss,i=Do,r,s,a=kn,o=kn,l,c=ks){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rw extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ff extends Vs{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new As(c,3)),this.setAttribute("normal",new As(u,3)),this.setAttribute("uv",new As(d,2));function g(_,m,p,x,y,v,b,T,w,S,A){const R=v/w,D=b/S,L=v/2,G=b/2,Y=T/2,k=w+1,X=S+1;let U=0,I=0;const W=new K;for(let P=0;P<X;P++){const ie=P*D-G;for(let fe=0;fe<k;fe++){const $e=fe*R-L;W[_]=$e*x,W[m]=ie*y,W[p]=Y,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=T>0?1:-1,u.push(W.x,W.y,W.z),d.push(fe/w),d.push(1-P/S),U+=1}}for(let P=0;P<S;P++)for(let ie=0;ie<w;ie++){const fe=f+ie+k*P,$e=f+ie+k*(P+1),Ge=f+(ie+1)+k*(P+1),We=f+(ie+1)+k*P;l.push(fe,$e,We),l.push($e,Ge,We),I+=6}o.addGroup(h,I,A),h+=I,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class df extends Vs{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*f-a;for(let y=0;y<c;y++){const v=y*d-s;g.push(v,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+c*p,v=x+c*(p+1),b=x+1+c*(p+1),T=x+1+c*p;h.push(y,v,T),h.push(v,b,T)}this.setIndex(h),this.setAttribute("position",new As(g,3)),this.setAttribute("normal",new As(_,3)),this.setAttribute("uv",new As(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.width,e.height,e.widthSegments,e.heightSegments)}}function lc(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(D2(r))r.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(D2(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function li(t){const e={};for(let n=0;n<t.length;n++){const i=lc(t[n]);for(const r in i)e[r]=i[r]}return e}function D2(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function WI(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Pw(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const jI={clone:lc,merge:li};var XI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$I=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends vp{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XI,this.fragmentShader=$I,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lc(e.uniforms),this.uniformsGroups=WI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Mt().setHex(r.value);break;case"v2":this.uniforms[i].value=new yt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new K().fromArray(r.value);break;case"v4":this.uniforms[i].value=new zt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new et().fromArray(r.value);break;case"m4":this.uniforms[i].value=new xn().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class YI extends Nr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qI extends vp{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sI,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KI extends vp{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fd=new K,dd=new pc,Fr=new K;class Nw extends Xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Zr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fd,dd,Fr),Fr.x===1&&Fr.y===1&&Fr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fd,dd,Fr.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(fd,dd,Fr),Fr.x===1&&Fr.y===1&&Fr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fd,dd,Fr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Js=new K,L2=new yt,I2=new yt;class br extends Nw{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=T_*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return T_*2*Math.atan(Math.tan(xm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Js.x,Js.y).multiplyScalar(-e/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Js.x,Js.y).multiplyScalar(-e/Js.z)}getViewSize(e,n){return this.getViewBounds(e,L2,I2),n.subVectors(I2,L2)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xm*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Sv extends Nw{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const al=-90,ol=1;class ZI extends Xi{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new br(al,ol,e,n);r.layers=this.layers,this.add(r);const s=new br(al,ol,e,n);s.layers=this.layers,this.add(s);const a=new br(al,ol,e,n);a.layers=this.layers,this.add(a);const o=new br(al,ol,e,n);o.layers=this.layers,this.add(o);const l=new br(al,ol,e,n);l.layers=this.layers,this.add(l);const c=new br(al,ol,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Zr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class QI extends br{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Tv=class Tv{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Tv.prototype.isMatrix2=!0;let F2=Tv;function U2(t,e,n,i){const r=JI(i);switch(n){case _w:return t*e;case vw:return t*e/r.components*r.byteLength;case pv:return t*e/r.components*r.byteLength;case Lo:return t*e*2/r.components*r.byteLength;case mv:return t*e*2/r.components*r.byteLength;case xw:return t*e*3/r.components*r.byteLength;case Tr:return t*e*4/r.components*r.byteLength;case gv:return t*e*4/r.components*r.byteLength;case Wd:case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xd:case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zg:case Jg:return Math.max(t,16)*Math.max(e,8)/4;case Kg:case Qg:return Math.max(t,8)*Math.max(e,8)/2;case e_:case t_:case i_:case r_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case n_:case Uh:case s_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case a_:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case o_:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case l_:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case c_:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case u_:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case f_:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case d_:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case h_:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case p_:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case m_:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case g_:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case __:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case x_:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case v_:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case y_:case S_:case E_:return Math.ceil(t/4)*Math.ceil(e/4)*16;case M_:case b_:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Oh:case w_:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function JI(t){switch(t){case lr:case hw:return{byteLength:1,components:1};case qu:case pw:case Os:return{byteLength:2,components:1};case dv:case hv:return{byteLength:2,components:4};case ss:case fv:case Kr:return{byteLength:4,components:1};case mw:case gw:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uv}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dw(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function e5(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var t5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n5=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,i5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o5=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c5=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,u5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h5=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p5=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m5=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g5=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,S5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,M5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,b5=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w5=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T5=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,A5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N5="gl_FragColor = linearToOutputTexel( gl_FragColor );",D5=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,I5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F5=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,U5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H5=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j5=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X5=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$5=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Y5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q5=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z5=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q5=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J5=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e6=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t6=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n6=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i6=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,r6=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s6=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a6=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o6=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l6=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c6=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u6=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f6=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d6=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h6=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p6=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m6=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g6=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_6=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,x6=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v6=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y6=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S6=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E6=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M6=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,b6=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w6=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T6=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A6=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C6=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R6=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P6=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,N6=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D6=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L6=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I6=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F6=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U6=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O6=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,k6=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z6=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B6=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V6=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H6=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G6=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W6=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,j6=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X6=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$6=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y6=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q6=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K6=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z6=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q6=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J6=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nF=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rF=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lF=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cF=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uF=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hF=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pF=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gF=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_F=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xF=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vF=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yF=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SF=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EF=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MF=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bF=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wF=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TF=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AF=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CF=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RF=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NF=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DF=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LF=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IF=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:t5,alphahash_pars_fragment:n5,alphamap_fragment:i5,alphamap_pars_fragment:r5,alphatest_fragment:s5,alphatest_pars_fragment:a5,aomap_fragment:o5,aomap_pars_fragment:l5,batching_pars_vertex:c5,batching_vertex:u5,begin_vertex:f5,beginnormal_vertex:d5,bsdfs:h5,iridescence_fragment:p5,bumpmap_pars_fragment:m5,clipping_planes_fragment:g5,clipping_planes_pars_fragment:_5,clipping_planes_pars_vertex:x5,clipping_planes_vertex:v5,color_fragment:y5,color_pars_fragment:S5,color_pars_vertex:E5,color_vertex:M5,common:b5,cube_uv_reflection_fragment:w5,defaultnormal_vertex:T5,displacementmap_pars_vertex:A5,displacementmap_vertex:C5,emissivemap_fragment:R5,emissivemap_pars_fragment:P5,colorspace_fragment:N5,colorspace_pars_fragment:D5,envmap_fragment:L5,envmap_common_pars_fragment:I5,envmap_pars_fragment:F5,envmap_pars_vertex:U5,envmap_physical_pars_fragment:$5,envmap_vertex:O5,fog_vertex:k5,fog_pars_vertex:z5,fog_fragment:B5,fog_pars_fragment:V5,gradientmap_pars_fragment:H5,lightmap_pars_fragment:G5,lights_lambert_fragment:W5,lights_lambert_pars_fragment:j5,lights_pars_begin:X5,lights_toon_fragment:Y5,lights_toon_pars_fragment:q5,lights_phong_fragment:K5,lights_phong_pars_fragment:Z5,lights_physical_fragment:Q5,lights_physical_pars_fragment:J5,lights_fragment_begin:e6,lights_fragment_maps:t6,lights_fragment_end:n6,lightprobes_pars_fragment:i6,logdepthbuf_fragment:r6,logdepthbuf_pars_fragment:s6,logdepthbuf_pars_vertex:a6,logdepthbuf_vertex:o6,map_fragment:l6,map_pars_fragment:c6,map_particle_fragment:u6,map_particle_pars_fragment:f6,metalnessmap_fragment:d6,metalnessmap_pars_fragment:h6,morphinstance_vertex:p6,morphcolor_vertex:m6,morphnormal_vertex:g6,morphtarget_pars_vertex:_6,morphtarget_vertex:x6,normal_fragment_begin:v6,normal_fragment_maps:y6,normal_pars_fragment:S6,normal_pars_vertex:E6,normal_vertex:M6,normalmap_pars_fragment:b6,clearcoat_normal_fragment_begin:w6,clearcoat_normal_fragment_maps:T6,clearcoat_pars_fragment:A6,iridescence_pars_fragment:C6,opaque_fragment:R6,packing:P6,premultiplied_alpha_fragment:N6,project_vertex:D6,dithering_fragment:L6,dithering_pars_fragment:I6,roughnessmap_fragment:F6,roughnessmap_pars_fragment:U6,shadowmap_pars_fragment:O6,shadowmap_pars_vertex:k6,shadowmap_vertex:z6,shadowmask_pars_fragment:B6,skinbase_vertex:V6,skinning_pars_vertex:H6,skinning_vertex:G6,skinnormal_vertex:W6,specularmap_fragment:j6,specularmap_pars_fragment:X6,tonemapping_fragment:$6,tonemapping_pars_fragment:Y6,transmission_fragment:q6,transmission_pars_fragment:K6,uv_pars_fragment:Z6,uv_pars_vertex:Q6,uv_vertex:J6,worldpos_vertex:eF,background_vert:tF,background_frag:nF,backgroundCube_vert:iF,backgroundCube_frag:rF,cube_vert:sF,cube_frag:aF,depth_vert:oF,depth_frag:lF,distance_vert:cF,distance_frag:uF,equirect_vert:fF,equirect_frag:dF,linedashed_vert:hF,linedashed_frag:pF,meshbasic_vert:mF,meshbasic_frag:gF,meshlambert_vert:_F,meshlambert_frag:xF,meshmatcap_vert:vF,meshmatcap_frag:yF,meshnormal_vert:SF,meshnormal_frag:EF,meshphong_vert:MF,meshphong_frag:bF,meshphysical_vert:wF,meshphysical_frag:TF,meshtoon_vert:AF,meshtoon_frag:CF,points_vert:RF,points_frag:PF,shadow_vert:NF,shadow_frag:DF,sprite_vert:LF,sprite_frag:IF},be={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Vr={basic:{uniforms:li([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:li([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:li([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:li([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:li([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Mt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:li([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:li([be.points,be.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:li([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:li([be.common,be.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:li([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:li([be.sprite,be.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:li([be.common,be.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:li([be.lights,be.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Vr.physical={uniforms:li([Vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const hd={r:0,b:0,g:0},FF=new xn,Lw=new et;Lw.set(-1,0,0,0,1,0,0,0,1);function UF(t,e,n,i,r,s){const a=new Mt(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function h(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const v=x.backgroundBlurriness>0;y=e.get(y,v)}return y}function g(x){let y=!1;const v=h(x);v===null?m(a,o):v&&v.isColor&&(m(v,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,y){const v=h(y);v&&(v.isCubeTexture||v.mapping===xp)?(c===void 0&&(c=new as(new ff(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:lc(Vr.backgroundCube.uniforms),vertexShader:Vr.backgroundCube.vertexShader,fragmentShader:Vr.backgroundCube.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(FF.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lw),c.material.toneMapped=ht.getTransfer(v.colorSpace)!==wt,(u!==v||d!==v.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new as(new df(2,2),new Nr({name:"BackgroundMaterial",uniforms:lc(Vr.background.uniforms),vertexShader:Vr.background.vertexShader,fragmentShader:Vr.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ht.getTransfer(v.colorSpace)!==wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,y){x.getRGB(hd,Pw(t)),n.buffers.color.setClear(hd.r,hd.g,hd.b,y,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:_,dispose:p}}function OF(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(D,L,G,Y,k){let X=!1;const U=d(D,Y,G,L);s!==U&&(s=U,c(s.object)),X=h(D,Y,G,k),X&&g(D,Y,G,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(D,L,G,Y),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function d(D,L,G,Y){const k=Y.wireframe===!0;let X=i[L.id];X===void 0&&(X={},i[L.id]=X);const U=D.isInstancedMesh===!0?D.id:0;let I=X[U];I===void 0&&(I={},X[U]=I);let W=I[G.id];W===void 0&&(W={},I[G.id]=W);let P=W[k];return P===void 0&&(P=f(l()),W[k]=P),P}function f(D){const L=[],G=[],Y=[];for(let k=0;k<n;k++)L[k]=0,G[k]=0,Y[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:Y,object:D,attributes:{},index:null}}function h(D,L,G,Y){const k=s.attributes,X=L.attributes;let U=0;const I=G.getAttributes();for(const W in I)if(I[W].location>=0){const ie=k[W];let fe=X[W];if(fe===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),ie===void 0||ie.attribute!==fe||fe&&ie.data!==fe.data)return!0;U++}return s.attributesNum!==U||s.index!==Y}function g(D,L,G,Y){const k={},X=L.attributes;let U=0;const I=G.getAttributes();for(const W in I)if(I[W].location>=0){let ie=X[W];ie===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));const fe={};fe.attribute=ie,ie&&ie.data&&(fe.data=ie.data),k[W]=fe,U++}s.attributes=k,s.attributesNum=U,s.index=Y}function _(){const D=s.newAttributes;for(let L=0,G=D.length;L<G;L++)D[L]=0}function m(D){p(D,0)}function p(D,L){const G=s.newAttributes,Y=s.enabledAttributes,k=s.attributeDivisors;G[D]=1,Y[D]===0&&(t.enableVertexAttribArray(D),Y[D]=1),k[D]!==L&&(t.vertexAttribDivisor(D,L),k[D]=L)}function x(){const D=s.newAttributes,L=s.enabledAttributes;for(let G=0,Y=L.length;G<Y;G++)L[G]!==D[G]&&(t.disableVertexAttribArray(G),L[G]=0)}function y(D,L,G,Y,k,X,U){U===!0?t.vertexAttribIPointer(D,L,G,k,X):t.vertexAttribPointer(D,L,G,Y,k,X)}function v(D,L,G,Y){_();const k=Y.attributes,X=G.getAttributes(),U=L.defaultAttributeValues;for(const I in X){const W=X[I];if(W.location>=0){let P=k[I];if(P===void 0&&(I==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),I==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){const ie=P.normalized,fe=P.itemSize,$e=e.get(P);if($e===void 0)continue;const Ge=$e.buffer,We=$e.type,Z=$e.bytesPerElement,oe=We===t.INT||We===t.UNSIGNED_INT||P.gpuType===fv;if(P.isInterleavedBufferAttribute){const ae=P.data,De=ae.stride,je=P.offset;if(ae.isInstancedInterleavedBuffer){for(let Ce=0;Ce<W.locationSize;Ce++)p(W.location+Ce,ae.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ce=0;Ce<W.locationSize;Ce++)m(W.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let Ce=0;Ce<W.locationSize;Ce++)y(W.location+Ce,fe/W.locationSize,We,ie,De*Z,(je+fe/W.locationSize*Ce)*Z,oe)}else{if(P.isInstancedBufferAttribute){for(let ae=0;ae<W.locationSize;ae++)p(W.location+ae,P.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let ae=0;ae<W.locationSize;ae++)m(W.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ae=0;ae<W.locationSize;ae++)y(W.location+ae,fe/W.locationSize,We,ie,fe*Z,fe/W.locationSize*ae*Z,oe)}}else if(U!==void 0){const ie=U[I];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(W.location,ie);break;case 3:t.vertexAttrib3fv(W.location,ie);break;case 4:t.vertexAttrib4fv(W.location,ie);break;default:t.vertexAttrib1fv(W.location,ie)}}}}x()}function b(){A();for(const D in i){const L=i[D];for(const G in L){const Y=L[G];for(const k in Y){const X=Y[k];for(const U in X)u(X[U].object),delete X[U];delete Y[k]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const L=i[D.id];for(const G in L){const Y=L[G];for(const k in Y){const X=Y[k];for(const U in X)u(X[U].object),delete X[U];delete Y[k]}}delete i[D.id]}function w(D){for(const L in i){const G=i[L];for(const Y in G){const k=G[Y];if(k[D.id]===void 0)continue;const X=k[D.id];for(const U in X)u(X[U].object),delete X[U];delete k[D.id]}}}function S(D){for(const L in i){const G=i[L],Y=D.isInstancedMesh===!0?D.id:0,k=G[Y];if(k!==void 0){for(const X in k){const U=k[X];for(const I in U)u(U[I].object),delete U[I];delete k[X]}delete G[Y],Object.keys(G).length===0&&delete i[L]}}}function A(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function kF(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function zF(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Tr&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const S=w===Os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==lr&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Kr&&!S)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:b,samples:T}}function BF(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new to,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,y=x*4;let v=p.clippingState||null;l.value=v,v=u(g,f,y,h);for(let b=0;b!==y;++b)v[b]=n[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=h;y!==_;++y,v+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const ga=4,O2=[.125,.215,.35,.446,.526,.582],io=20,VF=256,Dc=new Sv,k2=new Mt;let Hm=null,Gm=0,Wm=0,jm=!1;const HF=new K;class z2{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=HF}=s;Hm=this._renderer.getRenderTarget(),Gm=this._renderer.getActiveCubeFace(),Wm=this._renderer.getActiveMipmapLevel(),jm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hm,Gm,Wm),this._renderer.xr.enabled=jm,e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Do||e.mapping===ac?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hm=this._renderer.getRenderTarget(),Gm=this._renderer.getActiveCubeFace(),Wm=this._renderer.getActiveMipmapLevel(),jm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Os,format:Tr,colorSpace:kh,depthBuffer:!1},r=B2(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B2(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=GF(s)),this._blurMaterial=jF(s,e,n),this._ggxMaterial=WF(s,e,n)}return r}_compileMaterial(e){const n=new as(new Vs,e);this._renderer.compile(n,Dc)}_sceneToCubeUV(e,n,i,r,s){const l=new br(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(k2),d.toneMapping=ts,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new as(new ff,new Tw({name:"PMREM.Background",side:Ri,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(k2),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const b=this._cubeSize;ll(r,v*b,y>2?b:0,b,b),d.setRenderTarget(r),p&&d.render(_,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Do||e.mapping===ac;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=H2()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V2());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ll(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Dc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-ga?i-g+ga:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-n,ll(s,m,p,3*_,2*_),r.setRenderTarget(s),r.render(o,Dc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ll(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(o,Dc)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&xt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*io-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):io;m>io&&Ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${io}`);const p=[];let x=0;for(let w=0;w<io;++w){const S=w/_,A=Math.exp(-S*S/2);p.push(A),w===0?x+=A:w<m&&(x+=2*A)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const v=this._sizeLods[r],b=3*v*(r>y-ga?r-y+ga:0),T=4*(this._cubeSize-v);ll(n,b,T,3*v,2*v),l.setRenderTarget(n),l.render(d,Dc)}}function GF(t){const e=[],n=[],i=[];let r=t;const s=t-ga+1+O2.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ga?l=O2[a-t+ga-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*h),y=new Float32Array(m*g*h),v=new Float32Array(p*g*h);for(let T=0;T<h;T++){const w=T%3*2/3-1,S=T>2?0:-1,A=[w,S,0,w+2/3,S,0,w+2/3,S+1,0,w,S,0,w+2/3,S+1,0,w,S+1,0];x.set(A,_*g*T),y.set(f,m*g*T);const R=[T,T,T,T,T,T];v.set(R,p*g*T)}const b=new Vs;b.setAttribute("position",new is(x,_)),b.setAttribute("uv",new is(y,m)),b.setAttribute("faceIndex",new is(v,p)),i.push(new as(b,null)),r>ga&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function B2(t,e,n){const i=new ns(t,e,n);return i.texture.mapping=xp,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ll(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function WF(t,e,n){return new Nr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VF,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function jF(t,e,n){const i=new Float32Array(io),r=new K(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:io,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function V2(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function H2(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function yp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Iw extends ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cw(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ff(5,5,5),s=new Nr({name:"CubemapFromEquirect",uniforms:lc(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ri,blending:ws});s.uniforms.tEquirect.value=n;const a=new as(r,s),o=n.minFilter;return n.minFilter===uo&&(n.minFilter=Ln),new ZI(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function XF(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===mm||h===gm)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new Iw(g.height);return _.fromEquirectangularTexture(t,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const h=f.mapping,g=h===mm||h===gm,_=h===Do||h===ac;if(g||_){let m=n.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new z2(t)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const x=f.image;return g&&x&&x.height>0||_&&x&&l(x)?(i===null&&(i=new z2(t)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,h){return h===mm?f.mapping=Do:h===gm&&(f.mapping=ac),f}function l(f){let h=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&h++;return h===g}function c(f){const h=f.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function $F(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Gl("WebGLRenderer: "+i+" extension not supported."),r}}}function YF(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(h!==null){const x=h.array;_=h.version;for(let y=0,v=x.length;y<v;y+=3){const b=x[y+0],T=x[y+1],w=x[y+2];f.push(b,T,T,w,w,b)}}else{const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const b=y+0,T=y+1,w=y+2;f.push(b,T,T,w,w,b)}}const m=new(g.count>=65535?ww:bw)(f,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function qF(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*a),n.update(f,i,1)}function c(d,f,h){h!==0&&(t.drawElementsInstanced(i,f,s,d*a,h),n.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let _=0;for(let m=0;m<h;m++)_+=f[m];n.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function KF(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:xt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ZF(t,e,n){const i=new WeakMap,r=new zt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let R=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var h=R;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=o.attributes.position.count*v,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*T*4*d),S=new Sw(w,b,T,d);S.type=Kr,S.needsUpdate=!0;const A=v*4;for(let D=0;D<d;D++){const L=p[D],G=x[D],Y=y[D],k=b*T*4*D;for(let X=0;X<L.count;X++){const U=X*A;g===!0&&(r.fromBufferAttribute(L,X),w[k+U+0]=r.x,w[k+U+1]=r.y,w[k+U+2]=r.z,w[k+U+3]=0),_===!0&&(r.fromBufferAttribute(G,X),w[k+U+4]=r.x,w[k+U+5]=r.y,w[k+U+6]=r.z,w[k+U+7]=0),m===!0&&(r.fromBufferAttribute(Y,X),w[k+U+8]=r.x,w[k+U+9]=r.y,w[k+U+10]=r.z,w[k+U+11]=Y.itemSize===4?r.w:1)}}f={count:d,texture:S,size:new yt(b,T)},i.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function QF(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const JF={[sw]:"LINEAR_TONE_MAPPING",[aw]:"REINHARD_TONE_MAPPING",[ow]:"CINEON_TONE_MAPPING",[lw]:"ACES_FILMIC_TONE_MAPPING",[uw]:"AGX_TONE_MAPPING",[fw]:"NEUTRAL_TONE_MAPPING",[cw]:"CUSTOM_TONE_MAPPING"};function e8(t,e,n,i,r,s){const a=new ns(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new oc(e,n):void 0}),o=new ns(e,n,{type:Os,depthBuffer:!1,stencilBuffer:!1}),l=new Vs;l.setAttribute("position",new As([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new As([0,2,0,0,2,0],2));const c=new YI({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new as(l,c),d=new Sv(-1,1,1,-1,0,1);let f=null,h=null,g=!1,_,m=null,p=[],x=!1;this.setSize=function(y,v){a.setSize(y,v),o.setSize(y,v);for(let b=0;b<p.length;b++){const T=p[b];T.setSize&&T.setSize(y,v)}},this.setEffects=function(y){p=y,x=p.length>0&&p[0].isRenderPass===!0;const v=a.width,b=a.height;for(let T=0;T<p.length;T++){const w=p[T];w.setSize&&w.setSize(v,b)}},this.begin=function(y,v){if(g||y.toneMapping===ts&&p.length===0)return!1;if(m=v,v!==null){const b=v.width,T=v.height;(a.width!==b||a.height!==T)&&this.setSize(b,T)}return x===!1&&y.setRenderTarget(a),_=y.toneMapping,y.toneMapping=ts,!0},this.hasRenderPass=function(){return x},this.end=function(y,v){y.toneMapping=_,g=!0;let b=a,T=o;for(let w=0;w<p.length;w++){const S=p[w];if(S.enabled!==!1&&(S.render(y,T,b,v),S.needsSwap!==!1)){const A=b;b=T,T=A}}if(f!==y.outputColorSpace||h!==y.toneMapping){f=y.outputColorSpace,h=y.toneMapping,c.defines={},ht.getTransfer(f)===wt&&(c.defines.SRGB_TRANSFER="");const w=JF[h];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(m),y.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Fw=new ei,A_=new oc(1,1),Uw=new Sw,Ow=new MI,kw=new Cw,G2=[],W2=[],j2=new Float32Array(16),X2=new Float32Array(9),$2=new Float32Array(4);function mc(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=G2[r];if(s===void 0&&(s=new Float32Array(r),G2[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function wn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sp(t,e){let n=W2[e];n===void 0&&(n=new Int32Array(e),W2[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function t8(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function n8(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;t.uniform2fv(this.addr,e),Tn(n,e)}}function i8(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wn(n,e))return;t.uniform3fv(this.addr,e),Tn(n,e)}}function r8(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;t.uniform4fv(this.addr,e),Tn(n,e)}}function s8(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tn(n,e)}else{if(wn(n,i))return;$2.set(i),t.uniformMatrix2fv(this.addr,!1,$2),Tn(n,i)}}function a8(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tn(n,e)}else{if(wn(n,i))return;X2.set(i),t.uniformMatrix3fv(this.addr,!1,X2),Tn(n,i)}}function o8(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tn(n,e)}else{if(wn(n,i))return;j2.set(i),t.uniformMatrix4fv(this.addr,!1,j2),Tn(n,i)}}function l8(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function c8(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;t.uniform2iv(this.addr,e),Tn(n,e)}}function u8(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;t.uniform3iv(this.addr,e),Tn(n,e)}}function f8(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;t.uniform4iv(this.addr,e),Tn(n,e)}}function d8(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function h8(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wn(n,e))return;t.uniform2uiv(this.addr,e),Tn(n,e)}}function p8(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wn(n,e))return;t.uniform3uiv(this.addr,e),Tn(n,e)}}function m8(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wn(n,e))return;t.uniform4uiv(this.addr,e),Tn(n,e)}}function g8(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(A_.compareFunction=n.isReversedDepthBuffer()?xv:_v,s=A_):s=Fw,n.setTexture2D(e||s,r)}function _8(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ow,r)}function x8(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kw,r)}function v8(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Uw,r)}function y8(t){switch(t){case 5126:return t8;case 35664:return n8;case 35665:return i8;case 35666:return r8;case 35674:return s8;case 35675:return a8;case 35676:return o8;case 5124:case 35670:return l8;case 35667:case 35671:return c8;case 35668:case 35672:return u8;case 35669:case 35673:return f8;case 5125:return d8;case 36294:return h8;case 36295:return p8;case 36296:return m8;case 35678:case 36198:case 36298:case 36306:case 35682:return g8;case 35679:case 36299:case 36307:return _8;case 35680:case 36300:case 36308:case 36293:return x8;case 36289:case 36303:case 36311:case 36292:return v8}}function S8(t,e){t.uniform1fv(this.addr,e)}function E8(t,e){const n=mc(e,this.size,2);t.uniform2fv(this.addr,n)}function M8(t,e){const n=mc(e,this.size,3);t.uniform3fv(this.addr,n)}function b8(t,e){const n=mc(e,this.size,4);t.uniform4fv(this.addr,n)}function w8(t,e){const n=mc(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function T8(t,e){const n=mc(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function A8(t,e){const n=mc(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function C8(t,e){t.uniform1iv(this.addr,e)}function R8(t,e){t.uniform2iv(this.addr,e)}function P8(t,e){t.uniform3iv(this.addr,e)}function N8(t,e){t.uniform4iv(this.addr,e)}function D8(t,e){t.uniform1uiv(this.addr,e)}function L8(t,e){t.uniform2uiv(this.addr,e)}function I8(t,e){t.uniform3uiv(this.addr,e)}function F8(t,e){t.uniform4uiv(this.addr,e)}function U8(t,e,n){const i=this.cache,r=e.length,s=Sp(n,r);wn(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=A_:a=Fw;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function O8(t,e,n){const i=this.cache,r=e.length,s=Sp(n,r);wn(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ow,s[a])}function k8(t,e,n){const i=this.cache,r=e.length,s=Sp(n,r);wn(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||kw,s[a])}function z8(t,e,n){const i=this.cache,r=e.length,s=Sp(n,r);wn(i,s)||(t.uniform1iv(this.addr,s),Tn(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Uw,s[a])}function B8(t){switch(t){case 5126:return S8;case 35664:return E8;case 35665:return M8;case 35666:return b8;case 35674:return w8;case 35675:return T8;case 35676:return A8;case 5124:case 35670:return C8;case 35667:case 35671:return R8;case 35668:case 35672:return P8;case 35669:case 35673:return N8;case 5125:return D8;case 36294:return L8;case 36295:return I8;case 36296:return F8;case 35678:case 36198:case 36298:case 36306:case 35682:return U8;case 35679:case 36299:case 36307:return O8;case 35680:case 36300:case 36308:case 36293:return k8;case 36289:case 36303:case 36311:case 36292:return z8}}class V8{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=y8(n.type)}}class H8{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=B8(n.type)}}class G8{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Xm=/(\w+)(\])?(\[|\.)?/g;function Y2(t,e){t.seq.push(e),t.map[e.id]=e}function W8(t,e,n){const i=t.name,r=i.length;for(Xm.lastIndex=0;;){const s=Xm.exec(i),a=Xm.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Y2(n,c===void 0?new V8(o,t,e):new H8(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new G8(o),Y2(n,d)),n=d}}}class Yd{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);W8(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function q2(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const j8=37297;let X8=0;function $8(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const K2=new et;function Y8(t){ht._getMatrix(K2,ht.workingColorSpace,t);const e=`mat3( ${K2.elements.map(n=>n.toFixed(4))} )`;switch(ht.getTransfer(t)){case zh:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Z2(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+$8(t.getShaderSource(e),o)}else return s}function q8(t,e){const n=Y8(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const K8={[sw]:"Linear",[aw]:"Reinhard",[ow]:"Cineon",[lw]:"ACESFilmic",[uw]:"AgX",[fw]:"Neutral",[cw]:"Custom"};function Z8(t,e){const n=K8[e];return n===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pd=new K;function Q8(){ht.getLuminanceCoefficients(pd);const t=pd.x.toFixed(4),e=pd.y.toFixed(4),n=pd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J8(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($c).join(`
`)}function eU(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function tU(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function $c(t){return t!==""}function Q2(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J2(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nU=/^[ \t]*#include +<([\w\d./]+)>/gm;function C_(t){return t.replace(nU,rU)}const iU=new Map;function rU(t,e){let n=nt[e];if(n===void 0){const i=iU.get(e);if(i!==void 0)n=nt[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return C_(n)}const sU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eS(t){return t.replace(sU,aU)}function aU(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tS(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const oU={[Gd]:"SHADOWMAP_TYPE_PCF",[Xc]:"SHADOWMAP_TYPE_VSM"};function lU(t){return oU[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cU={[Do]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE",[xp]:"ENVMAP_TYPE_CUBE_UV"};function uU(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":cU[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const fU={[ac]:"ENVMAP_MODE_REFRACTION"};function dU(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":fU[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hU={[rw]:"ENVMAP_BLENDING_MULTIPLY",[nI]:"ENVMAP_BLENDING_MIX",[iI]:"ENVMAP_BLENDING_ADD"};function pU(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":hU[t.combine]||"ENVMAP_BLENDING_NONE"}function mU(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gU(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=lU(n),c=uU(n),u=dU(n),d=pU(n),f=mU(n),h=J8(n),g=eU(s),_=r.createProgram();let m,p,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($c).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter($c).join(`
`),p.length>0&&(p+=`
`)):(m=[tS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($c).join(`
`),p=[tS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ts?"#define TONE_MAPPING":"",n.toneMapping!==ts?nt.tonemapping_pars_fragment:"",n.toneMapping!==ts?Z8("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,q8("linearToOutputTexel",n.outputColorSpace),Q8(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($c).join(`
`)),a=C_(a),a=Q2(a,n),a=J2(a,n),o=C_(o),o=Q2(o,n),o=J2(o,n),a=eS(a),o=eS(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===m2?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===m2?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,v=x+p+o,b=q2(r,r.VERTEX_SHADER,y),T=q2(r,r.FRAGMENT_SHADER,v);r.attachShader(_,b),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(D){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(b)||"",Y=r.getShaderInfoLog(T)||"",k=L.trim(),X=G.trim(),U=Y.trim();let I=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,b,T);else{const P=Z2(r,b,"vertex"),ie=Z2(r,T,"fragment");xt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+P+`
`+ie)}else k!==""?Ke("WebGLProgram: Program Info Log:",k):(X===""||U==="")&&(W=!1);W&&(D.diagnostics={runnable:I,programLog:k,vertexShader:{log:X,prefix:m},fragmentShader:{log:U,prefix:p}})}r.deleteShader(b),r.deleteShader(T),S=new Yd(r,_),A=tU(r,_)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(_,j8)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=X8++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let _U=0;class xU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vU(e),n.set(e,i)),i}}class vU{constructor(e){this.id=_U++,this.code=e,this.usedTimes=0}}function yU(t){return t===Lo||t===Uh||t===Oh}function SU(t,e,n,i,r,s){const a=new Ew,o=new xU,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,A,R,D,L,G){const Y=D.fog,k=L.geometry,X=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,U=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,I=e.get(S.envMap||X,U),W=I&&I.mapping===xp?I.image.height:null,P=h[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Ke("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=ie!==void 0?ie.length:0;let $e=0;k.morphAttributes.position!==void 0&&($e=1),k.morphAttributes.normal!==void 0&&($e=2),k.morphAttributes.color!==void 0&&($e=3);let Ge,We,Z,oe;if(P){const se=Vr[P];Ge=se.vertexShader,We=se.fragmentShader}else{Ge=S.vertexShader,We=S.fragmentShader;const se=o.getVertexShaderStage(S),Ve=o.getFragmentShaderStage(S);o.update(S,se,Ve),Z=se.id,oe=Ve.id}const ae=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),je=L.isInstancedMesh===!0,Ce=L.isBatchedMesh===!0,ct=!!S.map,Te=!!S.matcap,Xe=!!I,Ze=!!S.aoMap,qe=!!S.lightMap,$=!!S.bumpMap&&S.wireframe===!1,gt=!!S.normalMap,At=!!S.displacementMap,Ft=!!S.emissiveMap,Qe=!!S.metalnessMap,St=!!S.roughnessMap,O=S.anisotropy>0,Jt=S.clearcoat>0,Ye=S.dispersion>0,N=S.iridescence>0,M=S.sheen>0,B=S.transmission>0,H=O&&!!S.anisotropyMap,Q=Jt&&!!S.clearcoatMap,me=Jt&&!!S.clearcoatNormalMap,ue=Jt&&!!S.clearcoatRoughnessMap,ee=N&&!!S.iridescenceMap,te=N&&!!S.iridescenceThicknessMap,xe=M&&!!S.sheenColorMap,Ne=M&&!!S.sheenRoughnessMap,ve=!!S.specularMap,_e=!!S.specularColorMap,pe=!!S.specularIntensityMap,Fe=B&&!!S.transmissionMap,Be=B&&!!S.thicknessMap,F=!!S.gradientMap,ge=!!S.alphaMap,ne=S.alphaTest>0,ye=!!S.alphaHash,Se=!!S.extensions;let re=ts;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(re=t.toneMapping);const le={shaderID:P,shaderType:S.type,shaderName:S.name,vertexShader:Ge,fragmentShader:We,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&L._colorsTexture!==null,instancing:je,instancingColor:je&&L.instanceColor!==null,instancingMorph:je&&L.morphTexture!==null,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ct,matcap:Te,envMap:Xe,envMapMode:Xe&&I.mapping,envMapCubeUVHeight:W,aoMap:Ze,lightMap:qe,bumpMap:$,normalMap:gt,displacementMap:At,emissiveMap:Ft,normalMapObjectSpace:gt&&S.normalMapType===aI,normalMapTangentSpace:gt&&S.normalMapType===d2,packedNormalMap:gt&&S.normalMapType===d2&&yU(S.normalMap.format),metalnessMap:Qe,roughnessMap:St,anisotropy:O,anisotropyMap:H,clearcoat:Jt,clearcoatMap:Q,clearcoatNormalMap:me,clearcoatRoughnessMap:ue,dispersion:Ye,iridescence:N,iridescenceMap:ee,iridescenceThicknessMap:te,sheen:M,sheenColorMap:xe,sheenRoughnessMap:Ne,specularMap:ve,specularColorMap:_e,specularIntensityMap:pe,transmission:B,transmissionMap:Fe,thicknessMap:Be,gradientMap:F,opaque:S.transparent===!1&&S.blending===Hl&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:ne,alphaHash:ye,combine:S.combine,mapUv:ct&&g(S.map.channel),aoMapUv:Ze&&g(S.aoMap.channel),lightMapUv:qe&&g(S.lightMap.channel),bumpMapUv:$&&g(S.bumpMap.channel),normalMapUv:gt&&g(S.normalMap.channel),displacementMapUv:At&&g(S.displacementMap.channel),emissiveMapUv:Ft&&g(S.emissiveMap.channel),metalnessMapUv:Qe&&g(S.metalnessMap.channel),roughnessMapUv:St&&g(S.roughnessMap.channel),anisotropyMapUv:H&&g(S.anisotropyMap.channel),clearcoatMapUv:Q&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&g(S.sheenRoughnessMap.channel),specularMapUv:ve&&g(S.specularMap.channel),specularColorMapUv:_e&&g(S.specularColorMap.channel),specularIntensityMapUv:pe&&g(S.specularIntensityMap.channel),transmissionMapUv:Fe&&g(S.transmissionMap.channel),thicknessMapUv:Be&&g(S.thicknessMap.channel),alphaMapUv:ge&&g(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(gt||O),vertexNormals:!!k.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(ct||ge),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||k.attributes.normal===void 0&&gt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:De,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:$e,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:ct&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===wt,decodeVideoTextureEmissive:Ft&&S.emissiveMap.isVideoTexture===!0&&ht.getTransfer(S.emissiveMap.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xs,flipSided:S.side===Ri,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function m(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)A.push(R),A.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(p(A,S),x(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function p(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function x(S,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function y(S){const A=h[S.type];let R;if(A){const D=Vr[A];R=jI.clone(D.uniforms)}else R=S.uniforms;return R}function v(S,A){let R=u.get(A);return R!==void 0?++R.usedTimes:(R=new gU(t,A,S,r),c.push(R),u.set(A,R)),R}function b(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function T(S){o.remove(S)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:w}}function EU(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function MU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function nS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function iS(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,g,_,m,p){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:p},t[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=g,x.materialVariant=a(f),x.groupOrder=_,x.renderOrder=f.renderOrder,x.z=m,x.group=p),e++,x}function l(f,h,g,_,m,p){const x=o(f,h,g,_,m,p);g.transmission>0?i.push(x):g.transparent===!0?r.push(x):n.push(x)}function c(f,h,g,_,m,p){const x=o(f,h,g,_,m,p);g.transmission>0?i.unshift(x):g.transparent===!0?r.unshift(x):n.unshift(x)}function u(f,h,g){n.length>1&&n.sort(f||MU),i.length>1&&i.sort(h||nS),r.length>1&&r.sort(h||nS),g&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function bU(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new iS,t.set(i,[a])):r>=s.length?(a=new iS,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function wU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new Mt};break;case"SpotLight":n={position:new K,direction:new K,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":n={color:new Mt,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function TU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AU=0;function CU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RU(t){const e=new wU,n=TU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new xn,a=new xn;function o(c){let u=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,b=0,T=0,w=0;c.sort(CU);for(let A=0,R=c.length;A<R;A++){const D=c[A],L=D.color,G=D.intensity,Y=D.distance;let k=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Lo?k=D.shadow.map.texture:k=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=L.r*G,d+=L.g*G,f+=L.b*G;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],G);w++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const U=D.shadow,I=n.get(D);I.shadowIntensity=U.intensity,I.shadowBias=U.bias,I.shadowNormalBias=U.normalBias,I.shadowRadius=U.radius,I.shadowMapSize=U.mapSize,i.directionalShadow[h]=I,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=D.shadow.matrix,x++}i.directional[h]=X,h++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(L).multiplyScalar(G),X.distance=Y,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[_]=X;const U=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,U.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[_]=U.matrix,D.castShadow){const I=n.get(D);I.shadowIntensity=U.intensity,I.shadowBias=U.bias,I.shadowNormalBias=U.normalBias,I.shadowRadius=U.radius,I.shadowMapSize=U.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=k,v++}_++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(L).multiplyScalar(G),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const U=D.shadow,I=n.get(D);I.shadowIntensity=U.intensity,I.shadowBias=U.bias,I.shadowNormalBias=U.normalBias,I.shadowRadius=U.radius,I.shadowMapSize=U.mapSize,I.shadowCameraNear=U.camera.near,I.shadowCameraFar=U.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(G),X.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[p]=X,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==h||S.pointLength!==g||S.spotLength!==_||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==x||S.numPointShadows!==y||S.numSpotShadows!==v||S.numSpotMaps!==b||S.numLightProbes!==w)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,S.directionalLength=h,S.pointLength=g,S.spotLength=_,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=x,S.numPointShadows=y,S.numSpotShadows=v,S.numSpotMaps=b,S.numLightProbes=w,i.version=AU++)}function l(c,u){let d=0,f=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(y.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function rS(t){const e=new RU(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function PU(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new rS(t),e.set(r,[o])):s>=a.length?(o=new rS(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const NU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LU=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],IU=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],sS=new xn,Lc=new K,$m=new K;function FU(t,e,n){let i=new Aw;const r=new yt,s=new yt,a=new zt,o=new qI,l=new KI,c={},u=n.maxTextureSize,d={[ka]:Ri,[Ri]:ka,[xs]:xs},f=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:NU,fragmentShader:DU}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Vs;g.setAttribute("position",new is(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new as(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gd;let p=this.type;this.render=function(T,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===OL&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gd);const A=t.getRenderTarget(),R=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),L=t.state;L.setBlending(ws),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const G=p!==this.type;G&&w.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(k=>k.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,k=T.length;Y<k;Y++){const X=T[Y],U=X.shadow;if(U===void 0){Ke("WebGLShadowMap:",X,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const I=U.getFrameExtents();r.multiply(I),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/I.x),r.x=s.x*I.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/I.y),r.y=s.y*I.y,U.mapSize.y=s.y));const W=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=W,U.map===null||G===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Xc){if(X.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ns(r.x,r.y,{format:Lo,type:Os,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),U.map.texture.name=X.name+".shadowMap",U.map.depthTexture=new oc(r.x,r.y,Kr),U.map.depthTexture.name=X.name+".shadowMapDepth",U.map.depthTexture.format=ks,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=kn,U.map.depthTexture.magFilter=kn}else X.isPointLight?(U.map=new Iw(r.x),U.map.depthTexture=new GI(r.x,ss)):(U.map=new ns(r.x,r.y),U.map.depthTexture=new oc(r.x,r.y,ss)),U.map.depthTexture.name=X.name+".shadowMap",U.map.depthTexture.format=ks,this.type===Gd?(U.map.depthTexture.compareFunction=W?xv:_v,U.map.depthTexture.minFilter=Ln,U.map.depthTexture.magFilter=Ln):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=kn,U.map.depthTexture.magFilter=kn);U.camera.updateProjectionMatrix()}const P=U.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<P;ie++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(U.map),t.clear());const fe=U.getViewport(ie);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),L.viewport(a)}if(X.isPointLight){const fe=U.camera,$e=U.matrix,Ge=X.distance||fe.far;Ge!==fe.far&&(fe.far=Ge,fe.updateProjectionMatrix()),Lc.setFromMatrixPosition(X.matrixWorld),fe.position.copy(Lc),$m.copy(fe.position),$m.add(LU[ie]),fe.up.copy(IU[ie]),fe.lookAt($m),fe.updateMatrixWorld(),$e.makeTranslation(-Lc.x,-Lc.y,-Lc.z),sS.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),U._frustum.setFromProjectionMatrix(sS,fe.coordinateSystem,fe.reversedDepth)}else U.updateMatrices(X);i=U.getFrustum(),v(w,S,U.camera,X,this.type)}U.isPointLightShadow!==!0&&this.type===Xc&&x(U,S),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(A,R,D)};function x(T,w){const S=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ns(r.x,r.y,{format:Lo,type:Os})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,S,f,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,S,h,_,null)}function y(T,w,S,A){let R=null;const D=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=S.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=R.uuid,G=w.uuid;let Y=c[L];Y===void 0&&(Y={},c[L]=Y);let k=Y[G];k===void 0&&(k=R.clone(),Y[G]=k,w.addEventListener("dispose",b)),R=k}if(R.visible=w.visible,R.wireframe=w.wireframe,A===Xc?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:d[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const L=t.properties.get(R);L.light=S}return R}function v(T,w,S,A,R){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Xc)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const G=e.update(T),Y=T.material;if(Array.isArray(Y)){const k=G.groups;for(let X=0,U=k.length;X<U;X++){const I=k[X],W=Y[I.materialIndex];if(W&&W.visible){const P=y(T,W,A,R);T.onBeforeShadow(t,T,w,S,G,P,I),t.renderBufferDirect(S,null,G,P,T,I),T.onAfterShadow(t,T,w,S,G,P,I)}}}else if(Y.visible){const k=y(T,Y,A,R);T.onBeforeShadow(t,T,w,S,G,k,null),t.renderBufferDirect(S,null,G,k,T,null),T.onAfterShadow(t,T,w,S,G,k,null)}}const L=T.children;for(let G=0,Y=L.length;G<Y;G++)v(L[G],w,S,A,R)}function b(T){T.target.removeEventListener("dispose",b);for(const S in c){const A=c[S],R=T.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function UU(t,e){function n(){let F=!1;const ge=new zt;let ne=null;const ye=new zt(0,0,0,0);return{setMask:function(Se){ne!==Se&&!F&&(t.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){F=Se},setClear:function(Se,re,le,se,Ve){Ve===!0&&(Se*=se,re*=se,le*=se),ge.set(Se,re,le,se),ye.equals(ge)===!1&&(t.clearColor(Se,re,le,se),ye.copy(ge))},reset:function(){F=!1,ne=null,ye.set(-1,0,0,0)}}}function i(){let F=!1,ge=!1,ne=null,ye=null,Se=null;return{setReversed:function(re){if(ge!==re){const le=e.get("EXT_clip_control");re?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),ge=re;const se=Se;Se=null,this.setClear(se)}},getReversed:function(){return ge},setTest:function(re){re?ae(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(re){ne!==re&&!F&&(t.depthMask(re),ne=re)},setFunc:function(re){if(ge&&(re=gI[re]),ye!==re){switch(re){case Vg:t.depthFunc(t.NEVER);break;case Hg:t.depthFunc(t.ALWAYS);break;case Gg:t.depthFunc(t.LESS);break;case sc:t.depthFunc(t.LEQUAL);break;case Wg:t.depthFunc(t.EQUAL);break;case jg:t.depthFunc(t.GEQUAL);break;case Xg:t.depthFunc(t.GREATER);break;case $g:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ye=re}},setLocked:function(re){F=re},setClear:function(re){Se!==re&&(Se=re,ge&&(re=1-re),t.clearDepth(re))},reset:function(){F=!1,ne=null,ye=null,Se=null,ge=!1}}}function r(){let F=!1,ge=null,ne=null,ye=null,Se=null,re=null,le=null,se=null,Ve=null;return{setTest:function(ce){F||(ce?ae(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(ce){ge!==ce&&!F&&(t.stencilMask(ce),ge=ce)},setFunc:function(ce,He,Le){(ne!==ce||ye!==He||Se!==Le)&&(t.stencilFunc(ce,He,Le),ne=ce,ye=He,Se=Le)},setOp:function(ce,He,Le){(re!==ce||le!==He||se!==Le)&&(t.stencilOp(ce,He,Le),re=ce,le=He,se=Le)},setLocked:function(ce){F=ce},setClear:function(ce){Ve!==ce&&(t.clearStencil(ce),Ve=ce)},reset:function(){F=!1,ge=null,ne=null,ye=null,Se=null,re=null,le=null,se=null,Ve=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},h=new WeakMap,g=[],_=null,m=!1,p=null,x=null,y=null,v=null,b=null,T=null,w=null,S=new Mt(0,0,0),A=0,R=!1,D=null,L=null,G=null,Y=null,k=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,I=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=I>=1):W.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=I>=2);let P=null,ie={};const fe=t.getParameter(t.SCISSOR_BOX),$e=t.getParameter(t.VIEWPORT),Ge=new zt().fromArray(fe),We=new zt().fromArray($e);function Z(F,ge,ne,ye){const Se=new Uint8Array(4),re=t.createTexture();t.bindTexture(F,re),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let le=0;le<ne;le++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,ye,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(ge+le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return re}const oe={};oe[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),a.setFunc(sc),$(!1),gt(l2),ae(t.CULL_FACE),Ze(ws);function ae(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function De(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function je(F,ge){return f[F]!==ge?(t.bindFramebuffer(F,ge),f[F]=ge,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ge),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ce(F,ge){let ne=g,ye=!1;if(F){ne=h.get(ge),ne===void 0&&(ne=[],h.set(ge,ne));const Se=F.textures;if(ne.length!==Se.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let re=0,le=Se.length;re<le;re++)ne[re]=t.COLOR_ATTACHMENT0+re;ne.length=Se.length,ye=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,ye=!0);ye&&t.drawBuffers(ne)}function ct(F){return _!==F?(t.useProgram(F),_=F,!0):!1}const Te={[no]:t.FUNC_ADD,[zL]:t.FUNC_SUBTRACT,[BL]:t.FUNC_REVERSE_SUBTRACT};Te[VL]=t.MIN,Te[HL]=t.MAX;const Xe={[GL]:t.ZERO,[WL]:t.ONE,[jL]:t.SRC_COLOR,[zg]:t.SRC_ALPHA,[ZL]:t.SRC_ALPHA_SATURATE,[qL]:t.DST_COLOR,[$L]:t.DST_ALPHA,[XL]:t.ONE_MINUS_SRC_COLOR,[Bg]:t.ONE_MINUS_SRC_ALPHA,[KL]:t.ONE_MINUS_DST_COLOR,[YL]:t.ONE_MINUS_DST_ALPHA,[QL]:t.CONSTANT_COLOR,[JL]:t.ONE_MINUS_CONSTANT_COLOR,[eI]:t.CONSTANT_ALPHA,[tI]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(F,ge,ne,ye,Se,re,le,se,Ve,ce){if(F===ws){m===!0&&(De(t.BLEND),m=!1);return}if(m===!1&&(ae(t.BLEND),m=!0),F!==kL){if(F!==p||ce!==R){if((x!==no||b!==no)&&(t.blendEquation(t.FUNC_ADD),x=no,b=no),ce)switch(F){case Hl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case c2:t.blendFunc(t.ONE,t.ONE);break;case u2:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case f2:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:xt("WebGLState: Invalid blending: ",F);break}else switch(F){case Hl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case c2:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case u2:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case f2:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",F);break}y=null,v=null,T=null,w=null,S.set(0,0,0),A=0,p=F,R=ce}return}Se=Se||ge,re=re||ne,le=le||ye,(ge!==x||Se!==b)&&(t.blendEquationSeparate(Te[ge],Te[Se]),x=ge,b=Se),(ne!==y||ye!==v||re!==T||le!==w)&&(t.blendFuncSeparate(Xe[ne],Xe[ye],Xe[re],Xe[le]),y=ne,v=ye,T=re,w=le),(se.equals(S)===!1||Ve!==A)&&(t.blendColor(se.r,se.g,se.b,Ve),S.copy(se),A=Ve),p=F,R=!1}function qe(F,ge){F.side===xs?De(t.CULL_FACE):ae(t.CULL_FACE);let ne=F.side===Ri;ge&&(ne=!ne),$(ne),F.blending===Hl&&F.transparent===!1?Ze(ws):Ze(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ye=F.stencilWrite;o.setTest(ye),ye&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ft(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function $(F){D!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),D=F)}function gt(F){F!==FL?(ae(t.CULL_FACE),F!==L&&(F===l2?t.cullFace(t.BACK):F===UL?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),L=F}function At(F){F!==G&&(U&&t.lineWidth(F),G=F)}function Ft(F,ge,ne){F?(ae(t.POLYGON_OFFSET_FILL),(Y!==ge||k!==ne)&&(Y=ge,k=ne,a.getReversed()&&(ge=-ge),t.polygonOffset(ge,ne))):De(t.POLYGON_OFFSET_FILL)}function Qe(F){F?ae(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function St(F){F===void 0&&(F=t.TEXTURE0+X-1),P!==F&&(t.activeTexture(F),P=F)}function O(F,ge,ne){ne===void 0&&(P===null?ne=t.TEXTURE0+X-1:ne=P);let ye=ie[ne];ye===void 0&&(ye={type:void 0,texture:void 0},ie[ne]=ye),(ye.type!==F||ye.texture!==ge)&&(P!==ne&&(t.activeTexture(ne),P=ne),t.bindTexture(F,ge||oe[F]),ye.type=F,ye.texture=ge)}function Jt(){const F=ie[P];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ye(){try{t.compressedTexImage2D(...arguments)}catch(F){xt("WebGLState:",F)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(F){xt("WebGLState:",F)}}function M(){try{t.texSubImage2D(...arguments)}catch(F){xt("WebGLState:",F)}}function B(){try{t.texSubImage3D(...arguments)}catch(F){xt("WebGLState:",F)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(F){xt("WebGLState:",F)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(F){xt("WebGLState:",F)}}function me(){try{t.texStorage2D(...arguments)}catch(F){xt("WebGLState:",F)}}function ue(){try{t.texStorage3D(...arguments)}catch(F){xt("WebGLState:",F)}}function ee(){try{t.texImage2D(...arguments)}catch(F){xt("WebGLState:",F)}}function te(){try{t.texImage3D(...arguments)}catch(F){xt("WebGLState:",F)}}function xe(F){return d[F]!==void 0?d[F]:t.getParameter(F)}function Ne(F,ge){d[F]!==ge&&(t.pixelStorei(F,ge),d[F]=ge)}function ve(F){Ge.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Ge.copy(F))}function _e(F){We.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),We.copy(F))}function pe(F,ge){let ne=c.get(ge);ne===void 0&&(ne=new WeakMap,c.set(ge,ne));let ye=ne.get(F);ye===void 0&&(ye=t.getUniformBlockIndex(ge,F.name),ne.set(F,ye))}function Fe(F,ge){const ye=c.get(ge).get(F);l.get(ge)!==ye&&(t.uniformBlockBinding(ge,ye,F.__bindingPointIndex),l.set(ge,ye))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ie={},f={},h=new WeakMap,g=[],_=null,m=!1,p=null,x=null,y=null,v=null,b=null,T=null,w=null,S=new Mt(0,0,0),A=0,R=!1,D=null,L=null,G=null,Y=null,k=null,Ge.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:De,bindFramebuffer:je,drawBuffers:Ce,useProgram:ct,setBlending:Ze,setMaterial:qe,setFlipSided:$,setCullFace:gt,setLineWidth:At,setPolygonOffset:Ft,setScissorTest:Qe,activeTexture:St,bindTexture:O,unbindTexture:Jt,compressedTexImage2D:Ye,compressedTexImage3D:N,texImage2D:ee,texImage3D:te,pixelStorei:Ne,getParameter:xe,updateUBOMapping:pe,uniformBlockBinding:Fe,texStorage2D:me,texStorage3D:ue,texSubImage2D:M,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:Q,scissor:ve,viewport:_e,reset:Be}}function OU(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,u=new WeakMap,d=new Set;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,M){return g?new OffscreenCanvas(N,M):Vh("canvas")}function m(N,M,B){let H=1;const Q=Ye(N);if((Q.width>B||Q.height>B)&&(H=B/Math.max(Q.width,Q.height)),H<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const me=Math.floor(H*Q.width),ue=Math.floor(H*Q.height);f===void 0&&(f=_(me,ue));const ee=M?_(me,ue):f;return ee.width=me,ee.height=ue,ee.getContext("2d").drawImage(N,0,0,me,ue),Ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+me+"x"+ue+")."),ee}else return"data"in N&&Ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),N;return N}function p(N){return N.generateMipmaps}function x(N){t.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?t.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(N,M,B,H,Q,me=!1){if(N!==null){if(t[N]!==void 0)return t[N];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue;H&&(ue=e.get("EXT_texture_norm16"),ue||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=M;if(M===t.RED&&(B===t.FLOAT&&(ee=t.R32F),B===t.HALF_FLOAT&&(ee=t.R16F),B===t.UNSIGNED_BYTE&&(ee=t.R8),B===t.UNSIGNED_SHORT&&ue&&(ee=ue.R16_EXT),B===t.SHORT&&ue&&(ee=ue.R16_SNORM_EXT)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.R8UI),B===t.UNSIGNED_SHORT&&(ee=t.R16UI),B===t.UNSIGNED_INT&&(ee=t.R32UI),B===t.BYTE&&(ee=t.R8I),B===t.SHORT&&(ee=t.R16I),B===t.INT&&(ee=t.R32I)),M===t.RG&&(B===t.FLOAT&&(ee=t.RG32F),B===t.HALF_FLOAT&&(ee=t.RG16F),B===t.UNSIGNED_BYTE&&(ee=t.RG8),B===t.UNSIGNED_SHORT&&ue&&(ee=ue.RG16_EXT),B===t.SHORT&&ue&&(ee=ue.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.RG8UI),B===t.UNSIGNED_SHORT&&(ee=t.RG16UI),B===t.UNSIGNED_INT&&(ee=t.RG32UI),B===t.BYTE&&(ee=t.RG8I),B===t.SHORT&&(ee=t.RG16I),B===t.INT&&(ee=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),B===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),B===t.UNSIGNED_INT&&(ee=t.RGB32UI),B===t.BYTE&&(ee=t.RGB8I),B===t.SHORT&&(ee=t.RGB16I),B===t.INT&&(ee=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),B===t.UNSIGNED_INT&&(ee=t.RGBA32UI),B===t.BYTE&&(ee=t.RGBA8I),B===t.SHORT&&(ee=t.RGBA16I),B===t.INT&&(ee=t.RGBA32I)),M===t.RGB&&(B===t.UNSIGNED_SHORT&&ue&&(ee=ue.RGB16_EXT),B===t.SHORT&&ue&&(ee=ue.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),M===t.RGBA){const te=me?zh:ht.getTransfer(Q);B===t.FLOAT&&(ee=t.RGBA32F),B===t.HALF_FLOAT&&(ee=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ee=te===wt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&ue&&(ee=ue.RGBA16_EXT),B===t.SHORT&&ue&&(ee=ue.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function b(N,M){let B;return N?M===null||M===ss||M===Ku?B=t.DEPTH24_STENCIL8:M===Kr?B=t.DEPTH32F_STENCIL8:M===qu&&(B=t.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ss||M===Ku?B=t.DEPTH_COMPONENT24:M===Kr?B=t.DEPTH_COMPONENT32F:M===qu&&(B=t.DEPTH_COMPONENT16),B}function T(N,M){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==kn&&N.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function w(N){const M=N.target;M.removeEventListener("dispose",w),A(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function S(N){const M=N.target;M.removeEventListener("dispose",S),D(M)}function A(N){const M=i.get(N);if(M.__webglInit===void 0)return;const B=N.source,H=h.get(B);if(H){const Q=H[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(N),Object.keys(H).length===0&&h.delete(B)}i.remove(N)}function R(N){const M=i.get(N);t.deleteTexture(M.__webglTexture);const B=N.source,H=h.get(B);delete H[M.__cacheKey],a.memory.textures--}function D(N){const M=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(M.__webglFramebuffer[H]))for(let Q=0;Q<M.__webglFramebuffer[H].length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[H][Q]);else t.deleteFramebuffer(M.__webglFramebuffer[H]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[H])}else{if(Array.isArray(M.__webglFramebuffer))for(let H=0;H<M.__webglFramebuffer.length;H++)t.deleteFramebuffer(M.__webglFramebuffer[H]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let H=0;H<M.__webglColorRenderbuffer.length;H++)M.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[H]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=N.textures;for(let H=0,Q=B.length;H<Q;H++){const me=i.get(B[H]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(B[H])}i.remove(N)}let L=0;function G(){L=0}function Y(){return L}function k(N){L=N}function X(){const N=L;return N>=r.maxTextures&&Ke("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),L+=1,N}function U(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function I(N,M){const B=i.get(N);if(N.isVideoTexture&&O(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&B.__version!==N.version){const H=N.image;if(H===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{De(B,N,M);return}}else N.isExternalTexture&&(B.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function W(N,M){const B=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&B.__version!==N.version){De(B,N,M);return}else N.isExternalTexture&&(B.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function P(N,M){const B=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&B.__version!==N.version){De(B,N,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function ie(N,M){const B=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&B.__version!==N.version){je(B,N,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const fe={[Yg]:t.REPEAT,[Es]:t.CLAMP_TO_EDGE,[qg]:t.MIRRORED_REPEAT},$e={[kn]:t.NEAREST,[rI]:t.NEAREST_MIPMAP_NEAREST,[Xf]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[_m]:t.LINEAR_MIPMAP_NEAREST,[uo]:t.LINEAR_MIPMAP_LINEAR},Ge={[oI]:t.NEVER,[dI]:t.ALWAYS,[lI]:t.LESS,[_v]:t.LEQUAL,[cI]:t.EQUAL,[xv]:t.GEQUAL,[uI]:t.GREATER,[fI]:t.NOTEQUAL};function We(N,M){if(M.type===Kr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===_m||M.magFilter===Xf||M.magFilter===uo||M.minFilter===Ln||M.minFilter===_m||M.minFilter===Xf||M.minFilter===uo)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,fe[M.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,fe[M.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,fe[M.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,$e[M.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,$e[M.minFilter]),M.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,Ge[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===kn||M.minFilter!==Xf&&M.minFilter!==uo||M.type===Kr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Z(N,M){let B=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",w));const H=M.source;let Q=h.get(H);Q===void 0&&(Q={},h.set(H,Q));const me=U(M);if(me!==N.__cacheKey){Q[me]===void 0&&(Q[me]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[me].usedTimes++;const ue=Q[N.__cacheKey];ue!==void 0&&(Q[N.__cacheKey].usedTimes--,ue.usedTimes===0&&R(M)),N.__cacheKey=me,N.__webglTexture=Q[me].texture}return B}function oe(N,M,B){return Math.floor(Math.floor(N/B)/M)}function ae(N,M,B,H){const me=N.updateRanges;if(me.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,B,H,M.data);else{me.sort((Ne,ve)=>Ne.start-ve.start);let ue=0;for(let Ne=1;Ne<me.length;Ne++){const ve=me[ue],_e=me[Ne],pe=ve.start+ve.count,Fe=oe(_e.start,M.width,4),Be=oe(ve.start,M.width,4);_e.start<=pe+1&&Fe===Be&&oe(_e.start+_e.count-1,M.width,4)===Fe?ve.count=Math.max(ve.count,_e.start+_e.count-ve.start):(++ue,me[ue]=_e)}me.length=ue+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),te=n.getParameter(t.UNPACK_SKIP_PIXELS),xe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Ne=0,ve=me.length;Ne<ve;Ne++){const _e=me[Ne],pe=Math.floor(_e.start/4),Fe=Math.ceil(_e.count/4),Be=pe%M.width,F=Math.floor(pe/M.width),ge=Fe,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,Be,F,ge,ne,B,H,M.data)}N.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,te),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function De(N,M,B){let H=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(H=t.TEXTURE_3D);const Q=Z(N,M),me=M.source;n.bindTexture(H,N.__webglTexture,t.TEXTURE0+B);const ue=i.get(me);if(me.version!==ue.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ne=ht.getPrimaries(ht.workingColorSpace),ye=M.colorSpace===oa?null:ht.getPrimaries(M.colorSpace),Se=M.colorSpace===oa||ne===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let te=m(M.image,!1,r.maxTextureSize);te=Jt(M,te);const xe=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type);let ve=v(M.internalFormat,xe,Ne,M.normalized,M.colorSpace,M.isVideoTexture);We(H,M);let _e;const pe=M.mipmaps,Fe=M.isVideoTexture!==!0,Be=ue.__version===void 0||Q===!0,F=me.dataReady,ge=T(M,te);if(M.isDepthTexture)ve=b(M.format===fo,M.type),Be&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,ve,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,ve,te.width,te.height,0,xe,Ne,null));else if(M.isDataTexture)if(pe.length>0){Fe&&Be&&n.texStorage2D(t.TEXTURE_2D,ge,ve,pe[0].width,pe[0].height);for(let ne=0,ye=pe.length;ne<ye;ne++)_e=pe[ne],Fe?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,Ne,_e.data):n.texImage2D(t.TEXTURE_2D,ne,ve,_e.width,_e.height,0,xe,Ne,_e.data);M.generateMipmaps=!1}else Fe?(Be&&n.texStorage2D(t.TEXTURE_2D,ge,ve,te.width,te.height),F&&ae(M,te,xe,Ne)):n.texImage2D(t.TEXTURE_2D,0,ve,te.width,te.height,0,xe,Ne,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ve,pe[0].width,pe[0].height,te.depth);for(let ne=0,ye=pe.length;ne<ye;ne++)if(_e=pe[ne],M.format!==Tr)if(xe!==null)if(Fe){if(F)if(M.layerUpdates.size>0){const Se=U2(_e.width,_e.height,M.format,M.type);for(const re of M.layerUpdates){const le=_e.data.subarray(re*Se/_e.data.BYTES_PER_ELEMENT,(re+1)*Se/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,re,_e.width,_e.height,1,xe,le)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,te.depth,xe,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ve,_e.width,_e.height,te.depth,0,_e.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,te.depth,xe,Ne,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,ve,_e.width,_e.height,te.depth,0,xe,Ne,_e.data)}else{Fe&&Be&&n.texStorage2D(t.TEXTURE_2D,ge,ve,pe[0].width,pe[0].height);for(let ne=0,ye=pe.length;ne<ye;ne++)_e=pe[ne],M.format!==Tr?xe!==null?Fe?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,ve,_e.width,_e.height,0,_e.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,Ne,_e.data):n.texImage2D(t.TEXTURE_2D,ne,ve,_e.width,_e.height,0,xe,Ne,_e.data)}else if(M.isDataArrayTexture)if(Fe){if(Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ve,te.width,te.height,te.depth),F)if(M.layerUpdates.size>0){const ne=U2(te.width,te.height,M.format,M.type);for(const ye of M.layerUpdates){const Se=te.data.subarray(ye*ne/te.data.BYTES_PER_ELEMENT,(ye+1)*ne/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ye,te.width,te.height,1,xe,Ne,Se)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,xe,Ne,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,te.width,te.height,te.depth,0,xe,Ne,te.data);else if(M.isData3DTexture)Fe?(Be&&n.texStorage3D(t.TEXTURE_3D,ge,ve,te.width,te.height,te.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,xe,Ne,te.data)):n.texImage3D(t.TEXTURE_3D,0,ve,te.width,te.height,te.depth,0,xe,Ne,te.data);else if(M.isFramebufferTexture){if(Be)if(Fe)n.texStorage2D(t.TEXTURE_2D,ge,ve,te.width,te.height);else{let ne=te.width,ye=te.height;for(let Se=0;Se<ge;Se++)n.texImage2D(t.TEXTURE_2D,Se,ve,ne,ye,0,xe,Ne,null),ne>>=1,ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),te.parentNode!==ne){ne.appendChild(te),d.add(M),ne.onpaint=ye=>{const Se=ye.changedElements;for(const re of d)Se.includes(re.image)&&(re.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,te);else{const Se=t.RGBA,re=t.RGBA,le=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Se,re,le,te)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(pe.length>0){if(Fe&&Be){const ne=Ye(pe[0]);n.texStorage2D(t.TEXTURE_2D,ge,ve,ne.width,ne.height)}for(let ne=0,ye=pe.length;ne<ye;ne++)_e=pe[ne],Fe?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,xe,Ne,_e):n.texImage2D(t.TEXTURE_2D,ne,ve,xe,Ne,_e);M.generateMipmaps=!1}else if(Fe){if(Be){const ne=Ye(te);n.texStorage2D(t.TEXTURE_2D,ge,ve,ne.width,ne.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Ne,te)}else n.texImage2D(t.TEXTURE_2D,0,ve,xe,Ne,te);p(M)&&x(H),ue.__version=me.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function je(N,M,B){if(M.image.length!==6)return;const H=Z(N,M),Q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+B);const me=i.get(Q);if(Q.version!==me.__version||H===!0){n.activeTexture(t.TEXTURE0+B);const ue=ht.getPrimaries(ht.workingColorSpace),ee=M.colorSpace===oa?null:ht.getPrimaries(M.colorSpace),te=M.colorSpace===oa||ue===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,Ne=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let re=0;re<6;re++)!xe&&!Ne?ve[re]=m(M.image[re],!0,r.maxCubemapSize):ve[re]=Ne?M.image[re].image:M.image[re],ve[re]=Jt(M,ve[re]);const _e=ve[0],pe=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type),Be=v(M.internalFormat,pe,Fe,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,ge=me.__version===void 0||H===!0,ne=Q.dataReady;let ye=T(M,_e);We(t.TEXTURE_CUBE_MAP,M);let Se;if(xe){F&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Be,_e.width,_e.height);for(let re=0;re<6;re++){Se=ve[re].mipmaps;for(let le=0;le<Se.length;le++){const se=Se[le];M.format!==Tr?pe!==null?F?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,0,0,se.width,se.height,pe,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,Be,se.width,se.height,0,se.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,0,0,se.width,se.height,pe,Fe,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le,Be,se.width,se.height,0,pe,Fe,se.data)}}}else{if(Se=M.mipmaps,F&&ge){Se.length>0&&ye++;const re=Ye(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Be,re.width,re.height)}for(let re=0;re<6;re++)if(Ne){F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ve[re].width,ve[re].height,pe,Fe,ve[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Be,ve[re].width,ve[re].height,0,pe,Fe,ve[re].data);for(let le=0;le<Se.length;le++){const Ve=Se[le].image[re].image;F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,0,0,Ve.width,Ve.height,pe,Fe,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,Be,Ve.width,Ve.height,0,pe,Fe,Ve.data)}}else{F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,pe,Fe,ve[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Be,pe,Fe,ve[re]);for(let le=0;le<Se.length;le++){const se=Se[le];F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,0,0,pe,Fe,se.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,le+1,Be,pe,Fe,se.image[re])}}}p(M)&&x(t.TEXTURE_CUBE_MAP),me.__version=Q.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Ce(N,M,B,H,Q,me){const ue=s.convert(B.format,B.colorSpace),ee=s.convert(B.type),te=v(B.internalFormat,ue,ee,B.normalized,B.colorSpace),xe=i.get(M),Ne=i.get(B);if(Ne.__renderTarget=M,!xe.__hasExternalTextures){const ve=Math.max(1,M.width>>me),_e=Math.max(1,M.height>>me);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,me,te,ve,_e,M.depth,0,ue,ee,null):n.texImage2D(Q,me,te,ve,_e,0,ue,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),St(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,Q,Ne.__webglTexture,0,Qe(M)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,Q,Ne.__webglTexture,me),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ct(N,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,N),M.depthBuffer){const H=M.depthTexture,Q=H&&H.isDepthTexture?H.type:null,me=b(M.stencilBuffer,Q),ue=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;St(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe(M),me,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe(M),me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,N)}else{const H=M.textures;for(let Q=0;Q<H.length;Q++){const me=H[Q],ue=s.convert(me.format,me.colorSpace),ee=s.convert(me.type),te=v(me.internalFormat,ue,ee,me.normalized,me.colorSpace);St(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe(M),te,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe(M),te,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(N,M,B){const H=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),We(t.TEXTURE_CUBE_MAP,M.depthTexture);const xe=s.convert(M.depthTexture.format),Ne=s.convert(M.depthTexture.type);let ve;M.depthTexture.format===ks?ve=t.DEPTH_COMPONENT24:M.depthTexture.format===fo&&(ve=t.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ve,M.width,M.height,0,xe,Ne,null)}}else I(M.depthTexture,0);const me=Q.__webglTexture,ue=Qe(M),ee=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,te=M.depthTexture.format===fo?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===ks)St(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ee,me,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,te,ee,me,0);else if(M.depthTexture.format===fo)St(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ee,me,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,te,ee,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(N){const M=i.get(N),B=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const H=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),H){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,H.removeEventListener("dispose",Q)};H.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=H}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)Te(M.__webglFramebuffer[H],N,H);else{const H=N.texture.mipmaps;H&&H.length>0?Te(M.__webglFramebuffer[0],N,0):Te(M.__webglFramebuffer,N,0)}else if(B){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]===void 0)M.__webglDepthbuffer[H]=t.createRenderbuffer(),ct(M.__webglDepthbuffer[H],N,!1);else{const Q=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,me)}}else{const H=N.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ct(M.__webglDepthbuffer,N,!1);else{const Q=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,me)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(N,M,B){const H=i.get(N);M!==void 0&&Ce(H.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Xe(N)}function qe(N){const M=N.texture,B=i.get(N),H=i.get(M);N.addEventListener("dispose",S);const Q=N.textures,me=N.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(ue||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=M.version,a.memory.textures++),me){B.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ee]=[];for(let te=0;te<M.mipmaps.length;te++)B.__webglFramebuffer[ee][te]=t.createFramebuffer()}else B.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)B.__webglFramebuffer[ee]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ue)for(let ee=0,te=Q.length;ee<te;ee++){const xe=i.get(Q[ee]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(N.samples>0&&St(N)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const te=Q[ee];B.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ee]);const xe=s.convert(te.format,te.colorSpace),Ne=s.convert(te.type),ve=v(te.internalFormat,xe,Ne,te.normalized,te.colorSpace,N.isXRRenderTarget===!0),_e=Qe(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ve,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,B.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),ct(B.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(me){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),We(t.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)Ce(B.__webglFramebuffer[ee][te],N,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,te);else Ce(B.__webglFramebuffer[ee],N,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(M)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let ee=0,te=Q.length;ee<te;ee++){const xe=Q[ee],Ne=i.get(xe);let ve=t.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ve=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Ne.__webglTexture),We(ve,xe),Ce(B.__webglFramebuffer,N,xe,t.COLOR_ATTACHMENT0+ee,ve,0),p(xe)&&x(ve)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ee=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,H.__webglTexture),We(ee,M),M.mipmaps&&M.mipmaps.length>0)for(let te=0;te<M.mipmaps.length;te++)Ce(B.__webglFramebuffer[te],N,M,t.COLOR_ATTACHMENT0,ee,te);else Ce(B.__webglFramebuffer,N,M,t.COLOR_ATTACHMENT0,ee,0);p(M)&&x(ee),n.unbindTexture()}N.depthBuffer&&Xe(N)}function $(N){const M=N.textures;for(let B=0,H=M.length;B<H;B++){const Q=M[B];if(p(Q)){const me=y(N),ue=i.get(Q).__webglTexture;n.bindTexture(me,ue),x(me),n.unbindTexture()}}}const gt=[],At=[];function Ft(N){if(N.samples>0){if(St(N)===!1){const M=N.textures,B=N.width,H=N.height;let Q=t.COLOR_BUFFER_BIT;const me=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(N),ee=M.length>1;if(ee)for(let xe=0;xe<M.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const te=N.texture.mipmaps;te&&te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[xe]);const Ne=i.get(M[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,B,H,0,0,B,H,Q,t.NEAREST),l===!0&&(gt.length=0,At.length=0,gt.push(t.COLOR_ATTACHMENT0+xe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(gt.push(me),At.push(me),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,At)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,gt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let xe=0;xe<M.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[xe]);const Ne=i.get(M[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const M=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Qe(N){return Math.min(r.maxSamples,N.samples)}function St(N){const M=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(N){const M=a.render.frame;u.get(N)!==M&&(u.set(N,M),N.update())}function Jt(N,M){const B=N.colorSpace,H=N.format,Q=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||B!==kh&&B!==oa&&(ht.getTransfer(B)===wt?(H!==Tr||Q!==lr)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",B)),M}function Ye(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.getTextureUnits=Y,this.setTextureUnits=k,this.setTexture2D=I,this.setTexture2DArray=W,this.setTexture3D=P,this.setTextureCube=ie,this.rebindTextures=Ze,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kU(t,e){function n(i,r=oa){let s;const a=ht.getTransfer(r);if(i===lr)return t.UNSIGNED_BYTE;if(i===dv)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hv)return t.UNSIGNED_SHORT_5_5_5_1;if(i===mw)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===gw)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===hw)return t.BYTE;if(i===pw)return t.SHORT;if(i===qu)return t.UNSIGNED_SHORT;if(i===fv)return t.INT;if(i===ss)return t.UNSIGNED_INT;if(i===Kr)return t.FLOAT;if(i===Os)return t.HALF_FLOAT;if(i===_w)return t.ALPHA;if(i===xw)return t.RGB;if(i===Tr)return t.RGBA;if(i===ks)return t.DEPTH_COMPONENT;if(i===fo)return t.DEPTH_STENCIL;if(i===vw)return t.RED;if(i===pv)return t.RED_INTEGER;if(i===Lo)return t.RG;if(i===mv)return t.RG_INTEGER;if(i===gv)return t.RGBA_INTEGER;if(i===Wd||i===jd||i===Xd||i===$d)if(a===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wd)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$d)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wd)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jd)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xd)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$d)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kg||i===Zg||i===Qg||i===Jg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qg)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===e_||i===t_||i===n_||i===i_||i===r_||i===Uh||i===s_)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===e_||i===t_)return a===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===n_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===i_)return s.COMPRESSED_R11_EAC;if(i===r_)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Uh)return s.COMPRESSED_RG11_EAC;if(i===s_)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===a_||i===o_||i===l_||i===c_||i===u_||i===f_||i===d_||i===h_||i===p_||i===m_||i===g_||i===__||i===x_||i===v_)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===a_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===o_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===l_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===c_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===u_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===f_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===d_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===h_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===p_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===m_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===g_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===__)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===x_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===v_)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===y_||i===S_||i===E_)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===y_)return a===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===S_)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===E_)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===M_||i===b_||i===Oh||i===w_)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===M_)return s.COMPRESSED_RED_RGTC1_EXT;if(i===b_)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===w_)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ku?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const zU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Rw(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Nr({vertexShader:zU,fragmentShader:BU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new as(new df(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HU extends Bo{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new VU,p={},x=n.getContextAttributes();let y=null,v=null;const b=[],T=[],w=new yt;let S=null;const A=new br;A.viewport=new zt;const R=new br;R.viewport=new zt;const D=[A,R],L=new QI;let G=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=b[Z];return oe===void 0&&(oe=new wm,b[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=b[Z];return oe===void 0&&(oe=new wm,b[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=b[Z];return oe===void 0&&(oe=new wm,b[Z]=oe),oe.getHandSpace()};function k(Z){const oe=T.indexOf(Z.inputSource);if(oe===-1)return;const ae=b[oe];ae!==void 0&&(ae.update(Z.inputSource,Z.frame,c||a),ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",U);for(let Z=0;Z<b.length;Z++){const oe=T[Z];oe!==null&&(T[Z]=null,b[Z].disconnect(oe))}G=null,Y=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(y),h=null,f=null,d=null,r=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",X),r.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,De=null,je=null;x.depth&&(je=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=x.stencil?fo:ks,De=x.stencil?Ku:ss);const Ce={colorFormat:n.RGBA8,depthFormat:je,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ns(f.textureWidth,f.textureHeight,{format:Tr,type:lr,depthTexture:new oc(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new ns(h.framebufferWidth,h.framebufferHeight,{format:Tr,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(Z){for(let oe=0;oe<Z.removed.length;oe++){const ae=Z.removed[oe],De=T.indexOf(ae);De>=0&&(T[De]=null,b[De].disconnect(ae))}for(let oe=0;oe<Z.added.length;oe++){const ae=Z.added[oe];let De=T.indexOf(ae);if(De===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=T.length){T.push(ae),De=Ce;break}else if(T[Ce]===null){T[Ce]=ae,De=Ce;break}if(De===-1)break}const je=b[De];je&&je.connect(ae)}}const I=new K,W=new K;function P(Z,oe,ae){I.setFromMatrixPosition(oe.matrixWorld),W.setFromMatrixPosition(ae.matrixWorld);const De=I.distanceTo(W),je=oe.projectionMatrix.elements,Ce=ae.projectionMatrix.elements,ct=je[14]/(je[10]-1),Te=je[14]/(je[10]+1),Xe=(je[9]+1)/je[5],Ze=(je[9]-1)/je[5],qe=(je[8]-1)/je[0],$=(Ce[8]+1)/Ce[0],gt=ct*qe,At=ct*$,Ft=De/(-qe+$),Qe=Ft*-qe;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Qe),Z.translateZ(Ft),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),je[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const St=ct+Ft,O=Te+Ft,Jt=gt-Qe,Ye=At+(De-Qe),N=Xe*Te/O*St,M=Ze*Te/O*St;Z.projectionMatrix.makePerspective(Jt,Ye,N,M,St,O),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let oe=Z.near,ae=Z.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),L.near=R.near=A.near=oe,L.far=R.far=A.far=ae,(G!==L.near||Y!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),G=L.near,Y=L.far),L.layers.mask=Z.layers.mask|6,A.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;const De=Z.parent,je=L.cameras;ie(L,De);for(let Ce=0;Ce<je.length;Ce++)ie(je[Ce],De);je.length===2?P(L,A,R):L.projectionMatrix.copy(A.projectionMatrix),fe(Z,L,De)};function fe(Z,oe,ae){ae===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=T_*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Z){return p[Z]};let $e=null;function Ge(Z,oe){if(u=oe.getViewerPose(c||a),g=oe,u!==null){const ae=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let De=!1;ae.length!==L.cameras.length&&(L.cameras.length=0,De=!0);for(let Te=0;Te<ae.length;Te++){const Xe=ae[Te];let Ze=null;if(h!==null)Ze=h.getViewport(Xe);else{const $=d.getViewSubImage(f,Xe);Ze=$.viewport,Te===0&&(e.setRenderTargetTextures(v,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(v))}let qe=D[Te];qe===void 0&&(qe=new br,qe.layers.enable(Te),qe.viewport=new zt,D[Te]=qe),qe.matrix.fromArray(Xe.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Xe.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Te===0&&(L.matrix.copy(qe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),De===!0&&L.cameras.push(qe)}const je=r.enabledFeatures;if(je&&je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const Te=d.getDepthInformation(ae[0]);Te&&Te.isValid&&Te.texture&&m.init(Te,r.renderState)}if(je&&je.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Te=0;Te<ae.length;Te++){const Xe=ae[Te].camera;if(Xe){let Ze=p[Xe];Ze||(Ze=new Rw,p[Xe]=Ze);const qe=d.getCameraImage(Xe);Ze.sourceTexture=qe}}}}for(let ae=0;ae<b.length;ae++){const De=T[ae],je=b[ae];De!==null&&je!==void 0&&je.update(De,oe,c||a)}$e&&$e(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const We=new Dw;We.setAnimationLoop(Ge),this.setAnimationLoop=function(Z){$e=Z},this.dispose=function(){}}}const GU=new xn,zw=new et;zw.set(-1,0,0,0,1,0,0,0,1);function WU(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Pw(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ri&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ri&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(GU.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zw),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ri&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jU(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const T=b.program;i.uniformBlockBinding(v,T)}function c(v,b){let T=r[v.id];T===void 0&&(m(v),T=u(v),r[v.id]=T,v.addEventListener("dispose",x));const w=b.program;i.updateUBOMapping(v,w);const S=e.render.frame;s[v.id]!==S&&(f(v),s[v.id]=S)}function u(v){const b=d();v.__bindingPointIndex=b;const T=t.createBuffer(),w=v.__size,S=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,w,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,T),T}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const b=r[v.id],T=v.uniforms,w=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let S=0,A=T.length;S<A;S++){const R=T[S];if(Array.isArray(R))for(let D=0,L=R.length;D<L;D++)h(R[D],S,D,w);else h(R,S,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(v,b,T,w){if(_(v,b,T,w)===!0){const S=v.__offset,A=v.value;if(Array.isArray(A)){let R=0;for(let D=0;D<A.length;D++){const L=A[D],G=p(L);g(L,v.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,v.__data)}}function g(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function _(v,b,T,w){const S=v.value,A=b+"_"+T;if(w[A]===void 0)return typeof S=="number"||typeof S=="boolean"?w[A]=S:ArrayBuffer.isView(S)?w[A]=S.slice():w[A]=S.clone(),!0;{const R=w[A];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return w[A]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function m(v){const b=v.uniforms;let T=0;const w=16;for(let A=0,R=b.length;A<R;A++){const D=Array.isArray(b[A])?b[A]:[b[A]];for(let L=0,G=D.length;L<G;L++){const Y=D[L],k=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,U=k.length;X<U;X++){const I=k[X],W=p(I),P=T%w,ie=P%W.boundary,fe=P+ie;T+=ie,fe!==0&&w-fe<W.storage&&(T+=w-fe),Y.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=T,T+=W.storage}}}const S=T%w;return S>0&&(T+=w-S),v.__size=T,v.__cache={},this}function p(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",v),b}function x(v){const b=v.target;b.removeEventListener("dispose",x);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function y(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:y}}const XU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ur=null;function $U(){return Ur===null&&(Ur=new kI(XU,16,16,Lo,Os),Ur.name="DFG_LUT",Ur.minFilter=Ln,Ur.magFilter=Ln,Ur.wrapS=Es,Ur.wrapT=Es,Ur.generateMipmaps=!1,Ur.needsUpdate=!0),Ur}class YU{constructor(e={}){const{canvas:n=pI(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=lr}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=h,m=new Set([gv,mv,pv]),p=new Set([lr,ss,qu,Ku,dv,hv]),x=new Uint32Array(4),y=new Int32Array(4),v=new K;let b=null,T=null;const w=[],S=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,L=null,G=null,Y=null,k=null;this._outputColorSpace=ir;let X=0,U=0,I=null,W=-1,P=null;const ie=new zt,fe=new zt;let $e=null;const Ge=new Mt(0);let We=0,Z=n.width,oe=n.height,ae=1,De=null,je=null;const Ce=new zt(0,0,Z,oe),ct=new zt(0,0,Z,oe);let Te=!1;const Xe=new Aw;let Ze=!1,qe=!1;const $=new xn,gt=new K,At=new zt,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function St(){return I===null?ae:1}let O=i;function Jt(C,z){return n.getContext(C,z)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uv}`),n.addEventListener("webglcontextlost",Ve,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",He,!1),O===null){const z="webgl2";if(O=Jt(z,C),O===null)throw Jt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw xt("WebGLRenderer: "+C.message),C}let Ye,N,M,B,H,Q,me,ue,ee,te,xe,Ne,ve,_e,pe,Fe,Be,F,ge,ne,ye,Se,re;function le(){Ye=new $F(O),Ye.init(),ye=new kU(O,Ye),N=new zF(O,Ye,e,ye),M=new UU(O,Ye),N.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),G=O.createFramebuffer(),Y=O.createFramebuffer(),k=O.createFramebuffer(),B=new KF(O),H=new EU,Q=new OU(O,Ye,M,H,N,ye,B),me=new XF(R),ue=new e5(O),Se=new OF(O,ue),ee=new YF(O,ue,B,Se),te=new QF(O,ee,ue,Se,B),F=new ZF(O,N,Q),pe=new BF(H),xe=new SU(R,me,Ye,N,Se,pe),Ne=new WU(R,H),ve=new bU,_e=new PU(Ye),Be=new UF(R,me,M,te,g,l),Fe=new FU(R,te,N),re=new jU(O,B,N,M),ge=new kF(O,Ye,B),ne=new qF(O,Ye,B),B.programs=xe.programs,R.capabilities=N,R.extensions=Ye,R.properties=H,R.renderLists=ve,R.shadowMap=Fe,R.state=M,R.info=B}le(),_!==lr&&(A=new e8(_,n.width,n.height,o,r,s));const se=new HU(R,O);this.xr=se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=Ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(C){C!==void 0&&(ae=C,this.setSize(Z,oe,!1))},this.getSize=function(C){return C.set(Z,oe)},this.setSize=function(C,z,q=!0){if(se.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=C,oe=z,n.width=Math.floor(C*ae),n.height=Math.floor(z*ae),q===!0&&(n.style.width=C+"px",n.style.height=z+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(Z*ae,oe*ae).floor()},this.setDrawingBufferSize=function(C,z,q){Z=C,oe=z,ae=q,n.width=Math.floor(C*q),n.height=Math.floor(z*q),this.setViewport(0,0,C,z)},this.setEffects=function(C){if(_===lr){xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let z=0;z<C.length;z++)if(C[z].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ie)},this.getViewport=function(C){return C.copy(Ce)},this.setViewport=function(C,z,q,V){C.isVector4?Ce.set(C.x,C.y,C.z,C.w):Ce.set(C,z,q,V),M.viewport(ie.copy(Ce).multiplyScalar(ae).round())},this.getScissor=function(C){return C.copy(ct)},this.setScissor=function(C,z,q,V){C.isVector4?ct.set(C.x,C.y,C.z,C.w):ct.set(C,z,q,V),M.scissor(fe.copy(ct).multiplyScalar(ae).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(C){M.setScissorTest(Te=C)},this.setOpaqueSort=function(C){De=C},this.setTransparentSort=function(C){je=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(C=!0,z=!0,q=!0){let V=0;if(C){let j=!1;if(I!==null){const Ee=I.texture.format;j=m.has(Ee)}if(j){const Ee=I.texture.type,Me=p.has(Ee),we=Be.getClearColor(),Ie=Be.getClearAlpha(),Oe=we.r,tt=we.g,it=we.b;Me?(x[0]=Oe,x[1]=tt,x[2]=it,x[3]=Ie,O.clearBufferuiv(O.COLOR,0,x)):(y[0]=Oe,y[1]=tt,y[2]=it,y[3]=Ie,O.clearBufferiv(O.COLOR,0,y))}else V|=O.COLOR_BUFFER_BIT}z&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),L=C},this.dispose=function(){n.removeEventListener("webglcontextlost",Ve,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",He,!1),Be.dispose(),ve.dispose(),_e.dispose(),H.dispose(),me.dispose(),te.dispose(),Se.dispose(),re.dispose(),xe.dispose(),se.dispose(),se.removeEventListener("sessionstart",Vt),se.removeEventListener("sessionend",Rt),dt.stop()};function Ve(C){C.preventDefault(),_2("WebGLRenderer: Context Lost."),D=!0}function ce(){_2("WebGLRenderer: Context Restored."),D=!1;const C=B.autoReset,z=Fe.enabled,q=Fe.autoUpdate,V=Fe.needsUpdate,j=Fe.type;le(),B.autoReset=C,Fe.enabled=z,Fe.autoUpdate=q,Fe.needsUpdate=V,Fe.type=j}function He(C){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Le(C){const z=C.target;z.removeEventListener("dispose",Le),Je(z)}function Je(C){fn(C),H.remove(C)}function fn(C){const z=H.get(C).programs;z!==void 0&&(z.forEach(function(q){xe.releaseProgram(q)}),C.isShaderMaterial&&xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,q,V,j,Ee){z===null&&(z=Ft);const Me=j.isMesh&&j.matrixWorld.determinantAffine()<0,we=Cn(C,z,q,V,j);M.setMaterial(V,Me);let Ie=q.index,Oe=1;if(V.wireframe===!0){if(Ie=ee.getWireframeAttribute(q),Ie===void 0)return;Oe=2}const tt=q.drawRange,it=q.attributes.position;let ze=tt.start*Oe,Ct=(tt.start+tt.count)*Oe;Ee!==null&&(ze=Math.max(ze,Ee.start*Oe),Ct=Math.min(Ct,(Ee.start+Ee.count)*Oe)),Ie!==null?(ze=Math.max(ze,0),Ct=Math.min(Ct,Ie.count)):it!=null&&(ze=Math.max(ze,0),Ct=Math.min(Ct,it.count));const an=Ct-ze;if(an<0||an===1/0)return;Se.setup(j,V,we,q,Ie);let tn,Pt=ge;if(Ie!==null&&(tn=ue.get(Ie),Pt=ne,Pt.setIndex(tn)),j.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*St()),Pt.setMode(O.LINES)):Pt.setMode(O.TRIANGLES);else if(j.isLine){let Gn=V.linewidth;Gn===void 0&&(Gn=1),M.setLineWidth(Gn*St()),j.isLineSegments?Pt.setMode(O.LINES):j.isLineLoop?Pt.setMode(O.LINE_LOOP):Pt.setMode(O.LINE_STRIP)}else j.isPoints?Pt.setMode(O.POINTS):j.isSprite&&Pt.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))Pt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Gn=j._multiDrawStarts,Ae=j._multiDrawCounts,Ni=j._multiDrawCount,_t=Ie?ue.get(Ie).bytesPerElement:1,er=H.get(V).currentProgram.getUniforms();for(let Lr=0;Lr<Ni;Lr++)er.setValue(O,"_gl_DrawID",Lr),Pt.render(Gn[Lr]/_t,Ae[Lr])}else if(j.isInstancedMesh)Pt.renderInstances(ze,an,j.count);else if(q.isInstancedBufferGeometry){const Gn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ae=Math.min(q.instanceCount,Gn);Pt.renderInstances(ze,an,Ae)}else Pt.render(ze,an)};function at(C,z,q){C.transparent===!0&&C.side===xs&&C.forceSinglePass===!1?(C.side=Ri,C.needsUpdate=!0,en(C,z,q),C.side=ka,C.needsUpdate=!0,en(C,z,q),C.side=xs):en(C,z,q)}this.compile=function(C,z,q=null){q===null&&(q=C),T=_e.get(q),T.init(z),S.push(T),q.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),C!==q&&C.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const V=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Me=0;Me<Ee.length;Me++){const we=Ee[Me];at(we,q,j),V.add(we)}else at(Ee,q,j),V.add(Ee)}),T=S.pop(),V},this.compileAsync=function(C,z,q=null){const V=this.compile(C,z,q);return new Promise(j=>{function Ee(){if(V.forEach(function(Me){H.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){j(C);return}setTimeout(Ee,10)}Ye.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Bt=null;function An(C){Bt&&Bt(C)}function Vt(){dt.stop()}function Rt(){dt.start()}const dt=new Dw;dt.setAnimationLoop(An),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(C){Bt=C,se.setAnimationLoop(C),C===null?dt.stop():dt.start()},se.addEventListener("sessionstart",Vt),se.addEventListener("sessionend",Rt),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(C,z);const q=se.enabled===!0&&se.isPresenting===!0,V=A!==null&&(I===null||q)&&A.begin(R,I);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(z),z=se.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,z,I),T=_e.get(C,S.length),T.init(z),T.state.textureUnits=Q.getTextureUnits(),S.push(T),$.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Xe.setFromProjectionMatrix($,Zr,z.reversedDepth),qe=this.localClippingEnabled,Ze=pe.init(this.clippingPlanes,qe),b=ve.get(C,w.length),b.init(),w.push(b),se.enabled===!0&&se.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&ii(Me,z,-1/0,R.sortObjects)}ii(C,z,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(De,je,z.reversedDepth),Qe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Qe&&Be.addToRenderList(b,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&pe.beginShadows();const j=T.state.shadowsArray;if(Fe.render(j,C,z),Ze===!0&&pe.endShadows(),(V&&A.hasRenderPass())===!1){const Me=b.opaque,we=b.transmissive;if(T.setupLights(),z.isArrayCamera){const Ie=z.cameras;if(we.length>0)for(let Oe=0,tt=Ie.length;Oe<tt;Oe++){const it=Ie[Oe];Hn(Me,we,C,it)}Qe&&Be.render(C);for(let Oe=0,tt=Ie.length;Oe<tt;Oe++){const it=Ie[Oe];Ut(b,C,it,it.viewport)}}else we.length>0&&Hn(Me,we,C,z),Qe&&Be.render(C),Ut(b,C,z)}I!==null&&U===0&&(Q.updateMultisampleRenderTarget(I),Q.updateRenderTargetMipmap(I)),V&&A.end(R),C.isScene===!0&&C.onAfterRender(R,C,z),Se.resetDefaultState(),W=-1,P=null,S.pop(),S.length>0?(T=S[S.length-1],Q.setTextureUnits(T.state.textureUnits),Ze===!0&&pe.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?b=w[w.length-1]:b=null,L!==null&&L.renderEnd()};function ii(C,z,q,V){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Xe.intersectsSprite(C)){V&&At.setFromMatrixPosition(C.matrixWorld).applyMatrix4($);const Me=te.update(C),we=C.material;we.visible&&b.push(C,Me,we,q,At.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Xe.intersectsObject(C))){const Me=te.update(C),we=C.material;if(V&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),At.copy(C.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),At.copy(Me.boundingSphere.center)),At.applyMatrix4(C.matrixWorld).applyMatrix4($)),Array.isArray(we)){const Ie=Me.groups;for(let Oe=0,tt=Ie.length;Oe<tt;Oe++){const it=Ie[Oe],ze=we[it.materialIndex];ze&&ze.visible&&b.push(C,Me,ze,q,At.z,it)}}else we.visible&&b.push(C,Me,we,q,At.z,null)}}const Ee=C.children;for(let Me=0,we=Ee.length;Me<we;Me++)ii(Ee[Me],z,q,V)}function Ut(C,z,q,V){const{opaque:j,transmissive:Ee,transparent:Me}=C;T.setupLightsView(q),Ze===!0&&pe.setGlobalState(R.clippingPlanes,q),V&&M.viewport(ie.copy(V)),j.length>0&&ri(j,z,q),Ee.length>0&&ri(Ee,z,q),Me.length>0&&ri(Me,z,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Hn(C,z,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const ze=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new ns(1,1,{generateMipmaps:!0,type:ze?Os:lr,minFilter:uo,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const Ee=T.state.transmissionRenderTarget[V.id],Me=V.viewport||ie;Ee.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);const we=R.getRenderTarget(),Ie=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(Ee),R.getClearColor(Ge),We=R.getClearAlpha(),We<1&&R.setClearColor(16777215,.5),R.clear(),Qe&&Be.render(q);const tt=R.toneMapping;R.toneMapping=ts;const it=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Ze===!0&&pe.setGlobalState(R.clippingPlanes,V),ri(C,q,V),Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ct=0,an=z.length;Ct<an;Ct++){const tn=z[Ct],{object:Pt,geometry:Gn,material:Ae,group:Ni}=tn;if(Ae.side===xs&&Pt.layers.test(V.layers)){const _t=Ae.side;Ae.side=Ri,Ae.needsUpdate=!0,dn(Pt,q,V,Gn,Ae,Ni),Ae.side=_t,Ae.needsUpdate=!0,ze=!0}}ze===!0&&(Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee))}R.setRenderTarget(we,Ie,Oe),R.setClearColor(Ge,We),it!==void 0&&(V.viewport=it),R.toneMapping=tt}function ri(C,z,q){const V=z.isScene===!0?z.overrideMaterial:null;for(let j=0,Ee=C.length;j<Ee;j++){const Me=C[j],{object:we,geometry:Ie,group:Oe}=Me;let tt=Me.material;tt.allowOverride===!0&&V!==null&&(tt=V),we.layers.test(q.layers)&&dn(we,z,q,Ie,tt,Oe)}}function dn(C,z,q,V,j,Ee){C.onBeforeRender(R,z,q,V,j,Ee),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(R,z,q,V,C,Ee),j.transparent===!0&&j.side===xs&&j.forceSinglePass===!1?(j.side=Ri,j.needsUpdate=!0,R.renderBufferDirect(q,z,V,j,C,Ee),j.side=ka,j.needsUpdate=!0,R.renderBufferDirect(q,z,V,j,C,Ee),j.side=xs):R.renderBufferDirect(q,z,V,j,C,Ee),C.onAfterRender(R,z,q,V,j,Ee)}function en(C,z,q){z.isScene!==!0&&(z=Ft);const V=H.get(C),j=T.state.lights,Ee=T.state.shadowsArray,Me=j.state.version,we=xe.getParameters(C,j.state,Ee,z,q,T.state.lightProbeGridArray),Ie=xe.getProgramCacheKey(we);let Oe=V.programs;V.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?z.environment:null,V.fog=z.fog;const tt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;V.envMap=me.get(C.envMap||V.environment,tt),V.envMapRotation=V.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,Oe===void 0&&(C.addEventListener("dispose",Le),Oe=new Map,V.programs=Oe);let it=Oe.get(Ie);if(it!==void 0){if(V.currentProgram===it&&V.lightsStateVersion===Me)return Dr(C,we),it}else we.uniforms=xe.getUniforms(C),L!==null&&C.isNodeMaterial&&L.build(C,q,we),C.onBeforeCompile(we,R),it=xe.acquireProgram(we,Ie),Oe.set(Ie,it),V.uniforms=we.uniforms;const ze=V.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=pe.uniform),Dr(C,we),V.needsLights=Ji(C),V.lightsStateVersion=Me,V.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=it,V.uniformsList=null,it}function vn(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=Yd.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function Dr(C,z){const q=H.get(C);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Vo(C,z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let q=0,V=C.length;q<V;q++){const j=C[q];if(j.texture!==null&&j.boundingBox.containsPoint(v))return j}return null}function Cn(C,z,q,V,j){z.isScene!==!0&&(z=Ft),Q.resetTextureUnits();const Ee=z.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?z.environment:null,we=I===null?R.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ht.workingColorSpace,Ie=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Oe=me.get(V.envMap||Me,Ie),tt=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,it=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ze=!!q.morphAttributes.position,Ct=!!q.morphAttributes.normal,an=!!q.morphAttributes.color;let tn=ts;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(tn=R.toneMapping);const Pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Gn=Pt!==void 0?Pt.length:0,Ae=H.get(V),Ni=T.state.lights;if(Ze===!0&&(qe===!0||C!==P)){const Ot=C===P&&V.id===W;pe.setState(V,C,Ot)}let _t=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ni.state.version||Ae.outputColorSpace!==we||j.isBatchedMesh&&Ae.batching===!1||!j.isBatchedMesh&&Ae.batching===!0||j.isBatchedMesh&&Ae.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ae.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ae.instancing===!1||!j.isInstancedMesh&&Ae.instancing===!0||j.isSkinnedMesh&&Ae.skinning===!1||!j.isSkinnedMesh&&Ae.skinning===!0||j.isInstancedMesh&&Ae.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ae.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ae.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ae.instancingMorph===!1&&j.morphTexture!==null||Ae.envMap!==Oe||V.fog===!0&&Ae.fog!==Ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==pe.numPlanes||Ae.numIntersection!==pe.numIntersection)||Ae.vertexAlphas!==tt||Ae.vertexTangents!==it||Ae.morphTargets!==ze||Ae.morphNormals!==Ct||Ae.morphColors!==an||Ae.toneMapping!==tn||Ae.morphTargetsCount!==Gn||!!Ae.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ae.__version=V.version);let er=Ae.currentProgram;_t===!0&&(er=en(V,z,j),L&&V.isNodeMaterial&&L.onUpdateProgram(V,er,Ae));let Lr=!1,Hs=!1,Ho=!1;const Nt=er.getUniforms(),on=Ae.uniforms;if(M.useProgram(er.program)&&(Lr=!0,Hs=!0,Ho=!0),V.id!==W&&(W=V.id,Hs=!0),Ae.needsLights){const Ot=Vo(T.state.lightProbeGridArray,j);Ae.lightProbeGrid!==Ot&&(Ae.lightProbeGrid=Ot,Hs=!0)}if(Lr||P!==C){M.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Nt.setValue(O,"projectionMatrix",C.projectionMatrix),Nt.setValue(O,"viewMatrix",C.matrixWorldInverse);const Ws=Nt.map.cameraPosition;Ws!==void 0&&Ws.setValue(O,gt.setFromMatrixPosition(C.matrixWorld)),N.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),P!==C&&(P=C,Hs=!0,Ho=!0)}if(Ae.needsLights&&(Ni.state.directionalShadowMap.length>0&&Nt.setValue(O,"directionalShadowMap",Ni.state.directionalShadowMap,Q),Ni.state.spotShadowMap.length>0&&Nt.setValue(O,"spotShadowMap",Ni.state.spotShadowMap,Q),Ni.state.pointShadowMap.length>0&&Nt.setValue(O,"pointShadowMap",Ni.state.pointShadowMap,Q)),j.isSkinnedMesh){Nt.setOptional(O,j,"bindMatrix"),Nt.setOptional(O,j,"bindMatrixInverse");const Ot=j.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Nt.setValue(O,"boneTexture",Ot.boneTexture,Q))}j.isBatchedMesh&&(Nt.setOptional(O,j,"batchingTexture"),Nt.setValue(O,"batchingTexture",j._matricesTexture,Q),Nt.setOptional(O,j,"batchingIdTexture"),Nt.setValue(O,"batchingIdTexture",j._indirectTexture,Q),Nt.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&Nt.setValue(O,"batchingColorTexture",j._colorsTexture,Q));const Gs=q.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&F.update(j,q,er),(Hs||Ae.receiveShadow!==j.receiveShadow)&&(Ae.receiveShadow=j.receiveShadow,Nt.setValue(O,"receiveShadow",j.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&z.environment!==null&&(on.envMapIntensity.value=z.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=$U()),Hs){if(Nt.setValue(O,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&sn(on,Ho),Ee&&V.fog===!0&&Ne.refreshFogUniforms(on,Ee),Ne.refreshMaterialUniforms(on,V,ae,oe,T.state.transmissionRenderTarget[C.id]),Ae.needsLights&&Ae.lightProbeGrid){const Ot=Ae.lightProbeGrid;on.probesSH.value=Ot.texture,on.probesMin.value.copy(Ot.boundingBox.min),on.probesMax.value.copy(Ot.boundingBox.max),on.probesResolution.value.copy(Ot.resolution)}Yd.upload(O,vn(Ae),on,Q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Yd.upload(O,vn(Ae),on,Q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Nt.setValue(O,"center",j.center),Nt.setValue(O,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(O,"normalMatrix",j.normalMatrix),Nt.setValue(O,"modelMatrix",j.matrixWorld),V.uniformsGroups!==void 0){const Ot=V.uniformsGroups;for(let Ws=0,Go=Ot.length;Ws<Go;Ws++){const Av=Ot[Ws];re.update(Av,er),re.bind(Av,er)}}return er}function sn(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Ji(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,z,q){const V=H.get(C);V.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),H.get(C.texture).__webglTexture=z,H.get(C.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,z){const q=H.get(C);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,q=0){I=C,X=z,U=q;let V=null,j=!1,Ee=!1;if(C){const we=H.get(C);if(we.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(O.FRAMEBUFFER,we.__webglFramebuffer),ie.copy(C.viewport),fe.copy(C.scissor),$e=C.scissorTest,M.viewport(ie),M.scissor(fe),M.setScissorTest($e),W=-1;return}else if(we.__webglFramebuffer===void 0)Q.setupRenderTarget(C);else if(we.__hasExternalTextures)Q.rebindTextures(C,H.get(C.texture).__webglTexture,H.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const tt=C.depthTexture;if(we.__boundDepthTexture!==tt){if(tt!==null&&H.has(tt)&&(C.width!==tt.image.width||C.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(C)}}const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);const Oe=H.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?V=Oe[z][q]:V=Oe[z],j=!0):C.samples>0&&Q.useMultisampledRTT(C)===!1?V=H.get(C).__webglMultisampledFramebuffer:Array.isArray(Oe)?V=Oe[q]:V=Oe,ie.copy(C.viewport),fe.copy(C.scissor),$e=C.scissorTest}else ie.copy(Ce).multiplyScalar(ae).floor(),fe.copy(ct).multiplyScalar(ae).floor(),$e=Te;if(q!==0&&(V=G),M.bindFramebuffer(O.FRAMEBUFFER,V)&&M.drawBuffers(C,V),M.viewport(ie),M.scissor(fe),M.setScissorTest($e),j){const we=H.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,q)}else if(Ee){const we=z;for(let Ie=0;Ie<C.textures.length;Ie++){const Oe=H.get(C.textures[Ie]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,q,we)}}else if(C!==null&&q!==0){const we=H.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,we.__webglTexture,q)}W=-1},this.readRenderTargetPixels=function(C,z,q,V,j,Ee,Me,we=0){if(!(C&&C.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=H.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie){M.bindFramebuffer(O.FRAMEBUFFER,Ie);try{const Oe=C.textures[we],tt=Oe.format,it=Oe.type;if(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+we),!N.textureFormatReadable(tt)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(it)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-V&&q>=0&&q<=C.height-j&&O.readPixels(z,q,V,j,ye.convert(tt),ye.convert(it),Ee)}finally{const Oe=I!==null?H.get(I).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(C,z,q,V,j,Ee,Me,we=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=H.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie)if(z>=0&&z<=C.width-V&&q>=0&&q<=C.height-j){M.bindFramebuffer(O.FRAMEBUFFER,Ie);const Oe=C.textures[we],tt=Oe.format,it=Oe.type;if(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+we),!N.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.bufferData(O.PIXEL_PACK_BUFFER,Ee.byteLength,O.STREAM_READ),O.readPixels(z,q,V,j,ye.convert(tt),ye.convert(it),0);const Ct=I!==null?H.get(I).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Ct);const an=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await mI(O,an,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ee),O.deleteBuffer(ze),O.deleteSync(an),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,z=null,q=0){const V=Math.pow(2,-q),j=Math.floor(C.image.width*V),Ee=Math.floor(C.image.height*V),Me=z!==null?z.x:0,we=z!==null?z.y:0;Q.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Me,we,j,Ee),M.unbindTexture()},this.copyTextureToTexture=function(C,z,q=null,V=null,j=0,Ee=0){let Me,we,Ie,Oe,tt,it,ze,Ct,an;const tn=C.isCompressedTexture?C.mipmaps[Ee]:C.image;if(q!==null)Me=q.max.x-q.min.x,we=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,Oe=q.min.x,tt=q.min.y,it=q.isBox3?q.min.z:0;else{const on=Math.pow(2,-j);Me=Math.floor(tn.width*on),we=Math.floor(tn.height*on),C.isDataArrayTexture?Ie=tn.depth:C.isData3DTexture?Ie=Math.floor(tn.depth*on):Ie=1,Oe=0,tt=0,it=0}V!==null?(ze=V.x,Ct=V.y,an=V.z):(ze=0,Ct=0,an=0);const Pt=ye.convert(z.format),Gn=ye.convert(z.type);let Ae;z.isData3DTexture?(Q.setTexture3D(z,0),Ae=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Q.setTexture2DArray(z,0),Ae=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(z,0),Ae=O.TEXTURE_2D),M.activeTexture(O.TEXTURE0),M.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),M.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),M.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Ni=M.getParameter(O.UNPACK_ROW_LENGTH),_t=M.getParameter(O.UNPACK_IMAGE_HEIGHT),er=M.getParameter(O.UNPACK_SKIP_PIXELS),Lr=M.getParameter(O.UNPACK_SKIP_ROWS),Hs=M.getParameter(O.UNPACK_SKIP_IMAGES);M.pixelStorei(O.UNPACK_ROW_LENGTH,tn.width),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tn.height),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Oe),M.pixelStorei(O.UNPACK_SKIP_ROWS,tt),M.pixelStorei(O.UNPACK_SKIP_IMAGES,it);const Ho=C.isDataArrayTexture||C.isData3DTexture,Nt=z.isDataArrayTexture||z.isData3DTexture;if(C.isDepthTexture){const on=H.get(C),Gs=H.get(z),Ot=H.get(on.__renderTarget),Ws=H.get(Gs.__renderTarget);M.bindFramebuffer(O.READ_FRAMEBUFFER,Ot.__webglFramebuffer),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Go=0;Go<Ie;Go++)Ho&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(C).__webglTexture,j,it+Go),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(z).__webglTexture,Ee,an+Go)),O.blitFramebuffer(Oe,tt,Me,we,ze,Ct,Me,we,O.DEPTH_BUFFER_BIT,O.NEAREST);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||H.has(C)){const on=H.get(C),Gs=H.get(z);M.bindFramebuffer(O.READ_FRAMEBUFFER,Y),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let Ot=0;Ot<Ie;Ot++)Ho?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,on.__webglTexture,j,it+Ot):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,on.__webglTexture,j),Nt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Gs.__webglTexture,Ee,an+Ot):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Gs.__webglTexture,Ee),j!==0?O.blitFramebuffer(Oe,tt,Me,we,ze,Ct,Me,we,O.COLOR_BUFFER_BIT,O.NEAREST):Nt?O.copyTexSubImage3D(Ae,Ee,ze,Ct,an+Ot,Oe,tt,Me,we):O.copyTexSubImage2D(Ae,Ee,ze,Ct,Oe,tt,Me,we);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Nt?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Ae,Ee,ze,Ct,an,Me,we,Ie,Pt,Gn,tn.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,Ee,ze,Ct,an,Me,we,Ie,Pt,tn.data):O.texSubImage3D(Ae,Ee,ze,Ct,an,Me,we,Ie,Pt,Gn,tn):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ee,ze,Ct,Me,we,Pt,Gn,tn.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ee,ze,Ct,tn.width,tn.height,Pt,tn.data):O.texSubImage2D(O.TEXTURE_2D,Ee,ze,Ct,Me,we,Pt,Gn,tn);M.pixelStorei(O.UNPACK_ROW_LENGTH,Ni),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t),M.pixelStorei(O.UNPACK_SKIP_PIXELS,er),M.pixelStorei(O.UNPACK_SKIP_ROWS,Lr),M.pixelStorei(O.UNPACK_SKIP_IMAGES,Hs),Ee===0&&z.generateMipmaps&&O.generateMipmap(Ae),M.unbindTexture()},this.initRenderTarget=function(C){H.get(C).__webglFramebuffer===void 0&&Q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Q.setTextureCube(C,0):C.isData3DTexture?Q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Q.setTexture2DArray(C,0):Q.setTexture2D(C,0),M.unbindTexture()},this.resetState=function(){X=0,U=0,I=null,M.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),n.unpackColorSpace=ht._getUnpackColorSpace()}}const qU={MAX_PIXEL_RATIO:2},fl={SLOT_COUNT:4,DECAY_RATE:1.1,RING_FREQUENCY:7,RING_SPEED_MUL:9,DIST_FALLOFF:2.2,AMPLITUDE:1.8},md={DIST_FALLOFF:2.5,FREQUENCY:9,SPEED_MUL:5,AMPLITUDE:1.2},gd={LINE_WIDTH:.24,AA_BASE:.015,AA_DENSITY_SCALE:.005,WAVE_SCALE:.5},aS={EDGE_LO:.38,EDGE_HI:.62},Ym={BG:[0,0,0],FILL:[.91,.376,.18],LINE:[1,1,1]},KU=[{amp:1,fx:2.4,fy:.9,ts:1.15,phase:0},{amp:.82,fx:-1.3,fy:2.6,ts:-.87,phase:Math.PI/2},{amp:.65,fx:1.7,fy:-2,ts:1.41,phase:Math.PI},{amp:.7,fx:-2.8,fy:-1.2,ts:-.66,phase:.8},{amp:.5,fx:.9,fy:3.1,ts:1.05,phase:2.3},{amp:.38,fx:3.2,fy:.7,ts:-1.23,phase:4.7},{amp:.3,fx:-1,fy:-2.4,ts:1.56,phase:5.5},{amp:.28,fx:2.1,fy:1.7,ts:.54,phase:1.1}],ZU=[{amp:.35,fx:5.6,fy:4.4,ts:1.1,hFold:.8},{amp:.18,fx:8.3,fy:-7,ts:-.9,hFold:1.3},{amp:.1,fx:12,fy:9.5,ts:1.6,hFold:1.8}],ai=t=>Number.isInteger(t)?t.toFixed(1):String(t),Wr=t=>t.toFixed(4);function QU(t){const e=t.phase!==0?` + ${Wr(t.phase)}`:"";return`        h += ${Wr(t.amp)} * sin(${Wr(t.fx)}*p.x + ${Wr(t.fy)}*p.y + t*${Wr(t.ts)}${e});`}function JU(t){return`          h += uTurb * ${Wr(t.amp)} * sin(${Wr(t.fx)}*p.x + ${Wr(t.fy)}*p.y + t*${Wr(t.ts)} + h*${Wr(t.hFold)});`}const eO=`
  precision highp float;

  uniform float     uTime;
  uniform vec2      uRes;
  uniform vec2      uMouse;
  uniform float     uDensity;
  uniform float     uSpeed;
  uniform float     uTurb;
  uniform sampler2D uMask;
  uniform vec4      uR0, uR1, uR2, uR3;

  const vec3 COLOR_BG   = vec3(${Ym.BG.map(t=>t.toFixed(3)).join(", ")});
  const vec3 COLOR_FILL = vec3(${Ym.FILL.map(t=>t.toFixed(3)).join(", ")});
  const vec3 COLOR_LINE = vec3(${Ym.LINE.map(t=>t.toFixed(3)).join(", ")});

  const float MASK_EDGE_LO = ${ai(aS.EDGE_LO)};
  const float MASK_EDGE_HI = ${ai(aS.EDGE_HI)};

  const float RIPPLE_DECAY_RATE   = ${ai(fl.DECAY_RATE)};
  const float RIPPLE_RING_FREQ    = ${ai(fl.RING_FREQUENCY)};
  const float RIPPLE_RING_SPEED   = ${ai(fl.RING_SPEED_MUL)};
  const float RIPPLE_DIST_FALLOFF = ${ai(fl.DIST_FALLOFF)};
  const float RIPPLE_AMPLITUDE    = ${ai(fl.AMPLITUDE)};

  const float SWELL_DIST_FALLOFF = ${ai(md.DIST_FALLOFF)};
  const float SWELL_FREQUENCY    = ${ai(md.FREQUENCY)};
  const float SWELL_SPEED_MUL    = ${ai(md.SPEED_MUL)};
  const float SWELL_AMPLITUDE    = ${ai(md.AMPLITUDE)};

  const float CONTOUR_LINE_WIDTH   = ${ai(gd.LINE_WIDTH)};
  const float CONTOUR_AA_BASE      = ${ai(gd.AA_BASE)};
  const float CONTOUR_AA_DENSITY   = ${ai(gd.AA_DENSITY_SCALE)};
  const float CONTOUR_WAVE_SCALE   = ${ai(gd.WAVE_SCALE)};

  float tri(float x) {
    return abs(fract(x + 0.5) - 0.5) * 2.0;
  }

  float ripple(vec4 r, vec2 uv, float t) {
    if (r.z < 0.0) return 0.0;
    float age       = t - r.z;
    float decay     = exp(-age * RIPPLE_DECAY_RATE);
    float ar        = uRes.x / uRes.y;
    vec2  delta     = (uv - r.xy) * vec2(ar, 1.0);
    float dist      = length(delta);
    float ringPhase = dist * RIPPLE_RING_FREQ - age * uSpeed * RIPPLE_RING_SPEED;
    return decay * sin(ringPhase) * exp(-dist * RIPPLE_DIST_FALLOFF) * RIPPLE_AMPLITUDE;
  }

  void main() {
    vec2  uv = gl_FragCoord.xy / uRes;
    float ar = uRes.x / uRes.y;
    vec2  p  = vec2(uv.x * ar, uv.y);
    float t  = uTime * uSpeed;

    float insideMask = texture2D(uMask, uv).r;
    float mask       = smoothstep(MASK_EDGE_LO, MASK_EDGE_HI, insideMask);

    if (mask < 0.001) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      return;
    }

    float h = 0.0;
${KU.map(QU).join(`
`)}

    if (uTurb > 0.0) {
${ZU.map(JU).join(`
`)}
    }

    vec2  swellDelta = (uv - uMouse) * vec2(ar, 1.0);
    float swellDist  = length(swellDelta);
    h += SWELL_AMPLITUDE
       * exp(-swellDist * SWELL_DIST_FALLOFF)
       * sin(swellDist * SWELL_FREQUENCY - t * SWELL_SPEED_MUL);

    h += ripple(uR0, uv, uTime);
    h += ripple(uR1, uv, uTime);
    h += ripple(uR2, uv, uTime);
    h += ripple(uR3, uv, uTime);

    float bands     = tri(h * uDensity * CONTOUR_WAVE_SCALE);
    float aaRadius  = CONTOUR_AA_BASE + CONTOUR_AA_DENSITY * uDensity;
    float isOnLine  = 1.0 - smoothstep(CONTOUR_LINE_WIDTH - aaRadius, CONTOUR_LINE_WIDTH + aaRadius, bands);
    
    // Mix Fiery Orange fill with White topographical contour lines
    vec3  fluidColor = mix(COLOR_FILL, COLOR_LINE, isOnLine);

    // Alpha mask blend
    gl_FragColor = vec4(fluidColor, mask);
  }
`;function tO({line1:t="Discover What",line2:e="Fits You Best",density:n=8.5,speed:i=28,turb:r=45}){const s=J.useRef(null),a=J.useRef(null),o=J.useRef(null),l=J.useRef(0),c=J.useRef(document.createElement("canvas")),u=(d,f)=>{const h=Math.max(d,320),g=Math.max(f,120),_=c.current;_.width=h,_.height=g;const m=_.getContext("2d");m.fillStyle="#000",m.fillRect(0,0,h,g);const p=h<640,x=h<1024;if(m.fillStyle="#fff",m.textAlign="center",m.textBaseline="middle",p){const y=Math.min(h*.12,g*.38);m.font=`900 ${y}px "Outfit", "Inter", "Arial Black", sans-serif`,m.fillText(t.toUpperCase(),h/2,g*.32),m.fillText(e.toUpperCase(),h/2,g*.72)}else if(x){const y=Math.min(h*.09,g*.42);m.font=`900 ${y}px "Outfit", "Inter", "Arial Black", sans-serif`,m.fillText(t.toUpperCase(),h/2,g*.32),m.fillText(e.toUpperCase(),h/2,g*.72)}else{const y=`${t} ${e}`.toUpperCase(),v=Math.min(h*.075,g*.65);m.font=`900 ${v}px "Outfit", "Inter", "Arial Black", sans-serif`,m.fillText(y,h/2,g/2)}o.current?(o.current.image=_,o.current.needsUpdate=!0):(o.current=new HI(_),o.current.minFilter=Ln,o.current.magFilter=Ln)};return J.useEffect(()=>{if(!s.current)return;const d=s.current;let f=d.clientWidth||window.innerWidth,h=d.clientHeight||180;u(f,h);const g=new YU({antialias:!0,alpha:!0});g.setPixelRatio(Math.min(window.devicePixelRatio,qU.MAX_PIXEL_RATIO)),g.setSize(f,h),g.setClearColor(0,0),d.appendChild(g.domElement);const _=new NI,m=new Sv(-1,1,1,-1,0,1),p={uTime:{value:0},uRes:{value:new yt(f*g.getPixelRatio(),h*g.getPixelRatio())},uMouse:{value:new yt(.5,.5)},uDensity:{value:n},uSpeed:{value:i/100},uTurb:{value:r/100},uMask:{value:o.current},uR0:{value:new zt(0,0,-1,0)},uR1:{value:new zt(0,0,-1,0)},uR2:{value:new zt(0,0,-1,0)},uR3:{value:new zt(0,0,-1,0)}};a.current=p;const x=new Nr({uniforms:p,vertexShader:"void main(){ gl_Position = vec4(position, 1.0); }",fragmentShader:eO,transparent:!0});_.add(new as(new df(2,2),x));const y=()=>{if(!d)return;f=d.clientWidth||window.innerWidth,h=d.clientHeight||180,g.setSize(f,h);const R=g.getPixelRatio();p.uRes.value.set(f*R,h*R),u(f,h),p.uMask.value=o.current},v=R=>{const D=d.getBoundingClientRect(),L=(R.clientX-D.left)/D.width,G=1-(R.clientY-D.top)/D.height;p.uMouse.value.set(L,G)},b=R=>{const D=d.getBoundingClientRect(),L=(R.clientX-D.left)/D.width,G=1-(R.clientY-D.top)/D.height;[p.uR0,p.uR1,p.uR2,p.uR3][l.current%fl.SLOT_COUNT].value.set(L,G,p.uTime.value,1),l.current++};window.addEventListener("resize",y),d.addEventListener("mousemove",v),d.addEventListener("click",b);let T,w=null,S=0;const A=R=>{T=requestAnimationFrame(A);const D=w===null?0:Math.min((R-w)/1e3,.05);w=R,S+=D,p.uTime.value=S,g.render(_,m)};return A(0),()=>{cancelAnimationFrame(T),window.removeEventListener("resize",y),d.removeEventListener("mousemove",v),d.removeEventListener("click",b),d&&g.domElement&&d.contains(g.domElement)&&d.removeChild(g.domElement),g.dispose()}},[]),E.jsx("div",{ref:s,className:"relative w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[240px] flex items-center justify-center cursor-pointer select-none",title:"Hover & Click to Create Fluid Ripples"})}gs.registerPlugin(ut);const _u=["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"],qm=[..._u,..._u,..._u].slice(0,24),_d=[{tag:"INTELLIGENT MATCHING",title:"AI-Driven Career Discovery",desc:"Discover tailored career tracks that align with your distinct skills, educational stage, and passions with real-time global industry demand.",stats:"150+ Career Tracks Mapped"},{tag:"INTERACTIVE ASSESSMENT",title:"Scientifically Calibrated Quiz",desc:"Engage in multi-step timed assessments with Likert rating scales and passion sliders to unlock your cognitive profile and top strengths.",stats:"98.4% Recommendation Accuracy"},{tag:"STEP-BY-STEP BLUEPRINTS",title:"Verified Career Roadmaps",desc:"Follow structured step-by-step milestones, required skills, expected salary benchmarks, and alternative degree & certification paths.",stats:"Up to $240k+ Salary Insights"},{tag:"EXPEDITION & GROWTH",title:"Multimedia & Career Passport",desc:"Access expert video masterclasses, audio podcasts, downloadable guides, and export your personal career passport summary directly to PDF.",stats:"Interactive Learning & PDF Export"}],nO=[{top:"12%",left:"10%"},{top:"18%",left:"78%"},{top:"58%",left:"8%"},{top:"72%",left:"82%"},{top:"82%",left:"26%"},{top:"22%",left:"46%"}];function iO(){const[t,e]=J.useState(_d[0]),[n,i]=J.useState(0),r=J.useRef(null),s=J.useRef(null),a=J.useRef(null),o=J.useRef(null),l=J.useRef(null),c=J.useRef(null),u=J.useRef(null),d=J.useRef(null),f=J.useRef(0),h=()=>typeof window>"u"?380:window.innerWidth<640?160:window.innerWidth<1024?260:380,[g,_]=J.useState(h);J.useEffect(()=>{const x=()=>{_(h())};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const m=J.useMemo(()=>qm.map((x,y)=>{const v=Math.acos(1-2*(y+.5)/qm.length),b=Math.PI*(1+Math.sqrt(5))*y,T=g*Math.cos(b)*Math.sin(v),w=g*Math.sin(b)*Math.sin(v),S=g*Math.cos(v),A=Math.atan2(T,S)*(180/Math.PI),R=Math.asin(-w/g)*(180/Math.PI);return{src:x,transform:`translate3d(${T.toFixed(2)}px, ${w.toFixed(2)}px, ${S.toFixed(2)}px) rotateY(${A.toFixed(2)}deg) rotateX(${R.toFixed(2)}deg)`}}),[g]),p=J.useMemo(()=>nO.map((x,y)=>{const v=Math.sin(y*99)*.5*40;return{src:_u[y%_u.length],top:x.top,left:x.left,transform:`rotate(${v.toFixed(2)}deg) scale(0.85)`}}),[]);return J.useEffect(()=>{const x=gs.context(()=>{a.current&&r.current&&gs.to(a.current,{rotateY:720,rotateX:45,ease:"none",scrollTrigger:{trigger:r.current,start:"top top",end:"bottom bottom",scrub:1.2,pin:s.current||!0,pinSpacing:!1,onUpdate:y=>{const v=y.progress,b=Math.floor(v*_d.length)%_d.length;f.current!==b&&(f.current=b,gs.to([l.current,c.current,u.current,d.current],{opacity:0,y:-10,duration:.2,onComplete:()=>{e(_d[b]),gs.to([l.current,c.current,u.current,d.current],{opacity:1,y:0,duration:.25})}}));const T=Math.floor(v*qm.length);i(T)}}}),o.current&&gs.to(".constellation-card",{y:-120,ease:"none",stagger:.08,scrollTrigger:{trigger:o.current,start:"top bottom",end:"bottom top",scrub:!0}})});return()=>x.revert()},[]),E.jsxs("div",{className:"relative bg-[#000000] text-white selection:bg-[#E8602E] selection:text-white",children:[E.jsx("div",{className:"fixed inset-0 pointer-events-none z-0",style:{backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",backgroundSize:"48px 48px"}}),E.jsx("div",{className:"ambient-orange-spotlight top-[-150px] left-1/2 -translate-x-1/2 opacity-70"}),E.jsxs("section",{className:"relative z-10 pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 px-4 text-center flex flex-col items-center max-w-5xl mx-auto",children:[E.jsx("div",{className:"w-full max-w-4xl mb-4",children:E.jsx(tO,{line1:"Discover What",line2:"Fits You Best"})}),E.jsxs("p",{className:"text-[#A1A1AA] text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed mb-10",children:["Personalized guidance for ",E.jsx("strong",{className:"text-white",children:"Students"}),", ",E.jsx("strong",{className:"text-white",children:"Graduates"}),", and ",E.jsx("strong",{className:"text-white",children:"Working Professionals"}),". Powered by AI interest matching and global career analytics."]}),E.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[E.jsxs(Lt,{to:"/quiz",className:"btn-primary-orange text-sm sm:text-base px-8 py-3.5 flex items-center gap-2.5 font-bold",children:[E.jsx(ke,{icon:N3,className:"text-white text-base"}),E.jsx("span",{children:"Take Career Quiz"}),E.jsx(ke,{icon:Pr,className:"text-xs ml-1"})]}),E.jsxs(Lt,{to:"/careers",className:"btn-secondary-dark text-sm sm:text-base px-8 py-3.5 flex items-center gap-2.5 font-semibold",children:[E.jsx(ke,{icon:w3,className:"text-[#E8602E] text-base"}),E.jsx("span",{children:"Explore Career Bank"})]})]}),E.jsxs("div",{className:"mt-12 pt-8 border-t border-[#232328]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#A1A1AA]",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(ke,{icon:nL,className:"text-[#E8602E]"}),E.jsx("span",{children:"Role-Based Segmentation"})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(ke,{icon:A3,className:"text-[#E8602E]"}),E.jsx("span",{children:"Salary & Growth Benchmarks"})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(ke,{icon:Nh,className:"text-[#E8602E]"}),E.jsx("span",{children:"Export Passport to PDF"})]})]})]}),E.jsx("section",{className:"relative h-[320vh] w-full",ref:r,children:E.jsxs("div",{ref:s,className:"sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden [perspective:1200px]",children:[E.jsxs("div",{className:"absolute bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 left-4 right-4 sm:right-auto sm:left-10 lg:left-16 z-20 max-w-sm sm:max-w-md pointer-events-none p-5 sm:p-7 lg:p-8 rounded-3xl bg-[#0A0A0C]/90 backdrop-blur-2xl border border-[#232328] shadow-[0_20px_50px_rgba(0,0,0,0.9)] mx-auto sm:mx-0",children:[E.jsx("span",{ref:u,className:"text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-[#E8602E] block mb-1.5",children:t.tag}),E.jsx("h2",{ref:l,className:"text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-white mb-2 sm:mb-3 tracking-tight",children:t.title}),E.jsx("p",{ref:c,className:"text-[#D4D4D8] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4",children:t.desc}),E.jsxs("div",{ref:d,className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#E8602E]/10 border border-[#E8602E]/30 text-[#E8602E] text-[11px] sm:text-xs font-bold",children:[E.jsx(ke,{icon:Nh,className:"text-[10px]"}),E.jsx("span",{children:t.stats})]})]}),E.jsx("div",{className:"relative w-0 h-0 [transform-style:preserve-3d]",ref:a,children:m.map((x,y)=>{const v=Math.abs(y-n)<2;return E.jsxs("div",{className:`absolute w-[140px] sm:w-[170px] h-[190px] sm:h-[230px] -left-[70px] sm:-left-[85px] -top-[95px] sm:-top-[115px] bg-[#121215] rounded-2xl p-2 [transform-style:preserve-3d] [backface-visibility:visible] border border-[#232328] shadow-[0_12px_30px_rgba(0,0,0,0.9),inset_2px_2px_4px_rgba(255,255,255,0.06)] transition-all duration-300 ${v?"border-[#E8602E] shadow-[0_0_30px_rgba(232,96,46,0.6)] scale-105":"hover:border-[#E8602E]/60"}`,style:{transform:x.transform},children:[E.jsx("img",{src:x.src,alt:"Career Role",className:`w-full h-full object-cover rounded-xl transition-all duration-400 ${v?"grayscale-0 brightness-100":"grayscale-[60%] brightness-[0.55]"}`}),v&&E.jsx("div",{className:"absolute inset-x-3 bottom-3 p-1.5 rounded-lg bg-[#000000]/80 backdrop-blur-md text-[10px] font-bold text-center text-[#E8602E] border border-[#E8602E]/40",children:"Trending Track"})]},y)})}),E.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none z-[-1]",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[E.jsx("path",{d:"M0,50 Q25,25 50,50 T100,50",stroke:"rgba(232, 96, 46, 0.15)",strokeWidth:"0.3",fill:"none"}),E.jsx("path",{d:"M15,0 L85,100",stroke:"rgba(255, 255, 255, 0.04)",strokeWidth:"0.2",fill:"none"})]})]})}),E.jsxs("section",{className:"relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-[#000000] via-[#0A0A0E] to-[#000000]",ref:o,children:[E.jsx("div",{className:"ambient-orange-spotlight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"}),E.jsx("div",{className:"absolute inset-0 pointer-events-none",children:p.map((x,y)=>E.jsx("div",{className:"constellation-card absolute w-[90px] sm:w-[120px] h-[130px] sm:h-[170px] bg-[#121215] rounded-xl p-1.5 border border-[#232328] shadow-2xl opacity-40",style:{top:x.top,left:x.left,transform:x.transform},children:E.jsx("img",{src:x.src,alt:"Constellation Track",className:"w-full h-full object-cover rounded-lg grayscale brightness-50"})},y))}),E.jsxs("div",{className:"relative z-10 text-center max-w-2xl mx-auto p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#0A0A0C]/90 backdrop-blur-2xl border border-[#232328] hover:border-[#E8602E]/60 shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-all duration-300",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8602E]/10 border border-[#E8602E]/30 text-[#E8602E] text-xs font-bold mb-4",children:[E.jsx(ke,{icon:P3,className:"text-xs"}),E.jsx("span",{children:"Career Passport Ignition"})]}),E.jsx("h2",{className:"text-3xl sm:text-5xl font-extrabold font-display text-white mb-4 tracking-tight",children:"Start Your Journey Today"}),E.jsx("p",{className:"text-[#D4D4D8] text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto",children:"Join thousands of students, graduates, and professionals finding clarity, verified learning milestones, and high-impact careers."}),E.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[E.jsxs(Lt,{to:"/register",className:"btn-primary-orange text-sm sm:text-base px-8 py-3.5 font-bold flex items-center gap-2",children:[E.jsx("span",{children:"Create Free Passport"}),E.jsx(ke,{icon:Pr,className:"text-xs"})]}),E.jsx(Lt,{to:"/careers",className:"btn-secondary-dark text-sm sm:text-base px-7 py-3.5 font-semibold",children:"Browse Roles"})]})]})]})]})}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const rO={prefix:"far",iconName:"bookmark",icon:[384,512,[128278,61591],"f02e","M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"]};function oS({icon:t,label:e,value:n}){return E.jsxs("div",{className:"flex items-center gap-2 text-xs text-[#D4D4D8]",children:[E.jsx(ke,{icon:t,className:"text-[#E8602E] text-xs w-3.5 text-center"}),E.jsxs("span",{children:[e&&E.jsx("span",{className:"text-[#A1A1AA] mr-1",children:e}),E.jsx("strong",{className:"text-white font-semibold",children:n})]})]})}function sO({isBookmarked:t,onToggle:e}){return E.jsx("button",{className:"w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer bg-[#18181C] hover:bg-[#222228] text-white border border-[#2B2B33] hover:border-[#E8602E]/60 flex-shrink-0",type:"button",title:t?"Remove from Saved":"Save Passport",onClick:e,"aria-label":"Toggle Bookmark",children:E.jsx(ke,{icon:t?JD:rO,className:`text-sm transition-transform active:scale-125 ${t?"text-[#E8602E]":"text-[#A1A1AA]"}`})})}function aO({id:t,roleTitle:e,roleCategory:n,stageBadge:i,salaryOrBenefit:r,passportCode:s,imageUrl:a,keyHighlights:o=[],ctaText:l="Explore Pathway",ctaLink:c="/quiz"}){const u=wx(),[d,f]=J.useState(!1);return E.jsxs("div",{className:"relative rounded-[2rem] overflow-hidden transition-all duration-300 w-full sm:w-[19.5rem] lg:w-[21.5rem] border border-[#232328] hover:border-[#E8602E]/60 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:shadow-glow-orange-sm hover:-translate-y-2 group bg-[#0D0D10] flex flex-col justify-between h-[33rem] p-3",children:[E.jsxs("div",{className:"relative h-48 w-full rounded-2xl overflow-hidden bg-[#16161A]",children:[E.jsx("img",{className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90",src:a,alt:e,loading:"lazy"}),E.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"}),E.jsx("div",{className:"absolute top-3 left-3 z-10",children:E.jsx("span",{className:"px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#000000]/80 backdrop-blur-md text-[#E8602E] border border-[#E8602E]/40 shadow-sm",children:i})})]}),E.jsxs("div",{className:"flex-1 flex flex-col justify-between px-2 pt-3 pb-1",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[E.jsx("span",{className:"text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-wider truncate mr-2",children:n}),E.jsx("span",{className:"text-[10px] font-mono text-[#E8602E] bg-[#E8602E]/10 px-2 py-0.5 rounded border border-[#E8602E]/20 flex-shrink-0",children:s})]}),E.jsx("h3",{className:"text-2xl font-extrabold font-display text-white tracking-tight leading-tight mb-2 group-hover:text-[#FFE8DE] transition-colors",children:e}),o.length>0&&E.jsx("div",{className:"space-y-1.5 my-3",children:o.map((h,g)=>E.jsxs("div",{className:"flex items-center gap-2 text-xs text-[#D4D4D8]",children:[E.jsx(ke,{icon:fL,className:"text-[#E8602E] text-[10px] flex-shrink-0"}),E.jsx("span",{className:"leading-snug",children:h})]},g))})]}),E.jsxs("div",{children:[E.jsxs("div",{className:"p-2.5 rounded-xl bg-[#121215] border border-[#202026] flex items-center justify-between mb-3",children:[E.jsx(oS,{icon:hL,label:"Potential:",value:r}),E.jsx(oS,{icon:A3,label:"Demand:",value:"High Growth"})]}),E.jsxs("div",{className:"flex items-center gap-2.5 pt-1",children:[E.jsxs("button",{className:"flex-1 bg-[#E8602E] hover:bg-[#BC4C22] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-glow-orange-sm flex items-center justify-center gap-2 cursor-pointer",type:"button",onClick:()=>u(c),children:[E.jsx("span",{children:l}),E.jsx(ke,{icon:Pr,className:"text-[10px] transition-transform group-hover:translate-x-1"})]}),E.jsx(sO,{isBookmarked:d,onToggle:()=>f(!d)})]})]})]})]})}const lS=[{id:"student-pass",roleTitle:"Student Passport",roleCategory:"High School & Foundation",stageBadge:"Entry Explorer",salaryOrBenefit:"Scholarships & Streams",passportCode:"PASS-STU01",imageUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",keyHighlights:["Interactive Stream & Major Matcher","STEM & Global Scholarships Directory","Foundation Career Quizzes & Roadmaps"],ctaText:"Start Student Track",ctaLink:"/quiz?role=student"},{id:"graduate-pass",roleTitle:"Graduate Passport",roleCategory:"University & Early Career",stageBadge:"Career Launch",salaryOrBenefit:"$75k - $120k / yr",passportCode:"PASS-GRAD02",imageUrl:"https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",keyHighlights:["Technical Skill Gap Diagnostics","Resume ATS Optimization & Upload","Full-Stack & Cloud Learning Paths"],ctaText:"Launch Graduate Track",ctaLink:"/careers?stage=graduate"},{id:"pro-pass",roleTitle:"Professional Passport",roleCategory:"Executive & Career Pivot",stageBadge:"Mastery & Leadership",salaryOrBenefit:"$130k - $240k+ / yr",passportCode:"PASS-PRO03",imageUrl:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",keyHighlights:["AI & Quant Finance Transition Blueprints","Executive Salary Benchmarking","Peer Masterclasses & Success Hub"],ctaText:"Explore Pro Pathways",ctaLink:"/careers?stage=professional"}];function oO(){const[t,e]=J.useState("all"),n=t==="all"?lS:lS.filter(i=>i.id.includes(t));return E.jsxs("section",{className:"relative py-24 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-[#1C1C22]",children:[E.jsx("div",{className:"ambient-orange-spotlight top-1/3 right-10 opacity-30 pointer-events-none"}),E.jsxs("div",{className:"max-w-7xl mx-auto",children:[E.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#232328] text-xs font-semibold text-[#E8602E] mb-4",children:[E.jsx(ke,{icon:Nh,className:"text-xs"}),E.jsx("span",{children:"Role-Based Career Passports"})]}),E.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4",children:["Tailored Experiences for ",E.jsx("span",{className:"gradient-text-fire",children:"Every Career Stage"})]}),E.jsx("p",{className:"text-[#A1A1AA] text-base sm:text-lg leading-relaxed",children:"PathSeeker segments your career exploration journey based on where you are right now. Choose your passport to unlock customized roadmaps, tools, and benchmarks."}),E.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 mt-8",children:[E.jsx("button",{onClick:()=>e("all"),className:`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${t==="all"?"bg-[#E8602E] text-white shadow-glow-orange-sm":"bg-[#121215] text-[#A1A1AA] hover:text-white border border-[#232328]"}`,children:"All Passports (3)"}),E.jsx("button",{onClick:()=>e("student"),className:`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${t==="student"?"bg-[#E8602E] text-white shadow-glow-orange-sm":"bg-[#121215] text-[#A1A1AA] hover:text-white border border-[#232328]"}`,children:"Students"}),E.jsx("button",{onClick:()=>e("graduate"),className:`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${t==="graduate"?"bg-[#E8602E] text-white shadow-glow-orange-sm":"bg-[#121215] text-[#A1A1AA] hover:text-white border border-[#232328]"}`,children:"Graduates"}),E.jsx("button",{onClick:()=>e("pro"),className:`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${t==="pro"?"bg-[#E8602E] text-white shadow-glow-orange-sm":"bg-[#121215] text-[#A1A1AA] hover:text-white border border-[#232328]"}`,children:"Working Professionals"})]})]}),E.jsx("div",{className:"flex justify-center items-stretch gap-6 sm:gap-8 flex-wrap",children:n.map(i=>E.jsx(aO,{id:i.id,roleTitle:i.roleTitle,roleCategory:i.roleCategory,stageBadge:i.stageBadge,salaryOrBenefit:i.salaryOrBenefit,passportCode:i.passportCode,imageUrl:i.imageUrl,keyHighlights:i.keyHighlights,ctaText:i.ctaText,ctaLink:i.ctaLink},i.id))})]})]})}const lO=["All","Technology","Healthcare","Engineering","Business & Finance","Creative & Design"],cO=[{id:"1",title:"AI & Machine Learning Engineer",domain:"Technology",description:"Design and deploy deep learning architectures, LLM fine-tuning pipelines, and neural networks powering real-time inference.",entrySalary:"$92,000",seniorSalary:"$210,000",growthRate:"+38% Growth",demand:"Very High",skills:["Python","PyTorch","Transformers","MLOps","Vector DBs"],isTrending:!0},{id:"2",title:"Full-Stack Cloud Architect",domain:"Technology",description:"Architect distributed multi-tier microservices, modern React/Node interfaces, and resilient cloud infrastructures.",entrySalary:"$88,000",seniorSalary:"$190,000",growthRate:"+25% Growth",demand:"High",skills:["React.js","Node.js","AWS/GCP","Kubernetes","Docker"],isTrending:!0},{id:"3",title:"Biomedical Data Scientist",domain:"Healthcare",description:"Analyze clinical genomics, digital health records, and biological datasets to engineer diagnostic biomarker algorithms.",entrySalary:"$82,000",seniorSalary:"$175,000",growthRate:"+30% Growth",demand:"Very High",skills:["Genomics","Python/R","Biostatistics","Clinical Trials"],isTrending:!1},{id:"4",title:"Quantitative Portfolio Analyst",domain:"Business & Finance",description:"Formulate algorithmic trading strategies, stochastic risk matrices, and automated execution systems for asset management.",entrySalary:"$95,000",seniorSalary:"$240,000",growthRate:"+19% Growth",demand:"High",skills:["Stochastic Math","Python/C++","Time Series","Risk Analytics"],isTrending:!1},{id:"5",title:"Principal UI/UX & Product Designer",domain:"Creative & Design",description:"Design tokenized multi-platform design systems, high-fidelity prototypes, and user journey architectures.",entrySalary:"$65,000",seniorSalary:"$145,000",growthRate:"+18% Growth",demand:"High",skills:["Figma","Design Systems","Prototyping","WCAG Accessibility"],isTrending:!0},{id:"6",title:"Robotics & Autonomous Systems Lead",domain:"Engineering",description:"Program embedded microcontrollers, sensor fusion algorithms, and kinematic actuators for industrial autonomous robotics.",entrySalary:"$85,000",seniorSalary:"$180,000",growthRate:"+22% Growth",demand:"High",skills:["ROS 2","C++","Control Systems","Computer Vision"],isTrending:!1}];function uO(){const[t,e]=J.useState("All"),[n,i]=J.useState(""),r=cO.filter(s=>{const a=t==="All"||s.domain===t,o=s.title.toLowerCase().includes(n.toLowerCase())||s.skills.some(l=>l.toLowerCase().includes(n.toLowerCase()));return a&&o});return E.jsxs("section",{className:"relative py-24 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-[#1C1C22]",children:[E.jsx("div",{className:"ambient-orange-spotlight top-1/2 left-10 opacity-25 pointer-events-none"}),E.jsxs("div",{className:"max-w-7xl mx-auto",children:[E.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#232328] text-xs font-semibold text-[#E8602E] mb-3",children:[E.jsx(ke,{icon:w3,className:"text-xs"}),E.jsx("span",{children:"Career Bank Exploration"})]}),E.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight",children:["Explore High-Demand ",E.jsx("span",{className:"gradient-text-fire",children:"Global Roles"})]}),E.jsx("p",{className:"text-[#A1A1AA] text-base mt-2 max-w-xl",children:"Access real-world salary ranges, daily responsibilities, required skillsets, and step-by-step verified learning roadmaps."})]}),E.jsxs(Lt,{to:"/careers",className:"btn-secondary-dark text-xs sm:text-sm px-6 py-3 self-start md:self-auto flex items-center gap-2",children:[E.jsx("span",{children:"View All 150+ Careers"}),E.jsx(ke,{icon:Pr,className:"text-xs text-[#E8602E]"})]})]}),E.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-[#0E0E12] border border-[#232328] mb-10",children:[E.jsx("div",{className:"flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none",children:lO.map(s=>E.jsx("button",{onClick:()=>e(s),className:`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${t===s?"bg-[#E8602E] text-white shadow-glow-orange-sm":"text-[#A1A1AA] hover:text-white hover:bg-[#18181C]"}`,children:s},s))}),E.jsxs("div",{className:"relative w-full lg:w-72",children:[E.jsx(ke,{icon:cL,className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] text-xs"}),E.jsx("input",{type:"text",placeholder:"Search roles or skills...",value:n,onChange:s=>i(s.target.value),className:"w-full bg-[#141418] text-white placeholder-[#71717A] text-xs pl-9 pr-4 py-2.5 rounded-xl border border-[#232328] focus:border-[#E8602E] focus:outline-none transition-all"})]})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(s=>E.jsxs("div",{className:"group relative p-6 rounded-3xl bg-[#0D0D10] border border-[#222226] hover:border-[#E8602E]/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-glow-orange-sm transition-all duration-300 flex flex-col justify-between",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between mb-3",children:[E.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA]",children:s.domain}),s.isTrending&&E.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8602E]/15 border border-[#E8602E]/40 text-[#E8602E] text-[10px] font-bold",children:[E.jsx(ke,{icon:eL,className:"text-[9px]"}),E.jsx("span",{children:"Trending"})]})]}),E.jsx("h3",{className:"text-xl font-extrabold font-display text-white mb-2 group-hover:text-[#FFE8DE] transition-colors",children:s.title}),E.jsx("p",{className:"text-[#D4D4D8] text-xs leading-relaxed line-clamp-3 mb-5",children:s.description}),E.jsx("div",{className:"flex flex-wrap gap-1.5 mb-6",children:s.skills.map((a,o)=>E.jsx("span",{className:"px-2.5 py-1 rounded-lg text-[10px] font-medium bg-[#16161A] text-[#D4D4D8] border border-[#26262E]",children:a},o))})]}),E.jsxs("div",{children:[E.jsxs("div",{className:"p-3.5 rounded-2xl bg-[#121215] border border-[#222226] flex items-center justify-between mb-4",children:[E.jsxs("div",{children:[E.jsx("span",{className:"text-[10px] text-[#A1A1AA] uppercase tracking-wider block",children:"Salary Range"}),E.jsxs("span",{className:"text-xs font-bold text-white",children:[s.entrySalary," - ",s.seniorSalary]})]}),E.jsxs("div",{className:"text-right",children:[E.jsx("span",{className:"text-[10px] text-[#A1A1AA] uppercase tracking-wider block",children:"Growth Rate"}),E.jsx("span",{className:"text-xs font-bold text-[#E8602E]",children:s.growthRate})]})]}),E.jsxs(Lt,{to:`/careers/${s.id}`,className:"w-full py-2.5 rounded-xl bg-[#16161A] hover:bg-[#E8602E] text-[#D4D4D8] hover:text-white text-xs font-bold border border-[#2B2B33] hover:border-[#E8602E] transition-all flex items-center justify-center gap-2 group/btn",children:[E.jsx("span",{children:"Explore Verified Roadmap"}),E.jsx(ke,{icon:Pr,className:"text-[10px] transition-transform group-hover/btn:translate-x-1"})]})]})]},s.id))})]})]})}function fO(){const[t,e]=J.useState(8),[n,i]=J.useState(4),[r,s]=J.useState(5),o=t>=7&&r>=4?{stream:"AI & Data Engineering",matchPercent:96,recommendedRole:"Machine Learning Architect",growthRate:"+38%",badge:"High Technological Aptitude"}:n>=4&&t>=5?{stream:"Digital Product & UX Design",matchPercent:92,recommendedRole:"Principal UX Systems Designer",growthRate:"+24%",badge:"Creative & Technical Synergy"}:r>=4?{stream:"Quantitative Analytics & Strategy",matchPercent:89,recommendedRole:"Financial Quant Strategist",growthRate:"+22%",badge:"Strategic & Logic Orientation"}:{stream:"Multidisciplinary Leadership",matchPercent:85,recommendedRole:"Technology Project Director",growthRate:"+19%",badge:"Adaptive Problem Solving"};return E.jsxs("section",{className:"relative py-24 px-4 sm:px-6 lg:px-8 bg-[#070709] border-t border-[#1C1C22]",children:[E.jsx("div",{className:"ambient-orange-spotlight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none"}),E.jsxs("div",{className:"max-w-7xl mx-auto",children:[E.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#232328] text-xs font-semibold text-[#E8602E] mb-3",children:[E.jsx(ke,{icon:N3,className:"text-xs"}),E.jsx("span",{children:"Interactive Assessment Preview"})]}),E.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4",children:["Try the AI-Powered ",E.jsx("span",{className:"gradient-text-fire",children:"Interest Quiz"})]}),E.jsx("p",{className:"text-[#A1A1AA] text-base sm:text-lg",children:"Test how our multi-dimensional scoring engine maps your logic, passions, and creative problem-solving skills to real-world career trajectories."})]}),E.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto",children:[E.jsxs("div",{className:"lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0D0D10] border border-[#222226] shadow-[0_15px_40px_rgba(0,0,0,0.9)] space-y-7",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between mb-2",children:[E.jsxs("span",{className:"text-xs font-bold uppercase tracking-wider text-[#A1A1AA] flex items-center gap-1.5",children:[E.jsx(ke,{icon:oL,className:"text-[#E8602E]"}),E.jsx("span",{children:"Question 1: Coding & Algorithmic Automation"})]}),E.jsxs("span",{className:"text-xs font-mono font-bold text-[#E8602E]",children:[t,"/10"]})]}),E.jsx("p",{className:"text-xs text-[#D4D4D8] mb-3",children:"How excited are you to architect scalable code, solve logic puzzles, or build automated systems?"}),E.jsx("input",{type:"range",min:"1",max:"10",value:t,onChange:l=>e(Number(l.target.value)),className:"w-full h-2 bg-[#1A1A22] rounded-lg appearance-none cursor-pointer accent-[#E8602E]"}),E.jsxs("div",{className:"flex justify-between text-[10px] text-[#71717A] mt-1",children:[E.jsx("span",{children:"1 (Non-Technical)"}),E.jsx("span",{children:"5 (Moderate)"}),E.jsx("span",{children:"10 (Passionate Coder)"})]})]}),E.jsxs("div",{children:[E.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block mb-2",children:"Question 2: Visual Styling, Aesthetics & User Empathy"}),E.jsx("p",{className:"text-xs text-[#D4D4D8] mb-3",children:"I enjoy refining design systems, visual balance, and intuitive product interactions."}),E.jsx("div",{className:"grid grid-cols-5 gap-2",children:[1,2,3,4,5].map(l=>E.jsx("button",{type:"button",onClick:()=>i(l),className:`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${n===l?"bg-[#E8602E] text-white border-[#E8602E] shadow-glow-orange-sm":"bg-[#141418] text-[#A1A1AA] border-[#262630] hover:text-white"}`,children:l},l))}),E.jsxs("div",{className:"flex justify-between text-[10px] text-[#71717A] mt-1 px-1",children:[E.jsx("span",{children:"Strongly Disagree"}),E.jsx("span",{children:"Strongly Agree"})]})]}),E.jsxs("div",{children:[E.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-[#A1A1AA] block mb-2",children:"Question 3: Quantitative & Statistical Analysis"}),E.jsx("p",{className:"text-xs text-[#D4D4D8] mb-3",children:"I feel energized when interpreting data trends, statistical probabilities, and financial metrics."}),E.jsx("div",{className:"grid grid-cols-5 gap-2",children:[1,2,3,4,5].map(l=>E.jsx("button",{type:"button",onClick:()=>s(l),className:`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${r===l?"bg-[#E8602E] text-white border-[#E8602E] shadow-glow-orange-sm":"bg-[#141418] text-[#A1A1AA] border-[#262630] hover:text-white"}`,children:l},l))})]})]}),E.jsxs("div",{className:"lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-[#121216] border border-[#E8602E]/40 shadow-[0_20px_50px_rgba(232,96,46,0.15)] flex flex-col justify-between h-full",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between mb-4",children:[E.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-[#E8602E] bg-[#E8602E]/10 px-2.5 py-1 rounded-md border border-[#E8602E]/20",children:"Live Match Engine"}),E.jsxs("span",{className:"text-xs font-bold text-white flex items-center gap-1.5",children:[E.jsx(ke,{icon:Nh,className:"text-[#E8602E] text-xs"}),E.jsxs("span",{children:[o.matchPercent,"% Match"]})]})]}),E.jsx("h3",{className:"text-2xl font-extrabold font-display text-white mb-1",children:o.stream}),E.jsx("p",{className:"text-xs text-[#A1A1AA] mb-5",children:"Top matched career track for your inputs:"}),E.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0C] border border-[#232328] mb-5",children:[E.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider text-[#71717A] block mb-1",children:"Recommended Primary Role"}),E.jsx("span",{className:"text-base font-extrabold text-[#FFE8DE] block",children:o.recommendedRole}),E.jsx("div",{className:"flex items-center gap-3 mt-2 text-xs text-[#D4D4D8]",children:E.jsxs("span",{children:["Industry Growth: ",E.jsx("strong",{className:"text-[#E8602E]",children:o.growthRate})]})})]}),E.jsxs("div",{className:"inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] mb-6",children:[E.jsx(ke,{icon:ZD,className:"text-[#E8602E]"}),E.jsxs("span",{children:["Cognitive Profile: ",E.jsx("strong",{className:"text-white",children:o.badge})]})]})]}),E.jsxs(Lt,{to:"/quiz",className:"btn-primary-orange w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2",children:[E.jsx("span",{children:"Take Full 7-Step Timed Quiz"}),E.jsx(ke,{icon:Pr,className:"text-xs"})]})]})]})]})]})}const dO=[{id:"m1",title:"A Day in the Life of a Senior AI & ML Engineer",type:"video",speaker:"Dr. Elena Rostova",role:"Principal AI Scientist at DeepMind Labs",duration:"14 mins",domain:"Technology",rating:4.9,reviewsCount:148,thumbnail:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",transcriptSnippet:"In modern AI engineering, over 60% of our pipeline is centered around high-quality dataset curation, distributed tensor evaluation, and ensuring low-latency inference on cloud GPU clusters..."},{id:"m2",title:"Mastering Modern UI/UX: From Wireframe to Design System",type:"video",speaker:"Jordan Taylor",role:"Head of Product Design at Figma Studios",duration:"20 mins",domain:"Creative & Design",rating:4.8,reviewsCount:92,thumbnail:"https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=600&q=80",transcriptSnippet:"Today we will dismantle the exact steps to create an accessible, tokenized design system in Figma. We will cover typography scales, 8pt spatial grids, and micro-interaction states..."},{id:"m3",title:"Podcast: Breaking into High-Frequency Trading & Quant Finance",type:"audio",speaker:"David Sterling",role:"Quantitative Portfolio Manager",duration:"32 mins",domain:"Business & Finance",rating:4.7,reviewsCount:65,thumbnail:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",transcriptSnippet:"In this podcast episode, David discusses the mathematics of modern arbitrage, stochastic calculus requirements, and how software engineers can pivot into quantitative finance..."}];function hO(){const[t,e]=J.useState(null);return E.jsx("section",{className:"relative py-24 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-[#1C1C22]",children:E.jsxs("div",{className:"max-w-7xl mx-auto",children:[E.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#232328] text-xs font-semibold text-[#E8602E] mb-3",children:[E.jsx(ke,{icon:Gy,className:"text-xs"}),E.jsx("span",{children:"Multimedia Learning Center"})]}),E.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight",children:["Watch Masterclasses & ",E.jsx("span",{className:"gradient-text-fire",children:"Audio Podcasts"})]}),E.jsx("p",{className:"text-[#A1A1AA] text-base mt-2 max-w-xl",children:"Learn directly from seasoned industry practitioners. Featuring interactive transcripts, playback controls, and domain-based discussions."})]}),E.jsxs(Lt,{to:"/multimedia",className:"btn-secondary-dark text-xs sm:text-sm px-6 py-3 self-start md:self-auto flex items-center gap-2",children:[E.jsx("span",{children:"Explore All Media"}),E.jsx(ke,{icon:Pr,className:"text-xs text-[#E8602E]"})]})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7",children:dO.map(n=>E.jsxs("div",{className:"group relative rounded-3xl bg-[#0D0D10] border border-[#232328] hover:border-[#E8602E]/60 shadow-[0_15px_35px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 flex flex-col justify-between",children:[E.jsxs("div",{className:"relative h-48 w-full overflow-hidden bg-[#16161A]",children:[E.jsx("img",{src:n.thumbnail,alt:n.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"}),E.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0D0D10] via-transparent to-transparent"}),E.jsxs("div",{className:"absolute top-3.5 left-3.5 flex items-center gap-2",children:[E.jsxs("span",{className:"px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 flex items-center gap-1.5",children:[E.jsx(ke,{icon:n.type==="video"?pL:rL,className:"text-[#E8602E]"}),E.jsx("span",{children:n.type})]}),E.jsxs("span",{className:"px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#D4D4D8] border border-white/10",children:[E.jsx(ke,{icon:aL,className:"mr-1 text-[9px]"}),n.duration]})]}),E.jsx(Lt,{to:`/multimedia/${n.id}`,className:"absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity","aria-label":"Play Media",children:E.jsx("div",{className:"w-12 h-12 rounded-full bg-[#E8602E] text-white flex items-center justify-center shadow-glow-orange-sm group-hover:scale-110 transition-transform",children:E.jsx(ke,{icon:Gy,className:"text-sm ml-0.5"})})})]}),E.jsxs("div",{className:"p-6 flex-1 flex flex-col justify-between",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between text-xs mb-2",children:[E.jsx("span",{className:"text-[#E8602E] font-semibold",children:n.domain}),E.jsxs("div",{className:"flex items-center gap-1 text-[#FFB800] font-bold text-xs",children:[E.jsx(ke,{icon:T3,className:"text-[11px]"}),E.jsx("span",{children:n.rating}),E.jsxs("span",{className:"text-[#71717A] text-[10px]",children:["(",n.reviewsCount,")"]})]})]}),E.jsx("h3",{className:"text-lg font-extrabold font-display text-white mb-2 group-hover:text-[#FFE8DE] transition-colors leading-snug",children:n.title}),E.jsxs("div",{className:"text-xs text-[#A1A1AA] mb-4",children:[E.jsx("span",{className:"text-white font-medium",children:n.speaker}),E.jsx("span",{className:"text-[#71717A] block text-[11px]",children:n.role})]}),t===n.id&&E.jsxs("div",{className:"p-3 rounded-xl bg-[#141418] border border-[#232328] text-xs text-[#D4D4D8] leading-relaxed mb-4",children:[E.jsx("span",{className:"text-[10px] uppercase font-bold text-[#E8602E] block mb-1",children:"Transcript Excerpt:"}),n.transcriptSnippet]})]}),E.jsxs("div",{className:"flex items-center gap-2 pt-3 border-t border-[#232328]",children:[E.jsxs("button",{type:"button",onClick:()=>e(t===n.id?null:n.id),className:"flex-1 py-2 rounded-xl bg-[#16161A] hover:bg-[#202026] text-[#D4D4D8] text-xs font-semibold border border-[#26262E] transition-all flex items-center justify-center gap-1.5 cursor-pointer",children:[E.jsx(ke,{icon:qD,className:"text-[#E8602E] text-xs"}),E.jsx("span",{children:t===n.id?"Hide Transcript":"Transcript"})]}),E.jsxs(Lt,{to:`/multimedia/${n.id}`,className:"px-4 py-2 rounded-xl bg-[#E8602E] hover:bg-[#BC4C22] text-white text-xs font-bold transition-all flex items-center gap-1.5",children:[E.jsx("span",{children:"Watch"}),E.jsx(ke,{icon:Pr,className:"text-[10px]"})]})]})]})]},n.id))})]})})}const pO=[{id:"s1",author:"Aarav Mehta",role:"Senior Cloud Engineer",company:"Microsoft",domain:"Technology",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",likes:84,timeline:{education:"Graduated in Electrical Engineering with zero prior coding experience.",challenges:"Faced 40+ job rejections in the first year and struggled with distributed systems.",turningPoint:"Dedicated 6 months to building open-source cloud microservices and got AWS certified.",outcome:"Promoted to Senior Cloud Engineer within 3 years leading multi-region Azure migrations."},quote:"Do not just watch tutorials. Build 2 deeply complex projects that solve real problems, deploy them live, and document what broke."},{id:"s2",author:"Sophia Lindqvist",role:"Lead UI/UX Designer",company:"Spotify",domain:"Creative & Design",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",likes:112,timeline:{education:"Bachelor of Fine Arts in Traditional Painting and Printmaking.",challenges:"Felt intense imposter syndrome when transitioning into tech and struggled with developer handoffs.",turningPoint:"Enrolled in an interactive UX mentorship program and redesigned an indie audio streaming app.",outcome:"Spearheading design systems and audio accessibility features for millions of daily active listeners."},quote:"Your non-traditional background is your biggest superpower. Empathy and visual storytelling are what elevate good software into unforgettable experiences."}];function mO(){const[t,e]=J.useState({s1:84,s2:112}),[n,i]=J.useState({}),r=s=>{n[s]||(e(a=>({...a,[s]:a[s]+1})),i(a=>({...a,[s]:!0})))};return E.jsxs("section",{className:"relative py-24 px-4 sm:px-6 lg:px-8 bg-[#07070A] border-t border-[#1C1C22]",children:[E.jsx("div",{className:"ambient-orange-spotlight top-1/3 left-10 opacity-20 pointer-events-none"}),E.jsxs("div",{className:"max-w-7xl mx-auto",children:[E.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#232328] text-xs font-semibold text-[#E8602E] mb-3",children:[E.jsx(ke,{icon:T3,className:"text-xs"}),E.jsx("span",{children:"Success Stories Hub"})]}),E.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight",children:["Real Journeys, ",E.jsx("span",{className:"gradient-text-fire",children:"Proven Breakthroughs"})]}),E.jsx("p",{className:"text-[#A1A1AA] text-base mt-2 max-w-xl",children:"Discover timeline-style career narratives detailing educational beginnings, obstacles overcome, and final outcomes."})]}),E.jsxs(Lt,{to:"/stories",className:"btn-secondary-dark text-xs sm:text-sm px-6 py-3 self-start md:self-auto flex items-center gap-2",children:[E.jsx("span",{children:"Submit Your Story"}),E.jsx(ke,{icon:Pr,className:"text-xs text-[#E8602E]"})]})]}),E.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:pO.map(s=>E.jsx("div",{className:"p-7 sm:p-9 rounded-3xl bg-[#0D0D10] border border-[#232328] hover:border-[#E8602E]/60 shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col justify-between",children:E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between mb-6",children:[E.jsxs("div",{className:"flex items-center gap-3.5",children:[E.jsx("img",{src:s.avatar,alt:s.author,className:"w-13 h-13 rounded-2xl object-cover border-2 border-[#E8602E]/40"}),E.jsxs("div",{children:[E.jsx("h3",{className:"text-lg font-extrabold font-display text-white",children:s.author}),E.jsxs("p",{className:"text-xs text-[#D4D4D8]",children:[s.role," at ",E.jsx("strong",{className:"text-white",children:s.company})]})]})]}),E.jsxs("button",{type:"button",onClick:()=>r(s.id),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${n[s.id]?"bg-[#E8602E]/20 text-[#E8602E] border-[#E8602E]":"bg-[#141418] text-[#A1A1AA] border-[#282830] hover:text-white"}`,children:[E.jsx(ke,{icon:C3,className:`text-xs ${n[s.id]?"text-[#E8602E]":"text-[#71717A]"}`}),E.jsx("span",{children:t[s.id]})]})]}),E.jsxs("div",{className:"space-y-4 relative pl-6 border-l-2 border-[#232328] my-6",children:[E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:"absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#16161A] border-2 border-[#E8602E] flex items-center justify-center"}),E.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider text-[#A1A1AA] block",children:"1. Educational Path"}),E.jsx("p",{className:"text-xs text-[#D4D4D8] leading-relaxed",children:s.timeline.education})]}),E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:"absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#16161A] border-2 border-[#E8602E] flex items-center justify-center"}),E.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider text-[#A1A1AA] block",children:"2. Major Hurdles & Challenges"}),E.jsx("p",{className:"text-xs text-[#D4D4D8] leading-relaxed",children:s.timeline.challenges})]}),E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:"absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#16161A] border-2 border-[#E8602E] flex items-center justify-center"}),E.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider text-[#E8602E] block",children:"3. The Strategic Turning Point"}),E.jsx("p",{className:"text-xs text-[#D4D4D8] leading-relaxed",children:s.timeline.turningPoint})]}),E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:"absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#E8602E] border-2 border-[#FFE8DE] flex items-center justify-center"}),E.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider text-[#10B981] block",children:"4. Current Career Outcome"}),E.jsx("p",{className:"text-xs font-semibold text-white leading-relaxed",children:s.timeline.outcome})]})]}),E.jsxs("div",{className:"p-4 rounded-2xl bg-[#121215] border border-[#232328] flex items-start gap-3 mt-4",children:[E.jsx(ke,{icon:uL,className:"text-[#E8602E] text-base mt-0.5"}),E.jsxs("p",{className:"text-xs italic text-[#D4D4D8] leading-relaxed",children:['"',s.quote,'"']})]})]})},s.id))})]})]})}const gO=[{id:"r1",title:"Full-Stack Engineering Career Roadmap & Interview Prep 2026",category:"PDF Guide",audience:"All Stages",size:"3.2 MB",downloads:540,tags:["Beginner","Interview-Prep","MERN Stack"],summary:"A 40-page master blueprint covering JavaScript fundamentals, system design principles, API security, and top 50 technical interview questions."},{id:"r2",title:"Global STEM & Tech Scholarships Directory",category:"Scholarship",audience:"Students",size:"2.1 MB",downloads:890,tags:["Scholarship","Undergraduate","Postgraduate"],summary:"Curated compilation of 100+ fully funded global undergraduate and postgraduate STEM scholarships with application timelines and eligibility criteria."},{id:"r3",title:"Technical Resume & GitHub Portfolio Audit Checklist",category:"Checklist",audience:"Graduates & Pros",size:"1.1 MB",downloads:1240,tags:["Resume-Building","Portfolio","FAANG Ready"],summary:"An actionable 15-point checklist used by top technology recruiters to evaluate engineering resumes, live project showcases, and GitHub commit histories."}];function _O(){const[t,e]=J.useState(null),[n,i]=J.useState({r1:540,r2:890,r3:1240}),r=s=>{i(l=>({...l,[s]:l[s]+1}));const a=document.createElement("a"),o=new Blob(["PathSeeker Career Passport Document Resource: Simulated PDF Content."],{type:"text/plain"});a.href=URL.createObjectURL(o),a.download=`${s}_pathseeker_guide.pdf`,document.body.appendChild(a),a.click(),document.body.removeChild(a)};return E.jsxs("section",{className:"relative py-24 px-4 sm:px-6 lg:px-8 bg-[#000000] border-t border-[#1C1C22]",children:[E.jsxs("div",{className:"max-w-7xl mx-auto",children:[E.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#232328] text-xs font-semibold text-[#E8602E] mb-3",children:[E.jsx(ke,{icon:tL,className:"text-xs"}),E.jsx("span",{children:"Document Resource Library"})]}),E.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight",children:["Downloadable Guides & ",E.jsx("span",{className:"gradient-text-fire",children:"Checklists"})]}),E.jsx("p",{className:"text-[#A1A1AA] text-base mt-2 max-w-xl",children:"Curated career cheat-sheets, scholarship compilations, and interview checklists with instant in-browser modal previews."})]}),E.jsxs(Lt,{to:"/resources",className:"btn-secondary-dark text-xs sm:text-sm px-6 py-3 self-start md:self-auto flex items-center gap-2",children:[E.jsx("span",{children:"Browse Full Library"}),E.jsx(ke,{icon:Pr,className:"text-xs text-[#E8602E]"})]})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-7",children:gO.map(s=>E.jsxs("div",{className:"p-6 sm:p-7 rounded-3xl bg-[#0D0D10] border border-[#232328] hover:border-[#E8602E]/60 shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col justify-between",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between mb-4",children:[E.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-[#E8602E] bg-[#E8602E]/10 px-2.5 py-1 rounded border border-[#E8602E]/20",children:s.category}),E.jsxs("span",{className:"text-[11px] text-[#71717A] font-mono",children:[s.size," • ",n[s.id]," DLs"]})]}),E.jsx("h3",{className:"text-xl font-extrabold font-display text-white mb-2 leading-snug",children:s.title}),E.jsx("p",{className:"text-xs text-[#D4D4D8] leading-relaxed mb-4",children:s.summary}),E.jsx("div",{className:"flex flex-wrap gap-1.5 mb-6",children:s.tags.map((a,o)=>E.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] bg-[#141418] text-[#A1A1AA] border border-[#26262E]",children:a},o))})]}),E.jsxs("div",{className:"flex items-center gap-2 pt-4 border-t border-[#232328]",children:[E.jsxs("button",{type:"button",onClick:()=>e(s),className:"flex-1 py-2.5 rounded-xl bg-[#16161A] hover:bg-[#202026] text-[#D4D4D8] hover:text-white text-xs font-semibold border border-[#26262E] transition-all flex items-center justify-center gap-1.5 cursor-pointer",children:[E.jsx(ke,{icon:iL,className:"text-xs text-[#E8602E]"}),E.jsx("span",{children:"Preview"})]}),E.jsxs("button",{type:"button",onClick:()=>r(s.id),className:"flex-1 py-2.5 rounded-xl bg-[#E8602E] hover:bg-[#BC4C22] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-glow-orange-sm",children:[E.jsx(ke,{icon:Hy,className:"text-xs"}),E.jsx("span",{children:"Download"})]})]})]},s.id))})]}),t&&E.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in",children:E.jsxs("div",{className:"relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#0D0D10] border border-[#232328] shadow-2xl",children:[E.jsx("button",{onClick:()=>e(null),className:"absolute top-5 right-5 p-2 rounded-full text-[#A1A1AA] hover:text-white hover:bg-[#1C1C22] transition-colors","aria-label":"Close Preview",children:E.jsx(ke,{icon:R3,className:"text-base"})}),E.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[E.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#E8602E]/10 border border-[#E8602E]/30 flex items-center justify-center text-[#E8602E]",children:E.jsx(ke,{icon:sL,className:"text-lg"})}),E.jsxs("div",{children:[E.jsx("span",{className:"text-[10px] uppercase font-bold text-[#E8602E] tracking-wider",children:"In-Browser Document Preview"}),E.jsx("h4",{className:"text-lg font-bold text-white leading-tight",children:t.title})]})]}),E.jsxs("div",{className:"p-4 rounded-2xl bg-[#050507] border border-[#1F1F24] text-xs text-[#D4D4D8] leading-relaxed my-4 space-y-2",children:[E.jsxs("p",{children:[E.jsx("strong",{children:"Audience Scope:"})," ",t.audience]}),E.jsxs("p",{children:[E.jsx("strong",{children:"File Specifications:"})," PDF Document (",t.size,")"]}),E.jsx("p",{className:"pt-2 border-t border-[#1C1C22]",children:t.summary})]}),E.jsxs("div",{className:"flex items-center justify-end gap-3 mt-6",children:[E.jsx("button",{type:"button",onClick:()=>e(null),className:"px-4 py-2 rounded-xl text-xs font-semibold text-[#A1A1AA] hover:text-white",children:"Close Preview"}),E.jsxs("button",{type:"button",onClick:()=>{r(t.id),e(null)},className:"btn-primary-orange text-xs px-5 py-2.5 font-bold flex items-center gap-2",children:[E.jsx(ke,{icon:Hy,className:"text-xs"}),E.jsx("span",{children:"Download Complete PDF"})]})]})]})})]})}const xd=[{category:"Public Exploration Gateway",color:"#E8602E",nodes:[{name:"Landing Page (Home)",path:"/",desc:"Hero globe, persona passports, feature spotlights, sitemap index"},{name:"Global Career Bank",path:"/careers",desc:"150+ job profiles, salary filters, demand metrics, skill maps"},{name:"AI Interest Assessment",path:"/quiz",desc:"7-step timed quiz with Likert scales & stream recommendations"},{name:"Multimedia Learning Hub",path:"/multimedia",desc:"Video masterclasses, audio podcasts, and interactive transcripts"},{name:"Success Stories Hub",path:"/stories",desc:"Timeline-style narratives & community submission portal"},{name:"Document Resource Library",path:"/resources",desc:"Downloadable PDF cheat-sheets, scholarships, and checklists"}]},{category:"Role-Based Authentication & Passports",color:"#3B82F6",nodes:[{name:"User Authentication",path:"/login",desc:"Multi-role tabbed login & registration with OTP password reset"},{name:"Student Career Passport",path:"/dashboard?tab=student",desc:"Stream matching, high school STEM guidance, scholarship directory"},{name:"Graduate Career Passport",path:"/dashboard?tab=graduate",desc:"Skill gap analytics, resume upload, entry-level engineering tracks"},{name:"Professional Passport",path:"/dashboard?tab=professional",desc:"Executive compensation benchmarks, career pivot roadmaps"},{name:"Saved Bookmarks & Notes",path:"/bookmarks",desc:"Pinned careers, sticky notes, and printable PDF passport export"}]},{category:"Administration & Intelligence Engine",color:"#10B981",nodes:[{name:"Admin Control Center",path:"/admin",desc:"Usage statistics, active users telemetry, and system metrics"},{name:"Career & Content Management",path:"/admin/careers",desc:"CRUD operations for career profiles, media items, and quiz questions"},{name:"Story & Feedback Moderation",path:"/admin/moderation",desc:"Review user-submitted career stories & reply to support inquiries"}]}];function xO(){const[t,e]=J.useState(0);return E.jsxs("section",{className:"relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050507] border-t border-[#1C1C22]",children:[E.jsx("div",{className:"ambient-orange-spotlight top-1/2 right-10 opacity-20 pointer-events-none"}),E.jsxs("div",{className:"max-w-7xl mx-auto",children:[E.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14",children:[E.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121215] border border-[#232328] text-xs font-semibold text-[#E8602E] mb-3",children:[E.jsx(ke,{icon:QD,className:"text-xs"}),E.jsx("span",{children:"TechWiz 6 Requirement • Section 1.9"})]}),E.jsxs("h2",{className:"text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight mb-4",children:["Interactive ",E.jsx("span",{className:"gradient-text-fire",children:"Application Sitemap"})]}),E.jsx("p",{className:"text-[#A1A1AA] text-base sm:text-lg",children:"Understand the complete architectural navigation flow and role access patterns across the PathSeeker platform."}),E.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 mt-8",children:xd.map((n,i)=>E.jsx("button",{onClick:()=>e(i),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${t===i?"bg-[#E8602E] text-white shadow-glow-orange-sm":"bg-[#101014] text-[#A1A1AA] hover:text-white border border-[#232328]"}`,children:n.category},i))})]}),E.jsxs("div",{className:"p-6 sm:p-10 rounded-3xl bg-[#0A0A0D] border border-[#222226] shadow-[0_20px_50px_rgba(0,0,0,0.9)]",children:[E.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-[#1C1C22] mb-8",children:[E.jsxs("div",{children:[E.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-[#E8602E]",children:"Active Exploration Layer"}),E.jsx("h3",{className:"text-xl font-bold text-white",children:xd[t].category})]}),E.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-[#141418] text-[#D4D4D8] border border-[#282830]",children:[xd[t].nodes.length," Endpoints"]})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:xd[t].nodes.map((n,i)=>E.jsx(Lt,{to:n.path,className:"group p-5 rounded-2xl bg-[#0F0F13] border border-[#202026] hover:border-[#E8602E]/60 hover:bg-[#14141A] transition-all flex flex-col justify-between",children:E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between mb-2",children:[E.jsx("span",{className:"text-[10px] font-mono text-[#E8602E] bg-[#E8602E]/10 px-2 py-0.5 rounded",children:n.path}),E.jsx(ke,{icon:Pr,className:"text-xs text-[#71717A] group-hover:text-[#E8602E] transition-colors group-hover:translate-x-1"})]}),E.jsx("h4",{className:"text-base font-bold text-white group-hover:text-[#FFE8DE] transition-colors mb-1.5",children:n.name}),E.jsx("p",{className:"text-xs text-[#A1A1AA] leading-relaxed",children:n.desc})]})},i))})]})]})]})}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const vO={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},yO={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},SO={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},EO={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};function MO(){const[t,e]=J.useState(""),n=i=>{i.preventDefault(),t&&(nP.success("Subscribed! You will receive weekly career trend insights."),e(""))};return E.jsxs("footer",{className:"relative bg-[#000000] border-t border-[#1C1C22] text-[#D4D4D8] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden",children:[E.jsx("div",{className:"ambient-orange-spotlight -bottom-40 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"}),E.jsxs("div",{className:"max-w-7xl mx-auto",children:[E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#1C1C22]",children:[E.jsxs("div",{className:"lg:col-span-2 space-y-4",children:[E.jsxs(Lt,{to:"/",className:"flex items-center gap-2.5",children:[E.jsx("div",{className:"w-8 h-8 rounded-xl bg-gradient-to-b from-[#FF7A45] via-[#E8602E] to-[#BC4C22] p-[1px] shadow-[0_2px_10px_rgba(232,96,46,0.5)] flex items-center justify-center",children:E.jsx("div",{className:"w-full h-full bg-[#121215] rounded-[11px] flex items-center justify-center border-t border-white/30",children:E.jsx(ke,{icon:D3,className:"text-[#E8602E] text-sm"})})}),E.jsxs("span",{className:"text-xl font-extrabold font-display tracking-tight text-white",children:["Path",E.jsx("span",{className:"text-[#E8602E]",children:"Seeker"})]})]}),E.jsx("p",{className:"text-xs text-[#A1A1AA] leading-relaxed max-w-sm",children:"Empowering students, graduates, and working professionals to discover tailored career paths, AI-matched streams, and verified learning milestones."}),E.jsxs("form",{onSubmit:n,className:"pt-2 max-w-sm",children:[E.jsx("span",{className:"text-xs font-bold text-white block mb-2",children:"Subscribe for Weekly Career Trends"}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("input",{type:"email",placeholder:"Enter your email...",value:t,onChange:i=>e(i.target.value),className:"flex-1 bg-[#121215] border border-[#232328] text-white text-xs px-3.5 py-2.5 rounded-xl focus:border-[#E8602E] focus:outline-none transition-all placeholder-[#71717A]",required:!0}),E.jsxs("button",{type:"submit",className:"bg-[#E8602E] hover:bg-[#BC4C22] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-glow-orange-sm",children:[E.jsx("span",{children:"Join"}),E.jsx(ke,{icon:dL,className:"text-[10px]"})]})]})]})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-xs font-bold uppercase tracking-widest text-white mb-4",children:"Explore Platform"}),E.jsxs("ul",{className:"space-y-2.5 text-xs text-[#A1A1AA]",children:[E.jsx("li",{children:E.jsx(Lt,{to:"/careers",className:"hover:text-[#E8602E] transition-colors",children:"Career Bank"})}),E.jsx("li",{children:E.jsx(Lt,{to:"/quiz",className:"hover:text-[#E8602E] transition-colors",children:"AI Interest Quiz"})}),E.jsx("li",{children:E.jsx(Lt,{to:"/multimedia",className:"hover:text-[#E8602E] transition-colors",children:"Multimedia Center"})}),E.jsx("li",{children:E.jsx(Lt,{to:"/stories",className:"hover:text-[#E8602E] transition-colors",children:"Success Stories"})}),E.jsx("li",{children:E.jsx(Lt,{to:"/resources",className:"hover:text-[#E8602E] transition-colors",children:"Document Library"})})]})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-xs font-bold uppercase tracking-widest text-white mb-4",children:"Career Passports"}),E.jsxs("ul",{className:"space-y-2.5 text-xs text-[#A1A1AA]",children:[E.jsx("li",{children:E.jsx(Lt,{to:"/quiz?role=student",className:"hover:text-[#E8602E] transition-colors",children:"Student Passport"})}),E.jsx("li",{children:E.jsx(Lt,{to:"/careers?stage=graduate",className:"hover:text-[#E8602E] transition-colors",children:"Graduate Passport"})}),E.jsx("li",{children:E.jsx(Lt,{to:"/careers?stage=professional",className:"hover:text-[#E8602E] transition-colors",children:"Professional Pivot"})}),E.jsx("li",{children:E.jsx(Lt,{to:"/login",className:"hover:text-[#E8602E] transition-colors",children:"Admin Portal"})})]})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-xs font-bold uppercase tracking-widest text-white mb-4",children:"Competition Info"}),E.jsxs("div",{className:"p-3.5 rounded-2xl bg-[#0D0D10] border border-[#232328] space-y-1.5 text-xs text-[#A1A1AA]",children:[E.jsx("p",{className:"text-white font-bold",children:"TechWiz 6 Global"}),E.jsx("p",{className:"text-[11px]",children:"Category: Full-Stack Web Application"}),E.jsx("p",{className:"text-[11px] text-[#E8602E]",children:"Theme: Career Passport"})]}),E.jsxs("div",{className:"flex items-center gap-3 mt-4 text-[#A1A1AA]",children:[E.jsx("a",{href:"#",className:"w-8 h-8 rounded-xl bg-[#121215] border border-[#232328] hover:border-[#E8602E] hover:text-[#E8602E] flex items-center justify-center transition-all",children:E.jsx(ke,{icon:SO,className:"text-xs"})}),E.jsx("a",{href:"#",className:"w-8 h-8 rounded-xl bg-[#121215] border border-[#232328] hover:border-[#E8602E] hover:text-[#E8602E] flex items-center justify-center transition-all",children:E.jsx(ke,{icon:yO,className:"text-xs"})}),E.jsx("a",{href:"#",className:"w-8 h-8 rounded-xl bg-[#121215] border border-[#232328] hover:border-[#E8602E] hover:text-[#E8602E] flex items-center justify-center transition-all",children:E.jsx(ke,{icon:EO,className:"text-xs"})}),E.jsx("a",{href:"#",className:"w-8 h-8 rounded-xl bg-[#121215] border border-[#232328] hover:border-[#E8602E] hover:text-[#E8602E] flex items-center justify-center transition-all",children:E.jsx(ke,{icon:vO,className:"text-xs"})})]})]})]}),E.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs text-[#71717A]",children:[E.jsx("p",{children:"© 2026 PathSeeker (Aptech TechWiz 6). Built with React, Vite & Tailwind CSS."}),E.jsxs("p",{className:"flex items-center gap-1",children:[E.jsx("span",{children:"Crafted for Future Careers"}),E.jsx(ke,{icon:C3,className:"text-[#E8602E] text-[10px]"})]})]})]})]})}function cS(){return E.jsxs("div",{className:"min-h-screen bg-[#000000] text-white selection:bg-[#E8602E] selection:text-white overflow-x-clip font-sans",children:[E.jsx(mL,{}),E.jsxs("main",{children:[E.jsx(iO,{}),E.jsx(oO,{}),E.jsx(uO,{}),E.jsx(fO,{}),E.jsx(hO,{}),E.jsx(mO,{}),E.jsx(_O,{}),E.jsx(xO,{})]}),E.jsx(MO,{})]})}function bO(){return E.jsxs(uR,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[E.jsx(tP,{position:"top-right",toastOptions:{style:{background:"#121215",color:"#FFFFFF",border:"1px solid #232328"}}}),E.jsx("div",{className:"min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-[#E8602E] selection:text-white",children:E.jsxs(iR,{children:[E.jsx(W0,{path:"/",element:E.jsx(cS,{})}),E.jsx(W0,{path:"*",element:E.jsx(cS,{})})]})})]})}Km.createRoot(document.getElementById("root")).render(E.jsx(Wh.StrictMode,{children:E.jsx(bO,{})}));
