<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "../../stores/auth";

const emit = defineEmits(["submit"]);
const { providerFormData } = storeToRefs(useAuthStore());

const { errors, defineField, handleSubmit } = useForm({
  initialValues: providerFormData,
  validationSchema: yup.object({
    insurance1: yup.mixed().required(),
    license1: yup.mixed().required(),
    insurance2: yup.mixed().required(),
    license2: yup.mixed().required(),
  }),
});

const [insurance1] = defineField("insurance1");
const [license1] = defineField("license1");
const [insurance2] = defineField("insurance2");
const [license2] = defineField("license2");

function onSuccess(values) {
  emit("submit");
}

function onInvalidSubmit({ errors }) {
  console.log(errors);
}

const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);
</script>
<template>
  <form @submit.prevent="onSubmit" class="w-full my-16">
    <div class="grid md:grid-cols-2 gap-2">
      <div>
        <BaseFormImageInput
          v-model="insurance1"
          :errMessage="errors.insurance1"
          :label="'صورة تأمين السيارة'"
        />
      </div>
      <div>
        <BaseFormImageInput
          v-model="license1"
          :errMessage="errors.license1"
          :label="'صورة رخصة تأمين السيارة'"
        />
      </div>
      <div>
        <BaseFormImageInput
          v-model="insurance2"
          :errMessage="errors.insurance2"
          :label="'صورة تأمين السيارة'"
        />
      </div>
      <div>
        <BaseFormImageInput
          v-model="license2"
          :errMessage="errors.license2"
          :label="'صورة رخصة تأمين السيارة'"
        />
      </div>
    </div>
    <div class="flex justify-start items-center gap-4 text-forground my-5">
      <input
        id="agree"
        type="checkbox"
        name="agree"
        class="w-4 h-4 sm:w-5 sm:h-5 accent-primary"
      />
      <label class="font-semibold text-sm sm:text-base" for="agree">{{
        $t("agree")
      }}</label>
    </div>
    <span class="text-red-500 text-sm">{{ errors.terms }}</span>
    <div class="text-center">
      <BaseAppButton class="w-full md:w-1/2 mt-3">
        تأكيد انشاء الحساب
      </BaseAppButton>
    </div>
  </form>
</template>
