<script setup>
import { ref } from "vue";
import AddCart1 from "../assets/add-cart1.png";
import AddCart2 from "../assets/add-cart2.png";
import AddCart3 from "../assets/add-cart3.png";
import AddCart4 from "../assets/add-cart4.png";

////////////////////////////// category images ///////////////////////////////////////
import wishImg from "../assets/wishlist.png"
import BannerImage from "../assets/banner.png";
import Review from "../assets/review.png";
import nextbutton from "../assets/next.png";
import prevbutton from "../assets/previous.png";

//////////////////////////////////////////////////////// product images /////////////////////////////////////////////////
import ProductImage from "../assets/ProductImg.png"
import BurnerBox from "../assets/burner-box.png"

// You may like images
const productImages = ref([
  { src: ProductImage, alt: "Product img", title: "Mango Flavour", description: "Shape Shift" },
  { src: ProductImage, alt: "Product img", title: "Mango Flavour", description: "Shape Shift" },
  { src: ProductImage, alt: "Product img", title: "Mango Flavour", description: "Shape Shift" },
  { src: ProductImage, alt: "Product img", title: "Mango Flavour", description: "Shape Shift" },
]);

// Carousel items
const cartItems = ref([]);
const isCartOpen = ref(false);

const addToCart = () => {
  const product = {
    id: Date.now(),
    name: "Plant-Based Protein Powder 500g",
    image: "product-image.jpg", // Replace with actual product image
    price: 2750,
    quantity: quantity.value,
    flavor: selectedFlavor.value || "Default",
  };

  cartItems.value.push(product);
  isCartOpen.value = true; 
};

const removeFromCart = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id); 
};

const closeCart = () => {
  isCartOpen.value = false; // Close the cart popup
};

// Touch event handlers
const handleTouchStart = (event) => {
  startX.value = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
  endX.value = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  const diff = startX.value - endX.value;
  if (diff > 50) {
    activeIndex.value = (activeIndex.value + 1) % cartItems.value.length;
  } else if (diff < -50) {
    activeIndex.value = (activeIndex.value - 1 + cartItems.value.length) % cartItems.value.length;
  }
};

// Active carousel index
const activeIndex = ref(0);

// Touch event variables
const startX = ref(0);
const endX = ref(0);


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
const selectedFlavor = ref(null);

const selectFlavor = (flavor) => {
  selectedFlavor.value = flavor;
};

const quantity = ref(1);

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};

const increaseQuantity = () => {
  quantity.value++;
};

const sections = ref([
  { title: "Product Description", content: "Nutritional Shake Mix with Protein, Fiber, Probiotics. Enzymes. Vitamins & Minerals Shape Shift offers a delicious and nutritious meal replacement shake packed with high-quality protein and a comprehensive blend of 25 essential vitamins and minerals. It includes added dietary fibres. probiotics. enzymes. and plant-based nutrients, all without refined sugar. Food for special dietary use for weight control/management.", open: false },
  { title: "Key Benefits", content: "Key benefits here.", open: false },
  { title: "Recommended Usage Level", content: "Usage level here.", open: false },
  { title: "Ingredients", content: "Ingredients list here.", open: false },
  { title: "Allergen Info", content: "Allergen info here.", open: false },
  { title: "Attention", content: "Attention content here.", open: false },
  { title: "Storage", content: "Storage details here.", open: false },
  { title: "Nutritional Information", content: "Nutritional info here.", open: false },
]);

const toggleSection = (index) => {
  sections.value[index].open = !sections.value[index].open;
};

