<template lang="pug">
  .flex.flex-wrap.bg-black.h-full.-ml-2
    Card(v-for="i in 24" :key="i")
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Card from "~/components/Card"
  @Component (
    {
      components: {
        Card
      }
    }
  )
  export default class Cards extends Vue{

  }
</script>

<style lang="scss" scoped>

</style>
