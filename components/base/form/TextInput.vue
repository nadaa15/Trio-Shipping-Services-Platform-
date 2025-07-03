<script setup lang="ts">

const props = defineProps<{
  modelValue?: string | null;
  label?: string;
  placeholder?: string;
  required?: boolean;
  errMessage?: string
}>();
const emit = defineEmits(["update:modelValue"]);

const textInput = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | null) {
    emit("update:modelValue", value);
  },
});


</script>

<template>
  <label :for="label" class="text-foreground font-semibold">{{ label }}*</label>
  <input
    v-model="textInput"
    type="text"
    :name="label"
    :id="label"
    :placeholder="label"
    class="base-input"
  />
  <p class="error">{{errMessage}}</p>
</template>
