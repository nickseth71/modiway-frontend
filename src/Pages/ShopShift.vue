<script setup>
import { ref } from "vue";
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


import BannerImage from "../assets/banner.png"
//////////////////////////////////////////////////////// product images /////////////////////////////////////////////////

import MangoFlavour from "../assets/Mango.png"

const productImages = ref([
  {src:MangoFlavour ,alt:'Product img', title:"Mango Flavour" ,description:"Shape Shift"}
])

// Carousel items
const cartItems = ref([
  { src: AddCart1, alt: "Cart image 1" },
  { src: AddCart2, alt: "Cart image 2" },
  { src: AddCart3, alt: "Cart image 3" },
  { src: AddCart4, alt: "Cart image 4" },
]);

// Active carousel index
const activeIndex = ref(0);

// Product details
const flavors = ref([
  "Chocolate",
  "Vanilla",
  "Mango",
  "Kulfi",
  "Rose Kheer",
  "Strawberry",
  "Banana Caramel",
  "Rasmalai",
]);

const quantity = ref(1);

const icons = ref([
  { img: Category1, label: "Low GI" },
  { img: Category2, label: "Vegetarian" },
  { img: Category3, label: "Preservative Free" },
  { img: Category4, label: "No-Added Sugar" },
  { img: Category5, label: "Gluten Free" },
  { img: Category6, label: "Non GMO" },
]);

const sections = ref([
  { title: "Product Description", content: "Detailed description here.", open: false },
  { title: "Key Benefits", content: "Key benefits here.", open: false },
  { title: "Recommended Usage Level", content: "Usage level here.", open: false },
  { title: "Ingredients", content: "Ingredients list here.", open: false },
  { title: "Allergen Info", content: "Allergen info here.", open: false },
  { title: "Attention", content: "Attention content here.", open: false },
  { title: "Storage", content: "Storage details here.", open: false },
  { title: "Nutritional Information", content: "Nutritional info here.", open: false },
]);

// Methods
const updateIndex = (index) => {
  activeIndex.value = index;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};

const increaseQuantity = () => {
  quantity.value++;
};

const toggleSection = (index) => {
  sections.value[index].open = !sections.value[index].open;
};
</script>


