(this.webpackJsonpway2go=this.webpackJsonpway2go||[]).push([[0],{26:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),o=a.n(r),c=(a(31),a(32),a(13)),i=a(2),s=a(7),m=a(8),u=a(17),d=a(10),p=a(9),h=a(12),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isLogin:!1},n.handelSubmit=n.handelSubmit.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handelSubmit",value:function(e){var t=this,a={name:e.target.name.value,password:e.target.password.value,title:e.target.title.value};e.preventDefault(),fetch("/",{method:"POST",body:JSON.stringify({data:a}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.isOK?(t.setState({isLogin:!0}),console.log("loggeed in"),t.props.changeSchoolDetails(e.results)):(console.log("password incorrect"),t.setState({isLogin:!1}),alert("\u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9 \u05d0\u05d5 \u05e1\u05d9\u05e1\u05de\u05d0 \u05e9\u05d2\u05d5\u05d9\u05d9\u05dd")),console.log(e.results)}))}},{key:"render",value:function(){return this.state.isLogin?l.a.createElement(i.a,{to:"/Orders"}):l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handelSubmit},l.a.createElement("select",{name:"title"},l.a.createElement("option",{value:"school"},"school"),l.a.createElement("option",{value:"supplier"},"supplier"),l.a.createElement("option",{value:"coordinator"},"coordinator"),l.a.createElement("option",{value:"loby"},"loby")),l.a.createElement("p",null," name"),l.a.createElement("input",{name:"name",type:"text",placeholder:"name"}),l.a.createElement("p",null," password"),l.a.createElement("input",{name:"password",type:"text",placeholder:"password"}),l.a.createElement("br",null),l.a.createElement("button",null,"send ")))}}]),a}(l.a.Component),v=Object(h.b)((function(e){return{schoolCityR:e.schoolCityR}}),(function(e){return{changeSchoolDetails:function(t){e({type:"CHANGE_DETAILS",newSchoolDetails:t})}}}))(E),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"log in")}}]),a}(l.a.Component),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(c.b,{to:"/orderForm"},l.a.createElement("button",null," \u05e2\u05d1\u05d5\u05e8 \u05dc\u05d8\u05d5\u05e4\u05e1 \u05d4\u05d6\u05de\u05e0\u05d4  "))}}]),a}(l.a.Component),g=(a(38),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleSubmit=function(t){t.preventDefault();var a={schoolName:e.props.schoolName,schoolCity:e.props.schoolCity,schoolStreet:e.props.schoolStreet,schoolNumber:e.props.schoolNumber,schoolSymbol:e.props.schoolSymbol,orderName:t.target.orderName.value,orderPossition:t.target.orderPossition.value,orderPhone:t.target.orderPhone.value,orderObjective:t.target.orderObjective.value,orderType:t.target.orderType.value,orderDate:t.target.orderDate.value,orderDay:t.target.orderDay.value,orderPickuponly:t.target.orderPickuponly.value,orderTime:t.target.orderTime.value,orderStudents:t.target.orderStudents.value,orderTripA:t.target.orderTripA.value,orderAddressA:t.target.orderAddressA.value,orderReturnTimeA:t.target.orderReturnTimeA.value,orderTripB:t.target.orderTripB.value,orderAddressB:t.target.orderAddressB.value,orderReturnTimeB:t.target.orderReturnTimeB.value,orderComments:t.target.orderComments.value,orderContact:t.target.orderContact.value,orderContactPosition:t.target.orderContactPosition.value,orderContactPhone:t.target.orderContactPhone.value};console.log(a)},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"formContainer"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,"\u05d8\u05d5\u05e4\u05e1 2 - \u05d4\u05d6\u05de\u05e0\u05d4 \u05d5\u05ea\u05d9\u05d7\u05d5\u05e8 \u05e9\u05dc \u05d4\u05e1\u05e2\u05d4 \u05d9\u05d9\u05e2\u05d5\u05d3\u05d9\u05ea   "),l.a.createElement("div",{className:"setAsRow"},l.a.createElement("div",null," \u05de\u05e1\u05e4\u05e8 \u05d4\u05d6\u05de\u05e0\u05d4 -\u05d9\u05de\u05d5\u05dc\u05d0 \u05e2\u05dc \u05d9\u05d3\u05d9 \u05de\u05e0\u05d4\u05dc \u05d4\u05de\u05d5\u05e7\u05d3   "),l.a.createElement("div",null,"_________")),l.a.createElement("div",{className:"setAsRow"},l.a.createElement("div",{className:"title"}," \u05e9\u05dd \u05d4\u05d1\u05d9\u05ea \u05e1\u05e4\u05e8   "),l.a.createElement("div",null,"_",this.props.schoolName,"_"),l.a.createElement("div",{className:"title"}," \u05db\u05ea\u05d5\u05d1\u05ea \u05d4\u05d1\u05d9\u05ea \u05e1\u05e4\u05e8   "),l.a.createElement("div",null,"_",this.props.schoolCity,"__",this.props.schoolStreet,"__",this.props.schoolNumber,"_"),l.a.createElement("div",{className:"title"}," \u05e1\u05de\u05dc \u05d4\u05d1\u05d9\u05ea \u05e1\u05e4\u05e8   "),l.a.createElement("div",null,"_",this.props.schoolSymbol,"_")),l.a.createElement("div",{className:"setAsRow"},l.a.createElement("div",{className:"title"}," \u05e9\u05dd  \u05d4\u05de\u05d6\u05de\u05d9\u05df:   "),l.a.createElement("input",{name:"orderName",type:"text",placeholder:"\u05e9\u05dd \u05d4\u05de\u05d6\u05de\u05d9\u05df"}),l.a.createElement("div",{className:"title"}," \u05ea\u05e4\u05e7\u05d9\u05d3:    "),l.a.createElement("input",{name:"orderPossition",type:"text",placeholder:"\u05ea\u05e4\u05e7\u05d9\u05d3 "}),l.a.createElement("div",{className:"title"}," \u05d8\u05dc\u05e4\u05d5\u05df:   "),l.a.createElement("input",{name:"orderPhone",type:"number",placeholder:"\u05d8\u05dc\u05e4\u05d5\u05df "})),l.a.createElement("div",{className:"setAsRow"},l.a.createElement("div",null," \u05de\u05d8\u05e8\u05ea \u05d4\u05e0\u05e1\u05d9\u05e2\u05d4"),l.a.createElement("select",{name:"orderObjective"},l.a.createElement("option",null,"\u05e1\u05d9\u05d5\u05e8"),l.a.createElement("option",null,"\u05e7\u05d5\u05e8\u05e1"),l.a.createElement("option",null,"\u05d4\u05ea\u05e0\u05e1\u05d5\u05ea"),l.a.createElement("option",null,"\u05d0\u05d7\u05e8"))),l.a.createElement("div",{className:"setAsRow"},l.a.createElement("div",null," \u05e1\u05d5\u05d2 \u05d4\u05d6\u05de\u05e0\u05d4 "),l.a.createElement("select",{name:"orderType"},l.a.createElement("option",null,"1- \u05d7\u05d3 \u05e4\u05e2\u05de\u05d9\u05ea \u05dc\u05d9\u05e2\u05d3 \u05d1\u05d5\u05d3\u05d3"),l.a.createElement("option",null,"2- \u05d7\u05d5\u05d6\u05e8\u05ea \u05d1\u05d9\u05de\u05d9\u05dd \u05e7\u05d1\u05d5\u05e2\u05d9\u05dd \u05d1\u05e9\u05d1\u05d5\u05e2"),l.a.createElement("option",null,"3- \u05d7\u05d3 \u05e4\u05e2\u05de\u05d9\u05ea \u05dc\u05de\u05e1\u05e4\u05e8 \u05d9\u05e2\u05d3\u05d9\u05dd"),l.a.createElement("option",null,"4- \u05d7\u05d5\u05d6\u05e8\u05ea \u05dc\u05de\u05e1' \u05d9\u05e2\u05d3\u05d9\u05dd  "),l.a.createElement("option",null,"5- \u05e8\u05db\u05d1 \u05e6\u05de\u05d5\u05d3 (\u05d1\u05d0\u05d9\u05e9\u05d5\u05e8 \u05de\u05e8\u05d0\u05e9 \u05e9\u05dc \u05e8\u05db\u05d6 \u05ea\u05e2\u05e9\u05d9\u05d3\u05e2) , \u05dc\u05de\u05e9\u05da \u05d6\u05de\u05df"),l.a.createElement("option",null,"6- \u05e4\u05e8\u05d5\u05d9\u05e7\u05d8 /\u05d0\u05d7\u05e8\u05ea "))),l.a.createElement("div",{className:"setAsRow"},l.a.createElement("div",null," \u05ea\u05d0\u05e8\u05d9\u05da \u05d4\u05e1\u05e2\u05d4 "),l.a.createElement("input",{name:"orderDate",type:"date",placeholder:"\u05ea\u05d0\u05e8\u05d9\u05da "}),l.a.createElement("div",null,"      \u05d9\u05d5\u05dd \u05d1\u05e9\u05d1\u05d5\u05e2 :  (\u05d1\u05d4\u05d6\u05de\u05e0\u05d5\u05ea \u05de\u05e1\u05d5\u05d2 : 1, 3, 5, 6)    "),l.a.createElement("select",{name:"orderDay"},l.a.createElement("option",null,"\u05d0"),l.a.createElement("option",null,"\u05d1"),l.a.createElement("option",null,"\u05d2"),l.a.createElement("option",null,"\u05d3"),l.a.createElement("option",null,"\u05d4"),l.a.createElement("option",null,"\u05d5"),l.a.createElement("option",null,"\u05e9")),l.a.createElement("div",null," \u05d0\u05d9\u05e1\u05d5\u05e3 \u05d1\u05dc\u05d1\u05d3 "),l.a.createElement("select",{name:"orderPickuponly"},l.a.createElement("option",null,"\u05dc\u05d0"),l.a.createElement("option",null,"\u05db\u05df"))),l.a.createElement("div",{className:"setAsRow"},l.a.createElement("div",null,"\u05e9\u05e2\u05ea \u05d0\u05d9\u05e1\u05d5\u05e3 \u05de\u05d1\u05d9\u05ea \u05d4\u05e1\u05e4\u05e8 : (\u05d7\u05d5\u05d1\u05d4 \u05dc\u05d4\u05ea\u05d9\u05d9\u05e6\u05d1 \u05dc\u05e4\u05d7\u05d5\u05ea 10 \u05d3\u05e7\u05d5\u05ea \u05dc\u05e4\u05e0\u05d9 \u05e9\u05e2\u05ea \u05d4\u05d0\u05d9\u05e1\u05d5\u05e3)"),l.a.createElement("input",{name:"orderTime",type:"time",placeholder:"\u05e9\u05e2\u05d4 "})),l.a.createElement("div",{className:"setAsRow"},l.a.createElement("div",null,"\u05de\u05e1' \u05ea\u05dc\u05de\u05d9\u05d3\u05d9\u05dd ( \u05e6\u05e4\u05d9) : "),l.a.createElement("input",{name:"orderStudents",type:"number",placeholder:"\u05ea\u05dc\u05de\u05d9\u05d3\u05d9\u05dd "})),l.a.createElement("div",null,"\u05d9\u05e2\u05d3 \u05e0\u05e1\u05d9\u05e2\u05d4"),l.a.createElement("div",{className:"destinationTable"},l.a.createElement("div",{className:"headTable"},"\u05e9\u05dd \u05de\u05e4\u05e2\u05dc / \u05de\u05e1\u05d2\u05e8\u05ea \u05d4\u05d4\u05ea\u05e0\u05e1\u05d5\u05ea"),l.a.createElement("div",{className:"headTable"},"\u05db\u05ea\u05d5\u05d1\u05ea \u05de\u05dc\u05d0\u05d4 (\u05d9\u05e9\u05d5\u05d1, \u05e8\u05d7\u05d5\u05d1, \u05de\u05e1' \u05d1\u05d9\u05ea)"),l.a.createElement("div",{className:"headTable"},"\u05e9\u05e2\u05ea \u05d7\u05d6\u05e8\u05d4"),l.a.createElement("input",{className:"headTable",name:"orderTripA",type:"text",placeholder:" "}),l.a.createElement("input",{className:"headTable",name:"orderAddressA",type:"text",placeholder:" "}),l.a.createElement("input",{className:"headTable",name:"orderReturnTimeA",type:"time",placeholder:" "}),l.a.createElement("input",{className:"headTable",name:"orderTripB",type:"text",placeholder:" "}),l.a.createElement("input",{className:"headTable",name:"orderAddressB",type:"text",placeholder:" "}),l.a.createElement("input",{className:"headTable",name:"orderReturnTimeB",type:"time",placeholder:" "})),l.a.createElement("div",null,"(*) \u05e2\u05d1\u05d5\u05e8 \u05e1\u05d1\u05d1 \u05e4\u05e0\u05d9\u05de\u05d9 / \u05e2\u05e6\u05d9\u05e8\u05d4 \u05d1\u05de\u05e1' \u05ea\u05d7\u05e0\u05d5\u05ea \u05dc\u05dc\u05d0 \u05e4\u05d9\u05e8\u05d5\u05d8 \u05db\u05dc \u05d4\u05ea\u05d7\u05e0\u05d5\u05ea \u05d1\u05d8\u05d1\u05dc\u05d4 (\u05d9\u05e9 \u05dc\u05e4\u05e8\u05d8 \u05d1\u05d4\u05e2\u05e8\u05d5\u05ea)"),l.a.createElement("div",{className:"setAsRow"},l.a.createElement("div",null,"\u05d4\u05e2\u05e8\u05d5\u05ea \u05d5\u05d1\u05e7\u05e9\u05d5\u05ea \u05de\u05d9\u05d5\u05d7\u05d3\u05d5\u05ea"),l.a.createElement("input",{name:"orderComments",type:"text",placeholder:"\u05d4\u05e2\u05e8\u05d5\u05ea "})),l.a.createElement("div",{className:"setAsRow"},l.a.createElement("div",null,"\u05d0\u05d9\u05e9 \u05e7\u05e9\u05e8 \u05dc\u05ea\u05d0\u05d5\u05dd \u05d4\u05d4\u05e1\u05e2\u05d4: \u05e9\u05dd \u05e4\u05e8\u05d8\u05d9 + \u05de\u05e9\u05e4\u05d7\u05d4 "),l.a.createElement("input",{name:"orderContact",type:"text",placeholder:"\u05d0\u05d9\u05e9 \u05e7\u05e9\u05e8 "}),l.a.createElement("div",null,"\u05ea\u05e4\u05e7\u05d9\u05d3  "),l.a.createElement("input",{name:"orderContactPosition",type:"text",placeholder:"\u05ea\u05e4\u05e7\u05d9\u05d3 "}),l.a.createElement("div",null,"\u05d8\u05dc\u05e4\u05d5\u05df \u05d9\u05e9\u05d9\u05e8  "),l.a.createElement("input",{name:"orderContactPhone",type:"text",placeholder:"\u05d8\u05dc\u05e4\u05d5\u05df "})),l.a.createElement("button",null,"\u05e9\u05dc\u05d7")))}}]),a}(l.a.Component)),N=Object(h.b)((function(e){return{schoolName:e.schoolNameR,schoolCity:e.schoolCityR,schoolStreet:e.schoolStreetR,schoolNumber:e.schoolNumberR,schoolSymbol:e.schoolSymbolR}}))(g);var S=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(i.b,{path:"/Orders",exact:!0,component:y}),l.a.createElement(i.b,{path:"/",exact:!0,component:v}),l.a.createElement(i.b,{path:"/Main",exact:!0,component:b}),l.a.createElement(i.b,{path:"/orderForm",exact:!0,component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(18),w={schoolNameR:"\u05d1\u05e8\u05e0\u05e8",schoolCityR:"\u05db\u05e4\u05e8 \u05e1\u05d1\u05d0",schoolStreetR:"\u05d6\u05d0\u05d1",schoolNumberR:"56",schoolSymbolR:"666"},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;return"CHANGE_DETAILS"===t.type?(console.log(t.newSchoolDetails[0].name),{schoolNameR:t.newSchoolDetails[0].name,schoolCityR:t.newSchoolDetails[0].city,schoolStreetR:t.newSchoolDetails[0].street,schoolNumberR:t.newSchoolDetails[0].number,schoolSymbolR:t.newSchoolDetails[0].symbol}):e},T=Object(f.b)(R);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h.a,{store:T},l.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.8f0c8eb7.chunk.js.map