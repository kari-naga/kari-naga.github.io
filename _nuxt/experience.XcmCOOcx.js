import{g as k,r as p,o as v,h as x,w as t,b as e,d,t as m,a as o,i as _,j as f,e as L,u as R,k as I}from"./entry.JWJsqObj.js";import{_ as y,a as A,b as M}from"./NavLink.vue.STDCnMsT.js";import{_ as S}from"./Content.vue.Puh0uPvK.js";const z={class:"my-1 w-48 [&>img]:w-full [&>img]:h-auto"},j={class:"text-lg font-light"},O={class:"font-medium"},U=k({__name:"ExperienceContainer",props:{title:{type:String,required:!0},position:{type:String,required:!0},to:{type:String,required:!0},bg:{type:String,default:""}},setup(c){const l=p("Show More");return(i,g)=>{const a=L,n=y;return v(),x(n,{class:"flex flex-col gap-1","header-class":"flex flex-col items-center gap-1","content-class":"flex flex-col items-center gap-2 max-w-prose","dropdown-class":"text-slate-500",bg:c.bg,onOpen:g[0]||(g[0]=r=>l.value="Show Less"),onClose:g[1]||(g[1]=r=>l.value="Show More")},{header:t(()=>[e(a,{to:c.to,class:"text-xl"},{default:t(()=>[d(m(c.title),1)]),_:1},8,["to"]),o("div",z,[_(i.$slots,"image")]),o("p",j,m(c.position),1)]),label:t(()=>[o("p",O,m(f(l)),1)]),content:t(()=>[_(i.$slots,"default")]),_:3},8,["bg"])}}}),$=""+new URL("capital-one.GXWt6a16.png",import.meta.url).href,G=""+new URL("igloo.jVIYyJ6S.png",import.meta.url).href,D=""+new URL("hlreport-m-4-cropped.kQsnRg6s.jpeg",import.meta.url).href,E=""+new URL("gocallink-fullui-cropped.sWZwD6sC.jpeg",import.meta.url).href,T=""+new URL("umarv.I_iuKlzn.png",import.meta.url).href,V=""+new URL("maav.YQaY_4As.png",import.meta.url).href,H=""+new URL("maav-website.9O5JsA7s.png",import.meta.url).href,N=""+new URL("origamiclub-simple.OAWFInwX.png",import.meta.url).href,P=o("img",{src:$,alt:"Capital One",width:"1958",height:"705",class:"dark:brightness-150"},null,-1),W=o("p",null,"I developed enterprise web software as a software engineer intern at Capital One.",-1),B=o("h2",{class:"text-lg font-medium"},"BRLR Recommender",-1),F=o("p",null," I worked on an internal enterprise recommender tool to help users fill out compliance forms. By analyzing previously completed forms, we were able to generate likely answers that could help new users fill out the complex forms and present them beside the questions. The backend for the project was written in Go and ran on AWS Lambda, while the frontend was written in React. I also worked through deployment and CI/CD for the project using Jenkins and other internal tools. ",-1),q=o("img",{src:G,alt:"iGloo Digital Marketing",width:"320",height:"104",class:"dark:brightness-150"},null,-1),J=o("p",null," I worked with iGloo Digital Marketing on various projects to enhance their product offerings to clients. These can be seen below. ",-1),Y=o("h2",{class:"text-lg font-medium"},"HighLevel Reporting Engine",-1),Q=o("p",null," HighLevel Reporting Engine is a tool to generate lead reports for HighLevel, made from scratch using React and Next.js, which augments the poor reporting capabilities of the CRM by pulling data using its API and generating reports on said data separately. Users of the app can tweak the reports exactly to their liking with custom formatting, advanced contact filtering with stackable and savable filters, lead scoring, and more. The lead scoring can be customized with subscores that can contribute to each other and an unlimited number of rules, all of which are resolved by solving a dependency graph. Reports render in real time as PDFs and can be saved either as PDF or CSV files for use in spreadsheeting tools or the like. ",-1),X=o("p",null," I was given complete creative control over this project and made most of my design choices based on the needs of the small business owners who would be using my product. I created detailed documentation that is easily accessible for every aspect of the app, and I added admin pages for managing authorized users and delegating permissions. ",-1),K=o("img",{src:D,alt:"HL Reporting Engine",class:"w-full h-auto my-2 shadow-md",width:"1530",height:"906"},null,-1),Z=o("h2",{class:"text-lg font-medium"},"GoCalLink",-1),ee=o("p",null," GoCalLink is an API integration between Calendly and the HighLevel CRM that they use to conduct their business. This integration syncs events between Calendly and HighLevel calendars using a chron job which polls a Cloud Run endpoint on the Google Cloud platform. It allows users to sign in and choose which calendars to sync using a simple interface and OAuth authentication with a backend written in Flask. ",-1),te=o("img",{src:E,alt:"GoCalLink",class:"w-auto max-h-80 my-2 shadow-md",width:"440",height:"770"},null,-1),oe=o("img",{src:T,alt:"University of Michigan Autonomous Robotic Vehicle",width:"1667",height:"1270",class:"dark:bg-white dark:p-6 dark:rounded-full"},null,-1),ne=o("p",null," As the Sensors Subteam Lead, I led development of the team's sensor stack, including hardware and software integration, coordination with other subteams, project management, and more. The subteam primarily focused on Simultaneous Localization And Mapping, or SLAM, which was crucial for our robot to function and navigate autonomously. To achieve SLAM, we worked with LiDAR sensors, IMUs, encoders, GPS units, and more. ",-1),ae=o("img",{src:V,alt:"Michigan Autonomous Aerial Vehicles",width:"431",height:"234",class:"dark:brightness-200"},null,-1),se=o("p",null,"I also revamped the internal wiki detailing the team's functioning, hierarchy, and software infrastructure.",-1),ie=o("img",{src:H,alt:"MAAV Website",class:"w-full h-auto my-2 shadow-md",width:"1855",height:"967"},null,-1),le=o("img",{src:N,alt:"Origami Club at the University of Michigan",width:"1280",height:"947",class:"dark:brightness-200"},null,-1),re=o("p",{class:"pb-2"}," I aided in forming the new organization, developing the leadership structure, writing the constitution and club rules, managing funding, planning events, and attracting new members through outreach and social media. Now, I help lead club meetings, present on projects, and lend aid to inexperienced members. ",-1),w="Experience",he=k({__name:"experience",setup(c){R({title:w});const l=p(0),i=p(0);return(g,a)=>{const n=I,r=A,u=y,h=U,b=M,C=S;return v(),x(C,{title:w,gap:!1},{default:t(()=>[e(h,{title:"Capital One",position:"Software Engineer Intern",to:"https://capitalone.com/",bg:"bg-slate-100 dark:bg-zinc-900","height-mod":f(l),class:"mt-2"},{image:t(()=>[P]),default:t(()=>[W,e(u,{class:"flex flex-col items-center gap-1","content-class":"flex flex-col items-center gap-2 pb-2","button-style":"90",bg:"bg-slate-200 dark:bg-zinc-800",onOpen:a[0]||(a[0]=s=>l.value+=s),onClose:a[1]||(a[1]=s=>l.value-=s)},{label:t(()=>[B]),content:t(()=>[F,e(r,null,{default:t(()=>[e(n,{name:"logos:aws",class:"dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible"}),e(n,{name:"logos:go"}),e(n,{name:"logos:typescript-icon"}),e(n,{name:"logos:react"})]),_:1})]),_:1})]),_:1},8,["height-mod"]),e(h,{title:"iGloo Digital Marketing",position:"Software Engineer",to:"https://igloodigitalmarketing.com/",bg:"bg-slate-100 dark:bg-zinc-900","height-mod":f(i),class:"mt-2"},{image:t(()=>[q]),default:t(()=>[J,e(u,{class:"flex flex-col items-center gap-1","content-class":"flex flex-col items-center gap-2","button-style":"90",bg:"bg-slate-200 dark:bg-zinc-800",onOpen:a[2]||(a[2]=s=>i.value+=s),onClose:a[3]||(a[3]=s=>i.value-=s)},{label:t(()=>[Y]),content:t(()=>[Q,X,o("p",null,[d(" The entire app runs in a Google Cloud Run container for scalability and cost effectiveness, and it uses Cloud Firestore as its database to handle format and preference saving. Most computation and data fetching occurs on the client-side to reduce server costs and overhead, but authentication using OAuth and profile fetching occurs on the backend A full testable version of this application can be found "),e(b,{to:"https://hlreport.live/test",class:"underline"},{default:t(()=>[d("here")]),_:1}),d(". ")]),e(r,null,{default:t(()=>[e(n,{name:"logos:nextjs-icon"}),e(n,{name:"logos:react"}),e(n,{name:"logos:firebase"}),e(n,{name:"logos:google-cloud"})]),_:1}),K]),_:1}),e(u,{class:"flex flex-col items-center gap-1","content-class":"flex flex-col items-center gap-2","button-style":"90",bg:"bg-slate-200 dark:bg-zinc-800",onOpen:a[4]||(a[4]=s=>i.value+=s),onClose:a[5]||(a[5]=s=>i.value-=s)},{label:t(()=>[Z]),content:t(()=>[ee,e(r,null,{default:t(()=>[e(n,{name:"logos:python"}),e(n,{name:"logos:flask",class:"dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible"}),e(n,{name:"logos:google-cloud"})]),_:1}),te]),_:1})]),_:1},8,["height-mod"]),e(h,{title:"University of Michigan Autonomous Robotic Vehicle",position:"Sensors Lead",to:"https://www.umarv.com",bg:"bg-slate-100 dark:bg-zinc-900"},{image:t(()=>[oe]),default:t(()=>[ne,e(r,{"wrapper-class":"pb-2"},{default:t(()=>[e(n,{name:"logos:ros",class:"dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible"}),e(n,{name:"logos:git",class:"dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible"}),e(n,{name:"logos:github",class:"dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible"}),e(n,{name:"logos:c-plusplus"}),e(n,{name:"logos:python"}),e(n,{name:"devicon:gazebo"})]),_:1})]),_:1}),e(h,{title:"Michigan Autonomous Aerial Vehicles",position:"Webmaster",to:"https://maavumich.org",bg:"bg-slate-100 dark:bg-zinc-900"},{image:t(()=>[ae]),default:t(()=>[o("p",null,[d(" I worked with team leaders to rebuild the organization's website and onboarding infrastructure from the ground up in order to attract new members and sponsors and get them excited about the group and the project. The website can be found "),e(b,{to:"https://maavumich.org",class:"underline"},{default:t(()=>[d("here")]),_:1}),d(". ")]),se,e(r,null,{default:t(()=>[e(n,{name:"logos:svelte-icon"})]),_:1}),ie]),_:1}),e(h,{title:"Origami Club at the University of Michigan",position:"Co-President",to:"https://maizepages.umich.edu/organization/origami-club",bg:"bg-slate-100 dark:bg-zinc-900"},{image:t(()=>[le]),default:t(()=>[re]),_:1})]),_:1})}}});export{he as default};
