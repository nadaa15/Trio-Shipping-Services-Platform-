<script setup lang="ts">

const props = defineProps<{
  modelValue?: string | number | undefined,
  errMessage?: string,
  label?: string,
  placeholder?: string,
  required?: boolean
}>();

const emit = defineEmits(["update:modelValue"]);

const passwordInput = computed({
  get(){
    return props.modelValue
  },
  set(value: string | null){
    emit("update:modelValue", value);
  }
})

// const error = ref('')

// const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// const validate = () => {
//   if (!props.modelValue) {
//     error.value = "password is required"
//     return true;
//   }
//   if (!regex.test(props.modelValue)) {
//     error.value = "Invalid password"
//     return true
//   }
//     error.value = ''
//     return false
// }

const showPassword = ref(false);

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};



</script>

<template>
  <div class="flex justify-between items-center pe-2">
    <label :for="label" class="text-foreground font-semibold"
      >{{ label }}*</label
    >
  </div>
  <div class="relative">
    <input
      v-model="passwordInput"
      :type="showPassword ? 'text' : 'password'"
      :name="label"
      :id="label"
      :placeholder="label"
      class="base-input"
    />
    <div v-if="showPassword">

      <i
        @click="toggleShowPassword"
        class="fa-regular fa-eye cursor-pointer absolute z-40 top-1/2 translate-y-[-50%] ltr:right-5 rtl:left-5"
      ></i>
    </div>
    <div v-else>
      <i
        @click="toggleShowPassword"
        class="fa-regular fa-eye-slash
         cursor-pointer absolute z-40 top-1/2 translate-y-[-50%] ltr:right-5 rtl:left-5"
      ></i>
    </div>
  </div>
  <p class="error">{{errMessage}}</p>
</template>
