<script setup>
definePageMeta({
    middleware: ["auth"],
});
const activeData = ref(true)
const activeChange = ref(false)
const activePassChange = ref(false)

const selectData = () => {
   activeData.value = true
   activeChange.value = false
 activePassChange.value = false
}
const selectChange = () => {
   activeData.value = false
   activeChange.value = true
   activePassChange.value = false
}
const selectPassChange = () => {
   activeData.value = false
 activeChange.value = false
   activePassChange.value = true
}
</script>

  <template>
  <div class="container my-16">
    <div class="flex justify-start items-center gap-8 font-bold mb-8">
      <button @click="selectData" :class="activeData? 'text-primary': ''">البيانات الشخصيه</button>
      <button @click="selectChange" :class="activeChange? 'text-primary': ''">تعديل</button>
      <button @click="selectPassChange" :class="activePassChange? 'text-primary': ''">تعديل الرقم السري</button>
    </div>
  <div v-if="activeData">
    <UserData/>
  </div>

  <div v-if="activeChange">
    <ChangeUserData/>
  </div>
  <div v-if="activePassChange">
    <ChangePassword/>
  </div>
  </div>
</template>



<style></style>
