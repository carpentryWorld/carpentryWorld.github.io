(this.webpackJsonpcarpentry_world=this.webpackJsonpcarpentry_world||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(17),c=a.n(l),s=(a(87),a(88),a(68)),o=a(36),i=a(37),m=a(44),u=a(38),d=a(45),h=a(20),E=a(69),g=a.n(E),p=a(15),v=a(150),b=a(151),w=a(152),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).displayName="Gallery",a.state={isOpen:!1,currImg:0},a.gotoNext=a.gotoNext.bind(Object(h.a)(a)),a.gotoPrev=a.gotoPrev.bind(Object(h.a)(a)),a.gotoImg=a.gotoImg.bind(Object(h.a)(a)),a.handleClickImg=a.handleClickImg.bind(Object(h.a)(a)),a.closeImgsViewer=a.closeImgsViewer.bind(Object(h.a)(a)),a.openImgsViewer=a.openImgsViewer.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"openImgsViewer",value:function(e,t){t.preventDefault(),this.setState({currImg:e,isOpen:!0})}},{key:"closeImgsViewer",value:function(){this.setState({currImg:0,isOpen:!1})}},{key:"gotoPrev",value:function(){this.setState({currImg:this.state.currImg-1})}},{key:"gotoNext",value:function(){this.setState({currImg:this.state.currImg+1})}},{key:"gotoImg",value:function(e){this.setState({currImg:e})}},{key:"handleClickImg",value:function(){this.state.currImg!==this.props.imgs.length-1&&this.gotoNext()}},{key:"renderGallery",value:function(){var e=this,t=this.props.imgs;if(!t)return n.a.createElement("h1",null,"no images");var a=t.filter((function(e){return e})).map((function(t,a){return n.a.createElement("a",{href:t.src,className:Object(p.css)(I.thumbnail,I[t.orientation]),key:a,onClick:function(t){return e.openImgsViewer(a,t)}},n.a.createElement("img",{src:t.src,className:Object(p.css)(I.source)}))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,null,n.a.createElement(b.a,{xs:4,md:4},a[0]),n.a.createElement(b.a,{xs:4,md:4},a[1]),n.a.createElement(b.a,{xs:4,md:4},a[2])),n.a.createElement(v.a,null,n.a.createElement(b.a,{xs:4,md:4},a[3]),n.a.createElement(b.a,{xs:4,md:4},a[4]),n.a.createElement(b.a,{xs:4,md:4},a[5])),n.a.createElement(v.a,null,n.a.createElement(b.a,{xs:4,md:4},a[6]),n.a.createElement(b.a,{xs:4,md:4},a[7]),n.a.createElement(b.a,{xs:4,md:4},a[8])),n.a.createElement(v.a,null,n.a.createElement(b.a,{xs:4,md:4},a[9]),n.a.createElement(b.a,{xs:4,md:4},a[10]),n.a.createElement(b.a,{xs:4,md:4},a[11])),n.a.createElement(v.a,null,n.a.createElement(b.a,{xs:4,md:4},a[12]),n.a.createElement(b.a,{xs:4,md:4},a[13]),n.a.createElement(b.a,{xs:4,md:4},a[14])),n.a.createElement(v.a,null,n.a.createElement(b.a,{xs:4,md:4},a[15]),n.a.createElement(b.a,{xs:4,md:4},a[16]),n.a.createElement(b.a,{xs:4,md:4},a[17])),n.a.createElement(v.a,null,n.a.createElement(b.a,{xs:4,md:4},a[18]),n.a.createElement(b.a,{xs:4,md:4},a[19]),n.a.createElement(b.a,{xs:4,md:4},a[20])),n.a.createElement(v.a,null,n.a.createElement(b.a,{xs:4,md:4},a[21]),n.a.createElement(b.a,{xs:4,md:4},a[22]),n.a.createElement(b.a,{xs:4,md:4},a[23])))}},{key:"render",value:function(){return n.a.createElement("div",null,this.props.heading&&n.a.createElement("h2",null,this.props.heading),this.props.subheading&&n.a.createElement("p",null,this.props.subheading),n.a.createElement(w.a,null,this.renderGallery()),n.a.createElement(g.a,{backdropCloseable:!0,currImg:this.state.currImg,imgs:this.props.imgs,isOpen:this.state.isOpen,onClickImg:this.handleClickImg,onClickNext:this.gotoNext,onClickPrev:this.gotoPrev,onClickThumbnail:this.gotoImg,onClose:this.closeImgsViewer,preventScroll:this.props.preventScroll,showThumbnails:this.props.showThumbnails,spinner:this.props.spinner,spinnerColor:this.props.spinnerColor,spinnerSize:this.props.spinnerSize,theme:this.props.theme}))}}]),t}(r.Component),f=2,x=4,I=p.StyleSheet.create({gallery:{marginRight:-f,overflow:"hidden","@media (min-width: 500px)":{marginRight:-x}},thumbnail:{boxSizing:"border-box",display:"block",float:"left",lineHeight:0,paddingRight:f,paddingBottom:f,overflow:"hidden","@media (min-width: 500px)":{paddingRight:x,paddingBottom:x}},landscape:{width:"30%"},square:{paddingBottom:x,width:"40%","@media (min-width: 500px)":{paddingBottom:x}},source:{border:0,display:"inline",height:"auto",maxWidth:"100%",width:"auto"}}),G=y,k=a(74),O=a(3),P=a(156),C=a(2),S=Object(O.k)({fontSize:50,height:50,width:50,margin:"0 25px",color:"#556B2F"}),A={imageUrl:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/customer-1.jpg",imageInitials:"AD",text:"Alberto Duncan"},N={imageUrl:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/customer-2.jpg",imageInitials:"JS",text:"Joana Silva"},j={imageUrl:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/customer-3.jpg",imageInitials:"MC",text:"Milton Chapman"},J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){r.createElement(r.Fragment,null);return r.createElement(r.Fragment,null,r.createElement("div",{className:"full-bg-size-component"},r.createElement("div",{className:"text-wrap"},r.createElement(w.a,null,r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("h1",{style:{fontWeight:500}},"QUALITY YOU CAN TRUST, AT A PRICE YOU CAN AFFORD.")))))),r.createElement("br",null),r.createElement("br",null),r.createElement(w.a,null,r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("h2",{style:{color:"#696969"}},"TACKLING A WIDE VARIETY OF CONSTRUCTION REPAIRS AND REMODELING PROJECTS."))),r.createElement("br",null),r.createElement("hr",null),r.createElement("br",null),r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("h5",{style:{color:"#696969"}},"Hello, my name is George and I love putting in action your remodeling ideas and turning them into a beautiful and stylish result.")))),r.createElement("br",null),r.createElement("br",null),r.createElement(w.a,null,r.createElement(v.a,null,r.createElement(b.a,{xs:4,md:4},this.oneSection("Lightbulb","UNIQUENESS","I love making custom projects with artistic, design oriented value. You will be pleased to hear that I can reproduce your Pinterest ideas too.")),r.createElement(b.a,{xs:4,md:4},this.oneSection("ClipboardListMirrored","FREE QUOTE & DESIGN","It will be a joyful experience to bounce ideas off each other and come up with a solution you will be content with.")),r.createElement(b.a,{xs:4,md:4},this.oneSection("DeveloperTools","EVERYTHING ELSE","I can come in handy with every other activity that includes wood. From the long postponed restoration of your cabinets to your brand new lovely porch.")))),r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),r.createElement("div",{id:"galleryId"},r.createElement(G,{imgs:[{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/1.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/2.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/3.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/4.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/5.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/6.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/7.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/8.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/9.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/10.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/11.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/12.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/13.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/14.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/15.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/16.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/17.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/18.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/19.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/20.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/21.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/22.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/23.JPG"},{src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/24.JPG"}],heading:"",subheading:"",preventScroll:!0,showThumbnails:!0})),r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),r.createElement(w.a,{id:"whyMe"},r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("h2",{style:{color:"#696969"}},"WHY YOU CAN TRUST MY WORK"))),r.createElement("hr",null),r.createElement("br",null),r.createElement(v.a,null,r.createElement(b.a,{xs:6,md:6},r.createElement("img",{height:"auto",width:"70%",src:"https://raw.githubusercontent.com/vladislavGeorgiev/carpentry_world/master/SallyMitchell.jpg"})),r.createElement(b.a,{xs:6,md:6},r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("p",{style:{textAlign:"left"}},"Pictured here is the lovely Mrs. Sally Mitchell, former Norfolk County Chairman of the Royal Agricultural Benevolent Institution (RABI), celebrating her retirement at the annual summer cocktail party in June 2018 at the Norfolk showground."))),r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("p",{style:{textAlign:"left"}},"The wooden bench, a custom one-of-a-kind piece hand-carved by me, was presented to her by Sir John White of the Salle estate on behalf of the county committee."))),r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("p",{style:{textAlign:"left"}},"A proud moment in my career."))),r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("p",{style:{textAlign:"left"}},"Copyright \xa9 ",r.createElement("a",{href:"https://www.edp24.co.uk/business/farming/rabi-norfolk-nears-1m-milestone-1-5570684"},"Eastern Daily Press"))))))),r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),r.createElement(w.a,null,r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("h2",{style:{color:"#696969"}},"THIS IS WHAT PEOPLE HAVE TO SAY ABOUT ME"))),r.createElement("hr",null)),r.createElement(w.a,null,r.createElement(v.a,null,r.createElement(b.a,{xs:4,md:4},r.createElement(v.a,null,r.createElement("p",null,'"Great work. Lovely guy always on time. Recommend!"')),r.createElement(v.a,{className:"justify-content-md-center"},r.createElement(P.a,Object.assign({},A,{size:C.c.size56,presence:C.b.online,imageAlt:"Annie Ried, status is available at 4 PM"})))),r.createElement(b.a,{xs:4,md:4},r.createElement(v.a,null,r.createElement("p",null,'"Very professional and well organized craftsmanship!"')),r.createElement(v.a,{className:"justify-content-md-center"},r.createElement(P.a,Object.assign({},N,{size:C.c.size56,presence:C.b.online,imageAlt:"Annie Ried, status is available at 4 PM"})))),r.createElement(b.a,{xs:4,md:4},r.createElement(v.a,null,r.createElement("p",null,'"He managed to fulfill all my Pintrest ideas that I had in mind."')),r.createElement(v.a,{className:"justify-content-md-center"},r.createElement(P.a,Object.assign({},j,{size:C.c.size56,imageAlt:"Annie Ried, status is available at 4 PM"})))))),r.createElement("hr",null),r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),r.createElement(w.a,{id:"contactMe"},r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("h2",{style:{color:"#696969"}},"WE ARE HAPPY TO HEAR FROM YOU"))),r.createElement("br",null),r.createElement("br",null),r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("iframe",{frameBorder:"0",src:"https://docs.google.com/forms/d/e/1FAIpQLScq5re7s6SlIOukmBLcN5dYEj6xt6iKDyEW68IXScUCxqpsgQ/viewform?embedded=true",width:"640",height:"790"},"Loading...")))))}},{key:"oneSection",value:function(e,t,a){r.createElement(r.Fragment,null);return r.createElement(w.a,null,r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement(k.a,{iconName:e,className:S}))),r.createElement("br",null),r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("h3",null,t))),r.createElement("br",null),r.createElement(v.a,null,r.createElement(b.a,{xs:12,md:12},r.createElement("p",null,a))))}}]),t}(r.Component),_=(a(133),a(79)),R=a(157),T=a(158);Object(_.a)();var F=function(){return n.a.createElement(s.ParallaxProvider,null,n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(w.a,null,n.a.createElement(R.a,{fixed:"top",expand:"lg",variant:"light",bg:"light"},n.a.createElement(R.a.Brand,{href:"#"},"Carpentry world"),n.a.createElement(R.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(R.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(T.a,{className:"mr-auto"},n.a.createElement(T.a.Link,{href:"#",onClick:function(e){var t=document.getElementById("galleryId");t&&t.scrollIntoView({behavior:"smooth",block:"start"})}},"Gallery"),n.a.createElement(T.a.Link,{href:"#",onClick:function(e){var t=document.getElementById("whyMe");t&&t.scrollIntoView({behavior:"smooth",block:"start"})}},"Why me"),n.a.createElement(T.a.Link,{href:"#",onClick:function(e){var t=document.getElementById("contactMe");t&&t.scrollIntoView({behavior:"smooth",block:"start"})}},"Contact me"))))),n.a.createElement(J,null)),n.a.createElement("footer",null,n.a.createElement(v.a,{style:{backgroundColor:"#556B2F"},className:"justify-content-md-center"},n.a.createElement(b.a,{xs:12,md:12},n.a.createElement("p",{style:{color:"#FFFFFF"}},"Copyright \xa9 2019 by Carpenter World. All rights reserved."))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,a){e.exports=a(137)},87:function(e,t,a){},88:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.a85d293c.chunk.js.map