const cards = ref([
  {
    name: "Nancy",
    title: "45kg, 9 inches lost in 10 months",
    heading: "It was a very good experience",
    description: "Amazing results! Tasty shakes made weight loss simple and sustainable. Tasty shakes made weight loss simple and sustainable.Tasty shakes made weight loss simple and sustainable.",
    badge: "180.88",
    image: Review,
  },
  {
    name: "Nancy",
    title: "45kg, 9 inches lost in 10 months",
    heading: "It was a very good experience",
    description: "Amazing results! Tasty shakes made weight loss simple and sustainable. Tasty shakes made weight loss simple and sustainable.Tasty shakes made weight loss simple and sustainable.",
    image: Review,
  },
  {
    name: "Nancy",
    title: "45kg, 9 inches lost in 10 months",
    heading: "It was a very good experience",
    description: "Amazing results! Tasty shakes made weight loss simple and sustainable. Tasty shakes made weight loss simple and sustainable.Tasty shakes made weight loss simple and sustainable.",
    image: Review,
  },
  {
    name: "Nancy",
    title: "45kg, 9 inches lost in 10 months",
    heading: "It was a very good experience",
    description: "Amazing results! Tasty shakes made weight loss simple and sustainable. Tasty shakes made weight loss simple and sustainable.Tasty shakes made weight loss simple and sustainable.",
    image: Review,
  },
  {
    name: "Nancy",
    title: "45kg, 9 inches lost in 10 months",
    heading: "It was a very good experience",
    description: "Amazing results! Tasty shakes made weight loss simple and sustainable. Tasty shakes made weight loss simple and sustainable.Tasty shakes made weight loss simple and sustainable.",
    image: Review,
  },
]);

// Methods for navigation
const currentIndex = ref(0);
const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.value.length;
};

const prevCard = () => {
  currentIndex.value = (currentIndex.value - 1 + cards.value.length) % cards.value.length;
};

// Tab data
const tabs = ref([
  "Product Description",
  "Key Benefits",
  "Ingredients & Nutritional info",
  "Usage",
  "Attention",
]);

const activeTab = ref(0);
</script>

<style scoped></style>

