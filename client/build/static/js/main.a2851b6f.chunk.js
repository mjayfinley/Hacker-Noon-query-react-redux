(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(76)},47:function(e,t,n){},49:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(26),o=n.n(c),i=n(8),u=(n(47),n(49),n(28)),s=n.n(u),l=n(29),h=n.n(l),m=function(e){return 100*e},f=function(e){alert("Payment Successful")},d=function(e){alert("Payment Error")},b=function(e,t){return function(n){return s.a.post("http://myapidomain.com",{description:t,source:n.id,currency:"USD",amount:m(e)}).then(f).catch(d)}},p=function(e){var t=e.name,n=e.description,r=e.amount;return a.a.createElement(h.a,{name:t,description:n,amount:m(r),token:b(r,n),currencty:"USD",stripeKey:"pk_test_ayUk48WRKOawhGJrSScwMh7L"})},v=(n(70),"STORY_ARCHIVE"),y="STORIES_FETCH",w="STORIES_FETCH_ERROR",E="STORIES_ADD",O=function(e){var t,n=e.storyState,r=e.archiveState;return n.stories.filter((t=r,function(e){return-1===t.indexOf(e.objectID)}))},S=(n(72),Object(i.b)(null,function(e){return{onArchive:function(t){return e(function(e){return{type:v,id:e}}(t))}}})(function(e){var t=e.story,n=e.columns,r=e.onArchive,c=t.title,o=t.url,i=t.author,u=t.num_comments,s=t.points,l=t.objectID;return a.a.createElement("div",{className:"story"},a.a.createElement("span",{style:{width:n.title.width}},a.a.createElement("a",{href:o},c)),a.a.createElement("span",{style:{width:n.author.width}},i),a.a.createElement("span",{style:{width:n.comments.width}},u),a.a.createElement("span",{style:{width:n.points.width}},s),a.a.createElement("span",{style:{width:n.archive.width}},a.a.createElement("button",{type:"button",className:"button-inline",onClick:function(){return r(l)}},"Archive")))})),j={title:{label:"Title",width:"40%"},author:{label:"Author",width:"30%"},comments:{label:"Comments",width:"10%"},points:{label:"Points",width:"10%"},archive:{width:"10%"}},k=Object(i.b)(function(e){return{stories:O(e),error:(t=e,t.storyState.error)};var t})(function(e){var t=e.stories,n=e.error;return a.a.createElement("div",{className:"stories"},a.a.createElement("div",{className:"stories-header"},Object.keys(j).map(function(e){return a.a.createElement("span",{key:e,style:{width:j[e].width}},j[e].label)})),n&&a.a.createElement("p",{className:"error"},"Something went wrong..."),(t||[]).map(function(e){return a.a.createElement(S,{key:e.objectID,story:e,columns:j})}))}),g=n(30),_=n(31),C=n(36),D=n(32),N=n(37),x=n(11),R=function(e){return{type:E,stories:e}},I=function(e){return{type:w,error:e}},T=function(e){var t=e.onClick,n=e.className,r=e.type,c=void 0===r?"button":r,o=e.children;return a.a.createElement("button",{type:c,className:n,onClick:t},o)},q=T,A=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(C.a)(this,Object(D.a)(t).call(this,e))).state={query:""},n.onChange=n.onChange.bind(Object(x.a)(Object(x.a)(n))),n.onSubmit=n.onSubmit.bind(Object(x.a)(Object(x.a)(n))),n}return Object(N.a)(t,e),Object(_.a)(t,[{key:"onSubmit",value:function(e){var t=this.state.query;t&&(this.props.onFetchStories(t),this.setState({query:""})),e.preventDefault()}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({query:t})}},{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit},a.a.createElement("input",{type:"text",value:this.state.query,onChange:this.onChange}),a.a.createElement(q,{type:"submit"},"Search"))}}]),t}(r.Component),F=Object(i.b)(null,function(e){return{onFetchStories:function(t){return e(function(e){return{type:y,query:e}}(t))}}})(A),P=function(){return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"interactions"},a.a.createElement(F,null),a.a.createElement("div",null,a.a.createElement("label",null,"Donate here!  ",a.a.createElement(p,{name:"Donate!",description:"Buy me a beer",amount:1})))),a.a.createElement(k,null))},U=n(9),B=n(33),H=n(34),J={stories:[],error:null},W=function(e,t){return{stories:t.stories,error:null}},K=function(e,t){return{stories:[],error:t.error}};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return W(e,t);case w:return K(e,t);default:return e}},M=n(35),V=[],X=function(e,t){return[].concat(Object(M.a)(e),[t.id])};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return X(e,t);default:return e}},Y=Object(U.c)({storyState:L,archiveState:G}),$=n(13),z=n.n($),Q=n(6),Z=function(e){return fetch("https://hn.algolia.com/api/v1/search?query="+e).then(function(e){return e.json()})},ee=z.a.mark(te);function te(e){var t,n;return z.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,r.prev=1,r.next=4,Object(Q.b)(Z,t);case 4:return n=r.sent,r.next=7,Object(Q.c)(R(n.hits));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(Q.c)(I(r.t0));case 13:case"end":return r.stop()}},ee,this,[[1,9]])}var ne=z.a.mark(re);function re(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.a)([Object(Q.d)(y,te)]);case 2:case"end":return e.stop()}},ne,this)}var ae=re,ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,oe=Object(H.a)(),ie=Object(U.e)(Y,ce(Object(U.a)(oe,B.a)));oe.run(ae);var ue=ie;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(){o.a.render(a.a.createElement(i.a,{store:ue},a.a.createElement(P,null)),document.getElementById("root"))}ue.subscribe(se),se(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,2,1]]]);
//# sourceMappingURL=main.a2851b6f.chunk.js.map