<template>
  <header
    ref="header"
    class="fixed top-0 left-0 z-10 w-full font-sora transition-all duration-300"
    :class="[
      isScrolled || !isHomePage
        ? 'border-b-2 bg-white dark:border-gray-700 dark:bg-gray-900 '
        : '',
    ]"
  >
    <nav class="mx-auto flex h-24 max-w-7xl items-center justify-center px-4">
      <div class="">
        <img src="~/assets/images/r2c-logo.png" alt="" class="w-52" />
      </div>
      <ul
        class="ml-auto flex items-center justify-center space-x-10 text-xs font-bold uppercase tracking-widest"
        :class="[
          isScrolled || !isHomePage
            ? 'text-gray-800 dark:text-white'
            : 'text-white',
        ]"
      >
        <NuxtLink v-slot="{ navigate, isExactActive }" to="/" custom>
          <li class="relative hidden lg:block" @click="navigate">
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
          <li class="relative hidden lg:block" @click="navigate">
            <span
              class="cursor-pointer decoration-solid decoration-2 underline-offset-4"
              :class="[
                isActive ? activeClass : 'hover:text-primary hover:underline',
              ]"
            >
              Projects
            </span>
            <div
              class="absolute top-8 left-0 hidden w-[20rem] border-2 bg-white text-gray-800 shadow-lg"
            >
              <ul
                class="flex flex-col items-center justify-center space-y-4 p-4 tracking-normal"
              >
                <li>LaoPay</li>
                <li>LaoStaySafe</li>
                <li>LaoCash</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
          </li>
        </NuxtLink>
        <NuxtLink
          v-slot="{ navigate, isActive }"
          to="/investor-relation"
          custom
        >
          <li class="relative hidden lg:block" @click="navigate">
            <span
              class="cursor-pointer decoration-solid decoration-2 underline-offset-4"
              :class="[
                isActive ? activeClass : 'hover:text-primary hover:underline',
              ]"
              >Investor Relation</span
            >
          </li>
        </NuxtLink>
        <NuxtLink v-slot="{ navigate, isActive }" to="/our-company" custom>
          <li class="relative hidden lg:block" @click="navigate">
            <span
              class="cursor-pointer decoration-solid decoration-2 underline-offset-4"
              :class="[
                isActive ? activeClass : 'hover:text-primary hover:underline',
              ]"
              >Our Company</span
            >
          </li>
        </NuxtLink>
        <NuxtLink v-slot="{ navigate, isActive }" to="/contact" custom>
          <li class="relative hidden lg:block" @click="navigate">
            <span
              class="cursor-pointer decoration-solid decoration-2 underline-offset-4"
              :class="[
                isActive ? activeClass : 'hover:text-primary hover:underline',
              ]"
              >Contact</span
            >
          </li>
        </NuxtLink>
        <li>
          <IconSun
            v-show="theme == 'light'"
            class="h-6 w-6 cursor-pointer hover:opacity-50"
            @click.native="theme = 'dark'"
          ></IconSun>
          <IconMoon
            v-show="theme == 'dark'"
            class="h-6 w-6 cursor-pointer hover:opacity-50"
            @click.native="theme = 'light'"
          ></IconMoon>
        </li>
        <li>
          <IconHamburgerMenu
            class="block h-8 w-8 transition-all lg:hidden"
            @click.native="toggleMobileMenu"
          >
          </IconHamburgerMenu>
          <MobileMenu
            v-show="showMobileMenu"
            @toggleMobileMenu="toggleMobileMenu"
          ></MobileMenu>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      theme: '',
      isScrolled: false,
      isHomePage: true,
      activeClass: 'text-primary underline',
      showMobileMenu: null,
      bodyClass: '',
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: this.theme,
      },
      bodyAttrs: {
        class: this.bodyClass,
      },
    }
  },
  watch: {
    theme(newTheme) {
      localStorage.theme = newTheme
    },
    $route() {
      if (this.$route.path !== '/') this.isHomePage = false
      else this.isHomePage = true
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
    if (localStorage.theme) {
      this.theme = localStorage.theme
    } else {
      this.theme = 'light'
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleScroll() {
      const headerHeight = window.scrollY
      if (headerHeight === 0) this.isScrolled = false
      if (headerHeight > 0) this.isScrolled = true
    },
    handleResize() {
      if (window.innerWidth > 1024) this.showMobileMenu = false
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
      if (this.bodyClass !== '') this.bodyClass = ''
      else this.bodyClass = 'overflow-hidden'
    },
  },
}
</script>

<style scoped></style>
