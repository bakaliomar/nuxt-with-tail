<template lang="pug">
  div.w-full.bg-gray-black
    .h-9.py-2.mt-6.flex.justify-between.items-center.border-b.border-gray-900(class="xl:container")
      .px-2.flex.items.center
        span.text-gray-400.text-sm Donate
        svg.ml-2.h-5.w-5(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100")
          circle(cx="13" cy="29" r="2" fill="#ee3e54")
          circle(cx="77" cy="13" r="1" fill="#f1bc19")
          circle(cx="50" cy="50" r="37" fill="#fce0a2")
          circle(cx="83" cy="15" r="4" fill="#f1bc19")
          circle(cx="87" cy="24" r="2" fill="#ee3e54")
          circle(cx="81" cy="76" r="2" fill="#fbcd59")
          circle(cx="15" cy="63" r="4" fill="#fbcd59")
          circle(cx="25" cy="87" r="2" fill="#ee3e54")
          circle(cx="19.5" cy="54.5" r="2.5" fill="#fff")
          circle(cx="21" cy="67" r="1" fill="#f1bc19")
          circle(cx="80" cy="34" r="1" fill="#fff")
          circle(cx="50" cy="50" r="24.25" fill="#ef8f70")
          path(fill="#472b29" d="M50 74.95c-13.758 0-24.95-11.192-24.95-24.95S36.242 25.05 50 25.05 74.95 36.242 74.95 50 63.758 74.95 50 74.95zm0-48.5c-12.985 0-23.55 10.564-23.55 23.55S37.015 73.55 50 73.55 73.55 62.986 73.55 50 62.985 26.45 50 26.45z")
          path(fill="#472b29" d="M70.135 46.635a.5.5 0 01-.49-.406 19.782 19.782 0 00-2.917-7.196.5.5 0 01.836-.548 20.768 20.768 0 013.063 7.558.5.5 0 01-.492.592zM50 71c-11.579 0-21-9.421-21-21s9.421-21 21-21a20.878 20.878 0 0114.688 5.992.5.5 0 01-.699.714A19.89 19.89 0 0050 30c-11.028 0-20 8.972-20 20s8.972 20 20 20 20-8.972 20-20a.5.5 0 011 0c0 11.579-9.421 21-21 21z")
          g
            path(fill="#472b29" d="M41 40h4v19h-4z")
            circle(cx="54.5" cy="47.5" r="7.5" fill="#fff")
            path(fill="#472b29" d="M61.592 45.304a.249.249 0 01-.236-.168 7.22 7.22 0 00-2.558-3.475.25.25 0 01.297-.403 7.721 7.721 0 012.733 3.715.25.25 0 01-.236.331zM54.5 55.25c-4.273 0-7.75-3.477-7.75-7.75s3.477-7.75 7.75-7.75c.866 0 1.718.142 2.53.422a.25.25 0 01-.164.473 7.238 7.238 0 00-2.366-.395c-3.998 0-7.25 3.252-7.25 7.25s3.252 7.25 7.25 7.25 7.25-3.252 7.25-7.25a.25.25 0 01.5 0c0 4.273-3.477 7.75-7.75 7.75z")
        svg.ml-2.w-5.h-5.text-yellow-500(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor")
          path(d="M24 4C12.972 4 4 12.972 4 24s8.972 20 20 20 20-8.972 20-20S35.028 4 24 4zm-.5 7a1.5 1.5 0 011.5 1.5V14h.5c3.033 0 5.5 2.467 5.5 5.5a5.46 5.46 0 01-1.082 3.262A6.003 6.003 0 0133 28c0 3.309-2.691 6-6 6h-2v1.5a1.5 1.5 0 11-3 0V34h-3.5a1.5 1.5 0 01-1.5-1.5v-17a1.5 1.5 0 011.5-1.5H22v-1.5a1.5 1.5 0 011.5-1.5zM20 17v5h5.5c1.378 0 2.5-1.122 2.5-2.5S26.878 17 25.5 17H20zm0 8v6h7c1.654 0 3-1.346 3-3s-1.346-3-3-3h-7z")
      .px-2.flex.items-center
        span.text-gray-400.text-sm Chat
        .ml-2.my-auto.w-8.h-4.flex.items-center.rounded-full.bg-gray-600
          .m-0.h-full.bg-gray-400.rounded-full.outline-none(class="w-1/2")
        svg.ml-2.w-5.h-5.text-custom-blue(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z")
        svg.ml-2.w-5.h-5.text-custom-blue(xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" )
          path(d="M25.855 5.574c-.94.418-1.953.7-3.015.828a5.279 5.279 0 002.308-2.906 10.515 10.515 0 01-3.335 1.274 5.251 5.251 0 00-8.945 4.79 14.908 14.908 0 01-10.821-5.49 5.23 5.23 0 00-.711 2.645c0 1.82.926 3.426 2.336 4.367a5.205 5.205 0 01-2.379-.656v.066a5.255 5.255 0 004.21 5.149 5.204 5.204 0 01-1.382.183c-.34 0-.668-.031-.988-.094a5.252 5.252 0 004.902 3.645 10.508 10.508 0 01-6.52 2.246c-.425 0-.84-.023-1.25-.07a14.858 14.858 0 008.047 2.355c9.657 0 14.938-8 14.938-14.933 0-.23-.004-.457-.016-.684a10.501 10.501 0 002.621-2.715")
    .h-24.py-2.text-center.bg-gray-black(class="md:h-20")
      h4.text-xs.text-gray-400.font-medium AniMixPlay - Watch HD Anime Ad-Free ©2020 All Rights Reserved.
      p.pt-2.text-xs.font-thin.leading-3.text-gray-600 Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  export default class Footer extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>
