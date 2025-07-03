<script setup>

const newPass = ref(null)
const newRePass = ref(null)
</script>

<template>
  <BaseUserProfile />
  <form class="my-6 max-w-[800px]">
    <div class="grid md:grid-cols-2 gap-5">

        <div class="w-full my-3 ">
          <BaseFormPasswordInput
          v-model="newPass"
            :label="'الرقم السري الجديد'"
    
          />
        </div>
        <div class="w-full my-3 ">
          <BaseFormPasswordInput
          v-model="newRePass"
            :label="'تأكيد الرقم السري الجديد'"
    
          />
        </div>
    </div>

    <div class="text-center mt-10">
      <BaseAppButton class="w-full md:w-1/2 mt-3">
        حفظ
      </BaseAppButton>
    </div>
  </form>
</template>

<style></style>
