<script setup>
import { useI18n } from "#imports";

const { locale } = useI18n();
const { services, subServices, uniqueServices, selectedService } = storeToRefs(useGlobalStore());
const { getServices, selectService } = useGlobalStore();



onMounted(() => {
  const dir = locale.value === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  getServices();
});
</script>
<template>
  <div class="container">
    <header
      class="h-[300px] md:h-[500px] text-white flex justify-start items-center rounded-lg bg-[url(@/assets/images/reset-password-bg.png)] bg-center bg-no-repeat bg-cover"
    >
      <div
        class="header-content w-2/3 md:w-1/2 bg-primary px-8 py-4 rounded-e-lg opacity-80"
      >
        <h1 class="title font-bold text-lg md:text-2xl mb-2">
          الخدمات الرئيسية
        </h1>
        <div class="content line-clamp-3">
          وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور
          طريقة وضع الرسوم بالتصاميم سواء كانت تصاميم مطبوعة - بروشور او فلاير
          على سبيل المثال او نماذج مواقع انترنت
        </div>
      </div>
    </header>
  </div>

  <section class="main-services text-white mt-10">
    <div class="container mb-16">
      <h2
        class="title font-semibold text-xl mb-10 bg-primary px-3 py-4 rounded-lg"
      >
        تعرف على خدماتنا الرئيسية
      </h2>
      <div class="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        <button
          v-for="service in uniqueServices"
          @click="selectService(service)"
          :key="service.id"
          :class="[
            'text-center font-semibold py-2 md:py-3 rounded-lg transition-all',
            selectedService.id === service.id
              ? 'bg-primary text-white'
              : 'bg-surface-800 hover:bg-primary',
          ]"
        >
          {{ service.name }}
        </button>
      </div>
    </div>
    <div
      class="service-info w-full flex flex-col md:flex-row justify-start items-center gap-8 mb-20 py-10 bg-gray-200 border-y border-primary"
    >
      <div class="w-full md:w-1/2 h-full bg-white px-8 py-4 rounded-e-lg">
        <h1
          class="title w-fit pb-2 font-bold text-2xl mb-2 text-primary border-b-2 border-b-primary"
        >
          {{ selectedService?.name }}
        </h1>
        <div class="content line-clamp-3 text-foreground">
          {{
            selectedService?.description ||
            "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقة وضع الرسوم بالتصاميم سواء كانت تصاميم مطبوعة - بروشور او فلاير على سبيل المثال او نماذج مواقع انترنت ..."
          }}
        </div>
      </div>
      <div class="image w-full md:w-1/3 h-[250px] overflow-hidden px-4 md:px-0">
        <img
          :src="selectedService?.icon_path"
          :alt="selectedService?.name"
          class="w-full h-full object-contain rounded-lg"
        />
      </div>
    </div>
  </section>
  <section class="sub-services container mb-20">
    <div
      class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8"
    >
      <div
        v-for="service in subServices"
        :key="service.id"
        class="py-3 px-4 border border-primary rounded-lg"
      >
        <img
          :src="service.icon_path"
          :alt="service.name"
          class="w-full rounded-md bg-gray-200 object-contain h-52"
        />
        <div class="mt-4">
          <h1
            class="title w-fit pe-4 pb-2 font-bold text-lg mb-2 text-foreground border-b-2 border-b-primary"
          >
            {{ service.name }}
          </h1>
          <div class="content line-clamp-1 text-foreground">
            {{
              service.description ||
              "وريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقة وضع الرسوم"
            }}
          </div>

          <h3
            class="text-white bg-primary mt-6 mx-2 text-center py-2 rounded-lg cursor-pointer"
          >
            <NuxtLink class=""> التفاصيل </NuxtLink>
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
