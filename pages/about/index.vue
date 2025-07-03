<script setup>
import icon1 from "@/assets/images/icon-trio-info-2.png";
import icon2 from "@/assets/images/download.png";
import icon3 from "@/assets/images/download (1).png";
import icon4 from "@/assets/images/icon-trio-info-1.png";
import icon5 from "@/assets/images/download (2).png";
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
  console.log(code);
  
  const dir = code === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
});
</script>
<template>
  <div>
    <div
      class="w-full h-80 bg-[url(@/assets/images/bg-1.BJdfihO6.png)] bg-center bg-no-repeat bg-cover flex justify-center items-center"
    >
      <div class="title text-white text-5xl font-bold text-foreground mb-12">
        {{ $t("about").split(" ").slice(0,2).join(" ") }}
      </div>
    </div>

    <section class="container my-16">
      <div class="flex flex-col md:flex-row justify-center items-center gap-8">
        <div class="w-full md:w-1/2 text-center md:text-start">
          <div class="title text-5xl font-bold text-foreground mb-12">
            <span class="text-primary">{{ $t("about").split(' ')[0] }}</span>
            {{ $t("about").split(" ").slice(-2).join(" ") }}
          </div>
          <div>
            <p class="text-foreground">
              تعد SNDأول منصة في قطاع اللوجستيات تربط بين الشاحنين والناقلين
              بشكل مباشر، دون الحاجة إلى وسطاء أو دفع عمولات . مهمتنا هي تبسيط
              عملية الشحن، مما يجعلها أسهل وأسرع وأكثر فعالية من حيث الكفاءة
              والتكلفة للجميع. <br /><br />
              سواء كنت شاحنا تبحث عن ناقلين موثوقين أو ناقلا يبحث عن حمولة ،
              توفر لك SND تواصلا سلسا لانجاز المهمة. منصتنا تمّكن المستخدمين من
              تنفيذ احتياجاتهم اللوجستية، مع تقديم عروض لحظية وتواصل شفاف دون
              العوائق التقليدية. <br /><br />
              أما إذا كنت وكيل شحن أو وسيطا ، فإن SND هي الأداة المثالية لتحسين
              عملياتك. بفضل واجهتنا سهلة الاستخدام وميزاتها القوية، لم تكن إدارة
              العمليات اللوجستيات أسهل من قبل. اكتشف مستقبل الشحن مع SND—حيث
              تلتقي الكفاءة بالابتكار.
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
    <section class="container my-16 text-center">
      <div class="title text-5xl font-bold text-foreground mb-12">
        <span class="text-primary">{{ $t("whySnd").split(' ')[0] }}</span>
        {{ $t("whySnd").split(" ").slice(-2).join(" ") }}
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
  </div>
</template>

<style></style>
