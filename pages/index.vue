<script setup>
import icon1 from "@/assets/images/icon-trio-info-2.png";
import icon2 from "@/assets/images/download.png";
import icon3 from "@/assets/images/download (1).png";
import icon4 from "@/assets/images/icon-trio-info-1.png";
import icon5 from "@/assets/images/download (2).png";
import { Pagination } from "swiper/modules";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

definePageMeta({
  // middleware: ["auth"],
});
const modules = [Pagination];
const { locales, setLocale, locale, t } = useI18n();

const whyUs = ref([
  {
    title: "اتصال مباشر",
    desc: "توفر SND اتصالا مباشرا بين الشاحنين والناقلين، مما يلغي الحاجة إلى وسطاء ويؤدي إلى عمليات لوجستية أكثر كفاءة وفعالية من حيث التكلفة.",
    icon: icon1,
  },
  {
    title: "بدون عمولات",
    desc: "على عكس المنصات التقليدية، لا تفرض SND أي عمولات مما يضمن أن الشاحنين والناقلين يحصلون على أفضل الاسعار الممكنة ويحققون أقصى قدر من الارباح.",
    icon: icon2,
  },
  {
    title: "عمليات سلسة للوكلاء",
    desc: "تعتبر SND المنصة المثالية لوكلاء الشحن والوسطاء، حيث توفر أدوات وميزات مصممة لتبسيط وتحسين عملياتهم اليومية.",
    icon: icon3,
  },
  {
    title: "منصة سهلة االستخدام",
    desc: "بفضل واجهتها البسيطة، تجعل SND من السهل على المستخدمين العثور على حمولات الاتصال بالناقلين، وإدارة الشحنات دون أي عناء.",
    icon: icon4,
  },
  {
    title: "فرص في الوقت الفعلي",
    desc: "تقدم SND معلومات حول توفر حمولات والناقلين في الوقت الفعلي، مما يسمح للمستخدمين بالاستجابه بسرعة للفرص والحفاظ على سير عملياتهم بسلاسه.",
    icon: icon5,
  },
]);
onMounted(() => {
  const code = locale.value;
  const dir = code === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
});

