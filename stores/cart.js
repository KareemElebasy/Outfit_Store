export const useCartStore = defineStore("cart", () => {
  const config = useRuntimeConfig();
  const { locale } = useI18n();

  const addToCart = async (data) => {
    try {
      const req = await $fetch(`${config.public.baseURL}cart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-Language": locale.value,
          Authorization: `Bearer ${useCookie("token").value} `,
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: {
          product_detail_id: data.id,
          quantity: 1,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateCount = async (id, count) => {
    try {
      const req = await $fetch(`${config.public.baseURL}cart/update_count`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-Language": locale.value,
          Authorization: `Bearer ${useCookie("token").value} `,
        },
        body: {
          cart_product_id: id,
          count: count,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartItem = async (id) => {
    try {
      const req = await $fetch(`${config.public.baseURL}delete_item/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-Language": locale.value,
          guest_user: "tokenene",
          Authorization: `Bearer ${useCookie("token").value}`,
        },
        body: {
          cart_product_id: id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  const deleteAllCartItems = async () => {
    try {
      const req = await $fetch(`${config.public.baseURL}delete_all_cart`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-Language": locale.value,
          guest_user: "tokenene",
          Authorization: `Bearer ${useCookie("token").value} `,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // WishList
  const addToWishlist = async (id) => {
    try {
      const req = $fetch(`${config.public.baseURL}products/${id}/fav`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-Language": locale.value,
          Authorization: `Bearer${useCookie("token").value}`,
        },
        body: {
          product_detail_id: id,
        },
      }).then(() => refreshNuxtData());
    } catch (error) {
      console.log(error);
    }
  };
  return {
    addToCart,
    deleteAllCartItems,
    addToWishlist,
    deleteCartItem,
    updateCount,
  };
});
