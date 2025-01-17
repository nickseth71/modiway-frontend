<script setup>
import { ref, computed } from "vue";

// Items with video URLs
const items = ref([
    {
        id: 1,
        videoUrl: "https://cdn.pixabay.com/video/2023/06/29/169349-841069126_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
        category: "Category A",
    },
    {
        id: 2,
        videoUrl:
            "https://media.istockphoto.com/id/939047970/video/modern-contemporary-family-in-kitchen-making-breakfast.mp4?s=mp4-640x640-is&k=20&c=NnJta4_R_QszYTdvAcGjOIY2ThWpOmcqEip7VwALIss=",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer.",
        category: "Category B",
    },
    {
        id: 3,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
        category: "Category A",
    },
    {
        id: 4,
        videoUrl:
            "https://media.istockphoto.com/id/939047970/video/modern-contemporary-family-in-kitchen-making-breakfast.mp4?s=mp4-640x640-is&k=20&c=NnJta4_R_QszYTdvAcGjOIY2ThWpOmcqEip7VwALIss=",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer.",
        category: "Category B",
    },

    {
        id: 5,
        videoUrl: "https://cdn.pixabay.com/video/2023/06/29/169349-841069126_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
        category: "Category B",
    },
    {
        id: 6,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
        category: "Category A",
    }, {
        id: 7,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
        category: "Category B",
    }, {
        id: 8,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
        category: "Category A",
    }, {
        id: 9,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
        category: "Category B",
    },
]);
// Pagination State

const currentPage = ref(1);
const totalPages = ref(68);

// Pagination handler
const handlePageChange = (page) => {
    currentPage.value = page;
};

// State variables
const selectedCategory = ref("All");
const selectedSortOrder = ref("");
const filterDropdownOpen = ref(false);
const sortDropdownOpen = ref(false);

// Categories for the filter dropdown
const categories = ["All", "Category A", "Category B"];

