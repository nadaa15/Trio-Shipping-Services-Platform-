<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../../stores/auth";
import { computed, ref, watch } from "vue";

const emit = defineEmits(["nextStep"]);
const showCompany = ref(false);
const { providerFormData } = storeToRefs(useAuthStore());

const schema = computed(() => {
  return yup.object({
    company_name: showCompany.value
      ? yup.string().required('Company name is required')
      : yup.string().notRequired(),
    provider_name: yup.string().required('Provider name is required'),
    email: yup.string().required('Email is required').email('Invalid email'),
    phoneData: yup.object({
      phone: yup.string().required('Phone number is required'),
    }),
    password: yup.string().required('Password is required').min(8, 'Password should be minimum 8 characters!'),
    rePassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Required'),
  });
});

const { errors, defineField, handleSubmit } = useForm({
  initialValues: providerFormData,
  validationSchema: schema,
});


const [company_name] = defineField('company_name');
const [provider_name] = defineField('provider_name');
const [email] = defineField('email');
const [phoneData] = defineField('phoneData');
const [password] = defineField('password');
const [rePassword] = defineField('rePassword');


function onSuccess(values) {
  providerFormData.value = { ...values };
  emit("nextStep");
}

function onInvalidSubmit({ errors }) {
  console.log(errors);
}

const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-full my-16">
    <!-- Checkbox isCompany -->
    <div class="flex justify-start items-center gap-4 text-surface-500 mb-5 border-b border-b-primary pe-2 pb-2 w-fit">
      <input
        v-model="showCompany"
        id="agree"
        type="checkbox"
        name="agree"
        class="w-4 h-4 sm:w-5 sm:h-5 accent-primary"
      />
      <label class="font-semibold text-sm sm:text-base" for="agree">
        {{ $t("isCompany") }}
      </label>
    </div>

    <!-- Inputs Section -->
    <div class="mb-3 grid md:grid-cols-2 gap-5">
      <!-- Company Name if Company -->
      <div v-if="showCompany" class="mb-3">
        <BaseFormTextInput
          v-model="company_name"
          :errMessage="errors.company_name"
          :label="$t('companyName')"
        />
      </div>

      <!-- Provider Name -->
      <div class="mb-3">
        <BaseFormTextInput
          v-model="provider_name"
          :errMessage="errors.provider_name"
          :label="$t('providerName')"
        />
      </div>
    </div>

    <div class="mb-3 grid md:grid-cols-2 gap-5">
      <!-- Phone Input -->
      <div class="mb-3">
        <BaseFormPhoneInput
          :errMessage="errors.phoneData"
          v-model="phoneData"
        />
      </div>

      <!-- Email Input -->
      <div class="mb-3">
        <BaseFormEmailInput
          :errMessage="errors.email"
          v-model="email"
        />
      </div>
    </div>

    <div class="mb-3 grid md:grid-cols-2 gap-5">
      <!-- Password Input -->
      <div class="mb-3">
        <BaseFormPasswordInput
          :errMessage="errors.password"
          v-model="password"
          :label="$t('password')"
        />
      </div>

      <!-- Confirm Password -->
      <div class="mb-3">
        <BaseFormPasswordInput
          :errMessage="errors.rePassword"
          v-model="rePassword"
          :label="$t('confirm-pass')"
        />
      </div>
    </div>

    <!-- Submit Button -->
    <div class="text-center">
      <BaseAppButton class="w-full md:w-1/2 mt-3">
        التالي
      </BaseAppButton>
    </div>
  </form>
</template>
