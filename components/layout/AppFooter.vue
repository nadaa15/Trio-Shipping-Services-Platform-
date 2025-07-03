<script setup>
const { locales, setLocale, locale } = useI18n();
const { t } = useI18n();
const store = useAuthStore();


onMounted(() => {
  const code = locale.value;
  const dir = code === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
});
</script>

<template>
    <footer class="bg-surface-900 pb-16 md:pb-0">
        <div class="flex flex-col lg:flex-row justify-start items-start gap-8 container py-24">
          <div class="w-full lg:w-1/2">
          <div class="w-36 h-20 mb-8">
            <img src="@/assets/images/logo-light.png" alt="SND Logo" class="w-full h-full object-contain">
          </div>
          <p class="text-white font-medium">ربط الشاحنين والناقلين بكل سلاسة. SND هي منصتك المثالية للخدمات اللوجستية المباشرة بدون عمولات. سواء كنت شاحنًا، ناقلًا، أو وكيل شحن، نحن نسهل عملياتك بكفاءة وشفافية.</p>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col sm:flex-row justify-start items-start gap-12">
          <div>
            <h2 class="text-primary text-3xl mb-12">اتصل بنا</h2>
        <div class="flex justify-start items-center gap-2">
          <i class="fa-brands fa-whatsapp text-green-600 text-2xl me-2"></i>
          <p class="text-white font-semibold text-lg">
            4325 227 101 20+
          </p>
        </div>
        <div class="flex justify-start items-center gap-2 my-4">
          <i class="fa-solid fa-envelope text-primary text-2xl me-2"></i>
          <p class="text-white font-semibold text-lg">
            support@TrioSND.com
          </p>
        </div>
        <div class="flex justify-start items-center gap-2">
          <i class="fa-regular fa-message text-primary text-2xl me-2"></i>
          <p class="text-white font-semibold text-lg">
            الدعم الفني
          </p>
        </div>
      </div>
      <div>
        <h2 class="text-primary text-3xl mb-6 sm:mb-12">تنزيل التطبيق</h2>
    <div class="flex flex-row lg:flex-col xl:flex-row justify-start items-center gap-4 lg:gap-1 xl:gap-4">
      <div class="w-36 h-20">
        <img src="@/assets/images/GooglePlay.png" alt="SND Logo" class="w-full h-full object-contain">
      </div>
      <div class="w-36 h-20">
        <img src="@/assets/images/AppStore.png" alt="SND Logo" class="w-full h-full object-contain">
      </div>
    </div>

  </div>
      </div>
          </div>
          <div class="text-center text-white text-sm sm:text-base py-4 border-t border-primary">
            <h3>©️ 2024 SND Platform. جميع الحقوق محفوظة., 2025</h3>
          </div>

    </footer>
</template>