<template lang="pug">
  div.bg-black.h-full.w-full.relative
    Navigation(@open="openMenu")
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
    openMenu (val: boolean): void  {
      this.menuState = val;
    }
  }
</script>
<style>
</style>
