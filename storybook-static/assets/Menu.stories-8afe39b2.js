import{j as e}from"./jsx-runtime-2ef3df91.js";import{r as x,R as D}from"./index-e03f90b5.js";import{t as d}from"./tw-merge-1166cefb.js";import{I as B}from"./Icon-54e96bfb.js";import"./_commonjsHelpers-725317a4.js";import"./index-edafa35b.js";import"./index-2baff29e.js";const w=x.createContext({index:"0",mode:"horizontal"}),u=t=>{const{className:r,mode:i,style:s,defaultIndx:m,onSelect:l,children:a,defaultOpenSubMenus:p}=t,[h,N]=x.useState(m);function f(o){N(o),l&&l(o)}const M={index:h||"0",onSelect:f,mode:i,defaultOpenSubMenus:p},_=()=>D.Children.map(a,(o,I)=>{const b=o,{displayName:C}=b.type;if(C==="MenuItem"||C==="SubMenu")return D.cloneElement(b,{index:I.toString()});console.error("Warning: Menu has a child which is not a MenuItem component")});return e.jsx("ul",{className:d(r,"flex flex-row flex-wrap items-center justify-center gap-8",i==="vertical"?"max-w-sm flex-col gap-0":""),style:s,"data-testid":"test-menu",children:e.jsx(w.Provider,{value:M,children:_()})})};u.defaultProps={defaultIndx:"0",mode:"horizontal"};try{u.displayName="Menu",u.__docgenInfo={description:`Menu component with two modes, horizontal and vertical,
and callback when menu item is clicked, and default active menu item.
You can also use MenuItem and SubMenu component to create a menu.
### How to import
### Usage
\`\`\`js
import {Menu} from "highcold-ui";
\`\`\``,displayName:"Menu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultIndx:{defaultValue:{value:"0"},description:"default active menu item",name:"defaultIndx",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"menu mode",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"custom style",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"callback when menu item is clicked",name:"onSelect",required:!1,type:{name:"SelectCallback"}},children:{defaultValue:null,description:"default open sub menu",name:"children",required:!1,type:{name:"ReactNode"}},defaultOpenSubMenus:{defaultValue:null,description:"default open sub menu",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}}}}}catch{}const n=t=>{const{children:r,className:i,disabled:s,style:m,index:l}=t,a=x.useContext(w),p=()=>{a.onSelect&&!s&&typeof l=="string"&&a.onSelect(l)};return e.jsx("li",{className:d(i,"hover:underline-primary active:underline-primary block cursor-pointer px-6 py-3 text-center  font-mono font-semibold text-dark transition-all hover:text-primary focus:outline-none",a.mode!=="vertical"?"hover:underline hover:underline-offset-8":"",a.index===l&&a.mode!=="vertical"?"underline-primary text-primary underline underline-offset-8":"",a.mode==="vertical"?"underline-none hover:underline-none w-full rounded-sm bg-transparent hover:bg-slate-100":"",a.mode==="vertical"&&a.index===l?"bg-slate-100 text-primary":"",s?"pointer-events-none cursor-not-allowed opacity-70":""),style:m,"aria-disabled":s,onClick:p,children:r})};n.displayName="MenuItem";try{n.displayName="MenuItem",n.__docgenInfo={description:"",displayName:"MenuItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const c=t=>{var f;const r=x.useContext(w),{className:i,index:s,title:m,children:l}=t,[a,p]=x.useState(s===void 0?!1:(f=r.defaultOpenSubMenus)==null?void 0:f.includes(s)),h=M=>{M.preventDefault(),p(!a)},N=()=>{const M=D.Children.map(l,(_,o)=>{const I=_,{displayName:b}=I.type;if(b==="MenuItem")return D.cloneElement(I,{index:`${s}-${o}`});console.error("Warning: Menu has a child which is not a MenuItem component")});return e.jsx("ul",{className:d(" flex  origin-top transform flex-col items-center justify-center rounded-sm border bg-white transition duration-300 ease-in-out",r.mode!=="vertical"?"absolute mt-2 scale-0 group-hover:scale-100":"",r.mode==="vertical"&&!a?"hidden ":"",r.mode==="vertical"&&a?"group:block":""),children:M})};return e.jsx("li",{className:d(i,"hover:underline-primary active:underline-primary  cursor-pointer flex-col  items-center font-mono font-semibold text-dark transition-all hover:text-primary focus:outline-none",r.mode!=="vertical"?"hover:underline hover:underline-offset-8":"",r.index===s&&r.mode!=="vertical"?"underline-primary text-primary underline underline-offset-8":"",r.mode==="vertical"?"underline-none hover:underline-none rounded-sm bg-transparent hover:bg-slate-100":"",r.mode==="vertical"&&r.index===s?"bg-slate-100 text-primary":""),children:e.jsxs("div",{className:"group",children:[e.jsxs("div",{className:d("flex items-center gap-2",r.mode==="vertical"?"px-6 py-3":""),onClick:h,children:[m,e.jsx(B,{icon:"arrow-down",size:"sm",className:d("transform transition-all duration-200 ease-in-out",r.mode==="vertical"&&a?"rotate-180":"",r.mode!=="vertical"?"group-hover:rotate-180":"")})]}),N()]})},s)};c.displayName="SubMenu";try{c.displayName="SubMenu",c.__docgenInfo={description:"",displayName:"SubMenu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}const Z={title:"UI/Menu",component:u,parameters:{layout:"centered"},tags:["autodocs"]},g={args:{mode:"horizontal"},render:t=>e.jsxs(u,{...t,children:[e.jsxs(c,{title:"DropDown",children:[e.jsx(n,{children:"Menu1.1"}),e.jsx(n,{children:"Menu1.2"})]}),e.jsx(n,{children:"Menu2"}),e.jsx(n,{children:"Menu3"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})},y={args:{mode:"vertical"},render:t=>e.jsxs(u,{...t,children:[e.jsxs(c,{title:"DropDown",children:[e.jsx(n,{children:"Menu1.1"}),e.jsx(n,{children:"Menu1.2"})]}),e.jsx(n,{children:"Menu2"}),e.jsx(n,{children:"Menu3"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})},v={args:{defaultIndx:"1"},render:t=>e.jsxs(u,{...t,children:[e.jsx(n,{children:"Menu1"}),e.jsx(n,{children:"Menu2"}),e.jsx(n,{children:"Menu3"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})},j={args:{defaultOpenSubMenus:["0"],mode:"vertical"},render:t=>e.jsxs(u,{...t,children:[e.jsxs(c,{title:"DropDown",children:[e.jsx(n,{children:"Menu1.1"}),e.jsx(n,{children:"Menu1.2"})]}),e.jsx(n,{children:"Menu2"}),e.jsx(n,{children:"Menu3"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})},S={args:{onSelect:t=>{alert("The index is "+t)}},render:t=>e.jsxs(u,{...t,children:[e.jsx(n,{children:"Menu1"}),e.jsx(n,{children:"Menu2"}),e.jsx(n,{children:"Menu3"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})};var V,k,q;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    mode: "horizontal"
  },
  render: args => <Menu {...args}>
      <SubMenu title="DropDown">
        <MenuItem>Menu1.1</MenuItem>
        <MenuItem>Menu1.2</MenuItem>
      </SubMenu>
      <MenuItem>Menu2</MenuItem>
      <MenuItem>Menu3</MenuItem>
      <MenuItem disabled={true}>Disabled</MenuItem>
    </Menu>
}`,...(q=(k=g.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var O,z,E;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    mode: "vertical"
  },
  render: args => <Menu {...args}>
      <SubMenu title="DropDown">
        <MenuItem>Menu1.1</MenuItem>
        <MenuItem>Menu1.2</MenuItem>
      </SubMenu>
      <MenuItem>Menu2</MenuItem>
      <MenuItem>Menu3</MenuItem>
      <MenuItem disabled={true}>Disabled</MenuItem>
    </Menu>
}`,...(E=(z=y.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var P,R,H;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultIndx: "1"
  },
  render: args => <Menu {...args}>
      <MenuItem>Menu1</MenuItem>
      <MenuItem>Menu2</MenuItem>
      <MenuItem>Menu3</MenuItem>
      <MenuItem disabled={true}>Disabled</MenuItem>
    </Menu>
}`,...(H=(R=v.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var A,T,U;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultOpenSubMenus: ["0"],
    mode: "vertical"
  },
  render: args => <Menu {...args}>
      <SubMenu title="DropDown">
        <MenuItem>Menu1.1</MenuItem>
        <MenuItem>Menu1.2</MenuItem>
      </SubMenu>
      <MenuItem>Menu2</MenuItem>
      <MenuItem>Menu3</MenuItem>
      <MenuItem disabled={true}>Disabled</MenuItem>
    </Menu>
}`,...(U=(T=j.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var W,$,Y;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    onSelect: index => {
      alert("The index is " + index);
    }
  },
  render: args => <Menu {...args}>
      <MenuItem>Menu1</MenuItem>
      <MenuItem>Menu2</MenuItem>
      <MenuItem>Menu3</MenuItem>
      <MenuItem disabled={true}>Disabled</MenuItem>
    </Menu>
}`,...(Y=($=S.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};const ee=["Horizontal","Vertical","DefaultIndx","DefaultOpenSubMenu","OnSelect"];export{v as DefaultIndx,j as DefaultOpenSubMenu,g as Horizontal,S as OnSelect,y as Vertical,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=Menu.stories-8afe39b2.js.map
