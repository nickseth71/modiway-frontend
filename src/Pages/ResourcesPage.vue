<script setup>
import Banner from "../assets/Resource-Banner.png";
</script>

<template>
  <section>
    <!-- Responsive Banner Section -->
    <div class="max-w-full">
      <img
        :src="Banner"
        alt="Resource Banner"
        class="w-full h-auto object-cover"
      />
    </div>

    <!-- Responsive Content Section -->
    <div class="page-width mt-8">
      <div class="max-w-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-8">
        <!-- Left Content -->
        <div class="flex-1 text-center lg:text-left">
          <h2 class="text-2xl lg:text-3xl font-bold mb-4">
            Your Heading Here
          </h2>
          <p class="text-sm lg:text-base text-gray-600">
            Add your content here. This text is responsive and adjusts for different screen sizes.
          </p>
        </div>

        <!-- Right Content -->
        <div class="flex-1">
          <div class="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <!-- Add any image or content here -->
            <span class="text-gray-500">Placeholder Content</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
