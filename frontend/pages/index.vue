<template lang="pug">
    .px-2(class="lg:w-8/12 xl:w-9/12")
      SliderCard
      Discord
      Tabs
      div
        .flex.flex-wrap.bg-black.h-full.-ml-2.mt-2
          Card(v-for="i in 24" :key="i")
        LoadMore
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
