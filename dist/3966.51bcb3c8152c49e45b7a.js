(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[3966],{46291:e=>{!function(){var t;function n(e){for(var t,n,i,r,o=1,s=[].slice.call(arguments),a=0,c=e.length,l="",g=!1,u=!1,d=function(){return s[o++]},h=function(){for(var n="";/\d/.test(e[a]);)n+=e[a++],t=e[a];return n.length>0?parseInt(n):null};a<c;++a)if(t=e[a],g)switch(g=!1,"."==t?(u=!1,t=e[++a]):"0"==t&&"."==e[a+1]?(u=!0,t=e[a+=2]):u=!0,r=h(),t){case"b":l+=parseInt(d(),10).toString(2);break;case"c":l+="string"==typeof(n=d())||n instanceof String?n:String.fromCharCode(parseInt(n,10));break;case"d":l+=parseInt(d(),10);break;case"f":i=String(parseFloat(d()).toFixed(r||6)),l+=u?i:i.replace(/^0/,"");break;case"j":l+=JSON.stringify(d());break;case"o":l+="0"+parseInt(d(),10).toString(8);break;case"s":l+=d();break;case"x":l+="0x"+parseInt(d(),10).toString(16);break;case"X":l+="0x"+parseInt(d(),10).toString(16).toUpperCase();break;default:l+=t}else"%"===t?g=!0:l+=t;return l}(t=e.exports=n).format=n,t.vsprintf=function(e,t){return n.apply(null,[e].concat(t))},"undefined"!=typeof console&&"function"==typeof console.log&&(t.printf=function(){console.log(n.apply(null,arguments))})}()},33390:e=>{function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((n=>{const i=e[n],r=typeof i;"object"!==r&&"function"!==r||Object.isFrozen(i)||t(i)})),e}class n{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const o=e=>!!e.scope;class s{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!o(e))return;const t=((e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")}return`${t}${e}`})(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const a=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class c{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=a({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class l extends c{constructor(e){super(),this.options=e}addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){const n=e.root;t&&(n.scope=`language:${t}`),this.add(n)}toHTML(){return new s(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function g(e){return e?"string"==typeof e?e:e.source:null}function u(e){return f("(?=",e,")")}function d(e){return f("(?:",e,")*")}function h(e){return f("(?:",e,")?")}function f(...e){return e.map((e=>g(e))).join("")}function p(...e){const t=function(e){const t=e[e.length-1];return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}(e);return"("+(t.capture?"":"?:")+e.map((e=>g(e))).join("|")+")"}function b(e){return new RegExp(e.toString()+"|").exec("").length-1}const m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function x(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n;let i=g(e),r="";for(;i.length>0;){const e=m.exec(i);if(!e){r+=i;break}r+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+t):(r+=e[0],"("===e[0]&&n++)}return r})).map((e=>`(${e})`)).join(t)}const E="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",_="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",k="\\b(0b[01]+)",v={begin:"\\\\[\\s\\S]",relevance:0},S={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[v]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[v]},O=function(e,t,n={}){const i=r({scope:"comment",begin:e,end:t,contains:[]},n);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=p("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:f(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},M=O("//","$"),R=O("/\\*","\\*/"),A=O("#","$"),I={scope:"number",begin:y,relevance:0},j={scope:"number",begin:_,relevance:0},L={scope:"number",begin:k,relevance:0},T={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,contains:[v]}]}]},B={scope:"title",begin:E,relevance:0},P={scope:"title",begin:w,relevance:0},C={begin:"\\.\\s*"+w,relevance:0};var H=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:E,UNDERSCORE_IDENT_RE:w,NUMBER_RE:y,C_NUMBER_RE:_,BINARY_NUMBER_RE:k,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=f(t,/.*\b/,e.binary,/\b.*/)),r({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:v,APOS_STRING_MODE:S,QUOTE_STRING_MODE:N,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:O,C_LINE_COMMENT_MODE:M,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:A,NUMBER_MODE:I,C_NUMBER_MODE:j,BINARY_NUMBER_MODE:L,REGEXP_MODE:T,TITLE_MODE:B,UNDERSCORE_TITLE_MODE:P,METHOD_GUARD:C,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function D(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function $(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function U(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=D,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function z(e,t){Array.isArray(e.illegal)&&(e.illegal=p(...e.illegal))}function W(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function X(e,t){void 0===e.relevance&&(e.relevance=1)}const F=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]})),e.keywords=n.keywords,e.begin=f(n.beforeMatch,u(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},G=["of","and","for","in","not","or","if","then","parent","list","value"],K="keyword";function Z(e,t,n=K){const i=Object.create(null);return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach((function(n){Object.assign(i,Z(e[n],t,n))})),i;function r(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((function(t){const n=t.split("|");i[n[0]]=[e,J(n[0],n[1])]}))}}function J(e,t){return t?Number(t):function(e){return G.includes(e.toLowerCase())}(e)?0:1}const V={},q=e=>{console.error(e)},Y=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Q=(e,t)=>{V[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),V[`${e}/${t}`]=!0)},ee=new Error;function te(e,t,{key:n}){let i=0;const r=e[n],o={},s={};for(let e=1;e<=t.length;e++)s[e+i]=r[e],o[e+i]=!0,i+=b(t[e-1]);e[n]=s,e[n]._emit=o,e[n]._multi=!0}function ne(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw q("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ee;if("object"!=typeof e.beginScope||null===e.beginScope)throw q("beginScope must be object"),ee;te(e,e.begin,{key:"beginScope"}),e.begin=x(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw q("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ee;if("object"!=typeof e.endScope||null===e.endScope)throw q("endScope must be object"),ee;te(e,e.end,{key:"endScope"}),e.end=x(e.end,{joinWith:""})}}(e)}function ie(e){function t(t,n){return new RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=b(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=t(x(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=r(e.classNameAliases||{}),function n(o,s){const a=o;if(o.isCompiled)return a;[$,W,ne,F].forEach((e=>e(o,s))),e.compilerExtensions.forEach((e=>e(o,s))),o.__beforeBegin=null,[U,z,X].forEach((e=>e(o,s))),o.isCompiled=!0;let c=null;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),c=o.keywords.$pattern,delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=Z(o.keywords,e.case_insensitive)),a.keywordPatternRe=t(c,!0),s&&(o.begin||(o.begin=/\B|\b/),a.beginRe=t(a.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(a.endRe=t(a.end)),a.terminatorEnd=g(a.end)||"",o.endsWithParent&&s.terminatorEnd&&(a.terminatorEnd+=(o.end?"|":"")+s.terminatorEnd)),o.illegal&&(a.illegalRe=t(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return r(e,{variants:null},t)}))),e.cachedVariants?e.cachedVariants:re(e)?r(e,{starts:e.starts?r(e.starts):null}):Object.isFrozen(e)?r(e):e}("self"===e?o:e)}))),o.contains.forEach((function(e){n(e,a)})),o.starts&&n(o.starts,s),a.matcher=function(e){const t=new i;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(a),a}(e)}function re(e){return!!e&&(e.endsWithParent||re(e.starts))}class oe extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const se=i,ae=r,ce=Symbol("nomatch"),le=function(e){const i=Object.create(null),r=Object.create(null),o=[];let s=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let g={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:l};function b(e){return g.noHighlightRe.test(e)}function m(e,t,n){let i="",r="";"object"==typeof t?(i=e,n=t.ignoreIllegals,r=t.language):(Q("10.7.0","highlight(lang, code, ...args) has been deprecated."),Q("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),r=e,i=t),void 0===n&&(n=!0);const o={code:i,language:r};N("before:highlight",o);const s=o.result?o.result:x(o.language,o.code,n);return s.code=o.code,N("after:highlight",s),s}function x(e,t,r,o){const c=Object.create(null);function l(){if(!N.keywords)return void M.addText(R);let e=0;N.keywordPatternRe.lastIndex=0;let t=N.keywordPatternRe.exec(R),n="";for(;t;){n+=R.substring(e,t.index);const r=_.case_insensitive?t[0].toLowerCase():t[0],o=(i=r,N.keywords[i]);if(o){const[e,i]=o;if(M.addText(n),n="",c[r]=(c[r]||0)+1,c[r]<=7&&(A+=i),e.startsWith("_"))n+=t[0];else{const n=_.classNameAliases[e]||e;d(t[0],n)}}else n+=t[0];e=N.keywordPatternRe.lastIndex,t=N.keywordPatternRe.exec(R)}var i;n+=R.substring(e),M.addText(n)}function u(){null!=N.subLanguage?function(){if(""===R)return;let e=null;if("string"==typeof N.subLanguage){if(!i[N.subLanguage])return void M.addText(R);e=x(N.subLanguage,R,!0,O[N.subLanguage]),O[N.subLanguage]=e._top}else e=E(R,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(A+=e.relevance),M.__addSublanguage(e._emitter,e.language)}():l(),R=""}function d(e,t){""!==e&&(M.startScope(t),M.addText(e),M.endScope())}function h(e,t){let n=1;const i=t.length-1;for(;n<=i;){if(!e._emit[n]){n++;continue}const i=_.classNameAliases[e[n]]||e[n],r=t[n];i?d(r,i):(R=r,l(),R=""),n++}}function f(e,t){return e.scope&&"string"==typeof e.scope&&M.openNode(_.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(d(R,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),R=""):e.beginScope._multi&&(h(e.beginScope,t),R="")),N=Object.create(e,{parent:{value:N}}),N}function p(e,t,i){let r=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,i);if(r){if(e["on:end"]){const i=new n(e);e["on:end"](t,i),i.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return p(e.parent,t,i)}function b(e){return 0===N.matcher.regexIndex?(R+=e[0],1):(L=!0,0)}function m(e){const n=e[0],i=t.substring(e.index),r=p(N,e,i);if(!r)return ce;const o=N;N.endScope&&N.endScope._wrap?(u(),d(n,N.endScope._wrap)):N.endScope&&N.endScope._multi?(u(),h(N.endScope,e)):o.skip?R+=n:(o.returnEnd||o.excludeEnd||(R+=n),u(),o.excludeEnd&&(R=n));do{N.scope&&M.closeNode(),N.skip||N.subLanguage||(A+=N.relevance),N=N.parent}while(N!==r.parent);return r.starts&&f(r.starts,e),o.returnEnd?0:n.length}let w={};function y(i,o){const a=o&&o[0];if(R+=i,null==a)return u(),0;if("begin"===w.type&&"end"===o.type&&w.index===o.index&&""===a){if(R+=t.slice(o.index,o.index+1),!s){const t=new Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=w.rule,t}return 1}if(w=o,"begin"===o.type)return function(e){const t=e[0],i=e.rule,r=new n(i),o=[i.__beforeBegin,i["on:begin"]];for(const n of o)if(n&&(n(e,r),r.isMatchIgnored))return b(t);return i.skip?R+=t:(i.excludeBegin&&(R+=t),u(),i.returnBegin||i.excludeBegin||(R=t)),f(i,e),i.returnBegin?0:t.length}(o);if("illegal"===o.type&&!r){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(N.scope||"<unnamed>")+'"');throw e.mode=N,e}if("end"===o.type){const e=m(o);if(e!==ce)return e}if("illegal"===o.type&&""===a)return 1;if(j>1e5&&j>3*o.index)throw new Error("potential infinite loop, way more iterations than matches");return R+=a,a.length}const _=k(e);if(!_)throw q(a.replace("{}",e)),new Error('Unknown language: "'+e+'"');const v=ie(_);let S="",N=o||v;const O={},M=new g.__emitter(g);!function(){const e=[];for(let t=N;t!==_;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach((e=>M.openNode(e)))}();let R="",A=0,I=0,j=0,L=!1;try{if(_.__emitTokens)_.__emitTokens(t,M);else{for(N.matcher.considerAll();;){j++,L?L=!1:N.matcher.considerAll(),N.matcher.lastIndex=I;const e=N.matcher.exec(t);if(!e)break;const n=y(t.substring(I,e.index),e);I=e.index+n}y(t.substring(I))}return M.finalize(),S=M.toHTML(),{language:e,value:S,relevance:A,illegal:!1,_emitter:M,_top:N}}catch(n){if(n.message&&n.message.includes("Illegal"))return{language:e,value:se(t),illegal:!0,relevance:0,_illegalBy:{message:n.message,index:I,context:t.slice(I-100,I+100),mode:n.mode,resultSoFar:S},_emitter:M};if(s)return{language:e,value:se(t),illegal:!1,relevance:0,errorRaised:n,_emitter:M,_top:N};throw n}}function E(e,t){t=t||g.languages||Object.keys(i);const n=function(e){const t={value:se(e),illegal:!1,relevance:0,_top:c,_emitter:new g.__emitter(g)};return t._emitter.addText(e),t}(e),r=t.filter(k).filter(S).map((t=>x(t,e,!1)));r.unshift(n);const o=r.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(k(e.language).supersetOf===t.language)return 1;if(k(t.language).supersetOf===e.language)return-1}return 0})),[s,a]=o,l=s;return l.secondBest=a,l}function w(e){let t=null;const n=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=g.languageDetectRe.exec(t);if(n){const t=k(n[1]);return t||(Y(a.replace("{}",n[1])),Y("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>b(e)||k(e)))}(e);if(b(n))return;if(N("before:highlightElement",{el:e,language:n}),e.children.length>0&&(g.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),g.throwUnescapedHTML))throw new oe("One of your code blocks includes unescaped HTML.",e.innerHTML);t=e;const i=t.textContent,o=n?m(i,{language:n,ignoreIllegals:!0}):E(i);e.innerHTML=o.value,function(e,t,n){const i=t&&r[t]||n;e.classList.add("hljs"),e.classList.add(`language-${i}`)}(e,n,o.language),e.result={language:o.language,re:o.relevance,relevance:o.relevance},o.secondBest&&(e.secondBest={language:o.secondBest.language,relevance:o.secondBest.relevance}),N("after:highlightElement",{el:e,result:o,text:i})}let y=!1;function _(){"loading"!==document.readyState?document.querySelectorAll(g.cssSelector).forEach(w):y=!0}function k(e){return e=(e||"").toLowerCase(),i[e]||i[r[e]]}function v(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e.toLowerCase()]=t}))}function S(e){const t=k(e);return t&&!t.disableAutodetect}function N(e,t){const n=e;o.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){y&&_()}),!1),Object.assign(e,{highlight:m,highlightAuto:E,highlightAll:_,highlightElement:w,highlightBlock:function(e){return Q("10.7.0","highlightBlock will be removed entirely in v12.0"),Q("10.7.0","Please use highlightElement now."),w(e)},configure:function(e){g=ae(g,e)},initHighlighting:()=>{_(),Q("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){_(),Q("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,n){let r=null;try{r=n(e)}catch(e){if(q("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw e;q(e),r=c}r.name||(r.name=t),i[t]=r,r.rawDefinition=n.bind(null,e),r.aliases&&v(r.aliases,{languageName:t})},unregisterLanguage:function(e){delete i[e];for(const t of Object.keys(r))r[t]===e&&delete r[t]},listLanguages:function(){return Object.keys(i)},getLanguage:k,registerAliases:v,autoDetection:S,inherit:ae,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),o.push(e)},removePlugin:function(e){const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="11.8.0",e.regex={concat:f,lookahead:u,either:p,optional:h,anyNumberOfTimes:d};for(const e in H)"object"==typeof H[e]&&t(H[e]);return Object.assign(e,H),e},ge=le({});ge.newInstance=()=>le({}),e.exports=ge,ge.HighlightJS=ge,ge.default=ge},93966:(e,t,n)=>{"use strict";n.d(t,{$:()=>u});const i=n(33390);var r=n(46291);const o=Object.assign(s(Error),{eval:s(EvalError),range:s(RangeError),reference:s(ReferenceError),syntax:s(SyntaxError),type:s(TypeError),uri:s(URIError)});function s(e){return t.displayName=e.displayName||e.name,t;function t(t,...n){const i=t?r(t,...n):t;return new e(i)}}const a={}.hasOwnProperty,c="hljs-";function l(e,t,n={}){let r=n.prefix;if("string"!=typeof e)throw o("Expected `string` for name, got `%s`",e);if(!i.getLanguage(e))throw o("Unknown language: `%s` is not registered",e);if("string"!=typeof t)throw o("Expected `string` for value, got `%s`",t);null==r&&(r=c),i.configure({__emitter:g,classPrefix:r});const s=i.highlight(t,{language:e,ignoreIllegals:!0});if(i.configure({}),s.errorRaised)throw s.errorRaised;return s._emitter.root.data.language=s.language,s._emitter.root.data.relevance=s.relevance,s._emitter.root}class g{constructor(e){this.options=e,this.root={type:"root",data:{language:null,relevance:0},children:[]},this.stack=[this.root]}addText(e){if(""===e)return;const t=this.stack[this.stack.length-1],n=t.children[t.children.length-1];n&&"text"===n.type?n.value+=e:t.children.push({type:"text",value:e})}startScope(e){this.openNode(String(e))}endScope(){this.closeNode()}__addSublanguage(e,t){const n=this.stack[this.stack.length-1],i=e.root.children;t?n.children.push({type:"element",tagName:"span",properties:{className:[t]},children:i}):n.children.push(...i)}openNode(e){const t={type:"element",tagName:"span",properties:{className:e.split(".").map(((e,t)=>t?e+"_".repeat(t):this.options.classPrefix+e))},children:[]};this.stack[this.stack.length-1].children.push(t),this.stack.push(t)}closeNode(){this.stack.pop()}finalize(){}toHTML(){return""}}const u={highlight:l,highlightAuto:function(e,t={}){const n=t.subset||i.listLanguages();let r=t.prefix,s=-1,a={type:"root",data:{language:null,relevance:0},children:[]};if(null==r&&(r=c),"string"!=typeof e)throw o("Expected `string` for value, got `%s`",e);for(;++s<n.length;){const r=n[s];if(!i.getLanguage(r))continue;const o=l(r,e,t);o.data.relevance>a.data.relevance&&(a=o)}return a},registerLanguage:function(e,t){i.registerLanguage(e,t)},registered:function(e){return Boolean(i.getLanguage(e))},listLanguages:function(){return i.listLanguages()},registerAlias:function(e,t){if("string"==typeof e)i.registerAliases(t,{languageName:e});else{let t;for(t in e)a.call(e,t)&&i.registerAliases(e[t],{languageName:t})}}}}}]);
//# sourceMappingURL=3966.51bcb3c8152c49e45b7a.js.map