<template>
  <section class="max-w-[100%] mx-auto">
  <section
    class="flex flex-col lg:flex-row justify-between items-start py-0 lg:py-8 space-y-8 lg:space-y-0 lg:space-x-[42px] page-width"
  >
    <!-- Carousel for Small Devices -->
     <div class="lg:hidden">

      <div class="flex flex-row px-[16px]">
      <p 
      >
        <span style="line-height: normal;" class="text-[#727272] text-[11px] font-normal font-outfit">Shape Shift</span> <span class="text-[#717171] text-[11px] px-[4px]">|</span>
      <span class="text-[#717171] text-[11px] font-semibold font-outfit">Meal Replacement for Weight Control/ Management</span>
    </p>
    </div>
    <div
      id="custom-carousel"
      class="relative w-full block lg:hidden -top-[10px]"
      data-carousel="slide"
    >
      <!-- Carousel wrapper -->
      <div class="relative h-[464px] overflow-hidden">
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
        class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse py-4"
        style="transform: translateX(-50%)"
      >
        <button
          v-for="(item, index) in cartItems"
          :key="index"
          type="button"
          class="w-3 h-3 rounded-full"
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

      <!-- Product Info Section -->
      <div class="bg-white pl-[19px] pr-[4px] py-[19px] max-w-full mx-auto text-gray-800">
        <!-- Product Title -->
        <div class="text-start">
          <h1 style="line-height: normal;" class="text-[20px] text-black/85 font-normal font-outfit">Shape Shift</h1>
          <h2 class="text-[20px] text-black/85 font-light font-outfit">Plant-Based Protein Powder 500g</h2>
          <p class="text-[13px] text-black/85 font-normal font-outfit leading-[16px]">
            Meal Replacement for Weight Control/Management
          </p>
        </div>

        <!-- Product Info -->
        <div class="mt-2">
          <p class="text-[13px] text-[#202020] font-normal font-outfit"><span class="text-[13px]">Item:</span> MW0001</p>
          <p class="text-[13px] text-[#202020] font-normal font-outfit"><span class="text-[13px] text-black/85 font-normal font-outfit ">Net Quantity:</span class="text-[13px]"> 500g</p>
        </div>

        <!-- Price -->
        <div class="mt-4">
          <p class="text-[16px]"><span style="line-height: normal;" class="text-[#424242] text-base font-normal font-outfit">Rs. </span>
            <span style="line-height: normal;" class="text-[#424242] text-base font-bold font-outfit">2,750.00</span></p>
          <p class="text-[13px] font-light font-outfit text-black/85">MRP (incl. of all taxes)</p>
        </div>

        <!-- Flavors -->
        <div class="flex flex-wrap gap-2 mt-[17px] justify-start items-center">
          <span
            v-for="flavor in flavors"
            :key="flavor"
            class="text-[13px] font-medium font-outfit bg-white px-3 border py-1 rounded-md"
          >
            {{ flavor }}
          </span>
        </div>

        <!-- Quantity Selector -->
        <div class="flex items-center gap-4 mt-6">
  <p style="line-height: normal;" class="text-[13px] font-normal font-outfit">Quantity:</p>
  <div class="flex items-center border border-black rounded-md px-[4px]">
    <!-- Decrease Quantity Button -->
    <button
      class="w-6 h-6 flex justify-center items-center text-gray-800"
      @click="decreaseQuantity"
      aria-label="Decrease quantity"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="2"
        viewBox="0 0 9 2"
        fill="none"
        class="w-4 h-4"
      >
        <path
          d="M8.8125 0.4375H0.1875C0.0839062 0.4375 0 0.521406 0 0.625V1.375C0 1.47859 0.0839062 1.5625 0.1875 1.5625H8.8125C8.91609 1.5625 9 1.47859 9 1.375V0.625C9 0.521406 8.91609 0.4375 8.8125 0.4375Z"
          fill="black"
          fill-opacity="0.85"
        />
      </svg>
    </button>

    <!-- Quantity Display -->
    <span class="text-base font-medium px-2">{{ quantity }}</span>

    <!-- Increase Quantity Button -->
    <button
      class="w-6 h-6 flex justify-center items-center text-gray-800"
      @click="increaseQuantity"
      aria-label="Increase quantity"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="6"
        viewBox="0 0 11 7"
        fill="none"
        class="w-4 h-4"
      >
        <path
          d="M9.8125 3.00548H6.0625V0.156139C6.0625 0.077426 5.97859 0.0136719 5.875 0.0136719H5.125C5.02141 0.0136719 4.9375 0.077426 4.9375 0.156139V3.00548H1.1875C1.08391 3.00548 1 3.06924 1 3.14795V3.71782C1 3.79653 1.08391 3.86029 1.1875 3.86029H4.9375V6.70963C4.9375 6.78835 5.02141 6.8521 5.125 6.8521H5.875C5.97859 6.8521 6.0625 6.78835 6.0625 6.70963V3.86029H9.8125C9.91609 3.86029 10 3.79653 10 3.71782V3.14795C10 3.06924 9.91609 3.00548 9.8125 3.00548Z"
          fill="black"
          fill-opacity="0.85"
          stroke="black"
          stroke-width="0.0234375"
        />
      </svg>
    </button>
  </div>
