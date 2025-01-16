<template>
  <section>
    <!-- Video Carousel Section -->
    <section id="video-carousel" class="relative w-full h-[557px] md:h-[600px] lg:h-[639px] overflow-hidden">
      <div class="relative w-full h-full overflow-hidden">
        <!-- Video Items -->
        <div v-for="(media, index) in mediaItems" :key="index"
          class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out" :class="{
            'opacity-100': index === currentIndex,
            'opacity-0': index !== currentIndex,
          }">
          <video v-if="media.type === 'video'" :src="media.src" muted autoplay playsinline loop
            class="block w-full h-full object-cover" />
        </div>

        <!-- Carousel Indicators -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button v-for="(media, index) in mediaItems" :key="index"
            class="w-3 h-3 rounded-full transition-colors duration-300" :class="{
              'bg-white': index === currentIndex,
              'bg-gray-500': index !== currentIndex,
            }" @click="goToSlide(index)"></button>
        </div>
      </div>
    </section>

    <!-- main Section -->
    <section class="page-width">
      <div class="flex flex-row mt-[20px] justify-center">
        <div class="text-black/85 text-[15px] font-light font-outfit">
          Home
        </div>
        <div class="text-black/85 text-[15px] font-semibold px-[5px] font-outfit">
          |
        </div>
        <div class="text-black/85 text-[15px] font-semibold font-outfit">
          ShapeShift
        </div>
      </div>
      <!-- Welcome Section -->
      <section class="py-0 lg:py-[32px] md:py-[16px] page-width">
        <div class="max-w-[992px] mx-auto text-center ">
          <div class="w-full flex flex-wrap justify-center items-end text-center space-x-[4px] mt-[5px] lg:mt-0">
            <span
              class="text-black/85 text-[20px] md:text-[24px] lg:text-[36px] font-normal font-outfit leading-[52px] tracking-[1.2px] lg:tracking-[2.16px] pt-[4px]">Join
              us for a</span>
            <span class="text-black/85 text-[24px] font-normal font-outfit leading-[67px] tracking-normal"></span>
            <span
              class="text-black/85 text-[28px] md:text-[32px] lg:text-[72px] font-medium font-outfit leading-[52px]  lg:leading-[80px]">90
              Day Challenge</span>
          </div>

          <div
            class="text-center text-black/85 text-[16px] md:text-[18px] lg:text-[20px] font-normal font-outfit leading-normal px-[19px] mt-0 lg:mt-5"
            style="line-height: normal">
            Join us for a transformative journey towards balanced wellness,
            weight loss, and weight management, The Science of ShapeShifting.
          </div>
        </div>
      </section>

      <!-- Sort and Filter Section -->
      <section class="page-width flex justify-center items-center pt-[35px] pb-[15px] lg:pt-[63px] md:py-[30px]">
        <div class="max-w-[1024px] flex justify-center items-center w-full px-[25px]">
          <div class="flex flex-col md:flex-row justify-between items-center w-full">
            <div class="flex flex-row justify-between md:justify-between lg:justify-start w-full gap-4 gray-bb">
              <!-- Filter Dropdown -->
              <div ref="filterDropdown" class="relative lg:order-2 order-1 hover-img">
                <div @click="toggleFilterDropdown"
                  class="cursor-pointer px-2 py-1 lg:px-3 flex items-center gap-1 rounded text-[11px] md:text-[13px] font-inter font-normal focus:ring-blue-500 focus:border-blue-500">
                  <img src="../assets/filter.png" class="lg:hidden sm:hidden" />
                  {{ selectedName.length > 0 ? selectedName.join(', ') : "Filter" }}
                  <i class="fas fa-chevron-down mobile-hide"></i>
                </div>
                <ul v-if="filterDropdownOpen"
                  class="absolute flex flex-col bg-white z-10 mt-1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px]">
                  <li v-for="name in categories" :key="name" @click="selectFilter(name)"
                    class="px-4 py-2 text-[16px] first:border-0 border-t border-black cursor-pointer hover:bg-gray-100 flex justify-between items-center font-roboto whitespace-nowrap border-opacity-25">
                    {{ name }}
                    <i v-if="selectedName.includes(name)" class="fas fa-times ml-2 text-red-500"></i>
                  </li>
                </ul>
              </div>

              <!-- Sort Dropdown -->
              <div ref="sortDropdown" class="relative g:order-1 order-2">
                <div @click="toggleSortDropdown"
                  class="cursor-pointer px-2 py-1 lg:px-3 rounded text-[11px] md:text-[13px] font-inter font-normal text-center focus:ring-blue-500 focus:border-blue-500">
                  {{
                    selectedSort === "asc"
                      ? "Low to High"
                      : selectedSort === "desc"
                        ? "High to Low"
                        : "Sort"
                  }}
                  <i class="fas fa-chevron-down"></i>
                </div>
                <ul v-if="sortDropdownOpen"
                  class="absolute flex flex-col justify-start bg-white z-20 mt-1 mx-auto sort-mob-pos shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px]">
                  <li @click="selectSort('')"
                    class="px-4 py-2 ps-8 cursor-pointer text-[16px] border-0 hover:bg-gray-100 flex items-center font-roboto whitespace-nowrap">
                    <i v-if="selectedSort === ''" class="fas fa-check mr-2 text-black absolute left-3"></i>
                    Best Seller
                  </li>
                  <li @click="selectSort('asc')"
                    class="px-4 py-2 ps-8 cursor-pointer text-[16px]  border-t border-black border-opacity-25 hover:bg-gray-100 flex items-center font-roboto whitespace-nowrap">
                    <i v-if="selectedSort === 'asc'" class="fas fa-check text-black absolute left-3"></i>
                    Low to High
                  </li>
                  <li @click="selectSort('desc')"
                    class="px-4 py-2 ps-8 cursor-pointer text-[16px]  border-t border-black border-opacity-25 hover:bg-gray-100 flex items-center font-roboto whitespace-nowrap">
                    <i v-if="selectedSort === 'desc'" class="fas fa-check mr-2 text-black absolute left-3"></i>
                    High to Low
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section class="page-width flex justify-center items-center px-[25px] mobile-p-fix">
        <!-- <div class="max-w-[992px] mx-auto"> -->
        <div @click="AddtoCartPage"
          class="max-w-[972px] w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[14px] lg:gap-[19px]">
          <div v-for="item in filteredSortedAndSearchedItems" :key="item.id"
            class=" lg:border border-transparent lg:hover:border-black transition duration-300">
            <div
              class="w-full lg:w-[312px] relative flex justify-center items-center cursor-pointer border border-[#DEDEDE] hover:border-transparent px-4 py-4 lg:py-0 mb-2">
              <img :src="item.src" alt="Item Image"
                class="w-[123px] h-[186px] lg:w-[312px] lg:h-[570px] object-cover transition-opacity duration-300" />
              <img :src="item.hoverSrc" alt="Hover Item Image"
                class="w-full h-full lg:w-[287px] lg:h-[545px] object-cover text-center absolute opacity-0 transition-opacity duration-300" />
            </div>
            <div class="max-w-[250px] pt-[10px] pb-[25px] lg:p-[19px] ">
              <p
                class="flex items-center space-x-1 text-black/85 truncate font-outfit font-light text-[11px] sm:text-[12px] md:text-[13px] lg:text-[16px]">
                <span :style="{ backgroundColor: getColorForName(item.category) }"
                  class="w-[15px] h-[15px] sm:w-[10px] sm:h-[10px] lg:w-[18px] lg:h-[18px] rounded-full inline-block"></span>
                <span>{{ item.category }}</span>
              </p>

              <p
                class="text-black/85 truncate w-[155px] lg:w-full font-outfit font-light text-[13px] md:text-[13px] lg:text-[19.95px] text-start">
                Shape Shift
              </p>

              <p
                class="text-black/85  w-[155px] lg:w-full font-outfit font-light text-[13px] md:text-[13px] lg:text-[19.95px] text-start">
                {{ item.replacement }}
              </p>
              <p class="pt-[3px]">
                <span class="text-black/90 text-[13px] lg:text-[20px] font-normal font-outfit">Rs.</span>
                <span class="text-black/85 text-[13px] lg:text-[20px] font-bold font-outfit">{{ item.price }}</span>
              </p>
              <p class="text-[11px] lg:text-[16px] font-light font-outfit">
                {{ item.tax }}
              </p>

              <button @click="AddtoCartPage"
                class="text-[13px] cursor-pointer lg:text-[19.95px] font-bold font-outfit underline decoration-black/30 mt-3 underline-offset-2">
                Add to Cart
              </button>
            </div>
          </div>

        </div>

        <div v-if="filteredSortedAndSearchedItems.length === 0" class="text-gray-500 text-center">
          No items found.
        </div>
        <!-- </div> -->
      </section>

      <section class=" py-4 md:py-6 lg:py-8">
        <Pagination :currentPage="currentPage" :totalPages="totalPages" @change-page="handlePageChange"
          class="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8" />
      </section>
    </section>
  </section>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import "@fortawesome/fontawesome-free/css/all.css";
