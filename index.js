!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.JsonFetcher=t():e.JsonFetcher=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.JsonFetcher=t.copy=void 0;var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},c=r(2),a=function p(e){if(null==e||"object"!=("undefined"==typeof e?"undefined":i(e)))return e;var t=e.constructor();return Object.keys(e).forEach(function(r){e instanceof Object?t[r]=p(e[r]):t[r]=e[r]}),t};t.copy=a;var l={credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}},u=function(e){if("string"===!("undefined"==typeof e?"undefined":i(e)))return e;try{return JSON.stringify(e)}catch(t){}},f=function(e){return"string"==typeof e?e:c.qs.stringify(options.query)},s=t.JsonFetcher=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];n(this,e),this.defaults=Object.assign(t,l)}return o(e,[{key:"config",value:function(e){Object.assign(this.defaults,e)}},{key:"request",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t=Object.assign(a(this.defaults),t),t.body&&(t.body=u(t.body)),t.query&&(t.query=f(t.query),e+="?"+t.query),fetch(e,t).then(function(e){return e.json()})}}]),e}();["head","options","connect","get","post","put","delete"].reduce(function(e,t){return e[t]=function(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.method=t.toUpperCase(),this.request(e,r)},e},s.prototype)},function(e,t){"use strict";var r=function(){for(var e=new Array(256),t=0;256>t;++t)e[t]="%"+((16>t?"0":"")+t.toString(16)).toUpperCase();return e}();t.arrayToObject=function(e,t){for(var r=t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!=typeof e[n]&&(r[n]=e[n]);return r},t.merge=function(e,r,n){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];e[r]=!0}return e}if("object"!=typeof e)return[e].concat(r);var o=e;return Array.isArray(e)&&!Array.isArray(r)&&(o=t.arrayToObject(e,n)),Object.keys(r).reduce(function(e,o){var i=r[o];return Object.prototype.hasOwnProperty.call(e,o)?e[o]=t.merge(e[o],i,n):e[o]=i,e},o)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",o=0;o<t.length;++o){var i=t.charCodeAt(o);45===i||46===i||95===i||126===i||i>=48&&57>=i||i>=65&&90>=i||i>=97&&122>=i?n+=t.charAt(o):128>i?n+=r[i]:2048>i?n+=r[192|i>>6]+r[128|63&i]:55296>i||i>=57344?n+=r[224|i>>12]+r[128|i>>6&63]+r[128|63&i]:(o+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(o)),n+=r[240|i>>18]+r[128|i>>12&63]+r[128|i>>6&63]+r[128|63&i])}return n},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var n=r||[],o=n.indexOf(e);if(-1!==o)return n[o];if(n.push(e),Array.isArray(e)){for(var i=[],c=0;c<e.length;++c)e[c]&&"object"==typeof e[c]?i.push(t.compact(e[c],n)):"undefined"!=typeof e[c]&&i.push(e[c]);return i}for(var a=Object.keys(e),l=0;l<a.length;++l){var u=a[l];e[u]=t.compact(e[u],n)}return e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null===e||"undefined"==typeof e?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},function(e,t,r){"use strict";var n=r(4),o=r(3);e.exports={stringify:n,parse:o}},function(e,t,r){"use strict";var n=r(1),o={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1e3,strictNullHandling:!1,plainObjects:!1,allowPrototypes:!1,allowDots:!1,decoder:n.decode},i=function(e,t){for(var r={},n=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<n.length;++o){var i=n[o],c=-1===i.indexOf("]=")?i.indexOf("="):i.indexOf("]=")+1;if(-1===c)r[t.decoder(i)]="",t.strictNullHandling&&(r[t.decoder(i)]=null);else{var a=t.decoder(i.slice(0,c)),l=t.decoder(i.slice(c+1));Object.prototype.hasOwnProperty.call(r,a)?r[a]=[].concat(r[a]).concat(l):r[a]=l}}return r},c=function l(e,t,r){if(!e.length)return t;var n,o=e.shift();if("[]"===o)n=[],n=n.concat(l(e,t,r));else{n=r.plainObjects?Object.create(null):{};var i="["===o[0]&&"]"===o[o.length-1]?o.slice(1,o.length-1):o,c=parseInt(i,10);!isNaN(c)&&o!==i&&String(c)===i&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(n=[],n[c]=l(e,t,r)):n[i]=l(e,t,r)}return n},a=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^\.\[]+)/g,"[$1]"):e,o=/^([^\[\]]*)/,i=/(\[[^\[\]]*\])/g,a=o.exec(n),l=[];if(a[1]){if(!r.plainObjects&&Object.prototype.hasOwnProperty(a[1])&&!r.allowPrototypes)return;l.push(a[1])}for(var u=0;null!==(a=i.exec(n))&&u<r.depth;)u+=1,(r.plainObjects||!Object.prototype.hasOwnProperty(a[1].replace(/\[|\]/g,""))||r.allowPrototypes)&&l.push(a[1]);return a&&l.push("["+n.slice(a.index)+"]"),c(l,t,r)}};e.exports=function(e,t){var r=t||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"==typeof r.depth?r.depth:o.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=r.parseArrays!==!1,r.decoder="function"==typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===e||null===e||"undefined"==typeof e)return r.plainObjects?Object.create(null):{};for(var c="string"==typeof e?i(e,r):e,l=r.plainObjects?Object.create(null):{},u=Object.keys(c),f=0;f<u.length;++f){var s=u[f],p=a(s,c[s],r);l=n.merge(l,p,r)}return n.compact(l)}},function(e,t,r){"use strict";var n=r(1),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i={delimiter:"&",strictNullHandling:!1,skipNulls:!1,encode:!0,encoder:n.encode},c=function a(e,t,r,o,i,c,l,u,f){var s=e;if("function"==typeof l)s=l(t,s);else if(s instanceof Date)s=s.toISOString();else if(null===s){if(o)return c?c(t):t;s=""}if("string"==typeof s||"number"==typeof s||"boolean"==typeof s||n.isBuffer(s))return c?[c(t)+"="+c(s)]:[t+"="+String(s)];var p=[];if("undefined"==typeof s)return p;var d;if(Array.isArray(l))d=l;else{var y=Object.keys(s);d=u?y.sort(u):y}for(var b=0;b<d.length;++b){var h=d[b];i&&null===s[h]||(p=Array.isArray(s)?p.concat(a(s[h],r(t,h),r,o,i,c,l,u,f)):p.concat(a(s[h],t+(f?"."+h:"["+h+"]"),r,o,i,c,l,u,f)))}return p};e.exports=function(e,t){var r,n,a=e,l=t||{},u="undefined"==typeof l.delimiter?i.delimiter:l.delimiter,f="boolean"==typeof l.strictNullHandling?l.strictNullHandling:i.strictNullHandling,s="boolean"==typeof l.skipNulls?l.skipNulls:i.skipNulls,p="boolean"==typeof l.encode?l.encode:i.encode,d=p?"function"==typeof l.encoder?l.encoder:i.encoder:null,y="function"==typeof l.sort?l.sort:null,b="undefined"==typeof l.allowDots?!1:l.allowDots;if(null!==l.encoder&&void 0!==l.encoder&&"function"!=typeof l.encoder)throw new TypeError("Encoder has to be a function.");"function"==typeof l.filter?(n=l.filter,a=n("",a)):Array.isArray(l.filter)&&(r=n=l.filter);var h=[];if("object"!=typeof a||null===a)return"";var m;m=l.arrayFormat in o?l.arrayFormat:"indices"in l?l.indices?"indices":"repeat":"indices";var g=o[m];r||(r=Object.keys(a)),y&&r.sort(y);for(var v=0;v<r.length;++v){var j=r[v];s&&null===a[j]||(h=h.concat(c(a[j],j,g,f,s,d,n,y,b)))}return h.join(u)}}])});
//# sourceMappingURL=index.js.map