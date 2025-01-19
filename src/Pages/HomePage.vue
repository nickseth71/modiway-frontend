<template>
  <section>
    <!-- Video Carousel Section -->
    <section id="video-carousel" class="relative w-full sm:h-auto lg:h-screen" style="max-height: fit-content;">
      <div class="relative w-full h-full">
        <div style="display: contents;" v-for="(media, index) in mediaItems" :key="index"
          class=" w-full h-auto duration-700 ease-in-out" v-show="index === currentIndex">
          <video v-if="media.type === 'video'" :src="media.src" muted autoplay playsinline
            class="block w-full h-full object-cover" @ended="nextSlide" />
        </div>
      </div>
      <!-- Carousel Indicators -->
      <div class="absolute bottom-3 lg:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span v-for="(media, index) in mediaItems" :key="index" @click="currentIndex = index"
          class="w-3 h-3 bg-white rounded-full cursor-pointer" :class="{
            'bg-opacity-50': currentIndex !== index,
            'bg-opacity-100': currentIndex === index,
          }"></span>
      </div>
    </section>



    <!-- Welcome Section -->
    <section class="flex justify-center items-center page-width">
      <div
        class="text-center text-[#292929] px-[16px] lg:pt-[32px] py-[55px] max-w-[814px] font-light font-outfit tracking-[0.6px] leading-[20px] lg:leading-[38px] text-[20px] lg:text-[30px]">
        <h1 class="pb-2 lg:pb-0">Welcome to a movement called the Modiway</h1>
        A transformative journey to spread joy, to make lives simpler, inspire
        positive change for body, mind and soul, and build a better world.
      </div>
    </section>

    <!-- Individual Image Sections -->

    <section v-for="(image, index) in imageItems" :key="index" :class="['', index === 1 ? 'bg-gray-100' : 'bg-white']"
      class="flex justify-center items-center">
      <div class=" flex flex-col justify-center items-center lg:items-start page-width ">
        <div class="top-0 lg:my-[-50px] " :class="{
          'flex flex-col justify-center items-center lg:flex-row-reverse lg:gap-6':
            index % 2 === 0,
          'flex flex-col items-center lg:flex-row lg:gap-6 ': index % 2 !== 0,
        }">
          <!-- Image with Title Overlay -->
          <div class="relative w-full lg:w-[500px] h-auto lg:h-auto lg:mb-0 lg:mr-[30px] ">
            <img :src="image.src" :alt="image.alt" class="w-full h-auto object-cover shadow-none duration-300" />
            <h3
              class="absolute inset-0 flex pl-[17px] py-6 items-start leading-6 tracking-[0.8px] justify-start text-white text-[32px] font-extralight font-outfit lg:text-5xl bg-black/15 whitespace-normal break-words line-clamp-3">
              {{ image.title }}
            </h3>
          </div>

          <!-- Description -->
          <div class="flex-1 flex justify-center items-start py-8" :class="{
            'lg:ml-[120px] lg:mr-[70px]': index % 2 === 0,
            'lg:mr-[120px] lg:ml-[100px]': index % 2 !== 0,
          }">
            <div class="pl-[17px]  lg:py-28 space-y-[15px] lg:space-y-[16px]">
              <h3 class="text-black/85 text-[26px] font-normal tracking-normal font-outfit">
                {{ image.heading }}
              </h3>

              <p :class="{
                 'max-h-full': !isMobile,
                 'max-h-[100px]': isMobile && !image.showFullDescription,
                 'overflow-hidden': isMobile && !image.showFullDescription,
                'transition-all duration-500 ease-out': true, 
              }" class="text-[rgba(0,0,0,0.85)] font-outfit text-[16px] font-extralight tracking-[0.5px] lg:leading-[21.59px] lg:text-[18px] lg:font-normal lg:tracking-[5%]">
                <span v-if="!isMobile || image.showFullDescription" class="font-light font-outfit">
                  {{ image.descriptionPart1 }}
                  <span :class="{
                    'block  opacity-100': image.showFullDescription, 
                    '': !image.showFullDescription,
                  }" class="block pt-[15px] pb-4 font-light font-outfit">
                    {{ image.descriptionPart2 }}
                  </span>
                </span>
                <span class="font-light font-outfit ease-in-out" v-if="isMobile && !image.showFullDescription">
                  {{ image.descriptionPart1 }}...
                </span>
              </p>


              <!-- Mobile Show More Button -->
              <button v-if="isMobile" @click="toggleText(image)"
                class="block lg:hidden bg-transparent text-gray-600 font-outfit text-[13px] hover:underline">
                {{ image.showFullDescription ? "- Show less" : "+ Show more" }}
              </button>
              <div class="flex justify-start items-center pb-[20px]">
                <button
                  class="inline-flex text-[13px] lg:text-[16px] px-[20px] py-[5px] items-center justify-center bg-[#414042] text-[#FFFFFF] font-outfit leading-none tracking-wide hover:scale-[1.03] ease-in-out hover:bg-black">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Second Section -->
    <div class="bg-gray-100">
      <section class="flex justify-center items-center page-width">
        <div
          class="pl-[17px] pr-[11px] lg:px-[20px] lg:py-[58px] py-[58px] text-center text-[rgba(0,0,0,0.85)] max-w-[878px] font-light lg:font-extralight font-outfit tracking-[0.6px] leading-[20px] lg:leading-[38px] text-[20px] lg:text-[30px]">
          Modiway is a future-forward direct-selling company. It offers the
          world’s best-designed, science- backed solutions and business
          opportunities to enhance your potential and make your dreams come
          true.
        </div>
      </section>
    </div>

    <!-- Business Opportunity Section -->
    <section>
      <div class="relative flex items-center justify-center lg:h-full sm:h-32 inset-0 bg-black/20">
        <img :src="businessOpportunity" alt="Business Opportunity"
          class="w-full h-[243px] lg:w-full lg:h-full object-cover" />
        <div class="absolute inset-0 flex flex-col items-start justify-center rounded-md p-4 page-width">
          <div
            class="text-[32px] max-w-180 sm:text-lg md:text-4xl lg:text-[48px] tracking-[2.24px] lg:tracking-[3.36px] leading-[32px] lg:leading-[42px] text-white font-extralight font-outfit ml-0 lg:ml-[50px] mb-2">
            Business <br />
            Opportunity
          </div>
          <div class="flex justify-center pt-[5px] pl-1">
            <button to="/business-opportunity"
              class="inline-flex items-start px-2.5 py-[5px] text-center bg-[#FFFFFFD9] text-[#2B2B2B] font-outfit font-normal text-[13px] ml-0 lg:ml-[50px] mt-0 lg:mt-[20px]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles and Resources Section -->
    <section class="mx-[28px] lg:mx-[20px] lg:my-8 my-8">
      <div class="flex flex-row justify-center items-center gap-[20px] lg:gap-10 page-width">
        <div class="text-start lg:text-center">
          <img :src="ArticleIMG" alt="Article Image"
            class="sm:w-[155.62px] sm:h-[134.98px] md:w-[503px] md:h-[436px] shadow-[inset_0px_100px_21.899999618530273px_0px_rgba(138,122,122,0.25)] sm:shadow-[inset_0px_100px_21.899999618530273px_0px_rgba(138,122,122,0.25)] md:shadow-[inset_0px_123px_20.899999618530273px_0px_rgba(141,134,134,0.25)]" />
          <button @click="navigateToBlogs"
            class="inline-flex items-center px-4 justify-center mt-[13px] text-center py-[5px] bg-[#414042] text-[#FFFFFF] text-[13px] lg:text-[15px] lg:mt-[24px]">
            Read Our Articles
          </button>
        </div>

        <div class="text-start lg:text-center">
          <img :src="ResourceIMG" alt="Resource IMG"
            class="sm:w-[159.62px] sm:h-[134.98px] md:w-[503px] md:h-[436px]" />
          <button @click="navigateToResource"
            class="inline-block mt-[13px] px-4 py-[5px] bg-[#414042] text-[#FFFFFF] text-[13px] lg:text-[15px] lg:mt-[24px]">
            Resources
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
const isMobile = ref(false);
// Import assets
import Thinkwellness from "@/assets/Thinkwellness.png";
import ThinkKitchen from "@/assets/ThinkKitchen.png";
import ThinkBeauty from "@/assets/ThinkBeauti.png";
import BusinessOpportunity from "@/assets/businessOpportunity.png";
import ResourceIMG from "@/assets/resources.png";
import ArticleIMG from "@/assets/Articles.png";

