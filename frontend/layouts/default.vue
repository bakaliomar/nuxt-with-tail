<template lang="pug">
  div.bg-black.h-full.w-full.relative
    Navigation(@open="openMenu" @focus="onFocus")
    .h-20.pt-3.pb-6.bg-black.fixed.top-12.inset-x-0.z-20(:class="(focusState && searchInput) ? 'block' : 'hidden'" class="md:h-16")
      .border-b.border-gray-700.flex.flex-wrap.px-2
        a.px-4.py-1.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Full
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") 4ANI
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") GOGO
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Mato
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Api
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Amax
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Rush
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Mal
    .flex.w-full(class="lg:px-5 xl:container xl:mx-auto")
      Nuxt
      SideBar(:state="menuState")
    Footer
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component({
    name: "Default",
  })
  export default class Default extends Vue {
    menuState = false;
    focusState = false;
    searchInput = false;
    onFocus (val: boolean): void {
      this.searchInput = val;
      this.focusState = !this.focusState;
    }
    openMenu (val: boolean): void  {
      this.menuState = val;
    }
  }
</script>
<style>
</style>