<template>
  <section class="max-w-[100%] mx-auto">
    <section
      class="flex flex-col lg:flex-row justify-between items-start py-0 lg:py-8 space-y-6 lg:space-y-0 lg:space-x-[42px] page-width">
      <!-- Carousel for Small Devices -->
      <div class="lg:hidden">
        <div class="flex flex-row pl-[16px] py-[8px]">
          <p>
            <span style="line-height: normal;" class="text-[#727272] text-[11px] font-normal font-outfit">Shape
              Shift </span> <span style="line-height: normal;"
              class="text-[#727272] text-[11px] font-normal font-outfit">|</span>
            <span class="text-[#717171] text-[11px] font-semibold font-outfit">Meal Replacement for Weight Control/
              Management</span>
          </p>
        </div>
        <div id="custom-carousel" class="relative w-full block lg:hidden" @touchstart="handleTouchStart"
          @touchmove="handleTouchMove" @touchend="handleTouchEnd">
          <!-- Carousel Wrapper -->
          <div class="relative h-[464px] object-cover overflow-hidden">
            <!-- Carousel Items -->
            <div v-for="(item, index) in cartItems" :key="index" :class="{ hidden: index !== activeIndex }"
              class="duration-700 ease-in-out" :data-carousel-item="index === 0 ? 'active' : null">
              <img :src="item.src" :alt="item.alt"
                class="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          <!-- Slider Indicators -->
          <div class="absolute z-30 flex -translate-x-1/2 bottom-6 left-1/2 space-x-3 rtl:space-x-reverse"
            style="transform: translateX(-50%)">
            <button v-for="(item, index) in cartItems" :key="index" type="button" class="w-3 h-3 rounded-full"
              :aria-current="index === activeIndex ? 'true' : 'false'" :aria-label="'Slide ' + (index + 1)"
              @click="updateIndex(index)" :class="{
                'bg-[#606060]': index === activeIndex,
                'bg-[#FFFFFF]': index !== activeIndex,
              }"></button>
          </div>
        </div>


        <!-- Product Info Section -->
        <div class="bg-white px-[19px] pt-[19px] max-w-full mx-auto text-gray-800">
          <!-- Product Title -->
          <div class="text-start">
            <!-- <h1 style="line-height: normal;" class="text-[20px] text-black/85 font-normal font-outfit">Shape Shift</h1> -->
            <h2 class="text-[20px] text-black/85 font-light font-outfit">Plant-Based Protein Powder 500g</h2>
            <p class="text-[13px] text-black/85 font-normal font-outfit leading-[16px]">
              Meal Replacement for Weight Control/Management
            </p>
          </div>

          <!-- Product Info -->
          <div class="mt-2">
            <p class="text-[13px] text-[#202020] font-normal font-outfit"><span class="text-[13px]">Item:</span> MW0001
            </p>
            <p class="text-[13px] text-[#202020] font-normal font-outfit"><span
                class="text-[13px] text-black/85 font-normal font-outfit ">Net Quantity:</span class="text-[13px]"> 500g
            </p>
          </div>

          <!-- Price -->
          <div class="mt-4">
            <p class="text-[16px]"><span style="line-height: normal;"
                class="text-[#424242] text-base font-normal font-outfit">Rs. </span>
              <span style="line-height: normal;" class="text-[#424242] text-base font-bold font-outfit">2,750.00</span>
            </p>
            <p class="text-[13px] font-light font-outfit text-black/85">MRP (incl. of all taxes)</p>
          </div>

          <div class="flex flex-wrap justify-start items-center gap-2 pt-[31px]">
            <div v-for="flavor in flavors" :key="flavor" @click="selectFlavor(flavor)" :class="[
              'border px-2 text-center text-[14.90px] font-medium font-outfit cursor-pointer',
              selectedFlavor === flavor
                ? 'bg-[#414042] text-white'
                : 'text-black/85 hover:border-[#414042]'
            ]">
              {{ flavor }}
            </div>
          </div>

          <!-- Quantity Selector -->
          <div class="flex items-center gap-4 mt-6">
            <p style="line-height: normal;" class="text-[13px] font-normal font-outfit">Quantity:</p>
            <div class="flex items-center border border-black rounded-md px-[4px]">
              <!-- Decrease Quantity Button -->
              <button class="w-6 h-6 flex justify-center items-center text-gray-800" @click="decreaseQuantity"
                aria-label="Decrease quantity">
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="2" viewBox="0 0 9 2" fill="none"
                  class="w-4 h-4">
                  <path
                    d="M8.8125 0.4375H0.1875C0.0839062 0.4375 0 0.521406 0 0.625V1.375C0 1.47859 0.0839062 1.5625 0.1875 1.5625H8.8125C8.91609 1.5625 9 1.47859 9 1.375V0.625C9 0.521406 8.91609 0.4375 8.8125 0.4375Z"
                    fill="black" fill-opacity="0.85" />
                </svg>
              </button>

              <!-- Quantity Display -->
              <span class="text-base font-medium px-2">{{ quantity }}</span>

              <!-- Increase Quantity Button -->
              <button class="w-6 h-6 flex justify-center items-center text-gray-800" @click="increaseQuantity"
                aria-label="Increase quantity">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 11 7" fill="none"
                  class="w-4 h-4">
                  <path
                    d="M9.8125 3.00548H6.0625V0.156139C6.0625 0.077426 5.97859 0.0136719 5.875 0.0136719H5.125C5.02141 0.0136719 4.9375 0.077426 4.9375 0.156139V3.00548H1.1875C1.08391 3.00548 1 3.06924 1 3.14795V3.71782C1 3.79653 1.08391 3.86029 1.1875 3.86029H4.9375V6.70963C4.9375 6.78835 5.02141 6.8521 5.125 6.8521H5.875C5.97859 6.8521 6.0625 6.78835 6.0625 6.70963V3.86029H9.8125C9.91609 3.86029 10 3.79653 10 3.71782V3.14795C10 3.06924 9.91609 3.00548 9.8125 3.00548Z"
                    fill="black" fill-opacity="0.85" stroke="black" stroke-width="0.0234375" />
                </svg>
              </button>
            </div>
          </div>
          <!-- Add to Cart -->
          <div class="w-full flex gap-[14px] items-center mt-[24px] border-b border-[#ABABAB] pb-[32px]">
            <button class="w-[80%] h-10  bg-[#414042] text-white leading-[19.95px] font-medium font-outfit text-[16px]">
              Add to cart
            </button>
            <div class="w-[20%] h-10 border-[#414042] border-2 flex justify-center p-[5px]">
              <img :src="wishImg" alt="wishlist" class="w-[26px] h-[26px] object-cover">
            </div>
          </div>

          <div class="w-full flex justify-start gap-[54px] items-center py-[28px]">
            <div class="flex justify-between items-center gap-2">
              <button class="underline underline-offset-2">
                Share Product
              </button>
              <img src="../assets/share.svg" alt="share" class="w-[15px] h-[15px]">
            </div>
            <div class="flex justify-start  items-center gap-2 ">
              <button class="underline underline-offset-2">
                Download PDF
              </button>
              <img src="../assets/download.svg" alt="download" class="w-[15px] h-[15px]">
            </div>
          </div>


          <!-- Accordion Sections -->
          <div class="mt-6 space-y-4">
            <div v-for="(section, index) in sections" :key="index" class="border-b-[1px] border-[#353535]">
              <button style="line-height: normal;"
                class="w-full text-left text-[#353535] pt-[30px] pb-[8px] text-[16px] font-semibold font-outfit flex justify-between items-center"
                @click="toggleSection(index)">
                {{ section.title }}
                <span :class="{
                  'rotate-180': section.open,
                  'rotate-0': !section.open,
                }" class="transform transition-transform duration-200">
                  <i class="fas fa-chevron-down"></i>
                </span>
              </button>
              <div v-if="section.open"
                class="text-[16px] text-black/85 mt-2 pb-[20px] leading-[19.192px] tracking-[0.8px]">
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
          <div v-for="(item, index) in cartItems" :key="index" class="flex justify-center">
            <img :src="item.src" :alt="item.alt" class="object-cover w-full h-auto" />
          </div>
        </div>

        <!-- Second Column: Product Information -->
        <div class="w-full lg:w-[45%] space-y-0 px-[15px]">
          <!-- Breadcrumbs -->
          <div class="flex flex-row ">
            <p>
              <span class="text-[#717171] text-[8px] font-normal font-outfit">Home /</span>
              <span class="w-[66px] h-4 text-[#717171] text-[8px] font-normal font-['Outfit']">Meal Replacement/</span>
              <span class="w-[41px] h-4 text-[#717171] text-[8px] font-normal font-['Outfit']">Shape Shift/</span>
              <span class=" text-[#717171] text-[8px] font-normal font-outfit">Meal Replacement for Weight Control/
                Management</span>
            </p>
          </div>

          <!-- Product Title -->
          <h2 class="text-[20px] font-normal font-outfit text-black/85">
            Plant-Based Protein Powder 500g
          </h2>

          <p class="text-[14px] font-normal font-opacity tracking-[0.28px] leading-[21px] text-black/85">
            Meal Replacement for Weight Management
          </p>

          <div class="flex flex-col pt-[3px]">
            <p class="text-black/85 text-[14px] font-light font-outfit">
              Item: MW0001
            </p>
            <p class="text-black/85 text-[14px] font-light font-outfit">
              Net Quantity: 500g
            </p>
            <p style="line-height: normal" class="pt-[36px]">
              <span class="text-black/85 text-[20px] leading-normal font-normal font-outfit">Rs. </span><span
                class="text-black/85 text-[20px] font-bold font-outfit">2,750.00</span>
            </p>
            <p style="line-height: normal" class="text-black/85 text-[16px] font-light font-outfit">
              MRP (incl. of all taxes)
            </p>

          </div>

          <div class="pt-[40px]">
            <div class="flex flex-wrap justify-start items-center gap-2 pt-[31px]">
              <div v-for="flavor in flavors" :key="flavor" @click="selectFlavor(flavor)" :class="[
                'border px-2 text-center text-[14.90px] font-medium font-outfit cursor-pointer',
                selectedFlavor === flavor
                  ? 'bg-[#414042] text-white'
                  : 'text-black/85 hover:border-[#414042]'
              ]">
                {{ flavor }}
              </div>
            </div>

            <div class="flex items-center gap-4 mt-[34px]">
              <p style="line-height: normal;" class="text-[13px] font-normal font-outfit">Quantity:</p>
              <div class="flex items-center border border-black rounded-md px-[4px]">
                <!-- Decrease Quantity Button -->
                <button class="w-6 h-6 flex justify-center items-center text-gray-800" @click="decreaseQuantity"
                  aria-label="Decrease quantity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="2" viewBox="0 0 9 2" fill="none"
                    class="w-4 h-4">
                    <path
                      d="M8.8125 0.4375H0.1875C0.0839062 0.4375 0 0.521406 0 0.625V1.375C0 1.47859 0.0839062 1.5625 0.1875 1.5625H8.8125C8.91609 1.5625 9 1.47859 9 1.375V0.625C9 0.521406 8.91609 0.4375 8.8125 0.4375Z"
                      fill="black" fill-opacity="0.85" />
                  </svg>
                </button>

                <!-- Quantity Display -->
                <span class="text-base font-medium px-2">{{ quantity }}</span>

                <!-- Increase Quantity Button -->
                <button class="w-6 h-6 flex justify-center items-center text-gray-800" @click="increaseQuantity"
                  aria-label="Increase quantity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 11 7" fill="none"
                    class="w-4 h-4">
                    <path
                      d="M9.8125 3.00548H6.0625V0.156139C6.0625 0.077426 5.97859 0.0136719 5.875 0.0136719H5.125C5.02141 0.0136719 4.9375 0.077426 4.9375 0.156139V3.00548H1.1875C1.08391 3.00548 1 3.06924 1 3.14795V3.71782C1 3.79653 1.08391 3.86029 1.1875 3.86029H4.9375V6.70963C4.9375 6.78835 5.02141 6.8521 5.125 6.8521H5.875C5.97859 6.8521 6.0625 6.78835 6.0625 6.70963V3.86029H9.8125C9.91609 3.86029 10 3.79653 10 3.71782V3.14795C10 3.06924 9.91609 3.00548 9.8125 3.00548Z"
                      fill="black" fill-opacity="0.85" stroke="black" stroke-width="0.0234375" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="w-full flex justify-start gap-[13px] items-center mt-[24px]">
              <button
                class=" w-[333px] h-10 font-outfit bg-[#414042] px-[20px] text-white leading-[19.95px] font-bold text-[19.95px]">
                Add to cart
              </button>
              <div class="w-[47px] h-10 border-[#414042] border-2 flex justify-center p-[5px]">
                <img :src="wishImg" alt="wishlist" class="w-[26px] h-[26px] object-cover">
              </div>
            </div>



            <div class="w-[393px] flex justify-start gap-[54px] items-center border-b border-[#969696] py-[28px]">
              <div class="flex justify-between items-center gap-2">
                <button class="underline underline-offset-2">
                  Share Product
                </button>
                <img src="../assets/share.svg" alt="share" class="w-[15px] h-[15px]">
              </div>
              <div class="flex justify-start  items-center gap-2 ">
                <button class="underline underline-offset-2">
                  Download PDF
                </button>
                <img src="../assets/download.svg" alt="download" class="w-[15px] h-[15px]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!------------------------------------------------ Product Description Section ---------------------------------------------------------->
    <section class="page-width hidden lg:block">
      <div class="mt-[77px] flex flex-col items-center justify-center w-full max-w-[1124px] mx-auto">
        <!-- Tabs -->
        <div class="flex justify-start space-x-[78px] items-center w-full">
          <div v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
            class="relative cursor-pointer text-[#353535] text-[20px] hover:text-black">
            <div class="pb-[10px] border-b-2" :class="{
              'border-black text-shadow-custom': activeTab === index,
              'border-gray-300': activeTab !== index,
            }">
              <span>{{ tab }}</span>
            </div>
            <div v-if="activeTab === index"
              class="absolute top-1/2 right-[-28px] h-[6px] w-[6px] bg-black transform -translate-y-1/2 rounded-full">
            </div>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="w-full mt-6">
          <div v-if="activeTab === 0" class="flex flex-col sm:flex-row">
            <div class="flex-1 py-4  pr-[30px] ">

              <p class="text-[16px] text-black/85 mt-2 leading-[19.192px] tracking-[0.8px]">
                Nutritional Shake Mix with Protein, Fiber, Probiotics, Enzymes,
                Vitamins & Minerals Shape Shift offers a delicious and nutritious
                meal replacement shake packed with high-quality protein and a
                comprehensive blend of 25 essential vitamins and minerals. It
                includes added dietary fibers, probiotics, enzymes, and plant-based
                nutrients, all without refined sugar. Food for special dietary use
                for weight control/management.
              </p>
              <p class="text-[16px] text-black/85 mt-2 leading-[19.192px] tracking-[0.8px]">
                Nutritional Shake Mix with Protein, Fiber, Probiotics, Enzymes,
                Vitamins & Minerals Shape Shift offers a delicious and nutritious
                meal replacement shake packed with high-quality protein and a
                comprehensive blend of 25 essential vitamins and minerals. It
                includes added dietary fibers, probiotics, enzymes, and plant-based
                nutrients, all without refined sugar. Food for special dietary use
                for weight control/management.
              </p>
            </div>
            <div class="flex-1 p-4">
              <img src="../assets/product-description.png" alt="Product" class="rounded-md shadow" />
            </div>
          </div>
          <div v-if="activeTab === 1" class="flex flex-col sm:flex-row">
            <div class="flex-1 py-4  pr-[30px] ">

              <p class="text-[16px] text-black/85 mt-2 leading-[19.192px] tracking-[0.8px]">
                Nutritional Shake Mix with Protein, Fiber, Probiotics, Enzymes,
                Vitamins & Minerals Shape Shift offers a delicious and nutritious
                meal replacement shake packed with high-quality protein and a
                comprehensive blend of 25 essential vitamins and minerals. It
                includes added dietary fibers, probiotics, enzymes, and plant-based
                nutrients, all without refined sugar. Food for special dietary use
                for weight control/management.
              </p>

            </div>
            <div class="flex-1 p-4">
              <img src="../assets/product-description.png" alt="Product" class="rounded-md shadow" />
            </div>
          </div>
          <div v-if="activeTab === 2" class="flex flex-col sm:flex-row">
            <div class="flex-1 py-4  pr-[30px] ">

              <p class="text-[16px] text-black/85 mt-2 leading-[19.192px] tracking-[0.8px]">
                Nutritional Shake Mix with Protein, Fiber, Probiotics, Enzymes,
                Vitamins & Minerals Shape Shift offers a delicious and nutritious
                meal replacement shake packed with high-quality protein and a
                comprehensive blend of 25 essential vitamins and minerals. It
                includes added dietary fibers, probiotics, enzymes, and plant-based
                nutrients, all without refined sugar. Food for special dietary use
                for weight control/management.
              </p>
              <p class="text-[16px] text-black/85 mt-2 leading-[19.192px] tracking-[0.8px]">
                Nutritional Shake Mix with Protein, Fiber, Probiotics, Enzymes,
                Vitamins & Minerals Shape Shift offers a delicious and nutritious
                meal replacement shake packed with high-quality protein and a
                comprehensive blend of 25 essential vitamins and minerals. It
                includes added dietary fibers, probiotics, enzymes, and plant-based
                nutrients, all without refined sugar. Food for special dietary use
                for weight control/management.
              </p>
            </div>
            <div class="flex-1 p-4">
              <img src="../assets/product-description.png" alt="Product" class="rounded-md shadow" />
            </div>
          </div>
          <div v-if="activeTab === 3" class="flex flex-col sm:flex-row">
            <div class="flex-1 py-4  pr-[30px] ">

              <p class="text-[16px] text-black/85 mt-2 leading-[19.192px] tracking-[0.8px]">
                Nutritional Shake Mix with Protein, Fiber, Probiotics, Enzymes,
                Vitamins & Minerals Shape Shift offers a delicious and nutritious
                meal replacement shake packed with high-quality protein and a
                comprehensive blend of 25 essential vitamins and minerals. It
                includes added dietary fibers, probiotics, enzymes, and plant-based
                nutrients, all without refined sugar. Food for special dietary use
                for weight control/management.
              </p>

            </div>
            <div class="flex-1 p-4">
              <img src="../assets/product-description.png" alt="Product" class="rounded-md shadow" />
            </div>
          </div>
          <div v-if="activeTab === 4" class="flex flex-col sm:flex-row">
            <div class="flex-1 py-4  pr-[30px] ">

              <p class="text-[16px] text-black/85 mt-2 leading-[19.192px] tracking-[0.8px]">
                Nutritional Shake Mix with Protein, Fiber, Probiotics, Enzymes,
                Vitamins & Minerals Shape Shift offers a delicious and nutritious
                meal replacement shake packed with high-quality protein and a
                comprehensive blend of 25 essential vitamins and minerals. It
                includes added dietary fibers, probiotics, enzymes, and plant-based
                nutrients, all without refined sugar. Food for special dietary use
                for weight control/management.
              </p>
              <p class="text-[16px] text-black/85 mt-2 leading-[19.192px] tracking-[0.8px]">
                Nutritional Shake Mix with Protein, Fiber, Probiotics, Enzymes,
                Vitamins & Minerals Shape Shift offers a delicious and nutritious
                meal replacement shake packed with high-quality protein and a
                comprehensive blend of 25 essential vitamins and minerals. It
                includes added dietary fibers, probiotics, enzymes, and plant-based
                nutrients, all without refined sugar. Food for special dietary use
                for weight control/management.
              </p>
            </div>
            <div class="flex-1 p-4">
              <img src="../assets/product-description.png" alt="Product" class="rounded-md shadow" />
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="max-w-[1124px] mx-auto mt-[50px] lg:mt-20 px-4">
      <!-- Title Section -->
      <div class="flex justify-start lg:justify-center items-center">
        <h2 style="line-height: normal;"
          class="text-center text-black/85 font-outfit lg:text-[42px] text-[20px] font-semibold lg:font-normal">
          Often bought with
        </h2>
      </div>

      <!-- Products Section -->
      <div class="mt-12 flex justify-center items-center">
        <!-- Grid Container -->
        <div class="grid grid-cols-2 lg:grid-cols-2 gap-[14px] lg:gap-[134px]">
          <!-- Product 1 -->
          <div class="flex flex-col items-center">
            <!-- Image Container -->
            <div
              class="w-[175px] h-[175px] lg:w-[218px] lg:h-[307px] bg-white border border-gray-300 rounded overflow-hidden flex justify-center items-center">
              <img :src="BurnerBox" alt="Fat Burner Premix Powder"
                class="w-[127px] h-[125px] lg:w-[161px] lg:h-[159px] object-cover" />
            </div>

            <!-- Title -->
            <div class="max-w-[218px] flex justify-center">
              <span class="mt-4 lg:mt-[38px] text-center text-black/85 text-[16px] lg:text-[20px] font-normal">
                Fat Burner Premix Powder
              </span>
            </div>
          </div>

          <!-- Product 2 -->
          <div class="flex flex-col items-center">
            <!-- Image Container -->
            <div
              class="w-[175px] h-[175px] lg:w-[218px] lg:h-[307px] bg-white border border-gray-300 rounded overflow-hidden">
              <img :src="ProductImage" alt="Plant Based Protein Powder" class="w-full h-full object-cover" />
            </div>

            <!-- Title -->
            <div class="max-w-[218px] flex justify-center">
              <span class="mt-4 lg:mt-[38px] text-center text-black/85 text-[16px] lg:text-[20px] font-normal">
                Plant Based Protein Powder
              </span>
            </div>
          </div>
        </div>
      </div>


    </section>


    <!--\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ You may also like section \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->


    <section class="max-w-[1124px] mx-auto mt-[50px] lg:mt-20 px-4">
      <!-- Title Section -->
      <div class="flex justify-start lg:justify-center items-center">
        <h2 style="line-height: normal;"
          class="text-center text-black/85 font-outfit lg:text-[48px] text-[20px] font-semibold lg:font-normal">
          You may also like
        </h2>
      </div>

      <!-- Products Section -->
      <div class="mt-12">
        <!-- Grid Container -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-[14px] lg:gap-[33px]">
          <!-- Product Block -->

          <div v-for="(product, index) in productImages" :key="index" class="flex flex-col items-center">
            <!-- Image Container -->
            <div
              class="w-[175px] h-[175px] lg:w-[218px] lg:h-[307px] bg-white border border-gray-300 px-4 py-4 rounded overflow-hidden">
              <img :src="product.src" :alt="product.alt" class="w-full h-full object-cover" />
            </div>

            <!-- Product Description -->
            <span class="mt-4 text-center text-black/85 text-sm lg:text-lg font-normal">
              {{ product.description }}
            </span>

            <!-- Product Title -->
            <span class="text-center text-black/85 text-sm lg:text-lg font-normal">
              {{ product.title }}
            </span>
          </div>


        </div>
      </div>

    </section>

    <!------------------------------------------------------ Banner Section ------------------------------------------------------------->
    <section class="mt-[60px] lg:mt-[32px]">
      <div class="w-full h-auto relative">
        <img :src="BannerImage" alt="Banner" class="w-full object-cover opacity-90">
        <div class="absolute inset-0 bg-black/10"></div>
      </div>
    </section>
    <!------------------------------------------------------ card Section Section ------------------------------------------------------------->

    <section class="page-width">
      <div class="w-full flex justify-center py-[25px] lg:pt-[108px]">
        <div class="w-full max-w-full mx-auto relative px-4 pb-[82px]" @touchstart="handleCardTouchStart"
          @touchmove="handleTouchCardMove" @touchend="handleTouchCardEnd">
          <!-- Carousel Container -->
          <div class="flex justify-center items-center overflow-hidden p-2">
            <div class="flex transition-transform duration-500 lg:p-4 gap-[33px] lg:gap-[52.99px]"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }" style="width: 100%">
              <!-- Product Card -->
              <div v-for="(card, index) in cards" :key="index"
                class="w-[254px] h-auto lg:w-[331.01px] lg:h-auto flex-shrink-0 bg-white shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] rounded overflow-hidden">
                <div class="flex flex-col justify-between">
                  <!-- Image -->
                  <div class="flex items-center gap-[13px] flex-col">
                    <!-- Image -->
                    <img class="w-full h-auto object-cover" :src="card.image" alt="Avatar" />

                    <!-- Text container -->
                    <div class="flex flex-col items-start w-full pt-0 px-5">
                      <!-- Name -->
                      <div style="line-height: normal;"
                        class="text-black text-[13px] lg:text-[16px] font-bold font-outfit mb-0">
                        {{ card.name }}
                      </div>

                      <!-- Title -->
                      <span style="line-height: normal;"
                        class="text-black text-[11px] lg:text-[13px] font-light font-outfit">
                        {{ card.title }}
                      </span>
                    </div>
                  </div>

                  <!-- Description -->
                  <div style="line-height: normal;"
                    class="text-black pt-[10px] text-[13px] lg:text-[16px] leading-normal font-normal font-outfit whitespace-normal overflow-visible px-5 pb-[20px]">
                    "{{ card.description }}"
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="mt-[22px] sm:[22px] lg:mt-[84px] relative flex justify-between items-center">
            <!-- Previous Button -->
            <button :disabled="cards.length === 0"
              class="absolute left-[70px] lg:left-1/3 transform top-1/2 -translate-y-1/2" @click="prevCard">
              <img :src="prevbutton" alt="Previous" class="w-6 h-6" />
            </button>

            <!-- Navigation Dots -->
            <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
              <button v-for="(dot, index) in Math.ceil(cards.length)" :key="index" class="w-3 h-3 rounded-full"
                :aria-current="index === currentIndex ? 'true' : 'false'" :aria-label="'Slide ' + (index + 1)"
                @click="currentIndex = index" :class="{
                  'bg-[#515151]': index === currentIndex,
                  'bg-[#c4c4c4]': index !== currentIndex,
                }"></button>
            </div>

            <!-- Next Button -->
            <button :disabled="cards.length === 0"
              class="absolute right-[70px] lg:right-1/3 transform top-1/2 -translate-y-1/2" @click="nextCard">
              <img :src="nextbutton" alt="Next" class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
