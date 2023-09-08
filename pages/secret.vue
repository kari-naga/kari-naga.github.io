<template>
  <Content
    title="Happy Birthday Josh!"
    title-class="pt-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-600 via-green-500 to-purple-700 animate-text"
  >
    <div class="pt-2 flex gap-4 items-center justify-center">
      <img
        src="~/assets/img/joshthumbsdown.png"
        alt="Josh Thumbs Down"
        class="max-w-[5rem] md:max-w-[10rem] h-auto"
        width="343"
        height="728"
      />
      <div class="flex flex-col gap-6 max-w-[50ch]">
        <p>
          Happy Birthday Josh! Thanks for being a chill homie :D It's fun to play games with you from fish to valo! I
          hope this year is great to you! - Emily
        </p>
        <p>
          Happy birthday! Can't believe it's almost been 8 years since we met! Hopefully this year we can make it 0 😎.
          XD jkjk hope you have a great year and here's to year 9! - Kari
        </p>
        <p>Happy birthday Josh! Personal message forthcoming when I'm not sitting in a career fair meeting! - Vance</p>
        <p>Happy birthday Josh! - Justin</p>
        <p>Happy birthday Josh! - Jai</p>
        <p>Happy birthday Josh! - Joseph</p>
      </div>
      <img
        src="~/assets/img/slantjosh.jpg"
        alt="Slant Josh"
        class="max-w-[5rem] md:max-w-[10rem] h-auto"
        width="1075"
        height="1074"
      />
    </div>
    <Expander
      header-class="p-2 flex flex-col items-center animate-pulse text-red-600 [&>button]:hover:!text-red-800 [&>button]:active:!text-red-900"
      content-class="p-2 flex flex-col items-center gap-2 max-w-prose"
      button-style="90"
      bg="bg-slate-100 dark:bg-zinc-900"
    >
      <template #label>
        <h2 class="text-3xl font-bold">TOP SECRET</h2>
      </template>
      <template #description>
        <p class="text-xl">DO NOT OPEN</p>
      </template>
      <template #content>
        <img
          src="~/assets/img/sezhee.png"
          alt="Sezhee"
          class="max-w-[15rem] md:max-w-[100rem] h-auto rounded-lg"
          width="413"
          height="604"
        />
        <p>Cake for u 😋 - Chef Josh</p>
        <p>Save image for surprise 😘</p>
      </template>
    </Expander>
  </Content>
</template>
