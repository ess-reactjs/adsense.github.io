import{b as C,r as p,Y as k,$ as B,bX as E,j as a,a_ as O,a$ as U,B as j,bF as S,bH as N}from"./index-W2AL0DnC.js";import{I as u}from"./index-zLdjp0Tq.js";const G=()=>{const[n,x]=C(),{user:e,updateUser:I}=p.useContext(k),f=B(),h=localStorage.getItem("isPvrpleAuthenticated"),{data:i,isFetching:r}=E(),w=p.useMemo(()=>{var l,s,d,o;return{gender:((l=e==null?void 0:e.gender)==null?void 0:l.id)||"",education:((s=e==null?void 0:e.education)==null?void 0:s.id)||"",ethnicity:((d=e==null?void 0:e.ethnicity)==null?void 0:d.id)||"",maritalStatus:((o=e==null?void 0:e.maritalStatus)==null?void 0:o.id)||""}},[e]);p.useEffect(()=>{h||f("/?auth=signin")},[h,f]);const F=async l=>{await I({firstName:(e==null?void 0:e.firstName)||"",lastName:(e==null?void 0:e.lastName)||"",dateOfBirth:(e==null?void 0:e.dateOfBirth)||{month:1,day:1,year:1999},genderId:l.gender,educationalLevelId:l.education,ethnicityId:l.ethnicity,maritalStatusId:l.maritalStatus}).then(()=>{n.delete("auth"),n.set(S.Auth,N.Payment),x(n)})},P=()=>{n.delete("auth"),n.set(S.Auth,N.Payment),x(n)};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"relative pb-4",children:[a.jsx("h2",{className:"mb-4 text-4xl font-bold text-purple-500",children:"Your account is almost ready!"}),h?a.jsx("div",{className:"m-auto flex-grow pt-5 md:flex md:h-full md:w-full md:flex-col md:justify-between md:p-0",children:a.jsx(O,{initialValues:w,onSubmit:F,validateOnChange:!0,validateOnBlur:!0,children:l=>{var b,g,v,y;const{handleChange:s,handleSubmit:d,isValid:o,dirty:A,setFieldValue:c,values:m}=l;return a.jsx(a.Fragment,{children:a.jsx("div",{className:"container",children:a.jsxs(U,{onSubmit:d,className:"space-y-4",children:[a.jsx(u,{label:"Gender",id:"gender",name:"gender",type:"select",setFieldValue:c,handleChange:s,value:m.gender,disabled:r,options:i?(b=i.genders)==null?void 0:b.map(t=>({value:t.id,label:t.value})):[]}),a.jsx(u,{label:"Marital status",id:"maritalStatus",name:"maritalStatus",type:"select",setFieldValue:c,handleChange:s,value:m.maritalStatus,disabled:r,options:i?(g=i.maritalStatuses)==null?void 0:g.map(t=>({value:t.id,label:t.value})):[]}),a.jsx(u,{label:"Ethnicity",id:"ethnicity",name:"ethnicity",type:"select",setFieldValue:c,handleChange:s,value:m.ethnicity,disabled:r,options:i?(v=i.ethnicities)==null?void 0:v.map(t=>({value:t.id,label:t.value})):[]}),a.jsx(u,{label:"Education level",id:"education",name:"education",type:"select",setFieldValue:c,handleChange:s,value:m.education,disabled:r,options:i?(y=i.educationLevels)==null?void 0:y.map(t=>({value:t.id,label:t.value})):[]}),a.jsxs("div",{className:"mt-10  w-full  self-end md:block",children:[a.jsx(j,{className:"w-full max-w-full",colorTheme:"purple",variant:"filled",onClick:d,type:"submit",disabled:!(o&&A),children:"Create Profile"}),a.jsx(j,{className:"mt-2 w-full max-w-full",colorTheme:"purple",variant:"bare",onClick:P,children:"Skip"})]})]})})})}})}):a.jsx("p",{children:"not logged in"})]})})};export{G as default};
