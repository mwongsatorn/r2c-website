<template>
  <div
    class="flex h-screen items-center justify-center font-sora font-extrabold uppercase"
  >
    <div
      class="flex w-full max-w-2xl flex-col items-center justify-center space-y-4 rounded-lg p-8 shadow-lg"
    >
      <div
        class="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-[10rem] leading-[1] text-transparent"
      >
        {{ error.statusCode }}
      </div>
      <div>{{ error.message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
