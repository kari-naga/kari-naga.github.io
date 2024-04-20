<script setup lang="ts">
  const title = 'Experience'
  useHead({ title })
  const heightModCapitalOne = ref(0)
  const heightModIgloo = ref(0)
</script>

<template>
  <Content :title="title" :gap="false">
    <h2 class="text-2xl font-medium pt-4">Work Experience</h2>
    <ExperienceContainer
      title="Capital One"
      position="Software Engineer Intern"
      to="https://capitalone.com/"
      bg="bg-slate-100 dark:bg-zinc-900"
      :height-mod="heightModCapitalOne"
      class="mt-2"
    >
      <template #image>
        <img
          src="~/assets/img/capital-one.png"
          alt="Capital One"
          width="1958"
          height="705"
          class="dark:brightness-150"
        />
      </template>
      <p>I developed enterprise web software as a software engineer intern at Capital One.</p>
      <Expander
        class="flex flex-col items-center gap-1"
        content-class="flex flex-col items-center gap-2 pb-2"
        button-style="90"
        bg="bg-slate-200 dark:bg-zinc-800"
        @open="(height: number) => heightModCapitalOne += height"
        @close="(height: number) => heightModCapitalOne -= height"
      >
        <template #label>
          <h2 class="text-lg font-medium">BRLR Recommender</h2>
        </template>
        <template #content>
          <p>
            I worked on an internal enterprise recommender tool to help users fill out compliance forms. By analyzing
            previously completed forms, we were able to generate likely answers that could help new users fill out the
            complex forms and present them beside the questions. The backend for the project was written in Go and ran
            on AWS Lambda, while the frontend was written in React. I also worked through deployment and CI/CD for the
            project using Jenkins and other internal tools.
          </p>
          <TechDisplay>
            <Icon name="logos:aws" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
            <Icon name="logos:go" />
            <Icon name="logos:typescript-icon" />
            <Icon name="logos:react" />
          </TechDisplay>
        </template>
      </Expander>
    </ExperienceContainer>
    <ExperienceContainer
      title="iGloo Digital Marketing"
      position="Software Engineer"
      to="https://igloodigitalmarketing.com/"
      bg="bg-slate-100 dark:bg-zinc-900"
      :height-mod="heightModIgloo"
      class="mt-2"
    >
      <template #image>
        <img
          src="~/assets/img/igloo.png"
          alt="iGloo Digital Marketing"
          width="320"
          height="104"
          class="dark:brightness-150"
        />
      </template>
      <p>
        I worked with iGloo Digital Marketing on various projects to enhance their product offerings to clients. These
        can be seen below.
      </p>
      <Expander
        class="flex flex-col items-center gap-1"
        content-class="flex flex-col items-center gap-2"
        button-style="90"
        bg="bg-slate-200 dark:bg-zinc-800"
        @open="(height: number) => heightModIgloo += height"
        @close="(height: number) => heightModIgloo -= height"
      >
        <template #label>
          <h2 class="text-lg font-medium">HighLevel Reporting Engine</h2>
        </template>
        <template #content>
          <p>
            HighLevel Reporting Engine is a tool to generate lead reports for HighLevel, made from scratch using React
            and Next.js, which augments the poor reporting capabilities of the CRM by pulling data using its API and
            generating reports on said data separately. Users of the app can tweak the reports exactly to their liking
            with custom formatting, advanced contact filtering with stackable and savable filters, lead scoring, and
            more. The lead scoring can be customized with subscores that can contribute to each other and an unlimited
            number of rules, all of which are resolved by solving a dependency graph. Reports render in real time as
            PDFs and can be saved either as PDF or CSV files for use in spreadsheeting tools or the like.
          </p>
          <p>
            I was given complete creative control over this project and made most of my design choices based on the
            needs of the small business owners who would be using my product. I created detailed documentation that is
            easily accessible for every aspect of the app, and I added admin pages for managing authorized users and
            delegating permissions.
          </p>
          <p>
            The entire app runs in a Google Cloud Run container for scalability and cost effectiveness, and it uses
            Cloud Firestore as its database to handle format and preference saving. Most computation and data fetching
            occurs on the client-side to reduce server costs and overhead, but authentication using OAuth and profile
            fetching occurs on the backend A full testable version of this application can be found
            <NavLink to="https://hlreport.live/test" class="underline">here</NavLink>.
          </p>
          <TechDisplay>
            <Icon name="logos:nextjs-icon" />
            <Icon name="logos:react" />
            <Icon name="logos:firebase" />
            <Icon name="logos:google-cloud" />
          </TechDisplay>
          <img
            src="~/assets/img/hlreport-m-4-cropped.jpeg"
            alt="HL Reporting Engine"
            class="w-full h-auto my-2 shadow-md"
            width="1530"
            height="906"
          />
        </template>
      </Expander>
      <Expander
        class="flex flex-col items-center gap-1"
        content-class="flex flex-col items-center gap-2"
        button-style="90"
        bg="bg-slate-200 dark:bg-zinc-800"
        @open="(height: number) => heightModIgloo += height"
        @close="(height: number) => heightModIgloo -= height"
      >
        <template #label>
          <h2 class="text-lg font-medium">GoCalLink</h2>
        </template>
        <template #content>
          <p>
            GoCalLink is an API integration between Calendly and the HighLevel CRM that they use to conduct their
            business. This integration syncs events between Calendly and HighLevel calendars using a chron job which
            polls a Cloud Run endpoint on the Google Cloud platform. It allows users to sign in and choose which
            calendars to sync using a simple interface and OAuth authentication with a backend written in Flask.
          </p>
          <TechDisplay>
            <Icon name="logos:python" />
            <Icon name="logos:flask" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
            <Icon name="logos:google-cloud" />
          </TechDisplay>
          <img
            src="~/assets/img/gocallink-fullui-cropped.jpeg"
            alt="GoCalLink"
            class="w-auto max-h-80 my-2 shadow-md"
            width="440"
            height="770"
          />
        </template>
      </Expander>
    </ExperienceContainer>
    <h2 class="text-2xl font-medium pt-4">Leadership Experience</h2>
    <ExperienceContainer
      title="University of Michigan Autonomous Robotic Vehicle"
      position="Sensors Lead"
      to="https://www.umarv.com"
      bg="bg-slate-100 dark:bg-zinc-900"
    >
      <template #image>
        <img
          src="~/assets/img/umarv.png"
          alt="University of Michigan Autonomous Robotic Vehicle"
          width="1667"
          height="1270"
          class="dark:bg-white dark:p-6 dark:rounded-full"
        />
      </template>
      <p>
        As the Sensors Subteam Lead, I led development of the team's sensor stack, including hardware and software
        integration, coordination with other subteams, project management, and more. The subteam primarily focused on
        Simultaneous Localization And Mapping, or SLAM, which was crucial for our robot to function and navigate
        autonomously. To achieve SLAM, we worked with LiDAR sensors, IMUs, encoders, GPS units, and more.
      </p>
      <TechDisplay wrapper-class="pb-2">
        <Icon name="logos:ros" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
        <Icon name="logos:git" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
        <Icon name="logos:github" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
        <Icon name="logos:c-plusplus" />
        <Icon name="logos:python" />
        <Icon name="devicon:gazebo" />
      </TechDisplay>
    </ExperienceContainer>
    <ExperienceContainer
      title="Michigan Autonomous Aerial Vehicles"
      position="Webmaster"
      to="https://maavumich.org"
      bg="bg-slate-100 dark:bg-zinc-900"
    >
      <template #image>
        <img
          src="~/assets/img/maav.png"
          alt="Michigan Autonomous Aerial Vehicles"
          width="431"
          height="234"
          class="dark:brightness-200"
        />
      </template>
      <p>
        I worked with team leaders to rebuild the organization's website and onboarding infrastructure from the ground
        up in order to attract new members and sponsors and get them excited about the group and the project. The
        website can be found <NavLink to="https://maavumich.org" class="underline">here</NavLink>.
      </p>
      <p>I also revamped the internal wiki detailing the team's functioning, hierarchy, and software infrastructure.</p>
      <TechDisplay>
        <Icon name="logos:svelte-icon" />
      </TechDisplay>
      <img
        src="~/assets/img/maav-website.png"
        alt="MAAV Website"
        class="w-full h-auto my-2 shadow-md"
        width="1855"
        height="967"
      />
    </ExperienceContainer>
    <ExperienceContainer
      title="Origami Club at the University of Michigan"
      position="Co-President"
      to="https://maizepages.umich.edu/organization/origami-club"
      bg="bg-slate-100 dark:bg-zinc-900"
    >
      <template #image>
        <img
          src="~/assets/img/origamiclub-simple.png"
          alt="Origami Club at the University of Michigan"
          width="1280"
          height="947"
          class="dark:brightness-200"
        />
      </template>
      <p class="pb-2">
        I aided in forming the new organization, developing the leadership structure, writing the constitution and club
        rules, managing funding, planning events, and attracting new members through outreach and social media. Now, I
        help lead club meetings, present on projects, and lend aid to inexperienced members.
      </p>
    </ExperienceContainer>
  </Content>
</template>
