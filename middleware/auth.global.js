import { useUserAuthStore } from "../stores/userAuth";
export default defineNuxtRouteMiddleware((to, from) => {
  const store = useUserAuthStore();
  const token = useCookie("token");
  console.log(token.value);
  // if (!token.value && to.fullPath !== "/login") {
  //   return navigateTo("/login");
  // }
  if (token.value && to.fullPath === "/login") {
    return navigateTo("/profile/orders");
  }
  if (token.value && to.fullPath === "/signup") {
    return navigateTo("/profile/orders");
  }
  if (!token.value && to.fullPath === "/profile/orders") {
    return navigateTo("/login");
  }
});
