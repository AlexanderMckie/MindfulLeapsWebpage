import{b as l,X as q,z as e}from"./index-FU15wMs0.js";import{dD as n,v as G,M as J,aF as b,dE as K,dF as X,bH as Q,dG as r,bn as D,dH as Y,bD as Z,ds as _}from"./BackgroundUploadContext-Vbv4aRed.js";import{q as ee,s as R,B as g,S as x,o as ae}from"./AddressAutocomplete.module-B6NgFNL3.js";const le=s=>{const o=l.useRef(null),{headerTitle:m}=s,t=l.createRef(),[c,C]=l.useState("#000000"),[y,P]=l.useState("Caveat"),[S,j]=l.useState(!1),[p,N]=l.useState(),[v,W]=l.useState("Draw"),[d,T]=l.useState(""),{width:f}=q(),[i,E]=l.useState(!1),{handleError:$}=ee();l.useEffect(()=>{window.dispatchEvent(new Event("resize"))},[S]);function h(a){s.onChange&&s.onChange(a)}const w=()=>{var a;(a=t.current)==null||a.clear(),N(""),T("")};function z(){j(!1)}const O=()=>{var a;if(v==="Draw"){const u=(a=t.current)==null?void 0:a.toDataURL("image/svg+xml");h(u)}else if(v==="Upload"&&p)h(p);else if(v==="Type"&&d){const u=L();h(u??"")}j(!1)};function B(){var a;(a=t.current)==null||a.clear(),j(!0)}function I(){w(),h(null)}async function M(){try{const a=await _();h(a),j(!1)}catch(a){$(a)}}l.useEffect(()=>{t.current&&(t.current.minWidth=.5,t.current.maxWidth=1,t.current.penColor=c)},[]),l.useEffect(()=>w(),[S]),l.useEffect(()=>{E(f!=null&&f<460)},[f]);const U=a=>{C(a),t.current&&(t.current.penColor=a)},L=()=>{if(o.current){const a=o.current.getContext("2d");return a.font=`${14*r}px ${y}`,a.fillStyle=c,a.textAlign="left",a.textBaseline="middle",a.setTransform(1,0,0,1,0,0),a.scale(i?r/2:r,i?r/2:r),a.fillText(d,1*r,15*r),o.current.toDataURL()}},H=a=>{if(a.size/1024/1024>5)return ae.error("File size must be less than 5MB"),!1;const u=new FileReader;return u.readAsDataURL(a),u.onload=V=>{var k;N((k=V.target)==null?void 0:k.result)},!1},A=a=>{T(a)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:n.moduleSignature,id:s.id,children:[e.jsx("label",{children:m}),s.value&&e.jsx("img",{src:s.value,alt:"Signature",style:{maxWidth:i?300:500,maxHeight:70,width:"unset"}}),e.jsx(R,{type:"hidden",value:s.value,onChange:a=>h(a.target.value)}),e.jsxs("div",{className:n.btnContainer,style:{margin:"15px 5px 5px 5px",...s.style},children:[e.jsx(g,{onClick:B,icon:s.icon??void 0,style:{marginRight:10},children:s.value?"Re-sign":"Sign"}),s.useDefaultSignature&&e.jsx(g,{onClick:M,style:{marginRight:10},children:"Use default signature"}),s.value&&e.jsx(g,{onClick:I,icon:e.jsx(G,{}),children:"Clear signature"}),e.jsx(J,{open:S,title:!1,onCancel:z,bodyStyle:{padding:0,margin:0,height:i?350:255},closable:!0,width:800,footer:[e.jsx(g,{onClick:w,children:"Clear"},"back"),e.jsx(g,{type:"primary",onClick:O,children:"Save"},"submit")],children:e.jsx("div",{className:n.signatureTabWrapper,children:e.jsxs(b,{defaultActiveKey:v,tabPosition:i?"top":"left",size:"large",onChange:a=>W(a),children:[e.jsx(b.TabPane,{tab:e.jsxs("span",{style:{fontWeight:400,margin:i?5:0},children:[e.jsx("img",{src:K,className:`${n.iconMargin} ${n.iconSize}`}),"Draw"]}),style:{padding:"5px",height:"inherit"},children:e.jsxs("div",{className:n.tabPane,children:[e.jsx("div",{className:n.rightTopPanel,children:e.jsx(F,{onChange:a=>U(a),penColor:c})}),e.jsx("div",{className:n.signatureCanvasWraper,children:e.jsx(X,{options:{minWidth:.5,maxWidth:1},height:200,redrawOnResize:!0,ref:t})})]})},"Draw"),e.jsx(b.TabPane,{tab:e.jsxs("span",{style:{fontWeight:400},children:[e.jsx(Q,{className:n.iconMargin}),"Type"]}),style:{padding:"5px",height:"inherit"},children:e.jsxs("div",{className:n.tabPane,children:[e.jsxs("div",{className:n.rightTopPanel,children:[e.jsx(F,{onChange:a=>U(a),penColor:c}),e.jsxs(x,{defaultValue:y,style:{marginLeft:i?"10px":"20px"},onChange:P,placeholder:"Select font",children:[e.jsx(x.Option,{value:"Caveat",children:e.jsx("span",{className:n.caveat,children:d||"abcd"})},1),e.jsx(x.Option,{value:"Indie Flower",label:1,children:e.jsx("span",{className:n["indie-flower"],children:d||"abcd"})},2),e.jsx(x.Option,{value:"Shadows Into Light",label:1,children:e.jsx("span",{className:n["shadows-into-light"],children:d||"abcd"})},2),e.jsx(x.Option,{value:"Dancing Script",label:1,children:e.jsx("span",{className:n["dancing-script"],children:d||"abcd"})},2),e.jsx(x.Option,{value:"Cedarville Cursive",label:1,children:e.jsx("span",{className:n.cedarville,children:d||"abcd"})},2)]})]}),e.jsxs("div",{className:n.inputTypeWrapper,children:[e.jsx(R,{style:{color:c,borderBottom:"2px silver solid",fontSize:i?18:30,alignSelf:"center",fontFamily:y},maxLength:25,value:d,onChange:a=>A(a.target.value),variant:"borderless"}),e.jsx("div",{style:{display:"none"},children:e.jsx("canvas",{width:i?(f||375)*r:600*r,height:70*r,style:{width:i?f||375:600,height:70},ref:o,id:"signature-canvas"})}),e.jsx("br",{})]})]})},"Type"),e.jsx(b.TabPane,{tab:e.jsxs("span",{style:{fontWeight:400},children:[e.jsx(D,{className:n.iconMargin}),"Upload"]}),style:{padding:"5px",height:"inherit"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",height:"100%"},children:[e.jsx("div",{style:{marginBottom:"10px"},children:p&&e.jsx(Y,{preview:!1,src:p,height:180})}),e.jsx(Z,{showUploadList:!1,accept:"image/png, image/jpeg",beforeUpload:H,children:e.jsx(g,{type:"primary",size:"large",icon:e.jsx(D,{}),children:"Upload"})})]})},"Upload")]})})})]})]})})},F=s=>{const o="#000000",m="#F43030",t="#2658B2",c=C=>{s.onChange(C)};return e.jsxs("div",{className:n.colorPallete,children:[e.jsx("span",{onClick:()=>c(o),style:{backgroundColor:o},className:`${n.dot} ${s.penColor===o?n.colorSelected:""}`}),e.jsx("span",{onClick:()=>c(t),style:{backgroundColor:t},className:`${n.dot} ${s.penColor===t?n.colorSelected:""}`}),e.jsx("span",{onClick:()=>c(m),style:{backgroundColor:m},className:`${n.dot} ${s.penColor===m?n.colorSelected:""}`})]})};export{le as S};
