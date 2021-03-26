<template lang="pug">
  div.w-full
    .px-2(class="lg:w-8/12 xl:w-9/12")
      SliderCard
      Discord
      Tabs
      Cards
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component ({
 name: 'index'
})
export default class Index extends Vue{
}
</script>

<style lang="scss">
.search:focus > .server {
  @apply visible;
}
</style>
