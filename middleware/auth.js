export default defineNuxtRouteMiddleware((to , from) => {
  const localePath = useLocalePath()
  const token = useCookie("token");
  if(!token.value || to.fullPath('/profile/orders')){
    return navigateTo(localePath("/login"));
  }
});