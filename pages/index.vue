<template lang="pug">
  div.relative
    Navigation(@open="openMenu" @focus="onFocus")
    .h-16.pt-3.pb-6.bg-black.fixed.top-12.inset-x-0.z-20(:class="(focusState && searchInput) ? 'block' : 'hidden'")
      .border-b.border-gray-700.flex.px-2
        a.px-4.py-1.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Full
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") 4ANI
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") GOGO
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Mato
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Api
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Amax
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Rush
        a.mb-px.px-4.py-1.ml-px.text-custom-blue.text-sm.bg-gray-black.rounded(href="#") Mal
    .mx-2
      SliderCard
      Discord
      Tabs
      Cards
    SideBar(:state="menuState")
    Footer
</template>

<script lang="ts">
import Navigation from '~/components/navbar/Navigation';
import SideBar from "~/components/SideBar";
import SliderCard from '~/components/SliderCard';
import Cards from "~/components/Cards"
import Discord from '@/components/Discord'
import Tabs from '~/components/Tabs'
import Footer from '~/components/Footer'
import { Component, Vue } from "vue-property-decorator";
@Component ({
  components: {
    Navigation,
    SideBar,
    SliderCard,
    Cards,
    Discord,
    Tabs,
    Footer
  }
})
export default class Index extends Vue{
  menuState = false;
  focusState = false;
  searchInput = false;
  openMenu (val: boolean): void {
    this.menuState = val;
  }
  onFocus (val: boolean): void {
    this.searchInput = val;
    this.focusState = !this.focusState;
  }

}
</script>

<style lang="scss">
.search:focus > .server {
  @apply visible;
}
</style>
