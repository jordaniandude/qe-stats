(this["webpackJsonpqe-stats"]=this["webpackJsonpqe-stats"]||[]).push([[0],{226:function(e,t,a){"use strict";a.r(t);a(54);var r=a(0),n=a.n(r),l=a(86),o=a.n(l),c=a(92),s=a(7),i=a(21),m=a.n(i),u=a(34),d=a(1),b=a(2),p=a(4),g=a(3),E=a(5),f=a(20),h={indexAxis:"y",elements:{bar:{borderWidth:2}},responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!0,text:"Overall Test Coverage % / Per Application"}}},v=function(e){var t=e.stats,a=0,r=0,l=0,o=0,c=0;Object.keys(t).forEach((function(e){switch(e){case"sce":a=Math.ceil(100*Number(t[e].automated/t[e].total));break;case"cs":r=Math.ceil(100*Number(t[e].automated/t[e].total));break;case"trends":l=Math.ceil(100*Number(t[e].automated/t[e].total));break;case"utt":o=Math.ceil(100*Number(t[e].automated/t[e].total));break;case"mm":c=Math.ceil(100*Number(t[e].automated/t[e].total))}}));var s={labels:["Semantic Core Editor","Curation Studio","Trends UI","Topic Navigator","Moment Maker V3"],datasets:[{data:[a,r,l,o,c,100],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]};return n.a.createElement("div",{className:"center"},n.a.createElement(f.a,{data:s,options:h}))},k=a(89),y=a.n(k).a.create({baseURL:"".concat("https://qe-stats.herokuapp.com","/api"),headers:{"Content-Type":"application/json"}}),N={labels:["Jan","Feb","Mar","Apr","May","June"],datasets:[{label:"Semantic Core Editor",data:[20,22,23,25,30],fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"},{label:"Curation Studio",data:[60,63,68,72,77],fill:!1,backgroundColor:"rgba(54, 162, 235, 1)",borderColor:"rgba(54, 162, 235, 0.2)"},{label:"Trends UI",data:[20,22,23,25,30],fill:!1,backgroundColor:"rgba(255, 206, 86, 1)",borderColor:"rgba(255, 206, 86, 0.2)"},{label:"Topic Navigator",data:[20,22,23,25,30],fill:!1,backgroundColor:"rgba(75, 192, 192, 1)",borderColor:"rgba(75, 192, 192, 0.2)"},{label:"Moment Maker V3",data:[20,22,23,25,30],fill:!1,backgroundColor:"rgba(153, 102, 255, 1)",borderColor:"rgba(153, 102, 255, 0.2)"}]},C={scales:{yAxes:[{ticks:{beginAtZero:!0}}]},responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top"},title:{display:!0,text:"# of Tests Over Time / Per Application"}}},j=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={stats:{}},e}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/stats");case 2:t=e.sent,a=t.data,this.setState({stats:a}),console.log("Getting all Stats from server: ",this.state);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{className:"center"},n.a.createElement(f.b,{data:N,options:C}))}}]),t}(n.a.Component),A=a(90),T=a.n(A),w=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"profile-container"},n.a.createElement("div",null,n.a.createElement("img",{src:T.a,alt:"profile",className:"profile-details"})),n.a.createElement("div",{style:{marginLeft:"60px"}},n.a.createElement("p",{style:{margin:0}},"Tariq Elouzeh"),n.a.createElement("p",{style:{float:"left"}},"@jordaniandude"))),n.a.createElement("div",{className:"table-center"},n.a.createElement("table",{className:"info"},n.a.createElement("colgroup",null,n.a.createElement("col",{className:"gray"}),n.a.createElement("col",{className:"lightgray"})),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"TestRail"),n.a.createElement("a",{rel:"noopener noreferrer",href:"https://testrail-mgmt.atlc-it.twitter.biz/testrail/index.php?/suites/view/48940",target:"_blank"},n.a.createElement("td",null,"Test Cases Suite"))),n.a.createElement("tr",null,n.a.createElement("td",null,"JIRA"),n.a.createElement("a",{rel:"noopener noreferrer",href:"https://jira.twitter.biz/browse/ZAP-41",target:"_blank"},n.a.createElement("td",null,"Automation Epic"))),n.a.createElement("tr",null,n.a.createElement("td",null,"Engineering Team"),n.a.createElement("a",{rel:"noopener noreferrer",href:"https://confluence.twitter.biz/pages/viewpage.action?pageId=127557034",target:"_blank"},n.a.createElement("td",null,"Curation Tooling"))),n.a.createElement("tr",null,n.a.createElement("td",null,"Bugs Found by Automation"),n.a.createElement("a",{rel:"noopener noreferrer",href:"https://jira.twitter.biz/issues/?jql=project%20in%20(Zapdos)%20AND%20labels%20in%20(webtf-automation-bug)",target:"_blank"},n.a.createElement("td",null,"Link to JIRA"))),n.a.createElement("tr",null,n.a.createElement("td",null,"Tests Stability Rate"),n.a.createElement("td",null,"99%"))))))},O={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"bottom"},title:{display:!0,text:"Total Test Coverage %"}}},x=function(e){var t=e.stats,a=0,r=0;Object.keys(t).forEach((function(e){a+=t[e].total,r+=t[e].automated}));var l=Math.ceil(100*Number(r/a)),o={labels:["Automated","Not Automation"],datasets:[{data:[l,100-l],backgroundColor:["rgba(75, 192, 192, 0.2)","rgba(255, 99, 132, 0.2)"],borderColor:["rgba(75, 192, 192, 1)","rgba(255, 99, 132, 1)"],borderWidth:1}]};return n.a.createElement("div",{className:"center"},n.a.createElement(f.c,{data:o,options:O}))},M=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(g.a)(t).call(this))).state={data:{}},e}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/stats/latest");case 2:t=e.sent,a=t.data,this.setState({data:a.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement("h2",null,"Curation Tooling Test Automation Stats ",n.a.createElement("span",{"aria-label":"stats",role:"img"},"\ud83d\udcca"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"leftcolumn"},n.a.createElement("div",{className:"card"},n.a.createElement(v,{stats:this.state.data})),n.a.createElement("div",{className:"card"},n.a.createElement(j,null))),n.a.createElement("div",{className:"rightcolumn"},n.a.createElement("div",{className:"card"},n.a.createElement(w,null)),n.a.createElement("div",{className:"card"},n.a.createElement(x,{stats:this.state.data})))))}}]),t}(n.a.Component);o.a.render(n.a.createElement(c.a,null,n.a.createElement(r.Fragment,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",component:M})))),document.getElementById("root"))},54:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/my-pic.35c911ed.jpg"},93:function(e,t,a){e.exports=a(226)}},[[93,1,2]]]);
//# sourceMappingURL=main.087d4fc0.chunk.js.map