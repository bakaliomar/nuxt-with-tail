<template lang="pug">
  nav.bg-gray-900.h-12.flex.justify-between.w-full.z-10
    div.flex.items-center.mx-3
      svg(class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M15 19l-7-7 7-7")
      svg.h-6.w-6.text-gray-400.ml-2(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor")
        path(d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z")
      img.h-8.w-auto.ml-2(src="~assets/images/logo.png" alt="site logo")
    div.flex.items-center.mx-3
      svg.h-8.w-8.p-1.text-custom-blue.bg-gray-700(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z")
      svg.h-8.w-8.ml-2.p-1.text-custom-blue.bg-gray-700(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16")
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component ({
    name: 'Navigation'
  })
  export default class Navigation extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>