// Computed filtered and sorted items
const filteredAndSortedItems = computed(() => {
    let filteredItems = items.value;

    // Filter by category
    if (selectedCategory.value !== "All") {
        filteredItems = filteredItems.filter(
            (item) => item.category === selectedCategory.value
        );
    }

    // Sort by title (as an example)
    if (selectedSortOrder.value === "asc") {
        filteredItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSortOrder.value === "desc") {
        filteredItems.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filteredItems;
});

// Dropdown toggle functions
const toggleFilterDropdown = () => {
    filterDropdownOpen.value = !filterDropdownOpen.value;
};

const toggleSortDropdown = () => {
    sortDropdownOpen.value = !sortDropdownOpen.value;
};
// Select filter and sort options
const selectFilter = (category) => {
    selectedCategory.value = category;
    filterDropdownOpen.value = false;
};

const selectSortOrder = (sortOrder) => {
    selectedSortOrder.value = sortOrder;
    sortDropdownOpen.value = false;
};

// Modal state
const isModalOpen = ref(false);
const selectedVideoUrl = ref("");

// Handle video click
const handleVideoClick = (videoUrl) => {
    selectedVideoUrl.value = videoUrl;
    isModalOpen.value = true;
};

// Close modal
const closeModal = () => {
    console.log("closeModal triggered");
    isModalOpen.value = false;
    selectedVideoUrl.value = "";
};


</script>

<template>
    <section class="page-width px-[15px]">
        <div class="flex flex-row mt-3 ">
            <span class="text-black/85 text-[12px] font-outfit font-normal">Home</span>
            <span class="text-black/85 text-[10px] px-[5px] font-outfit font-normal">|</span>
            <span class="text-black/85 text-[12px] font-outfit font-semibold">Resources</span>
        </div>
        <section class="page-width flex justify-center items-center pt-[35px] pb-[15px] lg:pt-[63px] md:py-[30px]">

            <div class="max-w-full flex justify-center items-center w-full">
                <div class="flex flex-col md:flex-row justify-between items-center w-full">
                    <div class="flex flex-row justify-between md:justify-between lg:justify-start w-full gap-4 gray-bb">
                        <!-- Filter Dropdown -->
                        <div class="relative lg:order-2 order-1 hover-img">
                            <div @click="toggleFilterDropdown"
                                class="cursor-pointer px-2 py-1 lg:px-3 flex items-center gap-1 rounded text-[11px] md:text-[13px] font-inter font-normal focus:ring-blue-500 focus:border-blue-500">
                                <img src="../assets/filter.png" class="lg:hidden sm:hidden" />
                                {{ selectedCategory || "Filter" }}
                                <i class="fas fa-chevron-down mobile-hide"></i>
                            </div>
                            <ul v-if="filterDropdownOpen"
                                class="absolute flex flex-col bg-white z-10 mt-1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px]">
                                <li v-for="name in categories" :key="name" @click="selectFilter(name)"
                                    class="px-4 py-2 text-[16px] first:border-0 border-t border-black cursor-pointer hover:bg-gray-100 flex items-center font-roboto whitespace-nowrap border-opacity-25">
                                    <i v-if="selectedCategory === name" class="fas fa-check mr-2 text-green-500"></i>
                                    {{ name }}
                                </li>
                            </ul>
                        </div>

                        <!-- Sort Dropdown -->
                        <div class="relative g:order-1 order-2">
                            <div @click="toggleSortDropdown"
                                class="cursor-pointer px-2 py-1 lg:px-3 rounded text-[11px] md:text-[13px] font-inter font-normal text-center focus:ring-blue-500 focus:border-blue-500">
                                {{
                                    selectedSortOrder === "asc"
                                        ? "Low to High"
                                        : selectedSortOrder === "desc"
                                            ? "High to Low"
                                            : "Sort"
                                }}
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            <ul v-if="sortDropdownOpen"
                                class="absolute flex flex-col justify-start bg-white z-20 mt-1 mx-auto sort-mob-pos shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px]">
                                <li @click="selectSortOrder('')"
                                    class="px-4 py-2 ps-8 cursor-pointer text-[16px] border-0 hover:bg-gray-100 flex items-center font-roboto whitespace-nowrap">
                                    <i v-if="selectedSortOrder === ''"
                                        class="fas fa-check mr-2 text-black absolute left-3"></i>
                                    Best Seller
                                </li>
                                <li @click="selectSortOrder('asc')"
                                    class="px-4 py-2 ps-8 cursor-pointer text-[16px] border-t border-black border-opacity-25 hover:bg-gray-100 flex items-center font-roboto whitespace-nowrap">
                                    <i v-if="selectedSortOrder === 'asc'"
                                        class="fas fa-check text-black absolute left-3"></i>
                                    Low to High
                                </li>
                                <li @click="selectSortOrder('desc')"
                                    class="px-4 py-2 ps-8 cursor-pointer text-[16px] border-t border-black border-opacity-25 hover:bg-gray-100 flex items-center font-roboto whitespace-nowrap">
                                    <i v-if="selectedSortOrder === 'desc'"
                                        class="fas fa-check mr-2 text-black absolute left-3"></i>
                                    High to Low
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Video Listing -->
        <section class="page-width">
            <div class=" mx-auto lg:mt-[52px]">
                <div class="grid gap-[15px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div v-for="item in filteredAndSortedItems" :key="item.id" class="bg-white cursor-pointer"
                        @click="handleVideoClick(item.videoUrl)">
                        <div class="w-full h-[187.84px] sm:h-[220px]  lg:h-[302px]">
                            <video :src="item.videoUrl" class="w-full h-full object-cover"></video>
                        </div>
                        <div class="pt-[15px] lg:pt-[20px] pb-[50px] pr-[20px]">
                            <h3 class="text-start text-black/85 font-normal font-outfit text-[20px] lg:text-[26px]">
                                {{ item.title }}
                            </h3>
                            <p
                                class="text-black/85 text-start lg:pr-[20px] text-[16px] lg:text-[18px] font-normal font-outfit leading-[19.194px] tracking-[0.9px] lg:leading-[21px]">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Pagination -->
        <section class=" py-4 md:py-6 lg:py-8">
            <Pagination :currentPage="currentPage" :totalPages="totalPages" @change-page="handlePageChange"
                class="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8" />
        </section>

        <!-- Modal -->
        <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div
                class="relative rounded-sm w-[90%] max-w-4xl h-auto max-h-[80vh] overflow-hidden sm:w-[95%] sm:h-[60vh] lg:w-[70%] lg:h-[70%]">
                <!-- Close Button -->
                <button @click.stop="closeModal"
                    class="absolute top-2 right-2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition duration-200 z-50"
                    aria-label="Close Modal">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 384 512"
                        aria-hidden="true">
                        <path
                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </button>

                <!-- Video Element -->
                <video :src="selectedVideoUrl" class="w-full h-full object-cover" controls autoplay
                    controlsList="nodownload noplaybackrate nofullscreen" @contextmenu.prevent>
                </video>
            </div>

        </div>






    </section>
</template>
