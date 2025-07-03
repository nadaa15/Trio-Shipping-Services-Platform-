<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "../../stores/auth";

const emit = defineEmits(["nextStep"]);
const { providerFormData } = storeToRefs(useAuthStore());
const { subServices, uniqueServices } = storeToRefs(useGlobalStore());
const { getServices, selectService } = useGlobalStore();

const countries = ref([
  {
    id: 1,
    name: "Egypt",
    slug: "\u0650EG",
    country_code: "+20",
    cities: [
      {
        id: 74,
        order: 1,
        name: "Cairo",
        lat: "27.63502",
        lng: "38.55060002",
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23697,
        order: 2,
        name: "Alexandria",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23706,
        order: 3,
        name: "Giza",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23699,
        order: 4,
        name: "Aleubur",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23700,
        order: 5,
        name: "Port said",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23701,
        order: 6,
        name: "Alsuways",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23702,
        order: 7,
        name: "Asyut",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23703,
        order: 8,
        name: "Qena",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23704,
        order: 10,
        name: "Sohag",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23705,
        order: 11,
        name: "Minya",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23707,
        order: 12,
        name: "6 October",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23708,
        order: 13,
        name: "Nasr city",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23709,
        order: 14,
        name: "Shubra",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23711,
        order: 15,
        name: "Almenoufia",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23710,
        order: 16,
        name: "Qalyuia",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23712,
        order: 17,
        name: "Aswan",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23713,
        order: 18,
        name: "Luxor",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23714,
        order: 19,
        name: "Bani Sweif",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23698,
        order: 20,
        name: "Aleashir min ramadan",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23719,
        order: 21,
        name: "\u0651Ismailia",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23721,
        order: 22,
        name: "Marsa Alam",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23722,
        order: 23,
        name: "Safaga",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23723,
        order: 24,
        name: "Ras Gharib",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23724,
        order: 25,
        name: "Alfayoum",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23725,
        order: 26,
        name: "Alminya",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23726,
        order: 27,
        name: "Tanta",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23727,
        order: 28,
        name: "Quseir",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23728,
        order: 29,
        name: "Helwan",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23729,
        order: 30,
        name: "Red sea",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23730,
        order: 31,
        name: "Damietta",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23731,
        order: 32,
        name: "Mansoura",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23732,
        order: 33,
        name: "Marsa Matrouh",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23733,
        order: 34,
        name: "Arish",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23734,
        order: 35,
        name: "Banha",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23735,
        order: 36,
        name: "Siwah",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23736,
        order: 37,
        name: "Kafr Elsheikh",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23737,
        order: 38,
        name: "Al gharbiya",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23738,
        order: 39,
        name: "North sinai",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23739,
        order: 40,
        name: "South sinai",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23740,
        order: 41,
        name: "New valley",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23747,
        order: 42,
        name: "Sadat city",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23746,
        order: 43,
        name: "Alamein city",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
      {
        id: 23748,
        order: 44,
        name: "El Shorouk city",
        lat: null,
        lng: null,
        country_name: "Egypt",
        country_id: 1,
        is_active_user: true,
      },
    ],
  },
  {
    id: 2,
    name: "UAE",
    slug: "UE",
    country_code: "+971",
    cities: [
      {
        id: 23786,
        order: null,
        name: "H",
        lat: null,
        lng: null,
        country_name: "UAE",
        country_id: 2,
        is_active_user: true,
      },
      {
        id: 23741,
        order: 2,
        name: "Dubai",
        lat: null,
        lng: null,
        country_name: "UAE",
        country_id: 2,
        is_active_user: true,
      },
      {
        id: 23744,
        order: 3,
        name: "Sharjah",
        lat: null,
        lng: null,
        country_name: "UAE",
        country_id: 2,
        is_active_user: true,
      },
    ],
  },
  {
    id: 3,
    name: "Jordan",
    slug: "JO",
    country_code: "+962",
    cities: [
      {
        id: 23788,
        order: null,
        name: "zarqa",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23751,
        order: 1002,
        name: "Amman",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23754,
        order: 1003,
        name: "Irbid",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23755,
        order: 1004,
        name: "Ar.rusaifa",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23756,
        order: 1005,
        name: "Quwaisima",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23757,
        order: 1006,
        name: "Wadi as sir",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23758,
        order: 1007,
        name: "Tila al ali",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23759,
        order: 1008,
        name: "churaibat",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23760,
        order: 1009,
        name: "As suq",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23761,
        order: 1010,
        name: "Aqaba",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23762,
        order: 1011,
        name: "As salt",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23763,
        order: 1012,
        name: "Ar ramtha",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23765,
        order: 1013,
        name: "Al Dschubaiha",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23764,
        order: 1014,
        name: "Madaba",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23766,
        order: 1015,
        name: "Refugee camp",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23767,
        order: 1016,
        name: "Suwailih",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23768,
        order: 1017,
        name: "Al mafraq",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23770,
        order: 1018,
        name: "Muchayyam hetten",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23769,
        order: 1019,
        name: "Sahab",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23772,
        order: 1021,
        name: "umm qaseer",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23773,
        order: 1022,
        name: "Jerash",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23780,
        order: 1022,
        name: "Kurrindscha",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23774,
        order: 1023,
        name: "Mardsh Al hamam",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23775,
        order: 1024,
        name: "Ad Dulail",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23776,
        order: 1025,
        name: "Maan",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23777,
        order: 1026,
        name: "Al hasimiya",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23778,
        order: 1027,
        name: "Askan abu nusair",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
      {
        id: 23779,
        order: 1029,
        name: "Al tafila",
        lat: null,
        lng: null,
        country_name: "Jordan",
        country_id: 3,
        is_active_user: true,
      },
    ],
  },
  {
    id: 4,
    name: "Qatar",
    slug: "QA",
    country_code: "+974",
    cities: [
      {
        id: 23787,
        order: null,
        name: "\u0627\u0644\u062f\u0648\u062d\u0647",
        lat: null,
        lng: null,
        country_name: "Qatar",
        country_id: 4,
        is_active_user: true,
      },
    ],
  },
  {
    id: 5,
    name: "USA",
    slug: null,
    country_code: "001",
    cities: [
      {
        id: 23785,
        order: 1,
        name: "Texas",
        lat: null,
        lng: null,
        country_name: "USA",
        country_id: 5,
        is_active_user: true,
      },
    ],
  },
]);

const { errors, defineField, handleSubmit } = useForm({
  initialValues: providerFormData,
  validationSchema: yup.object({
    provider_service: yup.string().required(),
    provider_subService: yup.string().required(),
    country: yup.string().required(),
    city: yup.string().required(),
  }),
});

const [provider_service] = defineField("provider_service");
const [provider_subService] = defineField("provider_subService");
const [country] = defineField("country");
const [city] = defineField("city");

const selectedCountry = computed(() =>
  countries.value.find((item) => item.id == country.value)
);
const cities = computed(
  () => selectedCountry.value?.cities || countries.value[0].cities
);

function onSuccess(values) {
  providerFormData.value = { ...providerFormData.value, ...values };
  emit("nextStep");
}

function onInvalidSubmit({ errors }) {
  console.log(errors);
}

const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);

onMounted(() => {
  if (!providerFormData.value?.provider_service) {
    getServices();
  }
});
</script>

<template>
  <form @submit.prevent="onSubmit" class="w-full my-16">
    <div class="mb-3 grid md:grid-cols-2 gap-5">
      <div class="mb-3">
        <BaseFormDropdown 
        :label="$t('providerService')" 
        :data="uniqueServices"
          v-model="provider_service"
          :errMessage="errors.provider_service"
          itemTitle="name"
          itemValue="id"
          @selectService="selectService"/>
      </div>
      <div class="mb-3">
        <BaseFormDropdown :label="$t('providerSubService')" :data="subServices"
          v-model="provider_subService"
          :errMessage="errors.provider_subService"
          itemTitle="name"
          itemValue="id"/>
      </div>
    </div>
    <div class="mb-3 grid md:grid-cols-2 gap-5">
      <div class="mb-3">
        <BaseFormDropdown
          :label="$t('providerCountry')"
          :data="countries"
          v-model="country"
          :errMessage="errors.country"
          itemTitle="name"
          itemValue="id"
        />
      </div>
      <div class="mb-3">
        <BaseFormDropdown
          :label="$t('providerCity')"
          :data="cities"
          v-model="city"
          :errMessage="errors.city"
          itemTitle="name"
          itemValue="id"
        />
      </div>
    </div>
    <div class="text-center">
      <BaseAppButton class="w-full md:w-1/2 mt-3"> التالي </BaseAppButton>
    </div>
  </form>
</template>
