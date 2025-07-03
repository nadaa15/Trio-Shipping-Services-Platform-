<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";


const emit = defineEmits(["update:modelValue","selectService"]);
const props = defineProps<{
  modelValue?,
  data?
  label?: string,
  placeholder?: string,
  required?: boolean,
  errMessage?: string,
  itemTitle?: string,
  itemValue?: string,
}>();

const selectedItem = computed(() => {
  return props.data?.find(item => item[props.itemValue] === props.modelValue) || props.label
});

const selectItem = (item) => {
  emit('selectService', item)
  emit("update:modelValue", item[props.itemValue]);
};
</script>

<template>
  <label for="phone" class="text-foreground font-semibold">{{ label }}*</label>
  <Menu as="div" class="relative inline-block w-full">
    <div>
      <MenuButton
        class="base-input text-foreground w-full flex justify-between items-center text-sm font-medium hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        {{ selectedItem.name || props.label }}
        <i class="fa-solid fa-chevron-down ms-2"></i>
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
        class="absolute z-50 right-0 mt-2 w-full max-h-[300px] overflow-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem
            v-slot="{ active }"
            v-for="item in data"
            :key="item?.id"
            class="w-full h-full"
          >
            <button
              type="button"
              @click="selectItem(item)"
              :class="[
                active ? 'bg-primary text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md text-center px-2 py-2 text-sm',
              ]"
            >
              {{ item[props.itemTitle]}}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
  <p class="error">{{errMessage}}</p>
</template>

<style></style>
