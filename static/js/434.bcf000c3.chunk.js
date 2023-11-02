"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[434],{6434:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(3855),r="ContactsPage_main__rIWJn",s="ContactsPage_title__P3MkR",c="ContactsPage_content__nZeCP",i=function(e){return e.contacts.items},l=function(e){return e.filter},o=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},d=n(3356),m="Loader_loaderWrapper__6ypwD",h=n(184),_=function(){return(0,h.jsx)("div",{className:m,children:(0,h.jsx)(d.NB,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",colors:["#F99417","#d2cdfc","#ffc374","#d2cdfc","#F99417"]})})},x=n(9439),f=n(2791),j=n(8560),p="ContactForm_contactForm__y0Rca",b="ContactForm_label__-cVXI",v="ContactForm_input__Bl93P",C="ContactForm_btnAdd__F4QeR",N=n(3634),g=n(8439),F=function(){var e=(0,f.useState)(""),t=(0,x.Z)(e,2),n=t[0],r=t[1],s=(0,f.useState)(""),c=(0,x.Z)(s,2),l=c[0],o=c[1],u=(0,a.I0)(),d=(0,j.v9)(i);return(0,h.jsxs)("form",{className:p,onSubmit:function(e){var t;(e.preventDefault(),t=n,d.some((function(e){return e.name===t})))?alert("".concat(n," already exists!")):(u((0,N.uK)({name:n,number:l})),r(""),o(""))},children:[(0,h.jsx)("label",{className:b,htmlFor:"name",children:"Name"}),(0,h.jsx)("input",{className:v,id:"name",type:"text",name:"name",value:n,onChange:function(e){return r(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,h.jsx)("label",{className:b,htmlFor:"number",children:"Number"}),(0,h.jsx)("input",{className:v,id:"number",type:"tel",name:"number",value:l,onChange:function(e){return o(e.target.value)},pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,h.jsxs)("button",{className:C,type:"submit",children:["Add",(0,h.jsx)(g.Z,{})]})]})},Z=n(4554),k="Contacts_title__-mq9F",y=function(e){var t=e.title,n=e.children;return(0,h.jsxs)(Z.Z,{sx:{flexGrow:1,maxWidth:350,mt:"-32px"},children:[(0,h.jsx)("h2",{className:k,children:t}),n]})},P="Filter_filter__vxThR",w="Filter_label__vEd1E",A="Filter_input__N7T3z",z=n(4808),I=function(){var e=(0,a.I0)(),t=(0,a.v9)(l);return(0,h.jsxs)("div",{className:P,children:[(0,h.jsx)("label",{className:w,htmlFor:"search",children:"Find contacts by name:"}),(0,h.jsx)("input",{className:A,id:"search",name:"filter",value:t,type:"text",onChange:function(t){return e((0,z.W)(t.target.value))}})]})},L="Contact_profile__YAttz",R="Contact_item__j+P5X",W=n(9952),q=n(7247),B=n(3044),D=n(3400),E=function(e){var t=e.id,n=e.name,r=e.number,s=(0,a.I0)();return(0,h.jsxs)("li",{className:R,children:[(0,h.jsxs)("div",{className:L,children:[(0,h.jsx)(B.Z,{children:(0,h.jsx)(W.Z,{})}),n,": ",r]}),(0,h.jsx)(D.Z,{edge:"end","aria-label":"delete",onClick:function(){return s((0,N.GK)(t))},title:"Delete ".concat(n),children:(0,h.jsx)(q.Z,{})})]})},S=n(6934),G=n(7225),J=n(1889),K=function(){var e,t=(0,j.v9)(i),n=(0,j.v9)(l);0!==t.length&&(e=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n));var a=(0,S.ZP)("div")((function(e){return{backgroundColor:e.theme.palette.background.paper}}));return(0,h.jsx)(h.Fragment,{children:0!==t.length&&(0,h.jsx)(J.ZP,{item:!0,xs:12,md:6,sx:{mt:4,mb:2},children:(0,h.jsx)(a,{children:(0,h.jsx)(G.Z,{children:e.map((function(e){return(0,h.jsx)(E,{id:e.id,name:e.name,number:e.number},e.id)}))})})})})},M=function(){var e=(0,a.I0)(),t=(0,a.v9)(o),n=(0,a.v9)(u);return(0,f.useEffect)((function(){e((0,N.yF)())}),[e]),(0,h.jsxs)("div",{className:r,children:[(0,h.jsx)("h1",{className:s,children:"Phonebook"}),t&&!n&&(0,h.jsx)(_,{}),(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)(F,{}),(0,h.jsxs)(y,{title:"Contacts",children:[(0,h.jsx)(I,{}),(0,h.jsx)(K,{})]})]})]})}}}]);
//# sourceMappingURL=434.bcf000c3.chunk.js.map