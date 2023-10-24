<template>
  <div class="container mx-auto pt-10 pb-10 p-5 ">
    <div class="grid gap-2 sm:grid-col-12 md:grid-cols-12 items-center mx-6">
      <div class="sm:col-sapn-12 md:col-span-6 lg:col-span-3 ">
        <nuxt-link  to="/">
          <img src="../../assets/images/f-logo.png" alt="footer-logo "
        /></nuxt-link>
        <p class="pt-5 text-[1.2rem]">Copyright 2022 All Rights Reserved</p>
      </div>
      <div class="sm:col-sapn-12 md:col-span-6 lg:col-span-3">
        <h4 class="text-[1.2rem] font-[600] italic pb-2">Company Info</h4>
        <ul>
          <li class="text-[.9rem] text-gray-500 pb-1">
            <nuxt-link to="/">About Us</nuxt-link>
          </li>
          <li class="text-[.9rem] text-gray-500 pb-1">
            <nuxt-link to="/">How to Shop</nuxt-link>
          </li>
          <li class="text-[.9rem] text-gray-500 pb-1">
            <nuxt-link to="/">FAQS</nuxt-link>
          </li>
          <li class="text-[.9rem] text-gray-500 pb-1">
            <nuxt-link to="/">Terms of Service</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="sm:col-sapn-12 md:col-span-6 lg:col-span-3">
        <h4 class="text-[1.2rem] italic font-[600] pb-2">Help & Support</h4>
        <ul>
          <li class="text-[.9rem] text-gray-500 pb-1">
            <nuxt-link to="/">Returns</nuxt-link>
          </li>
          <li class="text-[.9rem] text-gray-500 pb-1">
            <nuxt-link to="/">Contact Us</nuxt-link>
          </li>
          <li class="text-[.9rem] text-gray-500 pb-1">
            <nuxt-link to="/">Size Guide</nuxt-link>
          </li>
          <li class="text-[.9rem] text-gray-500 pb-1">
            <nuxt-link to="/">Returns Policy</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="sm:col-sapn-12 md:col-span-6 lg:col-span-3">
        <h4 class="text-[1.2rem] italic font-[600] pb-2">Newsletter</h4>
        <div class="flex flex-wrap items-center gap-2">
          <input
            type="text"
            placeholder="Your Email Here"
            class="p-[5px] my-2 rounded-[5px] border-[2px] border-primary text-[12px]"
          />
          <button class="bg-primary text-white p-[5px] rounded-[5px]">
            Subscribe
          </button>
        </div>
        <h6 class="pt-[1rem]  font-[600]">Download the App</h6>
      </div>
    </div>
    <hr class="w-2/4 mx-auto mt-4" />
    <div class="flex justify-center pt-10">
      <nuxt-link to="/" class="px-5"
        ><img src="../../assets/images/insta.png" alt="insta"
      /></nuxt-link>
      <nuxt-link to="/" class="px-5"
        ><img src="../../assets/images/twitter.png" alt="twiter"
      /></nuxt-link>
      <nuxt-link to="/" class="px-5"
        ><img src="../../assets/images/snapchat.png" alt="snapchat"
      /></nuxt-link>
      <nuxt-link to="/" class="px-5"
        ><img src="../../assets/images/pfooter.png" alt="pfoteer"
      /></nuxt-link>
      <nuxt-link to="/" class="px-5"
        ><img src="../../assets/images/youtube.png" alt="youtube"
      /></nuxt-link>
      <nuxt-link to="/" class="px-5"
        ><img src="../../assets/images/tiktok.png" alt="tiktok"
      /></nuxt-link>
      <nuxt-link to="/" class="px-5"
        ><img src="../../assets/images/fb.png" alt="fb"
      /></nuxt-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
