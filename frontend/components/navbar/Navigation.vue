<template lang="pug">
  div
    nav.px-2.sticky.top-0.inset-x-0.h-12.z-20.flex.items-center.justify-between.space-x-2.w-full.bg-black(class="lg:px-5 xl:container")
      div.flex.items-center.space-x-3
        svg(class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg")
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M15 19l-7-7 7-7")
        svg.h-6.w-6.text-gray-400(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor")
          path(d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z")
        img.h-8.w-auto(src="~assets/images/logo.png" alt="site logo" :class="search ? 'hidden' : 'inline-block'" class="lg:inline-block lg:h-10")
        input.search.px-2.h-8.w-full.bg-black.text-gray-100.border.border-gray-600.rounded-sm(type="search" placeholder="Search" class="focus:border-custom-blue focus:outline-none lg:w-96 lg:inline-block" :class="search ? 'inline-block' : 'hidden'" @click="onFocus")
        .text-sm.space-x-1.items-center.hidden(class="lg:flex")
          svg.h-4.w-4.text-gray-400(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15")
          span.text-gray-400.text-base Random
        span.text-gray-400.text-base.leading-5.hidden(class="lg:inline") A-Z List
      .flex.items-center.px-3.space-x-3(class="lg:hidden")
        button(class="focus:outline-none" @click="search = !search")
          svg.h-8.w-8.p-1.text-custom-blue.bg-gray-800(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" v-if="!search")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" v-else)
        .relative.flex
          button(@click="openMenu()" class="focus:outline-none")
            svg.h-8.w-8.p-1.text-custom-blue.bg-gray-800(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="focus:outline-none")
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16")
    .h-20.pt-3.pb-6.bg-black.fixed.top-12.inset-x-0.z-20(:class="(focusState && search) ? 'block' : 'hidden'" class="md:h-16")
      .border-b.border-gray-700.flex.flex-wrap.px-2
        a.px-4.py-1.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Full
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") 4ANI
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") GOGO
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Mato
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Api
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Amax
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Rush
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Mal

</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component ({
    name: 'Navigation',
  })
  export default class Navigation extends Vue {
    menu = false;
    search = false;
    focusState= false;
    onFocus ():void {
      this.focusState = !this.focusState;
    }
    openMenu () : void {
      this.menu = !this.menu;
      this.$emit('open', this.menu);
    }
  }
</script>

<style lang="scss" scoped>

</style>
