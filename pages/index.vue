<template>
  <div class="relative font-sora">
    <div
      id="bg-hero"
      class="h-screen max-h-[70rem] min-h-[40rem] w-full bg-[url('~assets/images/hero-section-bg.jpg')] bg-cover grayscale"
    ></div>
    <div
      class="absolute top-0 left-0 h-screen max-h-[70rem] min-h-[40rem] w-full bg-gradient-to-r from-gray-900/50 to-cyan-600/50 bg-cover px-4"
    >
      <div
        class="mx-auto flex h-screen max-h-[70rem] min-h-[40rem] max-w-7xl flex-col items-center justify-center space-y-8 lg:space-y-12"
      >
        <div class="text-xs font-thin uppercase text-white lg:text-2xl">
          We are here to connect people together
        </div>
        <div
          class="text-4xl font-extrabold uppercase text-white drop-shadow-sm lg:text-[5rem] lg:leading-[5rem]"
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
            class="w-fit cursor-pointer border-2 border-white bg-transparent px-4 py-2 transition-all duration-500 hover:border-transparent hover:bg-sky-800 lg:px-16 lg:py-6"
            @click="navigate"
          >
            <span class="font-bold uppercase text-white lg:text-2xl"
              >Connect
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="py-[100px] dark:bg-gray-900">
      <div class="mx-auto max-w-7xl">
        <h1
          class="mx-auto text-center text-5xl font-extrabold uppercase text-gray-900 dark:text-white"
        >
          Regulator & Partner
        </h1>
        <div
          class="grid grid-cols-4 place-items-center items-center justify-center gap-8 py-16"
        >
          <div class="h-60 w-60 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
            <img src="~/assets/images/partners-logo/partner-01.png" alt="" />
          </div>
          <div class="h-60 w-60 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
            <img src="~/assets/images/partners-logo/partner-02.png" alt="" />
          </div>
          <div class="h-60 w-60 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
            <img src="~/assets/images/partners-logo/partner-03.png" alt="" />
          </div>
          <div class="h-60 w-60 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
            <img src="~/assets/images/partners-logo/partner-04.png" alt="" />
          </div>
          <div class="h-60 w-60 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
            <img src="~/assets/images/partners-logo/partner-05.png" alt="" />
          </div>
          <div class="h-60 w-60 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
            <img src="~/assets/images/partners-logo/partner-06.png" alt="" />
          </div>
          <div class="h-60 w-60 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
            <img src="~/assets/images/partners-logo/partner-07.png" alt="" />
          </div>
          <div class="h-60 w-60 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
            <img src="~/assets/images/partners-logo/partner-08.png" alt="" />
          </div>
          <div class="h-60 w-60 rounded-md bg-gray-100 p-2 dark:bg-gray-800">
            <img src="~/assets/images/partners-logo/partner-09.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style></style>
