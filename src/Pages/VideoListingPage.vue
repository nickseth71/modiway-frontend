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
 // Pagination State
 const currentPage = ref(1);
    const totalPages = ref(68);

    // Pagination handler
    const handlePageChange = (page) => {
      currentPage.value = page;
    };
</script>

<template>
  <section>
    


    <section class="page-width">
      <div class="container mx-auto px-3 lg:mt-[52px] mt-[]">
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
  
      <section class=" py-4 md:py-6 lg:py-8">
        <Pagination :currentPage="currentPage" :totalPages="totalPages" @change-page="handlePageChange"
          class="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8" />
      </section>
  

  </section>
</template>
