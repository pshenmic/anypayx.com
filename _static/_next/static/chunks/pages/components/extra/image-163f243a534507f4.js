(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60],{91009:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/extra/image",function(){return r(71416)}])},22284:function(e,n,r){"use strict";r.d(n,{Z:function(){return f}});var t=r(85893),i=r(41664),o=r(15861),a=r(12963),l=r(99226),s=r(50122);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function f(e){var n=e.links,r=e.activeLast,i=void 0!==r&&r,s=u(e,["links","activeLast"]),f=n[n.length-1].name,p=n.map((function(e){return(0,t.jsx)(d,{link:e},e.name)})),x=n.map((function(e){return(0,t.jsx)("div",{children:e.name!==f?(0,t.jsx)(d,{link:e}):(0,t.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:f})},e.name)}));return(0,t.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){c(e,n,r[n])}))}return e}({separator:(0,t.jsx)(l.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},s,{children:i?p:x}))}function d(e){var n=e.link,r=n.href,o=void 0===r?"":r,a=n.name,c=n.icon;return(0,t.jsx)(i.default,{href:o,passHref:!0,children:(0,t.jsxs)(s.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,t.jsx)(l.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),a]},a)})}},72728:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(85893),i=r(47037),o=r.n(i),a=r(99226),l=r(15861),s=r(50122),c=r(22284);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}function d(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function p(e){var n=e.links,r=e.action,i=e.heading,u=e.moreLink,p=void 0===u?[]:u,x=e.sx,h=d(e,["links","action","heading","moreLink","sx"]);return(0,t.jsxs)(a.Z,{sx:f({mb:5},x),children:[(0,t.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsxs)(a.Z,{sx:{flexGrow:1},children:[(0,t.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,t.jsx)(c.Z,f({links:n},h))]}),r&&(0,t.jsx)(a.Z,{sx:{flexShrink:0},children:r})]}),(0,t.jsx)(a.Z,{sx:{mt:2},children:o()(p)?(0,t.jsx)(s.Z,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return(0,t.jsx)(s.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},71416:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return g}});var t=r(85893),i=r(11496),o=r(99226),a=r(27948),l=r(66242),s=r(78445),c=r(15861),u=r(96259),f=r(26967),d=r(64156),p=r(61582),x=r(97349),h=r(72728),m=(0,i.ZP)("div")((function(e){var n=e.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}}));g.getLayout=function(e){return(0,t.jsx)(d.Z,{variant:"main",children:e})};var b=["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"].map((function(e,n){return{value:e,url:f.Co.image.feed(n+1)}}));function g(){return(0,t.jsx)(p.Z,{title:"Components: Image",children:(0,t.jsxs)(m,{children:[(0,t.jsx)(o.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,t.jsx)(a.Z,{children:(0,t.jsx)(h.Z,{heading:"Image",links:[{name:"Components",href:u.ko.components},{name:"Image"}]})})}),(0,t.jsx)(a.Z,{children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{title:"Image Aspect Ratio"}),(0,t.jsx)(o.Z,{sx:{p:3,display:"grid",gap:3,gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"}},children:b.map((function(e){return(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(c.Z,{variant:"overline",sx:{color:"text.secondary"},children:e.value}),(0,t.jsx)(x.Z,{alt:e.value,src:e.url,ratio:e.value,sx:{borderRadius:1}})]},e.value)}))})]})})]})})}}},function(e){e.O(0,[6586,9910,1631,1878,3907,1993,4156,6955,6967,9774,2888,6377],(function(){return n=91009,e(e.s=n);var n}));var n=e.O();_N_E=n}]);