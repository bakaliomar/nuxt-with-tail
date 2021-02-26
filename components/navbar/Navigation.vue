<template lang="pug">
  nav.bg-black.h-12.flex.justify-between.w-full.top-0.inset-x-0.sticky.mx-0.z-10
    div.flex.items-center.space-x-3
      svg(class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg")
        path(stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M15 19l-7-7 7-7")
      svg.h-6.w-6.text-gray-400(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor")
        path(d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z")
      img.h-8.w-auto(src="~assets/images/logo.png" alt="site logo")
    div.flex.items-center.px-3.space-x-2
      button
        svg.h-8.w-8.p-1.text-custom-blue.bg-gray-700(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z")
      .relative.flex
        button
          svg.h-8.w-8.p-1.text-custom-blue.bg-gray-700(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16")
      .fixed.top-7.px-5.mt-4.w-full.right-0.-left-2.bg-black.overflow-y-scroll
        .mt-6.p-3.bg-gray-black
          .w-full.flex.items-center.space-x-2
            div
              input.h-8.p-2.w-full.text-white.text-sm.bg-black.border.border-gray-800.rounded-sm(type="text" placeholder="Username" class="focus:outline-none focus:border-blue-800")
              input.mt-1.h-8.p-2.w-full.text-white.text-sm.bg-black.border.border-gray-800.rounded-sm(type="password" placeholder="Password" class="focus:outline-none focus:border-blue-800")
            div
              button.px-8.py-2.border.border-gray-700.text-custom-blue.bg-gray-700.rounded-sm Login
          .pt-1.pb-3.flex.justify-between.items-center.border-b.border-gray-800
            div.flex.items-center.space-x-1
              input.px-2(type="checkbox" id="remember-me")
              label.text-gray-400.text-sm(for="remember-me") Remember me
            div.flex.px-1
              a.text-custom-blue.text-sm(href="#") Register
          .pt-3.flex.items-center.justify-around
            .h-9.flex.items-center
              .h-full.p-2.bg-white
                svg.w-5.h-5(version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg")
                  g
                    path(fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z")
                    path(fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z")
                    path(fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z")
                    path(fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z")
                    path(fill="none" d="M0 0h48v48H0z")
              .h-full.px-6.py-2.bg-blue-500.text-sm.text-white Sign in
        .flex.flex-col.mt-4
          .flex.items-center.space-x-3.px-16.bg-gray-800.w-full(class="py-3.5")
            .flex.text-sm
              svg.h-5.w-5.text-gray-400(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
                path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z")
              span.text-gray-400 Schedule
            .flex.text-sm
              svg.h-5.w-5.text-gray-400(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
                path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15")
              span.text-gray-400 Random
            .flex.text-sm
              span.text-gray-400 A-Z List
          .flex.flex-col.bg-custom-black
            .py-3.px-3.flex.items-center.w-full.border-b.border-gray-600
              .px-1.flex.flex-col.space-y-2(class="w-2/5")
                span.text-gray-300 Season :
                select.py-px.px-1.bg-gray-black.text-gray-300.bg-no-repeat.bg-right-top(class="hover:outline-none focus:outline-none" style="background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMyA0Ljk1IDYiPjxkZWZzPjxzdHlsZT4uY2xzLTJ7ZmlsbDojZDhkOGQ4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+YXJyb3dzPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)")
                  option.bg-gray-black(value="winter") Winter
                  option.bg-gray-black(value="spring") Spring
                  option.bg-gray-black(value="summer") Summer
                  option.bg-gray-black(value="fall") Fall
              .px-1.flex.flex-col.space-y-2(class="w-3/5")
                span.text-gray-300 Year :
                .flex.items-center.w-full
                  select.py-px.px1.bg-gray-black.text-gray-300.bg-no-repeat.bg-right-top(class="w-2/3 hover:outline-none focus:outline-none" style="background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMyA0Ljk1IDYiPjxkZWZzPjxzdHlsZT4uY2xzLTJ7ZmlsbDojZDhkOGQ4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+YXJyb3dzPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)")
                    option.bg-gray-black(value="2021") 2021
                    option.bg-gray-black(value="2019") 2019
                    option.bg-gray-black(value="2018") 2018
                    option.bg-gray-black(value="2017") 2017
                  .pl-2(class="w-1/3")
                    button.px-5.py-px.text-md.text-gray-300.bg-gray-800.rounded(class="focus:outline-none") GO
            .py-2.flex.flex-col
              h2.w-full.pb-1.px-3.text-center.text-white.font-semibold.border-b.border-gray-700 Genres
              .flex.flex-wrap.px-2.py-2.w-full
                .flex.items-center.space-x-2(v-for="i in 24" :key="i" class="w-1/3")
                  input.bg-gray-300.text-gray-300(type="checkbox")
                  span.text-gray-300 Action
              .mt-1.pb-2.flex.items-center.justify-center.border-b.border-gray-600
                svg.h-5.w-5.text-gray-400(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
                  path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7")
              .py-3.px-3.flex.items-center.w-full.border-b.border-gray-600
                .px-1.flex.flex-col.space-y-2(class="w-1/2")
                  span.text-gray-300 Season :
                  select.py-px.px-1.bg-gray-black.text-gray-300.bg-no-repeat.bg-right-top(class="hover:outline-none focus:outline-none" style="background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMyA0Ljk1IDYiPjxkZWZzPjxzdHlsZT4uY2xzLTJ7ZmlsbDojZDhkOGQ4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+YXJyb3dzPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)")
                    option.bg-gray-black(value="winter") Winter
                    option.bg-gray-black(value="spring") Spring
                    option.bg-gray-black(value="summer") Summer
                    option.bg-gray-black(value="fall") Fall
                .px-1.flex.flex-col.space-y-2(class="w-1/2")
                  span.text-gray-300 Season :
                  select.py-px.px-1.bg-gray-black.text-gray-300.bg-no-repeat.bg-right-top(class="hover:outline-none focus:outline-none" style="background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMyA0Ljk1IDYiPjxkZWZzPjxzdHlsZT4uY2xzLTJ7ZmlsbDojZDhkOGQ4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+YXJyb3dzPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)")
                    option.bg-gray-black(value="winter") Winter
                    option.bg-gray-black(value="spring") Spring
                    option.bg-gray-black(value="summer") Summer
                    option.bg-gray-black(value="fall") Fall

</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component ({
    name: 'Navigation'
  })
  export default class Navigation extends Vue {

  }
</script>

<style lang="scss" scoped>

</style>
