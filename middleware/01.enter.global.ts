import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.server) return;

  const { enter } = useAuthStore();

  enter();
});
