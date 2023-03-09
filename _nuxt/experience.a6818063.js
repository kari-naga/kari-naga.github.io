import{_,a as C,b as L}from"./Expander.vue.f8b0ce91.js";import{a as m,k as w,r as v,o as S,c as y,w as e,l as t,m as g,t as p,p as n,q as b,u as k,s as M}from"./entry.c3beb398.js";import{_ as R}from"./Content.vue.73b30233.js";const z=i=>Object.fromEntries(Object.entries(i).filter(([,a])=>a!==void 0)),A=(i,a)=>(s,l)=>(w(()=>i({...z(s),...l.attrs},l)),()=>{var o,c;return a?(c=(o=l.slots).default)==null?void 0:c.call(o):null}),j={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},I=m({name:"Link",inheritAttrs:!1,props:{...j,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:A(i=>({link:[i]}))}),B={class:"my-1 w-48 [&>img]:w-full [&>img]:h-auto"},U={class:"text-lg font-light"},$={class:"font-medium"},E=m({__name:"ExperienceContainer",props:{title:{type:String,required:!0},position:{type:String,required:!0},to:{type:String,required:!0},bg:{type:String,default:""}},setup(i){const a=v("Show More");return(s,l)=>{const o=I,c=_;return S(),y(c,{class:"flex flex-col gap-1","header-class":"flex flex-col items-center gap-1","content-class":"flex flex-col items-center gap-2 max-w-prose","dropdown-class":"text-slate-500",bg:i.bg,onOpen:l[0]||(l[0]=r=>a.value="Show Less"),onClose:l[1]||(l[1]=r=>a.value="Show More")},{header:e(()=>[t(o,{to:i.to,class:"text-xl"},{default:e(()=>[g(p(i.title),1)]),_:1},8,["to"]),n("div",B,[b(s.$slots,"image")]),n("p",U,p(i.position),1)]),label:e(()=>[n("p",$,p(k(a)),1)]),content:e(()=>[b(s.$slots,"default")]),_:3},8,["bg"])}}}),O=""+new URL("igloo.ab6c6073.png",import.meta.url).href,G=""+new URL("hlreport-m-4-cropped.8710dee4.jpeg",import.meta.url).href,P=""+new URL("gocallink-fullui-cropped.5ee9886d.jpeg",import.meta.url).href,D=""+new URL("maav.0bc9381a.png",import.meta.url).href,H=""+new URL("maav-website.07a144a0.png",import.meta.url).href,N=""+new URL("origamiclub-simple.b5f50608.png",import.meta.url).href,T=n("img",{src:O,alt:"iGloo Digital Marketing",width:"320",height:"104",class:"dark:brightness-150"},null,-1),V=n("p",null," I worked with iGloo Digital Marketing on various projects to enhance their product offerings to clients. These can be seen below. ",-1),F=n("h2",{class:"text-lg font-medium"},"HighLevel Reporting Engine",-1),q=n("p",null," HighLevel Reporting Engine is a tool to generate lead reports for HighLevel, made from scratch using React and Next.js, which augments the poor reporting capabilities of the CRM by pulling data using its API and generating reports on said data separately. Users of the app can tweak the reports exactly to their liking with custom formatting, advanced contact filtering with stackable and savable filters, lead scoring, and more. The lead scoring can be customized with subscores that can contribute to each other and an unlimited number of rules, all of which are resolved by solving a dependency graph. Reports render in real time as PDFs and can be saved either as PDF or CSV files for use in spreadsheeting tools or the like. ",-1),W=n("p",null," I was given complete creative control over this project and made most of my design choices based on the needs of the small business owners who would be using my product. I created detailed documentation that is easily accessible for every aspect of the app, and I added admin pages for managing authorized users and delegating permissions. ",-1),J=n("img",{src:G,alt:"HL Reporting Engine",class:"w-full h-auto my-2 shadow-md",width:"1530",height:"906"},null,-1),K=n("h2",{class:"text-lg font-medium"},"GoCalLink",-1),Q=n("p",null," GoCalLink is an API integration between Calendly and the HighLevel CRM that they use to conduct their business. This integration syncs events between Calendly and HighLevel calendars using a chron job which polls a Cloud Run endpoint on the Google Cloud platform. It allows users to sign in and choose which calendars to sync using a simple interface and OAuth authentication with a backend written in Flask. ",-1),X=n("img",{src:P,alt:"GoCalLink",class:"w-auto max-h-80 my-2 shadow-md",width:"440",height:"770"},null,-1),Y=n("img",{src:D,alt:"Michigan Autonomous Aerial Vehicles",width:"431",height:"234",class:"dark:brightness-200"},null,-1),Z=n("p",null,"I also revamped the internal wiki detailing the team's functioning, hierarchy, and software infrastructure.",-1),ee=n("img",{src:H,alt:"MAAV Website",class:"w-full h-auto my-2 shadow-md",width:"1855",height:"967"},null,-1),te=n("img",{src:N,alt:"Origami Club at the University of Michigan",width:"1280",height:"947",class:"dark:brightness-200"},null,-1),ne=n("p",{class:"pb-2"}," I aided in forming the new organization, developing the leadership structure, writing the constitution and club rules, managing funding, planning events, and attracting new members through outreach and social media. Now, I help lead club meetings, present on projects, and lend aid to inexperienced members. ",-1),se=m({__name:"experience",setup(i){const a="Experience";w({title:a});const s=v(0);return(l,o)=>{const c=C,r=M,u=L,f=_,h=E,x=R;return S(),y(x,{title:a,gap:!1},{default:e(()=>[t(h,{title:"iGloo Digital Marketing",position:"Software Engineer",to:"https://igloodigitalmarketing.com/",bg:"bg-slate-100 dark:bg-zinc-900","height-mod":k(s),class:"mt-2"},{image:e(()=>[T]),default:e(()=>[V,t(f,{class:"flex flex-col items-center gap-1","content-class":"flex flex-col items-center gap-2","button-style":"90",bg:"bg-slate-200 dark:bg-zinc-800",onOpen:o[0]||(o[0]=d=>s.value+=d),onClose:o[1]||(o[1]=d=>s.value-=d)},{label:e(()=>[F]),content:e(()=>[q,W,n("p",null,[g(" The entire app runs in a Google Cloud Run container for scalability and cost effectiveness, and it uses Cloud Firestore as its database to handle format and preference saving. Most computation and data fetching occurs on the client-side to reduce server costs and overhead, but authentication using OAuth and profile fetching occurs on the backend A full testable version of this application can be found "),t(c,{to:"https://hlreport.live/test",class:"underline"},{default:e(()=>[g("here")]),_:1}),g(". ")]),t(u,null,{default:e(()=>[t(r,{name:"logos:nextjs-icon"}),t(r,{name:"logos:react"}),t(r,{name:"logos:firebase"}),t(r,{name:"logos:google-cloud"})]),_:1}),J]),_:1}),t(f,{class:"flex flex-col items-center gap-1","content-class":"flex flex-col items-center gap-2","button-style":"90",bg:"bg-slate-200 dark:bg-zinc-800",onOpen:o[2]||(o[2]=d=>s.value+=d),onClose:o[3]||(o[3]=d=>s.value-=d)},{label:e(()=>[K]),content:e(()=>[Q,t(u,null,{default:e(()=>[t(r,{name:"logos:python"}),t(r,{name:"logos:flask",class:"dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible"}),t(r,{name:"logos:google-cloud"})]),_:1}),X]),_:1})]),_:1},8,["height-mod"]),t(h,{title:"Michigan Autonomous Aerial Vehicles",position:"Webmaster",to:"https://maavumich.org",bg:"bg-slate-100 dark:bg-zinc-900"},{image:e(()=>[Y]),default:e(()=>[n("p",null,[g(" I worked with team leaders to rebuild the organization's website and onboarding infrastructure from the ground up in order to attract new members and sponsors and get them excited about the group and the project. The website can be found "),t(c,{to:"https://maavumich.org",class:"underline"},{default:e(()=>[g("here")]),_:1}),g(". ")]),Z,t(u,null,{default:e(()=>[t(r,{name:"logos:svelte-icon"})]),_:1}),ee]),_:1}),t(h,{title:"Origami Club at the University of Michigan",position:"Co-President",to:"https://maizepages.umich.edu/organization/origami-club",bg:"bg-slate-100 dark:bg-zinc-900"},{image:e(()=>[te]),default:e(()=>[ne]),_:1})]),_:1})}}});export{se as default};