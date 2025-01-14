<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const readmore = () => {
    router.push("/blogs-article");
};

// Items with video URLs
const items = ref([
    {
        id: 1,
        videoUrl:"https://cdn.pixabay.com/video/2023/06/29/169349-841069126_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
    },
    {
        id: 2,
        videoUrl:"https://media.istockphoto.com/id/939047970/video/modern-contemporary-family-in-kitchen-making-breakfast.mp4?s=mp4-640x640-is&k=20&c=NnJta4_R_QszYTdvAcGjOIY2ThWpOmcqEip7VwALIss=",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer.",
    },
    {
        id: 3,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
    },
    {
        id: 4,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
    },
    {
        id: 4,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
    }, {
        id: 4,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
    },
    {
        id: 4,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
    },{
        id: 4,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
    },{
        id: 4,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
    },{
        id: 4,
        videoUrl: "https://cdn.pixabay.com/video/2019/06/23/24602-344986228_large.mp4",
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer",
    },
]);

// Pagination State
const currentPage = ref(1);
const totalPages = ref(68);

// Pagination handler
const handlePageChange = (page) => {
    currentPage.value = page;
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
    isModalOpen.value = false;
    selectedVideoUrl.value = "";
};
</script>

<template>
    <section>
        <!-- Video Listing -->
        <section class="page-width">
            <div class="container mx-auto px-3 lg:mt-[52px] mt-[]">
                <div class="grid gap-[15px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div v-for="item in items" :key="item.id" class="bg-white cursor-pointer"
                        @click="handleVideoClick(item.videoUrl)">
                        <div class="w-full h-[187.84px] sm:h-[220px] lg:w-[273px] lg:h-[302px]">
                            <video :src="item.videoUrl" class="w-full h-full object-cover" muted autoplay loop></video>
                        </div>
                        <div class="pt-[15px] lg:pt-[20px] pb-[50px] pr-[20px]">
                            <h3 class="text-start text-black/85 font-normal font-outfit text-[20px]  lg:text-[26px]">
                                {{ item.title }}
                            </h3>
                            <p
                                class=" text-black/85 text-start lg:pr-[20px] text-[16px] lg:text-[18px] font-normal font-outfit leading-[19.194px] tracking-[0.9px] lg:leading-[21px]">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pagination -->
        <section class="py-4 md:py-6 lg:py-8">
            <Pagination :currentPage="currentPage" :totalPages="totalPages" @change-page="handlePageChange"
                class="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8" />
        </section>

        <!-- Video Modal -->
        <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div class="bg-white w-[90%] max-w-3xl rounded-md overflow-hidden relative">
                <button @click="closeModal"
                    class="absolute cursor-pointer top-0 right-0 text-white bg-black/50 rounded-full w-10 h-10 flex text-[20px] lg:text-[25px] items-center justify-center z-50">
                    ✕
                </button>
                <video controls autoplay controlsList="nodownload" :src="selectedVideoUrl"
                    class="w-full h-[250px] lg:h-[500px] object-cover"></video>

            </div>
        </div>

    </section>
</template>