// Import FontAwesome
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  setup() {
    const router = useRouter();

    // Navigation functions
    const goToShopShift = () => {
      router.push("/shope-shift");
    };

    const navigateToBlogs = () => {
      router.push("/blogs");
    };
    const navigateToResource = () => {
      router.push("/resources");
    };

    // Media items (videos)
    const mediaItems = ref([
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2023/01/30/148597-794221559_large.mp4",
      },
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2022/11/22/140111-774507949_large.mp4",
      },
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2024/06/25/218213_large.mp4",
      },
    ]);

    // Image items
    const imageItems = ref([
      {
        src: Thinkwellness,
        alt: "Think Wellness",
        title: "Think Wellness",
        heading: "ShapeShift",
        descriptionPart1:
          "Backed by science, ShapeShift has been designed to balance your calorie intake, optimize nutrition, and support your transformation, every day.",
        descriptionPart2: "Whether it’s the nutrient-packed Meal Replacement Shake, the clean, powerful Plant-Based Protein, or the energizing Fat Burners, ShapeShift is designed to complement Indian diets, lifestyles, and tastes.",
        showFullDescription: false,
      },
      {
        src: ThinkKitchen,
        alt: "Think Kitchen",
        title: "Think Kitchen",
        heading: "SoulChef",
        descriptionPart1:
          "Soul Chef’s range of smart kitchen solutions combine design and innovation with the art of kitchen alchemy, blending form and function, beauty and utility.",
        descriptionPart2: " Every piece is thoughtfully designed with comfort and functionality at its core, ensuring everything finds its place and every moment feels seamless and enjoyable.",
        showFullDescription: false,
      },
      {
        src: ThinkBeauty,
        alt: "Think Beauty",
        title: "Think Beauty",
        heading: "Forest Nectar",
        descriptionPart1:
          "Beauty is the art of balance—caring for body, mind, and soul. When all three thrive, you don’t just look good, you feel good too."
        ,
        descriptionPart2: "At Forest Nectar, we believe in the power of nature to heal, rejuvenate, and inspire, harnessing the potent essence of Oudh, Coffee, and other carefully selected ingredients",

        showFullDescription: false,
      },
    ]);

    // Business opportunity image
    const businessOpportunity = BusinessOpportunity;

    // Slider functionality
    const currentIndex = ref(0);
    const isPlaying = ref(false);

    const prevSlide = () => {
      currentIndex.value =
        (currentIndex.value - 1 + mediaItems.value.length) %
        mediaItems.value.length;
    };

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % mediaItems.value.length;
    };

    const togglePlayPause = () => {
      isPlaying.value = !isPlaying.value;
      const videoElement = document.querySelector("video");
      if (videoElement) {
        isPlaying.value ? videoElement.play() : videoElement.pause();
      }
    };

    const toggleText = (image) => {
      image.showFullDescription = !image.showFullDescription;
    };

    const updateScreenSize = () => {
      isMobile.value = window.innerWidth <= 768;
    };
    onMounted(() => {
      updateScreenSize();
      window.addEventListener("resize", updateScreenSize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateScreenSize);
    });

    return {
      mediaItems,
      imageItems,
      currentIndex,
      isPlaying,
      prevSlide,
      nextSlide,
      togglePlayPause,
      businessOpportunity,
      ArticleIMG,
      ResourceIMG,
      toggleText,
      goToShopShift,
      navigateToBlogs,
      navigateToResource,
      isMobile,
    };
  },
};
</script>

<style scoped>
/* Optional styles here */
</style>
