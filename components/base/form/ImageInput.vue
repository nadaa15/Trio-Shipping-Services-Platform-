<script setup lang="ts">
const { t } = useI18n();

const props = defineProps<{
  modelValue?;
  label?: string;
  placeholder?: string;
  required?: boolean;
  errMessage?: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const imageSrc = ref(null);

function handleFileChange(event) {
  const file = event.target.files?.[0];
  if (file) {
    emit("update:modelValue", file);
    const reader = new FileReader();
    reader.onload = () => {
      imageSrc.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

</script>

<template>
  <label for="email" class="text-foreground font-semibold"
    >{{label}}*</label
  >
  <div class="relative base-input w-60 h-32 overflow-hidden">
    <input
    type="file"
    name="photo"
    id="photo"
    class="w-full h-full opacity-0 absolute top-0 left-0 z-50"
     @change="handleFileChange"
  />
  <div class="bg-surface-light-500 absolute top-0 left-0 w-full h-full flex justify-center items-center z-40">
    <div v-if="imageSrc">
        <img :src="imageSrc" class="object-cover w-full h-full" />
      </div>
      <div v-else>
        <i class="fa-regular fa-image text-primary text-3xl"></i>
      </div>
  </div>
  </div>
  <p class="error">{{ errMessage }}</p>
</template>
