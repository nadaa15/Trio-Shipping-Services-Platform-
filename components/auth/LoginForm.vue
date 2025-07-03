<script setup>
import egyptionFlag from "@/assets/images/egypt.png";
import { useForm } from "vee-validate";
import * as yup from "yup";

const store = useAuthStore()
const { t } = useI18n()
const localePath = useLocalePath()

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    phoneData: yup.object({
      phone: yup.string().required('Phone number is required')
    }),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be minimum 8 character!"),
  }),
});

const [phoneData] = defineField("phoneData");
const [password] = defineField("password");

function onSuccess(values) {
  const fd = new FormData();
  fd.append('country_code', values.phoneData.country_code)
  fd.append('phone_number', values.phoneData.phone)
  fd.append('password', values.password)
  fd.append('device_token', '16974|Olv5cg1BxjSh9qMeWhpUSKUvVVWYTS7BB2tYjSwX0e30aa64')

  console.log("FormData content:");
  for (let [key, value] of fd.entries()) {
    console.log(`${key}: ${value}`);
  }
  store.handleLogin(fd)

}

function onInvalidSubmit({ errors }) {
  console.log(errors);
}

const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);

</script>
<template>
    <div v-if="store.error">
        <p class="text-xl font-semibold text-red-500 mt-3">{{store.error}}</p>
      </div>
  <form @submit.prevent="onSubmit" class="my-6 w-full">
    <div class="w-full">
      <BaseFormPhoneInput
        v-model="phoneData"
        :errMessage="errors.phoneData"
      />
    </div>
    <div class="w-full my-3">
      <BaseFormPasswordInput
        :label="$t('password')"
        v-model="password"
        :errMessage="errors.password"
      />
    </div>
    <NuxtLink :to="localePath('/auth/reset-password')" class="text-primary-light">
      {{$t('forget-pass')}}
    </NuxtLink>

    <BaseAppButton class="mt-5 w-full py-3"> {{ $t('login') }} </BaseAppButton>
  </form>
</template>

<style></style>
