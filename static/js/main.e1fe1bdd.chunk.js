(this["webpackJsonpjob-find"]=this["webpackJsonpjob-find"]||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(4),r=t.n(c),l=(t(13),t(1)),s=t(7),i=t(2),m=t.n(i),u=(t(15),t(5)),E=t.n(u),p=t(6),A=t.n(p);function g(e){for(var a=e.toString(),t=[],n=0;n<a.length;n+=3)t.push(a.slice(n,n+3));return t.join(",")}var d=function(e){var a=e.job,t=a.name,n=a.hiring_company,c=a.location,r=a.posted_time_friendly,l=a.snippet,s=a.url,i=a.salary_max_annual,m=a.salary_min_annual;function u(e){console.log("stopping prop"),e.nativeEvent.stopPropagation(),e.stopPropagation()}return o.a.createElement(E.a,{collapsed:!0,render:function(e){var a=e.toggle,E=e.setCollapsibleElement;return o.a.createElement("section",{className:"job-posting",onClick:a},o.a.createElement("span",{className:"title"},t),o.a.createElement("span",{className:"hiring-company"},n.name),o.a.createElement("span",{className:"location"},c),o.a.createElement("span",{className:"posted-time"},r),o.a.createElement("div",{className:"url-container"},o.a.createElement("a",{className:"url",href:s,onClick:u},o.a.createElement("img",{src:A.a,alt:"url",width:30,height:30}))),o.a.createElement("div",{className:"collapsible",ref:E},o.a.createElement("h4",{className:"description-heading"},"Description"),o.a.createElement("section",{className:"snippet",dangerouslySetInnerHTML:{__html:l}}),o.a.createElement("section",{className:"salary-container"},o.a.createElement("div",{className:"salary-min"},o.a.createElement("label",{className:"label"},"Min Salary:"),o.a.createElement("span",{className:"value"},"$",g(m))),o.a.createElement("div",{className:"salay-max"},o.a.createElement("label",{className:"label"},"Max Salary:"),o.a.createElement("span",{className:"value"},"$",g(i))))))}})},b=function(e){var a=e.jobs.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(d,{job:e}))}));return o.a.createElement("ul",{id:"job-list"},a)},h="https://api.ziprecruiter.com/jobs/v1";console.log("env: ",Object({NODE_ENV:"production",PUBLIC_URL:""}));var v=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ZIP_RECRUITER_API_KEY;var f=function(){var e=Object(n.useState)({location:"",search:"",jobList:[],searchStatus:"noSearches"}),a=Object(s.a)(e,2),t=a[0],c=a[1],r=t.location,i=t.search,u=t.jobList;var E={noSearches:function(){return o.a.createElement("h3",{className:"usage-prompt no-searches"},"Time to look for a job!")},notFound:function(){return o.a.createElement("h3",{className:"usage-prompt not-found"},"No jobs matching these search terms found!")},success:function(){return o.a.createElement("h3",{className:"usage-prompt success"},"Jobs found!")}}[t.searchStatus]();return o.a.createElement("div",{className:"App"},o.a.createElement("nav",{id:"top-bar",className:"title"},o.a.createElement("h1",{id:"app-title"},"JobFind")),o.a.createElement("div",{className:"content-container"},o.a.createElement("div",{className:"search-container"},E,o.a.createElement("form",{id:"search-form",onSubmit:function(e){e.preventDefault(),console.log("submitting"),function(e,a){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=encodeURI(h+"?api_key=".concat(v,"&location=").concat(e,"&search=").concat(a)),console.log(t),n.next=4,m.a.awrap(fetch(t,{}));case 4:return n.abrupt("return",n.sent.json());case 5:case"end":return n.stop()}}))}(r,i).then((function(e){console.log("data: ",e),c(Object(l.a)({},t,{jobList:e.jobs,searchStatus:e.jobs.length>0?"success":"notFound"}))}))}},o.a.createElement("label",{className:"location-label"},"Location"),o.a.createElement("input",{name:"location",type:"text",value:r,onChange:function(e){c(Object(l.a)({},t,{location:e.target.value}))},placeholder:"location"}),o.a.createElement("label",{className:"keywords-label"},"Keywords"),o.a.createElement("input",{name:"keywords",type:"text",value:i,onChange:function(e){c(Object(l.a)({},t,{search:e.target.value}))},placeholder:"job keywords"}),o.a.createElement("div",{className:"button-row"},o.a.createElement("input",{type:"submit"}))),o.a.createElement(b,{jobs:u}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,a){e.exports="data:image/png;base64,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"},8:function(e,a,t){e.exports=t(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.e1fe1bdd.chunk.js.map