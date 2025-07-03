<script setup>
const localePath = useLocalePath()
const { t } = useI18n();
const store = useAuthStore();

const navLinks = ref([
  {
    href: "/",
        link: t("home"),
    icon: "fa-solid fa-house"
  },
  {
    href: "/profile",
    link: t("profile"),
    icon: "fa-regular fa-user"
  },
  {
    href: "/orders",
      link: t("orders"),
    icon: "fa-solid fa-table-cells"
  },
  {
    href: "/services",
    link: t("services"),
    icon: "fa-solid fa-car"
  },
]);
</script>

<template>
  <nav
    class="mobile-nav bg-surface-light-200 shadow flex md:hidden fixed bottom-0 left-0 right-0 z-50 border-primary border-t"
  >
    <div class="flex h-16 items-center justify-start w-full">
      <div v-for="link in navLinks" :key="link.link" class="w-1/4 h-full">
        <NuxtLink
          :to="localePath(link.href)"
          class="w-full h-full text-xs sm:text-base text-center flex items-center justify-center flex-col gap-1 hover:bg-surface-100 transition-all"
          >
          <i :class="link.icon"></i> {{ link.link }}
          </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style></style>
