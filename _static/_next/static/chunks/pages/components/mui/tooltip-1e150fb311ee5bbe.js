(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4039],{78445:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(63366),i=n(87462),o=n(67294),l=n(86010),s=n(27192),a=n(15861),c=n(33616),d=n(11496),h=n(28979);function u(e){return(0,h.Z)("MuiCardHeader",e)}var x=(0,n(76087).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),p=n(85893);const f=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,i.Z)({[`& .${x.title}`]:t.title,[`& .${x.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),j=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Z=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"});var b=o.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:d,className:h,component:x="div",disableTypography:b=!1,subheader:y,subheaderTypographyProps:v,title:w,titleTypographyProps:O}=n,E=(0,r.Z)(n,f),P=(0,i.Z)({},n,{component:x,disableTypography:b}),k=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,t)})(P);let A=w;null==A||A.type===a.Z||b||(A=(0,p.jsx)(a.Z,(0,i.Z)({variant:d?"body2":"h5",className:k.title,component:"span",display:"block"},O,{children:A})));let T=y;return null==T||T.type===a.Z||b||(T=(0,p.jsx)(a.Z,(0,i.Z)({variant:d?"body2":"body1",className:k.subheader,color:"text.secondary",component:"span",display:"block"},v,{children:T}))),(0,p.jsxs)(m,(0,i.Z)({className:(0,l.Z)(k.root,h),as:x,ref:t,ownerState:P},E,{children:[d&&(0,p.jsx)(j,{className:k.avatar,ownerState:P,children:d}),(0,p.jsxs)(g,{className:k.content,ownerState:P,children:[A,T]}),o&&(0,p.jsx)(Z,{className:k.action,ownerState:P,children:o})]}))}))},6585:function(e,t,n){"use strict";var r=n(87462),i=n(63366),o=n(67294),l=n(98885),s=n(2734),a=n(30577),c=n(51705),d=n(85893);const h=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],u={entering:{transform:"none"},entered:{transform:"none"}},x=o.forwardRef((function(e,t){const n=(0,s.Z)(),x={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:p,appear:f=!0,children:m,easing:j,in:Z,onEnter:g,onEntered:b,onEntering:y,onExit:v,onExited:w,onExiting:O,style:E,timeout:P=x,TransitionComponent:k=l.ZP}=e,A=(0,i.Z)(e,h),T=o.useRef(null),S=(0,c.Z)(m.ref,t),C=(0,c.Z)(T,S),N=e=>t=>{if(e){const n=T.current;void 0===t?e(n):e(n,t)}},_=N(y),R=N(((e,t)=>{(0,a.n)(e);const r=(0,a.C)({style:E,timeout:P,easing:j},{mode:"enter"});e.style.webkitTransition=n.transitions.create("transform",r),e.style.transition=n.transitions.create("transform",r),g&&g(e,t)})),H=N(b),L=N(O),W=N((e=>{const t=(0,a.C)({style:E,timeout:P,easing:j},{mode:"exit"});e.style.webkitTransition=n.transitions.create("transform",t),e.style.transition=n.transitions.create("transform",t),v&&v(e)})),M=N(w);return(0,d.jsx)(k,(0,r.Z)({appear:f,in:Z,nodeRef:T,onEnter:R,onEntered:H,onEntering:_,onExit:W,onExited:M,onExiting:L,addEndListener:e=>{p&&p(T.current,e)},timeout:P},A,{children:(e,t)=>o.cloneElement(m,(0,r.Z)({style:(0,r.Z)({transform:"scale(0)",visibility:"exited"!==e||Z?void 0:"hidden"},u[e],E,m.props.style),ref:C},t))}))}));t.Z=x},41213:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mui/tooltip",function(){return n(48856)}])},22284:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(85893),i=n(41664),o=n(15861),l=n(12963),s=n(99226),a=n(50122);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function h(e){var t=e.links,n=e.activeLast,i=void 0!==n&&n,a=d(e,["links","activeLast"]),h=t[t.length-1].name,x=t.map((function(e){return(0,r.jsx)(u,{link:e},e.name)})),p=t.map((function(e){return(0,r.jsx)("div",{children:e.name!==h?(0,r.jsx)(u,{link:e}):(0,r.jsx)(o.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:h})},e.name)}));return(0,r.jsx)(l.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({separator:(0,r.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a,{children:i?x:p}))}function u(e){var t=e.link,n=t.href,o=void 0===n?"":n,l=t.name,c=t.icon;return(0,r.jsx)(i.default,{href:o,passHref:!0,children:(0,r.jsxs)(a.Z,{variant:"body2",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&(0,r.jsx)(s.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),l]},l)})}},72728:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(85893),i=n(47037),o=n.n(i),l=n(99226),s=n(15861),a=n(50122),c=n(22284);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function x(e){var t=e.links,n=e.action,i=e.heading,d=e.moreLink,x=void 0===d?[]:d,p=e.sx,f=u(e,["links","action","heading","moreLink","sx"]);return(0,r.jsxs)(l.Z,{sx:h({mb:5},p),children:[(0,r.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,r.jsxs)(l.Z,{sx:{flexGrow:1},children:[(0,r.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:i}),(0,r.jsx)(c.Z,h({links:t},f))]}),n&&(0,r.jsx)(l.Z,{sx:{flexShrink:0},children:n})]}),(0,r.jsx)(l.Z,{sx:{mt:2},children:o()(x)?(0,r.jsx)(a.Z,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return(0,r.jsx)(a.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},48856:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(85893),i=n(78672),o=n(11496),l=n(99226),s=n(27948),a=n(34386),c=n(93946),d=n(58032),h=n(11057),u=n(16628),x=n(6585),p=n(96259),f=n(64156),m=n(61582),j=n(3140),Z=n(50067),g=n(72728),b=n(56691),y="\nAliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.\nPraesent non nunc mollis, fermentum neque at, semper arcu.\nNullam eget est sed sem iaculis gravida eget vitae justo.\n",v=(0,o.ZP)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),w={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function O(){return(0,r.jsx)(m.Z,{title:"Components: Tooltip",children:(0,r.jsxs)(v,{children:[(0,r.jsx)(l.Z,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(g.Z,{heading:"Tooltip",links:[{name:"Components",href:p.ko.components},{name:"Tooltip"}],moreLink:"https://mui.com/components/tooltips"})})}),(0,r.jsx)(s.Z,{children:(0,r.jsxs)(i.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,r.jsxs)(b.g,{title:"Simple",sx:w,children:[(0,r.jsx)(a.Z,{title:"Delete",children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(j.Z,{icon:"eva:trash-2-outline",width:24,height:24})})}),(0,r.jsx)(a.Z,{title:"Add",children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(j.Z,{icon:"eva:plus-fill",width:24,height:24})})}),(0,r.jsx)(a.Z,{title:"Delete",children:(0,r.jsx)(c.Z,{color:"info",children:(0,r.jsx)(j.Z,{icon:"eva:trash-2-outline",width:24,height:24})})}),(0,r.jsx)(a.Z,{title:"Add",children:(0,r.jsx)(Z.Y$,{color:"info",children:(0,r.jsx)(j.Z,{icon:"eva:plus-fill",width:24,height:24})})}),(0,r.jsx)(a.Z,{title:"Add",children:(0,r.jsx)(h.Z,{variant:"outlined",color:"info",children:"Button"})})]}),(0,r.jsx)(b.g,{title:"Arrow",sx:w,children:(0,r.jsx)(a.Z,{title:"Add",arrow:!0,children:(0,r.jsx)(d.Z,{children:(0,r.jsx)(j.Z,{icon:"eva:plus-fill",width:24,height:24})})})}),(0,r.jsxs)(b.g,{title:"Variable Width",sx:w,children:[(0,r.jsx)(a.Z,{title:y,children:(0,r.jsx)(h.Z,{color:"inherit",children:"Default Width [300px]"})}),(0,r.jsx)(a.Z,{title:y,sx:{maxWidth:500},children:(0,r.jsx)(h.Z,{color:"inherit",children:"Custom Width [500px]"})}),(0,r.jsx)(a.Z,{title:y,sx:{maxWidth:"none"},children:(0,r.jsx)(h.Z,{color:"inherit",children:"No wrapping"})})]}),(0,r.jsxs)(b.g,{title:"Transitions",sx:w,children:[(0,r.jsx)(a.Z,{title:"Add",children:(0,r.jsx)(h.Z,{color:"inherit",children:"Grow"})}),(0,r.jsx)(a.Z,{TransitionComponent:u.Z,TransitionProps:{timeout:600},title:"Add",children:(0,r.jsx)(h.Z,{color:"inherit",children:"Fade"})}),(0,r.jsx)(a.Z,{TransitionComponent:x.Z,title:"Add",children:(0,r.jsx)(h.Z,{color:"inherit",children:"Zoom"})})]}),(0,r.jsxs)(b.g,{title:"Positioned",sx:w,children:[(0,r.jsx)(a.Z,{title:"Add",placement:"top-start",children:(0,r.jsx)(h.Z,{color:"inherit",children:"top-start"})}),(0,r.jsx)(a.Z,{title:"Add",placement:"top",children:(0,r.jsx)(h.Z,{color:"inherit",children:"top"})}),(0,r.jsx)(a.Z,{title:"Add",placement:"top-end",children:(0,r.jsx)(h.Z,{color:"inherit",children:"top-end"})}),(0,r.jsx)(a.Z,{title:"Add",placement:"left-start",children:(0,r.jsx)(h.Z,{color:"inherit",children:"left-start"})}),(0,r.jsx)(a.Z,{title:"Add",placement:"left",children:(0,r.jsx)(h.Z,{color:"inherit",children:"left"})}),(0,r.jsx)(a.Z,{title:"Add",placement:"left-end",children:(0,r.jsx)(h.Z,{color:"inherit",children:"left-end"})}),(0,r.jsx)(a.Z,{title:"Add",placement:"right-start",children:(0,r.jsx)(h.Z,{color:"inherit",children:"right-start"})}),(0,r.jsx)(a.Z,{title:"Add",placement:"right",children:(0,r.jsx)(h.Z,{color:"inherit",children:"right"})}),(0,r.jsx)(a.Z,{title:"Add",placement:"right-end",children:(0,r.jsx)(h.Z,{color:"inherit",children:"right-end"})}),(0,r.jsx)(a.Z,{title:"Add",placement:"bottom-start",children:(0,r.jsx)(h.Z,{color:"inherit",children:"bottom-start"})}),(0,r.jsx)(a.Z,{title:"Add",placement:"bottom",children:(0,r.jsx)(h.Z,{color:"inherit",children:"bottom"})}),(0,r.jsx)(a.Z,{title:"Add",placement:"bottom-end",children:(0,r.jsx)(h.Z,{color:"inherit",children:"bottom-end"})})]})]})})]})})}O.getLayout=function(e){return(0,r.jsx)(f.Z,{variant:"main",children:e})}},56691:function(e,t,n){"use strict";n.d(t,{g:function(){return h},_:function(){return u}});var r=n(85893),i=n(41796),o=n(55113),l=n(78445),s=n(99226),a=n(15861);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function h(e){var t=e.title,n=e.sx,a=e.children;return(0,r.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,r.jsx)(l.Z,{title:t}),(0,r.jsx)(s.Z,{sx:d({p:5,minHeight:180},n),children:a})]})}function u(e){var t=e.title;return(0,r.jsx)(a.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}}},function(e){e.O(0,[6586,9910,1631,4525,3907,1993,4156,9774,2888,6377],(function(){return t=41213,e(e.s=t);var t}));var t=e.O();_N_E=t}]);