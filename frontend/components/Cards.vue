<template lang="pug">
  div
    .flex.flex-wrap.bg-black.h-full.-ml-2.mt-2
      Card(v-for="i in 24" :key="i")
    .flex.justify-center.pt-8
      button.py-1.px-10.flex.items-center.space-x-2.text-custom-blue.bg-gray-800.border.border-gray-600.rounded-sm(@click="state = !state" class="focus:outline-none")
        svg.w-5.h-5(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!state")
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7")
        svg.w-5.h-5(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-else)
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7")
        div
          span(v-if="!state") Load More
          span(v-else) Load Less


</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component (
    {
      name: 'cards'
    }
  )
  export default class Cards extends Vue{
    state = false;
  }
</script>

<style lang="scss" scoped>

</style>
