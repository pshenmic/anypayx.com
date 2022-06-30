(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2642],{12963:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var n=t(87462),o=t(63366),a=t(67294),i=(t(59864),t(86010)),s=t(27192),l=t(11496),c=t(33616),u=t(15861),d=t(41796),p=t(82066),h=t(85893),f=(0,p.Z)((0,h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=t(49990);const x=(0,l.ZP)(m.Z)((({theme:e})=>(0,n.Z)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,n.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,n.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,d._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,d._4)(e.palette.grey[600],.12)})}))),b=(0,l.ZP)(f)({width:24,height:16});var g=function(e){const r=e;return(0,h.jsx)("li",{children:(0,h.jsx)(x,(0,n.Z)({focusRipple:!0},e,{ownerState:r,children:(0,h.jsx)(b,{ownerState:r})}))})},y=t(28979);function v(e){return(0,y.Z)("MuiBreadcrumbs",e)}var j=(0,t(76087).Z)("MuiBreadcrumbs",["root","ol","li","separator"]);const Z=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,l.ZP)(u.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${j.li}`]:r.li},r.root]})({}),O=(0,l.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,l.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function C(e,r,t,n){return e.reduce(((o,a,i)=>(i<e.length-1?o=o.concat(a,(0,h.jsx)(k,{"aria-hidden":!0,className:r,ownerState:n,children:t},`separator-${i}`)):o.push(a),o)),[])}var P=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiBreadcrumbs"}),{children:l,className:u,component:d="nav",expandText:p="Show path",itemsAfterCollapse:f=1,itemsBeforeCollapse:m=1,maxItems:x=8,separator:b="/"}=t,y=(0,o.Z)(t,Z),[j,k]=a.useState(!1),P=(0,n.Z)({},t,{component:d,expanded:j,expandText:p,itemsAfterCollapse:f,itemsBeforeCollapse:m,maxItems:x,separator:b}),S=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},v,r)})(P),R=a.useRef(null),N=a.Children.toArray(l).filter((e=>a.isValidElement(e))).map(((e,r)=>(0,h.jsx)("li",{className:S.li,children:e},`child-${r}`)));return(0,h.jsx)(w,(0,n.Z)({ref:r,component:d,color:"text.secondary",className:(0,i.Z)(S.root,u),ownerState:P},y,{children:(0,h.jsx)(O,{className:S.ol,ref:R,ownerState:P,children:C(j||x&&N.length<=x?N:(e=>m+f>=e.length?e:[...e.slice(0,m),(0,h.jsx)(g,{"aria-label":p,onClick:()=>{k(!0);const e=R.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-f,e.length)])(N),S.separator,b,P)})}))}))},78445:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var n=t(63366),o=t(87462),a=t(67294),i=t(86010),s=t(27192),l=t(15861),c=t(33616),u=t(11496),d=t(28979);function p(e){return(0,d.Z)("MuiCardHeader",e)}var h=(0,t(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=t(85893);const m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,r)=>(0,o.Z)({[`& .${h.title}`]:r.title,[`& .${h.subheader}`]:r.subheader},r.root)})({display:"flex",alignItems:"center",padding:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,r)=>r.content})({flex:"1 1 auto"});var v=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:a,avatar:u,className:d,component:h="div",disableTypography:v=!1,subheader:j,subheaderTypographyProps:Z,title:w,titleTypographyProps:O}=t,k=(0,n.Z)(t,m),C=(0,o.Z)({},t,{component:h,disableTypography:v}),P=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,r)})(C);let S=w;null==S||S.type===l.Z||v||(S=(0,f.jsx)(l.Z,(0,o.Z)({variant:u?"body2":"h5",className:P.title,component:"span",display:"block"},O,{children:S})));let R=j;return null==R||R.type===l.Z||v||(R=(0,f.jsx)(l.Z,(0,o.Z)({variant:u?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},Z,{children:R}))),(0,f.jsxs)(x,(0,o.Z)({className:(0,i.Z)(P.root,d),as:h,ref:r,ownerState:C},k,{children:[u&&(0,f.jsx)(b,{className:P.avatar,ownerState:C,children:u}),(0,f.jsxs)(y,{className:P.content,ownerState:C,children:[S,R]}),a&&(0,f.jsx)(g,{className:P.action,ownerState:C,children:a})]}))}))},9698:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/breadcrumbs",function(){return t(12164)}])},22284:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(85893),o=t(41664),a=t(15861),i=t(12963),s=t(99226),l=t(50122);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function d(e){var r=e.links,t=e.activeLast,o=void 0!==t&&t,l=u(e,["links","activeLast"]),d=r[r.length-1].name,h=r.map((function(e){return(0,n.jsx)(p,{link:e},e.name)})),f=r.map((function(e){return(0,n.jsx)("div",{children:e.name!==d?(0,n.jsx)(p,{link:e}):(0,n.jsx)(a.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:d})},e.name)}));return(0,n.jsx)(i.Z,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}({separator:(0,n.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},l,{children:o?h:f}))}function p(e){var r=e.link,t=r.href,a=void 0===t?"":t,i=r.name,c=r.icon;return(0,n.jsx)(o.default,{href:a,passHref:!0,children:(0,n.jsxs)(l.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,n.jsx)(s.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),i]},i)})}},72728:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var n=t(85893),o=t(47037),a=t.n(o),i=t(99226),s=t(15861),l=t(50122),c=t(22284);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function h(e){var r=e.links,t=e.action,o=e.heading,u=e.moreLink,h=void 0===u?[]:u,f=e.sx,m=p(e,["links","action","heading","moreLink","sx"]);return(0,n.jsxs)(i.Z,{sx:d({mb:5},f),children:[(0,n.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(i.Z,{sx:{flexGrow:1},children:[(0,n.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:o}),(0,n.jsx)(c.Z,d({links:r},m))]}),t&&(0,n.jsx)(i.Z,{sx:{flexShrink:0},children:t})]}),(0,n.jsx)(i.Z,{sx:{mt:2},children:a()(h)?(0,n.jsx)(l.Z,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return(0,n.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},12164:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}});var n=t(85893),o=t(11496),a=t(99226),i=t(27948),s=t(26447),l=t(12963),c=t(50122),u=t(15861),d=t(96259),p=t(64156),h=t(61582),f=t(3140),m=t(22284),x=t(72728),b=t(56691),g=(0,o.ZP)("div")((function(e){var r=e.theme;return{paddingTop:r.spacing(11),paddingBottom:r.spacing(15)}}));function y(){return(0,n.jsx)(h.Z,{title:"Components: Breadcrumbs",children:(0,n.jsxs)(g,{children:[(0,n.jsx)(a.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,n.jsx)(i.Z,{children:(0,n.jsx)(x.Z,{heading:"Breadcrumbs",links:[{name:"Components",href:d.ko.components},{name:"Breadcrumbs"}],moreLink:"https://mui.com/components/breadcrumbs"})})}),(0,n.jsx)(i.Z,{children:(0,n.jsxs)(s.Z,{spacing:3,children:[(0,n.jsx)(b.g,{title:"Text",sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(c.Z,{color:"inherit",href:"#",children:"Material-UI"}),(0,n.jsx)(c.Z,{color:"inherit",href:"#",children:"Core"}),(0,n.jsx)(u.Z,{sx:{color:"text.primary"},children:"Breadcrumb"})]})}),(0,n.jsx)(b.g,{title:"With Icon",sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(c.Z,{color:"inherit",href:"#",sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(f.Z,{icon:"eva:home-fill",sx:{mr:.5,width:20,height:20}}),"Material-UI"]}),(0,n.jsxs)(c.Z,{color:"inherit",href:"#",sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(f.Z,{icon:"eva:camera-fill",sx:{mr:.5,width:20,height:20}}),"Core"]}),(0,n.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",color:"text.primary"},children:[(0,n.jsx)(f.Z,{icon:"eva:bell-fill",sx:{mr:.5,width:20,height:20}}),"Breadcrumb"]})]})}),(0,n.jsx)(b.g,{title:"Customized",sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)(m.Z,{links:[{name:"Home",href:"#",icon:(0,n.jsx)(f.Z,{icon:"eva:home-fill"})},{name:"Link1",href:"#",icon:(0,n.jsx)(f.Z,{icon:"eva:cube-outline"})},{name:"Link2",href:"#",icon:(0,n.jsx)(f.Z,{icon:"eva:cube-outline"})},{name:"Link3",href:"#",icon:(0,n.jsx)(f.Z,{icon:"eva:cube-outline"})},{name:"Link4",href:"#",icon:(0,n.jsx)(f.Z,{icon:"eva:cube-outline"})},{name:"Link5",href:"#",icon:(0,n.jsx)(f.Z,{icon:"eva:cube-outline"})}]})})]})})]})})}y.getLayout=function(e){return(0,n.jsx)(p.Z,{variant:"main",children:e})}},56691:function(e,r,t){"use strict";t.d(r,{g:function(){return d},_:function(){return p}});var n=t(85893),o=t(41796),a=t(55113),i=t(78445),s=t(99226),l=t(15861);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}function d(e){var r=e.title,t=e.sx,l=e.children;return(0,n.jsxs)(a.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,o.Fq)(e.palette.grey[500],.04)}},children:[r&&(0,n.jsx)(i.Z,{title:r}),(0,n.jsx)(s.Z,{sx:u({p:5,minHeight:180},t),children:l})]})}function p(e){var r=e.title;return(0,n.jsx)(l.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:r})}}},function(e){e.O(0,[6586,9910,1631,3907,1993,4156,9774,2888,6377],(function(){return r=9698,e(e.s=r);var r}));var r=e.O();_N_E=r}]);