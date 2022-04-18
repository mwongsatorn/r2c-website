<template>
  <div class="fixed inset-0 backdrop-blur-sm">
    <div
      class="fixed top-4 right-4 w-full max-w-sm rounded-lg bg-white p-8 dark:bg-gray-900 dark:text-slate-300"
    >
      <ul class="flex flex-col space-y-8">
        <NuxtLink v-slot="{ navigate, isExactActive }" to="/" custom>
          <li @click="navigate">
            <span
              class="cursor-pointer decoration-solid decoration-2 underline-offset-4"
              :class="[
                isExactActive
                  ? activeClass
                  : 'hover:text-primary hover:underline',
              ]"
            >
              Home
            </span>
          </li>
        </NuxtLink>
        <NuxtLink v-slot="{ navigate, isActive }" to="/projects" custom>
          <li @click="navigate">
            <span
              class="cursor-pointer decoration-solid decoration-2 underline-offset-4"
              :class="[
                isActive ? activeClass : 'hover:text-primary hover:underline',
              ]"
            >
              Projects
            </span>
          </li>
        </NuxtLink>
        <NuxtLink
          v-slot="{ navigate, isActive }"
          to="/invester-relations"
          custom
        >
          <li @click="navigate">
            <span
              class="cursor-pointer decoration-solid decoration-2 underline-offset-4"
              :class="[
                isActive ? activeClass : 'hover:text-primary hover:underline',
              ]"
            >
              Invester Relations
            </span>
          </li>
        </NuxtLink>
        <NuxtLink v-slot="{ navigate, isActive }" to="/our-company" custom>
          <li @click="navigate">
            <span
              class="cursor-pointer decoration-solid decoration-2 underline-offset-4"
              :class="[
                isActive ? activeClass : 'hover:text-primary hover:underline',
              ]"
            >
              Our Company
            </span>
          </li>
        </NuxtLink>
        <NuxtLink v-slot="{ navigate, isActive }" to="/contacts" custom>
          <li @click="navigate">
            <span
              class="cursor-pointer decoration-solid decoration-2 underline-offset-4"
              :class="[
                isActive ? activeClass : 'hover:text-primary hover:underline',
              ]"
            >
              Contacts
            </span>
          </li>
        </NuxtLink>
      </ul>
      <IconCross
        class="absolute top-4 right-4 h-4 w-4"
        @click.native="$emit('toggleMobileMenu')"
      ></IconCross>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  data() {
    return {
      activeClass: 'text-primary underline',
    }
  },
}
</script>
