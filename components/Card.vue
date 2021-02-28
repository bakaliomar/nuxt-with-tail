<template lang="pug">
  .h-60.mt-2(class="w-1/3 md:w-1/6")
    .flex.flex-col.bg-gray-black.ml-2
      .card-image.h-44.relative
        img.h-full.w-full.object-cover.object-center(src="~/assets/images/day.jpg")
        .py-px.px-1.absolute.top-0.right-0.flex.items-center.bg-black.bg-opacity-50
          svg.w-4.h-4.text-yellow-300(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor")
            path(d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z")
          span.pl-1.text-white.text-xs.leading-4 8.6
        .py-px.px-1.absolute.bottom-0.right-0.text-white.text-xs.bg-black.bg-opacity-50 10 hours ago
      .card-body.pt-2.text-center
        a.text-custom-blue.text-xs(href="#")
          h3.leading-tight Dragon Quest: Dai no Daibouken (2020)
        p.pT-1.pb-2.text-gray-400.text-xs EP 20

</template>

<script lang="ts">
import { Component, Prop, Vue} from "vue-property-decorator"
@Component({
  name: 'Card'
})
export default class Card extends Vue{

}
</script>

<style lang="scss" scoped>

</style>