import milkglass from "../assets/hoverimage.png";
import ProductImage from "../assets/ProductImg.png"

export default {
  setup() {
    const router = useRouter();
    const AddtoCartPage = () => {
      router.push("/add-cart");
    };

    const currentPage = ref(1);
    const totalPages = ref(68);
    const handlePageChange = (page) => {
      currentPage.value = page;
    };

    const mediaItems = ref([
      { type: "video", src: "https://cdn.pixabay.com/video/2022/02/24/108803-681686665_large.mp4" },
      { type: "video", src: "https://cdn.pixabay.com/video/2021/09/08/2066/2066-323539_large.mp4" },
      { type: "video", src: "https://cdn.pixabay.com/video/2022/03/01/7188/7188-595900_large.mp4" }
    ]);

    const currentIndex = ref(0);
    const goToSlide = (index) => (currentIndex.value = index);

    const colorMapping = {
      Banana: "#C7BFA4",
      Chocolate: "#A3764A",
      Kulfi: "#C09F6F",
      Mango: "#F2B422",
      Rasmalai: "#E0CFB0",
      Strawberry: "#DF84AA",
      RoseKheer: "#C97C7D",
      Vanilla: "#F9E4B5"
    };

    const items = ref([
      { id: 1, src: ProductImage, hoverSrc: milkglass, name: "Banana Caramel Flavour", replacement: "Meal Replacement Powder 500g", price: 1252.0, tax: "MRP (incl,of all taxes)", category: "Banana" },
      { id: 2, src: ProductImage, hoverSrc: milkglass, name: "Chocolate Flavour", replacement: "Meal Replacement Powder 500g", price: 1252.0, tax: "MRP (incl,of all taxes)", category: "Chocolate" },
      { id: 3, src: ProductImage, hoverSrc: milkglass, name: "Kulfi Flavour", replacement: "Meal Replacement Powder 500g", price: 500.0, tax: "MRP (incl,of all taxes)", category: "Kulfir" },
      { id: 4, src: ProductImage, hoverSrc: milkglass, name: "Mango flavour", replacement: "Meal Replacement Powder 500g", price: 1250.0, tax: "MRP (incl,of all taxes)", category: "Mango" },
      { id: 5, src: ProductImage, hoverSrc: milkglass, name: "Rasmalai Flavour", replacement: "Meal Replacement Powder 500g", price: 1252.0, tax: "MRP (incl,of all taxes)", category: "Rasmalai" },
      { id: 6, src: ProductImage, hoverSrc: milkglass, name: "Strawberry flavour", replacement: "Meal Replacement Powder 500g", price: 1252.0, tax: "MRP (incl,of all taxes)", category: "Strawberry" },
      { id: 7, src: ProductImage, hoverSrc: milkglass, name: "Rose-Kheer", replacement: "Meal Replacement Powder 500g", price: 250.0, tax: "MRP (incl,of all taxes)", category: "Rose-Kheer" },
      { id: 8, src: ProductImage, hoverSrc: milkglass, name: "Vanilla Flavour", replacement: "Meal Replacement Powder 500g", price: 1252.0, tax: "MRP (incl,of all taxes)", category: "Vanilla" }
    ]);

    const categories = ref([
      "Plant Protein", "Meal replacement shakes", "Tea", "Capsule"
    ]);

    const selectedName = ref([]);
    const filterDropdownOpen = ref(false);
    const selectedSort = ref("");
    const sortDropdownOpen = ref(false);
    const searchQuery = ref("");

    const filterDropdown = ref(null);
    const sortDropdown = ref(null);

    const filteredSortedAndSearchedItems = computed(() => {
      return items.value
        .filter((item) => {
          const matchCategory = selectedName.value.length === 0 || selectedName.value.includes(item.category);
          const matchSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || item.replacement.toLowerCase().includes(searchQuery.value.toLowerCase());
          return matchCategory && matchSearch;
        })
        .sort((a, b) => {
          if (selectedSort.value === "asc") return a.price - b.price;
          if (selectedSort.value === "desc") return b.price - a.price;
          return 0;
        });
    });

    const toggleFilterDropdown = () => {
      filterDropdownOpen.value = !filterDropdownOpen.value;
      sortDropdownOpen.value = false
    };

    const toggleSortDropdown = () => {
      sortDropdownOpen.value = !sortDropdownOpen.value;
      filterDropdownOpen.value = false;
    };

    const selectFilter = (name) => {
      if (selectedName.value.includes(name)) {
        selectedName.value = selectedName.value.filter((item) => item !== name);
      } else {
        selectedName.value.push(name);
      }
    };

    const selectSort = (sortOrder) => {
      selectedSort.value = sortOrder;
      sortDropdownOpen.value = false;
    };

    const clearFilters = () => {
      selectedName.value = [];
      filterDropdownOpen.value = false;
    };

    const getColorForName = (name) => {
      return colorMapping[name] || "#F2B422";
    };

    const handleClickOutside = (event) => {
      if (
        filterDropdown.value &&
        !filterDropdown.value.contains(event.target) &&
        sortDropdown.value &&
        !sortDropdown.value.contains(event.target)
      ) {
        filterDropdownOpen.value = false;
        sortDropdownOpen.value = false;
      }
    };

    // Add event listener when mounted
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    // Clean up event listener when unmounted
    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    // 

    return {
      filterDropdown, sortDropdown,
      currentPage, totalPages, handlePageChange, mediaItems, currentIndex, goToSlide, colorMapping, items, categories,
      selectedName, filterDropdownOpen, selectedSort, sortDropdownOpen, searchQuery, filteredSortedAndSearchedItems,
      toggleFilterDropdown, toggleSortDropdown, selectFilter, selectSort, clearFilters, getColorForName, AddtoCartPage
    };
  },
};
</script>

<style scoped>
/* CSS to handle hover effect */
.relative:hover img:nth-child(1) {
  opacity: 0;
  /* Hide the default image */
}

.relative:hover img:nth-child(2) {
  opacity: 1;
  /* Show the hover image */
}
</style>
