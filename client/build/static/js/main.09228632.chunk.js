(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(227)},226:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(68),r=a.n(i);var c=function(){return l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",{className:"nav-wrapper"},l.a.createElement("h5",{className:"brand-logo"},l.a.createElement("i",{className:"material-icons heal"},"healing"),"Balm")))},s=a(93),o=function(e){return l.a.createElement(s.slide,{right:!0},l.a.createElement("a",{className:"menu-item waves-effect waves-light",href:"/"},l.a.createElement("i",{className:"material-icons left"},"home"),"Home"),l.a.createElement("a",{className:"menu-item waves-effect waves-light",href:"/about"},l.a.createElement("i",{className:"material-icons left"},"info"),"About"),l.a.createElement("a",{className:"menu-item waves-effect waves-light",href:"/anxious"},l.a.createElement("i",{className:"material-icons left"},"sentiment_dissatisfied"),"I'm having anxiety"),l.a.createElement("a",{className:"menu-item waves-effect waves-light",href:"/future"},l.a.createElement("i",{className:"material-icons left"},"restore"),"Long Term Help"),l.a.createElement("a",{className:"menu-item waves-effect waves-light",href:"/contact"},l.a.createElement("i",{className:"material-icons left"},"comment"),"Contact"),l.a.createElement("a",{href:"/login",className:"menu-item waves-effect waves-light"},l.a.createElement("i",{className:"material-icons left"},"face"),"Log In"))},u=a(25),m=a(14),p=a(3),h=a(4),d=a(6),E=a(5),v=a(7),b=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"poster"},l.a.createElement("h1",null,"Hey. How ya doin'?")),l.a.createElement("div",{className:"buttondiv"},l.a.createElement(u.a,{to:"/about"},l.a.createElement("a",{href:"/about"},l.a.createElement("button",{className:"waves-effect waves-light btn-small"},"I'm good. I'm here to learn."))),l.a.createElement(u.a,{to:"/anxious"},l.a.createElement("a",{href:"/anxious"},l.a.createElement("button",{className:"waves-effect waves-light btn-small"},"I'm feeling anxious actually."))),l.a.createElement("br",null),l.a.createElement(u.a,{to:"/future"},l.a.createElement("a",{href:"/future"},l.a.createElement("button",{className:"waves-effect waves-light btn-small"},"For now okay, but I want help."))),l.a.createElement(u.a,{to:"/contact"},l.a.createElement("a",{href:"/contact"},l.a.createElement("button",{className:"waves-effect waves-light btn-small"},"I want to make a suggestion to help.")))))}}]),t}(n.Component),f=a(33),g=a.n(f),w=a(52),y=function(e){var t=e.onSubmit;return l.a.createElement("div",null,l.a.createElement("h1",null,"Log in"),l.a.createElement("form",{onSubmit:t},l.a.createElement("label",null,"Email",l.a.createElement("input",{style:{width:"100%"},name:"email",type:"email",placeholder:"Email"})),l.a.createElement("label",null,"Password",l.a.createElement("input",{style:{width:"100%"},name:"password",type:"password",placeholder:"Password"})),l.a.createElement("button",{type:"submit"},"Log in"),l.a.createElement("button",null,l.a.createElement("a",{href:"/signup"},"Go to Sign Up"))))},N=a(96),O=a.n(N).a.initializeApp({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_DATABASE,projectId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_SENDER_ID}),C=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).handleSignUp=function(){var e=Object(w.a)(g.a.mark(function e(t){var n,l,i;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,l=n.email,i=n.password,e.prev=2,e.next=5,O.auth().signInWithEmailAndPassword(l.value,i.value);case 5:e.sent,a.props.history.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(y,{onSubmit:this.handleSignUp})}}]),t}(n.Component),j=Object(m.e)(C),I=function(e){var t=e.onSubmit;return l.a.createElement("div",null,l.a.createElement("h1",null,"Sign up"),l.a.createElement("form",{onSubmit:t},l.a.createElement("label",null,"Email",l.a.createElement("input",{style:{width:"100%"},name:"email",type:"email",placeholder:"Email"})),l.a.createElement("label",null,"Password",l.a.createElement("input",{style:{width:"100%"},name:"password",type:"password",placeholder:"Password"})),l.a.createElement("button",{type:"submit"},"Sign Up")))},x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).handleSignUp=function(){var e=Object(w.a)(g.a.mark(function e(t){var n,l,i;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,l=n.email,i=n.password,e.prev=2,e.next=5,O.auth().createUserWithEmailAndPassword(l.value,i.value);case 5:e.sent,a.props.history.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(I,{onSubmit:this.handleSignUp})}}]),t}(n.Component),A=Object(m.e)(x),k=a(53),S=a(32),q=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(k.a)({},l,n))},a.handleFormSubmit=function(e){e.preventDefault(),alert("Roger roger! \n")},a.state={desc:"",location:[],noiselvl:3,physicallvl:3,items:null,itemslist:""},a.handleInputChange=a.handleInputChange.bind(Object(S.a)(a)),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("form",{action:"#"},l.a.createElement("label",{for:"desc"},"Tell us what you do to calm down"),l.a.createElement("textarea",{name:"desc",class:"materialize-textarea",value:this.state.desc,onChange:this.handleInputChange}),l.a.createElement("label",null,"This activity works at..."),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{name:"location",type:"checkbox",value:"home",onChange:this.handleInputChange}),l.a.createElement("span",null,"Home"))),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{name:"location",type:"checkbox",value:"work",onChange:this.handleInputChange}),l.a.createElement("span",null,"Work/School"))),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{name:"location",type:"checkbox",value:"public",onChange:this.handleInputChange}),l.a.createElement("span",null,"Public"))),l.a.createElement("label",null,"This activity is this noisy..."),l.a.createElement("p",{className:"range-field"},l.a.createElement("input",{type:"range",name:"noiselvl",min:"1",max:"5",value:this.state.noiselvl,onChange:this.handleInputChange})),l.a.createElement("label",null,"This activity is this physical..."),l.a.createElement("p",{className:"range-field"},l.a.createElement("input",{type:"range",name:"physicallvl",min:"1",max:"5",value:this.state.physicallvl,onChange:this.handleInputChange})),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{class:"with-gap",name:"items",type:"radio",onChange:this.handleInputChange}),l.a.createElement("span",null,"Check if this Activity needs items"))),l.a.createElement("label",{for:"items"},"Tell us what this activity needs ONLY IF it needs any."),l.a.createElement("textarea",{name:"itemslist",value:this.state.itemslist,className:"materialize-textarea",onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("button",{className:"waves-effect waves-light btn-small",type:"submit",onClick:this.handleFormSubmit},"Submit")))}}]),t}(n.Component),P=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Submit your Ideas!")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s10"},l.a.createElement("h5",null,"This is a form to make suggestions for our database of immediate fixes. Feel free to fill it out and maybe you'll see your suggestion on our website!"),l.a.createElement("br",null),l.a.createElement(q,null))))}}]),t}(n.Component),_=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"About Anxiety")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h4",null,"What is Anxiety?"),l.a.createElement("p",{className:"flow-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu magna nec felis semper tincidunt. Maecenas posuere accumsan sodales. Vestibulum ornare eros sodales nunc porta, vitae consequat orci eleifend. Nullam pretium vehicula ornare. Pellentesque turpis eros, sagittis sit amet risus quis, aliquam dignissim metus. Cras nec tortor tellus. Phasellus consequat neque magna, non bibendum mauris molestie nec. Cras sollicitudin commodo consectetur. Maecenas viverra libero quis elit volutpat aliquam. Morbi et arcu convallis, ultricies ligula vel, volutpat mi. In at risus a urna mollis porttitor. Ut posuere arcu suscipit justo sodales mattis. Vestibulum ultrices risus nunc, ut dictum augue mattis vitae. Aliquam erat volutpat. Suspendisse et pharetra velit, quis scelerisque sapien. Nullam a convallis tortor."),l.a.createElement("br",null),l.a.createElement("h4",null,"Why do people suffer from it?"),l.a.createElement("p",{className:"flow-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu magna nec felis semper tincidunt. Maecenas posuere accumsan sodales. Vestibulum ornare eros sodales nunc porta, vitae consequat orci eleifend. Nullam pretium vehicula ornare. Pellentesque turpis eros, sagittis sit amet risus quis, aliquam dignissim metus. Cras nec tortor tellus. Phasellus consequat neque magna, non bibendum mauris molestie nec. Cras sollicitudin commodo consectetur. Maecenas viverra libero quis elit volutpat aliquam. Morbi et arcu convallis, ultricies ligula vel, volutpat mi. In at risus a urna mollis porttitor. Ut posuere arcu suscipit justo sodales mattis."),l.a.createElement("br",null),l.a.createElement("h4",null,"How can I help?"),l.a.createElement("p",{className:"flow-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu magna nec felis semper tincidunt. Maecenas posuere accumsan sodales. Vestibulum ornare eros sodales nunc porta, vitae consequat orci eleifend. Nullam pretium vehicula ornare. Pellentesque turpis eros, sagittis sit amet risus quis, aliquam dignissim metus. Cras nec tortor tellus. Phasellus consequat neque magna, non bibendum mauris molestie nec. Cras sollicitudin commodo consectetur. Maecenas viverra libero quis elit volutpat aliquam. Morbi et arcu convallis, ultricies ligula vel, volutpat mi. In at risus a urna mollis porttitor. Ut posuere arcu suscipit justo sodales mattis."))))}}]),t}(n.Component),R=a(97),L=a.n(R),U=a(98),B=a.n(U),D={getRemedy:function(){return B.a.get("/api")}},T=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(k.a)({},l,n))},a.handleFormSubmit=function(e){e.preventDefault(),alert("Roger roger! \nLocation: "+a.state.location+"\nNoise: "+a.state.noiselvl+"\nPhysical: "+a.state.physicallvl+"\nItems: "+a.state.items)},a.state={location:"",noiselvl:3,physicallvl:3,items:null},a.handleInputChange=a.handleInputChange.bind(Object(S.a)(a)),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("form",{action:"#"},l.a.createElement("label",null,"I am at..."),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{className:"with-gap",name:"location",type:"radio",value:"home",onChange:this.handleInputChange}),l.a.createElement("span",null,"Home"))),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{className:"with-gap",name:"location",type:"radio",value:"work",onChange:this.handleInputChange}),l.a.createElement("span",null,"Work/School"))),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{className:"with-gap",name:"location",type:"radio",value:"public",onChange:this.handleInputChange}),l.a.createElement("span",null,"Public"))),l.a.createElement("label",null,"Activity Noise Level"),l.a.createElement("p",{className:"range-field"},l.a.createElement("input",{type:"range",name:"noiselvl",min:"1",max:"5",value:this.state.noiselvl,onChange:this.handleInputChange})),l.a.createElement("label",null,"Activity Physical Level"),l.a.createElement("p",{className:"range-field"},l.a.createElement("input",{type:"range",name:"physicallvl",min:"1",max:"5",value:this.state.physicallvl,onChange:this.handleInputChange})),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{name:"items",type:"checkbox",value:"false",onChange:this.handleCheckboxChange}),l.a.createElement("span",null,"I can use items right now"))),l.a.createElement("br",null),l.a.createElement("button",{className:"waves-effect waves-light btn-small",type:"submit",onClick:function(t){return e.handleFormSubmit(t)}},"Submit"))))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={remedies:[],desc:""},a.loadRemedies=function(){D.getRemedy().then(function(e){console.log("this is the response",e),a.setState({remedy:e.data,desc:""})}).catch(function(e){return console.log(e)})},a.handleFormSubmit=function(e){e.preventDefault(),console.log("Yes!"),console.log(a.state.remedy)},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadRemedies()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row center-align"},l.a.createElement("h4",null,"Here's a reccomendation to help...")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3 filter left-align pull-s2"},l.a.createElement(T,null)),l.a.createElement("div",{className:"col s7 center-align",id:"remedies"},l.a.createElement("p",{id:"desc"}),l.a.createElement("ul",{id:"things"})),l.a.createElement("div",{className:"col 2"}),l.a.createElement("div",{className:"row center-align"},l.a.createElement("button",{className:"waves-effect waves-light btn-small",onClick:this.handleFormSubmit},"I'd like to try something different"))))}}]),t}(n.Component),M=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"How to Help Longterm...")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis. Tincidunt augue interdum velit euismod in pellentesque massa. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Fames ac turpis egestas integer eget aliquet nibh praesent. Convallis convallis tellus id interdum. Arcu odio ut sem nulla pharetra diam sit amet. Ac placerat vestibulum lectus mauris. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ``"))))}}]),t}(n.Component),H=a(99);function V(e){var t=e.component,a=e.authenticated,n=Object(H.a)(e,["component","authenticated"]);return l.a.createElement(m.b,Object.assign({},n,{render:function(e){return!0===a?l.a.createElement(t,Object.assign({},e,n)):l.a.createElement(m.a,{to:"/login"})}}))}a(226);var W=function(){return l.a.createElement("div",{id:"App"},l.a.createElement(c,null),l.a.createElement(o,null),l.a.createElement("div",{id:"page-wrap"},l.a.createElement(u.a,null,l.a.createElement(m.b,{exact:!0,path:"/",component:b}),l.a.createElement(m.b,{exact:!0,path:"/contact",component:P}),l.a.createElement(m.b,{exact:!0,path:"/about",component:_}),l.a.createElement(m.b,{exact:!0,path:"/future",component:M}),l.a.createElement(m.b,{exact:!0,path:"/anxious",component:F}),l.a.createElement(m.b,{exact:!0,path:"/signUp",component:A}),l.a.createElement(m.b,{exact:!0,path:"/login",component:j}),l.a.createElement(V,{exact:!0,path:"/account",component:L.a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.09228632.chunk.js.map