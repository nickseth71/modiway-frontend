<script setup>
import { ref, onMounted } from "vue";
import AddCart1 from "../assets/add-cart1.png";
import AddCart2 from "../assets/add-cart2.png";
import AddCart3 from "../assets/add-cart3.png";
import AddCart4 from "../assets/add-cart4.png";

////////////////////////////// category images ///////////////////////////////////////
import Category1 from "../assets/LowGi.png";
import Category2 from "../assets/veg.png";
import Category3 from "../assets/Preservative.png";
import Category4 from "../assets/Non-GMO.png";
import Category5 from "../assets/No-Added-Sugar.png";
import Category6 from "../assets/Gluten-Free.png";


// Define your cart items
const cartItems = ref([
  {
    src: AddCart1,
    alt: "Cart image 1",
  },
  {
    src: AddCart2,
    alt: "Cart image 2",
  },
  {
    src: AddCart3,
    alt: "Cart image 3",
  },
  {
    src: AddCart4,
    alt: "Cart image 4",
  },
]);

const categoryItems = ref([

])

// Define activeIndex for controlling the carousel
const activeIndex = ref(0);

// Ensure activeIndex updates when clicking on indicators
const updateIndex = (index) => {
  activeIndex.value = index;
};

onMounted(() => {
  console.log(cartItems.value);
});
</script>

<template>
  <section
    class="flex flex-col lg:flex-row justify-between items-start page-width py-0 lg:py-8 space-y-8 lg:space-y-0 lg:space-x-[42px]"
  >
    <!-- Carousel for Small Devices -->
    <div
      id="custom-carousel"
      class="relative w-full block lg:hidden"
      data-carousel="slide"
    >
      <!-- Carousel wrapper -->
      <div class="relative h-[80vh] overflow-hidden">
        <!-- Items -->
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          :class="{ hidden: index !== activeIndex }"
          class="duration-700 ease-in-out"
          :data-carousel-item="index === 0 ? 'active' : null"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            class="absolute w-full h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <!-- Slider indicators -->
      <div
        class="absolute z-20 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse py-4"
      >
        <button
          v-for="(item, index) in cartItems"
          :key="index"
          type="button"
          class="w-2 h-2 rounded-full"
          :aria-current="index === activeIndex ? 'true' : 'false'"
          :aria-label="'Slide ' + (index + 1)"
          :data-carousel-slide-to="index"
          @click="updateIndex(index)"
          :class="{
            'bg-[#606060]': index === activeIndex,
            'bg-[#FFFFFF]': index !== activeIndex,
          }"
        ></button>
      </div>
    </div>

    <!-- First Column: Display Images (for Larger Screens) -->
    <div class="hidden lg:grid grid-cols-2 gap-3 w-full lg:w-[58%]">
      <div
        v-for="(item, index) in cartItems"
        :key="index"
        class="flex justify-center"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          class="object-cover w-full h-auto"
        />
      </div>
    </div>

    <!-- Second Column: Product Information -->
    <div class="w-full lg:w-[45%] space-y-0 px-[15px]">
      <!-- Breadcrumbs -->
      <ul
        class="hidden lg:flex flex-wrap items-center text-xs text-[#717171] space-x-[6px]"
      >
        <li class="cursor-pointer">Home</li>
        <li class="cursor-pointer">Meal Replacement</li>
        <li class="cursor-pointer">Shape Shift</li>
        <li class="cursor-pointer">Meal Replacement for Weight Management</li>
      </ul>

      <!-- Product Title -->
      <h2 class="text-[20px] font-normal font-outfit text-black/85">
        Plant-Based Protein Powder 500g
      </h2>

      <p
        class="text-[14px] font-normal font-opacity tracking-[0.28px] leading-[21px] text-black/85"
      >
        Meal Replacement for Weight Management
      </p>

      <div class="flex flex-col pt-[3px]">
        <p class="text-black/85 text-[14px] font-light font-outfit">
          Item: MW0001
        </p>
        <p class="text-black/85 text-[14px] font-light font-outfit">
          Net Quantity: 500g
        </p>
        <p style="line-height: normal">
          <span
            class="text-black/85 text-[20px] leading-normal font-normal font-outfit"
            >Rs. </span
          ><span class="text-black/85 text-[20px] font-bold font-outfit"
            >2,750.00</span
          >
        </p>
        <p
          style="line-height: normal"
          class="text-black/85 text-[16px] font-light font-outfit"
        >
          MRP (incl. of all taxes)
        </p>
        <router-link
          class="pt-[100.52px] underline underline-offset-2 font-outfit leading-[19.95px] font-bold text-[19.95px]"
        >
          Add to cart
        </router-link>
      </div>

      <div class="pt-[31px]">
        <div
          class="flex flex-wrap justify-start items-center space-x-2 space-y-1 pt-[31px]"
        >
          <div
            class="bg-blue-500 border px-2 text-center text-white text-[14.93px] font-medium font-outfit"
          >
            Chocolate
          </div>
          <div
            class="border px-2 text-center text-black/85 text-[14.90px] font-medium font-outfit"
          >
            Vanilla
          </div>
          <div
            class="border px-2 text-center text-black/85 text-[14.90px] font-medium font-outfit"
          >
            Mango
          </div>
          <div
            class="border px-2 text-center text-black/85 text-[14.90px] font-medium font-outfit"
          >
            Kulfi
          </div>
          <div
            class="border px-2 text-center text-black/85 text-[14.90px] font-medium font-outfit"
          >
            Rose Kheer
          </div>
          <div
            class="border px-2 text-center text-black/85 text-[14.90px] font-medium font-outfit"
          >
            Strawberry
          </div>
          <div
            class="border px-2 text-center text-black/85 text-[14.90px] font-medium font-outfit"
          >
            Banana Caramel
          </div>

          <div
            class="border px-2 text-center text-black/85 text-[14.90px] font-medium font-outfit"
          >
            Rasmalai
          </div>

          <div>
            <div class="flex flex-col justify-start items-center">
              <div><img src="" alt="" /></div>
              <div><img src="" alt="" /></div>
              <div><img src="" alt="" /></div>
              <div><img src="" alt="" /></div>
              <div><img src="" alt="" /></div>
              <div><img src="" alt="" /></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
