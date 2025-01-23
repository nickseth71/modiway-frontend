<script setup>
import Banner from "../assets/Resource-Banner.png";
import Literature from "../assets/book-library-with-open-textbook.png";
import Videos from "../assets/young-woman-drinking-juice-home.png"
</script>

<template>
  <section>
    <!-- Responsive Banner Section -->
     <!--------------------------------------------- #22 jan------------------------------------------- -->
    <div class="lg:hidden flex justify-start items-start flex-row pl-[10px] ">
      <span class="text-[#727272] text-[8px] font-outfit font-medium">Home</span>
      <span class="text-[#727272] text-[8px] px-[5px] font-outfit font-light">|</span>
      <span class="text-[#727272] text-[8px] font-outfit font-light">Resources</span>
    </div>

    <div class="w-full h-auto lg:h-auto">
      <img :src="Banner" alt="Resource Banner" class="w-full h-auto object-cover" />
    </div>
    <!--------------------------------------------- #22 jan------------------------------------------- -->

    <div class="hidden lg:flex justify-center items-center flex-row mt-3 ">
      <span class="text-[#727272] text-[12px] font-outfit font-medium">Home</span>
      <span class="text-[#727272] text-[12px] px-[5px] font-outfit font-light">|</span>
      <span class="text-[#727272] text-[12px] font-outfit font-light">Resources</span>
    </div>

    <!-- Responsive Content Section -->
    <div class="page-width py-8 lg:py-16">
      <div class="max-w-[917px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[30px]">
        <!-- Card 1 -->
        <div class="flex flex-col items-center text-center space-y-4">
          <img :src="Literature" alt="Literature Icon" class="w-full h-full object-cover" />
          <router-link to="/literature"
            class="text-[15px] font-outfit font-normal  text-[#262626] flex items-center gap-2">
            <span class="underline underline-offset-2"> Literature</span> <svg xmlns="http://www.w3.org/2000/svg"
              width="10" height="10" viewBox="0 0 10 10" fill="none">
              <mask id="mask0_1_1380" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-1" y="0" width="11"
                height="10">
                <rect x="-0.00683594" y="0.189941" width="9.73062" height="9.73062" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_1380)">
                <path
                  d="M3.24652 9.11031L2.52686 8.39065L5.86162 5.05589L2.52686 1.72113L3.24652 1.00146L7.30094 5.05589L3.24652 9.11031Z"
                  fill="#262626" />
              </g>
            </svg>
          </router-link>
        </div>

        <!-- Card 2 -->
        <div class="relative flex flex-col items-center text-center space-y-4">

          <div class="relative w-full h-full">
            <img :src="Videos" alt="Videos Icon" class="w-full h-full object-cover" />
            <!-- Centered Icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                class="w-20 h-20 fill-current text-white bg-opacity-50 rounded-full p-3 ">
                <path
                  d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z" />
              </svg>
            </div>
          </div>

          <!-- Link Section -->
          <router-link to="/video-listing"
            class="text-[15px] font-outfit font-normal text-[#262626] flex items-center gap-2">
            <span class="underline underline-offset-2">Videos </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <mask id="mask0_1_1380" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-1" y="0" width="11"
                height="10">
                <rect x="-0.00683594" y="0.189941" width="9.73062" height="9.73062" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_1380)">
                <path
                  d="M3.24652 9.11031L2.52686 8.39065L5.86162 5.05589L2.52686 1.72113L3.24652 1.00146L7.30094 5.05589L3.24652 9.11031Z"
                  fill="#262626" />
              </g>
            </svg>
          </router-link>
        </div>

      </div>
    </div>
  </section>
</template>
