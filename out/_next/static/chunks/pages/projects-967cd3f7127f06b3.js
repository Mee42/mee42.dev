(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(3897)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(6495).Z,o=r(2648).Z,n=r(1598).Z,s=r(7273).Z,a=n(r(7294)),c=o(r(3121)),l=r(2675),d=r(139),u=r(8730);r(7238);var h=o(r(9824));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,n,s,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let c="decode"in e?e.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&s(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,c=!1;o.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>c,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{c=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let j=a.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:n,qualityInt:c,className:l,imgStyle:d,blurStyle:u,isLazy:h,fill:f,placeholder:p,loading:g,srcString:j,config:b,unoptimized:v,loader:w,onLoadRef:x,onLoadingCompleteRef:y,setBlurComplete:_,setShowAltText:S,onLoad:C,onError:E}=e,k=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=h?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},k,r,{width:n,height:o,decoding:"async","data-nimg":f?"fill":"1",className:l,loading:g,style:i({},d,u),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&m(e,j,p,x,y,_,v))},[j,p,x,y,_,E,v,t]),onLoad:e=>{let t=e.currentTarget;m(t,j,p,x,y,_,v)},onError:e=>{S(!0),"blur"===p&&_(!0),E&&E(e)}})))}),b=a.forwardRef((e,t)=>{let r,o;var n,{src:m,sizes:b,unoptimized:v=!1,priority:w=!1,loading:x,className:y,quality:_,width:S,height:C,fill:E,style:k,onLoad:z,onLoadingComplete:B,placeholder:P="empty",blurDataURL:N,layout:A,objectFit:T,objectPosition:O,lazyBoundary:R,lazyRoot:I}=e,F=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let M=a.useContext(u.ImageConfigContext),q=a.useMemo(()=>{let e=f||M||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[M]),D=F,G=D.loader||h.default;delete D.loader;let L="__next_img_default"in G;if(L){if("custom"===q.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Z=G;G=e=>{let{config:t}=e,r=s(e,["config"]);return Z(r)}}if(A){"fill"===A&&(E=!0);let U={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];U&&(k=i({},k,U));let W={responsive:"100vw",fill:"100vw"}[A];W&&!b&&(b=W)}let J="",H=g(S),V=g(C);if("object"==typeof(n=m)&&(p(n)||void 0!==n.src)){let X=p(m)?m.default:m;if(!X.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(!X.height||!X.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)));if(r=X.blurWidth,o=X.blurHeight,N=N||X.blurDataURL,J=X.src,!E){if(H||V){if(H&&!V){let K=H/X.width;V=Math.round(X.height*K)}else if(!H&&V){let Q=V/X.height;H=Math.round(X.width*Q)}}else H=X.width,V=X.height}}let Y=!w&&("lazy"===x||void 0===x);((m="string"==typeof m?m:J).startsWith("data:")||m.startsWith("blob:"))&&(v=!0,Y=!1),q.unoptimized&&(v=!0),L&&m.endsWith(".svg")&&!q.dangerouslyAllowSVG&&(v=!0);let[$,ee]=a.useState(!1),[et,er]=a.useState(!1),ei=g(_),eo=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:T,objectPosition:O}:{},et?{}:{color:"transparent"},k),en="blur"===P&&N&&!$?{backgroundSize:eo.objectFit||"cover",backgroundPosition:eo.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:H,heightInt:V,blurWidth:r,blurHeight:o,blurDataURL:N}),'")')}:{},es=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:s,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let n=/(^|\s)(1?\d?\d)vw/g,s=[];for(let a;a=n.exec(r);a)s.push(parseInt(a[2]));if(s.length){let c=.01*Math.min(...s);return{widths:o.filter(e=>e>=i[0]*c),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let l=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:l,kind:"x"}}(t,o,s),d=c.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:c.map((e,i)=>"".concat(a({config:t,src:r,quality:n,width:e})," ").concat("w"===l?e:i+1).concat(l)).join(", "),src:a({config:t,src:r,quality:n,width:c[d]})}}({config:q,src:m,unoptimized:v,width:H,quality:ei,sizes:b,loader:G}),ea=m,ec={imageSrcSet:es.srcSet,imageSizes:es.sizes,crossOrigin:D.crossOrigin},el=a.useRef(z);a.useEffect(()=>{el.current=z},[z]);let ed=a.useRef(B);a.useEffect(()=>{ed.current=B},[B]);let eu=i({isLazy:Y,imgAttributes:es,heightInt:V,widthInt:H,qualityInt:ei,className:y,imgStyle:eo,blurStyle:en,loading:x,config:q,fill:E,unoptimized:v,placeholder:P,loader:G,srcString:ea,onLoadRef:el,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:er},D);return a.default.createElement(a.default.Fragment,null,a.default.createElement(j,Object.assign({},eu,{ref:t})),w?a.default.createElement(c.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+es.src+es.srcSet+es.sizes,rel:"preload",as:"image",href:es.srcSet?void 0:es.src},ec))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n}=e,s=i||t,a=o||r,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},8136:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(5893);r(7294);var o=r(4878),n=r.n(o),s=r(9008),a=r.n(s);function c(e){return(0,i.jsxs)("header",{className:n().header,children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("html",{lang:"en-US"}),(0,i.jsx)("title",{children:null===e.title?"carson.sh":"carson.sh | "+e.title})]}),(0,i.jsx)("a",{href:"/",className:n().mainButton,children:(0,i.jsx)("code",{children:"carson.sh"})}),(0,i.jsx)(l,{href:"/",title:"Home"}),(0,i.jsx)(l,{href:"/projects",title:"Projects"}),(0,i.jsx)(l,{href:"/blog",title:"Blog"}),(0,i.jsx)(l,{href:"https://github.com/mee42/",title:"Github"})]})}function l(e){return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:n().withGrow}),(0,i.jsx)("a",{href:e.href,children:e.title}),(0,i.jsx)("div",{className:n().withGrow}),(0,i.jsx)("div",{className:n().bottomBorder})]})}},3897:function(e,t,r){"use strict";r.r(t),r.d(t,{config:function(){return l},default:function(){return h}});var i=r(5893);r(7294);var o=r(8136),n=r(6154),s=r.n(n),a=r(5675),c=r.n(a);let l={unstable_runtimeJS:!1},d=(0,i.jsx)("div",{style:{width:"100px",height:"100px"}}),u=[{title:"https://carson.sh",id:"site",desc:(0,i.jsx)("div",{children:"This website you're reading right now!"}),icon:"/favicon.ico",alt:"A blue triangle, the favicon",content:(0,i.jsxs)("div",{children:["NextJS, React, Typescript(X), SCSS, all that fancy stuff - but zero client-side JS. You can check out the github ",(0,i.jsx)("a",{href:"https://github.com/mee42/carson.sh",children:"here"}),", and even steal a bit if you'd like. Fully designed and styled by me, built up over a couple years of incredible procrastination. The chance I ever work on a less modern web stack is slim to none. This CSS stuff is terrible even with all this fancy equipement."]})},{title:"Weather Box",id:"weather",desc:(0,i.jsx)("div",{children:"A tiny box that tells you the weather and the forcast!"}),icon:d,alt:"an empty square",content:(0,i.jsx)(i.Fragment,{})},{title:"16bit CPU",id:"cpu",desc:(0,i.jsx)("div",{children:'A "functional" (in progress) CPU build entirely on breadboards with 74-series logic chips'}),icon:d,alt:"an empty square",content:(0,i.jsx)(i.Fragment,{})},{title:"KSP Control Panel",id:"ksp",desc:(0,i.jsx)("div",{children:"A physical rocket cockpit control board to sit below my monitor, to control rockets in Kerbal Space Program with."}),icon:d,alt:"an empty square",content:(0,i.jsx)(i.Fragment,{})},{title:"Whiteboard bot",id:"whiteboard",desc:(0,i.jsx)("div",{children:"A robot to draw arbitrary lines on huge whiteboards with high precision"}),icon:d,alt:"an empty square",content:(0,i.jsx)(i.Fragment,{})},{title:"Xenon",id:"xenon",desc:(0,i.jsx)("div",{children:"A compiler built for a custom designed, C-like language that compiled directly to x86_64 assembly"}),icon:d,alt:"an empty square",content:(0,i.jsx)(i.Fragment,{})},{title:"Threeboard",id:"threeboard",desc:(0,i.jsx)("div",{children:"A project to build a functional keyboard on a custom designed PCB. Firmware built from the ground up on ATSAMD THUMB processors. USB HID code never worked."}),icon:d,alt:"an empty square",content:(0,i.jsx)(i.Fragment,{})}];function h(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.Z,{title:"projects"}),(0,i.jsx)("h1",{children:"Projects"}),(0,i.jsx)("div",{style:{color:"#000",background:"#fff",height:"100vh",textAlign:"center",display:"block"},children:(0,i.jsx)("div",{className:s().projectBox,children:u.map((e,t)=>(0,i.jsx)(f,{project:e},t))})})]})}function f(e){return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:s().project,children:[(0,i.jsxs)("div",{className:s().projectTop,children:["string"==typeof e.project.icon?(0,i.jsx)(c(),{src:e.project.icon,alt:e.project.alt,width:"100",height:"100",style:{zIndex:0}}):e.project.icon,(0,i.jsxs)("div",{className:s().projectContent,children:[(0,i.jsx)("h2",{children:e.project.title}),e.project.desc]})]}),(0,i.jsx)("div",{className:s().projectBottom,id:e.project.id,children:e.project.content})]})})}},4878:function(e){e.exports={header:"header_header__FfSP_",withGrow:"header_withGrow__v2i8T",bottomBorder:"header_bottomBorder___i6c3",mainButton:"header_mainButton__no_Oz"}},6154:function(e){e.exports={project:"projects_project__uDaxC",projectTop:"projects_projectTop__B0fMJ",projectBottom:"projects_projectBottom__vZZdz",show:"projects_show__E9D52",projectContent:"projects_projectContent__ehQQP",projectBox:"projects_projectBox__rZVJr"}},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);