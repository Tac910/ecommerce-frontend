(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{7671:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return a(9491)}])},9491:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var r=a(5893),n=a(1664),s=a.n(n),i=a(7294),c=a(5434),l=a(9473),o=a(9255),d=a(3299);function u(){let e=(0,l.v9)(e=>e.cart.cartItems),t=(0,l.I0)(),a=e=>{t((0,o.Od)(e))},n=(0,d.useSession)(),[u,x]=i.useState(!1);return(0,r.jsxs)("div",{className:"w-11/12 mx-auto ",children:[(0,r.jsx)("div",{className:"font-ibm uppercase text-2xl py-2 my-6 flex ",children:"Cart"}),e.length>0?e.map(e=>(0,r.jsxs)("div",{className:"flex my-3 flex-row gap-3 justify-between pb-4 border-b-[1px] border-accent",children:[(0,r.jsxs)("div",{className:"flex gap-4 w-full",children:[(0,r.jsx)("img",{width:80,height:80,src:e.image,alt:e.title}),(0,r.jsx)("div",{className:"text-xl my-auto",children:e.title})]}),(0,r.jsxs)("div",{className:"flex w-fit gap-3 ",children:[(0,r.jsxs)("div",{className:"text-xl text-primary my-auto",children:["₹",e.price]}),(0,r.jsxs)("div",{className:"text-xl my-auto",children:["X",e.cartQuantity]})]}),(0,r.jsx)("button",{onClick:()=>a(e),className:"btn btn-circle p-2 text-black bg-rose-500 my-auto btn-sm w-fit ",children:(0,r.jsx)(c.lUB,{})})]},e.id)):(0,r.jsx)("div",{className:"font-ibm text-2xl mx-auto py-2 align-center ",children:"No items in cart"}),e.length>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"font-ibm text-2xl mt-6 mb-3 flex ",children:[" ","Subtotal : ₹",e.reduce((e,t)=>e+=t.cartQuantity*t.price,0),".00"]}),u?(0,r.jsx)("button",{className:"btn loading rounded-none bg-primary text-base-100 font-normal uppercase",children:"loading"}):"authenticated"===n.status?(0,r.jsx)(s(),{className:" bg-primary text-base-100 hover:bg-base-100 hover:text-primary uppercase w-fit py-2 px-10 rounded-none border-[1px] border-primary ease-in-out font-normal duration-100",href:"/checkout",children:"checkout"}):(0,r.jsx)(s(),{className:" bg-primary text-base-100 hover:bg-base-100 hover:text-primary uppercase w-fit py-2 px-10 rounded-none border-[1px] border-primary ease-in-out font-normal duration-100",href:"/login",children:"Login to checkout"})]})]})}}},function(e){e.O(0,[228,774,888,179],function(){return e(e.s=7671)}),_N_E=e.O()}]);