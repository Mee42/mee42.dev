(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"===typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(441)}])},3452:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893),i=(r(7294),r(7088)),o=r.n(i),s=r(9008),l=r.n(s);function a(e){return(0,n.jsxs)("header",{className:o().header,children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("html",{lang:"en-US"}),(0,n.jsx)("title",{children:null===e.title?"mee42.dev":"mee42.dev | "+e.title})]}),(0,n.jsx)("a",{href:"/",className:o().mainButton,children:(0,n.jsx)("code",{children:"carson.sh"})}),(0,n.jsx)(c,{href:"/",title:"Home"}),(0,n.jsx)(c,{href:"/projects",title:"Projects"}),(0,n.jsx)(c,{href:"/blog",title:"Blog"}),(0,n.jsx)(c,{href:"https://github.com/mee42/",title:"Github"})]})}function c(e){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:o().withGrow}),(0,n.jsx)("a",{href:e.href,children:e.title}),(0,n.jsx)("div",{className:o().withGrow}),(0,n.jsx)("div",{className:o().bottomBorder})]})}},3447:function(e,t,r){"use strict";function n(e,t,r,n,i,o,s){try{var l=e[o](s),a=l.value}catch(h){return void r(h)}l.done?t(a):Promise.resolve(a).then(n,i)}r.r(t),r.d(t,{__N_SSG:function(){return p},default:function(){return b},getBlogPosts:function(){return y},makePostList:function(){return _}});var i=r(4051),o=r.n(i),s=r(5893),l=(r(7294),r(3452)),a=r(2304),c=r.n(a);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){var t=e.split(new RegExp("=====>>>>>")).map((function(e){return e.trim()})).filter((function(e){return""!=e})).map((function(e){return function(e,t){var r=e.split(t);return[r[0],r.slice(1).reduce((function(e,r){return e+t+r}),"")]}(e,"\r\n")})),r=function(e){return t.filter((function(t){return t[0]===e}))[0][1]},n=r("header").trim(),i=r("content").trim(),o=function(e){var t,r,n,i,o,s,l,a={},c=!0,u=!1,d=void 0;try{for(var g,v=e.split("\n").map((function(e){return e.trim().split(":",2).map((function(e){return e.trim()}))}))[Symbol.iterator]();!(c=(g=v.next()).done);c=!0){var m=f(g.value,2),p=m[0],b=m[1];a[p]=b}}catch(x){u=!0,d=x}finally{try{c||null==v.return||v.return()}finally{if(u)throw d}}return{id:parseInt(null!==(r=a.id)&&void 0!==r?r:h("can't find post id")),title:null!==(n=a.title)&&void 0!==n?n:h("can't find post title"),date:null!==(i=a.date)&&void 0!==i?i:h("can't find post date"),tags:null!==(o=null===(t=a.tags)||void 0===t?void 0:t.split(" "))&&void 0!==o?o:h("can't find post tags"),desc:null!==(s=a.desc)&&void 0!==s?s:h("can't find post desc"),url:null!==(l=a.url)&&void 0!==l?l:"there-is-no-url-desc-yet"}}(n);return{id:o.id,title:o.title,desc:o.desc,tags:o.tags,url:o.url,date:o.date,content:i}}function h(e){throw new Error(e)}var g=r(1864),v=r.n(g),m=r(3454),p=!0;function b(e){return(0,s.jsxs)("div",{children:[(0,s.jsx)(l.Z,{title:"Blog"}),(0,s.jsx)(x,{blogPosts:e.blogPosts})]})}function x(e){return(0,s.jsxs)("div",{className:c().body,children:[(0,s.jsx)("h3",{className:c().title,children:"Blog"}),function(){var t=e.blogPosts.filter((function(e){return-1==e.tags.indexOf("unreleased")}));return 0==t.length?(0,s.jsx)("span",{className:c().filteredOutEverything,children:"There doesn't seem to be any posts here"}):_(t)}.call(null)]})}function _(e){return(0,s.jsx)("ul",{id:"HELO",className:c().blogPostList,children:e.map((function(e){return(0,s.jsx)("li",{children:(t=e,(0,s.jsxs)("a",{href:"/blog/"+t.id+"#"+t.url,children:[(0,s.jsx)("span",{className:c().blogPostDate,children:t.date}),(0,s.jsx)("span",{className:c().blogPostTitle,children:t.title})]},t.id))},e.id);var t}))})}var y=function(){var e,t=(e=o().mark((function e(t){var r,n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v().join(m.cwd(),"posts"),n=t.readdirSync(r),i=n.map((function(e){var n=v().join(r,e);return t.readFileSync(n,"utf8")})),e.abrupt("return",i.map(d));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(i,o){var s=e.apply(t,r);function l(e){n(s,i,o,l,a,"next",e)}function a(e){n(s,i,o,l,a,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}()},441:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a},config:function(){return c},default:function(){return u}});var n=r(5893),i=r(7041),o=r.n(i),s=(r(7294),r(3452)),l=r(3447),a=!0,c={unstable_runtimeJS:!1};function u(e){return(0,n.jsxs)("div",{children:[(0,n.jsx)(s.Z,{title:null}),(0,n.jsx)(f,{blogPosts:e.blogPosts})]})}function f(e){return(0,n.jsxs)("div",{className:o().mainPage,children:[(0,n.jsxs)("div",{className:o().centerElement,children:[(0,n.jsx)("h1",{children:"Carson Graham"}),(0,n.jsxs)("div",{className:o().sidebarWrapper,children:[(0,n.jsx)("div",{className:o().block}),(0,n.jsx)("p",{children:"A High School Software Engineer Living in Fairfax Virginia"})]})]}),(0,n.jsxs)("div",{className:o().columnDiv,children:[(0,n.jsx)(d,{}),(0,n.jsx)(h,{blogPosts:e.blogPosts})]})]})}function d(){return(0,n.jsxs)("div",{className:o().left,children:[(0,n.jsx)("span",{children:"Contact me."}),(0,n.jsxs)("div",{className:o().linkbox+" "+o().monospace,children:[(0,n.jsx)("a",{href:"mailto:carson42g@gmail.com",children:"carson42g@gmail.com"})," ",(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://github.com/mee42",children:"github.com/mee42"})," ",(0,n.jsx)("br",{})]}),(0,n.jsx)("code",{className:o().gpgbox+" "+o().monospace,children:"GPG: BB881A11F78A79D93FAB707D67D77A4726CF8D6F"})]})}function h(e){var t=e.blogPosts.filter((function(e){return-1==e.tags.indexOf("unreleased")}));return(0,n.jsxs)("div",{className:o().right,children:[(0,n.jsxs)("span",{children:["Recent Blog Posts. ",(0,n.jsx)("a",{href:"/blog/",style:{fontSize:"90%"},children:"See More."})]}),(0,l.makePostList)(t.slice(0,3))]})}},2304:function(e){e.exports={title:"blog_title__S_ZkT",body:"blog_body__4U5Sp",selected:"blog_selected__8LmZg",blogPostTitle:"blog_blogPostTitle__4mFBw",blogPostDate:"blog_blogPostDate__CwaCH",filteredOutEverything:"blog_filteredOutEverything__86NxZ",blogPostList:"blog_blogPostList__HzwRi"}},7088:function(e){e.exports={header:"header_header__FfSP_",withGrow:"header_withGrow__v2i8T",bottomBorder:"header_bottomBorder___i6c3",mainButton:"header_mainButton__no_Oz"}},7041:function(e){e.exports={mainPage:"styles_mainPage__XvuHq",centerElement:"styles_centerElement__dCqlJ",sidebarWrapper:"styles_sidebarWrapper__ZOOyB",block:"styles_block__I4dT1",columnDiv:"styles_columnDiv__7zJiZ",left:"styles_left__u_aU4",right:"styles_right__cCd0v",monospace:"styles_monospace__9gVjX",linkbox:"styles_linkbox__GjpE3",gpgbox:"styles_gpgbox__nJGD_"}},1864:function(e){!function(){"use strict";var t={113:function(e){function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",i=0,o=-1,s=0,l=0;l<=e.length;++l){if(l<e.length)r=e.charCodeAt(l);else{if(47===r)break;r=47}if(47===r){if(o===l-1||1===s);else if(o!==l-1&&2===s){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var a=n.lastIndexOf("/");if(a!==n.length-1){-1===a?(n="",i=0):i=(n=n.slice(0,a)).length-1-n.lastIndexOf("/"),o=l,s=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=l,s=0;continue}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,l):n=e.slice(o+1,l),i=l-o-1;o=l,s=0}else 46===r&&-1!==s?++s:s=-1}return n}var n={resolve:function(){for(var e,n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s;o>=0?s=arguments[o]:(void 0===e&&(e=""),s=e),t(s),0!==s.length&&(n=s+"/"+n,i=47===s.charCodeAt(0))}return n=r(n,!i),i?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=n.resolve(e))===(r=n.resolve(r)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,s=o-i,l=1;l<r.length&&47===r.charCodeAt(l);++l);for(var a=r.length-l,c=s<a?s:a,u=-1,f=0;f<=c;++f){if(f===c){if(a>c){if(47===r.charCodeAt(l+f))return r.slice(l+f+1);if(0===f)return r.slice(l+f)}else s>c&&(47===e.charCodeAt(i+f)?u=f:0===f&&(u=0));break}var d=e.charCodeAt(i+f);if(d!==r.charCodeAt(l+f))break;47===d&&(u=f)}var h="";for(f=i+u+1;f<=o;++f)f!==o&&47!==e.charCodeAt(f)||(0===h.length?h+="..":h+="/..");return h.length>0?h+r.slice(l+u):(l+=u,47===r.charCodeAt(l)&&++l,r.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,i=-1,o=!0,s=e.length-1;s>=1;--s)if(47===(r=e.charCodeAt(s))){if(!o){i=s;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!==typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,i=0,o=-1,s=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var l=r.length-1,a=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!s){i=n+1;break}}else-1===a&&(s=!1,a=n+1),l>=0&&(c===r.charCodeAt(l)?-1===--l&&(o=n):(l=-1,o=a))}return i===o?o=a:-1===o&&(o=e.length),e.slice(i,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){i=n+1;break}}else-1===o&&(s=!1,o=n+1);return-1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var r=-1,n=0,i=-1,o=!0,s=0,l=e.length-1;l>=0;--l){var a=e.charCodeAt(l);if(47!==a)-1===i&&(o=!1,i=l+1),46===a?-1===r?r=l:1!==s&&(s=1):-1!==r&&(s=-1);else if(!o){n=l+1;break}}return-1===r||-1===i||0===s||1===s&&r===i-1&&r===n+1?"":e.slice(r,i)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,i=e.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var s=-1,l=0,a=-1,c=!0,u=e.length-1,f=0;u>=n;--u)if(47!==(i=e.charCodeAt(u)))-1===a&&(c=!1,a=u+1),46===i?-1===s?s=u:1!==f&&(f=1):-1!==s&&(f=-1);else if(!c){l=u+1;break}return-1===s||-1===a||0===f||1===f&&s===a-1&&s===l+1?-1!==a&&(r.base=r.name=0===l&&o?e.slice(1,a):e.slice(l,a)):(0===l&&o?(r.name=e.slice(1,s),r.base=e.slice(1,a)):(r.name=e.slice(l,s),r.base=e.slice(l,a)),r.ext=e.slice(s,a)),l>0?r.dir=e.slice(0,l-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(113);e.exports=i}()},7663:function(e){!function(){var t={308:function(e){var t,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,a=[],c=!1,u=-1;function f(){c&&l&&(c=!1,l.length?a=l.concat(a):u=-1,a.length&&d())}function d(){if(!c){var e=s(f);c=!0;for(var t=a.length;t;){for(l=a,a=[];++u<t;)l&&l[u].run();u=-1,t=a.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new h(e,t)),1!==a.length||c||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=g,n.addListener=g,n.once=g,n.off=g,n.removeListener=g,n.removeAllListeners=g,n.emit=g,n.prependListener=g,n.prependOnceListener=g,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(308);e.exports=i}()},9008:function(e,t,r){e.exports=r(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);