<template lang="pug">
  .mt-2.w-full.bg-gray-black.text-sm.flex.flex-col.items-center.transition-height.duration-500.ease-in-out(:class="state ? 'h-80 md:h-52' : 'h-20'")
    p.ml-2.mt-1.text-gray-400.overflow-y-hidden We have multiple stream types for each anime, so try what works best for you.
      br
      |Different anime have different 'best' stream, so if you got problem try switching stream.
      br
      br
      |For mobile users, you can swipe left / right to open menu, schedule, and stream list.
      br
      |You can also install PWA (add to homescreen) to launch AniMixPlay like an app.
      br
      br
      |Read more info, report problems or ask questions in our discord server.
      br
      |Discord :
    button.flex.text-gray-400(@click="state= !state" class="focus:outline-none")
      svg.h-8.w-8.px-1.pt-1.transition.duration-700.ease-in-out(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"  v-if="!state")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" v-else)
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
@Component({})
export default class Discord extends Vue {
  statment = "We have multiple stream types for each anime, so try what works best for you.\n <br> <br> <br>" +
    "Different anime have different 'best' stream, so if you got problem try switching stream.\n" +
    "\n" +
    "For mobile users, you can swipe left / right to open menu, schedule, and stream list.\n" +
    "You can also install PWA (add to homescreen) to launch AniMixPlay like an app.\n" +
    "\n" +
    "Read more info, report problems or ask questions in our discord server.\n" +
    "Discord : https://discord.gg/YyQ9cpS";
  isMobile = false;
  state = false;
  get clip (): string {
    if (this.isMobile && !this.state)
      return this.statment.substring(0, this.statment.search(/\n/)-1);
    return this.statment
  }
  mounted (): void {
    this.checkMobileSize()
  }
  checkMobileSize(): void {
    const windowHeight = window.innerWidth;
    if (windowHeight < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
