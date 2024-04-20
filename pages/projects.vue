<script setup lang="ts">
  const title = 'Projects'
  useHead({
    title,
  })
</script>

<template>
  <Content :title="title" :gap="false">
    <Expander
      header-class="flex flex-col items-center mi"
      content-class="pt-2 flex flex-col items-center gap-2 max-w-prose"
      button-style="90"
      bg="bg-slate-100 dark:bg-zinc-900"
    >
      <template #label>
        <h2 class="text-xl">Real Engine</h2>
      </template>
      <template #description>
        <p class="font-light">A simple 2D game engine with physics and LDtk support</p>
      </template>
      <template #content>
        <p>
          I built a simple general purpose 2D game engine in C++ with Lua scripting, cross-platform graphics through
          SDL, physics through Box2D, and integration with the LDtk level design tool. I also used the GLM, Luabridge,
          and RapidJson libraries. You can find the engine
          <NavLink to="https://github.com/kari-naga/real-engine" class="underline">here</NavLink>, and you can watch a
          video covering some of the special features of the engine below.
        </p>
        <TechDisplay>
          <Icon name="logos:c-plusplus" />
          <Icon name="logos:lua" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
          <p class="text-xl">Lua<span class="font-extralight">Bridge</span></p>
          <img src="~/assets/img/box2d.svg" alt="Box2D logo" class="h-6" />
          <img src="~/assets/img/glm.png" alt="GLM logo" width="360" height="198" class="w-auto h-6" />
          <Icon name="devicon:sdl" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
          <img
            src="~/assets/img/rapidjson.png"
            alt="RapidJson logo"
            width="250"
            height="52"
            class="w-auto h-6 dark:h-8 dark:bg-white dark:p-2 dark:rounded-xl dark:overflow-visible"
          />
          <Icon name="logos:git" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
        </TechDisplay>
        <iframe
          width="560"
          height="315"
          class="py-4 w-full h-auto aspect-video"
          src="https://www.youtube.com/embed/-RBJeXMG2Lc?si=suvuaUDyUvHyUW-9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </template>
    </Expander>
    <Expander
      header-class="flex flex-col items-center"
      content-class="pt-2 flex flex-col items-center gap-2 max-w-prose"
      button-style="90"
      bg="bg-slate-100 dark:bg-zinc-900"
    >
      <template #label>
        <h2 class="text-xl">Skyward Counter</h2>
      </template>
      <template #description>
        <p class="font-light">A bullet hell prototype with a unique twist</p>
      </template>
      <template #content>
        <p>
          I built a prototype for a bullet hell game with a unique parrying mechanic in just a few weeks. In Skyward
          Counter, the only way to deal damage to the enemy is to parry their projectiles just before they hit you,
          making for a high-risk, high-reward, adrenaline-filled game. The game design, UI, and mechanics are completely
          bespoke, and I hope to eventually replace the assets with custom ones. You can play the game
          <NavLink to="https://linkstorm.itch.io/skyward-counter" class="underline">here</NavLink>!
        </p>
        <TechDisplay>
          <Icon name="logos:unity" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
          <Icon name="logos:c-sharp" />
          <Icon name="logos:git" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
          <Icon name="logos:jira" />
        </TechDisplay>
        <img
          src="~/assets/img/skyward-counter.png"
          alt="Metroid Recreation Screenshot"
          class="w-full h-auto my-2 shadow-md"
          width="2560"
          height="1440"
        />
      </template>
    </Expander>
    <Expander
      header-class="flex flex-col items-center"
      content-class="pt-2 flex flex-col items-center gap-2 max-w-prose"
      button-style="90"
      bg="bg-slate-100 dark:bg-zinc-900"
    >
      <template #label>
        <h2 class="text-xl">Metroid</h2>
      </template>
      <template #description>
        <p class="font-light">A faithful recreation of Metroid made in Unity</p>
      </template>
      <template #content>
        <p>
          I worked with a partner to build a faithful recreation of the classic NES game Metroid. I specifically built
          out the player movement systems, the animation system, the room transitions and door effects, the camera
          controller, and the custom laser beam weapon. You can play it
          <NavLink to="https://linkstorm.itch.io/metroid" class="underline">here</NavLink>!
        </p>
        <TechDisplay>
          <Icon name="logos:unity" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
          <Icon name="logos:c-sharp" />
          <Icon name="logos:git" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
          <Icon name="logos:jira" />
        </TechDisplay>
        <img
          src="~/assets/img/metroid.png"
          alt="Metroid Recreation Screenshot"
          class="w-full h-auto my-2 shadow-md"
          width="800"
          height="748"
        />
      </template>
    </Expander>
    <Expander
      header-class="flex flex-col items-center"
      content-class="pt-2 flex flex-col items-center gap-2 max-w-prose"
      button-style="90"
      bg="bg-slate-100 dark:bg-zinc-900"
    >
      <template #label>
        <h2 class="text-xl">Synthszr</h2>
      </template>
      <template #description>
        <p class="font-light">A complex synthesizer built with Svelte and Julia</p>
      </template>
      <template #content>
        <p>
          I worked with a team to build a digital synthesizer with a web-based frontend built in Svelte which
          communicates using WebSockets with a Julia backend for audio processing and output and accepts input from a
          MIDI keyboard.
        </p>
        <TechDisplay>
          <Icon name="logos:svelte-icon" />
          <Icon name="logos:julia" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
          <Icon name="logos:websocket" class="dark:bg-white dark:p-1 dark:rounded-xl dark:overflow-visible" />
          <Icon name="simple-icons:midi" />
        </TechDisplay>
        <img
          src="~/assets/img/synthszr.png"
          alt="Synthszr UI"
          class="w-full h-auto my-2 shadow-md"
          width="1171"
          height="454"
        />
      </template>
    </Expander>
    <Expander
      header-class="flex flex-col items-center"
      content-class="pt-2 flex flex-col items-center gap-2 max-w-prose pb-2"
      button-style="90"
      bg="bg-slate-100 dark:bg-zinc-900"
    >
      <template #label>
        <h2 class="text-xl">OpenSpace</h2>
      </template>
      <template #description>
        <p class="font-light">An audio spatialization system for headphones</p>
      </template>
      <template #content>
        <p>
          I conducted research on audio spatialization for music through headphones by splitting audio into separate
          instrument tracks, localizing each track in virtual 3D space, and playing back the result using a head-related
          transfer function. Check
          <NavLink to="https://github.com/kari-naga/OpenSpace" class="underline">this Github repository</NavLink> for
          more information.
        </p>
        <TechDisplay>
          <Icon name="logos:python" />
          <Icon name="logos:ffmpeg-icon" />
        </TechDisplay>
      </template>
    </Expander>
    <Expander
      header-class="flex flex-col items-center"
      content-class="pt-2 flex flex-col items-center gap-2 max-w-prose pb-2"
      button-style="90"
      bg="bg-slate-100 dark:bg-zinc-900"
    >
      <template #label>
        <h2 class="text-xl">Portfolio</h2>
      </template>
      <template #description>
        <p class="font-light">My portfolio and personal website</p>
      </template>
      <template #content>
        <p>
          I built my portfolio (this site) using Vue with Nuxt.js static site generation. The site is hosted on GitHub
          Pages and the source can be found
          <NavLink to="https://github.com/kari-naga/kari-naga.github.io" class="underline">here</NavLink>.
        </p>
        <TechDisplay>
          <Icon name="logos:nuxt-icon" />
          <Icon name="logos:vue" />
        </TechDisplay>
      </template>
    </Expander>
  </Content>
</template>
