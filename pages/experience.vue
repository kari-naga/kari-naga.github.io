<script setup lang="ts">
  const title = 'Experience'
  useHead({ title })
  const heightModCapitalOne = ref(0)
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
