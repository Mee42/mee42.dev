(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[447],{3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"===typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},3452:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),i=(r(7294),r(7088)),o=r.n(i),l=r(9008),a=r.n(l);function s(e){return(0,n.jsxs)("header",{className:o().header,children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("html",{lang:"en-US"}),(0,n.jsx)("title",{children:null===e.title?"mee42.dev":"mee42.dev | "+e.title})]}),(0,n.jsx)("a",{href:"/",className:o().mainButton,children:(0,n.jsx)("code",{children:"carson.sh"})}),(0,n.jsx)(u,{href:"/",title:"Home"}),(0,n.jsx)(u,{href:"/projects",title:"Projects"}),(0,n.jsx)(u,{href:"/blog",title:"Blog"}),(0,n.jsx)(u,{href:"https://github.com/mee42/",title:"Github"})]})}function u(e){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:o().withGrow}),(0,n.jsx)("a",{href:e.href,children:e.title}),(0,n.jsx)("div",{className:o().withGrow}),(0,n.jsx)("div",{className:o().bottomBorder})]})}},3447:function(e,t,r){"use strict";function n(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(d){return void r(d)}a.done?t(s):Promise.resolve(s).then(n,i)}r.r(t),r.d(t,{__N_SSG:function(){return m},config:function(){return b},default:function(){return y},getBlogPosts:function(){return w},makePostList:function(){return _}});var i=r(4051),o=r.n(i),l=r(5893),a=(r(7294),r(3452)),s=r(2304),u=r.n(s);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){var t=e.split(new RegExp("=====>>>>>")).map((function(e){return e.trim()})).filter((function(e){return""!=e})).map((function(e){return function(e,t){var r=e.split(t);return[r[0],r.slice(1).reduce((function(e,r){return e+t+r}),"")]}(e,"\r\n")})),r=function(e){return t.filter((function(t){return t[0]===e}))[0][1]},n=r("header").trim(),i=r("content").trim(),o=function(e){var t,r,n,i,o,l,a,s={},u=!0,c=!1,h=void 0;try{for(var g,v=e.split("\n").map((function(e){return e.trim().split(":",2).map((function(e){return e.trim()}))}))[Symbol.iterator]();!(u=(g=v.next()).done);u=!0){var p=f(g.value,2),m=p[0],b=p[1];s[m]=b}}catch(y){c=!0,h=y}finally{try{u||null==v.return||v.return()}finally{if(c)throw h}}return{id:parseInt(null!==(r=s.id)&&void 0!==r?r:d("can't find post id")),title:null!==(n=s.title)&&void 0!==n?n:d("can't find post title"),date:null!==(i=s.date)&&void 0!==i?i:d("can't find post date"),tags:null!==(o=null===(t=s.tags)||void 0===t?void 0:t.split(" "))&&void 0!==o?o:d("can't find post tags"),desc:null!==(l=s.desc)&&void 0!==l?l:d("can't find post desc"),url:null!==(a=s.url)&&void 0!==a?a:"there-is-no-url-desc-yet"}}(n);return{id:o.id,title:o.title,desc:o.desc,tags:o.tags,url:o.url,date:o.date,content:i}}function d(e){throw new Error(e)}var g=r(1864),v=r.n(g),p=r(3454),m=!0,b={unstable_runtimeJS:!1};function y(e){return(0,l.jsxs)("div",{children:[(0,l.jsx)(a.Z,{title:"Blog"}),(0,l.jsx)(x,{blogPosts:e.blogPosts})]})}function x(e){return(0,l.jsxs)("div",{className:u().body,children:[(0,l.jsx)("h3",{className:u().title,children:"Blog"}),function(){var t=e.blogPosts.filter((function(e){return-1==e.tags.indexOf("unreleased")}));return 0==t.length?(0,l.jsx)("span",{className:u().filteredOutEverything,children:"There doesn't seem to be any posts here"}):_(t)}.call(null)]})}function _(e){return(0,l.jsx)("ul",{id:"HELO",className:u().blogPostList,children:e.map((function(e){return(0,l.jsx)("li",{children:(t=e,(0,l.jsxs)("a",{href:"/blog/"+t.id+"#"+t.url,children:[(0,l.jsx)("span",{className:u().blogPostDate,children:t.date}),(0,l.jsx)("span",{className:u().blogPostTitle,children:t.title})]},t.id))},e.id);var t}))})}var w=function(){var e,t=(e=o().mark((function e(t){var r,n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v().join(p.cwd(),"posts"),n=t.readdirSync(r),i=n.map((function(e){var n=v().join(r,e);return t.readFileSync(n,"utf8")})),e.abrupt("return",i.map(h));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(i,o){var l=e.apply(t,r);function a(e){n(l,i,o,a,s,"next",e)}function s(e){n(l,i,o,a,s,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}()},2304:function(e){e.exports={title:"blog_title__S_ZkT",body:"blog_body__4U5Sp",selected:"blog_selected__8LmZg",blogPostTitle:"blog_blogPostTitle__4mFBw",blogPostDate:"blog_blogPostDate__CwaCH",filteredOutEverything:"blog_filteredOutEverything__86NxZ",blogPostList:"blog_blogPostList__HzwRi"}},7088:function(e){e.exports={header:"header_header__FfSP_",withGrow:"header_withGrow__v2i8T",bottomBorder:"header_bottomBorder___i6c3",mainButton:"header_mainButton__no_Oz"}},1864:function(e){!function(){"use strict";var t={113:function(e){function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",i=0,o=-1,l=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(o===a-1||1===l);else if(o!==a-1&&2===l){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",i=0):i=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),o=a,l=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=a,l=0;continue}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,a):n=e.slice(o+1,a),i=a-o-1;o=a,l=0}else 46===r&&-1!==l?++l:l=-1}return n}var n={resolve:function(){for(var e,n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var l;o>=0?l=arguments[o]:(void 0===e&&(e=""),l=e),t(l),0!==l.length&&(n=l+"/"+n,i=47===l.charCodeAt(0))}return n=r(n,!i),i?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=n.resolve(e))===(r=n.resolve(r)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,l=o-i,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var s=r.length-a,u=l<s?l:s,c=-1,f=0;f<=u;++f){if(f===u){if(s>u){if(47===r.charCodeAt(a+f))return r.slice(a+f+1);if(0===f)return r.slice(a+f)}else l>u&&(47===e.charCodeAt(i+f)?c=f:0===f&&(c=0));break}var h=e.charCodeAt(i+f);if(h!==r.charCodeAt(a+f))break;47===h&&(c=f)}var d="";for(f=i+c+1;f<=o;++f)f!==o&&47!==e.charCodeAt(f)||(0===d.length?d+="..":d+="/..");return d.length>0?d+r.slice(a+c):(a+=c,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,i=-1,o=!0,l=e.length-1;l>=1;--l)if(47===(r=e.charCodeAt(l))){if(!o){i=l;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!==typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,i=0,o=-1,l=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var a=r.length-1,s=-1;for(n=e.length-1;n>=0;--n){var u=e.charCodeAt(n);if(47===u){if(!l){i=n+1;break}}else-1===s&&(l=!1,s=n+1),a>=0&&(u===r.charCodeAt(a)?-1===--a&&(o=n):(a=-1,o=s))}return i===o?o=s:-1===o&&(o=e.length),e.slice(i,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!l){i=n+1;break}}else-1===o&&(l=!1,o=n+1);return-1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var r=-1,n=0,i=-1,o=!0,l=0,a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(47!==s)-1===i&&(o=!1,i=a+1),46===s?-1===r?r=a:1!==l&&(l=1):-1!==r&&(l=-1);else if(!o){n=a+1;break}}return-1===r||-1===i||0===l||1===l&&r===i-1&&r===n+1?"":e.slice(r,i)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,i=e.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var l=-1,a=0,s=-1,u=!0,c=e.length-1,f=0;c>=n;--c)if(47!==(i=e.charCodeAt(c)))-1===s&&(u=!1,s=c+1),46===i?-1===l?l=c:1!==f&&(f=1):-1!==l&&(f=-1);else if(!u){a=c+1;break}return-1===l||-1===s||0===f||1===f&&l===s-1&&l===a+1?-1!==s&&(r.base=r.name=0===a&&o?e.slice(1,s):e.slice(a,s)):(0===a&&o?(r.name=e.slice(1,l),r.base=e.slice(1,s)):(r.name=e.slice(a,l),r.base=e.slice(a,s)),r.ext=e.slice(l,s)),a>0?r.dir=e.slice(0,a-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},l=!0;try{t[e](o,o.exports,n),l=!1}finally{l&&delete r[e]}return o.exports}n.ab="//";var i=n(113);e.exports=i}()},7663:function(e){!function(){var t={308:function(e){var t,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var a,s=[],u=!1,c=-1;function f(){u&&a&&(u=!1,a.length?s=a.concat(s):c=-1,s.length&&h())}function h(){if(!u){var e=l(f);u=!0;for(var t=s.length;t;){for(a=s,s=[];++c<t;)a&&a[c].run();c=-1,t=s.length}a=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function g(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new d(e,t)),1!==s.length||u||l(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=g,n.addListener=g,n.once=g,n.off=g,n.removeListener=g,n.removeAllListeners=g,n.emit=g,n.prependListener=g,n.prependOnceListener=g,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},l=!0;try{t[e](o,o.exports,n),l=!1}finally{l&&delete r[e]}return o.exports}n.ab="//";var i=n(308);e.exports=i}()},9008:function(e,t,r){e.exports=r(5443)}}]);