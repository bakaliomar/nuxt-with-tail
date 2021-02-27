<template lang="pug">
  div.relative
    Navigation(@open="openMenu")
    .mx-2
      SliderCard
      Discord
      Tabs
      Cards
    SideBar(:state="menuState")
    Footer
</template>

<script lang="ts">
import Navigation from '~/components/navbar/Navigation.vue';
import SideBar from "~/components/SideBar.vue";
import SliderCard from '~/components/SliderCard.vue';
import Cards from "~/components/Cards.vue"
import Discord from '@/components/Discord.vue'
import Tabs from '~/components/Tabs.vue'
import Footer from '~/components/Footer.vue'
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
  openMenu (val: boolean): void {
    this.menuState = val;
  }

}
</script>

<style lang="scss">

</style>
