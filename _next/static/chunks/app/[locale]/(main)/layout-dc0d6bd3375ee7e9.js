(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5210],{48177:function(e,t,s){Promise.resolve().then(s.bind(s,15281)),Promise.resolve().then(s.bind(s,11121)),Promise.resolve().then(s.bind(s,66437)),Promise.resolve().then(s.bind(s,60414)),Promise.resolve().then(s.t.bind(s,86148,23)),Promise.resolve().then(s.bind(s,59414))},11121:function(e,t,s){"use strict";s.r(t);var a=s(57437),r=s(72368),n=s(66204),l=s(8792),i=s(2265);let o={services:[{name:"Undress AI",href:"/undress"},{name:"Undress Male",href:"/undress-man"},{name:"FaceSwap",href:"/faceswap"},{name:"Create",href:"/create"},{name:"Animeify",href:"/animeify"}],supportOptions:[{name:"Customer Support: support@undressai.tools",href:"#"},{name:"Join affiliate program",href:"https://undressai.tools/guides/affiliate-program"}],learn:[{name:"nudify online",href:"https://undressai.tools/guides/nudify-online/"},{name:"AI nude generator",href:"https://undressai.tools/guides/ai-nude-generator/"},{name:"undressai",href:"https://undressai.tools/guides/undressai/"},{name:"undress ia",href:"https://undressai.tools/guides/undress-ia/"},{name:"sexy undress",href:"https://undressai.tools/guides/sexy-undress/"},{name:"clothoff io",href:"https://undressai.tools/guides/clothoff-io/"},{name:"undress ai",href:"https://undressai.tools/guides/undress-ai/"},{name:"deepnude ai",href:"https://undressai.tools/guides/deepnude-ai/"},{name:"ai nudify generator",href:"https://undressai.tools/guides/ai-nudify-generator/"},{name:"ai cloth remover nsfw",href:"https://undressai.tools/guides/ai-cloth-remover-nsfw/"}],legal:[{name:"Terms of Service",href:"/terms-of-service"},{name:"Privacy Policy",href:"/privacy-policy"},{name:"Acceptable Use Policy",href:"/acceptable-use-policy"}]};t.default=()=>{let e=(0,i.useCallback)(e=>{let{title:t,items:s,localized:r}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-small font-semibold text-default-600",children:t}),(0,a.jsx)("ul",{className:"mt-6 space-y-1",children:s.map(e=>(0,a.jsx)("li",{children:r?(0,a.jsx)(n.rU,{className:"text-default-400",href:e.href,children:e.name}):(0,a.jsx)(l.default,{className:"text-default-400",href:e.href,children:e.name})},e.name))})]})},[]),t=(0,n.jD)();return(0,a.jsx)("footer",{className:"flex w-full flex-col",children:(0,a.jsxs)("div",{className:"mx-auto max-w-screen-xl px-4 pb-8 pt-4 sm:px-8 sm:pt-20",children:["/"===t&&(0,a.jsx)("div",{className:"mb-20 xl:grid xl:grid-cols-3 xl:gap-8",children:(0,a.jsxs)("div",{className:"mt-4 grid grid-cols-2 gap-8 sm:mt-16 xl:col-span-2 xl:mt-0",children:[(0,a.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[(0,a.jsx)("div",{children:e({title:"Services",items:o.services,localized:!0})}),(0,a.jsx)("div",{className:"mt-10 md:mt-0",children:e({title:"Support and Help",items:o.supportOptions,localized:!1})})]}),(0,a.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-8",children:[(0,a.jsx)("div",{children:e({title:"Learn",items:o.learn,localized:!1})}),(0,a.jsx)("div",{className:"mt-10 md:mt-0",children:e({title:"Information",items:o.legal,localized:!1})})]})]})}),(0,a.jsxs)("div",{className:"flex flex-wrap-reverse items-center justify-center gap-2 pt-8",children:[(0,a.jsx)("p",{className:"text-nowrap text-small text-default-400 ",children:"\xa9 2024 UndressAI Tools. All rights reserved."}),(0,a.jsx)(r.default,{})," "]})]})})}},66437:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ei}});var a=s(57437),r=s(75527),[n,l]=(0,s(82901).k)({name:"NavbarContext",strict:!0,errorMessage:"useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"}),i={enter:{height:"calc(100vh - var(--navbar-height) - 1px)",transition:{duration:.3,easings:"easeOut"}},exit:{height:0,transition:{duration:.25,easings:"easeIn"}}},o=s(84291),d=s(73908),c=s(5142),u=s(34808),m=s(40744),f=s(72068),h=s(22143),x=s(2265),p=s(62356),g=s(94772),v=(0,o.Gp)((e,t)=>{var s,r;let{className:n,children:o,portalContainer:v,motionProps:b,style:y,...j}=e,N=(0,d.gy)(t),{slots:w,isMenuOpen:E,height:P,disableAnimation:C,classNames:_}=l(),k=(0,c.W)(null==_?void 0:_.menu,n),I=(0,x.useCallback)(e=>{let{children:t}=e;return(0,a.jsx)(p.Z,{forwardProps:!0,enabled:E,removeScrollBar:!1,children:t})},[E]),G=C?(0,a.jsx)(I,{children:(0,a.jsx)("ul",{ref:N,className:null==(s=w.menu)?void 0:s.call(w,{class:k}),"data-open":(0,u.PB)(E),style:{"--navbar-height":P},...j,children:o})}):(0,a.jsx)(m.M,{mode:"wait",children:E?(0,a.jsx)(I,{children:(0,a.jsx)(f.E.ul,{ref:N,layoutScroll:!0,animate:"enter",className:null==(r=w.menu)?void 0:r.call(w,{class:k}),"data-open":(0,u.PB)(E),exit:"exit",initial:"exit",style:{"--navbar-height":P,...y},variants:i,...(0,h.dG)(b,j),children:o})}):null});return(0,a.jsx)(g.aV,{portalContainer:v,children:G})});v.displayName="NextUI.NavbarMenu";var b=s(60431),y={visible:{y:0,transition:{ease:b.Lj.easeOut}},hidden:{y:"-100%",transition:{ease:b.Lj.easeIn}}},j=s(8368),N=s(41244),w=(0,j.tv)({slots:{base:["flex","z-40","w-full","h-auto","items-center","justify-center","data-[menu-open=true]:border-none"],wrapper:["z-40","flex","px-6","gap-4","w-full","flex-row","relative","flex-nowrap","items-center","justify-between","h-[var(--navbar-height)]"],toggle:["group","flex","items-center","justify-center","w-6","h-full","outline-none","rounded-small","tap-highlight-transparent",...N.Dh],srOnly:["sr-only"],toggleIcon:["w-full","h-full","pointer-events-none","flex","flex-col","items-center","justify-center","text-inherit","group-data-[pressed=true]:opacity-70","transition-opacity","before:content-['']","before:block","before:h-px","before:w-6","before:bg-current","before:transition-transform","before:duration-150","before:-translate-y-1","before:rotate-0","group-data-[open=true]:before:translate-y-px","group-data-[open=true]:before:rotate-45","after:content-['']","after:block","after:h-px","after:w-6","after:bg-current","after:transition-transform","after:duration-150","after:translate-y-1","after:rotate-0","group-data-[open=true]:after:translate-y-0","group-data-[open=true]:after:-rotate-45"],brand:["flex","basis-0","flex-row","flex-grow","flex-nowrap","justify-start","bg-transparent","items-center","no-underline","text-medium","whitespace-nowrap","box-border"],content:["flex","gap-4","h-full","flex-row","flex-nowrap","items-center","data-[justify=start]:justify-start","data-[justify=start]:flex-grow","data-[justify=start]:basis-0","data-[justify=center]:justify-center","data-[justify=end]:justify-end","data-[justify=end]:flex-grow","data-[justify=end]:basis-0"],item:["text-medium","whitespace-nowrap","box-border","list-none","data-[active=true]:font-semibold"],menu:["z-30","px-6","pt-2","fixed","flex","max-w-full","top-[var(--navbar-height)]","inset-x-0","bottom-0","w-screen","flex-col","gap-2","overflow-y-auto"],menuItem:["text-large","data-[active=true]:font-semibold"]},variants:{position:{static:{base:"static"},sticky:{base:"sticky top-0 inset-x-0"}},maxWidth:{sm:{wrapper:"max-w-[640px]"},md:{wrapper:"max-w-[768px]"},lg:{wrapper:"max-w-[1024px]"},xl:{wrapper:"max-w-[1280px]"},"2xl":{wrapper:"max-w-[1536px]"},full:{wrapper:"max-w-full"}},hideOnScroll:{true:{base:["sticky","top-0","inset-x-0"]}},isBordered:{true:{base:["border-b","border-divider"]}},isBlurred:{false:{base:"bg-background",menu:"bg-background"},true:{base:["backdrop-blur-lg","data-[menu-open=true]:backdrop-blur-xl","backdrop-saturate-150","bg-background/70"],menu:["backdrop-blur-xl","backdrop-saturate-150","bg-background/70"]}},disableAnimation:{true:{menu:["hidden","h-[calc(100dvh_-_var(--navbar-height)_-_1px)]","data-[open=true]:flex"]}}},defaultVariants:{maxWidth:"lg",position:"sticky",isBlurred:!0}}),E="undefined"!=typeof window;function P(e){return E?e?{x:e.scrollLeft,y:e.scrollTop}:{x:window.scrollX,y:window.scrollY}:{x:0,y:0}}var C=e=>{let{elementRef:t,delay:s=30,callback:a,isEnabled:r}=e,n=(0,x.useRef)(r?P(null==t?void 0:t.current):{x:0,y:0}),l=null,i=()=>{let e=P(null==t?void 0:t.current);"function"==typeof a&&a({prevPos:n.current,currPos:e}),n.current=e,l=null};return(0,x.useEffect)(()=>{if(!r)return;let e=()=>{s?null===l&&(l=setTimeout(i,s)):i()},a=(null==t?void 0:t.current)||window;return a.addEventListener("scroll",e),()=>a.removeEventListener("scroll",e)},[null==t?void 0:t.current,s,r]),n.current},_=s(90365),k=s(91330),I=(0,s(69772).v)((0,k.N)()),G=(e,t)=>{var s;let a=[];return[null==(s=I.Children.map(e,e=>(0,I.isValidElement)(e)&&e.type===t?(a.push(e),null):e))?void 0:s.filter(Boolean),a.length>=0?a:void 0]},M=(0,o.Gp)((e,t)=>{let{children:s,...r}=e,l=function(e){var t;let[s,a]=(0,o.oe)(e,w.variantKeys),{ref:r,as:n,parentRef:l,height:i="4rem",shouldHideOnScroll:m=!1,disableScrollHandler:f=!1,onScrollPositionChange:p,isMenuOpen:g,isMenuDefaultOpen:v,onMenuOpenChange:b=()=>{},motionProps:y,className:j,classNames:N,...E}=s,P=(0,d.gy)(r),k=(0,x.useRef)(0),I=(0,x.useRef)(0),[G,M]=(0,x.useState)(!1),S=(0,x.useCallback)(e=>{b(e||!1)},[b]),[T,B]=(0,_.zk)(g,v,S),U=()=>{if(P.current){let e=P.current.offsetWidth;e!==k.current&&(k.current=e)}};(0,h.yU)({ref:P,onResize:()=>{var e;(null==(e=P.current)?void 0:e.offsetWidth)!==k.current&&(U(),B(!1))}}),(0,x.useEffect)(()=>{var e;U(),I.current=(null==(e=P.current)?void 0:e.offsetHeight)||0},[]);let R=(0,x.useMemo)(()=>w({...a,hideOnScroll:m}),[...Object.values(a),m]),A=(0,c.W)(null==N?void 0:N.base,j);return C({elementRef:l,isEnabled:m||!f,callback:e=>{let{prevPos:t,currPos:s}=e;null==p||p(s.y),m&&M(e=>{let a=s.y>t.y&&s.y>I.current;return a!==e?a:e})}}),{Component:n||"nav",slots:R,domRef:P,height:i,isHidden:G,disableAnimation:null!=(t=e.disableAnimation)&&t,shouldHideOnScroll:m,isMenuOpen:T,classNames:N,setIsMenuOpen:B,motionProps:y,getBaseProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...(0,h.dG)(E,e),"data-hidden":(0,u.PB)(G),"data-menu-open":(0,u.PB)(T),ref:P,className:R.base({class:(0,c.W)(A,null==e?void 0:e.className)}),style:{"--navbar-height":i,...null==E?void 0:E.style,...null==e?void 0:e.style}}},getWrapperProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,"data-menu-open":(0,u.PB)(T),className:R.wrapper({class:(0,c.W)(null==N?void 0:N.wrapper,null==e?void 0:e.className)})}}}}({...r,ref:t}),i=l.Component,[m,p]=G(s,v),g=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("header",{...l.getWrapperProps(),children:m}),p]});return(0,a.jsx)(n,{value:l,children:l.shouldHideOnScroll?(0,a.jsx)(f.E.nav,{animate:l.isHidden?"hidden":"visible",initial:!1,variants:y,...(0,h.dG)(l.getBaseProps(),l.motionProps),children:g}):(0,a.jsx)(i,{...l.getBaseProps(),children:g})})});M.displayName="NextUI.Navbar";var S=(0,o.Gp)((e,t)=>{var s;let{as:r,className:n,children:i,justify:o="start",...u}=e,m=(0,d.gy)(t),{slots:f,classNames:h}=l(),x=(0,c.W)(null==h?void 0:h.content,n);return(0,a.jsx)(r||"ul",{ref:m,className:null==(s=f.content)?void 0:s.call(f,{class:x}),"data-justify":o,...u,children:i})});S.displayName="NextUI.NavbarContent";var T=(0,o.Gp)((e,t)=>{var s;let{as:r,className:n,children:i,...o}=e,u=(0,d.gy)(t),{slots:m,classNames:f}=l(),h=(0,c.W)(null==f?void 0:f.brand,n);return(0,a.jsx)(r||"div",{ref:u,className:null==(s=m.brand)?void 0:s.call(m,{class:h}),...o,children:i})});T.displayName="NextUI.NavbarBrand";var B=(0,o.Gp)((e,t)=>{var s;let{as:r,className:n,children:i,isActive:o,...m}=e,f=(0,d.gy)(t),{slots:h,classNames:x}=l(),p=(0,c.W)(null==x?void 0:x.item,n);return(0,a.jsx)(r||"li",{ref:f,className:null==(s=h.item)?void 0:s.call(h,{class:p}),"data-active":(0,u.PB)(o),...m,children:i})});B.displayName="NextUI.NavbarItem";var U=s(26411),R=s(15132),A=s(38260),O=s(11246),L=(0,o.Gp)((e,t)=>{var s;let{as:r,icon:n,className:i,onChange:o,autoFocus:m,srOnlyText:f,...p}=e,g=(0,d.gy)(t),{slots:v,classNames:b,isMenuOpen:y,setIsMenuOpen:j}=l(),N=(0,R.l)({...p,isSelected:y,onChange:e=>{null==o||o(e),j(e)}}),{buttonProps:w,isPressed:E}=function(e,t,s){let{isSelected:a}=t,{isPressed:r,buttonProps:n}=(0,U.j)({...e,onPress:(0,h.tS)(t.toggle,e.onPress)},s);return{isPressed:r,buttonProps:(0,h.dG)(n,{"aria-pressed":a})}}(e,N,g),{isFocusVisible:P,focusProps:C}=(0,A.Fx)({autoFocus:m}),{isHovered:_,hoverProps:k}=(0,O.XI)({}),I=(0,c.W)(null==b?void 0:b.toggle,i),G=(0,x.useMemo)(()=>"function"==typeof n?n(null!=y&&y):n||(0,a.jsx)("span",{className:v.toggleIcon({class:null==b?void 0:b.toggleIcon})}),[n,y,v.toggleIcon,null==b?void 0:b.toggleIcon]),M=(0,x.useMemo)(()=>f||(N.isSelected?"close navigation menu":"open navigation menu"),[f,y]);return(0,a.jsxs)(r||"button",{ref:g,className:null==(s=v.toggle)?void 0:s.call(v,{class:I}),"data-focus-visible":(0,u.PB)(P),"data-hover":(0,u.PB)(_),"data-open":(0,u.PB)(y),"data-pressed":(0,u.PB)(E),...(0,h.dG)(w,C,k,p),children:[(0,a.jsx)("span",{className:v.srOnly(),children:M}),G]})});L.displayName="NextUI.NavbarMenuToggle";var D=s(14178),$=s(81527),z=s(22561),W=s(7725),F=s(2646),H=s(16480),K=s.n(H),V=s(93902),Z=s(66204),J=s(71399),Y=e=>{let{className:t}=e,{refreshGemData:s,privilege:r}=(0,V.ZP)(),{gemData:n}=(0,V.FD)(),l=()=>{let e=new Date,t=e.getMonth();return Math.floor((new Date(e.getFullYear(),t+1,1).valueOf()-e.valueOf())/864e5)},[i,o]=(0,x.useState)(0);return(0,x.useEffect)(()=>{o(l())},[]),(0,a.jsx)("div",{className:K()("flex flex-row items-end justify-between text-xs font-bold lg:text-base",t),children:(0,a.jsx)("div",{className:"flex flex-row gap-4 ",children:(0,a.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[(0,a.jsx)("img",{className:"h-6 w-6",alt:r.level_name,src:"/gemicon/".concat(r.level_name,".png")}),(0,a.jsx)("div",{className:"text-center text-sm font-semibold text-gray-200",children:n.PG_GEM_PERMANENT+n.PG_GEM_EPHEMERAL>999999?(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[(0,a.jsx)("span",{className:"pr-1 text-2xl",children:"≈"})," Infinite"]}):n.PG_GEM_PERMANENT+n.PG_GEM_EPHEMERAL}),(0,a.jsx)(Z.rU,{href:"/pricing",children:(0,a.jsx)(J.EIY,{className:"h-5 w-5 text-theme"})})]})})})},X=e=>(0,a.jsx)("div",{...e,children:(0,a.jsx)(Z.rU,{href:"/profile",children:(0,a.jsx)(J.wzp,{className:"h-5 w-5 text-gray-100",width:32,height:32})})}),q=s(15281),Q=s(66296),ee=s(30982),et=e=>{let{}=e,t=(0,ee.useTranslations)("home"),s=(0,q.useSetSinginModal)(),{userInfo:r}=(0,q.useUserInfo)();return(console.log("userinfo",r),null==r?void 0:r.isLogin)?(0,a.jsx)("div",{className:"flex items-center justify-center"}):(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)(Q.A,{color:"primary",size:"sm",radius:"sm",className:"text-md bg-gray-100 text-gray-800",onPress:()=>s("sign-up",!0),children:t("Login/Signup")})})},es=s(98955),ea=(0,o.Gp)((e,t)=>{var s;let{className:r,children:n,isActive:i,...o}=e,m=(0,d.gy)(t),{slots:f,isMenuOpen:h,classNames:x}=l(),p=(0,c.W)(null==x?void 0:x.menuItem,r);return(0,a.jsx)("li",{ref:m,className:null==(s=f.menuItem)?void 0:s.call(f,{class:p}),"data-active":(0,u.PB)(i),"data-open":(0,u.PB)(h),...o,children:n})});ea.displayName="NextUI.NavbarMenuItem";var er=s(32117);let en=[{name:"Undress",href:"/undress",disable:!1},{name:"Undress Video",href:"/undress-video",disable:!1},{name:"UndressMan",href:"/undress-man",disable:!1},{name:"FaceSwap",href:"/faceswap",disable:!1},{name:"Animeify",href:"/animeify",disable:!1},{name:"Pricing",href:"/pricing",disable:!1}];var el=e=>{let{isMobile:t=!0}=e,s=(0,ee.useTranslations)("navbar");return t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(()=>en.map(e=>e.disable?null:(0,a.jsx)(ea,{className:"mt-1 flex items-center justify-center",children:(0,a.jsx)(er.O,{href:e.href,size:"lg",color:"foreground",children:(0,a.jsx)("a",{className:"p-2 text-2xl font-bold",children:s(e.name)})})},e.href)),{}),(0,a.jsx)(et,{})]}):null},ei=e=>{let{className:t}=e,[s,n]=(0,x.useState)(!1),{userInfo:l}=(0,q.useUserInfo)(),i=!!(null==l?void 0:l.isLogin),{isOpen:o,onOpen:d,onOpenChange:c}=(0,r.q)(),u=(0,ee.useTranslations)("navbar");return(0,a.jsxs)("div",{className:K()("flex flex-row items-center","h-18",t),children:[(0,a.jsxs)(M,{onMenuOpenChange:n,maxWidth:"xl",classNames:{base:" text-white",content:"",menu:"",menuItem:"text-right"},isBordered:!0,children:[(0,a.jsx)(S,{children:(0,a.jsx)(T,{children:(0,a.jsxs)(Z.rU,{href:"/",color:"foreground",className:"text-md font-bold md:text-2xl",children:[(0,a.jsx)("span",{className:"pr-1 text-gray-100",children:"UndressAI"}),(0,a.jsx)("span",{className:"rounded-lg bg-theme p-1 text-gray-900",children:"Tools"})]})})}),(0,a.jsx)(S,{className:"hidden md:flex",justify:"center",children:(0,a.jsx)("div",{className:" flex h-[40px] flex-row items-center justify-center gap-4 px-6 py-1 text-white ",children:en.map(e=>e.disable?null:(0,a.jsx)(Z.rU,{href:e.href,className:"text-md flex w-full items-center justify-center text-gray-100",children:(0,a.jsx)("div",{className:"z-50 font-medium",children:u(e.name)})},e.name))})}),(0,a.jsxs)(S,{justify:"end",className:"flex ",children:[i&&(0,a.jsx)(B,{className:"",children:(0,a.jsx)(X,{className:"flex items-center justify-center"})}),i&&(0,a.jsx)(B,{className:"",children:(0,a.jsx)(Y,{className:""})}),(0,a.jsx)(B,{className:"",children:(0,a.jsx)(et,{})})]}),(0,a.jsx)(L,{"aria-label":"mobile",className:"md:hidden"}),(0,a.jsx)(v,{children:(0,a.jsx)(el,{})})]}),!es.Z.get("18+")&&(0,a.jsx)(D.R,{isOpen:!0,defaultOpen:!0,onOpenChange:c,isDismissable:!1,placement:"center",hideCloseButton:!0,size:"xl",children:(0,a.jsx)($.A,{className:"border-[2px] border-solid border-[#ffffff39]",children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(z.k,{className:"flex flex-col gap-1",children:(0,a.jsx)("div",{children:u("Are you 18+?")})}),(0,a.jsx)(W.I,{children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:u.raw("Are you 18+? Yes")}})}),(0,a.jsx)(F.R,{children:(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:()=>{try{es.Z.set("18+","accept",{expires:365}),e()}catch(e){console.log(e)}},className:"min-w-[100px] rounded-md bg-theme px-3 py-2 text-black",children:u("Yes")})})})]})})})]})}},72368:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var a=s(57437),r=s(66204),n=s(25995),l=s(14078),i=()=>(0,a.jsxs)("svg",{"aria-hidden":"true",fill:"none",height:"80%",role:"presentation",viewBox:"0 0 24 24",width:"80%",children:[(0,a.jsx)("path",{d:"M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",fill:"currentColor"})]}),[o,d]=(0,s(82901).k)({name:"AvatarGroupContext",strict:!1}),c=s(59076),u=s(8368),m=s(41244),f=(0,u.tv)({slots:{base:["flex","relative","justify-center","items-center","box-border","overflow-hidden","align-middle","text-white","z-0",...m.Dh],img:["flex","object-cover","w-full","h-full","transition-opacity","!duration-500","opacity-0","data-[loaded=true]:opacity-100"],fallback:[...m.z6,"flex","items-center","justify-center"],name:[...m.z6,"font-normal","text-center","text-inherit"],icon:[...m.z6,"flex","items-center","justify-center","text-inherit","w-full","h-full"]},variants:{size:{sm:{base:"w-8 h-8 text-tiny"},md:{base:"w-10 h-10 text-tiny"},lg:{base:"w-14 h-14 text-small"}},color:{default:{base:c.J.solid.default},primary:{base:c.J.solid.primary},secondary:{base:c.J.solid.secondary},success:{base:c.J.solid.success},warning:{base:c.J.solid.warning},danger:{base:c.J.solid.danger}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isBordered:{true:{base:"ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark"}},isDisabled:{true:{base:"opacity-disabled"}},isInGroup:{true:{base:["-ms-2 data-[hover=true]:-translate-x-3 transition-transform","data-[focus-visible=true]:-translate-x-3"]}},isInGridGroup:{true:{base:"m-0 data-[hover=true]:translate-x-0"}}},defaultVariants:{size:"md",color:"default",radius:"full"},compoundVariants:[{color:"default",isBordered:!0,class:{base:"ring-default"}},{color:"primary",isBordered:!0,class:{base:"ring-primary"}},{color:"secondary",isBordered:!0,class:{base:"ring-secondary"}},{color:"success",isBordered:!0,class:{base:"ring-success"}},{color:"warning",isBordered:!0,class:{base:"ring-warning"}},{color:"danger",isBordered:!0,class:{base:"ring-danger"}}]});(0,u.tv)({base:"flex items-center justify-center h-auto w-max-content",variants:{isGrid:{true:"inline-grid grid-cols-4 gap-3"}}});var h=s(22143),x=s(73908),p=s(89083),g=s(5142),v=s(34808),b=s(38260),y=s(2265),j=s(9550),N=s(11246),w=(0,s(84291).Gp)((e,t)=>{let{Component:s,ImgComponent:r,src:n,icon:l=(0,a.jsx)(i,{}),alt:o,classNames:c,slots:u,name:m,showFallback:w,fallback:E,getInitials:P,getAvatarProps:C,getImageProps:_}=function(){var e,t,s,a,r;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=d(),i=!!l,{as:o,ref:c,src:u,name:m,icon:w,classNames:E,fallback:P,alt:C=m||"avatar",imgRef:_,color:k=null!=(e=null==l?void 0:l.color)?e:"default",radius:I=null!=(t=null==l?void 0:l.radius)?t:"full",size:G=null!=(s=null==l?void 0:l.size)?s:"md",isBordered:M=null!=(a=null==l?void 0:l.isBordered)&&a,isDisabled:S=null!=(r=null==l?void 0:l.isDisabled)&&r,isFocusable:T=!1,getInitials:B=p.e,ignoreFallback:U=!1,showFallback:R=!1,ImgComponent:A="img",imgProps:O,className:L,onError:D,...$}=n,z=o||"span",W=(0,x.gy)(c),F=(0,x.gy)(_),{isFocusVisible:H,isFocused:K,focusProps:V}=(0,b.Fx)(),{isHovered:Z,hoverProps:J}=(0,N.XI)({isDisabled:S}),Y="loaded"===(0,j.d)({src:u,onError:D,ignoreFallback:U}),X=(!u||!Y)&&R,q=(0,y.useMemo)(()=>{var e;return f({color:k,radius:I,size:G,isBordered:M,isDisabled:S,isInGroup:i,isInGridGroup:null!=(e=null==l?void 0:l.isGrid)&&e})},[k,I,G,M,S,i,null==l?void 0:l.isGrid]),Q=(0,g.W)(null==E?void 0:E.base,L),ee=(0,y.useMemo)(()=>T||"button"===o,[T,o]),et=(0,y.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:W,tabIndex:ee?0:-1,"data-hover":(0,v.PB)(Z),"data-focus":(0,v.PB)(K),"data-focus-visible":(0,v.PB)(H),className:q.base({class:(0,g.W)(Q,null==e?void 0:e.className)}),...(0,h.dG)($,J,ee?V:{})}},[ee,q,Q,V,$]),es=(0,y.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:F,src:u,"data-loaded":(0,v.PB)(Y),className:q.img({class:null==E?void 0:E.img}),...(0,h.dG)(O,e)}},[q,Y,O,u,F]);return{Component:z,ImgComponent:A,src:u,alt:C,icon:w,name:m,imgRef:F,slots:q,classNames:E,fallback:P,isImgLoaded:Y,showFallback:X,ignoreFallback:U,getInitials:B,getAvatarProps:et,getImageProps:es}}({...e,ref:t}),k=(0,y.useMemo)(()=>!w&&n?null:E?(0,a.jsx)("div",{"aria-label":o,className:u.fallback({class:null==c?void 0:c.fallback}),role:"img",children:E}):m?(0,a.jsx)("span",{"aria-label":o,className:u.name({class:null==c?void 0:c.name}),role:"img",children:P(m)}):(0,a.jsx)("span",{"aria-label":o,className:u.icon({class:null==c?void 0:c.icon}),role:"img",children:l}),[w,n,E,m,c]);return(0,a.jsxs)(s,{...C(),children:[n&&(0,a.jsx)(r,{..._(),alt:o}),k]})});w.displayName="NextUI.Avatar";var E=s(30982),P=s(20888),C=s(70784);function _(){let e=(0,E.useLocale)(),t=(0,r.jD)(),s=(0,r.tv)(),[i,o]=(0,P.v1)("currency",P.Oi.withDefault("USD"));return(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,a.jsx)(n.g,{className:"w-full min-w-40 max-w-xs",labelPlacement:"outside-left",onSelectionChange:e=>{o(e.currentKey)},selectedKeys:[i],startContent:(0,a.jsx)(C.UWZ,{}),children:r.QT.map(t=>(0,a.jsx)(l.R,{children:new Intl.DisplayNames([e],{type:"currency"}).of(t)},t))}),(0,a.jsx)(n.g,{className:"w-full min-w-40 max-w-xs",labelPlacement:"outside-left",onSelectionChange:e=>{s.replace(t,{locale:e.currentKey})},selectedKeys:[e],startContent:(0,a.jsx)(w,{alt:e,className:"h-4 w-4",src:"https://flagcdn.com/".concat(r.Mj[e].toLowerCase(),".svg")}),children:Object.entries(r.Mj).map(e=>{let[t,s]=e;return(0,a.jsx)(l.R,{startContent:(0,a.jsx)(w,{alt:t,className:"h-6 w-6",src:"https://flagcdn.com/".concat(s.toLowerCase(),".svg")}),children:new Intl.DisplayNames([t],{type:"language"}).of(t)},t)})})]})}},93902:function(e,t,s){"use strict";s.d(t,{FD:function(){return d},ZP:function(){return c}});var a=s(2265),r=s(32153),n=s(15281),l=s(57525);let i=(0,r.cn)({key:"gemscount",default:{PG_GEM_EPHEMERAL:0,PG_GEM_PERMANENT:0}}),o=(0,r.cn)({key:"privilege",default:{last_purchase_amount:0,level:0,level_name:"basic",user_id:void 0}});function d(){let[e,t]=(0,r.FV)(i),[s,d]=(0,r.FV)(o),{userInfo:c}=(0,n.useUserInfo)();return(0,a.useEffect)(()=>{if(!c||!c.userId)return;let e=!1;return l.Z.checkUserGem(c.userId).then(e=>{t({PG_GEM_EPHEMERAL:e.PG_GEM_EPHEMERAL||0,PG_GEM_PERMANENT:e.PG_GEM_PERMANENT||0})}),l.Z.getUserInfo(c.userId).then(t=>{let s="basic",a=0;t.last_purchase_amount>20&&(s="advanced",a=1),t.last_purchase_amount>40&&(s="master",a=2),t.last_purchase_amount>60&&(s="artist",a=3),t.last_purchase_amount>130&&(s="ultimate",a=4),e||d({last_purchase_amount:t.last_purchase_amount,level:a,level_name:s,user_id:t.user_id})}),()=>{e=!0}},[c]),{gemData:e}}function c(){let[e,t]=(0,r.FV)(i),[s,d]=(0,r.FV)(o),{userInfo:c}=(0,n.useUserInfo)();return{gemData:e,refreshGemData:(0,a.useCallback)(()=>{c&&c.userId&&l.Z.checkUserGem(c.userId).then(e=>{t({PG_GEM_EPHEMERAL:e.PG_GEM_EPHEMERAL||0,PG_GEM_PERMANENT:e.PG_GEM_PERMANENT||0})})},[t,c]),privilege:s}}},60414:function(e,t,s){"use strict";s.r(t),s.d(t,{Providers:function(){return y}});var a=s(57437),r=s(99441),n=s(22143),l=s(94772),i=({children:e,locale:t="en-US",navigate:s,...i})=>{let o=e;return s&&(o=(0,a.jsx)(n.pG,{navigate:s,children:o})),(0,a.jsx)(r.bd,{locale:t,children:(0,a.jsx)(l.N3,{...i,children:o})})},o=s(2265);let d=["light","dark"],c="(prefers-color-scheme: dark)",u="undefined"==typeof window,m=(0,o.createContext)(void 0),f=e=>(0,o.useContext)(m)?o.createElement(o.Fragment,null,e.children):o.createElement(x,e),h=["light","dark"],x=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:s=!0,enableColorScheme:a=!0,storageKey:r="theme",themes:n=h,defaultTheme:l=s?"system":"light",attribute:i="data-theme",value:u,children:f,nonce:x})=>{let[y,j]=(0,o.useState)(()=>g(r,l)),[N,w]=(0,o.useState)(()=>g(r)),E=u?Object.values(u):n,P=(0,o.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&s&&(r=b());let n=u?u[r]:r,o=t?v():null,c=document.documentElement;if("class"===i?(c.classList.remove(...E),n&&c.classList.add(n)):n?c.setAttribute(i,n):c.removeAttribute(i),a){let e=d.includes(l)?l:null,t=d.includes(r)?r:e;c.style.colorScheme=t}null==o||o()},[]),C=(0,o.useCallback)(e=>{j(e);try{localStorage.setItem(r,e)}catch(e){}},[e]),_=(0,o.useCallback)(t=>{w(b(t)),"system"===y&&s&&!e&&P("system")},[y,e]);(0,o.useEffect)(()=>{let e=window.matchMedia(c);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),(0,o.useEffect)(()=>{let e=e=>{e.key===r&&C(e.newValue||l)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,o.useEffect)(()=>{P(null!=e?e:y)},[e,y]);let k=(0,o.useMemo)(()=>({theme:y,setTheme:C,forcedTheme:e,resolvedTheme:"system"===y?N:y,themes:s?[...n,"system"]:n,systemTheme:s?N:void 0}),[y,C,e,N,s,n]);return o.createElement(m.Provider,{value:k},o.createElement(p,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:s,enableColorScheme:a,storageKey:r,themes:n,defaultTheme:l,attribute:i,value:u,children:f,attrs:E,nonce:x}),f)},p=(0,o.memo)(({forcedTheme:e,storageKey:t,attribute:s,enableSystem:a,enableColorScheme:r,defaultTheme:n,value:l,attrs:i,nonce:u})=>{let m="system"===n,f="class"===s?`var d=document.documentElement,c=d.classList;c.remove(${i.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${s}',s='setAttribute';`,h=r?d.includes(n)&&n?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${n}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",x=(e,t=!1,a=!0)=>{let n=l?l[e]:e,i=t?e+"|| ''":`'${n}'`,o="";return r&&a&&!t&&d.includes(e)&&(o+=`d.style.colorScheme = '${e}';`),"class"===s?o+=t||n?`c.add(${i})`:"null":n&&(o+=`d[s](n,${i})`),o},p=e?`!function(){${f}${x(e)}}()`:a?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${c}',m=window.matchMedia(t);if(m.media!==t||m.matches){${x("dark")}}else{${x("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${x(l?"x[e]":"e",!0)}}${m?"":"else{"+x(n,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${x(l?"x[e]":"e",!0)}}else{${x(n,!1,!1)};}${h}}catch(t){}}();`;return o.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:p}})},()=>!0),g=(e,t)=>{let s;if(!u){try{s=localStorage.getItem(e)||void 0}catch(e){}return s||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},b=e=>(e||(e=window.matchMedia(c)),e.matches?"dark":"light");function y(e){let{children:t}=e;return(0,a.jsx)(i,{children:(0,a.jsx)(f,{attribute:"class",defaultTheme:"dark",themes:["light","dark","blue","fantasy"],children:t})})}},66204:function(e,t,s){"use strict";s.d(t,{Mj:function(){return n},QT:function(){return l},jD:function(){return c},rU:function(){return o},tv:function(){return u}});var a=s(80654),r=s(39279);let n={en:"GB",ar:"AE",bg:"BG",de:"DE","es-ES":"ES",et:"ee",fr:"FR",fi:"FI",ko:"KR","sv-SE":"SE",id:"ID",it:"IT",el:"GR",cs:"CZ",hu:"HU",lt:"LT",lv:"LV",no:"NO",ja:"JP",nl:"NL",pl:"PL",is:"IS","pt-PT":"PT",ru:"RU",tr:"TR",he:"IL",ro:"RO",sk:"SK",sl:"SI",da:"DK",uk:"UA",th:"TH",hi:"IN","ml-IN":"MY",vi:"VN","zh-CN":"CN","zh-TW":"TW"},l=["USD","AED","ARS","AUD","BGN","BRL","BZD","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HUF","IDR","INR","JPY","KRW","MXN","NOK","PLN","RON","RUB","SEK","SGD","THB","TRY","TWD","UAH"],i=(0,r.R)({locales:Object.keys(n),defaultLocale:"en",localePrefix:"as-needed"}),{Link:o,redirect:d,usePathname:c,useRouter:u}=(0,a.iV)(i)},86148:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},2646:function(e,t,s){"use strict";s.d(t,{R:function(){return d}});var a=s(80985),r=s(84291),n=s(73908),l=s(5142),i=s(57437),o=(0,r.Gp)((e,t)=>{let{as:s,children:r,className:o,...d}=e,{slots:c,classNames:u}=(0,a.v)(),m=(0,n.gy)(t);return(0,i.jsx)(s||"footer",{ref:m,className:c.footer({class:(0,l.W)(null==u?void 0:u.footer,o)}),...d,children:r})});o.displayName="NextUI.ModalFooter";var d=o},75527:function(e,t,s){"use strict";s.d(t,{q:function(){return o}});var a=s(22143),r=s(90365),n=s(2265),l=s(3248);function i(e,t=[]){let s=(0,n.useRef)(e);return(0,l.G)(()=>{s.current=e}),(0,n.useCallback)((...e)=>{var t;return null==(t=s.current)?void 0:t.call(s,...e)},t)}function o(e={}){let{id:t,defaultOpen:s,isOpen:l,onClose:o,onOpen:d,onChange:c=()=>{}}=e,u=i(d),m=i(o),[f,h]=(0,r.zk)(l,s||!1,c),x=(0,n.useId)(),p=t||x,g=void 0!==l,v=(0,n.useCallback)(()=>{g||h(!1),null==m||m()},[g,m]),b=(0,n.useCallback)(()=>{g||h(!0),null==u||u()},[g,u]),y=(0,n.useCallback)(()=>{(f?v:b)()},[f,b,v]);return{isOpen:!!f,onOpen:b,onClose:v,onOpenChange:y,isControlled:g,getButtonProps:(e={})=>({...e,"aria-expanded":f,"aria-controls":p,onClick:(0,a.tS)(e.onClick,y)}),getDisclosureProps:(e={})=>({...e,hidden:!f,id:p})}}}},function(e){e.O(0,[691,7699,7802,680,6051,2542,2031,5250,5416,4642,6204,1330,4361,7610,2971,1726,1744],function(){return e(e.s=48177)}),_N_E=e.O()}]);