"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[16],{8016:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(3855),r="ContactsPage_main__rIWJn",s="ContactsPage_title__P3MkR",c="ContactsPage_content__nZeCP",i=function(e){return e.contacts.items},l=function(e){return e.filter},o=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},m=n(3920),d="Loader_loaderWrapper__6ypwD",_=n(184),h=function(){return(0,_.jsx)("div",{className:d,children:(0,_.jsx)(m.NB,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",colors:["#F99417","#d2cdfc","#ffc374","#d2cdfc","#F99417"]})})},f=n(9439),x=n(2791),b=n(8560),p="ContactForm_contactForm__y0Rca",v="ContactForm_label__-cVXI",j="ContactForm_input__Bl93P",C="ContactForm_btnAdd__F4QeR",N=n(3634),F=function(){var e=(0,x.useState)(""),t=(0,f.Z)(e,2),n=t[0],r=t[1],s=(0,x.useState)(""),c=(0,f.Z)(s,2),l=c[0],o=c[1],u=(0,a.I0)(),m=(0,b.v9)(i);return(0,_.jsxs)("form",{className:p,onSubmit:function(e){var t;(e.preventDefault(),t=n,m.some((function(e){return e.name===t})))?alert("".concat(n," already exists!")):(u((0,N.uK)({name:n,number:l})),r(""),o(""))},children:[(0,_.jsx)("label",{className:v,htmlFor:"name",children:"Name"}),(0,_.jsx)("input",{className:j,id:"name",type:"text",name:"name",value:n,onChange:function(e){return r(e.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,_.jsx)("label",{className:v,htmlFor:"number",children:"Number"}),(0,_.jsx)("input",{className:j,id:"number",type:"tel",name:"number",value:l,onChange:function(e){return o(e.target.value)},pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,_.jsx)("button",{className:C,type:"submit",children:"Add contact"})]})},g="Contacts_section__NDXTU",y="Contacts_title__-mq9F",k=function(e){var t=e.title,n=e.children;return(0,_.jsxs)("section",{className:g,children:[(0,_.jsx)("h2",{className:y,children:t}),n]})},w="Filter_filter__vxThR",P="Filter_label__vEd1E",A="Filter_input__N7T3z",D=n(4808),I=function(){var e=(0,a.I0)(),t=(0,a.v9)(l);return(0,_.jsxs)("div",{className:w,children:[(0,_.jsx)("label",{className:P,htmlFor:"search",children:"Find contacts by name:"}),(0,_.jsx)("input",{className:A,id:"search",name:"filter",value:t,type:"text",onChange:function(t){return e((0,D.W)(t.target.value))}})]})},L="ContactList_list__csErn",Z="Contact_item__j+P5X",z="Contact_btnDelete__9qWfp",q=function(e){var t=e.id,n=e.name,r=e.number,s=(0,a.I0)();return(0,_.jsxs)("li",{className:Z,children:[n,": ",r,(0,_.jsx)("button",{className:z,type:"button",onClick:function(){return s((0,N.GK)(t))},title:"Delete ".concat(n),children:"Delete"})]})},E=function(){var e,t=(0,b.v9)(i),n=(0,b.v9)(l);return 0!==t.length&&(e=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n)),(0,_.jsx)("div",{children:0!==t.length&&(0,_.jsx)("ul",{className:L,children:e.map((function(e){return(0,_.jsx)(q,{id:e.id,name:e.name,number:e.number},e.id)}))})})},R=function(){var e=(0,a.I0)(),t=(0,a.v9)(o),n=(0,a.v9)(u);return(0,x.useEffect)((function(){e((0,N.yF)())}),[e]),(0,_.jsxs)("div",{className:r,children:[(0,_.jsx)("h1",{className:s,children:"Phonebook"}),t&&!n&&(0,_.jsx)(h,{}),!t&&(0,_.jsxs)("div",{className:c,children:[(0,_.jsx)(F,{}),(0,_.jsxs)(k,{title:"Contacts",children:[(0,_.jsx)(I,{}),(0,_.jsx)(E,{})]})]})]})}}}]);
//# sourceMappingURL=16.ae02aa75.chunk.js.map