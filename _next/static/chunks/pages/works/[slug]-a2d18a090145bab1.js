(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9529:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/[slug]",function(){return t(602)}])},5677:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{noSSR:function(){return c},default:function(){return o}});let i=t(8754),a=(t(7294),i._(t(8976)));function l(e){return{default:(null==e?void 0:e.default)||e}}function c(e,s){return delete s.webpack,delete s.modules,e(s)}function o(e,s){let t=a.default,i={loading:e=>{let{error:s,isLoading:t,pastDelay:i}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i={...i,...e}),i={...i,...s};let o=i.loader;return(i.loadableGenerated&&(i={...i,...i.loadableGenerated},delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?t({...i,loader:()=>null!=o?o().then(l):Promise.resolve(l(()=>null))}):(delete i.webpack,delete i.modules,c(t,i))}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},2254:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"LoadableContext",{enumerable:!0,get:function(){return l}});let i=t(8754),a=i._(t(7294)),l=a.default.createContext(null)},8976:function(e,s,t){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return g}});let i=t(8754),a=i._(t(7294)),l=t(2254),c=[],o=[],n=!1;function u(e){let s=e(),t={loading:!0,loaded:null,error:null};return t.promise=s.then(e=>(t.loading=!1,t.loaded=e,e)).catch(e=>{throw t.loading=!1,t.error=e,e}),t}class m{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:s}=this;e.loading&&("number"==typeof s.delay&&(0===s.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},s.delay)),"number"==typeof s.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},s.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,s){this._loadFn=e,this._opts=s,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,s){let t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},s),i=null;function c(){if(!i){let s=new m(e,t);i={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return i.promise()}if(!n){let e=t.webpack?t.webpack():t.modules;e&&o.push(s=>{for(let t of e)if(s.includes(t))return c()})}function u(e,s){!function(){c();let e=a.default.useContext(l.LoadableContext);e&&Array.isArray(t.modules)&&t.modules.forEach(s=>{e(s)})}();let o=a.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return a.default.useImperativeHandle(s,()=>({retry:i.retry}),[]),a.default.useMemo(()=>{var s;return o.loading||o.error?a.default.createElement(t.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:i.retry}):o.loaded?a.default.createElement((s=o.loaded)&&s.default?s.default:s,e):null},[e,o])}return u.preload=()=>c(),u.displayName="LoadableComponent",a.default.forwardRef(u)}(u,e)}function r(e,s){let t=[];for(;e.length;){let i=e.pop();t.push(i(s))}return Promise.all(t).then(()=>{if(e.length)return r(e,s)})}d.preloadAll=()=>new Promise((e,s)=>{r(c).then(e,s)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(s=>{let t=()=>(n=!0,s());r(o,e).then(t,t)})),window.__NEXT_PRELOADREADY=d.preloadReady;let g=d},2973:function(e,s,t){"use strict";t.d(s,{Z:function(){return p}});var i=t(5893);t(7294),t(4950);var a=t(9897),l=t(301);let c=(0,l.zo)("div",{marginBottom:"$gr5","@xs":{"& > div > div":{alignItems:"center",textAlign:"center","& > div":{"&:last-child":{paddingTop:"$gr2"}}}},"& .clover-slider-header-label":{fontSize:"$gr6",fontFamily:"$sans",fontWeight:"300 !important",letterSpacing:"-0.01em"},"& .clover-slider-header-summary":{display:"block",fontSize:"$gr3 !important",color:"$slate11 "},"& .clover-slider-header-view-all":{color:"$slate1"},".swiper-slide":{a:{"> div":{borderRadius:"3px",overflow:"hidden"}}},figure:{"> div":{borderRadius:"3px",overflow:"hidden",boxShadow:"2px 2px 5px #0001"}},figcaption:{margin:"$gr1 0","> span":{textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"3",overflow:"hidden",whiteSpace:"normal",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"}},"& a figcaption, & a:visited figcaption":{color:"$slate12"},"& a:hover figcaption, & a:focus figcaption":{color:"$indigo11"}});var o=t(8236),n=t(5986),u=t(3885);let m=e=>n.hO*(0,o.gr)(e),d={[u.b.xxs]:{slidesPerView:2,slidesPerGroup:2,spaceBetween:m(1)},[u.b.xs]:{slidesPerView:2,slidesPerGroup:2,spaceBetween:m(1)},[u.b.sm]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:m(1)},[u.b.md]:{slidesPerView:3,slidesPerGroup:3,spaceBetween:m(2)},[u.b.lg]:{slidesPerView:5,slidesPerGroup:5,spaceBetween:m(2)},[u.b.xl]:{slidesPerView:5,slidesPerGroup:5,spaceBetween:m(2)}};var r=e=>{let{collectionId:s}=e;return(0,i.jsx)(c,{children:(0,i.jsx)(a.default,{iiifContent:s,options:{breakpoints:d}})})};let g=(0,l.zo)("section",{padding:"$gr4 0"});var x=t(5857),p=e=>{let{collections:s,title:t="Related Works"}=e;return(0,i.jsxs)(g,{children:[t&&(0,i.jsx)(x.Z,{as:"h2",children:t}),s.map(e=>(0,i.jsx)(r,{collectionId:e},e))]})}},5857:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var i=t(5893);t(7294);var a=t(301);let l=(0,a.zo)("h2",{variants:{isHidden:{true:{position:"absolute",visibility:"hidden"}}},"&[data-level=h1]":{margin:"$gr4 0",fontSize:"$gr8",fontWeight:"400",fontFamily:"$display",letterSpacing:"-0.02em",lineHeight:"1.1","@sm":{fontSize:"$gr7"}},"&[data-level=h2]":{margin:"$gr5 0 $gr4",fontSize:"$gr7",fontWeight:"400",fontFamily:"$display",letterSpacing:"-0.01em","@sm":{fontSize:"$gr5"}},"&[data-level=h3]":{margin:"$gr5 0 $gr3",color:"$slate11",fontSize:"$gr6",fontWeight:"300",fontFamily:"$sans",letterSpacing:"-0.01em","@sm":{fontSize:"$gr4"}},"&[data-level=h4]":{},"&[data-level=h5]":{},"&[data-level=h6]":{}});var c=e=>{let{as:s="h2",css:t={},id:a,isHidden:c=!1,children:o}=e;return(0,i.jsx)(l,{as:s,isHidden:c,"data-level":s,css:t,id:a,children:(0,i.jsx)(i.Fragment,{children:o})})}},6616:function(e,s,t){"use strict";var i=t(5893);t(7294);var a=t(5152),l=t.n(a);let c=l()(()=>Promise.all([t.e(318),t.e(897),t.e(447),t.e(940)]).then(t.bind(t,1940)).then(e=>e.Viewer),{loadableGenerated:{webpack:()=>[null]},ssr:!1}),o={colors:{accent:"$indigo10",accentAlt:"$indigo11",accentMuted:"$indigo8",primary:"$slate12",primaryAlt:"$slate12",primaryMuted:"$slate10",secondary:"$slate1",secondaryAlt:"$slate3",secondaryMuted:"$slate2"},fonts:{sans:"$sans",display:"$display"}},n={canvasBackgroundColor:"$slate6",canvasHeight:"600px",openSeadragon:{gestureSettingsMouse:{scrollToZoom:!1}},informationPanel:{open:!1,renderAbout:!1,renderToggle:!1},showTitle:!1,showIIIFBadge:!1};s.Z=e=>{let{iiifContent:s,options:t}=e;return(0,i.jsx)(c,{iiifContent:s,options:{...n,...t},customTheme:o})}},602:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return h},default:function(){return b}});var i=t(5893),a=t(5045),l=t(2213),c=t(2973),o=t(6616),n=t(1830),u=t(301);let m=(0,u.zo)("div",{}),d=(0,u.zo)("section",{maxWidth:"1280px",margin:"auto",position:"relative",paddingTop:"$gr3",".work-summary":{fontSize:"$gr5",fontFamily:"$sans",fontWeight:"300",color:"$slate11",marginBottom:"$gr4","@sm":{fontSize:"$gr4",marginBottom:"$gr4"}},"dl, .work-summary":{img:{maxHeight:"$gr5 !important",margin:"$gr1 0","@sm":{maxHeight:"$gr4 !important"}}}}),r=(0,u.zo)("div",{dl:{dt:{padding:"$gr3 0 $gr2",fontFamily:"$display"},dd:{padding:"0 0 $gr1",margin:"0"}}});var g=t(7058),x=t(5857),p=t(1664),z=t.n(p),_=e=>{let{manifestId:s}=e;return(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"IIIF Manifest"}),(0,i.jsx)("dd",{style:{wordBreak:"break-word"},children:(0,i.jsx)(z(),{href:s,children:s})})]})};t(7294);let f=e=>{let{searchParam:s,searchValues:t,value:a}=e;if(!a)return(0,i.jsx)(i.Fragment,{});let l=null==t?void 0:t.find(e=>e.value===a);return(0,i.jsx)(z(),{href:"/search?".concat(s,"=").concat(encodeURIComponent(null==l?void 0:l.slug)),children:(0,i.jsx)("span",{dangerouslySetInnerHTML:{__html:a}})})};var v=e=>{let{manifest:s}=e,{id:t,label:a,metadata:l,requiredStatement:c,summary:o}=s,u=g.map(e=>({Content:(0,i.jsx)(f,{searchParam:e.slug,searchValues:e.values}),matchingLabel:{none:[e.label]}}));return(0,i.jsx)(d,{children:(0,i.jsxs)(m,{children:[(0,i.jsx)(x.Z,{as:"h1",children:(0,i.jsx)(n.Label,{label:a,as:"span"})}),o&&(0,i.jsx)(n.Summary,{summary:o,as:"p",className:"work-summary"}),(0,i.jsxs)(r,{children:[l&&(0,i.jsx)(n.Metadata,{customValueContent:u,metadata:l}),c&&(0,i.jsx)(n.RequiredStatement,{requiredStatement:c}),(0,i.jsx)(_,{manifestId:t})]})]})})},h=!0;function b(e){let{manifest:s,related:t}=e,{id:n}=s;return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(o.Z,{iiifContent:n}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(v,{manifest:s}),(0,i.jsx)(c.Z,{collections:t})]})]})}},4950:function(){},5152:function(e,s,t){e.exports=t(5677)},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Subject","slug":"subject","values":[{"value":"Cayuse Indians","slug":"cayuse-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]},{"value":"Chinookan Indians","slug":"chinookan-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]},{"value":"Nez Perc\xe9 Indians","slug":"nez-perce-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]},{"value":"Tlakluit Indians","slug":"tlakluit-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]},{"value":"Umatilla Indians","slug":"umatilla-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]},{"value":"Walla Walla Indians","slug":"walla-walla-indians","doc_count":119,"docs":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118]}]},{"label":"Date","slug":"date","values":[{"value":"1910","slug":"1910","doc_count":70,"docs":[2,3,4,6,9,11,14,15,17,18,19,20,21,22,25,26,27,28,29,32,33,34,36,37,38,39,41,42,44,48,49,51,55,56,57,59,60,61,62,64,65,67,68,72,75,78,83,84,85,86,87,88,89,90,91,93,95,96,97,98,99,100,102,103,104,109,110,112,115,118]},{"value":"1909","slug":"1909","doc_count":26,"docs":[40,43,45,46,47,50,52,54,58,63,69,70,71,73,74,76,77,79,80,92,94,107,108,114,116,117]},{"value":"1905","slug":"1905","doc_count":12,"docs":[1,10,12,23,24,30,31,35,101,106,111,113]},{"value":"1911","slug":"1911","doc_count":7,"docs":[0,7,53,66,81,82,105]},{"value":"1903","slug":"1903","doc_count":2,"docs":[8,16]},{"value":"1899","slug":"1899","doc_count":1,"docs":[5]},{"value":"1900","slug":"1900","doc_count":1,"docs":[13]}]},{"label":"Dimensions","slug":"dimensions","values":[{"value":"46 x 32 cm [plate size]","slug":"46-x-32-cm-plate-size","doc_count":18,"docs":[1,5,10,13,16,23,24,28,45,69,78,79,101,106,111,116,117,118]},{"value":"13.5 x 18.6 cm [image size], 18 x 22 cm [plate size]","slug":"135-x-186-cm-image-size-18-x-22-cm-plate-size","doc_count":5,"docs":[35,52,59,63,94]},{"value":"46 x 34 cm [plate size]","slug":"46-x-34-cm-plate-size","doc_count":5,"docs":[12,33,44,108,110]},{"value":"18.5 x 13.5 cm [image size], 23 x 17 cm [plate size]","slug":"185-x-135-cm-image-size-23-x-17-cm-plate-size","doc_count":4,"docs":[29,34,49,77]},{"value":"36 x 44 cm [plate size]","slug":"36-x-44-cm-plate-size","doc_count":4,"docs":[72,84,103,107]},{"value":"13.8 x 18.6 cm [image size], 18 x 22 cm [plate size]","slug":"138-x-186-cm-image-size-18-x-22-cm-plate-size","doc_count":3,"docs":[43,71,74]},{"value":"18.2 x 12.6 cm [image size], 23 x 16 cm [plate size]","slug":"182-x-126-cm-image-size-23-x-16-cm-plate-size","doc_count":3,"docs":[6,55,62]},{"value":"18.3 x 12.5 cm [image size], 23 x 16 cm [plate size]","slug":"183-x-125-cm-image-size-23-x-16-cm-plate-size","doc_count":3,"docs":[68,83,97]},{"value":"18.3 x 12.6 cm [image size], 23 x 16 cm [plate size]","slug":"183-x-126-cm-image-size-23-x-16-cm-plate-size","doc_count":3,"docs":[9,41,51]},{"value":"18.6 x 11.9 cm [image size], 23 x 15 cm [plate size]","slug":"186-x-119-cm-image-size-23-x-15-cm-plate-size","doc_count":3,"docs":[11,60,93]},{"value":"18.6 x 12 cm [image size], 23 x 15 cm [plate size]","slug":"186-x-12-cm-image-size-23-x-15-cm-plate-size","doc_count":3,"docs":[8,22,39]},{"value":"13.5 x 18.5 cm [image size], 18 x 22 cm [plate size]","slug":"135-x-185-cm-image-size-18-x-22-cm-plate-size","doc_count":2,"docs":[88,92]},{"value":"13.6 x 18.5 cm [image size], 18 x 22 cm [plate size]","slug":"136-x-185-cm-image-size-18-x-22-cm-plate-size","doc_count":2,"docs":[15,30]},{"value":"13.6 x 18.6 cm [image size], 18 x 22 cm [plate size]","slug":"136-x-186-cm-image-size-18-x-22-cm-plate-size","doc_count":2,"docs":[58,76]},{"value":"18.2 x 12.5 cm [image size], 23 x 16 cm [plate size]","slug":"182-x-125-cm-image-size-23-x-16-cm-plate-size","doc_count":2,"docs":[89,95]},{"value":"18.4 x 13.5 cm [image size], 23 x 16 cm [plate size]","slug":"184-x-135-cm-image-size-23-x-16-cm-plate-size","doc_count":2,"docs":[3,32]},{"value":"18.5 x 11.9 cm [image size], 23 x 15 cm [plate size]","slug":"185-x-119-cm-image-size-23-x-15-cm-plate-size","doc_count":2,"docs":[48,61]},{"value":"18.5 x 12 cm [image size], 23 x 15 cm [plate size]","slug":"185-x-12-cm-image-size-23-x-15-cm-plate-size","doc_count":2,"docs":[14,57]},{"value":"18.5 x 13.5 cm [image size], 23 x 16 cm [plate size]","slug":"185-x-135-cm-image-size-23-x-16-cm-plate-size","doc_count":2,"docs":[21,104]},{"value":"18.6 x 12 cm [image size], 23 x 16 cm [plate size]","slug":"186-x-12-cm-image-size-23-x-16-cm-plate-size","doc_count":2,"docs":[86,98]},{"value":"18.7 x 12 cm [image size], 23 x 15 cm [plate size]","slug":"187-x-12-cm-image-size-23-x-15-cm-plate-size","doc_count":2,"docs":[18,25]},{"value":"34 x 44 cm [plate size]","slug":"34-x-44-cm-plate-size","doc_count":2,"docs":[109,112]},{"value":"36 x 43 cm [plate size]","slug":"36-x-43-cm-plate-size","doc_count":2,"docs":[31,46]},{"value":"12.5 x 18.2 cm [image size], 17 x 22 cm [plate size]","slug":"125-x-182-cm-image-size-17-x-22-cm-plate-size","doc_count":1,"docs":[40]},{"value":"13.5 x 18.3 cm [image size], 18 x 21 cm [plate size]","slug":"135-x-183-cm-image-size-18-x-21-cm-plate-size","doc_count":1,"docs":[4]},{"value":"13.5 x 18.4 cm [image size], 18 x 21 cm [plate size]","slug":"135-x-184-cm-image-size-18-x-21-cm-plate-size","doc_count":1,"docs":[2]},{"value":"13.7 x 18.5 cm [image size], 18 x 22 cm [plate size]","slug":"137-x-185-cm-image-size-18-x-22-cm-plate-size","doc_count":1,"docs":[80]},{"value":"13.7 x 18.6 cm [image size], 18 x 21 cm [plate size]","slug":"137-x-186-cm-image-size-18-x-21-cm-plate-size","doc_count":1,"docs":[42]},{"value":"13.9 x 18.5 cm [image size], 18 x 21 cm [plate size]","slug":"139-x-185-cm-image-size-18-x-21-cm-plate-size","doc_count":1,"docs":[36]},{"value":"14 x 18.5 cm [image size], 18 x 22 cm [plate size]","slug":"14-x-185-cm-image-size-18-x-22-cm-plate-size","doc_count":1,"docs":[64]},{"value":"14 x 18.6 cm [image size], 18 x 22 cm [plate size]","slug":"14-x-186-cm-image-size-18-x-22-cm-plate-size","doc_count":1,"docs":[73]},{"value":"17.5 x 23.8 cm [image size], 18 x 24 cm [plate size]","slug":"175-x-238-cm-image-size-18-x-24-cm-plate-size","doc_count":1,"docs":[81]},{"value":"17.7 x 20.5 cm [image size], 18 x 21 cm [plate size]","slug":"177-x-205-cm-image-size-18-x-21-cm-plate-size","doc_count":1,"docs":[7]},{"value":"18.1 x 8.4 cm [image size], 22 x 11 cm [plate size]","slug":"181-x-84-cm-image-size-22-x-11-cm-plate-size","doc_count":1,"docs":[27]},{"value":"18.2 x 12 cm [image size], 23 x 15 cm [plate size]","slug":"182-x-12-cm-image-size-23-x-15-cm-plate-size","doc_count":1,"docs":[70]},{"value":"18.2 x 12.6 cm [image size], 22 x 16 cm [plate size]","slug":"182-x-126-cm-image-size-22-x-16-cm-plate-size","doc_count":1,"docs":[102]},{"value":"18.3 x 12.5 cm [image size], 23 x 15 cm [plate size]","slug":"183-x-125-cm-image-size-23-x-15-cm-plate-size","doc_count":1,"docs":[37]},{"value":"18.3 x 12.5 cm [image size], 23 x16 cm [plate size]","slug":"183-x-125-cm-image-size-23-x16-cm-plate-size","doc_count":1,"docs":[19]},{"value":"18.3 x 12.6 cm [image size], 23 x 15 cm [plate size]","slug":"183-x-126-cm-image-size-23-x-15-cm-plate-size","doc_count":1,"docs":[38]},{"value":"18.4 x 12 cm [image size], 23 x 15 cm [plate size]","slug":"184-x-12-cm-image-size-23-x-15-cm-plate-size","doc_count":1,"docs":[100]},{"value":"18.4 x 12.6 cm [image size], 22 x 15 cm [plate size]","slug":"184-x-126-cm-image-size-22-x-15-cm-plate-size","doc_count":1,"docs":[75]},{"value":"18.5 x 12.7 cm [image size], 23 x 16 cm [plate size]","slug":"185-x-127-cm-image-size-23-x-16-cm-plate-size","doc_count":1,"docs":[65]},{"value":"18.5 x 13.4 cm [image size], 23 x 16 cm [plate size]","slug":"185-x-134-cm-image-size-23-x-16-cm-plate-size","doc_count":1,"docs":[50]},{"value":"18.5 x 13.5 cm [image size], 23 x17 cm [plate size]","slug":"185-x-135-cm-image-size-23-x17-cm-plate-size","doc_count":1,"docs":[91]},{"value":"18.5 x 13.6 cm [image size], 23 x 17 cm [plate size]","slug":"185-x-136-cm-image-size-23-x-17-cm-plate-size","doc_count":1,"docs":[47]},{"value":"18.6 x 11.9 cm [image size], 23 x15 cm [plate size]","slug":"186-x-119-cm-image-size-23-x15-cm-plate-size","doc_count":1,"docs":[20]},{"value":"18.6 x 13.3 cm [image size], 23 x 16 cm [plate size]","slug":"186-x-133-cm-image-size-23-x-16-cm-plate-size","doc_count":1,"docs":[99]},{"value":"18.6 x 13.5 cm [image size], 23 x 17 cm [plate size]","slug":"186-x-135-cm-image-size-23-x-17-cm-plate-size","doc_count":1,"docs":[26]},{"value":"18.6 x 13.6 cm [image size], 23 x 16 cm [plate size]","slug":"186-x-136-cm-image-size-23-x-16-cm-plate-size","doc_count":1,"docs":[90]},{"value":"18.6 x 13.6 cm [image size], 23 x 17 cm [plate size]","slug":"186-x-136-cm-image-size-23-x-17-cm-plate-size","doc_count":1,"docs":[96]},{"value":"18.7 x 13.6 cm [image size], 23 x 17 cm [plate size]","slug":"187-x-136-cm-image-size-23-x-17-cm-plate-size","doc_count":1,"docs":[67]},{"value":"18.8 x 9.8 cm [image size], 23 x 13 cm [plate size]","slug":"188-x-98-cm-image-size-23-x-13-cm-plate-size","doc_count":1,"docs":[87]},{"value":"18.8 x 9.9 cm [image size], 23 x 13 cm [plate size]","slug":"188-x-99-cm-image-size-23-x-13-cm-plate-size","doc_count":1,"docs":[54]},{"value":"33 x 25 cm","slug":"33-x-25-cm","doc_count":1,"docs":[0]},{"value":"33 x 44 cm [plate size]","slug":"33-x-44-cm-plate-size","doc_count":1,"docs":[115]},{"value":"34 x 46 cm [plate size]","slug":"34-x-46-cm-plate-size","doc_count":1,"docs":[114]},{"value":"45 x 31 cm [plate size]","slug":"45-x-31-cm-plate-size","doc_count":1,"docs":[113]},{"value":"45 x 32 cm [plate size]","slug":"45-x-32-cm-plate-size","doc_count":1,"docs":[56]},{"value":"46 x 30 cm [plate size]","slug":"46-x-30-cm-plate-size","doc_count":1,"docs":[85]},{"value":"46 x 31 cm [plate size]","slug":"46-x-31-cm-plate-size","doc_count":1,"docs":[17]}]}]')}},function(e){e.O(0,[412,409,971,897,602,774,888,179],function(){return e(e.s=9529)}),_N_E=e.O()}]);