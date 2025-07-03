<script setup>
const { user } = storeToRefs(useAuthStore());

</script>
<template>
  <BaseUserProfile />
  <div class="max-w-[800px] bg-slate-100 p-8 rounded-xl">
    <div class="w-full sm:w-3/4 lg:w-1/2 text-black grid sm:grid-cols-2 items-center mb-6">
      <div class="flex justify-start items-center gap-4">
        <div class="flex justify-start items-center gap-2">
          <i class="fa-solid fa-envelope text-primary text-lg me-2"></i>
          <p class="font-bold">البريد الالكتروني:</p>
        </div>
      </div>
      <div class="mx-auto md:mx-0">
        <p>{{ user.email }}</p>
      </div>
    </div>
    <div class="w-full sm:w-3/4 lg:w-1/2 text-black grid sm:grid-cols-2 items-center mb-6">
      <div class="flex justify-start items-center gap-4">
        <div class="flex justify-start items-center gap-2">
          <i class="fa-solid fa-phone text-primary text-lg me-2"></i>
          <p class="font-bold">رقم الهاتف:</p>
        </div>
      </div>
      <div class="mx-auto md:mx-0">
        <p>{{ user.phone_number }}</p>
      </div>
    </div>
    <div class="w-full sm:w-3/4 lg:w-1/2 text-black grid sm:grid-cols-2 items-center mb-6">
      <div class="flex justify-start items-center gap-4">
        <div class="flex justify-start items-center gap-2">
          <i class="fa-solid fa-envelope text-primary text-lg me-2"></i>
          <p class="font-bold">الدولة:</p>
        </div>
      </div>
      <div class="mx-auto md:mx-0">
        <p>{{ user.country_code }}</p>
      </div>
    </div>

  </div>
</template>

<style></style>