</div>


        <!-- Add to Cart -->
        <div class="flex justify-start mt-[19px] border-b border-[#ababab] pb-[30px]">
          <button
            class="text-[16px] underline underline-offset-4 font-outfit font-bold"
          >
            Add to cart
          </button>
        </div>

        <!-- Icons -->
        <div class="flex flex-wrap justify-center mt-[23px] gap-4">
          <div v-for="(icon, index) in icons" :key="index" class="text-center">
            <img :src="icon.img" alt="Icon" class="w-[31.20px] h-[31.20px] mx-auto" />
            <p class="text-[10.56px] font-medium font-outfit text-center mt-1">{{ icon.label }}</p>
          </div>
        </div>

        <!-- Accordion Sections -->
        <div class="mt-6 space-y-4 pr-[13px]">
          <div
            v-for="(section, index) in sections"
            :key="index"
            class="border-b-[1px] border-[#353535]"
          >
            <button 
            style="line-height: normal;"
              class="w-full text-left text-[#353535] pt-[30px] pb-[8px] text-[16px] font-normal font-outfit flex justify-between items-center"
              @click="toggleSection(index)"
            >
              {{ section.title }}
              <span
                :class="{
                  'rotate-180': section.open,
                  'rotate-0': !section.open,
                }"
                class="transform transition-transform duration-200"
              >
              <i class="fas fa-chevron-down"></i>
              </span>
            </button>
            <div v-if="section.open" class="text-xs text-gray-600 mt-2">
              {{ section.content }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!------------------------------------------------------------------------------- Large Screen --------------------------------------------------- -->
    <!-- First Column: Display Images (for Larger Screens) -->
    <div class="hidden lg:flex gap-6">
      <div class="lg:grid gap-[14px] grid-cols-2 lg:w-[58%]">
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
          </div>
          <div class="pt-[106.75px]">
            <div class="flex flex-row gap-4 justify-items-center">
              <div class="flex flex-col justify-center items-center">
                <img :src="Category1" alt="Low GI" class="w-[29.061px] h-[29.061px] object-cover mb-2" />
                <span style="line-height: normal;" class="block text-[9.83px] font-medium font-outfit text-center"
                  >LowGI</span
                >
              </div>
              <div class="flex flex-col justify-center items-center">
                <img
                  :src="Category2"
                  alt="Vegetarian"
                  class="w-[29.061px] h-[29.061px] object-cover mb-2"
                />
                <span style="line-height: normal;" class="block text-[9.83px] font-medium font-outfit text-center"
                  >Vegetarian</span
                >
              </div>
              <div class="flex flex-col justify-center items-center">
                <img
                  :src="Category3"
                  alt="Preservative Free"
                  class="w-[29.061px] h-[29.061px] object-cover mb-2"
                />
                <span style="line-height: normal;" class="block text-[9.83px] font-medium font-outfit text-center"
                  >Preservative Free</span
                >
              </div>
              <div class="flex flex-col justify-center items-center">
                <img
                  :src="Category4"
                  alt="No added sugar"
                  class="w-[29.061px] h-[29.061px] object-cover mb-2"
                />
                <span style="line-height: normal;" class="block text-[9.83px] font-medium font-outfit text-center"
                  >No-Added Sugar</span
                >
              </div>
              <div class="flex flex-col justify-center items-center">
                <img
                  :src="Category5"
                  alt="Gluten Free"
                  class="w-[29.061px] h-[29.061px] object-cover mb-2"
                />
                <span style="line-height: normal;" class="block text-[9.83px] font-medium font-outfit text-center"
                  >Gluten Free</span
                >
              </div>
              <div class="flex flex-col justify-center items-center">
                <img :src="Category6" alt="Non-GMO" class="w-[29.061px] h-[29.061px] object-cover mb-2" />
                <span style="line-height: normal;" class="block text-[9.83px] font-medium font-outfit text-center"
                  >Non-GMO</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 <!------------------------------------- Accordion Sections -------------------------------------------------------->
  <section class="max-w-[1200px] mx-auto hidden lg:block">
   
    <div class=" space-y-4 px-10">
          <div
            v-for="(section, index) in sections"
            :key="index"
            class="border-b-[1px] border-[#353535]"
          >
            <button 
            style="line-height: normal;"
              class="w-full text-left text-[#353535] pt-[30px] pb-[24px] text-[16px] font-normal font-outfit flex justify-between items-center"
              @click="toggleSection(index)"
            >
              {{ section.title }}
              <span
                :class="{
                  'rotate-180': section.open,
                  'rotate-0': !section.open,
                }"
                class="transform transition-transform duration-200"
              >
              <i class="fas fa-chevron-down"></i>
              </span>
            </button>
            <div v-if="section.open" class="text-xs text-gray-600 mt-2">
              {{ section.content }}
            </div>
          </div>
        </div>
  </section>

  <section class="max-w-[1124px] mx-auto mt-[50px] lg:mt-20 px-4">
  <!-- Title Section -->
  <div class="flex justify-start lg:justify-center items-center">
    <h2
      style="line-height: normal;"
      class="text-center text-black/85 font-outfit lg:text-[42px] text-[20px] font-semibold lg:font-normal"
    >
      Often bought with
    </h2>
  </div>

  <!-- Products Section -->
  <div class="mt-12 flex flex-wrap gap-8 justify-center items-center">
    <!-- Product Block -->
    <div
      v-for="(product, index) in productImages"
      :key="index"
      class="flex flex-col items-center bg-white"
    >
      <div class="flex flex-row gap-[14px] lg:gap-[134px] justify-center items-center">
        <!-- First Image with Title -->
        <div class="flex flex-col items-center">
          <!-- Image Container -->
          <div class="w-[175px] h-[175px] lg:w-[218px] lg:h-[307px] bg-white border border-[#ededed] px-[20px] py-[18px] rounded overflow-hidden">
            <img
              :src="product.src"
              :alt="product.alt"
              class="w-full h-full object-cover"
            />
          </div>
          <span style="line-height: normal;"  class="mt-[22px] text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
            {{ product.description }}
          </span>
          <!-- Title -->
          <span style="line-height: normal;"  class=" text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
            {{ product.title }}
          </span>
        </div>

        <!-- Second Image with Title -->
        <div class="flex flex-col items-center">
          <!-- Image Container -->
          <div class="w-[175px] h-[175px] lg:w-[218px] lg:h-[307px] bg-white border border-[#ededed] px-[20px] py-[18px] rounded overflow-hidden">
            <img
              :src="product.src"
              :alt="product.alt"
              class="w-full h-full object-cover"
            />
          </div>
          <span style="line-height: normal;"  class="mt-[22px] text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
            {{ product.description }}
          </span>
          <!-- Title -->
          <span style="line-height: normal;"  class=" text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
            {{ product.title }}
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ You may also like section \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->


