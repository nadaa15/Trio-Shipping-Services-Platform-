<script setup>
defineProps(['title'])

const {t} = useI18n()


</script>
<template>
  <div class="auth-card my-10 bg-surface rounded-lg py-10 px-8">
    <div class="back">
        <NuxtLink @click="$router.back" class="flex justify-start items-center gap-2 cursor-pointer text-primary font-semibold text-sm mb-6">
            <i class="fa-solid fa-arrow-left"></i>
            <span>{{ $t('back') }}</span>
        </NuxtLink>
    </div>
    <div class="title text-primary font-bold text-3xl mb-12">
        {{ title }}
    </div>
  
    <slot/>
  </div>
</template>

<style></style>
