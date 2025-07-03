<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
const { locales, setLocale, locale } = useI18n();

function switchLang(code, dir) {
  setLocale(code);
  document.documentElement.setAttribute("dir", dir);
}
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="flex w-20 justify-center gap-x-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
      >
        {{ locale }}
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
        class="absolute right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
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
              :class="active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'"
            >
              {{ locale.code.toUpperCase() }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
