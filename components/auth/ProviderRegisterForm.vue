<script setup lang="ts">
import { useAuthStore } from "../../stores/auth";

const currentStep = ref(1);
const totalSteps = 3;
const { providerFormData } = storeToRefs(useAuthStore());

function nextStep() {
  if (currentStep.value < totalSteps) currentStep.value++;
}
function prevStep() {
  if (currentStep.value > 1) currentStep.value--;
}

function submit() {
  console.log(providerFormData.value);
}
</script>

<template>
  <div class="flex items-center justify-center mb-8">
    <div v-for="step in totalSteps" :key="step">
      <div class="flex items-center">
        <div
          @click="prevStep"
          class="w-6 h-6 cursor-pointer rounded-full flex items-center justify-center border-2 text-xs font-bold"
          :class="{
            'bg-primary text-white border-primary': step <= currentStep,
            'bg-white border-primary': step > currentStep,
          }"
        >
          <div v-if="step <= currentStep">
            <i class="fa-solid fa-check"></i>
          </div>
          <div
            v-if="step > currentStep"
            class="w-2 h-2 bg-primary rounded-full text-primary"
          ></div>
        </div>
        <div
          v-if="step < totalSteps"
          class="w-28 h-[1px]"
          :class="step < currentStep ? 'bg-primary' : 'bg-gray-300'"
        ></div>
      </div>
    </div>
  </div>
  <div v-if="currentStep === 1">
    <AuthFirstStepRegst @nextStep="nextStep" />
  </div>
  <div v-if="currentStep === 2">
    <AuthSecondStepRegst @nextStep="nextStep" />
  </div>
  <div v-if="currentStep === 3">
    <AuthThirdStepRegst @submit="submit" />
  </div>
</template>

<style></style>
