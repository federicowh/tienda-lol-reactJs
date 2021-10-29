(this["webpackJsonptienda-lol"]=this["webpackJsonptienda-lol"]||[]).push([[0],{25:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(26),s=c.n(i),o=(c(25),c(29)),r=c(8),l=c(1),j=Object(n.createContext)(),d=JSON.parse(localStorage.getItem("cart"))||[],b=function(e){var t=e.children,c=Object(n.useState)(d),a=Object(r.a)(c,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(i))}),[i]),Object(l.jsx)(j.Provider,{value:{cart:i,addToCart:function(e){s([].concat(Object(o.a)(i),[e]))},removeItem:function(e){var t=i.filter((function(t){return t.id!==e}));s(t)},deleteAll:function(){s([])},cartItemQuantity:function(){return i.reduce((function(e,t){return e+t.quantity}),0)},cartFinalPrice:function(){return i.reduce((function(e,t){return e+t.quantity*t.price}),0)},isInCart:function(e){return i.some((function(t){return t.id===e}))}},children:t})},m=Object(n.createContext)(),u=function(e){var t=e.children,c=Object(n.useState)(!1),a=Object(r.a)(c,2),i=a[0],s=a[1];return Object(l.jsx)(m.Provider,{value:{loading:i,setLoading:s},children:t})},x=c(6),O=c(4),h=(c(35),function(e){var t=e.title,c=e.subTitle;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"welcome",children:Object(l.jsxs)("div",{className:"welcomeText",children:[Object(l.jsxs)("h1",{className:"welcomeTitle",children:[" ",t," "]}),Object(l.jsxs)("p",{className:"welcomeSubTitle",children:[" ",c," "]})]})})})}),p=Object(n.createContext)(),g=function(e){var t=e.children,c=Object(n.useState)(!1),a=Object(r.a)(c,2),i=a[0],s=a[1];return Object(l.jsx)(p.Provider,{value:{isAuthenticated:i,setIsAuthenticated:s},children:t})},f=(c(36),function(){var e=Object(n.useContext)(p),t=e.isAuthenticated,c=e.setIsAuthenticated,a=Object(n.useContext)(j).cartItemQuantity;return Object(l.jsx)("div",{className:"cartWidget",children:t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("box-icon",{onClick:function(){c(!1)},name:"log-out-circle",size:"md",animation:"tada-hover",style:{cursor:"pointer",marginRight:"50px"}}),Object(l.jsx)(x.b,{to:"/cart",children:Object(l.jsx)("box-icon",{type:"solid",name:"cart",size:"md",animation:"tada-hover",style:{cursor:"pointer",display:0===a()?"none":"block"}})}),Object(l.jsx)("span",{className:"itemQuantity",style:{display:0===a()?"none":"block"},children:a()})]}):Object(l.jsx)("box-icon",{onClick:function(){alert("Porfavor, para ver tu carrito clickea en Login o Registrate")},name:"user-circle",size:"md",animation:"tada-hover",style:{cursor:"pointer",marginRight:"50px"}})})}),v=(c(44),function(){var e=Object(n.useContext)(p).isAuthenticated,t={menuNotActive:e?{color:"#EBA272",textDecoration:"overline 2px solid #EBA272"}:{color:"black",textDecoration:"none"}};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{className:e?"navbar":"navbarNotAllowed",children:[Object(l.jsx)(x.c,{activeStyle:t.menuNotActive,exact:!0,to:"/tienda-lol-reactJs",children:"Inicio"}),Object(l.jsx)(x.c,{activeStyle:t.menuNotActive,exact:!0,to:"/productos/Figuras",children:"Figuras"}),Object(l.jsx)(x.c,{activeStyle:t.menuNotActive,exact:!0,to:"/productos/Remeras",children:"Remeras"}),Object(l.jsx)(x.c,{activeStyle:t.menuNotActive,exact:!0,to:"/productos/Camperas",children:"Camperas"}),Object(l.jsx)(x.c,{activeStyle:t.menuNotActive,exact:!0,to:"/contacto",children:"Contacto"})]})})}),N=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{title:"Bienvenido a la Tienda",subTitle:"Aqu\xed podr\xe1s encontrar productos del videojuego League of Legends"}),Object(l.jsx)(f,{}),Object(l.jsx)(v,{})]})},C=(c(45),function(){var e=Object(n.useState)(new Date),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){setTimeout((function(){a(new Date)}),1e3)}),[c]),Object(l.jsx)("div",{className:"clock",children:Object(l.jsx)("h3",{children:c.toLocaleString()})})}),y=c(12),I=(c(46),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"loader",children:Object(l.jsxs)("div",{className:"loader-inner",children:[Object(l.jsx)("div",{className:"loader-line-wrap",children:Object(l.jsx)("div",{className:"loader-line"})}),Object(l.jsx)("div",{className:"loader-line-wrap",children:Object(l.jsx)("div",{className:"loader-line"})}),Object(l.jsx)("div",{className:"loader-line-wrap",children:Object(l.jsx)("div",{className:"loader-line"})}),Object(l.jsx)("div",{className:"loader-line-wrap",children:Object(l.jsx)("div",{className:"loader-line"})}),Object(l.jsx)("div",{className:"loader-line-wrap",children:Object(l.jsx)("div",{className:"loader-line"})})]})})})}),w=(c(47),function(e){var t=e.items,c=void 0===t?[]:t;return Object(l.jsxs)("div",{className:"productsContainer",children:[Object(l.jsx)("h2",{className:"productsTitle",children:"Nuestros Productos"}),Object(l.jsx)("div",{className:"itemListContainer",children:c.map((function(e){return Object(l.jsxs)("div",{className:"itemList",children:[Object(l.jsx)("h2",{className:"itemTitle",children:e.name}),Object(l.jsx)("img",{className:"itemImage",src:e.img}),Object(l.jsxs)("p",{className:"itemPrice",children:["$ ",e.price]}),Object(l.jsxs)("div",{className:"itemBuy",children:[Object(l.jsx)(x.b,{style:{textDecoration:"none",color:"white"},to:"/detail/".concat(e.id),children:Object(l.jsx)("span",{className:"buyNow",children:"Ver m\xe1s"})}),Object(l.jsx)(x.b,{style:{textDecoration:"none",color:"white"},to:"/detail/".concat(e.id),children:Object(l.jsx)("span",{className:"addToCart",children:"Agregar al carrito"})})]})]},e.id)}))})]})}),k=c(24),A=(c(58),k.a.initializeApp({apiKey:"AIzaSyBQRFt42IiJdqyXmd99bWCdupTE5GZIhZI",authDomain:"tienda-lol-reactjs.firebaseapp.com",projectId:"tienda-lol-reactjs",storageBucket:"tienda-lol-reactjs.appspot.com",messagingSenderId:"228513969280",appId:"1:228513969280:web:8652dc2aa8dfd868f92265"})),F=function(){return k.a.firestore(A)},S=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useContext)(m),s=i.loading,o=i.setLoading,j=Object(O.h)().categoryId;return Object(n.useEffect)((function(){o(!0);var e=F();(j?e.collection("products").where("category","==",j):e.collection("products")).get().then((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));a(t)})).catch((function(e){return console.log(e)})).finally((function(){o(!1)}))}),[j,o]),Object(l.jsx)(l.Fragment,{children:s?Object(l.jsx)(I,{}):Object(l.jsx)(w,{items:c})})},T=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(C,{}),Object(l.jsx)(S,{})]})},L=(c(49),function(e){var t=e.quantity,c=e.modifyQuantity,n=e.max,a={btnMin:"".concat(t<=1?"itemBtnActived":""),btnMax:"".concat(t===n?"itemBtnActived":"")};return Object(l.jsxs)("div",{className:"itemCountContainer",children:[Object(l.jsx)("button",{onClick:function(){t>1&&c(t-1)},className:a.btnMin,children:"-"}),Object(l.jsx)("span",{children:t}),Object(l.jsx)("button",{onClick:function(){t<n&&c(t+1)},className:a.btnMax,children:"+"})]})}),P=function(e){var t=e.name,c=e.img,n=e.img1,a=e.img2,i=e.img3;return Object(l.jsxs)("div",{className:"itemShow",children:[Object(l.jsx)("img",{id:"newImg",className:"itemImg",src:c,alt:t}),Object(l.jsxs)("div",{className:"itemShowNav",children:[Object(l.jsx)("img",{className:"subItemImg",src:c,alt:t}),Object(l.jsx)("img",{className:"subItemImg",src:n,alt:t}),Object(l.jsx)("img",{className:"subItemImg",src:a,alt:t}),Object(l.jsx)("img",{className:"subItemImg",src:i,alt:t})]})]})},B=(c(50),function(e){var t=e.id,c=e.name,a=e.price,i=e.img,s=e.img1,o=e.img2,d=e.img3,b=e.description,m=e.category,u=e.stock,h={id:t,name:c,img:i,img1:s,img2:o,img3:d,description:b,category:m,stock:u},p=Object(n.useContext)(j).removeItem,g=Object(O.g)(),f=g.goBack,v=g.push,N=Object(n.useContext)(j),C=N.addToCart,I=N.isInCart,w=Object(n.useState)(0),k=Object(r.a)(w,2),A=k[0],F=k[1],S={btnAddToCart:I(t)?"itemBtnActive":"itemBtn"};return Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)(P,Object(y.a)({},h)),Object(l.jsxs)("div",{className:"itemInfo",children:[Object(l.jsx)("h2",{children:c}),Object(l.jsxs)("p",{children:["Descripci\xf3n: ",b]}),Object(l.jsxs)("p",{children:["Categor\xeda: ",m]}),Object(l.jsxs)("h4",{children:["Precio: $",a]}),Object(l.jsxs)("div",{className:S.btnAddToCart,children:[Object(l.jsx)(L,{quantity:A,modifyQuantity:F,max:u}),Object(l.jsx)("button",{onClick:function(){A>0&&C({id:t,name:c,price:a,category:m,img:i,quantity:A})},children:"Agregar al Carrito"})]}),I(t)&&Object(l.jsxs)("div",{className:"itemBtn",children:[Object(l.jsx)("button",{onClick:function(){return p(t)},children:"Cancelar compra"}),Object(l.jsx)(x.b,{style:{textDecoration:"none",color:"black"},to:"/cart",children:Object(l.jsx)("button",{children:"Finalizar compra"})})]}),Object(l.jsxs)("div",{className:"itemBtn",children:[Object(l.jsx)("button",{onClick:function(){return f()},children:"Volver atr\xe1s"}),Object(l.jsx)("button",{onClick:function(){return v("/tienda-lol-reactJs")},children:"Volver al Inicio"})]})]})]})}),E=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useContext)(m),s=i.loading,o=i.setLoading,j=Object(O.h)().itemId;return Object(n.useEffect)((function(){o(!0),F().collection("products").doc(j).get().then((function(e){a(Object(y.a)({id:e.id},e.data()))})).catch((function(e){return console.log(e)})).finally((function(){o(!1)}))}),[j,o]),Object(l.jsx)("div",{children:s?Object(l.jsx)(I,{}):Object(l.jsx)(B,Object(y.a)({},c))})},R=function(){var e=Object(n.useContext)(j),t=e.cart,c=e.removeItem;return t.map((function(e){return Object(l.jsxs)("div",{className:"itemCartFinal",children:[Object(l.jsx)("img",{src:e.img,alt:e.name}),Object(l.jsx)("h3",{children:e.name}),Object(l.jsxs)("p",{children:["Cantidad: ",e.quantity," "]}),Object(l.jsxs)("p",{children:["Precio: $",e.price*e.quantity," "]}),Object(l.jsx)("span",{onClick:function(){return c(e.id)},children:"Quitar Producto"})]})}))},D=function(){return Object(l.jsxs)("div",{className:"shoppingCartEmpty",children:[Object(l.jsx)("h3",{children:"No tienes productos en tu carrito."}),Object(l.jsxs)(x.b,{style:{textDecoration:"none",color:"white"},to:"/tienda-lol-reactJs",children:[" ",Object(l.jsx)("span",{children:"Comprar Productos"})," "]})]})},z=function(){var e=Object(n.useContext)(j),t=e.deleteAll,c=e.cartFinalPrice;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h2",{children:["Precio Total: $",c()]}),Object(l.jsxs)("div",{className:"shoppingCartButtons",children:[Object(l.jsx)("span",{onClick:t,children:"Vaciar Carrito"}),Object(l.jsx)(x.b,{style:{textDecoration:"none",color:"white"},to:"/tienda-lol-reactJs",children:Object(l.jsx)("span",{className:"buyNow",children:"Seguir comprando"})})]})]})},q=(c(51),function(){var e=Object(n.useContext)(j).cart;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(C,{}),Object(l.jsx)("div",{className:"shoppingCart",children:0===e.length?Object(l.jsx)(D,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Resumen de compra"}),Object(l.jsx)(R,{}),Object(l.jsx)(z,{})]})})]})}),J=function(e){var t=e.contactInfo;return Object(l.jsxs)("div",{className:"contact-info",children:[Object(l.jsx)("h3",{className:"title",children:"Contacta con Nosotros."}),Object(l.jsx)("p",{className:"text",children:t}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("div",{className:"information",children:[Object(l.jsx)("box-icon",{name:"map",type:"solid",color:"white"}),Object(l.jsx)("p",{children:"Los \xc1ngeles, California, EE.UU"})]}),Object(l.jsxs)("div",{className:"information",children:[Object(l.jsx)("box-icon",{name:"envelope-open",color:"white"}),Object(l.jsx)("p",{children:"support@riotgames.com"})]}),Object(l.jsxs)("div",{className:"information",children:[Object(l.jsx)("box-icon",{name:"phone",color:"white"}),Object(l.jsx)("p",{children:"424-231-1111"})]})]}),Object(l.jsxs)("div",{className:"social-media",children:[Object(l.jsx)("p",{children:"Conecta con nosotros :"}),Object(l.jsxs)("div",{className:"social-icons",children:[Object(l.jsx)("i",{children:Object(l.jsx)("box-icon",{type:"logo",name:"facebook-circle",color:"white"})}),Object(l.jsx)("i",{children:Object(l.jsx)("box-icon",{name:"twitter",type:"logo",color:"white"})}),Object(l.jsx)("i",{children:Object(l.jsx)("box-icon",{name:"instagram",type:"logo",color:"white"})}),Object(l.jsx)("i",{children:Object(l.jsx)("box-icon",{name:"linkedin",type:"logo",color:"white"})})]})]})]})},G=c(18),Q=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),c=t[0],a=t[1],i=function(e){a(Object(y.a)(Object(y.a)({},c),{},Object(G.a)({},e.target.name,e.target.value)))};return Object(l.jsx)("div",{className:"contact-form",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(l.jsx)("h3",{className:"title",children:"Dejanos un mensaje"}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("input",{type:"text",name:"name",className:"input",placeholder:"Nombre",value:c.name,onChange:i}),0===c.name.length&&Object(l.jsx)("small",{children:"Este campo es obligatorio."})]}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("input",{type:"email",name:"email",className:"input",placeholder:"Email",value:c.email,onChange:i}),0===c.email.length&&Object(l.jsx)("small",{children:"Este campo es obligatorio."})]}),Object(l.jsx)("div",{className:"input-container textarea",children:Object(l.jsx)("textarea",{name:"message",className:"input",placeholder:"Tu mensaje...",value:c.message,onChange:i})}),Object(l.jsx)("input",{type:"submit",value:"Enviar",className:"btn"})]})})},M=(c(52),function(){var e=Object(n.useContext)(m),t=e.loading,c=e.setLoading;Object(n.useEffect)((function(){c(!0),setTimeout((function(){return c(!1)}),2e3)}),[]);return Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)(I,{}):Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)(J,{contactInfo:"Riot Games, Inc. es una desarrolladora y editora de videojuegos y organizador de torneos de deportes electr\xf3nicos estadounidense. La empresa se fund\xf3 en septiembre de 2006 para desarrollar League of Legends, un videojuego multijugador de arena de batalla en l\xednea. Riot Games opera 14 ligas de deportes electr\xf3nicos a nivel internacional y el Campeonato del Mundo de League of Legends. Hasta mayo de 2018, Riot Games ten\xeda 24 oficinas en todo el mundo, en las que empleaba alrededor de 2500 personas."}),Object(l.jsx)(Q,{})]})})})}),V=(c(53),function(e){var t=e.footerTitle;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{className:"footerTitle",children:t})})}),$=c.p+"static/media/intelLogo.d8c5ddd1.png",U=c.p+"static/media/riot-games.0fe1faef.svg",W=c.p+"static/media/twitchLogo.46e4f1f3.webp",Z=(c(54),function(){return Object(l.jsxs)("div",{className:"sponsorsContainer",children:[Object(l.jsx)("img",{id:"intel",src:$,alt:"intel"}),Object(l.jsx)("img",{id:"twitch",src:U,alt:"twitch"}),Object(l.jsx)("img",{id:"riot",src:W,alt:"riot"}),Object(l.jsx)("box-icon",{name:"chevron-up-square",type:"solid",size:"md",animation:"fade-up-hover",color:"black",style:{cursor:"pointer"},onClick:function(){window.scrollTo(0,0)}})]})}),H=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(V,{footerTitle:"\u2122 & \xa9 2021 Riot Games, Inc. Todos los derechos reservados. Riot Games, League of Legends y PvP.net son marcas comerciales o marcas registradas de Riot Games, Inc."}),Object(l.jsx)(Z,{})]})},K=(c(55),function(){var e=Object(n.useContext)(p).setIsAuthenticated,t=function(){e(!0)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"logInContainer",children:[Object(l.jsx)("div",{className:"logInContainerLeft",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("h1",{children:"\xa1Ingresa con tu usuario!"}),Object(l.jsxs)("div",{className:"social-container",children:[Object(l.jsxs)("a",{href:"#",children:[" ",Object(l.jsx)("box-icon",{type:"logo",name:"facebook-circle",color:"black",size:"md",animation:"tada-hover"})," "]}),Object(l.jsxs)("a",{href:"#",children:[" ",Object(l.jsx)("box-icon",{name:"twitter",type:"logo",color:"black",size:"md",animation:"tada-hover"})," "]}),Object(l.jsxs)("a",{href:"#",children:[" ",Object(l.jsx)("box-icon",{name:"instagram",type:"logo",color:"black",size:"md",animation:"tada-hover"})," "]}),Object(l.jsxs)("a",{href:"#",children:[" ",Object(l.jsx)("box-icon",{name:"linkedin",type:"logo",color:"black",size:"md",animation:"tada-hover"})," "]})]}),Object(l.jsx)("p",{children:"o usa tu cuenta"}),Object(l.jsx)("input",{type:"name",placeholder:"Usuario",autoComplete:"off"}),Object(l.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",autoComplete:"off"}),Object(l.jsx)("span",{onClick:t,children:"Login"})]})}),Object(l.jsxs)("div",{className:"logInContainerRight",children:[Object(l.jsx)("h1",{children:"\xbfNo tienes cuenta?"}),Object(l.jsx)("p",{children:"Ingresa tus datos personales para crear la tuya."}),Object(l.jsx)("span",{onClick:t,children:"Registrate"})]})]})})});c(56);var X=function(){var e=Object(n.useContext)(p).isAuthenticated;return Object(l.jsx)(u,{children:Object(l.jsx)(b,{children:Object(l.jsx)(x.a,{children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(N,{}),Object(l.jsx)(O.d,{children:e?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O.b,{exact:!0,path:"/tienda-lol-reactJs",children:Object(l.jsx)(T,{})}),Object(l.jsx)(O.b,{exact:!0,path:"/productos/:categoryId",children:Object(l.jsx)(T,{})}),Object(l.jsx)(O.b,{exact:!0,path:"/detail/:itemId",children:Object(l.jsx)(E,{})}),Object(l.jsx)(O.b,{exact:!0,path:"/contacto",children:Object(l.jsx)(M,{})}),Object(l.jsx)(O.b,{exact:!0,path:"/cart",children:Object(l.jsx)(q,{})}),Object(l.jsx)(O.b,{path:"*",children:Object(l.jsx)(O.a,{to:"/tienda-lol-reactJs"})})]}):Object(l.jsx)(K,{})}),Object(l.jsx)(H,{})]})})})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{children:Object(l.jsx)(X,{})})}),document.getElementById("root")),Y()}},[[57,1,2]]]);
//# sourceMappingURL=main.34af7f7b.chunk.js.map