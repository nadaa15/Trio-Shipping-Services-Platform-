import type { StringSchema } from "yup";

export const useAppFetch = <T>() => {
  // let token: string = "";

  // const tokenCookie = useCookie("tokenCookie");

  // token = tokenCookie.value || "";

  const config = useRuntimeConfig();
  const BASE_URL = config.public.apiBase;

  const headers: HeadersInit = {
    Accept: "application/json",
    // "Content-Type": "application/json",
    "client-type": "web",
    "lang": "ar"
  };

  const apiCall = {
    get: (path: StringSchema, body: undefined | FormData = undefined) =>
      $fetch<T>(BASE_URL + path, {
        method: "GET",
        body: body,
        headers,
      }),
    post: (path: string, body: undefined | FormData = undefined) =>
      $fetch<T>(BASE_URL + path, {
        method: "POST",
        body: body,
        headers,
      }),
    delete: (path: string, body: undefined | FormData = undefined) =>
      $fetch<T>(BASE_URL + path, {
        method: "DELETE",
        body: body,
        headers,
      }),
  };

  return {
    register: (formData: FormData) => apiCall.post(`/auth/register`, formData),
    login: (formData: FormData) => apiCall.post(`/auth/login`, formData),
    fetchServices: () => apiCall.get(`/services`),
    fetchSubServices: (id) => apiCall.get(`/services?parent_id=${id}`),
  };
};
