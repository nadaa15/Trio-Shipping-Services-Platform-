<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const {t} = useI18n()

const props = defineProps<{
  modelValue?;
  selectedCountry?;
  countryCode?;
  errMessage?: string;
  disabled?: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

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

const selectedItem = ref(null);
const phoneNum = ref(null);

onMounted(() => {
  if (props.modelValue?.country_code && props.modelValue?.phone) {
  selectedItem.value = props.modelValue.country_code;
    phoneNum.value = props.modelValue.phone;
    
}  else {
  selectedItem.value = countries.value[0].country_code;
    phoneNum.value = null;
    console.log(props.modelValue);
}
});


const selectItem = (item) => {
  selectedItem.value = item.country_code;
  sendDataBack();
    console.log(selectedItem.value);

};
const onChangeHandler = () => {
  sendDataBack();
};
const sendDataBack = () => {
  emit("update:modelValue", {
    country_code: props.countryCode || selectedItem.value ,
    phone: phoneNum.value,
  });
};




</script>

<template>
  <label for="phone" class="text-foreground font-semibold">{{ $t('phone-num')}}*</label>
  <div class="flex justify-center items-center">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
        :disabled="countryCode ? true : false || props.disabled"
          class="base-input text-foreground w-fit ps-4 rounded-e-none inline-flex justify-center items-center gap-2 rounded-md text-sm border-e-0 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          {{ countryCode || selectedItem }}
          <i class="fa-solid fa-chevron-down"></i>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute z-50 right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem
              v-slot="{ active }"
              v-for="item in countries"
              :key="item.id"
            >
              <button
                type="button"
                @click="selectItem(item)"
                :class="[
                  active ? 'bg-primary text-white' : 'text-gray-900',
                  'group flex w-full items-center gap-2 rounded-md text-center px-2 py-2 text-sm',
                ]"
              >
                {{ item.country_code }}
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>

    <input
      v-model="phoneNum"
      @input="onChangeHandler"
      type="tel"
      name="phone"
      id="phone"
      :disabled="props.disabled"
      :placeholder="$t('phone-num')"
      class="base-input text-start rtl:rounded-e-none ltr:rounded-s-none ltr:border-s-0 rtl:border-e-0"
    />
  </div>

  <div v-if="errMessage">
    <p class="error">{{ errMessage }}</p>
  </div>
</template>

<style></style>
