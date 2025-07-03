<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const { locale, t } = useI18n();
const store = useAuthStore();

const activeUser = ref(true);
const activeProvider = ref(false);

function showUserForm() {
  activeUser.value = true;
  activeProvider.value = false;
}
function showProviderForm() {
  activeUser.value = false;
  activeProvider.value = true;
}

onMounted(() => {
  const code = locale.value;
  const dir = code === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
});
</script>

<template>
  <Card
    class="w-[350px] sm:w-[600px] md:w-[650px]"
    :title="$t('registerTitle')"
  >
    <!-- <p class="text-xl font-semibold text-red-500 mt-3">Required information</p> -->
    <div
      class="switch-btn bg-surface-100 w-[280px] h-[50px] mx-auto mb-16 rounded-full flex justify-center items-center"
    >
      <button
        @click="showUserForm"
        class="w-1/2 h-full text-center rounded-full transition-colors duration-300 font-semibold"
        :class="
          activeUser
            ? 'bg-primary text-white shadow-md'
            : 'bg-transparent text-foreground'
        "
      >
        {{ $t("user") }}
      </button>
      <button
        @click="showProviderForm"
        class="w-1/2 h-full text-center rounded-full transition-colors duration-300 font-semibold"
        :class="
          activeProvider
            ? 'bg-primary text-white shadow-md'
            : 'bg-transparent text-foreground'
        "
      >
        {{ $t("provider") }}
      </button>
    </div>
    <div v-if="activeUser">
      <AuthUserRegisterForm />
    </div>
    <div v-if="activeProvider">
      <AuthProviderRegisterForm />
    </div>
  </Card>
</template>

<style></style>
