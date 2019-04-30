(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{224:function(e,t,a){},225:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(68),r=a.n(i),c=a(3),s=a(4),o=a(6),m=a(5),u=a(7);var h=function(){return l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",{className:"nav-wrapper"},l.a.createElement("h5",{className:"brand-logo"},l.a.createElement("i",{className:"material-icons heal"},"healing"),"Balm")))},p=a(94),d=function(e){return l.a.createElement(p.slide,{right:!0},l.a.createElement("a",{className:"menu-item waves-effect waves-light",href:"/"},l.a.createElement("i",{className:"material-icons left"},"home"),"Home"),l.a.createElement("a",{className:"menu-item waves-effect waves-light",href:"/about"},l.a.createElement("i",{className:"material-icons left"},"info"),"About"),l.a.createElement("a",{className:"menu-item waves-effect waves-light",href:"/anxious"},l.a.createElement("i",{className:"material-icons left"},"sentiment_dissatisfied"),"I'm having anxiety"),l.a.createElement("a",{className:"menu-item waves-effect waves-light",href:"/future"},l.a.createElement("i",{className:"material-icons left"},"restore"),"Long Term Help"),l.a.createElement("a",{className:"menu-item waves-effect waves-light",href:"/contact"},l.a.createElement("i",{className:"material-icons left"},"comment"),"Contact"),l.a.createElement("a",{href:"/login",className:"menu-item waves-effect waves-light"},l.a.createElement("i",{className:"material-icons left"},"face"),"Log In"))},E=a(27),f=a(14),b=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"poster"},l.a.createElement("h1",null,"Hey. How ya doin'?")),l.a.createElement("div",{className:"buttondiv"},l.a.createElement(E.a,{to:"/about"},l.a.createElement("a",{href:"/about"},l.a.createElement("button",{className:"waves-effect waves-light btn-small"},"I'm good. I'm here to learn."))),l.a.createElement(E.a,{to:"/anxious"},l.a.createElement("a",{href:"/anxious"},l.a.createElement("button",{className:"waves-effect waves-light btn-small"},"I'm feeling anxious actually."))),l.a.createElement("br",null),l.a.createElement(E.a,{to:"/future"},l.a.createElement("a",{href:"/future"},l.a.createElement("button",{className:"waves-effect waves-light btn-small"},"For now okay, but I want help."))),l.a.createElement(E.a,{to:"/contact"},l.a.createElement("a",{href:"/contact"},l.a.createElement("button",{className:"waves-effect waves-light btn-small"},"I want to make a suggestion to help.")))))}}]),t}(n.Component),v=a(33),g=a.n(v),y=a(52),w=function(e){var t=e.onSubmit;return l.a.createElement("div",null,l.a.createElement("h1",null,"Log in"),l.a.createElement("form",{onSubmit:t},l.a.createElement("label",null,"Email",l.a.createElement("input",{style:{width:"100%"},name:"email",type:"email",placeholder:"Email"})),l.a.createElement("label",null,"Password",l.a.createElement("input",{style:{width:"100%"},name:"password",type:"password",placeholder:"Password"})),l.a.createElement("button",{type:"submit"},"Log in"),l.a.createElement("button",null,l.a.createElement("a",{href:"/signup"},"Go to Sign Up"))))},N=a(97),j=a.n(N).a.initializeApp({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_DATABASE,projectId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_SENDER_ID}),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleSignUp=function(){var e=Object(y.a)(g.a.mark(function e(t){var n,l,i;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,l=n.email,i=n.password,e.prev=2,e.next=5,j.auth().signInWithEmailAndPassword(l.value,i.value);case 5:e.sent,a.props.history.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(w,{onSubmit:this.handleSignUp})}}]),t}(n.Component),C=Object(f.d)(O),x=function(e){var t=e.onSubmit;return l.a.createElement("div",null,l.a.createElement("h1",null,"Sign up"),l.a.createElement("form",{onSubmit:t},l.a.createElement("label",null,"Email",l.a.createElement("input",{style:{width:"100%"},name:"email",type:"email",placeholder:"Email"})),l.a.createElement("label",null,"Password",l.a.createElement("input",{style:{width:"100%"},name:"password",type:"password",placeholder:"Password"})),l.a.createElement("button",{type:"submit"},"Sign Up")))},I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleSignUp=function(){var e=Object(y.a)(g.a.mark(function e(t){var n,l,i;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements,l=n.email,i=n.password,e.prev=2,e.next=5,j.auth().createUserWithEmailAndPassword(l.value,i.value);case 5:e.sent,a.props.history.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(x,{onSubmit:this.handleSignUp})}}]),t}(n.Component),k=Object(f.d)(I),A=a(53),S=a(31),_=a(70),P=a.n(_),R={getRemedy:function(){return P.a.get("/api")},getFilterRemedy:function(){console.log("lo")},saveSuggestion:function(e){return P.a.post("/api/suggestion",e)}},T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(A.a)({},l,n))},a.handleFormSubmit=function(e){if(e.preventDefault(),"on"===a.state.items)var t=!0;else t=!1;R.saveSuggestion({description:a.state.desc,location:a.state.location,noiselvl:a.state.noiselvl,physicallvl:a.state.physicallvl,things_needed:a.state.itemslist,if_required:t}).catch(function(e){return console.log(e)})},a.state={desc:"",location:[],noiselvl:3,physicallvl:3,items:null,itemslist:""},a.handleInputChange=a.handleInputChange.bind(Object(S.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("form",{action:"#"},l.a.createElement("label",{for:"desc"},"Tell us what you do to calm down"),l.a.createElement("textarea",{name:"desc",class:"materialize-textarea",value:this.state.desc,onChange:this.handleInputChange}),l.a.createElement("label",null,"This activity works at..."),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{name:"location",type:"checkbox",value:"home",onChange:this.handleInputChange}),l.a.createElement("span",null,"Home"))),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{name:"location",type:"checkbox",value:"work",onChange:this.handleInputChange}),l.a.createElement("span",null,"Work/School"))),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{name:"location",type:"checkbox",value:"public",onChange:this.handleInputChange}),l.a.createElement("span",null,"Public"))),l.a.createElement("label",null,"This activity is this noisy..."),l.a.createElement("p",{className:"range-field"},l.a.createElement("input",{type:"range",name:"noiselvl",min:"1",max:"5",value:this.state.noiselvl,onChange:this.handleInputChange})),l.a.createElement("label",null,"This activity is this physical..."),l.a.createElement("p",{className:"range-field"},l.a.createElement("input",{type:"range",name:"physicallvl",min:"1",max:"5",value:this.state.physicallvl,onChange:this.handleInputChange})),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{class:"with-gap",name:"items",type:"radio",onChange:this.handleInputChange}),l.a.createElement("span",null,"Check if this Activity needs items"))),l.a.createElement("label",{for:"items"},"Tell us what this activity needs ONLY IF it needs any."),l.a.createElement("textarea",{name:"itemslist",value:this.state.itemslist,className:"materialize-textarea",onChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement("button",{className:"waves-effect waves-light btn-small",type:"submit",onClick:this.handleFormSubmit},"Submit")))}}]),t}(n.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Submit your Ideas!")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s10"},l.a.createElement("h5",null,"This is a form to make suggestions for our database of immediate fixes. Feel free to fill it out and maybe you'll see your suggestion on our website!"),l.a.createElement("br",null),l.a.createElement(T,null))))}}]),t}(n.Component),U=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"About Anxiety")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h4",null,"What is Anxiety?"),l.a.createElement("p",{className:"flow-text"},"Generally speaking anxiety is an emotional response that every human can experience. People most often think of anxiety when they imagine public speaking. For some that is a form of anxiety but it's important to know that type of anxiety isn't what doctors are diagnosing when they treat a patient. "),l.a.createElement("p",{className:"flow-text"},"Anxiety is used more as an umbrella term for multiple types of disorders. For it to be diagnosable the effects of the anxiety need to be pervasive, and disruptive to the sufferers life over a span of significant time. Extreme examples of this can be the inability to leave their house because of fear of social interaction, a fear of having a panic attack to the point which then triggers an attack, or someone who compulsively washes their hands past the point of bleeding. The sufferers thought patterns can also cause destructive behaviors (i.e self harm, substance abuse) as coping mechanisms."),l.a.createElement("p",{className:"flow-text"},"Anxiety disorders can be classified two ways, one being a distress disorder (generalized anxiety disorder, and post traumatic stress disorder) and another being fear disorders (social anxiety or specific phobias)."),l.a.createElement("br",null),l.a.createElement("h4",null,"Why do people suffer from it?"),l.a.createElement("p",{className:"flow-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu magna nec felis semper tincidunt. Maecenas posuere accumsan sodales. Vestibulum ornare eros sodales nunc porta, vitae consequat orci eleifend. Nullam pretium vehicula ornare. Pellentesque turpis eros, sagittis sit amet risus quis, aliquam dignissim metus. Cras nec tortor tellus. Phasellus consequat neque magna, non bibendum mauris molestie nec. Cras sollicitudin commodo consectetur. Maecenas viverra libero quis elit volutpat aliquam. Morbi et arcu convallis, ultricies ligula vel, volutpat mi. In at risus a urna mollis porttitor. Ut posuere arcu suscipit justo sodales mattis."),l.a.createElement("br",null),l.a.createElement("h4",null,"How can I help?"),l.a.createElement("p",{className:"flow-text"},"How to help a sufferer of anxiety is completely dependant on that person. Anxiety is as unique as people are. Try having a discussion if you feel you can truly help that person. If not you could point them in the direction of services and options so that they can help themselves. It's important to know that it's not necessarily bad to give someone struggling room to breathe should they want or need it. "),l.a.createElement("p",{className:"flow-text"},"There are things that you can keep in mind if you are working to help someone with their anxiety."),l.a.createElement("br",null),l.a.createElement("blockquote",null,l.a.createElement("ul",{className:"flow-text"},l.a.createElement("li",null,"Their reaction is NOT personal"),l.a.createElement("li",null,"There ARE physical symptoms"),l.a.createElement("li",null))))))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h3",null,"Welcome to your User Dashboard")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s4"},l.a.createElement("p",null,"This is for col 1")),l.a.createElement("div",{className:"col s4"},l.a.createElement("p",null,"This is for col 2")),l.a.createElement("div",{className:"col s4"},l.a.createElement("p",null,"This is for col 3"))),l.a.createElement("div",{className:"row"}))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(A.a)({},l,n))},a.handleFormSubmit=function(e){e.preventDefault(),alert("Roger roger! \n"),R.getRemedy().then(function(e){a.setState({objects:e.data})}).catch(function(e){return console.log(e)})},a.state={location:"",noiselvl:3,physicallvl:3,items:null},a.handleInputChange=a.handleInputChange.bind(Object(S.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("form",{action:"#"},l.a.createElement("label",null,"I am at..."),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{className:"with-gap",name:"location",type:"radio",value:"home",onChange:this.handleInputChange}),l.a.createElement("span",null,"Home"))),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{className:"with-gap",name:"location",type:"radio",value:"work",onChange:this.handleInputChange}),l.a.createElement("span",null,"Work/School"))),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{className:"with-gap",name:"location",type:"radio",value:"public",onChange:this.handleInputChange}),l.a.createElement("span",null,"Public"))),l.a.createElement("label",null,"Activity Noise Level"),l.a.createElement("p",{className:"range-field"},l.a.createElement("input",{type:"range",name:"noiselvl",min:"1",max:"5",value:this.state.noiselvl,onChange:this.handleInputChange})),l.a.createElement("label",null,"Activity Physical Level"),l.a.createElement("p",{className:"range-field"},l.a.createElement("input",{type:"range",name:"physicallvl",min:"1",max:"5",value:this.state.physicallvl,onChange:this.handleInputChange})),l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{name:"items",type:"checkbox",value:"false",onChange:this.handleInputChange}),l.a.createElement("span",null,"I can use items right now"))),l.a.createElement("br",null),l.a.createElement("button",{className:"waves-effect waves-light btn-small",type:"submit",onClick:function(t){return e.handleFormSubmit(t)}},"Submit"))))}}]),t}(n.Component);function D(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}var F=0,H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={objects:[]},a.loadRemedies=function(){R.getRemedy().then(function(e){a.setState({objects:e.data}),D(a.state.objects)}).catch(function(e){return console.log(e)})},a.handleFormSubmit=function(e){e.preventDefault(),void 0===a.state.objects[F]?(F=0,D(a.state.objects)):(document.getElementById("desc").innerHTML=a.state.objects[F].description,void 0!==a.state.objects[F].things_needed?document.getElementById("things").innerHTML=a.state.objects[F].things_needed:document.getElementById("things").innerHTML=""),F++},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadRemedies()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row center-align"},l.a.createElement("h4",null,"Here's a reccomendation to help...")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s3 filter left-align pull-s2"},l.a.createElement(q,null)),l.a.createElement("div",{className:"col s7 center-align",id:"remedies"},l.a.createElement("p",{id:"desc",className:"flow-text"}),l.a.createElement("p",{id:"things",className:"flow-text"})),l.a.createElement("div",{className:"col 2"}),l.a.createElement("div",{className:"row center-align"},l.a.createElement("button",{className:"waves-effect waves-light btn-small",onClick:this.handleFormSubmit},"I'd like to try something different"))))}}]),t}(n.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"How to Help Longterm...")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt lobortis. Tincidunt augue interdum velit euismod in pellentesque massa. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Fames ac turpis egestas integer eget aliquet nibh praesent. Convallis convallis tellus id interdum. Arcu odio ut sem nulla pharetra diam sit amet. Ac placerat vestibulum lectus mauris. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. ``"))))}}]),t}(n.Component),W=(a(224),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"App"},l.a.createElement(h,null),l.a.createElement(d,null),l.a.createElement("div",{id:"page-wrap"},l.a.createElement(E.a,null,l.a.createElement(f.a,{exact:!0,path:"/",component:b}),l.a.createElement(f.a,{exact:!0,path:"/contact",component:L}),l.a.createElement(f.a,{exact:!0,path:"/about",component:U}),l.a.createElement(f.a,{exact:!0,path:"/future",component:M}),l.a.createElement(f.a,{exact:!0,path:"/anxious",component:H}),l.a.createElement(f.a,{exact:!0,path:"/signUp",component:k}),l.a.createElement(f.a,{exact:!0,path:"/login",component:C}),l.a.createElement(f.a,{exact:!0,path:"/account",component:B}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,a){e.exports=a(225)}},[[98,1,2]]]);
//# sourceMappingURL=main.6baa5ffa.chunk.js.map