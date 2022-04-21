<template>
  <div
    class="flex h-8 w-14 cursor-pointer items-center rounded-3xl bg-gray-300 px-1 text-black dark:bg-gray-600"
  >
    <div
      class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 transition-all"
      :class="[theme === 'light' ? '' : 'translate-x-6']"
    >
      <IconLightMode v-show="theme === 'light'" class="h-4 w-4"></IconLightMode>
      <IconDarkMode v-show="theme === 'dark'" class="h-4 w-4"></IconDarkMode>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeSwitch',
  props: {
    theme: {
      default: null,
      type: String,
    },
  },
}
</script>
