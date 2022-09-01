<script setup lang="ts">
  const title = 'Projects'
  useHead({
    title,
  })
</script>

<template>
  <Content :title="title">
    <div class="flex flex-col items-center gap-2">
      <h2 class="text-xl">
        Synthszr
      </h2>
      <p class="max-w-prose">
        I worked with a team to build a digital synthesizer with a web-based frontend built in Svelte which communicates using
        WebSockets with a Julia backend for audio processing and output and accepts input from a MIDI keyboard.
      </p>
      <img src="~/assets/img/synthszr.png" alt="Synthszr UI" class="mt-2 max-w-2xl w-full h-auto" width="1171" height="454" />
    </div>
    <div class="flex flex-col items-center gap-2">
      <Link to="https://github.com/kari-naga/OpenSpace" class="text-xl">
        OpenSpace
      </Link>
      <p class="max-w-prose">
        I conducted research on audio spatialization for music through headphones by splitting audio into separate instrument
        tracks, localizing each track in virtual 3D space, and playing back the result using a head-related transfer function.
        Check <Link to="https://github.com/kari-naga/OpenSpace" class="underline">this Github repository</Link> for more information.
      </p>
    </div>
  </Content>
</template>
