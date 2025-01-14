<template>
  <div v-if="isSearchOpen" class="fixed inset-0 bg-white flex flex-col z-[100]">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-[#F1F1F180] z-[100]">
      <!-- Close Button -->
      <button
        @click="toggleSearch"
        class="absolute right-2 lg:right-8 lg:top-4 text-black text-2xl"
      >
        ✖
      </button>

      <!-- Search Input -->
      <div class="page-width flex justify-center">
        <div class="lg:px-4 mt-14 lg:w-[917px]">
          <div class="flex justify-center border-b border-[#000000] pb-2">
            <input
              v-model="query"
              @input="searchProducts"
              type="text"
              class="w-full bg-transparent text-gray-800 focus:outline-none text-xl"
              placeholder="Search"
              @focus="showSuggestions = true"
              @blur="hideSuggestions"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-500 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Product List -->
      <div class="">
        <div class="mt-10 flex flex-col justify-center items-center">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-4 w-full max-h-[70vh] lg:max-h-[80vh] pb-[50px] overflow-y-auto custom-scrollbar-hide"
          >
            <div
              v-for="(product, index) in filteredProducts"
              :key="index"
              :class="[
                'flex w-full py-4 lg:py-[27px] px-4 sm:px-8 lg:px-52',
                index === 0 || index % 2 === 0
                  ? 'bg-transparent'
                  : 'bg-[#0000000D]',
              ]"
            >
              <div
                class="w-[130px] h-[120px] lg:w-[273px] lg:h-[302px] bg-white"
              >
                <img
                  :src="product.image"
                  alt="Product Image"
                  class="w-full h-full object-cover rounded-md"
                />
              </div>
              <div class="lg:my-[50px] px-4 sm:px-8 lg:px-10 lg:min-w-[650px]">
                <p
                  v-if="product.flavour"
                  class="flex justify-start items-center font-light gap-1"
                >
                  <span
                    class="w-[15px] h-[15px] lg:w-[27px] lg:h-[27px] rounded-full text-center bg-[#C7BFA4]"
                  ></span>
                  <span
                    style="line-height: normal"
                    class="text-black/85 text-[14px] lg:text-[24px]"
                    >{{ product.flavour }}</span
                  >
                </p>
                <p class="text-black/85 font-normal font-outfit lg:text-[36px]">
                  {{ product.name }}
                </p>
                <p
                  class="text-black/85 font-light font-outfit lg:text-[36px] truncate"
                >
                  {{ product.title }}
                </p>
                <p class="text-black/85">
                  <span
                    class="text-[18px] lg:text-[30px] font-outfit font-normal"
                    >Rs.</span
                  >
                  <span
                    class="text-[18px] lg:text-[36px] font-outfit font-bold"
                    >{{ product.price }}</span
                  >
                </p>
                <button
                  class="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Default Suggestions -->
      <div
        v-if="showSuggestions"
        class="mt-6 max-w-4xl mx-auto px-[15px] lg:px-0"
      >
        <div class="bg-transparent">
          <div class="text-black/85 text-xl font-semibold font-outfit mb-2">
            Suggestions
          </div>
          <div
            v-for="suggestion in defaultSuggestions"
            :key="suggestion"
            class="text-black/85 cursor-pointer"
          >
            {{ suggestion }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { injectSearchPopup } from "../compossable/useSearchPopup";
import { ref } from "vue";

export default {
  setup() {
    const {
      isSearchOpen,
      toggleSearch,
      query,
      filteredProducts,
      searchProducts,
    } = injectSearchPopup();

    const defaultSuggestions = [
      "Shirts",
      "Shoes",
      "Watches",
      "Electronics",
      "Accessories",
      "Home Decor",
    ];

    const showSuggestions = ref(true);

    const hideSuggestions = () => {
      setTimeout(() => {
        showSuggestions.value = false;
      }, 0);
    };

    return {
      isSearchOpen,
      toggleSearch,
      query,
      filteredProducts,
      searchProducts,
      defaultSuggestions,
      showSuggestions,
      hideSuggestions,
    };
  },
};
</script>

<style scoped>
.custom-scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.custom-scrollbar-hide {
  -ms-overflow-style: none;
  /* for Internet Explorer */
  scrollbar-width: none;
  /* for Firefox */
}
</style>
