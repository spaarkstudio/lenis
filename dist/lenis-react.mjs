import{jsx as r}from"react/jsx-runtime";import e from"@darkroom.engineering/tempus";import n from"clsx";import t from"lenis";import{createContext as o,forwardRef as l,useRef as a,useState as c,useCallback as s,useImperativeHandle as i,useEffect as u,useContext as f}from"react";import{create as p}from"zustand";"function"==typeof SuppressedError&&SuppressedError;const m=o(null),d=p((()=>({})));function b(r,e=[],n=0){const{lenis:t,addCallback:o,removeCallback:l}=function(){const r=f(m),e=d();return null!=r?r:e}();return u((()=>{if(r&&o&&l&&t)return o(r,n),r(t),()=>{l(r)}}),[t,o,l,n,...e]),t}const y=l(((o,l)=>{var{children:f,root:p=!1,options:b={},autoRaf:y=!0,rafPriority:v=0,className:O}=o,g=function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(r);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(n[t[o]]=r[t[o]])}return n}(o,["children","root","options","autoRaf","rafPriority","className"]);const h=a(null),k=a(null),[N,j]=c(void 0),w=a([]),C=s(((r,e)=>{w.current.push({callback:r,priority:e}),w.current.sort(((r,e)=>r.priority-e.priority))}),[]),P=s((r=>{w.current=w.current.filter((e=>e.callback!==r))}),[]);i(l,(()=>({wrapper:h.current,content:k.current,lenis:N})),[N]),u((()=>{const r=new t(Object.assign(Object.assign({},b),!p&&{wrapper:h.current,content:k.current}));return j(r),()=>{r.destroy(),j(void 0)}}),[p,JSON.stringify(b)]),u((()=>{if(!N||!y)return;const r=e.add((r=>{null==N||N.raf(r)}),v);return()=>{r()}}),[N,y,v]),u((()=>{p&&N&&d.setState({lenis:N,addCallback:C,removeCallback:P})}),[p,N,C,P]);const S=s((r=>{for(let e=0;e<w.current.length;e++)w.current[e].callback(r)}),[]);u((()=>(null==N||N.on("scroll",S),()=>{null==N||N.off("scroll",S)})),[N,S]);const x=s((()=>{h.current&&(h.current.className=n(null==N?void 0:N.className,O))}),[N,O]);return u((()=>(x(),null==N||N.on("className change",x),()=>{null==N||N.off("className change",x)})),[N,x]),r(m.Provider,{value:{lenis:N,addCallback:C,removeCallback:P},children:p?f:r("div",Object.assign({ref:h,className:n(null==N?void 0:N.className,O)},g,{children:r("div",{ref:k,children:f})}))})}));export{y as Lenis,m as LenisContext,y as ReactLenis,y as default,b as useLenis};
//# sourceMappingURL=lenis-react.mjs.map
