<template>
  <div class="container mx-auto">
    <div class="grid gap-5 md:grid-cols-2 p-2">
      <!-- image -->
      <div>
        <img
          class="w-full"
          src="../assets/images/contact.png"
          alt="contact-image"
        />
      </div>
      <!-- Form -->
      <div class="flex flex-col">
        <h2 class="italic font-[400] text-[2rem]">Contact Us</h2>
        <form action="">
          <!-- Name -->
          <div class="mb-6 mt-6">
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <!-- Email -->
          <div class="mb-6 mt-6">
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <!-- Phone -->
          <div class="mb-6 mt-6">
            <input
              type="text"
              id="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Phone"
              required
            />
          </div>
          <!-- Help Content -->
          <div class="mb-6 mt-6">
            <input
              type="text"
              id="helpcontent"
              class="h-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="How Can We Help You"
              required
            />
          </div>
        </form>
        <button
          class="bg-primary w-full px-2 py-5 rounded-md text-white mt-auto"
        >
          Sent Message
        </button>
      </div>
    </div>
    <div class="grid mt-5 mb-5 h-96">
      <h2 class="italic font-[400] text-[1.8rem]">Our Location</h2>
      <div>Google Map</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
