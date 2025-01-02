<template>
  <section>
    <!-- Video Carousel Section -->
    <section id="video-carousel" class="relative w-full h-screen">
      <div class="relative w-full h-full overflow-hidden">
        <!-- Video Items -->
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
            :autoplay="isPlaying"
            playsinline
            class="block w-full h-full object-cover"
            ref="video"
            @play="isPlaying = true"
            @pause="isPlaying = false"
            @ended="nextSlide"
          />
        </div>

        <!-- Video Control Buttons (Play/Pause) -->
        <div
          v-if="mediaItems[currentIndex].type === 'video' && !isPlaying"
          class="absolute inset-0 flex items-center justify-center"
        >
          <button
            @click="togglePlayPause"
            class="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full shadow-lg"
          >
            <i class="fas fa-play text-2xl"></i>
          </button>
        </div>

        <div
          v-if="mediaItems[currentIndex].type === 'video' && isPlaying"
          class="absolute inset-0 flex items-center justify-center"
        >
          <button
            @click="togglePlayPause"
            class="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full shadow-lg"
          >
            <i class="fas fa-pause text-2xl"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="lg:px-20 px-2 lg:py-8 py-5 mb=5">
      <h1 class="lg:text-[48px] text-center font-extralight">
        Think Life Differently
      </h1>
      <!-- <div class="text-center max-w-[820px] mx-auto font-extralight leading-[30px] text-[18px] lg:text-[24px] text-[#000000]">
        All our products are designed to make that happen, backed by technology, science, research, innovation, functionality and creativity
      </div> -->
      <!-- <h3 class="font-semibold text-center">-Samir K Modi</h3> -->
    </section>

    <section id="video-carousel" class="relative w-full h-screen">
      <div class="relative w-full h-full overflow-hidden">
        <!-- Video Items -->
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
            :autoplay="isPlaying"
            playsinline
            class="block w-full h-full object-cover"
            ref="video"
            @play="isPlaying = true"
            @pause="isPlaying = false"
            @ended="nextSlide"
          />
          <!-- <img
            v-else
            :src="media.src"
            alt="Media item"
            class="block w-full h-full object-cover"
          /> -->
        </div>

        <!-- Video Control Buttons (Play/Pause) -->
        <div
          v-if="mediaItems[currentIndex].type === 'video' && !isPlaying"
          class="absolute inset-0 flex items-center justify-center"
        >
          <button
            @click="togglePlayPause"
            class="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full shadow-lg"
          >
            <i class="fas fa-play text-2xl"></i>
          </button>
        </div>

        <div
          v-if="mediaItems[currentIndex].type === 'video' && isPlaying"
          class="absolute inset-0 flex items-center justify-center"
        >
          <button
            @click="togglePlayPause"
            class="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full shadow-lg"
          >
            <i class="fas fa-pause text-2xl"></i>
          </button>
        </div>
      </div>
    </section>

    <section class="lg:px-[291px] px-2 lg:py-[32px] py-5">
      <div
        class="text-center max-w-[820px] mx-auto font-extralight leading-[30px] text-[18px] lg:text-[24px] text-[#000000]"
      >
        Modiway is a future-forward direct-selling company. It offers the
        world’s best-designed, science-backed solutions and business opportunity
        to enhance your potential and make your dreams come true.
      </div>
      <!-- <h3 class="font-semibold text-center">-Samir K Modi</h3> -->
    </section>

    <!-- sections -->
    <div>
      <section
        v-for="(image, index) in imageItems"
        :key="index"
        :class="['relative  py-10', index === 1 ? 'bg-gray-100' : 'bg-white']"
      >
        <div class="container mx-auto lg:px-[160px]">
          <div
            :class="{
              'flex flex-col items-center lg:flex-row-reverse lg:gap-8':
                index % 2 === 0,
              'flex flex-col items-center lg:flex-row lg:gap-8':
                index % 2 !== 0,
            }"
            class="mb-8"
          >
            <!-- Image with Title Overlay -->
            <div
              class="relative w-full lg:w-[500px] h-64 lg:h-[436px] mb-4 lg:mb-0 lg:ml-6"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover"
              />
              <!-- Uncomment if you want the title overlay -->
              <!-- <h3
        class="absolute inset-0 flex px-7 py-4 items-start justify-start text-white font-light text-2xl bg-black/10 rounded-md"
      >
        {{ image.title }}
      </h3> -->
            </div>

            <!-- Description -->
            <div class="flex-1 justify-center items-start">
              <div class="px-[35.5px] lg:px-48 lg:py-28">
                <h3
                  class="text-[26px] lg:text-[48px] mb-2"
                >
                  {{ image.heading }}
                </h3>
                <p
                  class="text-[14px] lg:text-[20px] text-gray-700"
                >
                  {{ image.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    

    <!-- Business Opportunity Section -->
    <section>
      <div
        class="relative flex items-center justify-center lg:h-full sm:h-48 md:h-52"
      >
        <img
          :src="businessOpportunity"
          alt="Business Opportunity"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 flex flex-col items-center sm:items-end justify-center bg-black/20 rounded-md"
        >
          <h3
            class="text-xl sm:text-lg md:text-2xl lg:text-4xl xl:text-[48px] text-[#000000] font-extralight sm:mr-2 lg:mr-48 text-right sm:text-right"
          >
            Think <br />
            Community <br />
            Differently
          </h3>
          <router-link
            to="#"
            class="underline underline-offset-4 text-[#000000]  mr-6 lg:mr-[320px] text-lg sm:text-base mt-[20px] md:mr-12 text-center sm:text-left"
          >
            Learn More &gt;
          </router-link>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <Footer />
  </section>
</template>

<script>
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import ThinkChange from "@/assets/ThinkChange.png";
import ThinkSolution from "@/assets/ThinkSolution.png";
import ThinkFuture from "@/assets/ThinkFuture.png";
import ThinkCommunity from "@/assets/ThinkCommunity.png";
import ResourceIMG from "@/assets/resources.png";
import ArticleIMG from "@/assets/Articles.png";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  components: {
    Footer,
  },
  setup() {
    const mediaItems = ref([
      {
        type: "video",
        src: "https://videos.pexels.com/video-files/2544523/2544523-hd_1920_1080_24fps.mp4",
      },
      {
        type: "video",
        src: "https://cdn.pixabay.com/video/2022/11/22/140111-774507949_large.mp4",
      },
      // {
      //   type: "video",
      //   src: "https://cdn.pixabay.com/video/2024/06/25/218213_large.mp4",
      // },
    ]);

    const imageItems = ref([
      {
        src: ThinkChange,
        alt: "Think Change",
        heading: "Think Change Diffrently",
        description:
          "Our vision is to be a catalyst of change and personal growth, empowering everyone to think life differently.",
      },
      {
        src: ThinkSolution,
        alt: "Think Solution",
        heading: "Think Solution Differently",
        description:
          "Through innovation, science and creativity, we create everyday solutions for body, mind, and soul. ",
      },
      {
        src: ThinkFuture,
        alt: "Think Future",
        heading: "Think Future Differently",
        description:
          "Our mission is to spread joy, build a happy and healthy community, inspire change, and create a better world.",
      },
    ]);

    const businessOpportunity = ThinkCommunity;

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
      if (isPlaying.value) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
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
    };
  },
};
</script>

<style scoped>
/* Optional styles here */
</style>
