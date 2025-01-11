<template>
    <div v-if="isSearchOpen" class="fixed inset-0 top-0  bg-white bg-opacity-100 flex flex-col items-center">
        <div class="absolute right-0 left-0 top-10 w-full bg-white  ">
            <div class="flex bg-black items-center border-b border-gray-300 pb-2">
                <!-- Close Button -->
                <button @click="toggleSearch" class="text-gray-600 text-2xl mr-4">
                    ✖
                </button>
                <!-- Search Input -->
                <input v-model="query" @input="searchProducts" type="text"
                    class="flex-grow bg-black text-white focus:outline-none text-lg border border-gray-300"
                    placeholder="Search for products..." />

            </div>

            <!-- Suggestions and Results -->
            <div class="mt-4">
                <p class="text-gray-600 font-semibold">Suggestions:</p>
                <ul v-if="!query" class="mt-2">
                    <li v-for="(suggestion, index) in suggestions" :key="index" class="py-1">
                        {{ suggestion }}
                    </li>
                </ul>
                <div v-else>
                    <ul v-if="filteredProducts.length" class="mt-2">
                        <li v-for="(product, index) in filteredProducts" :key="index" class="py-1">
                            {{ product }}
                        </li>
                    </ul>
                    <p v-else class="text-gray-500 mt-2">No results found</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { injectSearchPopup } from "../compossable/useSearchPopup";

export default {
    setup() {
        const {
            isSearchOpen,
            toggleSearch,
            query,
            suggestions,
            filteredProducts,
            searchProducts,
        } = injectSearchPopup();

        return {
            isSearchOpen,
            toggleSearch,
            query,
            suggestions,
            filteredProducts,
            searchProducts,
        };
    },
};
</script>

<style scoped>
/* Add styles as needed */
</style>