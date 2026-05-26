var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,205676,e=>{"use strict";var t=e.i(843476),r=e.i(271645),a=e.i(555436),l=e.i(37727);e.s(["GlossaryFilter",0,function({terms:e}){let[s,o]=(0,r.useState)(""),n=(0,r.useCallback)(t=>{let r=t.toLowerCase().trim(),a=document.querySelectorAll("[data-glossary-term]"),l=0,s=new Set;a.forEach(e=>{let t=e.getAttribute("data-glossary-term")||"",a=e.querySelector("p")?.textContent?.toLowerCase()||"",o=!r||t.includes(r)||a.includes(r);if(e.style.display=o?"":"none",o){l++;let e=t[0]?.toUpperCase();e&&s.add(e)}}),document.querySelectorAll('[id^="letter-"]').forEach(e=>{let t=e.id.replace("letter-","");e.style.display=s.has(t)?"":"none"});let o=document.getElementById("glossary-match-count");o&&(o.textContent=r?`${l} of ${e.length} terms`:"")},[e.length]);return(0,r.useEffect)(()=>{n(s)},[s,n]),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(a.Search,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]","aria-hidden":!0}),(0,t.jsx)("input",{type:"text",value:s,onChange:e=>o(e.target.value),placeholder:"Filter glossary terms...",className:"w-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/50 py-2.5 pl-10 pr-10 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition focus:border-[var(--accent)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20","aria-label":"Filter glossary terms"}),s&&(0,t.jsx)("button",{type:"button",onClick:()=>o(""),className:"absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-[var(--text-muted)] transition hover:text-[var(--text-primary)]","aria-label":"Clear filter",children:(0,t.jsx)(l.X,{className:"h-4 w-4"})})]}),(0,t.jsx)("div",{id:"glossary-match-count",className:"mt-2 text-xs text-[var(--text-muted)]","aria-live":"polite"})]})}])}]);
}

/*
     FILE ARCHIVED ON 12:37:45 Apr 14, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:40:41 May 26, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.56
  exclusion.robots: 0.044
  exclusion.robots.policy: 0.034
  esindex: 0.007
  cdx.remote: 28.535
  LoadShardBlock: 1295.281 (3)
  PetaboxLoader3.datanode: 1281.169 (4)
  load_resource: 77.339
  PetaboxLoader3.resolve: 33.739
*/