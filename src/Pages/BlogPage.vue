<script setup>
import Banner from "../assets/blog-banner.png";

import BeautifulFoodImage from "../assets/beautiful-assortment-delicious-food.png";
import BeautifulWomenImage from "../assets/beautiful-young-woman-meditating-exercising-top-him.png";
import CreativeFrengsuiImage from "../assets/creative-fengshui-practice-kitchen-arrangement.png";
import PotraitBeautifulWomen from "../assets/portrait-beautiful-woman-with-clear-skin-using-moisturizer-her-face.png";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const readmore = () => {
  router.push("/blogs-article");
};

const items = ref([
  {
    id: 1,
    image: BeautifulFoodImage,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: BeautifulWomenImage,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: CreativeFrengsuiImage,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    image: PotraitBeautifulWomen,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    image: BeautifulFoodImage,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    image: BeautifulWomenImage,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    image: CreativeFrengsuiImage,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    image: PotraitBeautifulWomen,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]);
</script>

<template>
  <section>
    <section class="max-w-full">
      <div class="flex justify-center h-[624px] lg:h-[639px]">
        <img :src="Banner" alt="banner" class="w-full h-full object-cover" />
      </div>
    </section>

    <section class="page-width">
      <div
        class="mt-[20px] lg:mt-[44px] flex flex-col md:flex-row items-center px-[15px]"
      >
        <!-- Left Section -->
        <div
          class="w-full lg:w-1/2 lg:px-[28px] flex flex-col items-start lg:mt-[48px] text-left"
        >
          <h2
            style="line-height: normal"
            class="text-black/85 text-[26px] font-normal font-outfit"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <p
            class="text-black/85 text-[18px] mt-[13px] pr-[48px] font-normal font-outfit leading-[21.592px] tracking-[0.9px]"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis
          </p>
          <button
            @click="readmore"
            class="mt-6 sm:mt-10 lg:mt-[130px] px-[10px] py-[5px] bg-[#414042] text-[#fff] font-normal font-outfit text-[13px] lg:text-[15px] lg:leading-[18px] lg:tracking-[0.75px] hover:bg-[#2c2b2d] transition"
          >
            Read More
          </button>
        </div>

        <!-- Right Section -->
        <div
          class="relative w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-[17px] ml-0 lg:ml-[180px] mb-[20px] lg:mb-0"
        >
          <!-- First Image with Text -->
          <div class="relative w-full h-[380px] lg:w-[224px] lg:h-[229px]">
            <img
              src="../assets/creative-assortment-delicious-food.png"
              alt="Delicious dish"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute w-[210px] lg:w-full top-4 right-3 lg:static bg-opacity-70 lg:bg-transparent"
            >
              <h3
                class="lg:text-start font-normal font-outfit text-right text-[26px] mt-[15px] break-words"
              >
                Lorem ipsum
              </h3>
              <p
                class="text-black/85 lg:text-start text-right text-[18px] font-normal font-outfit leading-[21.592px] tracking-[0.9px] break-words"
              >
                Lorem ipsum dolor amet, consectetuer
              </p>
            </div>
          </div>
          <div
            class="lg:border-none border-b border-[#CFCFCF] my-[32px] lg:hidden"
          />
          <!-- Second Image (Hidden on Mobile) -->
          <div class="hidden lg:block w-full h-[398px]">
            <img
              src="../assets/cup-brazilian-dessert-with-kiwi.png"
              alt="Refreshing drink"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="page-width">
      <div class="container mx-auto px-4 lg:mt-[52px] mt-[]">
        <!-- Responsive grid for the items -->
        <div class="grid gap-[15px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div v-for="item in items" :key="item.id" class="bg-white">
            <div
              class="w-full h-[187.84px] sm:h-[220px] lg:w-[273px] lg:h-[302px]"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="pt-[23.16px] pb-[50px]">
              <h3
                class="text-start font-normal font-outfit text-[20px] sm:text-[22px] lg:text-[26px]"
              >
                {{ item.title }}
              </h3>
              <p
                class="mt-[10px] text-black/85 text-start text-[16px] lg:text-[18px] font-normal font-outfit leading-[19.194px] tracking-[0.8px] lg:leading-[21px]"
              >
                {{ item.description }}
              </p>
              <button
                class="mt-6 sm:mt-10 lg:mt-[10px] px-[10px] py-[5px] bg-[#414042] text-[#fff] font-normal font-outfit text-[13px] lg:text-[15px] leading-[15.595px] tracking-[0.65px] lg:leading-[17.995px] lg:tracking-[0.75px] hover:bg-[#2c2b2d] transition"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
