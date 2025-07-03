import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.server) return;

  const { user } = storeToRefs(useAuthStore());

  console.log(user.value);
  if (!user.value) {
    return navigateTo("/auth/login");
  }
});
