<template>
  <div class="relative font-sora">
    <div
      id="bg-hero"
      :style="{ 'background-image': `url(${bgHeroSection})` }"
      class="h-screen min-h-[45rem] w-full bg-cover"
    ></div>
    <div
      class="absolute top-0 left-0 h-screen min-h-[45rem] w-full bg-gradient-to-r from-black/50 to-cyan-600/50 bg-cover px-4"
    >
      <div
        class="mx-auto flex h-screen min-h-[45rem] max-w-7xl flex-col items-center justify-center space-y-8 lg:space-y-12"
      >
        <div
          class="text-xs font-thin uppercase text-white sm:text-xl lg:text-2xl"
        >
          We are here to connect people together
        </div>
        <div
          class="text-4xl font-extrabold uppercase text-white drop-shadow-sm sm:text-6xl lg:text-[5rem] lg:leading-[5rem]"
        >
          Are you
          <span
            class="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
          >
            ready <br />
            to connect ?
          </span>
        </div>
        <NuxtLink v-slot="{ navigate }" to="/projects" custom>
          <div
            class="w-fit cursor-pointer border-2 border-white bg-transparent px-8 py-3 transition-all duration-500 hover:border-transparent hover:bg-sky-800 sm:px-12 sm:py-4 lg:px-16 lg:py-6"
            @click="navigate"
          >
            <span
              class="text-base font-bold uppercase text-white sm:text-xl lg:text-2xl"
              >Connect
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="py-[100px] px-4 dark:bg-gray-900">
      <div class="mx-auto max-w-7xl">
        <h1
          class="mx-auto text-center text-2xl font-bold uppercase text-gray-900 dark:text-white sm:text-3xl lg:text-4xl"
        >
          Regulators & Partners
        </h1>
        <div class="flex flex-wrap justify-center gap-2 py-16">
          <div
            class="h-32 w-32 rounded-md bg-gray-100 p-2 dark:bg-gray-800 sm:h-48 sm:w-48"
          >
            <img src="~/assets/images/partners-logo/partner-01.png" alt="" />
          </div>
          <div
            class="h-32 w-32 rounded-md bg-gray-100 p-2 dark:bg-gray-800 sm:h-48 sm:w-48"
          >
            <img src="~/assets/images/partners-logo/partner-02.png" alt="" />
          </div>
          <div
            class="h-32 w-32 rounded-md bg-gray-100 p-2 dark:bg-gray-800 sm:h-48 sm:w-48"
          >
            <img src="~/assets/images/partners-logo/partner-03.png" alt="" />
          </div>
          <div
            class="h-32 w-32 rounded-md bg-gray-100 p-2 dark:bg-gray-800 sm:h-48 sm:w-48"
          >
            <img src="~/assets/images/partners-logo/partner-04.png" alt="" />
          </div>
          <div
            class="h-32 w-32 rounded-md bg-gray-100 p-2 dark:bg-gray-800 sm:h-48 sm:w-48"
          >
            <img src="~/assets/images/partners-logo/partner-05.png" alt="" />
          </div>
          <div
            class="h-32 w-32 rounded-md bg-gray-100 p-2 dark:bg-gray-800 sm:h-48 sm:w-48"
          >
            <img src="~/assets/images/partners-logo/partner-06.png" alt="" />
          </div>
          <div
            class="h-32 w-32 rounded-md bg-gray-100 p-2 dark:bg-gray-800 sm:h-48 sm:w-48"
          >
            <img src="~/assets/images/partners-logo/partner-07.png" alt="" />
          </div>
          <div
            class="h-32 w-32 rounded-md bg-gray-100 p-2 dark:bg-gray-800 sm:h-48 sm:w-48"
          >
            <img src="~/assets/images/partners-logo/partner-08.png" alt="" />
          </div>
          <div
            class="h-32 w-32 rounded-md bg-gray-100 p-2 dark:bg-gray-800 sm:h-48 sm:w-48"
          >
            <img src="~/assets/images/partners-logo/partner-09.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgHeroSection from '~/assets/images/hero-section-bg.jpg'
export default {
  name: 'IndexPage',
  data() {
    return {
      bgHeroSection,
    }
  },
}
</script>

<style></style>
