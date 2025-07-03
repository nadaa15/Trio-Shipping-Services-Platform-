<script setup lang="ts">
const { t } = useI18n();
const props = defineProps<{
  modelValue?: string | null;
  label?: string;
  placeholder?: string;
  required?: boolean;
  errMessage?: string;
  disabled?: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

// const error = ref("");

const emailInput = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | null) {
    emit("update:modelValue", value);
  },
});
// const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const validate = () => {
//   if (!props.modelValue) {
//     error.value = "Email is required";
//     return false;
//   }
//   if (!regex.test(props.modelValue)) {
//     error.value = "Invalid email";
//     return false;
//   }
//   error.value = "";
//   return true;
// };
// defineExpose({
//   validate,
// });
</script>

<template>
  <label for="email" class="text-foreground font-semibold"
    >{{ $t("email") }}*</label
  >
  <input
    v-model="emailInput"
    type="email"
    name="email"
    id="email"
    :placeholder="$t('email')"
    :disabled="props.disabled"
    class="base-input"
  />
  <p class="error">{{ errMessage }}</p>
</template>
