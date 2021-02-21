<template lang="pug">
  section.mt-12.pt-4.h-44.flex.items-center
    img.min-w-28.h-full(src="~assets/images/black_clover.jpg" alt="card image")
    div.containerr.h-full(class=" flex-shrink")
      div.blur.bg-black.bg-opacity-60.h-full.w-full
        a.ml-2.mt-1.text-sm.text-custom-blue.inline-block(href="#")
          h2 Black Clover
        p.h-16.mt-2.ml-2.mr-5.text-gray-400.text-xs Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the "Wizard King"
        div.my-6.ml-2.mr-5.flex.justify-between.items-center
          div.flex.items-center
            svg.h-6.w-6.text-custom-blue(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z")
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z")
            span.text-custom-blue.text-sm Watch
          div.flex
            svg.h-5.w-5.text-custom-blue(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 19l-7-7 7-7")
            svg.h-5.w-5.text-custom-blue(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7")
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
  .containerr {
    height: 100%;
    background-image: url("../assets/images/black_clover.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .blur {
    backdrop-filter: blur(10px);
  }

</style>
