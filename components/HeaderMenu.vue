<template>
  <header
    ref="header"
    class="fixed top-0 left-0 z-10 h-24 w-full font-sora text-xs font-bold uppercase tracking-widest transition-all duration-300"
    :class="[
      isScrolled || !isHomePage
        ? 'border-b-2 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white '
        : 'border-transparent text-white',
    ]"
  >
    <div class="mx-auto flex h-full max-w-7xl items-center px-4">
      <div class="">
        <img src="~/assets/images/r2c-logo.png" alt="" class="w-52" />
      </div>
      <div class="ml-auto flex items-center space-x-8">
        <nav class="">
          <ul class="flex space-x-12">
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
                    isActive
                      ? activeClass
                      : 'hover:text-primary hover:underline',
                  ]"
                >
                  Projects
                </span>
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
                    isActive
                      ? activeClass
                      : 'hover:text-primary hover:underline',
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
                    isActive
                      ? activeClass
                      : 'hover:text-primary hover:underline',
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
                    isActive
                      ? activeClass
                      : 'hover:text-primary hover:underline',
                  ]"
                  >Contact</span
                >
              </li>
            </NuxtLink>
          </ul>
        </nav>
        <div class="flex space-x-4">
          <ThemeSwitch :theme="theme" @click.native="toggleTheme" />
          <IconHamburgerMenu
            class="block h-8 w-8 transition-all lg:hidden"
            @click.native="toggleMobileMenu"
          />
        </div>
      </div>
    </div>
    <MobileMenu
      v-show="showMobileMenu"
      @toggleTheme="toggleTheme"
      @toggleMobileMenu="toggleMobileMenu"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      theme: '',
      isScrolled: null,
      isHomePage: true,
      activeClass: 'text-primary underline',
      showMobileMenu: null,
      bodyClass: ['dark:bg-gray-900'],
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
    if (this.$route.path !== '/') this.isHomePage = false
    else this.isHomePage = true
    this.handleScroll()
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
      if (window.innerWidth > 1024) {
        this.showMobileMenu = false
        if (this.bodyClass.includes('overflow-hidden'))
          this.bodyClass.splice(this.bodyClass.indexOf('overflow-hidden', 1))
      }
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
      if (this.bodyClass.includes('overflow-hidden'))
        this.bodyClass.splice(this.bodyClass.indexOf('overflow-hidden', 1))
      else this.bodyClass.push('overflow-hidden')
    },
    toggleTheme() {
      if (this.theme === 'light') this.theme = 'dark'
      else this.theme = 'light'
    },
  },
}
</script>

<style scoped></style>
