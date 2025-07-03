<script setup>
import userImg from '@/assets/images/avatar.png'
const { user } = storeToRefs(useAuthStore());

</script>

<template>
  <div class="flex justify-start items-center gap-6 my-16">
    <div class="user-img w-20 h-20 rounded-full overflow-hidden">
        <img :src="user?.avatar_path || userImg" alt="User Avatar" class="w-full h-full object-contain">
    </div>
    <div class="user-name text-xl">
     {{ user.name }}
    </div>
  </div>
</template>
