export default defineNuxtRouteMiddleware((to , from) => {
  const localePath = useLocalePath()
  const token = useCookie("token");
  if(!token.value){
    return navigateTo(localePath("/login"));
  }
});