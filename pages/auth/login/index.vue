<script setup>
definePageMeta({
  layout: "auth",
});

const { locales, setLocale, locale, t } = useI18n()
const localePath = useLocalePath()



onMounted(() => {
    const code = locale.value
    const dir = code === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
})


</script>
<template>
  <Card class="w-[330px] sm:w-[450px]" :title="$t('login-title')">
    <AuthLoginForm/>

    <div class="login-method">
      <p class="text-center text-primary-light">{{ $t('login-method') }}</p>

      <div class="mt-5 flex justify-center items-center gap-4">
        <NuxtLink class="w-8 h-8 overflow-hidden">
          <img
            src="@/assets/images/google.png"
            alt="Google Logo"
            class="w-full h-full object-contain"
          />
        </NuxtLink>
        <NuxtLink class="w-8 h-8 overflow-hidden">
          <img
            src="@/assets/images/apple.png"
            alt="Apple Logo"
            class="w-full h-full object-contain"
          />
        </NuxtLink>
      </div>
    </div>

    <NuxtLink
      :to="localePath('/auth/register')"
      class="block mt-8 underline text-center text-foreground"
    >
      {{ $t('create-account') }}
    </NuxtLink>
  </Card>
  
</template>

<style></style>
