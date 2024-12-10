import{j as e,L as i,r as l,aZ as H,a_ as we,a$ as Se,bc as ye,b1 as Ce,$ as ke,ad as Pe,K as Te,aS as Ee,b as Fe,b2 as _e,f as re,bd as Ae,b3 as A,b4 as Be,be as Ie,bf as Le,bg as Oe,b7 as Me,h as Re,aT as ze,bh as De,b6 as ce,ai as Ve,b8 as He,b9 as We,ba as $e,aV as Ge,aU as Ke}from"./index-W2AL0DnC.js";import{P as Ue}from"./index-D508eMV_.js";import{u as qe,a as Qe}from"./index-DKLhT5T4.js";const Ze=({title:S,sub_title_line1:x,sub_title_line2:r,cta_text:P,cta_url:y,url:T,alt:o})=>e.jsxs("div",{className:"productBanner",children:[e.jsx("div",{className:"productbanner_img",children:e.jsx("img",{src:T,alt:o})}),e.jsxs("div",{className:"productBanner-content",children:[e.jsx("h4",{children:S}),e.jsxs("h2",{children:[x," ",e.jsx("br",{})," ",r]})]}),y&&P&&e.jsx(i,{to:y,children:P})]}),Je=({onFilterChange:S,currentFilters:x,brands:r,updateFilterCount:P})=>{r=r||[];const[y,T]=l.useState(!1),o=y?r:r.slice(0,20),C={...r==null?void 0:r.reduce((a,c)=>{var h;return a[c.value]=((h=x.brands)==null?void 0:h.includes(c.value))??!1,a},{}),...Object.values(H).reduce((a,c)=>{var h;return a[c]=((h=x==null?void 0:x.stores)==null?void 0:h.includes(c))??!1,a},{})},f=a=>{const c={},h=Object.keys(H),j=Object.entries(a).filter(([d,n])=>!h.includes(d)&&d!=="inStock"&&n).map(([d])=>d),N=h.filter(d=>a[d]);return j.length&&(c.brands=j),N.length&&(c.stores=N),c};return e.jsx(we,{initialValues:C,onSubmit:()=>{},enableReinitialize:!0,children:({setFieldValue:a,values:c,resetForm:h})=>{const j=()=>{window.scroll({top:0,behavior:"smooth"});const n={inStock:!1,...r==null?void 0:r.reduce((m,u)=>(m[u.value]=!1,m),{}),...Object.values(H).reduce((m,u)=>(m[u]=!1,m),{})};h({values:n}),S(f(n))},N=Object.fromEntries(Object.entries(c).map(([n,m])=>[n,m===!0?!0:m])),d=Object.values(N).filter(Boolean).length;return P(d),e.jsxs(Se,{className:"bg-white my-4 flex flex-col text-left text-base lg:min-w-[250px] sm:max-w-full",children:[e.jsxs("div",{className:"mb-5 flex flex-row justify-between sm:mb-3",children:[e.jsxs("p",{className:"flex items-center text-base font-bold sm:text-purple-300",children:["Filters",e.jsx("span",{className:"ml-2 flex h-3 w-5 items-center justify-center rounded-full bg-purple-300 p-2 text-xs font-extralight text-white-100",children:d})]}),e.jsx("div",{className:"flex items-center",children:e.jsx("button",{type:"button",className:"text-sm text-purple-300 underline sm:text-sm",onClick:j,children:"Clear all filters"})})]}),e.jsx("hr",{className:"hr mb-2 mt-0"}),e.jsx("hr",{className:"mb-4 mt-4 hidden text-black-200 opacity-25 sm:block "}),e.jsxs("div",{children:[e.jsx("small",{className:"gray_color mb-1 block uppercase",children:" Brand"}),o.map(n=>e.jsx(ye,{label:Ce(n.displayName),isChecked:C[n.value],labelClassnames:"fonts-xs",onChange:()=>{const m=!C[n.value];a(n.value,m).then(()=>{S(f({...C,[n.value]:m}))}).catch(()=>{}),window.scroll({top:0,behavior:"smooth"})}},n.value)),y&&r.length>20&&e.jsx("button",{className:"w-full cursor-pointer text-sm text-purple-300 hover:underline",onClick:()=>T(!1),children:"See Less"}),!y&&r.length>20&&e.jsx("button",{className:"w-full cursor-pointer text-sm text-purple-300 hover:underline",onClick:()=>T(!0),children:"See More"}),r.length==0&&e.jsx("p",{className:"py-5 text-sm text-black-400",children:"No brands available"})]})]})}})},ne=Je,W="data:image/svg+xml,%3csvg%20width='6'%20height='10'%20viewBox='0%200%206%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%209L5%205L1%201'%20stroke='%23741082'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ie=()=>e.jsx("img",{src:W,alt:"angle arrow",className:"m-3",width:8}),R=[{label:"Relevance",value:A.RELEVANCE},{label:"Price: Low to High",value:A.PRICE_LOW_TO_HIGH},{label:"Price: High to Low",value:A.PRICE_HIGH_TO_LOW}],oe=()=>e.jsx("div",{style:{height:"100vh",width:"100vw",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:e.jsx("img",{src:Ge,alt:"Loading your search results...",className:"loaderimg"})}),de=()=>e.jsx("div",{style:{height:"75vh",width:"100vw",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:e.jsx("img",{src:Ke,alt:"Loading your search results...",className:"loaderimg"})});function ts(){var ae,le;const S=ke(),{categoryId:x=""}=Pe(),{AWS_S3_DATA_BUCKET_BASE_URL:r,LOADING_BAR_CONFIG:P}=Te(),{categoriesEnabled:y,categoriesLeftbar:T}=l.useContext(Ee),[o,C]=Fe(),f=o.get("searchTerm"),a=o.get("store"),{setSearchTerm:c,setSelectedCategory:h}=_e(),j=re("(max-width: 639px)"),N=o.get("sortBy"),d=re("(min-width: 768px) and (max-width: 1024px)"),{data:n}=Ae(r),m=l.useMemo(()=>R.find(s=>s.value===N)||R[0],[N]),[u,B]=l.useState(a?{stores:a.split("+"),sortBy:N||A.RELEVANCE}:{sortBy:N||A.RELEVANCE}),[$,me]=l.useState({}),[G,z]=l.useState(!1),[E,K]=l.useState(!1),[I,U]=l.useState((((ae=u==null?void 0:u.brands)==null?void 0:ae.length)??0)+(((le=u==null?void 0:u.stores)==null?void 0:le.length)??0)),[q,ue]=l.useState([]),[xe,Q]=l.useState(!0),[D,he]=l.useState(null),{ref:fe,inView:Z}=qe(),p=l.useCallback(()=>f||x,[f,x])(),{data:w,isSuccess:L,hasNextPage:J,fetchNextPage:X,isFetchingNextPage:V,isError:Y,isFetching:je}=Be(p,u);l.useEffect(()=>{Y&&S("/error"),!x&&!f&&S("/")},[Y,S,f,x]);const F=l.useRef(p);l.useEffect(()=>{F.current!==p&&(Q(!0),K(!1)),L&&Q(!1),F.current=p},[p,L]),l.useEffect(()=>{var s;if(w){const t=w.pages[0].data.availableFilters;me(t);const g=((s=t==null?void 0:t.predefined)==null?void 0:s.brands)||[];ue(g)}},[w,u]),l.useEffect(()=>{Z&&J&&X().catch(()=>{})},[Z,X,J]),l.useEffect(()=>{function s(){c(p||""),f&&h("")}return s(),()=>c("")},[p,c,h,f,a]),l.useEffect(()=>{B(s=>{const t={...s};return t.stores=a?a.split("+"):[],t})},[a]);const ee=l.useMemo(()=>({data:{availableFilters:{},stores:[],products:[]},error:null,isSuccess:!1}),[]);l.useEffect(()=>{if(w!=null&&w.pages&&Array.isArray(w.pages)){const s=w.pages.reduce((t,g)=>{var M;return(M=g==null?void 0:g.data)!=null&&M.products?{data:{availableFilters:t.data.availableFilters,stores:t.data.stores,products:[...t.data.products,...g.data.products]},error:null,isSuccess:!0}:t},ee);he(s)}},[w,ee]);const ge=()=>{z(!0)},se=l.useCallback(s=>{s!==I&&U(s??0)},[I]),te=l.useCallback(s=>{var g;const t=((g=s==null?void 0:s.value)==null?void 0:g.toString())||"";o.set("sortBy",t),C(o),B(M=>({...M,sortBy:t}))},[o]);let O;!D||D.data.products.length===0?O=e.jsx("div",{className:"mb-20 mt-20 text-center text-sm",children:"No products match your current filters."}):O=e.jsxs(e.Fragment,{children:[e.jsx(Ue,{products:D.data.products,scrollable:!1,href:"recently-viewed",layout:"grid"},"all-products"),e.jsx("div",{className:"h-1",ref:fe}),V&&e.jsx(Ie,{isLoading:V})]}),Qe("Products");const[pe,be]=l.useState(null),b=s=>{pe!==s&&be(s)},ve={display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:"1rem",width:"100%",marginInlineEnd:"1rem",marginBottom:"1rem"},Ne={display:"flex",flexDirection:"column",alignItems:"start",gap:"1rem"},v=s=>{const t=new URLSearchParams(window.location.search);return s?t.set("store",s):t.delete("store"),`${window.location.pathname}?${t.toString()}`};l.useEffect(()=>{if(!E&&F.current===p&&L){const s=setTimeout(()=>{K(!0)},P.SEARCH_LOADING_DURATION);return()=>clearTimeout(s)}},[E,p,L,F]);const _=Le(f||x),k=Oe(_,n);return e.jsxs("div",{children:[je&&!V&&E?e.jsxs(e.Fragment,{children:[j&&e.jsx(de,{}),!j&&e.jsx(oe,{})]}):!xe&&E&&e.jsxs("div",{className:" text-left md:m-0 md:px-2",children:[e.jsx("div",{className:"flex items-center justify-between",children:(j||d)&&e.jsxs("div",{style:d?ve:Ne,children:[e.jsx("div",{className:"flex flex-row items-center justify-between",children:e.jsxs("button",{onClick:ge,className:"flex cursor-pointer items-center self-center rounded-full border border-black-900 bg-white-100 px-3 py-1 text-sm text-black-900 hover:bg-black-200 hover:text-white-100",children:[e.jsx(Me,{}),I>0?e.jsx("span",{className:"ml-1 flex h-3 w-5 items-center justify-center rounded-full bg-purple-300 p-2 text-xs font-extralight text-white-100",children:I}):null]})}),e.jsx("div",{className:"tabs-container",children:e.jsxs("ul",{children:[e.jsx("li",{className:a?"":"active",children:e.jsx(i,{to:v(null),className:"ProductTab",onClick:()=>b(null),children:"All"})}),e.jsx("li",{className:a==="amazon"?"active":"",children:e.jsx(i,{to:v("amazon"),className:"ProductTab",onClick:()=>b("amazon"),children:"Amazon"})}),e.jsx("li",{className:a==="walmart"?"active":"",children:e.jsx(i,{to:v("walmart"),className:"ProductTab",onClick:()=>b("walmart"),children:"Walmart"})}),e.jsx("li",{className:a==="kroger"?"active":"",children:e.jsx(i,{to:v("kroger"),className:"ProductTab",onClick:()=>b("kroger"),children:"Kroger"})}),e.jsx("li",{className:a==="target"?"active":"",children:e.jsx(i,{to:v("target"),className:"ProductTab",onClick:()=>b("target"),children:"Target"})})]})})]})}),d&&e.jsx("div",{className:"PageNavigation",children:e.jsxs("div",{className:"breadcrumb fw-400 capitalize",children:[e.jsx(i,{to:"/",children:"Home"}),e.jsx("img",{src:W,alt:"angle arrow",width:8}),e.jsx("span",{className:"flex items-center",children:_.split("%%SEP%%").map((s,t)=>e.jsx("span",{className:"flex items-center",children:t<_.split("%%SEP%%").length-1?e.jsxs(e.Fragment,{children:[e.jsx(i,{to:`/products/category/${s}`,children:s}),e.jsx(ie,{})]}):e.jsx(e.Fragment,{children:s})},t))})]})}),j||d?e.jsxs("div",{children:[G&&e.jsx(e.Fragment,{children:e.jsx(Ve,{shouldShow:G,onClose:()=>{},isFilterModal:!0,modalWidth:"100%",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(He,{className:"hidden cursor-pointer text-purple-500 xl:block md:block sm:block",onClick:()=>z(!1)})}),e.jsxs("div",{className:"mb-8 flex w-full flex-col gap-2",children:[e.jsx("p",{className:"flex items-center text-base font-bold sm:text-purple-300",children:"Sort by"}),e.jsx(ce,{className:"mb-0",options:R,selected:m,onSelectedChange:te})]}),e.jsx("div",{className:"w-full",children:e.jsx(ne,{brands:q,filters:$,currentFilters:u,updateFilterCount:se,onFilterChange:s=>{new We().cancelQueries({queryKey:["products"]}).then(()=>{B(g=>({...s,sortBy:g.sortBy}))}).catch(()=>{})},onClose:s=>{U(s),z(!1)}})})]})},1)}),e.jsx("hr",{className:"-mx-5 mb-5 hidden px-0 text-black-200 opacity-25 sm:block"}),O]}):e.jsxs(Re,{leftWeight:1,rightWeight:4,className:" -mb-5 min-h-[85vh]  ",children:[e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx("div",{className:"leftSide w-full ",children:e.jsx(ne,{brands:q,currentFilters:u,filters:$,updateFilterCount:se,onFilterChange:s=>{B(t=>({...s,sortBy:t.sortBy})),s.stores?(o.set("store",s.stores.join("+")),C(o)):(o.delete("store"),C(o))}})}),y&&T&&e.jsx(ze,{className:"w-full",layout:"vertical"})]}),e.jsxs("div",{className:"rightSide",children:[e.jsx("div",{className:"PageNavigation",children:e.jsxs("div",{className:"breadcrumb fw-400 capitalize",children:[e.jsx(i,{to:"/",children:"Home"}),e.jsx("img",{src:W,alt:"angle arrow",width:8}),e.jsx("span",{className:"flex items-center",children:_.split("%%SEP%%").map((s,t)=>e.jsx("span",{className:"flex items-center",children:t<_.split("%%SEP%%").length-1?e.jsxs(e.Fragment,{children:[e.jsx(i,{to:`/products/category/${s}`,children:s}),e.jsx(ie,{})]}):e.jsx(e.Fragment,{children:s})},t))})]})}),k&&e.jsx(Ze,{url:k.url,title:k.title,sub_title_line1:k.sub_title_line1,sub_title_line2:k.sub_title_line2,cta_text:k.cta_text,cta_url:k.cta_url,alt:k.alt}),e.jsxs("div",{className:"flex w-full justify-between pt-4 sm:mt-0",children:[e.jsx("h4",{className:"section__heading fw-500 flex items-center uppercase",children:De(f||x)}),e.jsxs("div",{className:"sortbyitem flex items-center justify-center gap-2 sm:hidden",children:[e.jsx("p",{className:"fw-4  00 gray_color flex items-center text-lg",children:"Sort by"}),e.jsx(ce,{className:"mb-0",options:R,selected:m,onSelectedChange:te})]})]}),e.jsx("div",{className:"tabs-container",children:e.jsxs("ul",{children:[e.jsx("li",{className:a?"":"active",children:e.jsx(i,{to:v(null),className:"ProductTab",onClick:()=>b(null),children:"All"})}),e.jsx("li",{className:a==="amazon"?"active":"",children:e.jsx(i,{to:v("amazon"),className:"ProductTab",onClick:()=>b("amazon"),children:"Amazon"})}),e.jsx("li",{className:a==="walmart"?"active":"",children:e.jsx(i,{to:v("walmart"),className:"ProductTab",onClick:()=>b("walmart"),children:"Walmart"})}),e.jsx("li",{className:a==="kroger"?"active":"",children:e.jsx(i,{to:v("kroger"),className:"ProductTab",onClick:()=>b("kroger"),children:"Kroger"})}),e.jsx("li",{className:a==="target"?"active":"",children:e.jsx(i,{to:v("target"),className:"ProductTab",onClick:()=>b("target"),children:"Target"})})]})}),O]})]})]}),!E&&F.current===p&&e.jsxs(e.Fragment,{children:[j&&e.jsx(de,{}),!j&&e.jsx(oe,{})]}),e.jsx($e,{})]})}export{de as KartieMobileLoader,oe as KartieWebLoader,ts as default};
