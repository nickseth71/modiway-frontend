<template>
    <div v-if="isSearchOpen" class="fixed inset-0 bg-white flex flex-col z-[100]">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-[#F1F1F180] z-[100]">
            <!-- Close Button -->
            <button @click="toggleSearch" class="absolute right-8 top-4 text-black text-2xl">
                ✖
            </button>

            <!-- Search Input -->
            <div class="page-width flex justify-center">
                <div class="px-4 mt-14 lg:w-[917px]">
                    <div class="flex justify-center border-b border-[#000000] pb-2">
                        <input v-model="query" @input="searchProducts" type="text"
                            class="w-full bg-transparent text-gray-800 focus:outline-none text-xl" placeholder="Search"
                            @focus="showSuggestions = true" @blur="hideSuggestions" />
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Product List -->
            <div class="mt-6 w-full">
                <div class="flex flex-col justify-center items-center page-width">
                    <ul
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-4 w-full max-h-[500px] overflow-y-auto custom-scrollbar-hide">
                        <li v-for="(product, index) in filteredProducts" :key="index" :class="[
                            'flex w-full py-2',
                            (index === 0 || index % 2 === 0) ? 'bg-transparent' : 'bg-gray-100',
                            // product.name === 'Shape Shift Meal Replacement Powder 500g' ? 'bg-transparent' : ''
                        ]">
                            <div class="lg:w-[258px] bg-white lg:h-[302px]">
                                <img :src="product.image" alt="Product Image"
                                    class="w-full h-auto object-cover rounded-md" />
                            </div>
                            <div class="m-4 px-4 ">
                                <p>{{ product.title }}</p>
                                <p class="text-gray-800 font-semibold">{{ product.name }}</p>
                                <p class="text-gray-600">Rs. {{ product.price }}</p>
                                <button class="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Add to
                                    cart</button>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>
            <!-- Default Suggestions -->
            <div v-if="showSuggestions" class="mt-6 max-w-4xl mx-auto">
                <ul class="bg-transparent">
                    <li class="text-black/85 text-xl font-semibold font-outfit mb-2">Suggestions</li>
                    <li v-for="suggestion in defaultSuggestions" :key="suggestion"
                        class="text-black/85 cursor-pointer hover:bg-gray-100 p-2 rounded">
                        {{ suggestion }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import { injectSearchPopup } from "../compossable/useSearchPopup";
import { ref } from 'vue';

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
