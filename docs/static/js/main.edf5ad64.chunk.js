(this.webpackJsonpwhatsinmypantry=this.webpackJsonpwhatsinmypantry||[]).push([[0],{167:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(35),c=n.n(i),o=n(14),s=n(17),d=n(231),l=n(10);function j(e){var t=Object(r.useState)(),n=Object(l.a)(t,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){var t=function(){null!==e.current&&i({width:e.current.clientWidth,height:e.current.clientHeight})};t(),window.addEventListener("resize",t)}),[e]),a}var b=n(269),u=n(255),p=n(232),x=n(260),m=n(251),h=n(224),O=n(208),g=n(92),f=n(258),y=Object(g.a)({breakpoints:{values:{xs:0,sm:700,md:900,lg:1200,xl:1536}},typography:{button:{textTransform:"none"}},components:{MuiButtonBase:{defaultProps:{disableRipple:!0,disableTouchRipple:!0}},MuiIconButton:{styleOverrides:{root:{"&:hover":{backgroundColor:"transparent"}}}},MuiSwitch:{styleOverrides:{switchBase:{"&:hover":{backgroundColor:"transparent"},"&.Mui-checked:hover":{backgroundColor:"transparent"}}}}}}),v=Object(g.a)(y,{palette:{primary:{main:"#7FD7C3"},secondary:{main:"#FFFFFF"},text:{primary:"#383A47",secondary:"#C4C4C4"},background:{paper:"#FAFAFA",default:"#FAFAFA"},divider:"rgba(255, 255, 255, 0.3)"},components:{MuiFab:{styleOverrides:{root:{"&:hover":{backgroundColor:"#FFFFFF"}}}}}}),k=Object(g.a)(y,{palette:{primary:{main:"#7FD7C3"},secondary:{main:"#383A47"},text:{primary:"#EFEFEF",secondary:"#C4C4C4"},background:{paper:"#4D4F61",default:"#383A47"},divider:"rgba(0, 0, 0, 0.3)"},components:{MuiFab:{styleOverrides:{root:{"&:hover":{backgroundColor:"#383A47"}}}}}}),C=Object(f.a)(v),I=Object(f.a)(k),w=n(206),S=n(207),F=n(5),E=n(259),R=n(261),M=n(262),T=n(40),D=n(0),A=function(){var e=[{name:"pantry",icon:Object(D.jsx)(w.a,{sx:{pr:1,fontSize:40}}),link:"/"},{name:"recipes",icon:Object(D.jsx)(S.a,{sx:{pr:1,fontSize:40}}),link:"/recipes"}],t=Object(o.f)().pathname,n=e.map((function(e){return e.link})).indexOf(t),a=Object(r.useState)(!0),i=Object(l.a)(a,2),c=i[0],s=i[1],d=Object(r.useState)(t),j=Object(l.a)(d,2),b=j[0],u=j[1];Object(r.useEffect)((function(){if(-1===n)return s(!1);s(!0),u(t)}),[n,t]);var p=Object(F.a)(E.a)((function(e){return{"&.Mui-selected":{borderTop:"5px solid "+e.theme.palette.primary.main}}}));return Object(D.jsx)(D.Fragment,{children:c&&Object(D.jsxs)(O.a,{width:"100%",children:[Object(D.jsx)(x.a,{}),Object(D.jsx)(R.a,{sx:{position:"fixed",bottom:0,left:0,right:0,zIndex:"appBar"},elevation:3,children:Object(D.jsx)(M.a,{showLabels:!0,value:b,onChange:function(e,t){u(t)},sx:{backgroundColor:"secondary.main"},children:e.map((function(t){return Object(D.jsx)(p,{component:T.b,to:t.link,value:t.link,label:t.name.toUpperCase(),icon:t.icon,sx:{display:"flex",flexDirection:"row",minWidth:(100/e.length).toString()+"%",borderTop:"5px solid transparent"}},t.name)}))})})]})})},P=n(270),L=n(266),z=n(223),W=n(211),_=n(212),B=n(263),G=n(249),N=n(213),H=n(264),V=n(265),U=n(209),q=n(210),Y=n(248),X=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.darkMode})),n={fontSize:30,padding:.5,marginTop:-.7,backgroundColor:"secondary.main",borderRadius:"50%",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"};return Object(D.jsx)(Y.a,{checked:t,onChange:function(){e({type:"THEME_MODE",payload:!t})},"aria-label":"theme mode",color:"secondary",checkedIcon:Object(D.jsx)(U.a,{color:"primary",sx:n}),icon:Object(D.jsx)(q.a,{color:"primary",sx:n}),sx:{paddingBottom:1.5,paddingTop:1.5,width:70}})},J=function(e){var t=e.desktop,n=e.desktopLg,r=[{name:"My Pantry",icon:Object(D.jsx)(w.a,{color:"secondary"}),link:"/",mobile:!0,desktop:!1},{name:"Recipes",icon:Object(D.jsx)(S.a,{color:"secondary"}),link:"recipes",mobile:!0,desktop:!0},{name:"Starred Recipes",icon:Object(D.jsx)(W.a,{color:"secondary"}),link:"starred",mobile:!0,desktop:!0},{name:"About",icon:Object(D.jsx)(_.a,{color:"secondary"}),link:"about",mobile:!1,desktop:!0}].filter((function(e){return t?!0===e.desktop:!0===e.mobile}));return Object(D.jsxs)(B.a,{dense:t&&!n,sx:t&&{display:"flex"},children:[r.map((function(e){return Object(D.jsx)(G.a,{divider:!t,disablePadding:!0,sx:t&&{width:"fit-content"},children:Object(D.jsxs)(N.a,{component:T.b,to:e.link,sx:{width:"100%",paddingX:t&&!n?1:2},children:[null===e.icon?null:Object(D.jsx)(H.a,{sx:{minWidth:40},children:e.icon}),Object(D.jsx)(V.a,{primary:e.name,primaryTypographyProps:{color:"secondary",align:"right"}})]})},e.name)})),t&&Object(D.jsx)(G.a,{disablePadding:!0,sx:{width:"fit-content",marginLeft:n?5:2.5},children:Object(D.jsx)(X,{})})]})},Q=n(217),K=n(222),$=n(268),Z=n(214),ee=n(215),te=n(216),ne=n(267),re=n.p+"static/media/Logo.4e019f4f.svg",ae=function(){var e=Object(s.c)((function(e){return e.mediaqueries})).desktop,t=e?"text.primary":"secondary.main",n=e?"primary":"secondary";return Object(D.jsxs)(m.a,{container:!0,height:"100%",width:"fit-content",flexDirection:"column",justifyContent:"flex-end",m:2.5,color:t,children:[!e&&Object(D.jsxs)(m.a,{container:!0,flexDirection:"column",children:[Object(D.jsx)(O.a,{component:"img",height:35,width:52,src:re,alt:"whatsinmypantry smiling taco logo"}),Object(D.jsx)(L.a,{variant:"h5",component:"h2",paddingY:1,children:"about"})]}),Object(D.jsx)(L.a,{variant:"body2",component:"p",pb:1,children:"#whatsinmypantry is a recipe management app meant to make your daily life easier by helping you decide what to cook based on what you have at home."}),Object(D.jsxs)(L.a,{variant:"body2",component:"p",children:["This app was created as a FrontEnd project for an academic course and is powered by"," ",Object(D.jsx)(ne.a,{href:"https://spoonacular.com/food-api",target:"_blank",underline:"none",color:n,children:"Spoonacular API."})]}),Object(D.jsxs)(O.a,{component:"footer",mt:4,children:[Object(D.jsxs)(m.a,{container:!0,children:[Object(D.jsx)($.a,{href:"https://www.linkedin.com/in/brunodeilhot/",target:"_blank",children:Object(D.jsx)(Z.a,{color:n,fontSize:"large"})}),Object(D.jsx)($.a,{href:"https://github.com/brunodeilhot",target:"_blank",children:Object(D.jsx)(ee.a,{color:n,sx:{fontSize:35}})})]}),Object(D.jsxs)(L.a,{variant:"body2",component:"p",display:"flex",alignItems:"center",children:["#whatsinmypantry by Bruno Deilhot",Object(D.jsx)(te.a,{fontSize:"small",sx:{marginX:.5}}),(new Date).getFullYear()]})]})]})},ie=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=function(){a(!n)};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)($.a,{onClick:i,edge:"end",color:"primary","aria-label":"menu",children:Object(D.jsx)(Q.a,{sx:{fontSize:50}})}),Object(D.jsxs)(b.a,{anchor:"right",open:n,onClose:i,PaperProps:{sx:{backgroundColor:"primary.main",maxWidth:"70%"}},children:[Object(D.jsxs)(m.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(D.jsx)(m.a,{item:!0,ml:1,children:Object(D.jsx)(X,{})}),Object(D.jsx)($.a,{onClick:i,color:"secondary","aria-label":"close menu",children:Object(D.jsx)(K.a,{sx:{fontSize:50}})})]}),Object(D.jsx)(O.a,{component:"nav",role:"navigation",onClick:i,children:Object(D.jsx)(J,{})}),Object(D.jsx)(ae,{})]})]})},ce=function(e){var t=e.desktop,n=e.desktopLg;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(P.a,{sx:{backgroundColor:t?"primary.main":"background.default"},elevation:t?4:0,children:Object(D.jsxs)(x.a,{children:[Object(D.jsx)(L.a,{variant:"h6",component:"h1",color:t?"secondary":"primary",fontWeight:700,flexGrow:1,children:"#whatsinmypantry"}),t?Object(D.jsx)(z.a,{component:"nav",role:"navigation",children:Object(D.jsx)(J,{desktop:t,desktopLg:n})}):Object(D.jsx)(ie,{})]})}),Object(D.jsx)(x.a,{id:"back-to-top-anchor"})]})},oe=n.p+"static/media/SadLogo.42b7c2ef.svg",se=function(e){var t=e.apiLimit,n=e.desktop,a=e.drawerWidth,i=Object(s.b)(),c=Object(o.h)();return Object(r.useEffect)((function(){var e=setTimeout((function(){c(n?"about":"/"),i({type:"API_LIMIT",payload:!1})}),5e3);return function(){return clearTimeout(e)}}),[n,i,c]),Object(D.jsx)(m.a,{container:!0,justifyContent:"center",alignContent:"center",width:n?"fit-content":"100%",ml:n?a:0,children:Object(D.jsxs)(m.a,{container:!0,item:!0,flexDirection:"column",alignItems:"center",p:2.5,children:[Object(D.jsx)(O.a,{component:"img",width:170,height:106,mt:6,mb:3,src:oe,alt:"Large whatsinmypantry smiling taco logo"}),Object(D.jsx)(L.a,{component:"p",variant:"h4",color:"text.primary",children:t?"Api calls limit reached.":"Page not found."}),t&&Object(D.jsx)(L.a,{component:"p",variant:"body1",color:"text.secondary",pt:2.5,children:"This is an academic project with a limited amount of api calls per day, please try again tomorrow."}),Object(D.jsx)(L.a,{component:"p",variant:"body1",color:"text.secondary",pt:2.5,children:"You will be redirected in 5 seconds.."})]})})},de=function(){return Object(D.jsxs)(m.a,{container:!0,flexDirection:"column",alignItems:"center",children:[Object(D.jsx)(O.a,{component:"img",width:170,height:106,mt:6,mb:3,src:re,alt:"Large whatsinmypantry smiling taco logo"}),Object(D.jsx)(L.a,{variant:"h3",fontWeight:700,component:"p",children:"Let's begin!"}),Object(D.jsx)(L.a,{variant:"body1",component:"h2",mb:4,align:"center",children:"Search for ingredients to fill your pantry."})]})},le=n(218),je=n(250),be=function(){return Object(D.jsxs)(m.a,{container:!0,flexDirection:"column",alignItems:"center",children:[Object(D.jsx)(w.a,{sx:{fontSize:"20vh",color:"text.secondary",mt:"5vh"}}),Object(D.jsx)(L.a,{variant:"h4",component:"p",color:"text.secondary",children:"Your pantry is empty."})]})},ue=n(225),pe=n(253),xe=function(e){var t=e.ingredient,n=e.removeIngredient,r=Object(h.a)(pe.a)((function(e){return{"& .MuiChip-label":{color:e.theme.palette.text.primary}}}));return Object(D.jsx)(r,{color:"primary",variant:"outlined",label:t,deleteIcon:Object(D.jsx)(ue.a,{}),onDelete:function(e){return n(e,t)},sx:{borderWidth:"2px",backgroundColor:"secondary.main"}})},me=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.myPantry})),n=function(n,r){var a=t.indexOf(r);e({type:"REMOVE_INGREDIENT",payload:a})},r=t.map((function(e){return Object(D.jsx)(le.a,{children:Object(D.jsx)(m.a,{item:!0,children:Object(D.jsx)(xe,{ingredient:e,removeIngredient:n})})},e)}));return Object(D.jsx)(m.a,{container:!0,justifyContent:"center",children:0===t.length?Object(D.jsx)(be,{}):Object(D.jsx)(m.a,{container:!0,item:!0,spacing:1,maxWidth:"80%",mt:3,mb:3,children:Object(D.jsx)(je.a,{component:null,children:r})})})},he=n(227),Oe=n(245),ge=n(271),fe=function(e){var t=e.handleChange,n=e.value,r=e.searchBarRef,a=Object(h.a)(Oe.a)((function(e){var t=e.theme.palette.primary.main;return{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:t,borderWidth:"2px",borderRadius:"30px"},"&:hover fieldset":{borderColor:t},"&.Mui-focused fieldset":{borderWidth:"3px"}}}}));return Object(D.jsx)(m.a,{container:!0,justifyContent:"center",children:Object(D.jsx)(a,{ref:r,autoFocus:!0,value:n,onChange:t,placeholder:"e.g. tomato",InputProps:{startAdornment:Object(D.jsx)(ge.a,{position:"start",children:Object(D.jsx)(he.a,{color:"primary",sx:{fontSize:40}})})},sx:{minWidth:"80%",borderRadius:"30px",backgroundColor:"secondary.main"}})})},ye=n(229),ve=n(230),ke=n(228),Ce=n(272),Ie=n(254),we=n(20),Se=n(110),Fe={apiKey:"f1f0a35e77ce498c96d1a4925b53525a"},Ee="https://spoonacular.com/cdn/ingredients_100x100/",Re=n.n(Se).a.create({baseURL:"https://api.spoonacular.com",headers:{Accept:"application/json","Content-Type":"application/json"}});function Me(e,t){return Re.get("/food/ingredients/search",{params:Object(we.a)(Object(we.a)({},Fe),{},{query:e,number:5})}).catch((function(e){return Le(e)})).then(Ae).then(t)}function Te(e,t,n,r,a){var i=Object(we.a)(Object(we.a)({},Fe),{},{includeIngredients:e,sort:"min-missing-ingredients",sortDirection:"asc",number:r});return Re.get("/recipes/complexSearch",{params:void 0!==t&&void 0!==n?Object(we.a)(Object(we.a)({},i),{},{type:t,diet:n}):void 0!==t?Object(we.a)(Object(we.a)({},i),{},{type:t}):void 0!==n?Object(we.a)(Object(we.a)({},i),{},{diet:n}):Object(we.a)({},i)}).catch((function(e){return Le(e)})).then(Ae).then(a)}function De(e,t){return Re.get("/recipes/".concat(e,"/information"),{params:Object(we.a)({},Fe)}).catch((function(e){return Le(e)})).then(Pe).then(t)}function Ae(e){return 402===e?e:e.data.results}function Pe(e){return void 0===e||402===e?e:e.data}function Le(e){return e.response.status}var ze=function(e){var t=e.ingredients,n=e.ingredientToggle,r=e.resetValue,a=e.pantry,i=j(e.widthRef),c=void 0===i?0:i.width;return Object(D.jsx)(m.a,{container:!0,justifyContent:"center",children:Object(D.jsx)(ke.a,{onClickAway:r,children:Object(D.jsx)(B.a,{dense:!0,sx:{display:"flex",flexDirection:"column",position:"absolute",width:c,border:"3px solid",borderColor:"primary.main",borderRadius:"30px",backgroundColor:"secondary.main",mt:1,zIndex:"speedDial"},children:t.map((function(e){return Object(D.jsxs)(G.a,{disablePadding:!0,sx:{paddingX:2},children:[Object(D.jsx)(Ce.a,{sx:{minWidth:"20px"},children:Object(D.jsx)(Ie.a,{src:Ee+e.image,sx:{maxWidth:20,maxHeight:20}})}),Object(D.jsx)(V.a,{primary:e.name,sx:{textAlign:"center",color:"text.primary"}}),Object(D.jsx)($.a,{onClick:function(t){return n(t,e.name)},sx:{p:0,minWidth:"20px"},children:-1===a.indexOf(e.name)?Object(D.jsx)(ye.a,{color:"primary"}):Object(D.jsx)(ve.a,{color:"primary"})})]},e.id)}))})})})},We=n(111),_e=function(){var e=Object(s.b)(),t=Object(r.useRef)(),n=Object(r.useState)(""),a=Object(l.a)(n,2),i=a[0],c=a[1],o=Object(We.useDebounce)(i,500),d=Object(l.a)(o,1)[0],j=Object(r.useState)([]),b=Object(l.a)(j,2),u=b[0],p=b[1];Object(r.useEffect)((function(){d.length>=3&&Me(d,(function(t){if(402===t)return e({type:"API_LIMIT",payload:!0});p(t)})),p([])}),[d,e]);var x=Object(s.c)((function(e){return e.myPantry}));return Object(D.jsxs)(z.a,{position:"relative",children:[Object(D.jsx)(fe,{searchBarRef:t,value:i,handleChange:function(e){return c(e.target.value)}}),u.length>0?Object(D.jsx)(ze,{widthRef:t,ingredients:u,ingredientToggle:function(t,n){var r=x.indexOf(n);if(-1!==r)return e({type:"REMOVE_INGREDIENT",payload:r});e({type:"ADD_INGREDIENT",payload:n})},resetValue:function(){c("")},pantry:x}):null]})},Be=function(){return Object(D.jsxs)(m.a,{container:!0,item:!0,direction:"column",children:[Object(D.jsx)(de,{}),Object(D.jsx)(_e,{}),Object(D.jsx)(me,{})]})},Ge=function(){var e=Object(o.h)(),t=Object(s.b)(),n=Object(s.c)((function(e){return e.apiLimitReached})),a=Object(s.c)((function(e){return e.mediaqueries})),i=a.desktop,c=a.desktopLg,l=Object(s.c)((function(e){return e.darkMode})),g=Object(d.a)("(prefers-color-scheme: dark)");Object(r.useEffect)((function(){t({type:"THEME_MODE",payload:g})}),[t,g]);var f=Object(o.g)("/");Object(r.useEffect)((function(){i&&f&&e("recipes")}),[i,f,e]);var y=Object(r.useRef)(),v=j(y),k=void 0===v?0:v.width,w=c?(.3*k).toString()+"px":(.4*k).toString()+"px",S=Object(h.a)(b.a)((function(e){var t=e.theme;return{"& .MuiDrawer-docked":{width:w,flexShrink:0},"& .MuiDrawer-paper":{width:w,boxSizing:"border-box",zIndex:1050,backgroundColor:t.palette.background.default,borderRight:"none"}}})),F=i?Object(D.jsx)(O.a,{ml:w,children:Object(D.jsx)(o.a,{})}):Object(D.jsx)(o.a,{});return Object(D.jsxs)(u.a,{theme:l?I:C,children:[Object(D.jsx)(p.a,{}),Object(D.jsxs)(O.a,{ref:y,minHeight:"100vh",backgroundColor:"background.default",children:[Object(D.jsx)(ce,{desktop:i,desktopLg:c}),i&&Object(D.jsxs)(S,{variant:"permanent",children:[Object(D.jsx)(x.a,{}),Object(D.jsx)(m.a,{container:!0,overflow:"auto",height:"100vh",children:Object(D.jsx)(Be,{})})]}),n?Object(D.jsx)(se,{apiLimit:n,desktop:i,drawerWidth:w}):F,!i&&Object(D.jsx)(A,{})]})]})},Ne=n(112),He=function(e){var t=e.starred,n={fontSize:"20vh",color:"text.secondary",mb:1},r=e.filtered?"Try changing your filter options.":"Add some ingredients to your pantry.";return Object(D.jsx)(m.a,{container:!0,justifyContent:"center",alignContent:"center",children:Object(D.jsxs)(m.a,{container:!0,flexDirection:"column",alignItems:"center",mt:"25vh",children:[t?Object(D.jsx)(W.a,{sx:n}):Object(D.jsx)(S.a,{sx:n}),Object(D.jsx)(L.a,{component:"p",variant:"h4",color:"text.secondary",children:"No recipes found."}),Object(D.jsx)(L.a,{component:"p",variant:"body1",color:"text.secondary",children:t?"Star your favorite recipes.":r})]})})},Ve=n(273),Ue=n(274),qe=n(275),Ye=n(276),Xe=n(277),Je=n(234),Qe=n(244),Ke=function(e){var t=e.missingIng,n="You are missing ".concat(t," ingredient").concat(1===t?".":"s.");return Object(D.jsx)(Qe.a,{title:n,enterDelay:300,leaveDelay:200,enterTouchDelay:0,children:Object(D.jsx)($.a,{sx:{alignSelf:"flex-end"},children:Object(D.jsx)(Je.a,{color:"warning"})})})},$e=function(e){var t=e.id,n=e.title,r=e.image,a=e.missingIng,i=e.toggleStarred,c=e.starredRecipes,o=void 0===a?"flex-end":"space-between",s={id:t,title:n,image:r};return Object(D.jsxs)(Ve.a,{sx:{display:"flex",flexDirection:"column",minHeight:"100%",borderRadius:"22px",backgroundColor:"background.paper",boxShadow:"0px 3px 5px 2px rgba(0, 0, 0, 0.03)"},children:[Object(D.jsxs)(Ue.a,{component:T.b,to:"".concat(t),sx:{display:"flex",flexDirection:"column",justifyContent:"start",flexGrow:1},children:[Object(D.jsx)(qe.a,{component:"img",image:r,alt:n}),Object(D.jsx)(Ye.a,{sx:{p:1,pb:0},children:Object(D.jsx)(L.a,{component:"h2",variant:"body2",fontWeight:700,children:n})})]}),Object(D.jsxs)(Xe.a,{sx:{display:"flex",justifyContent:o,p:0},children:[void 0===a?null:Object(D.jsx)(Ke,{missingIng:a}),Object(D.jsx)($.a,{onClick:function(e){return i(e,s)},sx:{alignSelf:"flex-end"},children:-1===c.findIndex((function(e){return e.id===t}))?Object(D.jsx)(W.a,{}):Object(D.jsx)(W.a,{sx:{color:"#F6E258"}})})]})]})},Ze=n(278),et=function(){return Object(D.jsx)(m.a,{container:!0,justifyContent:"center",children:Object(D.jsx)(O.a,{m:"25vh",children:Object(D.jsx)(Ze.a,{size:100,color:"primary"})})})},tt=n(237),nt=n(235),rt=n(279),at=n(236),it=function(e){var t=e.desktop,n=Object(nt.a)({disableHysteresis:!0}),r=Object(F.a)(rt.a)((function(e){return{"&.MuiFab-root":{"&:hover":{backgroundColor:e.theme.palette.primary.main}}}}));return Object(D.jsx)(at.a,{in:n,children:Object(D.jsx)(r,{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},color:"primary","aria-label":"scroll back to top",sx:{position:"fixed",bottom:t?16:70,right:16},children:Object(D.jsx)(tt.a,{color:"secondary",sx:{fontSize:40}})})})},ct=function(e){var t=e.recipes,n=e.desktop,r=Object(s.b)(),a=Object(s.c)((function(e){return e.starredRecipes})),i=function(e,t){var n=a.findIndex((function(e){return e.id===t.id}));if(-1!==n)return r({type:"REMOVE_STARRED",payload:n});r({type:"ADD_STARRED",payload:t})},c=t.map((function(e){return Object(D.jsx)(m.a,{container:!0,item:!0,xs:2,md:3,lg:4,xl:5,children:Object(D.jsx)($e,{id:e.id,title:e.title,image:e.image,missingIng:e.missedIngredientCount,toggleStarred:i,starredRecipes:a})},e.id)}));return Object(D.jsx)(D.Fragment,{children:0===c.length?Object(D.jsx)(et,{}):Object(D.jsxs)(m.a,{container:!0,columns:{xs:4,md:9,lg:16,xl:25},spacing:2,p:2,children:[c,Object(D.jsx)(it,{desktop:n})]})})},ot=n(238),st=n(239),dt=n(281),lt=n(247),jt=n(282),bt=n(256),ut=n(280),pt=function(e){var t=e.filterBy,n=e.handleFilterChange,r=Object(F.a)(bt.a)({"&.MuiToggleButtonGroup-root":{display:"flex",flexFlow:"row wrap",marginTop:"15px",marginBottom:"20px"},"& .MuiToggleButtonGroup-grouped:not(:last-of-type)":{border:"1px solid",borderRadius:"30px"},"& .MuiToggleButtonGroup-grouped:not(:first-of-type)":{border:"1px solid",borderRadius:"30px"}}),a=Object(F.a)(ut.a)((function(e){var t=e.theme;return{"&.MuiToggleButton-root":{padding:"0px 10px",marginRight:"5px",marginTop:"5px","&:hover":{backgroundColor:"rgba(127, 215, 195, 0.1);"},"&.Mui-selected":{backgroundColor:"".concat(t.palette.primary.main),border:"1px solid transparent","&:hover":{backgroundColor:"rgba(127, 215, 195, 0.8);"}}}}}));return Object(D.jsx)(D.Fragment,{children:t.map((function(e){return Object(D.jsxs)(z.a,{borderTop:"2px solid",borderColor:"primary.main",position:"relative",children:[Object(D.jsx)(L.a,{variant:"body2",component:"h2",color:"primary",pr:1,bgcolor:"background.default",position:"absolute",top:"-10px",children:e.name.toUpperCase()}),Object(D.jsx)(r,{value:e.activeFilter,exclusive:!0,onChange:function(t){return n(t,e.name)},color:"secondary",children:e.filters.map((function(e){return Object(D.jsx)(a,{value:e,sx:{color:"primary.main"},children:e},e)}))})]},e.name)}))})},xt=function(e){var t=e.handleFilterChange,n=e.mealType,r=e.diet,a=void 0===n&&void 0===r,i=[{name:"meal type",activeFilter:n,filters:["main course","breakfast","soup","salad","dessert","drink","side dish"]},{name:"dietary options",activeFilter:r,filters:["gluten free","ketogenic","vegetarian","vegan","pescetarian","paleo"]}],c=Object(F.a)(dt.a)((function(e){var t=e.theme,n=a?t.palette.text.secondary:t.palette.primary.main;return{"&.MuiAccordionSummary-root":{flexDirection:"row-reverse",marginTop:"10px",width:"fit-content"},"& .MuiAccordionSummary-content":{paddingLeft:"10px"},"& .MuiAccordionSummary-expandIconWrapper":{padding:"0px 10px",color:"".concat(n),border:"2px solid ".concat(n),borderRadius:"10px","&.Mui-expanded":{transform:"none",color:"".concat(t.palette.secondary.main),backgroundColor:"".concat(n)}}}}));return Object(D.jsxs)(lt.a,{square:!0,disableGutters:!0,sx:{boxShadow:"none",backgroundColor:"background.default"},children:[Object(D.jsx)(c,{expandIcon:a?Object(D.jsx)(ot.a,{}):Object(D.jsx)(st.a,{}),children:a?Object(D.jsx)(L.a,{sx:{color:"text.secondary"},children:"no filtered results"}):Object(D.jsx)(L.a,{color:"primary",children:"showing filtered results"})}),Object(D.jsx)(jt.a,{children:Object(D.jsx)(pt,{filterBy:i,handleFilterChange:t})})]})},mt=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.mediaqueries})).desktop,n=Object(s.c)((function(e){return e.myPantry})),a=Object(r.useState)(),i=Object(l.a)(a,2),c=i[0],d=i[1],j=Object(r.useState)(),b=Object(l.a)(j,2),u=b[0],p=b[1],x=Object(r.useState)(20),m=Object(l.a)(x,2),h=m[0],O=m[1],g=Object(r.useState)(!1),f=Object(l.a)(g,2),y=f[0],v=f[1],k=Object(r.useState)([]),C=Object(l.a)(k,2),I=C[0],w=C[1];Object(r.useEffect)((function(){n.length>0&&Te(n.toString(),c,u,h.toString(),(function(t){if(402===t)return e({type:"API_LIMIT",payload:!0});t.length%20!==0&&v(!0),t.length%20===0&&v(!1),e({type:"API_LIMIT",payload:!1}),w(t)}))}),[n,h,e,c,u]);var S=0!==I.length||void 0===c&&void 0===u?Object(D.jsx)(Ne.a,{dataLength:I,next:function(){100!==h&&!0!==y&&O(h+20)},hasMore:!y,children:Object(D.jsx)(ct,{recipes:I,desktop:t})}):Object(D.jsx)(He,{filtered:!0});return Object(D.jsxs)(D.Fragment,{children:[0===n.length?Object(D.jsx)(He,{}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(xt,{handleFilterChange:function(e,t){return"meal type"===t?c===e.target.value?d(void 0):d(e.target.value):"dietary options"===t?u===e.target.value?p(void 0):p(e.target.value):void 0},mealType:c,diet:u}),S]}),Object(D.jsx)(o.a,{})]})},ht=function(){var e=Object(s.c)((function(e){return e.starredRecipes}));return Object(D.jsxs)(D.Fragment,{children:[0===e.length?Object(D.jsx)(He,{starred:!0}):Object(D.jsx)(ct,{recipes:e}),Object(D.jsx)(o.a,{})]})},Ot=n(257),gt=n(221),ft=function(e){var t=e.handleTransition,n=e.image;return Object(D.jsx)(m.a,{container:!0,item:!0,justifyContent:"flex-end",alignItems:"flex-start",minHeight:"30vh",bgcolor:"text.secondary",borderBottom:"5px solid",borderColor:"primary.main",sx:{background:"url(".concat(n,") no-repeat"),backgroundSize:"cover",backgroundPosition:"center"},children:Object(D.jsx)(rt.a,{"aria-label":"close",color:"primary",onClick:t,sx:{backgroundColor:"secondary.main",mr:2,mt:3,p:.5},children:Object(D.jsx)(K.a,{color:"primary",sx:{fontSize:40}})})})},yt=function(e){var t=[{name:"GF",alt:"Gluten Free",prop:e.glutenFree},{name:"DF",alt:"Dairy Free",prop:e.dairyFree},{name:"V",alt:"Vegetarian",prop:e.vegetarian},{name:"VE",alt:"Vegan",prop:e.vegan}],n={border:"2px solid",borderColor:"text.secondary",backgroundColor:"transparent",color:"text.secondary",fontWeight:700,fontSize:12,width:28,height:28};return Object(D.jsx)(m.a,{container:!0,item:!0,spacing:1,children:t.map((function(e){return Object(D.jsx)(m.a,{item:!0,children:Object(D.jsx)(Qe.a,{title:e.alt,enterDelay:300,leaveDelay:200,enterTouchDelay:0,children:Object(D.jsx)(Ie.a,{alt:e.alt,sx:e.prop?Object(we.a)(Object(we.a)({},n),{},{borderColor:"primary.main",color:"primary.main"}):n,children:e.name})})},e.name)}))})},vt=n(240),kt=n(241),Ct=function(e){var t=e.readyInMinutes,n=e.healthScore,r=[{id:1,text:"".concat(t," MINUTES"),color:"primary.main",icon:Object(D.jsx)(vt.a,{fontSize:"large",color:"primary"})},{id:2,text:"HEALTH SCORE ".concat(n),color:"#E06E9C",icon:Object(D.jsx)(kt.a,{fontSize:"large",sx:{color:"#E06E9C"}})}];return Object(D.jsx)(m.a,{container:!0,item:!0,justifyContent:"space-between",children:r.map((function(e){return Object(D.jsxs)(m.a,{container:!0,item:!0,alignItems:"center",wrap:"nowrap",width:"fit-content",children:[e.icon,Object(D.jsx)(L.a,{variant:"body2",fontWeight:700,pl:.5,sx:{color:e.color},children:e.text})]},e.id)}))})},It=function(e){var t=e.title,n=e.readyInMinutes,r=e.healthScore,a=e.glutenFree,i=e.dairyFree,c=e.vegetarian,o=e.vegan;return Object(D.jsxs)(m.a,{container:!0,item:!0,pt:2.5,children:[Object(D.jsx)(Ct,{readyInMinutes:n,healthScore:r}),Object(D.jsx)(L.a,{variant:"h3",component:"h2",id:"recipe-details-title",pt:5,pb:1,fontWeight:700,children:t}),Object(D.jsx)(yt,{glutenFree:a,dairyFree:i,vegetarian:c,vegan:o})]})},wt=function(e){var t=e.extendedIngredients,n=e.unit,r=e.servings,a=e.serving,i=t.map((function(e){var t=e.measures.metric.unitShort,i=(e.measures.metric.amount/r*a).toFixed(2),c=e.measures.us.unitShort,o=(e.measures.us.amount/r*a).toFixed(2);return Object(D.jsx)(G.a,{disablePadding:!0,children:Object(D.jsx)(V.a,{primary:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(L.a,{fontWeight:700,display:"inline",children:"metric"===n?i+" "+t:o+" "+c}),Object(D.jsxs)(L.a,{display:"inline",children:[" ",e.name]})]})})},e.id)}));return Object(D.jsx)(B.a,{dense:!0,children:i})},St=n(242),Ft=n(243),Et=function(e){var t=e.serving,n=e.handleServing,r=e.addServing,a=e.removeServing,i=Object(h.a)(Oe.a)((function(e){var t=e.theme.palette.primary.main;return{"& .MuiOutlinedInput-root":{width:"100px","& input":{padding:"5px 0",textAlign:"center"},"& fieldset":{borderWidth:"2px",borderRadius:"30px",borderColor:t},"&:hover fieldset":{borderColor:t}},"& .MuiInputLabel-root":{color:t}}})),c=Object(D.jsx)(ge.a,{position:"end",children:Object(D.jsx)($.a,{id:"add","aria-label":"add serving",edge:"end",sx:{p:0},onClick:r,children:Object(D.jsx)(St.a,{color:"primary"})})}),o=Object(D.jsx)(ge.a,{position:"start",children:Object(D.jsx)($.a,{id:"remove","aria-label":"remove serving",edge:"start",sx:{p:0},onClick:a,children:Object(D.jsx)(Ft.a,{color:"primary"})})});return Object(D.jsx)(i,{id:"servings-input",label:"Servings",color:"primary",value:t,onChange:n,autoFocus:!0,InputLabelProps:{shrink:!0},InputProps:{startAdornment:o,endAdornment:c},inputProps:{inputMode:"numeric"}})},Rt=function(e){var t=e.handleUnitChange,n=e.unit,r=Object(h.a)(bt.a)((function(e){return{"& .MuiToggleButtonGroup-grouped":{border:"2px solid",borderColor:e.theme.palette.primary.main,borderRadius:"30px",padding:"4px 10px"}}}));return Object(D.jsx)(r,{value:n,exclusive:!0,onChange:t,"aria-label":"unit options",color:"primary",size:"small",children:[{name:"us",aria:"us units"},{name:"metric",aria:"metric units"}].map((function(e){return Object(D.jsx)(ut.a,{value:e.name,"aria-label":e.aria,sx:{color:"text.primary"},children:e.name},e.name)}))})},Mt=function(e){var t=e.extendedIngredients,n=e.servings,a=Object(r.useState)(n),i=Object(l.a)(a,2),c=i[0],o=i[1],s=Object(r.useState)("us"),d=Object(l.a)(s,2),j=d[0],b=d[1];return Object(D.jsxs)(m.a,{container:!0,item:!0,direction:"column",pt:5,children:[Object(D.jsxs)(m.a,{container:!0,item:!0,justifyContent:"space-between",alignItems:"center",pb:2,children:[Object(D.jsx)(Et,{serving:c,handleServing:function(e){var t=e.target.value;(""===t||/^[0-9\b]+$/.test(t))&&o(t)},addServing:function(){return o(c+1)},removeServing:function(){c>1&&o(c-1)}}),Object(D.jsx)(Rt,{handleUnitChange:function(e,t){null!==t&&b(t)},unit:j})]}),Object(D.jsx)(L.a,{variant:"h4",component:"h2",color:"primary",fontWeight:700,children:"Ingredients"}),Object(D.jsx)(wt,{extendedIngredients:t,unit:j,servings:n,serving:c})]})},Tt=function(e){var t=e.analyzedInstructions.map((function(e){var t=e.steps.map((function(e){return Object(D.jsx)(G.a,{disablePadding:!0,children:Object(D.jsx)(V.a,{primary:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(L.a,{fontWeight:700,display:"inline",children:[e.number,". "]}),Object(D.jsx)(L.a,{display:"inline",children:e.step})]})})},e.number)}));return""===e.name?Object(D.jsx)(B.a,{dense:!0,children:t},"main list"):Object(D.jsxs)(m.a,{container:!0,item:!0,children:[Object(D.jsx)(L.a,{variant:"h6",component:"h3",color:"primary",fontWeight:700,children:e.name}),Object(D.jsx)(B.a,{dense:!0,children:t})]},e.name)}));return Object(D.jsxs)(m.a,{container:!0,item:!0,direction:"column",pt:3,children:[Object(D.jsx)(L.a,{variant:"h4",component:"h2",color:"primary",fontWeight:700,children:"Instructions"}),t,Object(D.jsxs)(m.a,{container:!0,item:!0,direction:"column",alignItems:"center",pt:3.5,children:[Object(D.jsx)(O.a,{component:"img",sx:{height:35,width:52},src:re,alt:"whatsinmypantry smiling taco logo"}),Object(D.jsx)(L.a,{variant:"h3",component:"p",color:"primary",fontWeight:700,children:"bon app\xe9tit!"})]})]})},Dt=function(e){var t=e.sourceName,n=e.sourceUrl;return Object(D.jsx)(m.a,{item:!0,pt:3.5,mb:2,children:Object(D.jsxs)(L.a,{variant:"body1",component:"p",display:"flex",alignItems:"center",sx:{color:"text.secondary"},children:["COPYRIGHT ",Object(D.jsx)(te.a,{fontSize:"small",sx:{marginX:.5}}),"Recipe by",Object(D.jsx)(ne.a,{href:n,target:"_blank",underline:"none",sx:{ml:.5},children:t})]})})},At=function(){var e=Object(o.h)(),t=Object(s.b)(),n=Object(s.c)((function(e){return e.mediaqueries})).desktop,a=Object(r.useState)(!0),i=Object(l.a)(a,2),c=i[0],d=i[1],j=function(){d(!1),setTimeout(u,800)},b=Object(o.g)("/recipes/*"),u=function(){if(b)return e("/recipes");e("/starred")},p=Object(o.i)().id,x=Object(r.useState)(!1),h=Object(l.a)(x,2),O=h[0],g=h[1],f=Object(r.useState)([]),y=Object(l.a)(f,2),v=y[0],k=y[1],C=v.image,I=v.title,w=v.readyInMinutes,S=v.healthScore,F=v.glutenFree,E=v.dairyFree,R=v.vegan,M=v.vegetarian,T=v.extendedIngredients,A=v.servings,P=v.analyzedInstructions,L=v.sourceName,z=v.sourceUrl;Object(r.useEffect)((function(){De(p,(function(e){return 402===e?t({type:"API_LIMIT",payload:!0}):(t({type:"API_LIMIT",payload:!1}),void 0===e?g(!0):(g(!1),void k(e)))}))}),[t,p]);var W=0===v.length?Object(D.jsx)(et,{}):Object(D.jsxs)(m.a,{container:!0,children:[Object(D.jsx)(m.a,{container:!0,item:!0,children:Object(D.jsx)(ft,{handleTransition:j,image:C})}),Object(D.jsxs)(m.a,{container:!0,item:!0,direction:"column",alignItems:"stretch",pl:2.5,pr:2.5,children:[Object(D.jsx)(It,{title:I,readyInMinutes:w,healthScore:S,glutenFree:F,dairyFree:E,vegetarian:M,vegan:R}),Object(D.jsx)(Mt,{extendedIngredients:T,servings:A}),Object(D.jsx)(Tt,{analyzedInstructions:P}),Object(D.jsx)(Dt,{sourceName:L,sourceUrl:z})]})]});return Object(D.jsx)(Ot.a,{"aria-labelledby":"recipe-details-title",open:c,onClose:j,TransitionComponent:gt.a,TransitionProps:{direction:"up",timeout:1e3},fullScreen:!n,hideBackdrop:!n,children:O?Object(D.jsx)(se,{}):W})},Pt=function(){var e=Object(s.b)(),t=Object(d.a)("(min-width:700px)"),n=Object(d.a)("(min-width:1200px)");Object(r.useEffect)((function(){e({type:"MEDIAQUERY",payload:{desktop:t,desktopLg:n}})}),[t,n,e]);var a=Object(D.jsx)(o.b,{path:":id",element:Object(D.jsx)(At,{})});return Object(D.jsxs)(o.d,{children:[Object(D.jsxs)(o.b,{path:"/",element:Object(D.jsx)(Ge,{}),children:[!t&&Object(D.jsx)(o.b,{index:!0,element:Object(D.jsx)(Be,{})}),Object(D.jsx)(o.b,{path:"recipes",element:Object(D.jsx)(mt,{}),children:a}),Object(D.jsx)(o.b,{path:"starred",element:Object(D.jsx)(ht,{}),children:a}),t&&Object(D.jsx)(o.b,{path:"about",element:Object(D.jsx)(ae,{})})]}),Object(D.jsx)(o.b,{path:"*",element:Object(D.jsx)(se,{})})]})},Lt=n(113),zt=n(55),Wt=n(93),_t=n(114),Bt=n.n(_t),Gt=n(19);var Nt={key:"whatsinmypantry",storage:Bt.a,blacklist:["apiLimitReached","mediaqueries"]},Ht=Object(Wt.a)(Nt,(function(e,t){switch(t.type){case"ADD_INGREDIENT":return Object(we.a)(Object(we.a)({},e),{},{myPantry:[].concat(Object(Gt.a)(e.myPantry),[t.payload])});case"REMOVE_INGREDIENT":return e.myPantry.splice(t.payload,1),Object(we.a)(Object(we.a)({},e),{},{myPantry:Object(Gt.a)(e.myPantry)});case"ADD_STARRED":return Object(we.a)(Object(we.a)({},e),{},{starredRecipes:[].concat(Object(Gt.a)(e.starredRecipes),[t.payload])});case"REMOVE_STARRED":return e.starredRecipes.splice(t.payload,1),Object(we.a)(Object(we.a)({},e),{},{starredRecipes:Object(Gt.a)(e.starredRecipes)});case"API_LIMIT":return Object(we.a)(Object(we.a)({},e),{},{apiLimitReached:t.payload});case"MEDIAQUERY":return Object(we.a)(Object(we.a)({},e),{},{mediaqueries:t.payload});case"THEME_MODE":return Object(we.a)(Object(we.a)({},e),{},{darkMode:t.payload});default:return e}})),Vt=Object(zt.b)(Ht,{myPantry:[],starredRecipes:[],apiLimitReached:!1,mediaqueries:{},darkMode:!1}),Ut=Object(Wt.b)(Vt);c.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(s.a,{store:Vt,children:Object(D.jsx)(Lt.a,{loading:Object(D.jsx)(et,{}),persistor:Ut,children:Object(D.jsx)(T.a,{basename:"whatsinmypantry",children:Object(D.jsx)(Pt,{})})})})}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.edf5ad64.chunk.js.map