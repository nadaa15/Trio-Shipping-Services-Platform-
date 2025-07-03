<script setup>
const statuses = ["جارية", "مكتملة", "ملغاة", "مجدولة", "محفوظة", "عطاءات"];
</script>

<template>
  <div class="bg-surface-100 rounded-full px-4 py-2 w-full overflow-auto">
    <div
      class="text-foreground font-medium text-xl w-full flex justify-center items-center gap-20"
    >
      <button
        v-for="(status, index) in statuses"
        :key="index"
        class="py-2 px-4 rounded-full hover:bg-surface-200"
      >
        {{ status }}
      </button>
    </div>
  </div>
</template>
