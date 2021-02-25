<template lang="pug">
  div.bg-black
    Navigation
    .mx-2
      SliderCard
      Discord
      Tabs
      Cards
      Footer
</template>

<script lang="ts">
import Navigation from '~/components/navbar/Navigation';
import SliderCard from '~/components/SliderCard';
import Cards from "~/components/Cards"
import Discord from '@/components/Discord'
import Tabs from '~/components/Tabs'
import Footer from '~/components/Footer'
import { Component, Vue } from "vue-property-decorator";
@Component ({
  components: {
    Navigation,
    SliderCard,
    Cards,
    Discord,
    Tabs,
    Footer
  }
})
export default class Index extends Vue{

}
</script>

<style lang="scss">

</style>
