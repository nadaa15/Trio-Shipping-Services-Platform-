<script setup>
definePageMeta({
  layout: "reset",
});
</script>

<template>
  <Card class="w-[320px] sm:w-[380px]" :title="'Reset password'">
    <p class="text-foreground text-sm font-semibold mt-3">
      Add your registered email address and we will send an email with a link to
      reset your password
    </p>
    <form @submit.prevent="handleSubmit" class="w-full mt-4">
      <div class="w-full mb-6">
        <BaseFormEmailInput v-model="email" />
      </div>
      <BaseAppButton class="w-full">Reset</BaseAppButton>
    </form>
  </Card>
</template>

<style></style>
