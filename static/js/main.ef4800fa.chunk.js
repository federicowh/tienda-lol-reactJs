(this["webpackJsonptienda-lol"]=this["webpackJsonptienda-lol"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(17),n=a.n(i),o=(a(16),a(20)),r=a(4),d=a(0),l=Object(c.createContext)(),b=JSON.parse(localStorage.getItem("cart"))||[],m=function(e){var t=e.children,a=Object(c.useState)(b),s=Object(r.a)(a,2),i=s[0],n=s[1];return Object(c.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(i))}),[i]),Object(d.jsx)(l.Provider,{value:{cart:i,addToCart:function(e){n([].concat(Object(o.a)(i),[e]))},removeItem:function(e){var t=i.filter((function(t){return t.id!==e}));n(t)},deleteAll:function(){n([])},cartItemQuantity:function(){return i.reduce((function(e,t){return e+t.quantity}),0)},cartFinalPrice:function(){return i.reduce((function(e,t){return e+t.quantity*t.price}),0)},isInCart:function(e){return i.some((function(t){return t.id===e}))}},children:t})},j=Object(c.createContext)(),u=function(e){var t=e.children,a=Object(c.useState)(!1),s=Object(r.a)(a,2),i=s[0],n=s[1];return Object(d.jsx)(j.Provider,{value:{loading:i,setLoading:n},children:t})},g=a(3),f=a(2),p=(a(26),a(27),function(e){var t=e.title,a=e.subTitle;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"welcome",children:Object(d.jsxs)("div",{className:"welcomeText",children:[Object(d.jsxs)("h1",{className:"welcomeTitle",children:[" ",t," "]}),Object(d.jsxs)("p",{className:"welcomeSubTitle",children:[" ",a," "]})]})})})}),h=(a(28),Object(c.createContext)()),x=function(e){var t=e.children,a=Object(c.useState)(!1),s=Object(r.a)(a,2),i=s[0],n=s[1];return Object(d.jsx)(h.Provider,{value:{isAuthenticated:i,setIsAuthenticated:n},children:t})},O=function(){var e=Object(c.useContext)(h),t=e.isAuthenticated,a=e.setIsAuthenticated,s=Object(c.useContext)(l).cartItemQuantity;return Object(d.jsx)("div",{className:"cartWidget",children:t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("box-icon",{onClick:function(){a(!1)},name:"log-out-circle",size:"md",animation:"tada-hover",style:{cursor:"pointer",marginRight:"50px"}}),Object(d.jsx)(g.b,{to:"/cart",children:Object(d.jsx)("box-icon",{type:"solid",name:"cart",size:"md",animation:"tada-hover",style:{cursor:"pointer"}})}),Object(d.jsx)("span",{className:"itemQuantity",children:s()})]}):Object(d.jsx)("box-icon",{onClick:function(){alert("Porfavor, para ver tu carrito clickea en Login o Registrate")},name:"user-circle",size:"md",animation:"tada-hover",style:{cursor:"pointer",marginRight:"50px"}})})},v=(a(37),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)(g.c,{activeStyle:{color:"#EBA272",textDecoration:"overline 2px solid #EBA272"},exact:!0,to:"/tienda-lol-reactJs",children:"Inicio"}),Object(d.jsx)(g.c,{activeStyle:{color:"#EBA272",textDecoration:"overline 2px solid #EBA272"},exact:!0,to:"/productos/Figuras",children:"Figuras"}),Object(d.jsx)(g.c,{activeStyle:{color:"#EBA272",textDecoration:"overline 2px solid #EBA272"},exact:!0,to:"/productos/Remeras",children:"Remeras"}),Object(d.jsx)(g.c,{activeStyle:{color:"#EBA272",textDecoration:"overline 2px solid #EBA272"},exact:!0,to:"/productos/Camperas",children:"Camperas"}),Object(d.jsx)(g.c,{activeStyle:{color:"#EBA272",textDecoration:"overline 2px solid #EBA272"},exact:!0,to:"/contacto",children:"Contacto"})]})})}),k=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{title:"Bienvenido a la Tienda",subTitle:"Aqu\xed podr\xe1s encontrar productos del videojuego League of Legends"}),Object(d.jsx)(O,{}),Object(d.jsx)(v,{})]})},_=(a(38),function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){setTimeout((function(){s(new Date)}),1e3)}),[a]),Object(d.jsx)("div",{className:"clock",children:Object(d.jsx)("h3",{children:a.toLocaleString()})})}),y=[{id:1,name:"Figura: Evelynn Unlocked",description:"Evelynn se convierte en la #12 de la serie Unlocked.",price:11500,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt7e10d0aacd337719/5f59440a572b123c0e093243/12-09-2019171309454_Riot_20Games_01.png?auto=webp&width=1903&quality=85",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt6f7f1ec9e2888a22/5f59440a3e2c44542b38d9c9/12-09-2019171309471_Riot_20Games_09.png",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt0eabd698e5a71875/5f59440b99e737658fb1c810/12-09-2019171320170_Riot_20Games_02.png",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt1699fb29d6c80ec8/5f59440bede171090f242fcb/12-09-2019171320173_Riot_20Games_03.png",category:"Figuras",stock:20},{id:2,name:"Figura: Ahri Unlocked",description:"Ahri es una vastaya conectada de forma innata al poder latente de Runaterra y es capaz de convertir la magia en orbes de energ\xeda pura. Le gusta jugar con su presa, manipulando sus emociones antes de devorar su esencia de vida. A pesar de su naturaleza depredadora, Ahri posee cierto sentido de la empat\xeda, ya que recibe recuerdos de cada alma que consume.",price:14500,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt2ccb7909760c15c1/5fc57b19fd99385ff6009fae/Ahri_00.png",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltca65bcb820e9ee4c/5fc57b2197f9f35d942efd39/Ahri_01.png",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt6e98af4693663d9d/5fc57b1809ed4c6f277f17c3/Ahri_03.png",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt9c3b0f04c6027cd7/5fc57b1c09ed4c6f277f17c7/Ahri_04.png",category:"Figuras",stock:20},{id:3,name:"Figura: Jinx Unlocked",description:"\xa1Jinx! \xa1De Jinx... a secas! Bah. No importa para nada en qu\xe9 lugar de la Grieta te encuentres, Jinx saldr\xe1 a por ti, y m\xe1s ahora que es la n\xfamero 7 de la l\xednea de figuras de Unlocked.",price:19999,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltf906a80c975e890b/5f594267fa91f32fa9f6996c/12-03-2018_2022_10_57_240_JINX-FRONT.png",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt8f4ee21370a6d88f/5f5942672dd06a2f7242febc/12-03-2018_2022_10_50_581_JINX-BOX_20copy.png",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltec2a471d6c37044e/5f594267ed0fba061fe831a5/12-03-2018_2022_10_50_568_JINX-BACK_20copy.png",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt35f22c3ed78168ab/5f59426861ea7d30ca5a2460/12-03-2018_2022_10_57_252_JINX-MUG_20copy.png",category:"Figuras",stock:20},{id:4,name:"Figura: Viego Unlocked",description:"Viego, soberano de un reino anta\xf1o desaparecido, muri\xf3 hace mil a\xf1os cuando su intento por devolverle la vida a su esposa desencaden\xf3 una cat\xe1strofe m\xe1gica conocida como la Ruina. Ahora, Viego, trasformado en un poderoso espectro atormentado por el anhelo obsesivo de recuperar a su reina muerta siglos atr\xe1s, se alza como el Rey Arruinado, capaz de controlar los letales Harrowing mientras barre Runaterra en busca de algo que pueda traer de vuelta a su amada alg\xfan d\xeda y destruye todo a su paso con la Niebla Negra que emana incesablemente de su cruel coraz\xf3n roto.",price:14500,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltf356d1ba8a98cd9e/60de2cef102c30485866235c/Riot_Sentinels_Promo-Ecomm-Portrait-Viego_Statue2560x3200.png",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt7ca2527fc22c1b9b/60de2cf69ec66d5af9c1af3b/Riot_Sentinels_Promo-Ecomm-Portrait-Viego_Statue-Back-2560x2560.png",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltf04369055401d629/60de2cf911bee665103e3d21/Riot_Sentinels_Promo-Ecomm-Portrait-Viego_Statue-Box-2560x2560.png",img3:"https://pbs.twimg.com/media/E5wE_EtVgAAPpxf?format=png&name=900x900",category:"Figuras",stock:20},{id:5,name:"Figura: Jhin Unlocked",description:"Con su pistola como pincel, la obra de Jhin muestra un arte brutal, tanto para las v\xedctimas como para los espectadores. Encuentra un cruel placer en la escenificaci\xf3n atroz, lo cual lo convierte en el candidato ideal para mandar el m\xe1s poderoso de los mensajes: el terror.",price:19999,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt05c98a139686660f/5fb5a9cc72a3526f28dbd226/Jhin_Wide_Callout.png",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltd01195437f6edf3f/5fb46daa46f622769b5ef00e/Jhin_00.png",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blte129b5ba1a84534f/5fb46dbf65bdd35303e032b7/Jhin_01.png",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt7a2d8298b3738f88/5fb46dc64e40cf53001f793b/Jhin_04.png",category:"Figuras",stock:20},{id:6,name:"Figura: Yasuo Unlocked",description:"La armon\xeda es una mentira para forzar la obediencia. Una espada, un prop\xf3sito. El caos acabar\xe1 con el orden. La edici\xf3n especial #11 de Yasuo heraldo del caos ya es Unlocked.",price:15999,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt3df729accc83df5f/5f59430bd6449530d09f121b/11-25-2019173656250_Yasuo-Front.png",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt0221b5c782d11632/5f59430b8f8e545a536d8367/11-25-2019173656233_Yasuo-Back.png",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt1b2d2e4fa62bf9dd/5f59430ce3d94f39696d4bcc/11-25-2019173701157_Yasuo-Right.png",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt546760d694cec852/5f59430d793a1a5b6f8cee3d/11-21-2019002914390_Yasuo-Box.png",category:"Figuras",stock:20},{id:7,name:"Figura: Riven Unlocked",description:"La armon\xeda someter\xe1 a la discordia. El amanecer acabar\xe1 con la oscuridad. El orden pondr\xe1 fin al caos. La edici\xf3n especial #10 de Riven guerrera del orden ya es Unlocked.",price:18999,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltcaa326d4bb8d10a3/5f5943032e429507af9befea/11-25-2019173938556_Riven-Front.png",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt77e3e0d06522aa7f/5f594304049e1762e40e32fd/11-25-2019173938543_Riven-Back.png",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt7fd559a63d0fb2ed/5f5943044b348974c2baf812/11-25-2019174007254_Riven-Detail_20Armor-2.png",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt83b259f481640988/5f594304afb23a07bc743ebe/11-25-2019174000439_Unlocked-Ecomm-3-riven.png",category:"Figuras",stock:20},{id:8,name:"Figura: Ekko Unlocked",description:"Consigue lo imposible a la primera, una y otra vez. Ekko ya es Unlocked.",price:13500,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt1bcb58d5fa50cf5e/5f594158d6449530d09f11ab/2018-09-07_2000_15_14.955_riot_games-2017-08-16_star_guardian_ekko_worlds_tibbers_3708_copy.png",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltc6fafdcabcb5cc4c/5f5941594f63e762e5602422/2018-09-07_2000_15_15.563_riot_games-2017-08-16_star_guardian_ekko_worlds_tibbers_3718_copy.png",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltd5adf550f604228f/5f59415906bc7e2e6e50ed03/2018-09-07_2000_15_16.187_riot_games-2017-08-16_star_guardian_ekko_worlds_tibbers_3730.png",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt9da4241ea62ecbcd/5f59415a049e1762e40e329b/2018-09-07_2000_15_16.788_riot_games-2017-08-16_star_guardian_ekko_worlds_tibbers_3726_copy.png",category:"Figuras",stock:20},{id:9,name:"Camiseta del Bar\xf3n Nashor Mundial 2021",description:"Celebra el Mundial 2021 con estilo gracias a esta camiseta holgada del Bar\xf3n Nashor y rinde tributo a uno de los monstruos m\xe1s poderosos de la Grieta del Invocador.",price:3e3,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltbe5450e5e68e2622/615387908ab9337efb4066a7/Unisex-Tee-Gold-front-v3-copy-2560x3200.png?auto=webp&width=970&quality=85",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltd8498d71c4a10ddd/6153879969b7947c1b3b00ac/Unisex-Tee-Gold-back-v3.jpg",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt1a4351177807d164/615387aad4224e7daaed3f84/Unisex-Tee-Gold-detail02-v1.jpg",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt95176af518021e3a/615387b1947b692d209b7f65/WORLDS-1_0397-2560x3200.jpg",category:"Remeras",stock:20},{id:10,name:"Camiseta del Mundial 2021",description:"Celebra el Mundial 2021 con estilo gracias a esta camiseta holgada unisex con un gran dise\xf1o serigrafiado de monta\xf1as en la gama de colores personalizada del Mundial.",price:3e3,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt428b173e6bac4a4a/61538750947b692d209b7f57/Unisex-Tee-Jade-front-v3-2560x3200.png?auto=webp&width=970&quality=85",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt2323f0671aa7e6ed/6153875bee502d0e1337f236/Unisex-Tee-Jade-back-v3.jpg",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt59cf7bbcee3f8fed/61538768f6002c7a00497b5a/Unisex-Tee-Jade-detail02-v3.jpg",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltc163c2a2c88b2a3d/6153877077d06a0c98360a7c/WORLDS-2_0685-2560x3200.jpg",category:"Remeras",stock:20},{id:11,name:"Camiseta de Kai'Sa K/DA",description:"Kai'Sa regresa para mejorar el equipo con sus conceptos de otro mundo y una inmaculada atenci\xf3n al detalle como bailarina principal y core\xf3grafa del equipo.",price:4e3,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blta797637d19f5e68d/609599bbc7224a492fd99025/Kai_sa_tee_00.png?auto=webp&width=970&quality=85",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltf76658173cc2e5b3/609599bfea72f24924bdfa7a/Kai_sa_tee_01.png",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt54bc1ec1aa1ce106/609599c2cf14c84a993df24b/Kai_sa_tee_03.png",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt808024564785321f/609599c501ff5a556925bf7e/Kai_sa_tee_04.png",category:"Remeras",stock:20},{id:12,name:"Camiseta de Fizz inspirada en c\xf3mics",description:"El Gamberro de las Mareas acude al rescate en esta camiseta inspirada en c\xf3mics. \xa1Tibur\xf3n!",price:4e3,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt713f5a2b039f7cad/5f5946b6793a1a5b6f8ceecf/2018-09-07_2000_19_50.841_2-0_1.png",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt5247a0fc0c5c57f0/5f5946b665e36f590c64f769/2018-09-07_2000_19_51.492_2-4.png",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blta22bd06f0f887f75/5f5946b75a02e758c950c014/2018-09-07_2000_19_52.331_2-1_1.png",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt492913346969800c/5f5946b808b63f2fb0c9d291/2018-09-07_2000_19_52.943_2-2_1.png",category:"Remeras",stock:20},{id:13,name:"Campera de peon\xeda del Mundial 2021",description:"La campera del Mundial de este a\xf1o combina un dise\xf1o sencillo con comodidad y ligereza que transmite calma dentro y fuera del juego.",price:12500,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt141283152ae37b52/6153841064c8007a9bded32b/Flight-Jacket-front-v2-copy-2560x3200.png?auto=webp&width=970&quality=85",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltaf59e8a7385169d9/6153841bf725af79f53fefe4/Flight-Jacket-front-L-v2.jpg",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltff91eeb36cd38501/615384290332d478b9d32d8d/Flight-Jacket-detail02-v1.jpg",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blte8e3b2424b424805/6153842c69b7947c1b3b0084/VALORANT-3_1875-2560x3200.jpg",category:"Camperas",stock:20},{id:14,name:"Sudadera con cremallera MAKE/BREAK del Mundial 2021",description:"Destruye a la competencia con estilo y comodidad gracias a la sudadera con cremallera pr\xe9mium MAKE/BREAK del Mundial.",price:8500,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltc067cabd12ef4ac3/6153868fd4e76c78b3d61637/Premium-ZipUp-Hoodie-front-v1-copy-2560x3200.png?auto=webp&width=970&quality=85",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltbdfd49ecc5bab9a7/6153869a77d06a0c98360a6e/Premium-ZipUp-Hoodie-front-L-v2.jpg",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blte3bc8ed962ecaf38/615386a98440e97ef5829de0/Premium-ZipUp-Hoodie-back-v1.jpg",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltc7c1754364b07269/615386b264c8007a9bded33d/Premium-ZipUp-Hoodie-detail02-v1.jpg",category:"Camperas",stock:20},{id:15,name:"Chaqueta del Mundial 2021",description:"Mejora tu juego diario con la chaqueta del Mundial 2021. El tejido, suave y transpirable, es adem\xe1s fresco y c\xf3modo para que puedas centrarte en dar lo mejor de ti en el juego.",price:8500,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt5c567d595d1aef3b/61538398f725af79f53fefde/Track-Jacket-front-v2-2560x3200.png?auto=webp&width=970&quality=85",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blta18f2b68c33d50c4/615383aa564bf37c154fab20/Track-Jacket-back-v2.jpg",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt0b8ddfaec4365dff/615383ae564bf37c154fab24/Track-Jacket-front-L-v2.jpg",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt03b18605b450ec1d/615383b869b7947c1b3b0080/Track-Jacket-detail01-v1.jpg",category:"Camperas",stock:20},{id:16,name:"Campera de VALORANT -Desaf\xeda los l\xedmites-",description:"\xa1Muestra tu apoyo a nuestra guardiana de las estrellas favorita! Lux proteger\xe1 la luz hasta su \xfaltimo aliento.",price:14500,img:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltadbd9d56e2c65ef4/6042b291c7198e3af48f797d/Jacket_01.png?auto=webp&width=970&quality=85",img1:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt38f793df83bcd82b/6042b2951322a9094ddee7aa/Jacket_02.png",img2:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blta73eb3ebab495003/6042b2995aedc043351b616e/Jacket_03.jpg",img3:"https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltb36e5b0bb016ca50/6042b29c1322a9094ddee7ae/Jacket_04.jpg",category:"Camperas",stock:20}],N=function(){return new Promise((function(e,t){setTimeout((function(){e(y)}),2e3)}))},C=(a(39),function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"loader",children:Object(d.jsxs)("div",{className:"loader-inner",children:[Object(d.jsx)("div",{className:"loader-line-wrap",children:Object(d.jsx)("div",{className:"loader-line"})}),Object(d.jsx)("div",{className:"loader-line-wrap",children:Object(d.jsx)("div",{className:"loader-line"})}),Object(d.jsx)("div",{className:"loader-line-wrap",children:Object(d.jsx)("div",{className:"loader-line"})}),Object(d.jsx)("div",{className:"loader-line-wrap",children:Object(d.jsx)("div",{className:"loader-line"})}),Object(d.jsx)("div",{className:"loader-line-wrap",children:Object(d.jsx)("div",{className:"loader-line"})})]})})})}),w=function(e){var t=e.items,a=void 0===t?[]:t;return Object(d.jsxs)("div",{className:"productsContainer",children:[Object(d.jsx)("h2",{className:"productsTitle",children:"Nuestros Productos"}),Object(d.jsx)("div",{className:"itemListContainer",children:a.map((function(e){return Object(d.jsxs)("div",{className:"itemList",children:[Object(d.jsx)("h2",{className:"itemTitle",children:e.name}),Object(d.jsx)("img",{className:"itemImage",src:e.img}),Object(d.jsxs)("p",{className:"itemPrice",children:["$ ",e.price]}),Object(d.jsxs)("div",{className:"itemBuy",children:[Object(d.jsx)(g.b,{style:{textDecoration:"none",color:"white"},to:"/detail/".concat(e.id),children:Object(d.jsx)("span",{className:"buyNow",children:"Ver Info"})}),Object(d.jsx)(g.b,{style:{textDecoration:"none",color:"white"},to:"/detail/".concat(e.id),children:Object(d.jsx)("span",{className:"addToCart",children:"Agregar al carrito"})})]})]},e.id)}))})]})},F=(a(40),function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(c.useContext)(j),n=i.loading,o=i.setLoading,l=Object(f.g)().categoryId;return Object(c.useEffect)((function(){o(!0),N().then((function(e){s(l?e.filter((function(e){return e.category===l})):e)})).catch((function(e){return console.log(e)})).finally((function(){o(!1)}))}),[l,o]),Object(d.jsx)(d.Fragment,{children:n?Object(d.jsx)(C,{}):Object(d.jsx)(w,{items:a})})}),I=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{}),Object(d.jsx)(F,{})]})},A=a(9),R=(a(41),function(e){var t=e.quantity,a=e.modifyQuantity,c=e.max;return Object(d.jsxs)("div",{className:"itemCountContainer",children:[Object(d.jsx)("button",{onClick:function(){t>1&&a(t-1)},children:"-"}),Object(d.jsx)("span",{children:t}),Object(d.jsx)("button",{onClick:function(){t<c&&a(t+1)},children:"+"})]})}),E=(a(42),function(e){var t=e.id,a=e.name,s=e.price,i=e.img,n=e.img1,o=e.img2,b=e.img3,m=e.description,j=e.category,u=e.stock,p=Object(f.f)(),h=p.goBack,x=p.push,O=Object(c.useContext)(l),v=O.addToCart,k=O.isInCart,_=Object(c.useState)(1),y=Object(r.a)(_,2),N=y[0],C=y[1];return Object(d.jsxs)("div",{className:"itemContainer",children:[Object(d.jsxs)("div",{className:"itemShow",children:[Object(d.jsx)("img",{id:"newImg",className:"itemImg",src:i,alt:a}),Object(d.jsxs)("div",{className:"itemShowNav",children:[Object(d.jsx)("img",{className:"subItemImg",src:i,alt:a}),Object(d.jsx)("img",{className:"subItemImg",src:n,alt:a}),Object(d.jsx)("img",{className:"subItemImg",src:o,alt:a}),Object(d.jsx)("img",{className:"subItemImg",src:b,alt:a})]})]}),Object(d.jsxs)("div",{className:"itemInfo",children:[Object(d.jsx)("h2",{className:"itemName",children:a}),Object(d.jsxs)("p",{children:["Descripci\xf3n: ",m]}),Object(d.jsxs)("p",{children:["Categor\xeda: ",j]}),Object(d.jsxs)("h4",{children:["Precio: $",s]}),k(t)?Object(d.jsx)(g.b,{style:{textDecoration:"none",color:"black"},to:"/cart",children:Object(d.jsx)("div",{className:"itemBtn",children:Object(d.jsx)("span",{children:"Finalizar compra"})})}):Object(d.jsxs)("div",{className:"itemBtn",children:[Object(d.jsx)(R,{quantity:N,modifyQuantity:C,max:u}),Object(d.jsx)("span",{onClick:function(){N>0&&v({id:t,name:a,price:s,category:j,img:i,quantity:N})},children:"Agregar al Carrito"})]}),Object(d.jsxs)("div",{className:"itemBtn",children:[Object(d.jsx)("span",{onClick:function(){return h()},children:"Volver atr\xe1s"}),Object(d.jsx)("span",{onClick:function(){return x("/tienda-lol-reactJs")},children:"Volver al Inicio"})]})]})]})}),J=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(c.useContext)(j),n=i.loading,o=i.setLoading,l=Object(f.g)().itemId;return Object(c.useEffect)((function(){o(!0),N().then((function(e){s(e.find((function(e){return e.id===Number(l)})))})).finally((function(){o(!1)}))}),[l,o]),Object(d.jsx)("div",{children:n?Object(d.jsx)(C,{}):Object(d.jsx)(E,Object(A.a)({},a))})},L=function(){var e=Object(c.useContext)(l),t=e.cart,a=e.removeItem;return t.map((function(e){return Object(d.jsxs)("div",{className:"itemCartFinal",children:[Object(d.jsx)("img",{src:e.img,alt:e.name}),Object(d.jsx)("h3",{children:e.name}),Object(d.jsxs)("p",{children:["Cantidad: ",e.quantity," "]}),Object(d.jsxs)("p",{children:["Precio: $",e.price*e.quantity," "]}),Object(d.jsx)("span",{onClick:function(){return a(e.id)},children:"Quitar Producto"})]})}))},S=function(){return Object(d.jsxs)("div",{className:"shoppingCartEmpty",children:[Object(d.jsx)("h3",{children:"No tienes productos en tu carrito."}),Object(d.jsxs)(g.b,{style:{textDecoration:"none",color:"white"},to:"/tienda-lol-reactJs",children:[" ",Object(d.jsx)("span",{children:"Comprar Productos"})," "]})]})},T=function(){var e=Object(c.useContext)(l),t=e.deleteAll,a=e.cartFinalPrice;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h2",{children:["Precio Total: $",a()]}),Object(d.jsxs)("div",{className:"shoppingCartButtons",children:[Object(d.jsx)("span",{onClick:t,children:"Vaciar Carrito"}),Object(d.jsx)(g.b,{style:{textDecoration:"none",color:"white"},to:"/tienda-lol-reactJs",children:Object(d.jsx)("span",{className:"buyNow",children:"Seguir comprando"})})]})]})},B=(a(43),function(){var e=Object(c.useContext)(l).cart;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{}),Object(d.jsx)("div",{className:"shoppingCart",children:0===e.length?Object(d.jsx)(S,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"Resumen de compra"}),Object(d.jsx)(L,{}),Object(d.jsx)(T,{})]})})]})}),q=a(11),P=(a(44),function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),a=t[0],s=t[1],i=function(e){s(Object(A.a)(Object(A.a)({},a),{},Object(q.a)({},e.target.name,e.target.value)))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"form",children:[Object(d.jsxs)("div",{className:"contact-info",children:[Object(d.jsx)("h3",{className:"title",children:"Contacta con Nosotros."}),Object(d.jsx)("p",{className:"text",children:"Riot Games, Inc. es una desarrolladora y editora de videojuegos y organizador de torneos de deportes electr\xf3nicos estadounidense. La empresa se fund\xf3 en septiembre de 2006 para desarrollar League of Legends, un videojuego multijugador de arena de batalla en l\xednea. Riot Games opera 14 ligas de deportes electr\xf3nicos a nivel internacional y el Campeonato del Mundo de League of Legends. Hasta mayo de 2018, Riot Games ten\xeda 24 oficinas en todo el mundo, en las que empleaba alrededor de 2500 personas."}),Object(d.jsxs)("div",{className:"info",children:[Object(d.jsxs)("div",{className:"information",children:[Object(d.jsx)("box-icon",{name:"map",type:"solid",color:"white"}),Object(d.jsx)("p",{children:"Los \xc1ngeles, California, EE.UU"})]}),Object(d.jsxs)("div",{className:"information",children:[Object(d.jsx)("box-icon",{name:"envelope-open",color:"white"}),Object(d.jsx)("p",{children:"support@riotgames.com"})]}),Object(d.jsxs)("div",{className:"information",children:[Object(d.jsx)("box-icon",{name:"phone",color:"white"}),Object(d.jsx)("p",{children:"424-231-1111"})]})]}),Object(d.jsxs)("div",{className:"social-media",children:[Object(d.jsx)("p",{children:"Conecta con nosotros :"}),Object(d.jsxs)("div",{className:"social-icons",children:[Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("box-icon",{type:"logo",name:"facebook-circle",color:"white"})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("box-icon",{name:"twitter",type:"logo",color:"white"})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("box-icon",{name:"instagram",type:"logo",color:"white"})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("box-icon",{name:"linkedin",type:"logo",color:"white"})})]})]})]}),Object(d.jsx)("div",{className:"contact-form",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(a)},children:[Object(d.jsx)("h3",{className:"title",children:"Dejanos un mensaje"}),Object(d.jsx)("div",{className:"input-container",children:Object(d.jsx)("input",{type:"text",name:"name",className:"input",placeholder:"Nombre",value:a.name,onChange:i})}),Object(d.jsx)("div",{className:"input-container",children:Object(d.jsx)("input",{type:"email",name:"email",className:"input",placeholder:"Email",value:a.email,onChange:i})}),Object(d.jsx)("div",{className:"input-container textarea",children:Object(d.jsx)("textarea",{name:"message",className:"input",placeholder:"Tu mensaje...",value:a.message,onChange:i})}),Object(d.jsx)("input",{type:"submit",value:"Enviar",className:"btn"})]})})]})})})}),U=(a(45),function(e){var t=e.footerTitle;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("p",{className:"footerTitle",children:t})})}),z=(a(46),a.p+"static/media/intelLogo.d8c5ddd1.png"),D=a.p+"static/media/riot-games.0fe1faef.svg",M=a.p+"static/media/twitchLogo.46e4f1f3.webp",G=function(){var e=function(){window.scrollTo(0,0)};return Object(d.jsxs)("div",{className:"sponsorsContainer",children:[Object(d.jsx)("img",{id:"intel",src:z}),Object(d.jsx)("img",{id:"twitch",src:D}),Object(d.jsx)("img",{id:"riot",src:M}),Object(d.jsx)("i",{onClick:e,children:Object(d.jsx)("box-icon",{name:"chevron-up-square",type:"solid",size:"md",animation:"fade-up-hover",color:"black",style:{cursor:"pointer"},onClick:e})})]})},V=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(U,{footerTitle:"\u2122 & \xa9 2021 Riot Games, Inc. Todos los derechos reservados. Riot Games, League of Legends y PvP.net son marcas comerciales o marcas registradas de Riot Games, Inc."}),Object(d.jsx)(G,{})]})},K=(a(47),function(){var e=Object(c.useContext)(h).setIsAuthenticated,t=function(){e(!0)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"logInContainer",children:[Object(d.jsx)("div",{className:"logInContainerLeft",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("h1",{children:"\xa1Ingresa con tu usuario!"}),Object(d.jsxs)("div",{className:"social-container",children:[Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("box-icon",{type:"logo",name:"facebook-circle",color:"black",size:"md",animation:"tada-hover"})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("box-icon",{name:"twitter",type:"logo",color:"black",size:"md",animation:"tada-hover"})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("box-icon",{name:"instagram",type:"logo",color:"black",size:"md",animation:"tada-hover"})}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("box-icon",{name:"linkedin",type:"logo",color:"black",size:"md",animation:"tada-hover"})})]}),Object(d.jsx)("p",{children:"o usa tu cuenta"}),Object(d.jsx)("input",{type:"name",placeholder:"Usuario",autoComplete:"off"}),Object(d.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",autoComplete:"off"}),Object(d.jsx)("span",{onClick:t,children:"Login"})]})}),Object(d.jsxs)("div",{className:"logInContainerRight",children:[Object(d.jsx)("h1",{children:"\xbfNo tienes cuenta?"}),Object(d.jsx)("p",{children:"Ingresa tus datos personales para crear la tuya."}),Object(d.jsx)("span",{onClick:t,children:"Registrate"})]})]})})});var H=function(){var e=Object(c.useContext)(h).isAuthenticated;return Object(d.jsx)(u,{children:Object(d.jsx)(m,{children:Object(d.jsx)(g.a,{children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,{}),Object(d.jsx)(f.c,{children:e?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f.a,{exact:!0,path:"/tienda-lol-reactJs",children:Object(d.jsx)(I,{})}),Object(d.jsx)(f.a,{exact:!0,path:"/productos/:categoryId",children:Object(d.jsx)(I,{})}),Object(d.jsx)(f.a,{exact:!0,path:"/detail/:itemId",children:Object(d.jsx)(J,{})}),Object(d.jsx)(f.a,{exact:!0,path:"/contacto",children:Object(d.jsx)(P,{})}),Object(d.jsx)(f.a,{exact:!0,path:"/cart",children:Object(d.jsx)(B,{})})]}):Object(d.jsx)(K,{})}),Object(d.jsx)(V,{})]})})})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{children:Object(d.jsx)(H,{})})}),document.getElementById("root")),Q()}],[[48,1,2]]]);
//# sourceMappingURL=main.ef4800fa.chunk.js.map