import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const providerFormData = ref(null)
  const user = ref(null);
  const token = ref(null);
  const error = ref(null);

  const enter = () => {
    user.value = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    token.value = localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null;
    // console.log(user.value);

  };

  const handleRegister = (formData: FormData) => {
    useAppFetch()
      .register(formData)
      .then((res) => {
        user.value = res.data;
        localStorage.setItem("user", JSON.stringify(user.value));
        token.value = res.meta.token;
        localStorage.setItem("token", JSON.stringify(token.value));
        navigateTo('/');
      })
      .catch((error) => {
        if (error.data) {
          error.value = error.data.error.message;          
          console.log(error.value);
        } else {
          console.log("connection problem");
        }
      });
  };

  const handleLogin = (formData: FormData) => {
    useAppFetch()
      .login(formData)
      .then((res) => {
        user.value = res.data;
        localStorage.setItem("user", JSON.stringify(user.value));
        token.value = res.meta.token;
        localStorage.setItem("token", JSON.stringify(token.value));
        navigateTo("/");
      })
      .catch((error) => {
        if (error.data) {
          error.value = error.data.error.message;
          console.log(error.value);
        } else {
          console.log("connection problem");
        }
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigateTo("/auth/login");
  };

  return {
    providerFormData,
    user,
    token,
    error,
    enter,
    handleLogin,
    handleRegister,
    logout
  };
});
