<script setup>
import userImg from "@/assets/images/avatar.png";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const { logout } = useAuthStore();
const { user } = storeToRefs(useAuthStore());
const userPhoneData = ref({
  country_code: user.value.country_code,
  phone: user.value.phone_number,
});
const imageSrc = ref(null);

function handleFileChange(event) {
  const file = event.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imageSrc.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

function handleLogout(){
  closeModal();
  logout()
}
</script>

<template>
  <div class="flex justify-between items-center my-16">
    <div class="flex justify-start items-center gap-6">
      <div class="relative user-img w-20 h-20 rounded-full overflow-hidden">
        <input
          type="file"
          name="photo"
          id="photo"
          class="w-full h-full opacity-0 absolute top-0 left-0 z-50"
          @change="handleFileChange"
        />
        <div
          class="bg-surface-light-500 absolute top-0 left-0 w-full h-full flex justify-center items-center z-40"
        >
          <div v-if="imageSrc">
            <img :src="imageSrc" class="object-cover w-full h-full" />
          </div>
          <div
            v-else
            class="relative user-img w-20 h-20 rounded-full overflow-hidden"
          >
            <img
              :src="user?.avatar_path || userImg"
              alt="User Avatar"
              class="w-full h-full object-contain"
            />
            <button
              class="bg-black opacity-40 text-white w-full h-1/3 flex justify-center items-start absolute bottom-0 left-1/2 -translate-x-1/2"
            >
              <i class="fa-solid fa-camera text-sm"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="user-name text-xl">
        {{ user.name }}
      </div>
    </div>
    <div class="bg-red-500 text-white text-sm sm:text-base font-semibold px-8 py-[6px] h-11 rounded-lg hover:bg-red-600 transition-all">
      <button
        type="button"
        @click="openModal"
      >
        حذف الحساب
      <i class="fa-solid fa-trash-can ms-2"></i>
      </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-start align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  تسجيل الخروج
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    هل انت متأكد انك تريد حذف حسابك
                  </p>
                </div>

                <div class="mt-4 flex justify-between items center">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="handleLogout"
                  >
                    نعم، متأكد
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    الغاء
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
  <form class="max-w-[800px]">
    <div class="mb-8">
      <BaseFormTextInput :label="'الاسم'" v-model="user.name" />
    </div>

    <div class="mb-8 grid md:grid-cols-2 gap-5">
      <div class="mb-3">
        <BaseFormPhoneInput
          v-model="userPhoneData"
          :disabled="
            userPhoneData.country_code && userPhoneData.phone ? true : false
          "
        />
      </div>

      <div class="mb-3">
        <BaseFormEmailInput
          v-model="user.email"
          :disabled="user.email ? true : false"
        />
      </div>
    </div>

    <div class="text-center">
      <BaseAppButton class="w-full md:w-1/2 mt-3"> حفظ </BaseAppButton>
    </div>
  </form>
</template>

<style></style>
