<template lang="pug">
  .fixed.top-11.px-5.w-full.h-screen.right-0.bg-black.overflow-y-scroll.transform.transition.duration-1000.ease-in-out(:class="state ? ' translate-x-0' : 'translate-x-full'" class="md:w-1/2")
    .mt-6.p-3.bg-gray-black
      .w-full.flex.items-center.space-x-2
        div
          input.h-8.p-2.w-full.text-white.text-sm.bg-black.border.border-gray-800.rounded-sm(type="text" placeholder="Username" class="focus:outline-none focus:border-blue-800")
          input.mt-1.h-8.p-2.w-full.text-white.text-sm.bg-black.border.border-gray-800.rounded-sm(type="password" placeholder="Password" class="focus:outline-none focus:border-blue-800")
        div
          button.px-8.py-2.border.border-gray-500.text-custom-blue.bg-gray-700.rounded-sm Login
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
    .flex.flex-col.mt-3
      .flex.items-center.space-x-2.px-16.bg-gray-800.w-full(class="py-2 md:px-12")
        .flex.text-sm.space-x-1.items-center
          svg.h-4.w-4.text-gray-400(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z")
          span.text-gray-400.text-sm Schedule
        .flex.text-sm.space-x-1.items-center
          svg.h-4.w-4.text-gray-400(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
            path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15")
          span.text-gray-400.text-sm Random
        .flex.flex-no-wrap.text-sm.space-x-2
          span.text-gray-400.text-sm A-Z List
      .flex.flex-col.bg-custom-black
        .py-3.px-3.flex.items-center.w-full.border-b.border-gray-600
          .px-1.flex.flex-col.space-y-2(class="w-2/5")
            span.text-gray-300.text-sm Season :
            select.py-px.px-1.bg-gray-black.text-gray-300.bg-no-repeat.bg-right-top(class="hover:outline-none focus:outline-none" style="background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMyA0Ljk1IDYiPjxkZWZzPjxzdHlsZT4uY2xzLTJ7ZmlsbDojZDhkOGQ4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+YXJyb3dzPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)")
              option.bg-gray-black(value="winter") Winter
              option.bg-gray-black(value="spring") Spring
              option.bg-gray-black(value="summer") Summer
              option.bg-gray-black(value="fall") Fall
          .px-1.flex.flex-col.space-y-2(class="w-3/5")
            span.text-gray-300.text-sm  Year :
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
              input.bg-gray-300.text-gray-500(type="checkbox")
              span.text-gray-200.text-sm.font-light Action
          .mt-1.pb-2.flex.items-center.justify-center.border-b.border-gray-600
            svg.h-5.w-5.text-gray-400(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7")
          .py-3.px-3.flex.items-center.w-full
            .px-1.flex.flex-col.space-y-2(class="w-1/2")
              span.text-gray-300.text-sm Stream :
              select.py-px.px-1.bg-gray-black.text-gray-300.bg-no-repeat.bg-right-top(class="hover:outline-none focus:outline-none" style="background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMyA0Ljk1IDYiPjxkZWZzPjxzdHlsZT4uY2xzLTJ7ZmlsbDojZDhkOGQ4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+YXJyb3dzPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)")
                option.bg-gray-black(value="winter") Winter
                option.bg-gray-black(value="spring") Spring
                option.bg-gray-black(value="summer") Summer
                option.bg-gray-black(value="fall") Fall
            .px-1.flex.flex-col.space-y-2(class="w-1/2")
              span.text-gray-300.text-sm Sub/Dub :
              select.py-px.px-1.bg-gray-black.text-gray-300.bg-no-repeat.bg-right-top(class="hover:outline-none focus:outline-none" style="background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMyA0Ljk1IDYiPjxkZWZzPjxzdHlsZT4uY2xzLTJ7ZmlsbDojZDhkOGQ4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+YXJyb3dzPC90aXRsZT48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)")
                option.bg-gray-black(value="winter") Winter
                option.bg-gray-black(value="spring") Spring
                option.bg-gray-black(value="summer") Summer
                option.bg-gray-black(value="fall") Fall
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
@Component({
  name: "SideBar"
})
export default class SideBar extends Vue{
  @Prop({default: false}) state : boolean;
}
</script>

<style lang="scss" scoped>

</style>
