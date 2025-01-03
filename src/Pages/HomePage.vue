<template>
  <section>
    <!-- Video Carousel Section -->
    <section id="video-carousel" class="relative w-full h-screen">
      <div class="relative w-full h-full">
        <div
          v-for="(media, index) in mediaItems"
          :key="index"
          class="absolute inset-0 w-full h-full duration-700 ease-in-out"
          v-show="index === currentIndex"
        >
          <video
            v-if="media.type === 'video'"
            :src="media.src"
            muted
            autoplay
            playsinline
            class="block w-full h-full object-cover"
            @ended="nextSlide"
          />
        </div>
      </div>

      <!-- Carousel Indicators -->
      <div
        class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2"
      >
        <span
          v-for="(media, index) in mediaItems"
          :key="index"
          @click="currentIndex = index"
          class="w-3 h-3 bg-white rounded-full cursor-pointer"
          :class="{
            'bg-opacity-50': currentIndex !== index,
            'bg-opacity-100': currentIndex === index,
          }"
        ></span>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="flex justify-center items-center page-width">
      <div
        class="text-center text-black/85 px-[16px] lg:py-[32px] py-[57px] max-w-[814px] font-light font-outfit tracking-[0.6px] leading-[20px] lg:leading-[38px] text-[20px] lg:text-[30px]"
      >
        <h1 class="pb-2 lg:pb-0">Welcome to a movement called the Modiway</h1>
        A transformative journey to spread joy, to make lives simpler, inspire
        positive change for body, mind and soul, and build a better world.
      </div>
    </section>

    <!-- Individual Image Sections -->

    <section
      v-for="(image, index) in imageItems"
      :key="index"
      :class="['relative', index === 1 ? 'bg-gray-100' : 'bg-white']"
      class="flex justify-center items-center"
    >
      <div
        class="flex flex-col justify-center items-center lg:items-start page-width"
      >
        <div
          :class="{
            'flex flex-col justify-center items-center lg:flex-row-reverse lg:gap-6':
              index % 2 === 0,
            'flex flex-col items-center lg:flex-row lg:gap-6': index % 2 !== 0,
          }"
        >
          <!-- Image with Title Overlay -->
          <div
            class="relative w-full lg:w-[500px] h-64 lg:h-[436px] mb-4 lg:mb-0 lg:mr-4 lg:ml-8"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover shadow-none duration-300"
            />
            <h3
              class="absolute inset-0 flex pl-[17px] py-6 items-start leading-6 tracking-[0.8px] justify-start text-white text-[32px] font-extralight font-outfit lg:text-5xl bg-black/15 whitespace-normal break-words line-clamp-3"
            >
              {{ image.title }}
            </h3>
          </div>

          <!-- Description -->
          <div
            class="flex-1 flex justify-center items-start py-8"
            :class="{
              'lg:ml-[200px] lg:mr-[90px]': index % 2 === 0,
              'lg:mr-[200px] lg:ml-[90px]': index % 2 !== 0,
            }"
          >
            <div
              class="pl-[17px] pr-[48px] lg:py-28 space-y-[15px] lg:space-y-[16px]"
            >
              <h3
                class="text-black/85 text-[26px] font-normal tracking-normal font-outfit"
              >
                {{ image.heading }}
              </h3>

              <p
                :class="{
                  'max-h-auto': !image.showFullDescription,
                  'max-h-full': image.showFullDescription,
                  'overflow-hidden': !image.showFullDescription,
                  'transition-all duration-300': true,
                }"
                class="text-[rgba(0,0,0,0.85)] font-outfit text-[16px] font-light tracking-[0.8px] leading-[119.952%] lg:text-[18px] lg:font-normal lg:tracking-[0.9px] lg:leading-normal"
              >
                {{ image.description }}
              </p>

              <button
                @click="toggleText(image)"
                class="bottom-0 left-0 bg-transparent text-gray-600 font-outfit text-[13px] hover:underline"
              >
                {{ image.showFullDescription ? "- Show less" : "+ Show more" }}
              </button>

              <div class="flex justify-start items-center pb-6">
                <button
                 @click="goToShopShift"
                  class="inline-flex text-[13px] px-2.5 py-[6px] items-center justify-center bg-[#414042] text-[#FFFFFF] font-outfit leading-none tracking-wide"
                >
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
          class="pl-[17px] pr-[11px] lg:px-[20px] lg:py-[58px] py-[58px] text-center text-[rgba(0,0,0,0.85)] max-w-[878px] font-light lg:font-extralight font-outfit tracking-[0.6px] leading-[20px] lg:leading-[38px] text-[20px] lg:text-[30px]"
        >
          Modiway is a future-forward direct-selling company. It offers the
          world’s best-designed, science- backed solutions and business
          opportunities to enhance your potential and make your dreams come
          true.
        </div>
      </section>
    </div>

    <!-- Business Opportunity Section -->
    <section>
      <div
        class="relative flex items-center justify-center lg:h-full sm:h-32 inset-0 bg-black/20"
      >
        <img
          :src="businessOpportunity"
          alt="Business Opportunity"
          class="w-full h-[243px] lg:w-full lg:h-full object-cover"
        />
        <div
          class="absolute inset-0 flex flex-col items-start justify-center rounded-md p-4 page-width"
        >
          <div
            class="text-[32px] max-w-180 sm:text-lg md:text-4xl lg:text-[48px] tracking-[2.24px] lg:tracking-[3.36px] leading-[32px] lg:leading-[42px] text-white font-extralight font-outfit ml-0 lg:ml-[50px] mb-2"
          >
            Business <br />
            Opportunity
          </div>
          <div class="flex justify-center pt-[5px] pl-1">
            <button
              to="/business-opportunity"
              class="inline-flex items-start px-2.5 py-[5px] text-center bg-[#FFFFFFD9] text-[#2B2B2B] font-outfit font-normal text-[13px] ml-0 lg:ml-[50px] mt-0 lg:mt-[20px]"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles and Resources Section -->
    <section class="mx-[28px] lg:mx-[20px] lg:my-8 my-8">
      <div
        class="flex flex-row justify-center items-center gap-[20px] lg:gap-10 page-width"
      >
        <div class="text-start lg:text-center">
          <img
            :src="ArticleIMG"
            alt="Article Image"
            class="sm:w-[155.62px] sm:h-[134.98px] md:w-[503px] md:h-[436px] shadow-[inset_0px_100px_21.899999618530273px_0px_rgba(138,122,122,0.25)] sm:shadow-[inset_0px_100px_21.899999618530273px_0px_rgba(138,122,122,0.25)] md:shadow-[inset_0px_123px_20.899999618530273px_0px_rgba(141,134,134,0.25)]"
          />
          <button
           @click="navigateToBlogs"
            class="inline-flex items-center px-2.5 justify-center mt-[13px] text-center py-[5px] bg-[#414042] text-[#FFFFFF] text-[13px] lg:text-[15px] lg:mt-[13px]"
          >
            Read Our Articles
          </button>
        </div>

        <div class="text-start lg:text-center">
          <img
            :src="ResourceIMG"
            alt="Resource IMG"
            class="sm:w-[159.62px] sm:h-[134.98px] md:w-[503px] md:h-[436px]"
          />
          <button
          @click="navigateToBlogs"
            class="inline-block mt-[13px] px-2.5 py-[5px] bg-[#414042] text-[#FFFFFF] text-[13px] lg:text-[15px] lg:mt-[13px]"
          >
            Resources
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

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
        description:
          "Backed by science, ShapeShift has been designed to balance your calorie intake, optimize nutrition, and support your transformation, every day.",
        showFullDescription: false,
      },
      {
        src: ThinkKitchen,
        alt: "Think Kitchen",
        title: "Think Kitchen",
        heading: "SoulChef",
        description:
          "Soul Chef’s range of smart kitchen solutions combine design and innovation with the art of kitchen alchemy, blending form and function, beauty and utility.",
        showFullDescription: false,
      },
      {
        src: ThinkBeauty,
        alt: "Think Beauty",
        title: "Think Beauty",
        heading: "Forest Nectar",
        description:
          "Beauty is the art of balance—caring for body, mind, and soul. When all three thrive, you don’t just look good, you feel good too.",
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

    // Toggle text visibility for image descriptions
    const toggleText = (image) => {
      image.showFullDescription = !image.showFullDescription;
    };

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
    };
  },
};
</script>


<style scoped>
/* Optional styles here */
</style>
