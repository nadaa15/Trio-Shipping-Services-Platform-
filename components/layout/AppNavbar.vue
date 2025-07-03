<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const { locales, setLocale, locale, t } = useI18n();
const localePath = useLocalePath()
const { logout } = useAuthStore();
const { user } = storeToRefs(useAuthStore());

const navLinks = computed(() => [
  { href: "/", link: t("home") },
  { href: "/about", link: t("about").split(" ").slice(0, 2).join(" ") },
  { href: "/orders", link: t("orders") },
  { href: "/services", link: t("services") },
]);
const scrollPosition = ref(null);
function switchLang(code, dir) {
  setLocale(code);
  document.documentElement.setAttribute("dir", dir);
}

function updateScroll() {
  scrollPosition.value = window.scrollY;
}
onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
});
</script>

<template>
  <nav
    class="desktop-nav bg-surface-light-200 fixed top-0 left-0 right-0 border-primary border-b z-50"
    :class="scrollPosition > 50 ? 'shadow-lg' : ''"
  >
    <div class="relative container flex h-16 items-center justify-between">
      <div class="flex items-center justify-start gap-10">
        <NuxtLink :to="localePath('/')" class="w-24 h-24 overflow-hidden">
          <img
            src="@/assets/images/logo.png"
            alt="Logo"
            class="w-full h-full object-contain"
          />
        </NuxtLink>
        <div class="hidden md:block">
          <div class="flex space-x-4">
            <div v-for="link in navLinks" :key="link.link">
              <NuxtLink
                :to="localePath(link.href)"
                class="group relative after:absolute after:bottom-0 after:left-[10%] after:scale-0 hover:after:scale-100 after:w-[80%] after:h-[2px] after:bg-primary after:content-[''] after:rounded-full px-3 py-2 text-gray-800 hover:text-primary after:transition-all after:duration-150"
                >{{ link.link }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <Menu as="div" class="relative" v-if="user">
          <div>
            <MenuButton
              class="user-img w-11 h-11 rounded-full overflow-hidden border border-primary"
            >
              <img
                src="@/assets/images/avatar.png"
                alt="User Avatar"
                class="w-full h-full object-contain"
              />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute z-50 end-0 py-3 bg-slate-50 mt-1 w-[200px] max-h-[300px] overflow-auto origin-top-end divide-y divide-red-100 rounded-xl shadow-lg ring-1 ring-primary focus:outline-none"
            >
              <MenuItem v-slot="{ active }">
                <button
                  class="w-full text-right px-4 pt-2 pb-4 text-sm font-semibold text-red-600"
                  :class="active ? 'bg-slate-100' : ''"
                >
                  <NuxtLink :to="localePath('/profile')" class="flex items-center gap-3">
                    <div
                      class="user-img w-1/3 rounded-full overflow-hidden border border-primary"
                    >
                      <img
                        src="@/assets/images/avatar.png"
                        alt="User Avatar"
                        class="w-full h-full object-contain"
                      />
                    </div>
                    <div class="w-2/3">
                      <p class="font-bold text-gray-900">
                        {{ user.name }}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {{ user.email }}
                      </p>
                    </div>
                  </NuxtLink>
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  @click="logout"
                  class="w-full text-right px-4 pt-4 pb-2 font-semibold text-red-700 flex items-center gap-5"
                  :class="active ? 'bg-pink-50' : ''"
                >
                  <i class="fa-solid fa-right-from-bracket text-lg"></i>
                  تسجيل الخروج
                </button>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
        <Menu as="div" class="relative" v-if="user">
          <div>
            <MenuButton
              class="user-img w-11 h-11 rounded-full overflow-hidden border border-primary"
            >
              <img
                src="@/assets/images/download (6).png"
                alt="User Avatar"
                class="w-full h-full object-contain"
              />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute end-0 z-10 mt-1 w-20 origin-top-end rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem
                  v-for="(locale, index) in locales"
                  :key="index"
                  v-slot="{ active }"
                >
                  <button
                    @click="switchLang(locale.code, locale.dir)"
                    class="block w-full px-4 py-2 text-left text-sm"
                    :class="
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    "
                  >
                    {{ locale.code.toUpperCase() }}
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
        <div v-else>
          <NuxtLink
            :to="localePath('/auth/login')"
            class="bg-primary text-white text-sm font-semibold px-8 py-[6px] h-9 rounded-lg hover:bg-primary-100 transition-all"
          >
            تسجيل الدخول
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>
