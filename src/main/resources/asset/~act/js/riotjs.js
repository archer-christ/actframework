/* Riot v3.10.0, @license MIT */
var e,t;e=this,t=function(){"use strict";function s(e,t){return(t||document).querySelector(e)}var t,r,x=[],P={},a="yield",y="__global_mixin",w="riot-",u=["ref","data-ref"],p="data-is",f="if",d="each",n="no-reorder",_="show",A="hide",i="key",b="__riot-events__",l="string",$="object",o="undefined",c="function",h="http://www.w3.org/1999/xlink",m="http://www.w3.org/2000/svg",g=/^xlink:(\w+)/,v=typeof window===o?void 0:window,O=/^on/,N=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,E={viewbox:"viewBox",preserveaspectratio:"preserveAspectRatio"},C=/^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,j=0|(v&&v.document||{}).documentMode;function S(e){return"svg"===e?document.createElementNS(m,e):document.createElement(e)}function k(e,t,r){var n=g.exec(t);n&&n[1]?e.setAttributeNS(h,n[1],r):e.setAttribute(t,r)}var e,T,L={},I=!1;v&&(e=S("style"),T=s("style[type=riot]"),k(e,"type","text/css"),T?(T.id&&(e.id=T.id),T.parentNode.replaceChild(e,T)):document.head.appendChild(e),r=(t=e).styleSheet);var R={styleNode:t,add:function(e,t){L[t]=e,I=!0},inject:function(){if(v&&I){I=!1;var e=Object.keys(L).map(function(e){return L[e]}).join("\n");r?r.cssText=e:t.innerHTML=e}},remove:function(e){delete L[e],I=!0}},M=function(){var u="[{(,;:?=|&!^~>%*/",l=["case","default","do","else","in","instanceof","prefix","return","typeof","void","yield"],c=l.reduce(function(e,t){return e+t.slice(-1)},""),p=/^\/(?=[^*>/])[^[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*/,f=/[$\w]/;function d(e,t){for(;0<=--t&&/\s/.test(e[t]););return t}return function(e,t){var r=/.*/g,n=r.lastIndex=t++,i=r.exec(e)[0].match(p);if(i){var o=n+i[0].length,s=e[n=d(e,n)];if(n<0||~u.indexOf(s))return o;if("."===s)"."===e[n-1]&&(t=o);else if("+"===s||"-"===s)(e[--n]!==s||(n=d(e,n))<0||!f.test(e[n]))&&(t=o);else if(~c.indexOf(s)){for(var a=n+1;0<=--n&&f.test(e[n]););~l.indexOf(e.slice(n+1,a))&&(t=o)}}return t}}(),F=function(e){var t,r,n="g",i=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,o=i.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,s=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),a=/(?=[[\]()*+?.^$|])/g,u=i.source+"|"+/(\/)(?![*\/])/.source,x={"(":RegExp("([()])|"+u,n),"[":RegExp("([[\\]])|"+u,n),"{":RegExp("([{}])|"+u,n)},l="{ }",c=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+u,n),l,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],p=void 0,y=[];function f(e){return e}function d(e,t){return t||(t=y),new RegExp(e.source.replace(/{/g,t[2]).replace(/}/g,t[3]),e.global?n:"")}function h(e){if(e===l)return c;var t=e.split(" ");if(2!==t.length||s.test(e))throw new Error('Unsupported brackets "'+e+'"');return(t=t.concat(e.replace(a,"\\").split(" ")))[4]=d(1<t[1].length?/{[\S\s]*?}/:c[4],t),t[5]=d(3<e.length?/\\({|})/g:c[5],t),t[6]=d(c[6],t),t[7]=RegExp("\\\\("+t[3]+")|([[({])|("+t[3]+")|"+u,n),t[8]=e,t}function m(e){return e instanceof RegExp?t(e):y[e]}function g(e){(e||(e=l))!==y[8]&&(y=h(e),t=e===l?f:d,y[9]=t(c[9])),p=e}return m.split=function(n,i,t){t||(t=y);var e,r,o,s,a,u,l=[],c=t[6],p=[],f="";for(r=o=c.lastIndex=0;e=c.exec(n);){if(u=c.lastIndex,s=e.index,r){if(e[2]){var d=e[2],h=x[d],m=1;for(h.lastIndex=u;e=h.exec(n);)if(e[1]){if(e[1]===d)++m;else if(!--m)break}else h.lastIndex=v(e.index,h.lastIndex,e[2]);c.lastIndex=m?n.length:h.lastIndex;continue}if(!e[3]){c.lastIndex=v(s,u,e[4]);continue}}e[1]||(g(n.slice(o,s)),o=c.lastIndex,(c=t[6+(r^=1)]).lastIndex=o)}return n&&o<n.length&&g(n.slice(o)),l.qblocks=p,l;function g(e){f&&(e=f+e,f=""),i||r?l.push(e&&e.replace(t[5],"$1")):l.push(e)}function v(e,t,r){return r&&(t=M(n,e)),i&&e+2<t&&(a="⁗"+p.length+"~",p.push(n.slice(e,t)),f+=n.slice(o,e)+a,o=t),t}},m.hasExpr=function(e){return y[4].test(e)},m.loopKeys=function(e){var t=e.match(y[9]);return t?{key:t[1],pos:t[2],val:y[0]+t[3].trim()+y[1]}:{val:e.trim()}},m.array=function(e){return e?h(e):y},Object.defineProperty(m,"settings",{set:function(e){var t;t=(e=e||{}).brackets,Object.defineProperty(e,"brackets",{set:g,get:function(){return p},enumerable:!0}),r=e,g(t)},get:function(){return r}}),m.settings="undefined"!=typeof riot&&riot.settings||{},m.set=g,m.skipRegex=M,m.R_STRINGS=i,m.R_MLCOMMS=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,m.S_QBLOCKS=o,m.S_QBLOCK2=u,m}(),z=function(){var r={};function n(e,t){return e?(r[e]||(r[e]=function(e){var t=function(e){var t,r=F.split(e.replace(a,'"'),1),n=r.qblocks;if(2<r.length||r[0]){var i,o,s=[];for(i=o=0;i<r.length;++i)(t=r[i])&&(t=1&i?l(t,1,n):'"'+t.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(s[o++]=t);t=o<2?s[0]:"["+s.join(",")+'].join("")'}else t=l(r[1],0,n);n.length&&(t=t.replace(u,function(e,t){return n[t].replace(/\r/g,"\\r").replace(/\n/g,"\\n")}));return t}(e);"try{return "!==t.slice(0,11)&&(t="return "+t);return new Function("E",t+";")}(e))).call(t,function(e,t){e.riotData={tagName:t&&t.__&&t.__.tagName,_riot_id:t&&t._riot_id},n.errorHandler?n.errorHandler(e):"undefined"!=typeof console&&"function"==typeof console.error&&(console.error(e.message),console.log("<%s> %s",e.riotData.tagName||"Unknown tag",this.tmpl),console.log(this.data))}.bind({data:t,tmpl:e})):e}n.hasExpr=F.hasExpr,n.loopKeys=F.loopKeys,n.clearCache=function(){r={}},n.errorHandler=null;var a=/\u2057/g,u=/\u2057(\d+)~/g;var c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,p={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g};function l(o,e,t){if(o=o.replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var r,n=[],i=0;o&&(r=o.match(c))&&!r.index;){var s,a,u=/,|([[{(])|$/g;for(o=RegExp.rightContext,s=r[2]?t[r[2]].slice(1,-1).trim().replace(/\s+/g," "):r[1];a=(r=u.exec(o))[1];)l(a,u);a=o.slice(0,r.index),o=RegExp.rightContext,n[i++]=d(a,1,s)}o=i?1<i?"["+n.join(",")+'].join(" ").trim()':n[0]:d(o,e)}return o;function l(e,t){var r,n=1,i=p[e];for(i.lastIndex=t.lastIndex;r=i.exec(o);)if(r[0]===e)++n;else if(!--n)break;t.lastIndex=n?o.length:i.lastIndex}}var s='"in this?this:'+("object"!=typeof window?"global":"window")+").",i=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,f=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;function d(e,t,r){var o;return e=e.replace(i,function(e,t,r,n,i){return r&&(n=o?0:n+e.length,"this"!==r&&"global"!==r&&"window"!==r?(e=t+'("'+r+s+r,n&&(o="."===(i=i[n])||"("===i||"["===i)):n&&(o=!f.test(i.slice(n)))),e}),o&&(e="try{return "+e+"}catch(e){E(e,this)}"),r?e=(o?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+r+'":""':t&&(e="function(v){"+(o?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'),e}return n.version=F.version="v3.0.8",n}(),H=function(a){a=a||{};var u={},l=Array.prototype.slice;return Object.defineProperties(a,{on:{value:function(e,t){return"function"==typeof t&&(u[e]=u[e]||[]).push(t),a},enumerable:!1,writable:!1,configurable:!1},off:{value:function(e,t){if("*"!=e||t)if(t)for(var r,n=u[e],i=0;r=n&&n[i];++i)r==t&&n.splice(i--,1);else delete u[e];else u={};return a},enumerable:!1,writable:!1,configurable:!1},one:{value:function(t,r){return a.on(t,function e(){a.off(t,e),r.apply(a,arguments)})},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(e){var t,r,n,i=arguments,o=arguments.length-1,s=new Array(o);for(n=0;n<o;n++)s[n]=i[n+1];for(t=l.call(u[e]||[],0),n=0;r=t[n];++n)r.apply(a,s);return u["*"]&&"*"!=e&&a.trigger.apply(a,["*",e].concat(s)),a},enumerable:!1,writable:!1,configurable:!1}}),a};function U(e,t){return Object.getOwnPropertyDescriptor(e,t)}function V(e){return typeof e===o}function B(e,t){var r=U(e,t);return V(e[t])||r&&r.writable}function q(e){for(var t,r=1,n=arguments,i=n.length;r<i;r++)if(t=n[r])for(var o in t)B(e,o)&&(e[o]=t[o]);return e}function D(e){return Object.create(e)}var Z=q(D(F.settings),{skipAnonymousTags:!0,autoUpdate:!0});function G(e,t){return[].slice.call((t||document).querySelectorAll(e))}function K(){return document.createTextNode("")}function W(e,t){e.style.display=t?"":"none",e.hidden=!t}function J(e,t){return e.getAttribute(t)}function Q(e,t){e.removeAttribute(t)}function X(e,t,r){if(r){var n=e.ownerDocument.importNode((new DOMParser).parseFromString('<svg xmlns="'+m+'">'+t+"</svg>","application/xml").documentElement,!0);e.appendChild(n)}else e.innerHTML=t}function Y(e,t){if(e)for(var r;r=N.exec(e);)t(r[1].toLowerCase(),r[2]||r[3]||r[4])}function ee(){return document.createDocumentFragment()}function te(e,t,r){e.insertBefore(t,r.parentNode&&r)}function re(r){return Object.keys(r).reduce(function(e,t){return e+" "+t+": "+r[t]+";"},"")}function ne(e,t,r){if(e){var n,i=t(e,r);if(!1===i)return;for(e=e.firstChild;e;)n=e.nextSibling,ne(e,t,i),e=n}}var ie=Object.freeze({$$:G,$:s,createDOMPlaceholder:K,mkEl:S,setAttr:k,toggleVisibility:W,getAttr:J,remAttr:Q,setInnerHTML:X,walkAttrs:Y,createFrag:ee,safeInsert:te,styleObjectToString:re,walkNodes:ne});function oe(e){return V(e)||null===e}function se(e){return oe(e)||""===e}function ae(e){return typeof e===c}function ue(e){return e&&typeof e===$}function le(e){var t=e.ownerSVGElement;return!!t||null===t}function ce(e){return Array.isArray(e)||e instanceof Array}function pe(e){return C.test(e)}function fe(e){return typeof e===l}var de=Object.freeze({isBlank:se,isFunction:ae,isObject:ue,isSvg:le,isWritable:B,isArray:ce,isBoolAttr:pe,isNil:oe,isString:fe,isUndefined:V});function he(e,t){return-1!==e.indexOf(t)}function me(e,t){for(var r=e?e.length:0,n=0;n<r;n++)t(e[n],n);return e}function ge(e,t){return e.slice(0,t.length)===t}var ve,xe=(ve=-1,function(){return++ve});function ye(e,t,r,n){return Object.defineProperty(e,t,q({value:r,enumerable:!1,writable:!1,configurable:!0},n)),e}function be(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function we(e){console&&console.warn&&console.warn(e)}var _e=Object.freeze({contains:he,each:me,getPropDescriptor:U,startsWith:ge,uid:xe,defineProperty:ye,objectCreate:D,extend:q,toCamel:be,warn:we});function Ae(e,t,r,n,i){var o=e[t],s=ce(o),a=!V(i);if(!o||o!==r)if(!o&&n)e[t]=[r];else if(o)if(s){var u=o.indexOf(r);if(u===i)return;-1!==u&&o.splice(u,1),a?o.splice(i,0,r):o.push(r)}else e[t]=[o,r];else e[t]=r}function Oe(e){return e.tagName&&P[J(e,p)||J(e,p)||e.tagName.toLowerCase()]}function Ne(e,t){var r=Oe(e),n=!t&&J(e,p);return n&&!z.hasExpr(n)?n:r?r.name:e.tagName.toLowerCase()}function Ee(){return this.parent?q(D(this),this.parent):this}var Ce=/<yield\b/i,je=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,Se=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,ke=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,Te={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},Le=j&&j<10?/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,Ie="div",Re="svg";function Me(e,t,r){var n=e&&e.match(/^\s*<([-\w]+)/),i=n&&n[1].toLowerCase(),o=S(r?Re:Ie);return e=function(e,r){if(!Ce.test(e))return e;var n={};return r=r&&r.replace(Se,function(e,t,r){return n[t]=n[t]||r,""}).trim(),e.replace(ke,function(e,t,r){return n[t]||r||""}).replace(je,function(e,t){return r||t||""})}(e,t),Le.test(i)?o=function(e,t,r){var n="o"===r[0],i=n?"select>":"table>";if(e.innerHTML="<"+i+t.trim()+"</"+i,i=e.firstChild,n)i.selectedIndex=-1;else{var o=Te[r];o&&1===i.childElementCount&&(i=s(o,i))}return i}(o,e,i):X(o,e,r),o}function Pe(e){for(var t=e;t.__.isAnonymous&&t.parent;)t=t.parent;return t}function $e(e,t,r,n){var i,o=function(e,t,r){var n=this.__.parent,i=this.__.item;if(!i)for(;n&&!i;)i=n.__.item,n=n.__.parent;if(B(r,"currentTarget")&&(r.currentTarget=e),B(r,"target")&&(r.target=r.srcElement),B(r,"which")&&(r.which=r.charCode||r.keyCode),r.item=i,t.call(this,r),Z.autoUpdate&&!r.preventUpdate){var o=Pe(this);o.isMounted&&o.update()}}.bind(n,r,t);r[e]=null,i=e.replace(O,""),he(n.__.listeners,r)||n.__.listeners.push(r),r[b]||(r[b]={}),r[b][e]&&r.removeEventListener(i,r[b][e]),r[b][e]=o,r.addEventListener(i,o,!1)}function Fe(e,t,r,n){var i=gt(e,t,r),o=t.tagName||Ne(t.root,!0),s=Pe(n);return ye(i,"parent",s),i.__.parent=n,Ae(s.tags,o,i),s!==n&&Ae(n.tags,o,i),i}function ze(e,t,r,n){if(ce(e[t])){var i=e[t].indexOf(r);-1!==i&&e[t].splice(i,1),e[t].length?1!==e[t].length||n||(e[t]=e[t][0]):delete e[t]}else e[t]===r&&delete e[t]}function He(e,t){var r,n,i=K(),o=K(),s=ee();for(this.root.insertBefore(i,this.root.firstChild),this.root.appendChild(o),this.__.head=n=i,this.__.tail=o;n;)r=n.nextSibling,s.appendChild(n),this.__.virts.push(n),n=r;t?e.insertBefore(s,t.__.head):e.appendChild(s)}function Ue(e,t){var r=ee();He.call(e,r),t.parentNode.replaceChild(r,t)}function Ve(e){if(!this.root||!J(this.root,"virtualized")){var t,r,n=e.dom,i=(t=e.attr)?(t=t.replace(w,""),E[t]&&(t=E[t]),t):null,o=he([_,A],i),s=e.root&&"VIRTUAL"===e.root.tagName,a=this.__.isAnonymous,u=n&&(e.parent||n.parentNode),l="style"===i,c="class"===i;if(e._riot_id)e.__.wasCreated?e.update():(e.mount(),s&&Ue(e,e.root));else{if(e.update)return e.update();var p,f,d,h,m,g,v,x=o&&!a?Ee.call(this):this,y=!se(r=z(e.expr,x)),b=ue(r);if(b&&(c?r=z(JSON.stringify(r),this):l&&(r=re(r))),!e.attr||e.wasParsedOnce&&y&&!1!==r||Q(n,J(n,e.attr)?e.attr:i),e.bool&&(r=!!r&&i),e.isRtag)return f=this,d=r,m=(p=e).tag||p.dom._tag,g=(m?m.__:{}).head,v="VIRTUAL"===p.dom.tagName,void(m&&p.tagName===d?m.update():(m&&(v&&(h=K(),g.parentNode.insertBefore(h,g)),m.unmount(!0)),fe(d)&&(p.impl=P[d],p.impl&&(p.tag=m=Fe(p.impl,{root:p.dom,parent:f,tagName:d},p.dom.innerHTML,f),me(p.attrs,function(e){return k(m.root,e.name,e.value)}),p.tagName=d,m.mount(),v&&Ue(m,h||m.root),f.__.onUnmount=function(){var e=m.opts.dataIs;ze(m.parent.tags,e,m),ze(m.__.parent.tags,e,m),m.unmount()}))));if((!e.wasParsedOnce||e.value!==r)&&(e.value=r,e.wasParsedOnce=!0,!b||c||l||o)){if(y||(r=""),!i)return r+="",void(u&&("TEXTAREA"===(e.parent=u).tagName?(u.value=r,j||(n.nodeValue=r)):n.nodeValue=r));ae(r)?$e(i,r,n,this):o?W(n,i===A?!r:r):(e.bool&&(n[i]=r),"value"===i&&n.value!==r?n.value=r:y&&!1!==r&&k(n,i,r),l&&n.hidden&&W(n,!1))}}}}function Be(e){me(e,Ve.bind(this))}function qe(e,t,r,n,i){if(!e||!r){var o=e?Ee.call(this):t||this;me(i,function(e){e.expr&&Ve.call(o,e.expr),n[be(e.name).replace(w,"")]=e.expr?e.expr.value:e.value})}}function De(e){if(!e){var t=Object.keys(P);return t+De(t)}return e.filter(function(e){return!/[^-\w]/.test(e)}).reduce(function(e,t){var r=t.trim().toLowerCase();return e+",["+p+'="'+r+'"]'},"")}function Ze(e,t){var r=this,n=r.name,i=r.tmpl,o=r.css,s=r.attrs,a=r.onCreate;return P[n]||(Ge(n,i,o,s,a),P[n].class=this.constructor),vt(e,n,t,this),o&&R.inject(),this}function Ge(e,t,r,n,i){return ae(n)&&(i=n,/^[\w-]+\s?=/.test(r)?(n=r,r=""):n=""),r&&(ae(r)?i=r:R.add(r,e)),e=e.toLowerCase(),P[e]={name:e,tmpl:t,attrs:n,fn:i},e}function Ke(e,t,r,n,i){return r&&R.add(r,e),P[e]={name:e,tmpl:t,attrs:n,fn:i},e}function We(e,i,o){var t,r,s=[];if(R.inject(),ue(i)&&(o=i,i=0),t=fe(e)?(e="*"===e?r=De():e+De(e.split(/, */)))?G(e):[]:e,"*"===i){if(i=r||De(),t.tagName)t=G(i,t);else{var n=[];me(t,function(e){return n.push(G(i,e))}),t=n}i=0}return function e(t){if(t.tagName){var r,n=J(t,p);i&&n!==i&&k(t,p,n=i),(r=vt(t,n||t.tagName.toLowerCase(),o))&&s.push(r)}else t.length&&me(t,e)}(t),s}var Je={},Qe=Je[y]={},Xe=0;function Ye(e,t,r){if(ue(e))Ye("__"+Xe+++"__",e,!0);else{var n=r?Qe:Je;if(!t){if(V(n[e]))throw new Error("Unregistered mixin: "+e);return n[e]}n[e]=ae(t)?q(t.prototype,n[e]||{})&&t:q(n[e]||{},t)}}function et(){return me(x,function(e){return e.update()})}function tt(e){return R.remove(e),delete P[e]}var rt=Object.freeze({Tag:Ze,tag:Ge,tag2:Ke,mount:We,mixin:Ye,update:et,unregister:tt,version:"v3.10.0"});function nt(e,t){var r,n=this.parent;n&&(ce(r=n.tags[e])?r.splice(t,0,r.splice(r.indexOf(this),1)[0]):Ae(n.tags,e,this))}function it(e,t){for(var r,n=this.__.head,i=ee();n;)if(r=n.nextSibling,i.appendChild(n),(n=r)===this.__.tail){i.appendChild(n),e.insertBefore(i,t.__.head);break}}function ot(e,t,r){var n={};return n[e.key]=t,e.pos&&(n[e.pos]=r),n}function st(e,t){e.splice(t,1),this.unmount(),ze(this.parent,this,this.__.tagName,!0)}function at(w,_,A){var O=typeof J(w,n)!==l||Q(w,n),N=J(w,i),E=!!N&&z.hasExpr(N),C=Ne(w),j=P[C],e=w.parentNode,t=K(),S=Oe(w),k=J(w,f),T=[],L=w.innerHTML,I=!P[C],R="VIRTUAL"===w.tagName,M=[];return Q(w,d),Q(w,i),(A=z.loopKeys(A)).isLoop=!0,k&&Q(w,f),e.insertBefore(t,w),e.removeChild(w),A.update=function(){A.value=z(A.val,_);var m=A.value,g=ee(),e=!ce(m)&&!fe(m),v=t.parentNode,x=[],y=e&&!!m;if(v){e&&(m=m?Object.keys(m).map(function(e){return ot(A,m[e],e)}):[]);var b=0;me(m,function(e,t){t-=b;var r=!y&&A.key?ot(A,e,t):e;if(!k||z(k,q(D(_),r))){var n,i,o,s,a=(i=e,o=r,s=E,(n=N)?s?z(n,o):i[n]:i),u=O&&typeof e===$,l=M.indexOf(a),c=-1===l,p=!c&&u?l:t,f=T[p],d=t>=M.length,h=u&&c||!u&&!f;h?((f=gt(j,{parent:_,isLoop:!0,isAnonymous:I,tagName:C,root:w.cloneNode(I),item:r,index:t},L)).mount(),d?function(e,t){t?He.call(this,e):e.appendChild(this.root)}.apply(f,[g||v,R]):function(e,t,r){r?He.apply(this,[e,t]):te(e,this.root,t.root)}.apply(f,[v,T[t],R]),d||M.splice(t,0,r),T.splice(t,0,f),S&&Ae(_.tags,C,f,!0)):p!==t&&u&&((N||he(m,M[p]))&&(function(e,t,r){r?it.apply(this,[e,t]):te(e,this.root,t.root)}.apply(f,[v,T[t],R]),T.splice(t,0,T.splice(p,1)[0]),M.splice(t,0,M.splice(p,1)[0])),A.pos&&(f[A.pos]=t),!S&&f.tags&&function(t){var r=this;me(Object.keys(this.tags),function(e){nt.apply(r.tags[e],[e,t])})}.call(f,t)),q(f.__,{item:r,index:t,parent:_}),x[t]=a,h||f.update(r)}else b++}),function(e,t,r){for(var n=t.length,i=e.length-r;i<n;)st.apply(t[--n],[t,n])}(m,T,b),M=x.slice(),v.insertBefore(g,t)}},A.unmount=function(){me(T,function(e){e.unmount()})},A}var ut={init:function(e,t,r,n){return this.dom=e,this.attr=r,this.rawValue=n,this.parent=t,this.hasExp=z.hasExpr(n),this},update:function(){var e=this.value,t=this.parent&&Pe(this.parent),r=this.dom.__ref||this.tag||this.dom;this.value=this.hasExp?z(this.rawValue,this.parent):this.rawValue,!se(e)&&t&&ze(t.refs,e,r),!se(this.value)&&fe(this.value)?(t&&Ae(t.refs,this.value,r,null,this.parent.__.index),this.value!==e&&k(this.dom,this.attr,this.value)):Q(this.dom,this.attr),this.dom.__ref||(this.dom.__ref=r)},unmount:function(){var e=this.tag||this.dom,t=this.parent&&Pe(this.parent);!se(this.value)&&t&&ze(t.refs,this.value,e)}};function lt(e,t,r,n){return D(ut).init(e,t,r,n)}function ct(e){me(e,function(e){e.unmount?e.unmount(!0):e.tagName?e.tag.unmount(!0):e.unmount&&e.unmount()})}var pt={init:function(e,t,r){Q(e,f),q(this,{tag:t,expr:r,stub:K(),pristine:e});var n=e.parentNode;return n.insertBefore(this.stub,e),n.removeChild(e),this},update:function(){this.value=z(this.expr,this.tag),this.value&&!this.current?(this.current=this.pristine.cloneNode(!0),this.stub.parentNode.insertBefore(this.current,this.stub),this.expressions=dt.apply(this.tag,[this.current,!0])):!this.value&&this.current&&(this.unmount(),this.current=null,this.expressions=[]),this.value&&Be.call(this.tag,this.expressions)},unmount:function(){this.current&&(this.current._tag?this.current._tag.unmount():this.current.parentNode&&this.current.parentNode.removeChild(this.current)),ct(this.expressions||[])}};function ft(e,t,r){return D(pt).init(e,t,r)}function dt(a,u){var l=this,c=[];return ne(a,function(e){var t,r,n=e.nodeType;if((u||e!==a)&&(3===n&&"STYLE"!==e.parentNode.tagName&&z.hasExpr(e.nodeValue)&&c.push({dom:e,expr:e.nodeValue}),1===n)){var i="VIRTUAL"===e.tagName;if(t=J(e,d))return i&&k(e,"loopVirtual",!0),c.push(at(e,l,t)),!1;if(t=J(e,f))return c.push(ft(e,l,t)),!1;if((t=J(e,p))&&z.hasExpr(t))return c.push({isRtag:!0,expr:t,dom:e,attrs:[].slice.call(e.attributes)}),!1;if(r=Oe(e),i&&(J(e,"virtualized")&&e.parentElement.removeChild(e),r||J(e,"virtualized")||J(e,"loopVirtual")||(r={tmpl:e.outerHTML})),r&&(e!==a||u)){var o=J(e,p);if(!i||o)return o&&i&&we("Virtual tags shouldn't be used together with the \""+p+'" attribute - https://github.com/riot/riot/issues/2511'),c.push(Fe(r,{root:e,parent:l},e.innerHTML,l)),!1;k(e,"virtualized",!0);var s=gt({tmpl:e.outerHTML},{root:e,parent:l},e.innerHTML);c.push(s)}ht.apply(l,[e,e.attributes,function(e,t){t&&c.push(t)}])}}),c}function ht(i,e,o){var s=this;me(e,function(e){if(!e)return!1;var t,r=e.name,n=pe(r);he(u,r)&&i.tagName.toLowerCase()!==a?t=lt(i,s,r,e.value):z.hasExpr(e.value)&&(t={dom:i,expr:e.value,attr:r,bool:n}),o(e,t)})}function mt(e){var t=this.__.isAnonymous;ye(this,"isMounted",e),t||(e?this.trigger("mount"):(this.trigger("unmount"),this.off("*"),this.__.wasCreated=!1))}function gt(e,t,r){void 0===e&&(e={}),void 0===t&&(t={});var n,a=t.context||{},i=t.opts||{},o=t.parent,s=t.isLoop,u=!!t.isAnonymous,l=Z.skipAnonymousTags&&u,c=t.item,p=t.index,f=e.tmpl,d=[],h=t.root,m=t.tagName||Ne(h),g="virtual"===m,v=!g&&!f;return v||s&&u?n=h:(g||(h.innerHTML=""),n=Me(f,r,le(h))),l||H(a),e.name&&h._tag&&h._tag.unmount(!0),ye(a,"__",{impl:e,root:h,skipAnonymous:l,implAttrs:[],isAnonymous:u,instAttrs:[],innerHTML:r,tagName:m,index:p,isLoop:s,isInline:v,item:c,parent:o,listeners:[],virts:[],wasCreated:!1,tail:null,head:null}),[["isMounted",!1],["_riot_id",xe()],["root",h],["opts",i,{writable:!0,enumerable:!0}],["parent",o||null],["tags",{}],["refs",{}],["update",function(e){return r=e,n=d,i=(t=a).__,o={},s=t.isMounted&&!i.skipAnonymous,i.isAnonymous&&i.parent&&q(t,i.parent),q(t,r),qe.apply(t,[i.isLoop,i.parent,i.isAnonymous,o,i.instAttrs]),s&&t.isMounted&&ae(t.shouldUpdate)&&!t.shouldUpdate(r,o)||(q(t.opts,o),s&&t.trigger("update",r),Be.call(t,n),s&&t.trigger("updated")),t;var t,r,n,i,o,s}],["mixin",function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return function(s){for(var e=[],t=arguments.length-1;0<t--;)e[t]=arguments[t+1];return me(e,function(e){var n,t,r=[],i=["init","__proto__"];e=fe(e)?Ye(e):e,n=ae(e)?new e:e;for(var o=Object.getPrototypeOf(n);r=r.concat(Object.getOwnPropertyNames(t||n)),t=Object.getPrototypeOf(t||n););me(r,function(e){if(!he(i,e)){var t=U(n,e)||U(o,e),r=t&&(t.get||t.set);!s.hasOwnProperty(e)&&r?Object.defineProperty(s,e,t):s[e]=ae(n[e])?n[e].bind(s):n[e]}}),n.init&&n.init.bind(s)(s.opts)}),s}.apply(void 0,[a].concat(e))}],["mount",function(){return function(r,e,n,t){var i=r.__,o=i.root;o._tag=r,ht.apply(i.parent,[o,o.attributes,function(e,t){!i.isAnonymous&&ut.isPrototypeOf(t)&&(t.tag=r),e.expr=t,i.instAttrs.push(e)}]),Y(i.impl.attrs,function(e,t){i.implAttrs.push({name:e,value:t})}),ht.apply(r,[o,i.implAttrs,function(e,t){t?n.push(t):k(o,e.name,e.value)}]),qe.apply(r,[i.isLoop,i.parent,i.isAnonymous,t,i.instAttrs]);var s=Ye(y);if(s&&!i.skipAnonymous)for(var a in s)s.hasOwnProperty(a)&&r.mixin(s[a]);if(i.impl.fn&&i.impl.fn.call(r,t),i.skipAnonymous||r.trigger("before-mount"),me(dt.apply(r,[e,i.isAnonymous]),function(e){return n.push(e)}),r.update(i.item),!i.isAnonymous&&!i.isInline)for(;e.firstChild;)o.appendChild(e.firstChild);if(ye(r,"root",o),!i.skipAnonymous&&r.parent){var u=Pe(r.parent);u.one(u.isMounted?"updated":"mount",function(){mt.call(r,!0)})}else mt.call(r,!0);return r.__.wasCreated=!0,r}(a,n,d,i)}],["unmount",function(e){return function(t,e,r){var n=t.__,i=n.root,o=x.indexOf(t),s=i.parentNode;if(n.skipAnonymous||t.trigger("before-unmount"),Y(n.impl.attrs,function(e){ge(e,w)&&(e=e.slice(w.length)),Q(i,e)}),t.__.listeners.forEach(function(t){Object.keys(t[b]).forEach(function(e){t.removeEventListener(e,t[b][e])})}),-1!==o&&x.splice(o,1),n.parent&&!n.isAnonymous){var a=Pe(n.parent);n.isVirtual?Object.keys(t.tags).forEach(function(e){return ze(a.tags,e,t.tags[e])}):ze(a.tags,n.tagName,t)}return t.__.virts&&me(t.__.virts,function(e){e.parentNode&&e.parentNode.removeChild(e)}),ct(r),me(n.instAttrs,function(e){return e.expr&&e.expr.unmount&&e.expr.unmount()}),e?X(i,""):s&&s.removeChild(i),n.onUnmount&&n.onUnmount(),t.isMounted||mt.call(t,!0),mt.call(t,!1),delete i._tag,t}(a,e,d)}]].reduce(function(e,t){var r=t[0],n=t[1],i=t[2];return ye(a,r,n,i),e},q(a,c))}function vt(e,t,r,n){var i,o=P[t],s=P[t].class,a=n||(s?D(s.prototype):{}),u=e._innerHTML=e._innerHTML||e.innerHTML,l=q({root:e,opts:r,context:a},{parent:r?r.parent:null});return o&&e&&(i=gt(o,l,u)),i&&i.mount&&(i.mount(!0),he(x,i)||x.push(i)),i}var xt=Object.freeze({arrayishAdd:Ae,getTagName:Ne,inheritParentProps:Ee,mountTo:vt,selectTags:De,arrayishRemove:ze,getTag:Oe,initChildTag:Fe,moveChildTag:nt,makeReplaceVirtual:Ue,getImmediateCustomParentTag:Pe,makeVirtual:He,moveVirtual:it,unmountAll:ct,createIfDirective:ft,createRefDirective:lt}),yt=Z,bt={tmpl:z,brackets:F,styleManager:R,vdom:x,styleNode:R.styleNode,dom:ie,check:de,misc:_e,tags:xt},wt=Ze,_t=Ge,At=Ke,Ot=We,Nt=Ye,Et=et,Ct=tt,jt=H,St=q({},rt,{observable:H,settings:yt,util:bt}),kt=Object.freeze({settings:yt,util:bt,Tag:wt,tag:_t,tag2:At,mount:Ot,mixin:Nt,update:Et,unregister:Ct,version:"v3.10.0",observable:jt,default:St});function Tt(e){var t=arguments,r=e.source,n=e.global?"g":"";e.ignoreCase&&(n+="i"),e.multiline&&(n+="m");for(var i=1;i<arguments.length;i++)r=r.replace("@","\\"+t[i]);return new RegExp(r,n)}var Lt=function(r){var n={};function o(e){var t=r[e];if(t)return t;throw new Error('Parser "'+e+'" not loaded.')}function s(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}function i(e,t,r,n){return r=s({pretty:!0,filename:n,doctype:"html"},r),o(e).render(t,r)}return n.html={jade:function(e,t,r){return console.log('DEPRECATION WARNING: jade was renamed "pug" - The jade parser will be removed in riot@3.0.0!'),i("jade",e,t,r)},pug:function(e,t,r){return i("pug",e,t,r)}},n.css={less:function(e,t,r,n){var i;return r=s({sync:!0,syncImport:!0,filename:n},r),o("less").render(t,r,function(e,t){if(e)throw e;i=t.css}),i}},n.js={es6:function(e,t,r){return o("Babel").transform(e,s({plugins:[["transform-es2015-template-literals",{loose:!0}],"transform-es2015-literals","transform-es2015-function-name","transform-es2015-arrow-functions","transform-es2015-block-scoped-functions",["transform-es2015-classes",{loose:!0}],"transform-es2015-object-super","transform-es2015-shorthand-properties","transform-es2015-duplicate-keys",["transform-es2015-computed-properties",{loose:!0}],["transform-es2015-for-of",{loose:!0}],"transform-es2015-sticky-regex","transform-es2015-unicode-regex","check-es2015-constants",["transform-es2015-spread",{loose:!0}],"transform-es2015-parameters",["transform-es2015-destructuring",{loose:!0}],"transform-es2015-block-scoping","transform-es2015-typeof-symbol",["transform-es2015-modules-commonjs",{allowTopLevelThis:!0}],["transform-regenerator",{async:!1,asyncGenerators:!1}]]},t)).code},buble:function(e,t,r){return t=s({source:r,modules:!1},t),o("buble").transform(e,t).code},coffee:function(e,t){return o("CoffeeScript").compile(e,s({bare:!0},t))},livescript:function(e,t){return o("livescript").compile(e,s({bare:!0,header:!1},t))},typescript:function(e,t){return o("typescript")(e,t)},none:function(e){return e}},n.js.javascript=n.js.none,n.js.coffeescript=n.js.coffee,n._req=function(e){var t=e.split(".");if(2!==t.length)throw new Error("Bad format for parsers._req");var r=n[t[0]][t[1]];if(r)return r;throw new Error('Parser "'+e+'" not found.')},n.utils={extend:s},n}(window||global),It=/'[^'\n\r\\]*(?:\\(?:\r\n?|[\S\s])[^'\n\r\\]*)*'/.source,Rt=[/\/\*[^*]*\*+(?:[^*/][^*]*\*+)*\//.source,"//.*",It,It.replace(/'/g,'"'),"([/`])"].join("|"),Mt=Rt.slice(0,-2)+"{}])";function Pt(e,t,r){var n=/[`$\\]/g;for(n.lastIndex=t;n.exec(e);){var i=n.lastIndex,o=e[i-1];if("`"===o)return i;if("$"===o&&"{"===e[i])return r.push("`","}"),i+1;n.lastIndex++}throw new Error("Unclosed ES6 template")}var $t=Lt.utils.extend,Ft=/"[^"\n\\]*(?:\\[\S\s][^"\n\\]*)*"|'[^'\n\\]*(?:\\[\S\s][^'\n\\]*)*'/.source,zt=F.R_STRINGS.source,Ht=/ *([-\w:\xA0-\xFF]+) ?(?:= ?('[^']*'|"[^"]*"|\S+))?/g,Ut=RegExp(/<!--(?!>)[\S\s]*?-->/.source+"|"+Ft,"g"),Vt=/<(-?[A-Za-z][-\w\xA0-\xFF]*)(?:\s+([^"'/>]*(?:(?:"[^"]*"|'[^']*'|\/[^>])[^'"/>]*)*)|\s*)(\/?)>/g,Bt=/>[ \t]+<(-?[A-Za-z]|\/[-A-Za-z])/g,qt=["style","src","d","value"],Dt=/^(?:input|img|br|wbr|hr|area|base|col|embed|keygen|link|meta|param|source|track)$/,Zt=/<pre(?:\s+(?:[^">]*|"[^"]*")*)?>([\S\s]+?)<\/pre\s*>/gi,Gt=/^"(?:number|date(?:time)?|time|month|email|color)\b/i,Kt=/^\s*import(?!\w)(?:(?:\s|[^\s'"])*)['|"].*\n?/gm,Wt=/[ \t]+$/gm,Jt=Tt(/@#\d/,"x01"),Qt=Tt(/@#(\d+)/g,"x01"),Xt="#",Yt="⁗",er='"',tr="'";function rr(e){var t,r=Ut;for(1!==e.indexOf("\r")&&(e=e.replace(/\r\n?/g,"\n")),r.lastIndex=0;t=r.exec(e);)"<"===t[0][0]&&(e=RegExp.leftContext+RegExp.rightContext,r.lastIndex=t[3]+1);return e}function nr(e,t){var r,n,i,o=[];for(Ht.lastIndex=0,e=e.replace(/\s+/g," ");r=Ht.exec(e);){var s=r[1].toLowerCase(),a=r[2];a?(a[0]!==er&&(a=er+(a[0]===tr?a.slice(1,-1):a)+er),"type"===s&&Gt.test(a)?n=a:(Jt.test(a)&&("value"===s&&(i=1),-1!==qt.indexOf(s)&&(s="riot-"+s)),o.push(s+"="+a))):o.push(s)}return n&&(i&&(n=er+t._bp[0]+tr+n.slice(1,-1)+tr+t._bp[1]+er),o.push("type="+n)),o.join(" ")}function ir(e,t,r){var n=r._bp;if(e&&n[4].test(e)){for(var i,o=t.expr&&(t.parser||t.type)?lr:0,s=F.split(e,0,n),a=1;a<s.length;a+=2)"^"===(i=s[a])[0]?i=i.slice(1):o&&";"===(i=o(i,t).trim()).slice(-1)&&(i=i.slice(0,-1)),s[a]=Xt+(r.push(i)-1)+n[1];e=s.join("")}return e}function or(e,r){return r.length&&(e=e.replace(Qt,function(e,t){return r._bp[0]+r[t].trim().replace(/[\r\n]+/g," ").replace(/"/g,Yt)})),e}function sr(e,t,i){if(!/\S/.test(e))return"";if(e=ir(e,t,i).replace(Vt,function(e,t,r,n){return t=t.toLowerCase(),n=n&&!Dt.test(t)?"></"+t:"",r&&(t+=" "+nr(r,i)),"<"+t+n+">"}),!t.whitespace){var r=[];/<pre[\s>]/.test(e)&&(e=e.replace(Zt,function(e){return r.push(e),""})),e=e.trim().replace(/\s+/g," "),r.length&&(e=e.replace(/\u0002/g,function(){return r.shift()}))}return t.compact&&(e=e.replace(Bt,"><$1")),or(e,i).replace(Wt,"")}var ar=/^[ \t]*(((?:async|\*)\s*)?([$_A-Za-z][$\w]*))\s*\([^()]*\)\s*{/m;function ur(e){var t,r,n,i,o,s,a=[],u=RegExp,l=function(e,t){for(var r,n,i,o,s,a,u=new RegExp(Rt,"g"),l=F.skipRegex,c=0|t,p=[[]],f=[],d=u,h=d.lastIndex=c;a=d.exec(e);){if(o=a.index,s=d.lastIndex,n="",i=a[1]){if("{"===i)f.push("}");else if("}"===i){if(f.pop()!==i)throw new Error("Unexpected '}'");"`"===f[f.length-1]&&(i=f.pop())}else"/"===i&&o+1<(s=l(e,o))&&(n=e.slice(o,s));"`"===i&&(s=Pt(e,s,f),n=e.slice(o,s),d=f.length?r||(r=new RegExp(Mt,"g")):u)}else"/"===(n=a[0])[0]?(n="*"===n[1]?" ":"",e=e.slice(c,o)+n+e.slice(s),s=o+n.length,n=""):2===n.length&&(n="");n&&(p[0].push(e.slice(h,o)),p.push(n),h=s),d.lastIndex=s}return p[0].push(e.slice(h)),p}(e);for(e=l.shift().join("<%>");t=e.match(ar);)a.push(u.leftContext),n=c(e=u.rightContext),i=t[1],o=t[2]||"",s=t[3],s=(r=!/^(?:if|while|for|switch|catch|function)$/.test(s))?t[0].replace(i,"this."+s+" ="+o+" function"):t[0],a.push(s,e.slice(0,n)),e=e.slice(n),r&&!/^\s*.\s*bind\b/.test(e)&&a.push(".bind(this)");return a.length&&(e=a.join("")+e),l.length&&(e=e.replace(/<%>/g,function(){return l.shift()})),e;function c(e){for(var t=/[{}]/g,r=1;r&&t.exec(e);)"{"===e[t.lastIndex-1]?++r:--r;return r?e.length:t.lastIndex}}function lr(e,t,r,n,i){return/\S/.test(e)?(r||(r=t.type),(t.parser||r&&Lt._req("js."+r,!0)||ur)(e,n,i).replace(/\r\n?/g,"\n").replace(Wt,"")):""}var cr=RegExp("([{}]|^)[; ]*((?:[^@ ;{}][^{}]*)?[^@ ;{}:] ?)(?={)|"+Ft,"g");function pr(e,t,r,n){var i,o;(n=n||{},r)&&("css"!==r&&(e=Lt._req("css."+r,!0)(t,e,n.parserOpts||{},n.url)));return e=e.replace(F.R_MLCOMMS,"").replace(/\s+/g," ").trim(),t&&(i=t,o=":scope",e=e.replace(cr,function(e,t,r){return r?(r=r.replace(/[^,]+/g,function(e){var t=e.trim();return 0===t.indexOf(i)?e:t&&"from"!==t&&"to"!==t&&"%"!==t.slice(-1)?t=t.indexOf(o)<0?i+" "+t+',[data-is="'+i+'"] '+t:t.replace(o,i)+","+t.replace(o,'[data-is="'+i+'"]'):e}),t?t+" "+r:r):e})),e}var fr=/\stype\s*=\s*(?:(['"])(.+?)\1|(\S+))/i,dr="\\s*=\\s*("+zt+"|{[^}]+}|\\S+)",hr=/\/>\n|^<(?:\/?-?[A-Za-z][-\w\xA0-\xFF]*\s*|-?[A-Za-z][-\w\xA0-\xFF]*\s+[-\w:\xA0-\xFF][\S\s]*?)>\n/;function mr(e,t){return e?(e=tr+e.replace(/\\/g,"\\\\").replace(/'/g,"\\'")+tr,t&&-1!==e.indexOf("\n")?e.replace(/\n/g,"\\n"):e):"''"}function gr(e){if(e){var t=e.match(fr);if(t=t&&(t[2]||t[3]))return t.replace("text/","")}return""}function vr(e,t){if(e){var r=e.match(RegExp("\\s"+t+dr,"i"));if(r=r&&r[1])return/^['"]/.test(r)?r.slice(1,-1):r}return""}function xr(e){var t=vr(e,"options").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#039;/g,"'");return t?JSON.parse(t):null}var yr=RegExp(/^([ \t]*)<(-?[A-Za-z][-\w\xA0-\xFF]*)(?:\s+([^'"/>]+(?:(?:@|\/[^>])[^'"/>]*)*)|\s*)?(?:\/>|>[ \t]*\n?([\S\s]*)^\1<\/\2\s*>|>(.*)<\/\2\s*>)/.source.replace("@",zt),"gim"),br=/<script(\s+[^>]*)?>\n?([\S\s]*?)<\/script\s*>/gi,wr=/<style(\s+[^>]*)?>\n?([\S\s]*?)<\/style\s*>/gi;var _r,Ar,Or={compile:function(e,b,w){var _,A=[],t=e;b||(b={}),b.parserOptions=$t({template:{},js:{},style:{}},b.parserOptions||{}),_=b.exclude?function(e){return b.exclude.indexOf(e)<0}:function(){return 1},w||(w="");var r,n,i,o,O=F.array(b.brackets);return b.template&&(r=t,n=w,i=b.template,o=b.parserOptions.template,t=Lt._req("html."+i,!0)(r,o,n)),t=rr(t).replace(yr,function(e,t,c,r,n,i){var o,s,a,u,l,p,f,d,h="",m="",g="",v="",x=[];if(x._bp=O,c=c.toLowerCase(),r=r&&_("attribs")?or(nr(ir(r,b,x),x),x):"",(n||(n=i))&&/\S/.test(n))if(i)_("html")&&(g=sr(i,b,x));else{var y=function(e){if(/<[-\w]/.test(e))for(var t,r=e.lastIndexOf("<"),n=e.length;-1!==r;){if(t=e.slice(r,n).match(hr))return r+=t.index+t[0].length,"<-/>\n"===(t=e.slice(0,r)).slice(-5)&&(t=t.slice(0,-5)),[t,e.slice(r)];n=r,r=e.lastIndexOf("<",r-1)}return["",e]}((n=(n=(n=n.replace(RegExp("^"+t,"gm"),"")).replace(br,function(e,t,r){if(_("js")){var n=(i=r,o=b,a=w,u=gr(s=t),l=vr(s,"src"),c=$t({},o.parserOptions.js),!l&&lr(i,o,u,$t(c,xr(s)),a));n&&(h+=(h?"\n":"")+n)}var i,o,s,a,u,l,c;return""})).replace(wr,function(e,t,r){var n,i,o,s,a,u,l;return _("css")&&(m+=(m?" ":"")+(n=r,o=t,s=w,a=c,u=$t({},(i=b).parserOptions.style),l={parserOpts:$t(u,xr(o)),url:s},pr(n,a,gr(o)||i.style,l))),""})).replace(Wt,""));_("html")&&(g=sr(y[0],b,x)),_("js")&&((n=lr(y[1],b,null,null,w))&&(h+=(h?"\n":"")+n),h=h.replace(Kt,function(e){return v+=e.trim()+"\n",""}))}return h=/\S/.test(h)?h.replace(/\n{3,}/g,"\n\n"):"",b.entities?(A.push({tagName:c,html:g,css:m,attribs:r,js:h,imports:v}),""):(o=c,s=g,a=m,u=r,l=h,p=v,f=b.debug?",\n  ":", ",d="});",l&&"\n"!==l.slice(-1)&&(d="\n"+d),p+"riot.tag2('"+o+tr+f+mr(s,1)+f+mr(a)+f+mr(u)+", function(opts) {\n"+l+d)}),b.entities?A:t},compileHTML:function(e,t,r){return Array.isArray(t)?(r=t,t={}):(r||(r=[]),t||(t={})),r._bp=F.array(t.brackets),sr(rr(e),t,r)},compileCSS:function(e,t,r){return t&&"object"==typeof t?(r=t,t=""):r||(r={}),pr(e,r.tagName,t,r)},compileJS:function(e,t,r,n){return"string"==typeof t&&(n=r,r=t,t={}),r&&"object"==typeof r&&(n=r,r=""),n||(n={}),lr(e,t||{},r,n.parserOptions,n.url)},parsers:Lt,version:"v3.4.0"};function Nr(e,t,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&(200===n.status||!n.status&&n.responseText.length?t(n.responseText,r,e):jr.error('"'+e+'" not found'))},n.onerror=function(e){return jr.error(e)},n.open("GET",e,!0),n.send("")}function Er(e,t){if(typeof e===l){var r=S("script"),n=document.documentElement;t&&(e+="\n//# sourceURL="+t+".js"),r.text=e,n.appendChild(r),n.removeChild(r)}}var Cr=Or.parsers;function jr(e,i,t){if(typeof e===l){if(ue(i)&&(t=i,i=!1),/^\s*</m.test(e)){var r=Or.compile(e,t);return!0!==i&&Er(r),ae(i)&&i(r,e,t),r}Nr(e,function(e,t,r){var n=Or.compile(e,t,r);Er(n,r),i&&i(n,e,t)},t)}else if(ce(e)){var o=e.length;e.forEach(function(e){Nr(e,function(e,t,r){var n=Or.compile(e,t,r);Er(n,r),!--o&&i&&i(n,e,t)},t)})}else{if(ae(e)?(t=i,i=e):(t=e,i=void 0),Ar)return i&&i();_r?i&&_r.on("ready",i):(_r=H(),function(e,t){var r=G('script[type="riot/tag"]'),n=r.length;function i(){_r.trigger("ready"),Ar=!0,e&&e()}function o(e,t,r){Er(Or.compile(e,t,r),r),--n||i()}if(n)for(var s=0;s<r.length;++s){var a=r[s],u=q({template:J(a,"template")},t),l=J(a,"src")||J(a,"data-src");l?Nr(l,o,u):o(a.innerHTML,u)}else i()}(i,t))}}return jr.error=function(e){throw new Error(e)},q({},kt,{mount:function(){for(var e,t=[],r=arguments.length;r--;)t[r]=arguments[r];return jr(function(){e=Ot.apply(kt,t)}),e},compile:jr,parsers:Cr})},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.riot=t();
