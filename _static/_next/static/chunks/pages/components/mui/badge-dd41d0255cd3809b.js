(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5142],{66222:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/badge",function(){return t(54788)}])},22284:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),i=t(41664),o=t(15861),l=t(12963),c=t(99226),a=t(50122);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function u(e){var n=e.links,t=e.activeLast,i=void 0!==t&&t,a=d(e,["links","activeLast"]),u=n[n.length-1].name,f=n.map((function(e){return(0,r.jsx)(h,{link:e},e.name)})),x=n.map((function(e){return(0,r.jsx)("div",{children:e.name!==u?(0,r.jsx)(h,{link:e}):(0,r.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:u})},e.name)}));return(0,r.jsx)(l.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({separator:(0,r.jsx)(c.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a,{children:i?f:x}))}function h(e){var n=e.link,t=n.href,o=void 0===t?"":t,l=n.name,s=n.icon;return(0,r.jsx)(i.default,{href:o,passHref:!0,children:(0,r.jsxs)(a.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[s&&(0,r.jsx)(c.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:s}),l]},l)})}},72728:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(85893),i=t(47037),o=t.n(i),l=t(99226),c=t(15861),a=t(50122),s=t(22284);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){d(e,n,t[n])}))}return e}function h(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function f(e){var n=e.links,t=e.action,i=e.heading,d=e.moreLink,f=void 0===d?[]:d,x=e.sx,g=h(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(l.Z,{sx:u({mb:5},x),children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,r.jsx)(s.Z,u({links:n},g))]}),t&&(0,r.jsx)(l.Z,{sx:{flexShrink:0},children:t})]}),(0,r.jsx)(l.Z,{sx:{mt:2},children:o()(f)?(0,r.jsx)(a.Z,{href:f,target:"_blank",variant:"body2",children:f}):f.map((function(e){return(0,r.jsx)(a.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},54788:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(85893),i=t(11496),o=t(99226),l=t(27948),c=t(88968),a=t(15861),s=t(78672),d=t(96259),u=t(64156),h=t(61582),f=t(3140),x=t(72728),g=t(56691),j=(0,i.ZP)("div")((function(e){var n=e.theme;return{paddingTop:n.spacing(11),paddingBottom:n.spacing(15)}}));function b(){return(0,r.jsx)(h.Z,{title:"Components: Badge",children:(0,r.jsxs)(j,{children:[(0,r.jsx)(o.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(x.Z,{heading:"Badge",links:[{name:"Components",href:d.ko.components},{name:"Badge"}],moreLink:"https://mui.com/components/badges"})})}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(s.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,r.jsxs)(g.g,{title:"Basic",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,r.jsx)(c.Z,{badgeContent:4,children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(c.Z,{badgeContent:4,color:"primary",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(c.Z,{badgeContent:4,color:"secondary",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(c.Z,{badgeContent:4,color:"info",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(c.Z,{badgeContent:4,color:"success",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(c.Z,{badgeContent:4,color:"warning",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(c.Z,{badgeContent:4,color:"error",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})})]}),(0,r.jsxs)(g.g,{title:"Maximum value",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,r.jsx)(c.Z,{badgeContent:99,color:"error",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(c.Z,{badgeContent:100,color:"error",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(c.Z,{badgeContent:1e3,max:999,color:"error",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})})]}),(0,r.jsxs)(g.g,{title:"Dot badge",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,r.jsx)(c.Z,{color:"info",variant:"dot",children:(0,r.jsx)(f.Z,{icon:"eva:email-fill",width:24,height:24})}),(0,r.jsx)(c.Z,{color:"info",variant:"dot",children:(0,r.jsx)(a.Z,{children:"Typography"})})]}),(0,r.jsxs)(g.g,{title:"Badge overlap",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[(0,r.jsx)(c.Z,{color:"info",badgeContent:" ",children:(0,r.jsx)(o.Z,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),(0,r.jsx)(c.Z,{color:"info",badgeContent:" ",variant:"dot",children:(0,r.jsx)(o.Z,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),(0,r.jsx)(c.Z,{color:"info",overlap:"circular",badgeContent:" ",children:(0,r.jsx)(o.Z,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})}),(0,r.jsx)(c.Z,{color:"info",overlap:"circular",badgeContent:" ",variant:"dot",children:(0,r.jsx)(o.Z,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})})]})]})})]})})}b.getLayout=function(e){return(0,r.jsx)(u.Z,{variant:"main",children:e})}},56691:function(e,n,t){"use strict";t.d(n,{g:function(){return u},_:function(){return h}});var r=t(85893),i=t(41796),o=t(55113),l=t(78445),c=t(99226),a=t(15861);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}function u(e){var n=e.title,t=e.sx,a=e.children;return(0,r.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,r.jsx)(l.Z,{title:n}),(0,r.jsx)(c.Z,{sx:d({p:5,minHeight:180},t),children:a})]})}function h(e){var n=e.title;return(0,r.jsx)(a.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:n})}}},function(e){e.O(0,[6586,9910,1631,4525,5846,3907,1993,4156,9774,2888,6377],(function(){return n=66222,e(e.s=n);var n}));var n=e.O();_N_E=n}]);