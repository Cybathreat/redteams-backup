var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,571930,670389,e=>{"use strict";let t=(0,e.i(475254).default)("bookmark",[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]);e.s(["Bookmark",0,t],571930);let a="redteams-bookmarks";function r(){try{let e=localStorage.getItem(a);return e?JSON.parse(e):[]}catch{return[]}}e.s(["addBookmark",0,function(e){let t=r();t.some(t=>t.slug===e.slug)||(t.push({...e,savedAt:new Date().toISOString()}),localStorage.setItem(a,JSON.stringify(t)),window.dispatchEvent(new CustomEvent("bookmarks-changed")))},"getBookmarks",0,r,"isBookmarked",0,function(e){return r().some(t=>t.slug===e)},"removeBookmark",0,function(e){let t=r().filter(t=>t.slug!==e);localStorage.setItem(a,JSON.stringify(t)),window.dispatchEvent(new CustomEvent("bookmarks-changed"))}],670389)},24952,e=>{"use strict";var t=e.i(843476),a=e.i(271645),r=e.i(522016),s=e.i(571930);let o=(0,e.i(475254).default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);var i=e.i(670389);e.s(["default",0,function(){let[e,n]=(0,a.useState)([]),[l,m]=(0,a.useState)(!1);(0,a.useEffect)(()=>{m(!0),n((0,i.getBookmarks)())},[]),(0,a.useEffect)(()=>{function e(){n((0,i.getBookmarks)())}return window.addEventListener("bookmarks-changed",e),()=>window.removeEventListener("bookmarks-changed",e)},[]);let c=e.reduce((e,t)=>{let a=t.category||"Other";return e[a]||(e[a]=[]),e[a].push(t),e},{});return(0,t.jsxs)("main",{id:"main-content",className:"mx-auto max-w-3xl px-6 pt-24 pb-16",children:[(0,t.jsx)("h1",{className:"text-3xl font-semibold mb-2",children:"Bookmarks"}),(0,t.jsx)("p",{className:"text-[var(--text-muted)] mb-8",children:"Articles you've saved for later."}),l?0===e.length?(0,t.jsxs)("div",{className:"text-center py-16",children:[(0,t.jsx)(s.Bookmark,{className:"w-12 h-12 mx-auto mb-4 text-[var(--text-muted)]"}),(0,t.jsx)("p",{className:"text-[var(--text-muted)]",children:"No bookmarks yet. Save articles while reading to find them here."})]}):(0,t.jsx)("div",{className:"space-y-8",children:Object.entries(c).map(([e,a])=>(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:"text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3",children:e.replace(/-/g," ")}),(0,t.jsx)("ul",{className:"space-y-2",children:a.map(e=>(0,t.jsxs)("li",{className:"flex items-start gap-3 rounded-lg border border-[var(--border)] p-4 hover:border-[var(--border-light)] transition-colors",children:[(0,t.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,t.jsx)(r.default,{href:`/topics/${e.slug}`,className:"text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors",children:e.title}),e.description&&(0,t.jsx)("p",{className:"mt-1 text-xs text-[var(--text-muted)] line-clamp-2",children:e.description})]}),(0,t.jsx)("button",{type:"button",onClick:()=>{var t;return t=e.slug,void((0,i.removeBookmark)(t),n((0,i.getBookmarks)()))},className:"shrink-0 p-1.5 rounded text-[var(--text-muted)] hover:text-[var(--error)] hover:bg-[var(--error)]/10 transition-colors","aria-label":`Remove ${e.title} from bookmarks`,children:(0,t.jsx)(o,{className:"w-4 h-4"})})]},e.slug))})]},e))}):(0,t.jsx)("div",{className:"text-[var(--text-muted)]",children:"Loading..."})]})}],24952)}]);
}

/*
     FILE ARCHIVED ON 12:37:43 Apr 14, 2026 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:40:22 May 26, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.493
  exclusion.robots: 0.044
  exclusion.robots.policy: 0.034
  esindex: 0.011
  cdx.remote: 6.46
  LoadShardBlock: 163.78 (3)
  PetaboxLoader3.datanode: 139.928 (4)
  PetaboxLoader3.resolve: 109.512 (2)
  load_resource: 111.451
*/