<section class="max-w-[1124px] mx-auto mt-[50px] lg:mt-[80.14px] px-4 ">
  <!-- Title Section -->
  <div class="flex justify-start lg:justify-center items-center">
    <h2
      style="line-height: normal;"
      class="text-center text-black/85 font-outfit lg:text-[42px] text-[20px] font-semibold lg:font-normal"
    >
      You may also like
    </h2>
  </div>

  <!-- Products Section -->
  <div class="mt-12 flex flex-wrap  justify-center items-center">
    <!-- Product Block -->
    <div
      v-for="(product, index) in productImages"
      :key="index"
      class="flex flex-col  items-center bg-white"
    >
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-[14px] lg:gap-[33px] justify-center items-center">
  <!-- First Image with Title -->
  <div class="flex flex-col items-center">
    <div class="w-[175px] h-[175px] lg:w-[218px] lg:h-[307px] bg-white border border-[#ededed] px-[20px] py-[18px] rounded overflow-hidden">
      <img :src="product.src" :alt="product.alt" class="w-full h-full object-cover" />
    </div>
    <span class="mt-[22px] text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
      {{ product.description }}
    </span>
    <span class="text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
      {{ product.title }}
    </span>
  </div>

  <!-- Second Image with Title -->
  <div class="flex flex-col items-center">
    <div class="w-[175px] h-[175px] lg:w-[218px] lg:h-[307px] bg-white border border-[#ededed] px-[20px] py-[18px] rounded overflow-hidden">
      <img :src="product.src" :alt="product.alt" class="w-full h-full object-cover" />
    </div>
    <span class="mt-[22px] text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
      {{ product.description }}
    </span>
    <span class="text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
      {{ product.title }}
    </span>
  </div>

  <!-- Third Image with Title -->
  <div class="flex flex-col items-center">
    <div class="w-[175px] h-[175px] lg:w-[218px] lg:h-[307px] bg-white border border-[#ededed] px-[20px] py-[18px] rounded overflow-hidden">
      <img :src="product.src" :alt="product.alt" class="w-full h-full object-cover" />
    </div>
    <span class="mt-[22px] text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
      {{ product.description }}
    </span>
    <span class="text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
      {{ product.title }}
    </span>
  </div>

  <!-- Fourth Image with Title -->
  <div class="flex flex-col items-center">
    <div class="w-[175px] h-[175px] lg:w-[218px] lg:h-[307px] bg-white border border-[#ededed] px-[20px] py-[18px] rounded overflow-hidden">
      <img :src="product.src" :alt="product.alt" class="w-full h-full object-cover" />
    </div>
    <span class="mt-[22px] text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
      {{ product.description }}
    </span>
    <span class="text-center text-black/85 text-[13px] lg:text-[20px] font-normal font-outfit">
      {{ product.title }}
    </span>
  </div>
</div>

    </div>
  </div>
</section>
<section>
  <div class="w-full h-[70vh]">
    <img :src="BannerImage" alt="Banner" class="w-full object-cover">
  </div>
</section>

</section>
</template>


