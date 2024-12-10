import{j as e,aY as ae,r as t,aZ as F,a_ as ce,a$ as ne,b0 as Y,b1 as R,$ as oe,ad as ie,K as ue,b as me,b2 as de,f as xe,b3 as w,b4 as he,aO as fe,b5 as pe,aM as be,b6 as Z,b7 as je,h as ge,ai as Ne,b8 as Se,b9 as ve,ba as ye}from"./index-W2AL0DnC.js";import{P as Ce}from"./index-BmvmerTs.js";import{u as we,a as Pe}from"./index-DKLhT5T4.js";import"./use-loading-progress-B3ewIWgk.js";const ke=({className:b})=>e.jsx("hr",{className:ae("mb-4 mt-2 hidden text-black-200 opacity-25 sm:block ",b)}),Ee=({onFilterChange:b,currentFilters:h,brands:n,updateFilterCount:m})=>{n=n||[];const[y,f]=t.useState(!1),N=y?n:n.slice(0,20),S={...n==null?void 0:n.reduce((i,r)=>{var u;return i[r.value]=((u=h.brands)==null?void 0:u.includes(r.value))??!1,i},{}),...Object.values(F).reduce((i,r)=>{var u;return i[r]=((u=h==null?void 0:h.stores)==null?void 0:u.includes(r))??!1,i},{})},C=i=>{const r={},u=Object.keys(F),o=Object.entries(i).filter(([d,l])=>!u.includes(d)&&d!=="inStock"&&l).map(([d])=>d),j=u.filter(d=>i[d]);return o.length&&(r.brands=o),j.length&&(r.stores=j),r};return e.jsx(ce,{initialValues:S,onSubmit:()=>{},enableReinitialize:!0,children:({setFieldValue:i,values:r,resetForm:u})=>{const o=()=>{const l={inStock:!1,...n==null?void 0:n.reduce((c,p)=>(c[p.value]=!1,c),{}),...Object.values(F).reduce((c,p)=>(c[p]=!1,c),{})};u({values:l}),b(C(l))},j=Object.fromEntries(Object.entries(r).map(([l,c])=>[l,c===!0?!0:c])),d=Object.values(j).filter(Boolean).length;return m(d),e.jsxs(ne,{className:"bg-white my-4 flex flex-col text-left text-base lg:min-w-[250px] sm:max-w-full",children:[e.jsxs("div",{className:"mb-5 flex flex-row justify-between sm:mb-3",children:[e.jsxs("p",{className:"flex items-center text-base font-bold sm:text-purple-300",children:["Filters",e.jsx("span",{className:"ml-2 flex h-3 w-5 items-center justify-center rounded-full bg-purple-300 p-2 text-xs font-extralight text-white-100",children:d})]}),e.jsx("div",{className:"flex items-center",children:e.jsx("button",{type:"button",className:"text-sm text-purple-300 underline sm:text-sm",onClick:o,children:"Clear all filters"})})]}),e.jsx(ke,{}),e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mt-5 text-base font-bold sm:mt-0",children:"Retailer"}),e.jsx("div",{className:"mt-2 flex flex-col ",children:Object.entries(F).map(([l,c])=>e.jsx(Y,{label:R(c),isChecked:r[l],onChange:()=>{const p=!r[l];i(l,p).then(()=>{b(C({...r,[l]:p}))}).catch(()=>{})}},l))})]}),e.jsx("hr",{className:"mb-4 mt-4 hidden text-black-200 opacity-25 sm:block "}),e.jsx("p",{className:"mt-5 text-base font-bold sm:mt-0",children:"Filters"}),e.jsxs("div",{children:[N.map(l=>e.jsx(Y,{label:R(l.displayName),isChecked:S[l.value],onChange:()=>{const c=!S[l.value];i(l.value,c).then(()=>{b(C({...S,[l.value]:c}))}).catch(()=>{})}},l.value)),y&&n.length>20&&e.jsx("button",{className:"w-full cursor-pointer text-sm text-purple-300 hover:underline",onClick:()=>f(!1),children:"See Less"}),!y&&n.length>20&&e.jsx("button",{className:"w-full cursor-pointer text-sm text-purple-300 hover:underline",onClick:()=>f(!0),children:"See More"}),n.length==0&&e.jsx("p",{className:"py-5 text-sm text-black-400",children:"No brands available"})]})]})}})},J=Ee,B=[{label:"Relevance",value:w.RELEVANCE},{label:"Price: Low to High",value:w.PRICE_LOW_TO_HIGH},{label:"Price: High to Low",value:w.PRICE_HIGH_TO_LOW}];function Le(){var z,U;const b=oe(),{categoryId:h=""}=ie(),{LOADING_BAR_CONFIG:n}=ue(),[m,y]=me(),f=m.get("searchTerm"),N=m.get("store"),{setSearchTerm:S,setSelectedCategory:C}=de(),i=xe("(max-width: 639px)"),r=m.get("sortBy"),u=t.useMemo(()=>B.find(s=>s.value===r)||B[0],[r]),[o,j]=t.useState(N?{stores:N.split("+"),sortBy:r||w.RELEVANCE}:{sortBy:r||w.RELEVANCE}),[d,l]=t.useState({}),[c,p]=t.useState(!1),[O,T]=t.useState(!1),[P,_]=t.useState((((z=o==null?void 0:o.brands)==null?void 0:z.length)??0)+(((U=o==null?void 0:o.stores)==null?void 0:U.length)??0)),[M,X]=t.useState([]),[ee,H]=t.useState(!0),[A,se]=t.useState(null),{ref:te,inView:G}=we(),v=t.useCallback(()=>f||h,[f,h])(),{data:g,isSuccess:I,hasNextPage:D,fetchNextPage:V,isFetchingNextPage:W,isError:q,isFetching:le}=he(v,o);t.useEffect(()=>{q&&b("/error"),!h&&!f&&b("/")},[q,b,f,h]);const L=t.useRef(v);t.useEffect(()=>{L.current!==v&&(H(!0),T(!1)),I&&H(!1),L.current=v},[v,I]),t.useEffect(()=>{var s;if(g){const a=g.pages[0].data.availableFilters;l(a);const x=((s=a==null?void 0:a.predefined)==null?void 0:s.brands)||[];X(x)}},[g,o]),t.useEffect(()=>{G&&D&&V().catch(()=>{})},[G,V,D]),t.useEffect(()=>{function s(){S(v||""),f&&C("")}return s(),()=>S("")},[v,S,C,f,N]),t.useEffect(()=>{j(s=>{const a={...s};return a.stores=N?N.split("+"):[],a})},[N]);const Q=t.useMemo(()=>({data:{availableFilters:{},stores:[],products:[]},error:null,isSuccess:!1}),[]);t.useEffect(()=>{if(g!=null&&g.pages&&Array.isArray(g.pages)){const s=g.pages.reduce((a,x)=>{var E;return(E=x==null?void 0:x.data)!=null&&E.products?{data:{availableFilters:a.data.availableFilters,stores:a.data.stores,products:[...a.data.products,...x.data.products]},error:null,isSuccess:!0}:a},Q);se(s)}},[g,Q]);const re=()=>{p(!0)},$=t.useCallback(s=>{s!==P&&_(s??0)},[P]),K=t.useCallback(s=>{var x;const a=((x=s==null?void 0:s.value)==null?void 0:x.toString())||"";m.set("sortBy",a),y(m),j(E=>({...E,sortBy:a}))},[m]);let k;return!A||A.data.products.length===0?k=e.jsx("div",{className:"mt-20 text-center text-sm",children:"No products match your current filters."}):k=e.jsxs(e.Fragment,{children:[e.jsx(fe,{products:A.data.products,scrollable:!1,href:"recently-viewed",layout:"grid"},"all-products"),e.jsx("div",{className:"h-1",ref:te}),W&&e.jsx(e.Fragment,{children:e.jsx(pe,{isLoading:W})})]}),Pe("Products"),e.jsxs("div",{children:[e.jsx(be,{loading:le&&O}),!O&&L.current==v&&e.jsx(Ce,{useContextValues:!1,duration:n.SEARCH_LOADING_DURATION,showResults:()=>{T(!0)},isCompleted:I,label:"Loading your search results…"}),!ee&&O&&e.jsxs("div",{className:"-mx-5 px-10 text-left md:m-0 md:px-2",children:[e.jsxs("div",{className:"mb-10 flex items-center justify-between sm:mb-5",children:[e.jsxs("div",{className:"mt-10 flex w-full justify-between sm:mt-0",children:[e.jsxs("h2",{className:"flex items-center text-2xl font-semibold sm:text-base",children:["Showing results for “",R(f||h),"”"]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 sm:hidden",children:[e.jsx("p",{className:"flex items-center text-base font-bold sm:text-purple-300",children:"Sort By"}),e.jsx(Z,{className:"mb-0",options:B,selected:u,onSelectedChange:K})]})]}),i&&e.jsx("div",{className:"flex flex-row items-center justify-between self-center",children:e.jsxs("button",{onClick:re,className:"flex cursor-pointer items-center self-center rounded-full border border-black-900 bg-white-100 px-3 py-1 text-sm text-black-900 hover:bg-black-200 hover:text-white-100",children:[e.jsx(je,{}),P>0?e.jsx("span",{className:"ml-1 flex h-3 w-5 items-center justify-center rounded-full bg-purple-300 p-2 text-xs font-extralight text-white-100",children:P}):null]})})]}),i?e.jsxs("div",{children:[c&&e.jsx(e.Fragment,{children:e.jsx(Ne,{shouldShow:c,onClose:()=>{},isFilterModal:!0,modalWidth:"100%",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(Se,{className:"hidden cursor-pointer text-purple-500 sm:block",onClick:()=>p(!1)})}),e.jsxs("div",{className:"mb-8 flex w-full flex-col gap-2",children:[e.jsx("p",{className:"flex items-center text-base font-bold sm:text-purple-300",children:"Sort By"}),e.jsx(Z,{className:"mb-0",options:B,selected:u,onSelectedChange:K})]}),e.jsx("div",{className:"w-full",children:e.jsx(J,{brands:M,filters:d,currentFilters:o,updateFilterCount:$,onFilterChange:s=>{new ve().cancelQueries({queryKey:["products"]}).then(()=>{j(x=>({...s,sortBy:x.sortBy}))}).catch(()=>{})},onClose:s=>{_(s),p(!1)}})})]})},1)}),e.jsx("hr",{className:"-mx-5 mb-5 hidden px-0 text-black-200 opacity-25 sm:block"}),k]}):e.jsxs(ge,{leftWeight:1,rightWeight:4,className:"-mx-10 -mb-5 min-h-[85vh] bg-white-200 px-10",children:[e.jsx("div",{className:"w-full",children:e.jsx(J,{brands:M,currentFilters:o,filters:d,updateFilterCount:$,onFilterChange:s=>{j(a=>({...s,sortBy:a.sortBy})),s.stores?(m.set("store",s.stores.join("+")),y(m)):(m.delete("store"),y(m))}})}),e.jsx("div",{className:"ml-10",children:k})]})]}),e.jsx(ye,{})]})}export{Le as default};