</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :pagination="{
      clickable: true,
    }"
    class="mySwiper w-[340px] sm:w-[550px] md:w-full h-[250px] md:h-[550px] mt-6 md:mt-0 mx-auto rounded-xl md:rounded-none"
  >
    <swiper-slide>
      <div
        class="w-full h-3/4 md:h-full shadow-[5px_5px_4px_rgba(0,0,0,0.2)] bg-[url(@/assets/images/wiz.png)] bg-center bg-no-repeat bg-cover rounded-xl md:rounded-none"
      >
        <div
          class="container hidden flex-col justify-center items-start h-full w-full md:flex"
        >
          <h1 class="text-7xl font-extrabold text-white">Wiz</h1>
          <button
            class="bg-primary text-white text-sm font-semibold px-12 py-3 mt-10 rounded-md hover:bg-primary-100 transition-all"
          >
            اكتشف الان
          </button>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div
        class="w-full h-3/4 md:h-full shadow-[5px_5px_4px_rgba(0,0,0,0.2)] bg-[url(@/assets/images/trio.png)] bg-center bg-no-repeat bg-cover rounded-xl md:rounded-none"
      >
        <div
          class="container hidden flex-col justify-center items-start h-full w-full md:flex"
        >
          <h1 class="text-7xl font-extrabold text-foreground">Trio</h1>
          <button
            class="bg-primary text-white text-sm font-semibold px-12 py-3 mt-10 rounded-md hover:bg-primary-100 transition-all"
          >
            اكتشف الان
          </button>
        </div>
      </div>
    </swiper-slide>
  </swiper>

  <section class="container my-16 text-center">
    <div class="title text-5xl font-bold text-foreground mb-12">
      <span class="text-primary">لماذا</span>
      سند...؟
    </div>
    <div class="grid md:grid-cols-2 gap-8 lg:px-20">
      <div
        v-for="item in whyUs"
        :key="item.title"
        class="flex flex-col lg:flex-row justify-center lg:gap-0 gap-4 lg:justify-between items-center text-start bg-surface-100 p-6 rounded-md"
      >
        <div class="w-2/3 order-2 lg:order-1 text-center lg:text-start">
          <h3 class="text-xl font-bold mb-4">{{ item.title }}</h3>
          <p class="text-sm">{{ item.desc }}</p>
        </div>
        <div
          v-if="item.icon"
          class="w-16 h-16 overflow-hidden order-1 lg:order-2"
        >
          <img
            :src="item.icon"
            :alt="item.title"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="container my-16">
    <div class="flex flex-col md:flex-row justify-center items-center gap-8">
      <div class="w-full md:w-1/2 text-center md:text-start">
        <div class="title text-5xl font-bold text-foreground mb-12">
          <span class="text-primary">من</span>
          نحن...؟
        </div>
        <div>
          <p class="text-foreground">
            تعد SNDأول منصة في قطاع اللوجستيات تربط بين الشاحنين والناقلين بشكل
            مباشر، دون الحاجة إلى وسطاء أو دفع عمولات . مهمتنا هي تبسيط عملية
            الشحن، مما يجعلها أسهل وأسرع وأكثر فعالية من حيث الكفاءة والتكلفة
            للجميع. <br /><br />
            سواء كنت شاحنا تبحث عن ناقلين موثوقين أو ناقلا يبحث عن حمولة ، توفر
            لك SND تواصلا سلسا لانجاز المهمة. منصتنا تمّكن المستخدمين من تنفيذ
            احتياجاتهم اللوجستية، مع تقديم عروض لحظية وتواصل شفاف دون العوائق
            التقليدية. <br /><br />
            أما إذا كنت وكيل شحن أو وسيطا ، فإن SND هي الأداة المثالية لتحسين
            عملياتك. بفضل واجهتنا سهلة الاستخدام وميزاتها القوية، لم تكن إدارة
            العمليات اللوجستيات أسهل من قبل. اكتشف مستقبل الشحن مع SND—حيث تلتقي
            الكفاءة بالابتكار.
          </p>
        </div>
        <div class="w-32 h-[70px] overflow-hidden mt-16 ms-16">
          <img
            src="@/assets/images/download (3).png"
            alt=""
            class="w-full h-full object-contain -rotate-45"
          />
        </div>
      </div>
      <div class="w-full md:w-1/2 h-96 overflow-hidden">
        <img
          src="@/assets/images/hero-15.png"
          alt=""
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </section>

  <section
    class="bg-foreground bg-[url(@/assets/images/login-form-bg.png)] bg-center bg-no-repeat bg-cover my-16 py-20"
  >
    <div class="container">
      <h2
        class="text-4xl sm:text-6xl text-white font-black text-center mb-20 sm:mb-40"
      >
        مئات العملاء يثقون بنا
      </h2>
      <div
        class="bg-primary grid sm:grid-cols-3 gap-6 p-8 rounded-lg shadow-xl -mb-40"
      >
        <div class="bg-surface p-3 rounded-lg text-center">
          <h3 class="text-5xl font-bold border-b border-red-100 py-3">234</h3>
          <p class="py-3">الطلبات</p>
        </div>
        <div class="bg-surface p-3 rounded-lg text-center">
          <h3 class="text-5xl font-bold border-b border-red-100 py-3">210</h3>
          <p class="py-3">مقدمي الخدمة</p>
        </div>
        <div class="bg-surface p-3 rounded-lg text-center">
          <h3 class="text-5xl font-bold border-b border-red-100 py-3">186</h3>
          <p class="py-3">المستخدمون</p>
        </div>
      </div>
    </div>
  </section>

  <section class="container mt-52 mb-16 text-center">
    <div class="flex justify-between items-center">
      <div class="w-20 h-[50px] overflow-hidden md:-ms-8">
        <img
          src="@/assets/images/download (3).png"
          alt=""
          class="w-full h-full object-contain rotate-[125deg]"
        />
      </div>
      <div>
        <div class="title text-4xl font-extrabold text-foreground mb-10">
          <span class="text-primary">سمات</span>
          SND
        </div>
        <p class="text-lg">
          تقدم SND العديد من الميزات الرئيسية التي تجعلها منصة متميزة في صناعة
          الخدمات اللوجستية
        </p>
      </div>
      <div class="w-20 h-[50px] overflow-hidden md:me-8 -mt-32">
        <img
          src="@/assets/images/download (3).png"
          alt=""
          class="w-full h-full object-contain rotate-[80deg]"
        />
      </div>
    </div>
    <div class="grid lg:grid-cols-3 gap-8 mt-10">
      <div class="flex flex-col sm:flex-row lg:flex-col text-start bg-surface-100 rounded-lg overflow-hidden">
        <div class="w-full sm:w-[40%] lg:w-full h-60 sm:h-full lg:h-60 overflow-hidden">
          <img
            src="@/assets/images/hero-2.png"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full sm:w-[60%] lg:w-full py-6 px-10">
          <h3 class="text-2xl text-primary text-center font-bold mb-4">
            تكنولوجيا
          </h3>
          <ul class="list-disc text-sm">
            <li class="mb-5">
              بحث متقدم وتصفية: يمكن للمستخدمين العثور بسهولة على المطابقات
              المناسبة الحتياجاتهم باستخدام خيارات البحث والتصفية المتقدمة، مما
              يضمن أفضل تطابق لمتطلباتهم اللوجستية.
            </li>
            <li>
              بحث متقدم وتصفية: يمكن للمستخدمين العثور بسهولة على المطابقات
              المناسبة الحتياجاتهم باستخدام خيارات البحث والتصفية المتقدمة، مما
              يضمن أفضل تطابق لمتطلباتهم اللوجستية.
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row lg:flex-col text-start bg-surface-100 rounded-lg overflow-hidden">
        <div class="w-full sm:w-[40%] lg:w-full h-60 sm:h-full lg:h-60 overflow-hidden">
          <img
            src="@/assets/images/hero-3.png"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full sm:w-[60%] lg:w-full py-6 px-10">
          <h3 class="text-2xl text-primary text-center font-bold mb-4">حلول</h3>
          <ul class="list-disc text-sm">
            <li class="mb-5">
              بحث متقدم وتصفية: يمكن للمستخدمين العثور بسهولة على المطابقات
              المناسبة الحتياجاتهم باستخدام خيارات البحث والتصفية المتقدمة، مما
              يضمن أفضل تطابق لمتطلباتهم اللوجستية.
            </li>
            <li>
              بحث متقدم وتصفية: يمكن للمستخدمين العثور بسهولة على المطابقات
              المناسبة الحتياجاتهم باستخدام خيارات البحث والتصفية المتقدمة، مما
              يضمن أفضل تطابق لمتطلباتهم اللوجستية.
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row lg:flex-col text-start bg-surface-100 rounded-lg overflow-hidden">
        <div class="w-full sm:w-[40%] lg:w-full h-60 sm:h-full lg:h-60 overflow-hidden">
          <img
            src="@/assets/images/hero-4.png"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-full sm:w-[60%] lg:w-full py-6 px-10">
          <h3 class="text-2xl text-primary text-center font-bold mb-4">
            قيادة
          </h3>
          <ul class="list-disc text-sm">
            <li class="mb-5">
              بحث متقدم وتصفية: يمكن للمستخدمين العثور بسهولة على المطابقات
              المناسبة الحتياجاتهم باستخدام خيارات البحث والتصفية المتقدمة، مما
              يضمن أفضل تطابق لمتطلباتهم اللوجستية.
            </li>
            <li>
              بحث متقدم وتصفية: يمكن للمستخدمين العثور بسهولة على المطابقات
              المناسبة الحتياجاتهم باستخدام خيارات البحث والتصفية المتقدمة، مما
              يضمن أفضل تطابق لمتطلباتهم اللوجستية.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section
    class="container my-16 bg-foreground bg-[url(@/assets/images/bg-9.png)] bg-center bg-no-repeat bg-cover rounded-md py-10"
  >
    <div class="w-full flex flex-col justify-center items-center">
      <h2
        class="bg-surface-100 w-fit rounded-lg text-4xl md:text-6xl text-black p-6 font-black text-center mb-16"
      >
        مميزات التوصيل لدينا
      </h2>
      <div class="bg-surface-100 w-fit rounded-lg px-5 py-8">
        <div class="flex justify-start items-center gap-2">
          <img src="@/assets/images/download (4).png" alt="" class="w-6 h-6 rotate-180">
          <p class="text-black font-semibold text-lg">
            التتبع
          </p>
        </div>
        <div class="flex justify-start items-center gap-2 my-4">
          <img src="@/assets/images/download (4).png" alt="" class="w-6 h-6 rotate-180">
          <p class="text-black font-semibold text-lg">
            الموافقة على التسليم
          </p>
        </div>
        <div class="flex justify-start items-center gap-2">
          <img src="@/assets/images/download (4).png" alt="" class="w-6 h-6 rotate-180">
          <p class="text-black font-semibold text-lg">
            طلب السعر المستهدف
          </p>
        </div>
        <div
          class="bg-black text-white font-semibold px-8 py-[6px] h-9 rounded-md mt-6"
        >
          <NuxtLink to="/services" class="group">
            شاهد جميع الخدمات
            <i class="fa-solid fa-arrow-left ms-3 group-hover:-translate-x-1 transition all"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section
    class="bg-foreground bg-[url(@/assets/images/bg-8.png)] bg-center bg-no-repeat bg-cover my-16 py-28"
  >
    <div class="container">
      <h2
        class="text-5xl md:text-7xl text-white font-black text-center mb-14 pt-16"
      >
        من اجل تواصلك معنا
      </h2>
      <button
        class="bg-primary text-white font-semibold px-8 py-[6px] h-14 mx-auto mb-14 flex justify-start items-center gap-4 rounded-lg hover:bg-primary-100 transition-all"
      >
      <img src="@/assets/images/download (5).png" alt="" class="w-8 h-8">
        تواصل معنا عبر الواتساب
      </button>
    </div>
  </section>

  <section class="w-full container my-16 text-center">
    <div class="title text-6xl font-extrabold text-foreground mb-12">
     خدماتنا
    </div>
    <div class="w-full h-[800px] md:h-[550px] flex flex-col md:flex-row justify-center items-center gap-y-14 gap-x-6">
      <div class="w-full md:w-1/2 h-full" >
        <div class="w-full h-[30%] flex justify-center items-center gap-6">
          <div class="bg-foreground w-full h-full bg-[url(@/assets/images/bg-1.BJdfihO6.png)] bg-center bg-no-repeat bg-cover rounded-md px-3 py-5 flex items-end">
            <p class="text-white text-lg md:text-xl font-medium text-start">
        نقل خفيف
      </p>
          </div>
          <div class="bg-foreground w-full h-full bg-[url(@/assets/images/bg-2.CB25s9s3.png)] bg-center bg-no-repeat bg-cover rounded-md px-3 py-5 flex items-end">
            <p class="text-white text-lg md:text-xl font-medium text-start">
        نقل اثاث
      </p>
          </div>
        </div>
        <div class="w-full md:w-2/3 h-[70%] ms-auto mt-6">
          <div class="bg-foreground w-full h-full bg-[url(@/assets/images/bg-3.HlcaOQJQ.png)] bg-center bg-no-repeat bg-cover rounded-md px-3 py-5 flex items-end">
            <p class="text-white text-lg md:text-xl font-medium text-start">
        نقل ثقيل
      </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 h-full" >
        <div class="w-full h-[60%] mb-6">
          <div class="bg-foreground w-full h-full bg-[url(@/assets/images/bg-5.CgKpWcJp.png)] bg-center bg-no-repeat bg-cover rounded-md px-3 py-5 flex items-end">
            <p class="text-white text-lg md:text-xl font-medium text-start">
        بريد سريع
      </p>
          </div>
        </div>
        <div class="w-full h-[40%] flex justify-center items-center gap-6">
          <div class="bg-foreground w-2/3 h-full bg-[url(@/assets/images/login-form-bg.png)] bg-center bg-no-repeat bg-cover rounded-md px-3 py-5 flex items-end">
            <p class="text-white text-lg md:text-xl font-medium text-start">
        تخزين
      </p>
          </div>
          <div class="w-1/3 h-full flex flex-col justify-center md:justify-end items-center gap-4">
            <NuxtLink to="/services" class="group text-white bg-primary rounded-md ">
        <i class="fa-solid fa-arrow-left p-3 group-hover:-translate-x-1 transition all"></i>
      </NuxtLink>
      <span class="font-semibold">اكتشف الان</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
