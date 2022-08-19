<script setup lang="ts">
  const title = 'Experience'
  useHead({
    title,
  })
  const heightMod = ref(0)
</script>

<template>
  <Content :title="title">
    <ExperienceContainer title="iGloo Digital Marketing" position="Software Engineer" to="https://igloodigitalmarketing.com/" :height-mod="heightMod">
      <p>
        I worked with iGloo Digital Marketing on various projects to enhance their product offerings to clients. These can be seen below.
      </p>
      <Expander class="flex flex-col items-center gap-1" header-class="flex gap-1" button-style="90" @open="height => heightMod += height" @close="height => heightMod -= height">
        <template v-slot:header>
          <h2 class="text-lg font-medium">GoCalLink</h2>
        </template>
        <template v-slot:content>
          <p>
            The first project I worked on was building out an API integration between Calendly and the HighLevel customer
            relationship management (CRM) program that they use to conduct their business. This integration
            syncs events between Calendly and HighLevel calendars using a chron job which polls a Cloud Run
            endpoint on the Google Cloud platform. It allows users to sign in and choose which calendars to sync
            using a simple interface and OAuth authentication with a backend written in Flask.
          </p>
          <img src="~/assets/img/gocallink-fullui.jpeg" alt="GoCalLink" class="max-w-2xl w-full h-auto" width="1740" height="906" />
        </template>
      </Expander>
      <Expander class="flex flex-col items-center gap-1" header-class="flex gap-1" button-style="90" @open="height => heightMod += height" @close="height => heightMod -= height">
        <template v-slot:header>
          <h2 class="text-lg font-medium">HighLevel Reporting Engine</h2>
        </template>
        <template v-slot:content>
          <p>
            I spent most of my time working on a reporting engine for HighLevel, made from scratch using React
            and Next.js, which augments the admittedly poor reporting capabilities of the CRM by pulling data
            using its API and generating reports on said data separately. Users of the app can tweak the reports
            exactly to their liking with custom formatting, advanced contact filtering with stackable and savable
            filters, lead scoring, and more. The lead scoring can be customized with subscores that can contribute
            to each other and an unlimited number of rules, all of which are resolved by solving a dependency
            graph. Reports render in real time as PDFs and can be saved either as PDF or CSV files for use in
            spreadsheeting tools or the like. I was given complete creative control over this project and made
            most of my design choices based on the needs of the small business owners who would be using my
            product. I created detailed documentation that is easily accessible for every aspect of the app, and I
            added admin pages for managing authorized users and delegating permissions. The entire app runs in
            a Google Cloud Run container for scalability and cost effectiveness, and it uses Cloud Firestore as its
            database to handle format and preference saving. Most computation and data fetching occurs on the
            client-side to reduce server costs and overhead, but authentication using OAuth and profile fetching
            occurs on the backend A full testable version of this application can be found <Link to="https://hlreport.live/test" class="underline">here</Link>.
          </p>
          <img src="~/assets/img/hlreport-m-4.jpeg" alt="HL Reporting Engine" class="max-w-2xl w-full h-auto" width="1740" height="906" />
        </template>
      </Expander>
    </ExperienceContainer>
    <ExperienceContainer title="Michigan Autonomous Aerial Vehicles" position="Webmaster" to="https://maavumich.org">
      <p>
        I worked with team leaders to rebuild the organization's website and onboarding infrastructure from the ground up
        in order to attract new members and get them excited about the group and the project. The website can be found <Link to="https://maavumich.org" class="underline">here</Link>.
      </p>
      <img src="~/assets/img/maav-website.png" alt="MAAV Website" class="max-w-2xl w-full h-auto" width="1855" height="967" />
      <p>
        I also revamped the internal wiki detailing the team's functioning, hierarchy, and software infrastructure.
      </p>
    </ExperienceContainer>
    <ExperienceContainer title="Origami Club at the University of Michigan" position="Co-President" to="https://maizepages.umich.edu/organization/origami-club">
      I aided in forming the new organization, developing the leadership structure, writing the constitution and club rules,
      managing funding, planning events, and attracting new members through outreach and social media.
      Now, I help lead club meetings, present on projects, and lend aid to inexperienced members.
    </ExperienceContainer>
  </Content>
</template>
