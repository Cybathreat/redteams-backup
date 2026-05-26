var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,595468,e=>{"use strict";let r=(0,e.i(475254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",0,r],595468)},63209,e=>{"use strict";let r=(0,e.i(475254).default)("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["AlertCircle",0,r],63209)},531278,e=>{"use strict";let r=(0,e.i(475254).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",0,r],531278)},342055,e=>{"use strict";var r=e.i(843476),t=e.i(271645),a=e.i(522016);let s=(0,e.i(475254).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);var i=e.i(531278),l=e.i(595468),c=e.i(63209),n=e.i(945060);let o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;e.s(["NewsletterForm",0,function({className:e}){let[d,u]=(0,t.useState)(""),[h,m]=(0,t.useState)(!1),[x,b]=(0,t.useState)("idle"),[y,p]=(0,t.useState)(""),v=(0,t.useRef)(null);async function g(e){e.preventDefault();let r=d.trim()?o.test(d)?h?null:"Please accept the privacy policy to subscribe.":"Please enter a valid email address.":"Email address is required.";if(r){p(r),b("error"),v.current?.focus();return}b("loading"),p("");try{let e=await fetch("/api/newsletter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d.trim(),consent:!0})}),r=await e.json().catch(()=>({}));if(!e.ok)throw Error(r.error||r.message||"Something went wrong. Please try again.");b("success"),u(""),m(!1)}catch(e){b("error"),p(e instanceof Error?e.message:"Something went wrong. Please try again.")}}return"success"===x?(0,r.jsxs)("div",{className:(0,n.cn)("flex items-center gap-3 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent-subtle)] px-4 py-3",e),role:"status",children:[(0,r.jsx)(l.CheckCircle2,{className:"h-5 w-5 shrink-0 text-[var(--accent)]","aria-hidden":!0}),(0,r.jsx)("p",{className:"text-sm text-[var(--accent)]",children:"Almost there — check your inbox for a confirmation link."})]}):(0,r.jsxs)("form",{onSubmit:g,className:(0,n.cn)("w-full",e),noValidate:!0,children:[(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)("div",{className:"relative flex-1",children:[(0,r.jsx)(s,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]","aria-hidden":!0}),(0,r.jsx)("input",{ref:v,type:"email",value:d,onChange:e=>{u(e.target.value),"error"===x&&(b("idle"),p(""))},placeholder:"you@example.com",disabled:"loading"===x,"aria-label":"Email address","aria-invalid":"error"===x,"aria-describedby":"error"===x?"newsletter-error":void 0,className:(0,n.cn)("w-full rounded-lg border bg-[var(--bg-secondary)] py-2.5 pl-9 pr-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors","focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]","disabled:cursor-not-allowed disabled:opacity-60","error"===x?"border-red-500/60":"border-[var(--border)]")})]}),(0,r.jsx)("button",{type:"submit",disabled:"loading"===x||!h,className:(0,n.cn)("inline-flex shrink-0 items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors","bg-[var(--accent)] hover:bg-[var(--accent-hover)]","focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]","disabled:cursor-not-allowed disabled:opacity-60"),children:"loading"===x?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Loader2,{className:"h-4 w-4 animate-spin","aria-hidden":!0}),(0,r.jsx)("span",{children:"Subscribing..."})]}):(0,r.jsx)("span",{children:"Subscribe"})})]}),(0,r.jsxs)("label",{className:"mt-3 flex items-start gap-2 text-xs text-[var(--text-muted)]",children:[(0,r.jsx)("input",{type:"checkbox",checked:h,onChange:e=>{m(e.target.checked),"error"===x&&(b("idle"),p(""))},className:"mt-0.5 h-3.5 w-3.5 rounded border-[var(--border)] bg-[var(--bg-secondary)] accent-[var(--accent)]","aria-describedby":"newsletter-consent-text"}),(0,r.jsxs)("span",{id:"newsletter-consent-text",children:["I agree to receive the redteams.ai newsletter and have read the"," ",(0,r.jsx)(a.default,{href:"/privacy",className:"underline hover:text-[var(--text-primary)]",children:"Privacy Policy"}),". I can unsubscribe at any time via the link in every email."]})]}),"error"===x&&y&&(0,r.jsxs)("div",{id:"newsletter-error",role:"alert",className:"mt-2 flex items-center gap-2 text-xs text-red-400",children:[(0,r.jsx)(c.AlertCircle,{className:"h-3.5 w-3.5 shrink-0","aria-hidden":!0}),(0,r.jsx)("span",{children:y})]})]})}],342055)}]);
}

/*
     FILE ARCHIVED ON 12:37:37 Apr 14, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:40:13 May 26, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.564
  exclusion.robots: 0.054
  exclusion.robots.policy: 0.041
  esindex: 0.011
  cdx.remote: 14.694
  LoadShardBlock: 50.197 (3)
  PetaboxLoader3.datanode: 58.957 (4)
  load_resource: 132.982
  PetaboxLoader3.resolve: 100.185
*/