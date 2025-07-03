<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useI18n } from "#imports";
import {
  BaseFormEmailInput,
  BaseFormPasswordInput,
} from "#components";

definePageMeta({ layout: "auth" });

const { locale } = useI18n();

const formList = [
  { id: "email", type: "email", label: "Email", required: true },
  { id: "password", type: "password", label: "Password", required: true },
];

function getComponent(type: string) {
  if (type === "email") {
    return BaseFormEmailInput
  }
  if (type === "password") {
    return BaseFormPasswordInput
  }
}

function buildSchema() {
  const shape = {};
  formList.forEach((field) => {
    let validator = yup.string();
    if (field.required) {
      validator = validator.required(`${field.label} is required`);
    }
    if (field.type === "email") {
      validator = validator.email("Invalid email");
    }
    if (field.type === "password") {
      validator = validator.min(8, "Password must be at least 8 characters");
    }
    shape[field.id] = validator;
  });
  return yup.object().shape(shape);
}

const schema = buildSchema();
const { handleSubmit } = useForm({ validationSchema: schema });

const fields = formList.map((field) => {
  const { value, errorMessage } = useField(field.id);
  return {
    id: field.id,
    label: field.label,
    type: field.type,
    value,
    errorMessage,
  };
});

function onSuccess(values: any) {
  console.log("Success:", values);
}

function onError({ errors }: any) {
  console.log("Errors:", errors);
}

const onSubmit = handleSubmit(onSuccess, onError);

onMounted(() => {
  const dir = locale.value === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
});
</script>


<template>
  <Card class="w-[350px] sm:w-[600px] md:w-[650px]" :title="$t('registerTitle')">
    <form @submit.prevent="onSubmit" class="w-full mt-3">
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="field in fields" :key="field.id" class="mb-3">
          <component
            :is="getComponent(field.type)"
            :label="field.label"
            v-model="field.value.value"
          />
          <p class="text-red-500 text-sm">{{ field.errorMessage }}</p>
        </div>
      </div>
      <div class="text-center">
        <BaseAppButton class="w-full md:w-1/2 mt-3">
          {{ $t("register") }}
        </BaseAppButton>
      </div>
    </form>
  </Card>
</template>
