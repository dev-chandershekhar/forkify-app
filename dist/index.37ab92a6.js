function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var r={},i={},o=e.parcelRequire3a11;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequire3a11=o),o.register("27Lyk",(function(e,n){var r,i;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>i),(t=>i=t));var o={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.37ab92a6.js","eyyUD":"icons.c14567a0.svg"}'));var a,c,s={},u=function(t){return t&&t.Math==Math&&t};s=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof e&&e)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!f((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var d,v=Function.prototype.call;h=p?v.bind(v):function(){return v.apply(v,arguments)};var g={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,y=m&&!g.call({1:2},1);d=y?function(t){var e=m(this,t);return!!e&&e.enumerable}:g;var b;b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var _,w,E={},S={},O=Function.prototype,j=O.bind,F=O.call,k=p&&j.bind(F,F),L=(S=p?function(t){return t&&k(t)}:function(t){return t&&function(){return F.apply(t,arguments)}})({}.toString),P=S("".slice);w=function(t){return P(L(t),8,-1)};var $=Object,x=S("".split);E=f((function(){return!$("z").propertyIsEnumerable(0)}))?function(t){return"String"==w(t)?x(t,""):$(t)}:$;var M,T;T=function(t){return null==t};var I=TypeError;M=function(t){if(T(t))throw I("Can't call method on "+t);return t},_=function(t){return E(M(t))};var N,R,q,C={};q=function(t){return"function"==typeof t};var H="object"==typeof document&&document.all;C=void 0===H&&void 0!==H?function(t){return"object"==typeof t?null!==t:q(t)||t===H}:function(t){return"object"==typeof t?null!==t:q(t)};var z,A={},D=function(t){return q(t)?t:void 0};z=function(t,e){return arguments.length<2?D(s[t]):s[t]&&s[t][e]};var G={};G=S({}.isPrototypeOf);var U,W,Y,B={};B=z("navigator","userAgent")||"";var Q,V,J=s.process,K=s.Deno,X=J&&J.versions||K&&K.version,Z=X&&X.v8;Z&&(V=(Q=Z.split("."))[0]>0&&Q[0]<4?1:+(Q[0]+Q[1])),!V&&B&&(!(Q=B.match(/Edge\/(\d+)/))||Q[1]>=74)&&(Q=B.match(/Chrome\/(\d+)/))&&(V=+Q[1]),Y=V,W=!!Object.getOwnPropertySymbols&&!f((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Y&&Y<41})),U=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tt=Object;A=U?function(t){return"symbol"==typeof t}:function(t){var e=z("Symbol");return q(e)&&G(e.prototype,tt(t))};var et,nt,rt,it=String;rt=function(t){try{return it(t)}catch(t){return"Object"}};var ot=TypeError;nt=function(t){if(q(t))return t;throw ot(rt(t)+" is not a function")},et=function(t,e){var n=t[e];return T(n)?void 0:nt(n)};var at,ct=TypeError;at=function(t,e){var n,r;if("string"===e&&q(n=t.toString)&&!C(r=h(n,t)))return r;if(q(n=t.valueOf)&&!C(r=h(n,t)))return r;if("string"!==e&&q(n=t.toString)&&!C(r=h(n,t)))return r;throw ct("Can't convert object to primitive value")};var st;var ut,lt={},ft=Object.defineProperty;ut=function(t,e){try{ft(s,t,{value:e,configurable:!0,writable:!0})}catch(n){s[t]=e}return e};var pt=s["__core-js_shared__"]||ut("__core-js_shared__",{});lt=pt,(st=function(t,e){return lt[t]||(lt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.0/LICENSE",source:"https://github.com/zloirock/core-js"});var ht,dt={},vt=Object;ht=function(t){return vt(M(t))};var gt=S({}.hasOwnProperty);dt=Object.hasOwn||function(t,e){return gt(ht(t),e)};var mt,yt=0,bt=Math.random(),_t=S(1..toString);mt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+_t(++yt+bt,36)};var wt=st("wks"),Et=s.Symbol,St=Et&&Et.for,Ot=U?Et:Et&&Et.withoutSetter||mt,jt=TypeError,Ft=function(t){if(!dt(wt,t)||!W&&"string"!=typeof wt[t]){var e="Symbol."+t;W&&dt(Et,t)?wt[t]=Et[t]:wt[t]=U&&St?St(e):Ot(e)}return wt[t]}("toPrimitive");R=function(t,e){if(!C(t)||A(t))return t;var n,r=et(t,Ft);if(r){if(void 0===e&&(e="default"),n=h(r,t,e),!C(n)||A(n))return n;throw jt("Can't convert object to primitive value")}return void 0===e&&(e="number"),at(t,e)},N=function(t){var e=R(t,"string");return A(e)?e:e+""};var kt,Lt,Pt=s.document,$t=C(Pt)&&C(Pt.createElement);Lt=function(t){return $t?Pt.createElement(t):{}},kt=!l&&!f((function(){return 7!=Object.defineProperty(Lt("div"),"a",{get:function(){return 7}}).a}));var xt,Mt,Tt=Object.getOwnPropertyDescriptor,It=c=l?Tt:function(t,e){if(t=_(t),e=N(e),kt)try{return Tt(t,e)}catch(t){}if(dt(t,e))return b(!h(d,t,e),t[e])},Nt={};Mt=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Rt,qt=String,Ct=TypeError;Rt=function(t){if(C(t))return t;throw Ct(qt(t)+" is not an object")};var Ht=TypeError,zt=Object.defineProperty,At=Object.getOwnPropertyDescriptor;xt=l?Mt?function(t,e,n){if(Rt(t),e=N(e),Rt(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=At(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return zt(t,e,n)}:zt:function(t,e,n){if(Rt(t),e=N(e),Rt(n),kt)try{return zt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ht("Accessors not supported");return"value"in n&&(t[e]=n.value),t},Nt=l?function(t,e,n){return xt(t,e,b(1,n))}:function(t,e,n){return t[e]=n,t};var Dt,Gt,Ut=Function.prototype,Wt=l&&Object.getOwnPropertyDescriptor,Yt=dt(Ut,"name"),Bt={EXISTS:Yt,PROPER:Yt&&"something"===function(){}.name,CONFIGURABLE:Yt&&(!l||l&&Wt(Ut,"name").configurable)}.CONFIGURABLE,Qt={},Vt=S(Function.toString);q(lt.inspectSource)||(lt.inspectSource=function(t){return Vt(t)}),Qt=lt.inspectSource;var Jt,Kt,Xt=s.WeakMap;Kt=q(Xt)&&/native code/.test(String(Xt));var Zt,te=st("keys");Zt=function(t){return te[t]||(te[t]=mt(t))};var ee={};ee={};var ne,re,ie,oe=s.TypeError,ae=s.WeakMap;if(Kt||lt.state){var ce=lt.state||(lt.state=new ae),se=S(ce.get),ue=S(ce.has),le=S(ce.set);ne=function(t,e){if(ue(ce,t))throw oe("Object already initialized");return e.facade=t,le(ce,t,e),e},re=function(t){return se(ce,t)||{}},ie=function(t){return ue(ce,t)}}else{var fe=Zt("state");ee[fe]=!0,ne=function(t,e){if(dt(t,fe))throw oe("Object already initialized");return e.facade=t,Nt(t,fe,e),e},re=function(t){return dt(t,fe)?t[fe]:{}},ie=function(t){return dt(t,fe)}}var pe=(Jt={set:ne,get:re,has:ie,enforce:function(t){return ie(t)?re(t):ne(t,{})},getterFor:function(t){return function(e){var n;if(!C(e)||(n=re(e)).type!==t)throw oe("Incompatible receiver, "+t+" required");return n}}}).enforce,he=Jt.get,de=Object.defineProperty,ve=l&&!f((function(){return 8!==de((function(){}),"length",{value:8}).length})),ge=String(String).split("String"),me=Gt=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!dt(t,"name")||Bt&&t.name!==e)&&(l?de(t,"name",{value:e,configurable:!0}):t.name=e),ve&&n&&dt(n,"arity")&&t.length!==n.arity&&de(t,"length",{value:n.arity});try{n&&dt(n,"constructor")&&n.constructor?l&&de(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var r=pe(t);return dt(r,"source")||(r.source=ge.join("string"==typeof e?e:"")),t};Function.prototype.toString=me((function(){return q(this)&&he(this).source||Qt(this)}),"toString"),Dt=function(t,e,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:e;if(q(n)&&Gt(n,o,r),r.global)i?t[e]=n:ut(e,n);else{try{r.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=n:xt(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t};var ye,be,_e,we,Ee,Se={},Oe={},je=Math.ceil,Fe=Math.floor;Oe=Math.trunc||function(t){var e=+t;return(e>0?Fe:je)(e)},Ee=function(t){var e=+t;return e!=e||0===e?0:Oe(e)};var ke=Math.max,Le=Math.min;we=function(t,e){var n=Ee(t);return n<0?ke(n+e,0):Le(n,e)};var Pe,$e,xe=Math.min;$e=function(t){return t>0?xe(Ee(t),9007199254740991):0},Pe=function(t){return $e(t.length)};var Me=function(t){return function(e,n,r){var i,o=_(e),a=Pe(o),c=we(r,a);if(t&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}},Te={includes:Me(!0),indexOf:Me(!1)}.indexOf,Ie=S([].push);_e=function(t,e){var n,r=_(t),i=0,o=[];for(n in r)!dt(ee,n)&&dt(r,n)&&Ie(o,n);for(;e.length>i;)dt(r,n=e[i++])&&(~Te(o,n)||Ie(o,n));return o};var Ne,Re=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");be=Object.getOwnPropertyNames||function(t){return _e(t,Re)},Ne=Object.getOwnPropertySymbols;var qe=S([].concat);Se=z("Reflect","ownKeys")||function(t){var e=be(Rt(t));return Ne?qe(e,Ne(t)):e},ye=function(t,e,n){for(var r=Se(e),i=xt,o=c,a=0;a<r.length;a++){var s=r[a];dt(t,s)||n&&dt(n,s)||i(t,s,o(e,s))}};var Ce={},He=/#|\.prototype\./,ze=function(t,e){var n=De[Ae(t)];return n==Ue||n!=Ge&&(q(e)?f(e):!!e)},Ae=ze.normalize=function(t){return String(t).replace(He,".").toLowerCase()},De=ze.data={},Ge=ze.NATIVE="N",Ue=ze.POLYFILL="P";Ce=ze,a=function(t,e){var n,r,i,o,a,c=t.target,u=t.global,l=t.stat;if(n=u?s:l?s[c]||ut(c,{}):(s[c]||{}).prototype)for(r in e){if(o=e[r],i=t.dontCallGetSet?(a=It(n,r))&&a.value:n[r],!Ce(u?r:c+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;ye(o,i)}(t.sham||i&&i.sham)&&Nt(o,"sham",!0),Dt(n,r,o,t)}};var We,Ye={},Be=Function.prototype,Qe=Be.apply,Ve=Be.call;Ye="object"==typeof Reflect&&Reflect.apply||(p?Ve.bind(Qe):function(){return Ve.apply(Qe,arguments)});var Je,Ke=S(S.bind);Je=function(t,e){return nt(t),void 0===e?t:p?Ke(t,e):function(){return t.apply(e,arguments)}};var Xe={};Xe=z("document","documentElement");var Ze={};Ze=S([].slice);var tn,en=TypeError;tn=function(t,e){if(t<e)throw en("Not enough arguments");return t};var nn;nn=/(?:ipad|iphone|ipod).*applewebkit/i.test(B);var rn;rn="process"==w(s.process);var on,an,cn,sn,un=s.setImmediate,ln=s.clearImmediate,fn=s.process,pn=s.Dispatch,hn=s.Function,dn=s.MessageChannel,vn=s.String,gn=0,mn={};try{on=s.location}catch(t){}var yn=function(t){if(dt(mn,t)){var e=mn[t];delete mn[t],e()}},bn=function(t){return function(){yn(t)}},_n=function(t){yn(t.data)},wn=function(t){s.postMessage(vn(t),on.protocol+"//"+on.host)};un&&ln||(un=function(t){tn(arguments.length,1);var e=q(t)?t:hn(t),n=Ze(arguments,1);return mn[++gn]=function(){Ye(e,void 0,n)},an(gn),gn},ln=function(t){delete mn[t]},rn?an=function(t){fn.nextTick(bn(t))}:pn&&pn.now?an=function(t){pn.now(bn(t))}:dn&&!nn?(sn=(cn=new dn).port2,cn.port1.onmessage=_n,an=Je(sn.postMessage,sn)):s.addEventListener&&q(s.postMessage)&&!s.importScripts&&on&&"file:"!==on.protocol&&!f(wn)?(an=wn,s.addEventListener("message",_n,!1)):an="onreadystatechange"in Lt("script")?function(t){Xe.appendChild(Lt("script")).onreadystatechange=function(){Xe.removeChild(this),yn(t)}}:function(t){setTimeout(bn(t),0)});var En=(We={set:un,clear:ln}).clear;a({global:!0,bind:!0,enumerable:!0,forced:s.clearImmediate!==En},{clearImmediate:En});var Sn=We.set;a({global:!0,bind:!0,enumerable:!0,forced:s.setImmediate!==Sn},{setImmediate:Sn});var On=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new L(r||[]);return o._invoke=function(t,e,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return $()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?d:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function g(){}function m(){}function y(){}var b={};s(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(P([])));w&&w!==n&&r.call(w,o)&&(b=w);var E=y.prototype=g.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function P(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:$}}function $(){return{value:e,done:!0}}return m.prototype=y,s(E,"constructor",y),s(y,"constructor",m),m.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(O.prototype),s(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new O(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),s(E,c,"Generator"),s(E,o,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}({});try{regeneratorRuntime=On}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=On:Function("r","regeneratorRuntime = r")(On)}const jn=async function(t){try{const n=fetch(t),r=await Promise.race([n,(e=10,new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)})))]),i=await r.json();if(!r.ok)throw new Error(`${i.message} (${r.status})`);return i}catch(t){throw t}var e},Fn={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},kn=function(t=Fn.search.page){Fn.search.page=t;const e=(t-1)*Fn.search.resultsPerPage,n=t*Fn.search.resultsPerPage;return Fn.search.results.slice(e,n)};var Ln,Pn,$n,xn;Ln=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Mn{_data;render(t){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;const e=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const t=`\n    <div class="spinner">\n      <svg>\n        <use href="${n(Ln)}#icon-loader"></use>\n      </svg>\n    </div>\n  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){const e=`<div class="error">\n        <div>\n          <svg>\n            <use href="${n(Ln)}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${t}</p>\n      </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}succsesMessage(t=this._message){const e=`<div class="message">\n        <div>\n          <svg>\n            <use href="src${n(Ln)}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${t}</p>\n      </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}Fraction=function(t,e){if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e)if(num=t,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=t&&r.push(t),0!=e&&r.push((0===t?e:Math.abs(e))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var e=this.clone().normalize();t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},Fraction.prototype.normalize=($n=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},xn=function(t,e){if(e){var n=Math.pow(10,e);return Math.round(t*n)/n}return Math.round(t)},function(){if($n(this.denominator)){var t=xn(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),this.numerator*=e}$n(this.numerator)&&(t=xn(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*e),this.denominator*=e);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(t,e){var n=[],r=Fraction.primeFactors(t),i=Fraction.primeFactors(e);return r.forEach((function(t){var e=i.indexOf(t);e>=0&&(n.push(t),i.splice(e,1))})),0===n.length?1:function(){var t,e=n[0];for(t=1;t<n.length;t++)e*=n[t];return e}()},Fraction.primeFactors=function(t){for(var e=Math.abs(t),n=[],r=2;r*r<=e;)e%r==0?(n.push(r),e/=r):r++;return 1!=e&&n.push(e),n},Pn=Fraction;var Tn=new class extends Mn{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe please try another one!";_message="";addHandlerRender(t){["hashchange","load"].forEach((e=>window.addEventListener(e,t)))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n(Ln)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n             <use href="${n(Ln)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--increase-servings">\n              <svg>\n                <use href="${n(Ln)}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--increase-servings">\n              <svg>\n                <use href="${n(Ln)}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n\n          <div class="recipe__user-generated">\n          \n          </div>\n          <button class="btn--round">\n            <svg class="">\n              <use href="${n(Ln)}#icon-bookmark-fill"></use>\n            </svg>\n          </button>\n        </div>\n\n          <div class="recipe__ingredients">\n            <h2 class="heading--2">Recipe ingredients</h2>\n            <ul class="recipe__ingredient-list">${this._data.ingredients.map(this._getMarkupIngredient).join("")}\n              <li class="recipe__ingredient">\n                <svg class="recipe__icon">\n                  <use href="${n(Ln)}#icon-check"></use>\n                </svg>\n                <div class="recipe__quantity">0.5</div>\n                <div class="recipe__description">\n                  <span class="recipe__unit">cup</span>\n                  ricotta cheese\n                </div>\n              </li>\n            </ul>\n          </div>\n\n          <div class="recipe__directions">\n            <h2 class="heading--2">How to cook it</h2>\n            <p class="recipe__directions-text">\n              This recipe was carefully designed and tested by\n              <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n              directions at their website.\n            </p>\n            <a\n              class="btn--small recipe__btn"\n              href="${this._data.sourceUrl}"\n              target="_blank"\n            >\n              <span>Directions</span>\n              <svg class="search__icon">\n                <use href="${n(Ln)}#icon-arrow-right"></use>\n              </svg>\n            </a>\n        </div>\n    `}_getMarkupIngredient(t){return`\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${n(Ln)}#icon-check"></use>\n        </svg>\n        <div class="recipe__quantity">${t.quantity?new Pn(t.quantity).toString():""}</div>\n        <div class="recipe__description">\n          <span class="recipe__unit">${t.unit}</span>\n          ${t.description}\n        </div>\n    </li>`}};var In=new class{_parentElement=document.querySelector(".search");getQuery(){const t=this._parentElement.querySelector(".search__field").value;return this._clearInput(),t}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(t){this._parentElement.addEventListener("submit",(function(e){e.preventDefault(),t()}))}};var Nn=new class extends Mn{_parentElement=document.querySelector(".results");_errorMessage="No Recipe found for your query! Please try again ;";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(t){return`\n      <li class="preview">\n        <a class="preview__link" href="#${t.id}">\n          <figure class="preview__fig">\n            <img src="${t.image}" alt="${t.title}" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${t.title}</h4>\n            <p class="preview__publisher">${t.publisher}</p>\n          </div>\n        </a>\n      </li>\n    `}};var Rn=new class extends Mn{_parentElement=document.querySelector(".pagination");addHandlerClick(t){this._parentElement.addEventListener("click",(function(e){const n=e.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;t(r)}))}_generateMarkup(){const t=this._data.page,e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===t&&e>1?`\n        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${t+1}</span>\n          <svg class="search__icon">\n            <use href="${n(Ln)}#icon-arrow-right"></use>\n          </svg>\n        </button> \n      `:t===e&&e>1?`\n        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${n(Ln)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${t-1}</span>\n        </button>\n      `:t<e?`\n        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">\n          <span>Page ${t+1}</span>\n          <svg class="search__icon">\n            <use href="${n(Ln)}#icon-arrow-right"></use>\n          </svg>\n        </button> \n         <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${n(Ln)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${t-1}</span>\n        </button>\n      `:""}};const qn=async function(){try{const t=window.location.hash.slice(1);if(!t)return;Tn.renderSpinner(),await async function(t){try{const e=await jn(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`),{recipe:n}=e.data;Fn.recipe={id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients}}catch(t){throw console.error(`${t} 💣`),t}}(t);const{recipe:e}=Fn;Tn.render(Fn.recipe)}catch(t){Tn.renderError()}},Cn=async function(){try{Nn.renderSpinner();const t=In.getQuery();if(!t)return;await async function(t){try{Fn.search.query=t;const e=await jn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${t}`);Fn.search.results=e.data.recipes.map((t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url})))}catch(t){throw console.error(`${t} 💣`),t}}(t),Nn.render(kn()),Rn.render(Fn.search)}catch(t){console.log(t)}},Hn=function(t){Nn.render(kn(t)),Rn.render(Fn.search)};Tn.addHandlerRender(qn),In.addHandlerSearch(Cn),Rn.addHandlerClick(Hn);
//# sourceMappingURL=index.37ab92a6.js.map
