<template lang="pug">
  div
    Navigation.top-0.inset-x-0.fixed
    SliderCard
    .h-20.mt-2.w-full.bg-gray-black.text-sm.flex.flex-col.items-center
      p.ml-2.mt-1.text-gray-400 We have multiple stream types for each anime, so try what works best for you.
      svg.h-8.w-8.text-gray-400.px-2.pt-2(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7")
    .mt-3.pb-px.border-b-2.border-gray-black.flex
      a.px-2.py-2.text-white.text-sm.bg-gray-700(href="#") New Eps
      a.px-2.py-2.ml-px.text-custom-blue.text-sm.bg-gray-black(href="#") Updates
      a.px-2.py-2.ml-px.text-custom-blue.text-sm.bg-gray-black(href="#") Popular
      a.px-2.py-2.ml-px.text-custom-blue.text-sm.bg-gray-black(href="#") Recent
      a.px-2.py-2.ml-px.text-custom-blue.text-sm.bg-gray-black(href="#") Movie
    .mt-2.flex
      .h-60.w-32.flex.flex-col.bg-gray-black
        .card-image.h-44.relative
          img.h-full.w-full.object-cover.object-center(src="~/assets/images/day.jpg")
          .py-px.px-1.absolute.top-0.right-0.flex.items-center.bg-black.bg-opacity-50
            svg.w-4.h-4.text-yellow-300(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor")
              path(d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z")
            span.text-white.text-xs.leading-4.ml-1 8.6
          .py-px.px-1.absolute.bottom-0.right-0.text-white.text-xs.bg-black.bg-opacity-50 10 hours ago
        .card-body.mt-2.text-center
          a.text-custom-blue.text-xs(href="#")
            h3.leading-tight Dragon Quest: Dai no Daibouken (2020)
          p.mt-2.text-white.text-xs EP 20


</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from '~/components/navbar/Navigation.vue';
import SliderCard from '~/components/SliderCard.vue';
@Component ({
  components: {
    Navigation,
    SliderCard
  }
})
export default class Index extends Vue{

}
</script>

<style lang="scss">

</style>
