export default defineNuxtRouteMiddleware((to , from) => {
  const token = useCookie("token");
  const localePath = useLocalePath()
  if(!token.value){
    return navigateTo(localePath("/login"));
  }
});