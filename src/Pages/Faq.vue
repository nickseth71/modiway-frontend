<template>
  <section :class="['relative ', 'bg-white']">
    <div class="mx-auto">
      <!-- Image with Title Overlay -->
      <div class="relative w-full h-full">
        <img :src="FaqHeroImage" :alt="'Hero Image'" class="w-full h-full object-cover" />
      </div>
    </div>
  </section>
  <!--------------------------------------------- #22 jan------------------------------------------- -->
  <section class="page-width px-4 mb-4 lg:px-0">
    <div class="flex flex-row mt-[20px] justify-start">
      <div class="text-[#727272] text-[8px] lg:text-[12px] font-medium font-outfit hover:underline ">
        Home
      </div>
      <div class="text-[#727272] text-[8px] lg:text-[12px] font-light px-[5px] font-outfit">
        |
      </div>
      <div class="text-[#727272] text-[8px] lg:text-[12px] font-light font-outfit">
        FAQ
      </div>
    </div>

    <h1 class="text-[30px] lg:text-[48px] font-normal mb-0 lg:mb-8 mt-10 lg:mt-20 text-left">
      Frequently Asked Questions
    </h1>
    <!-- Accordion -->
    <div class="accordion-group [&_.accordion]:last:border-0" v-for="(faq, index) in faqs" :key="index"
      data-accordion="default-accordion">
      <div class="accordion border-b border-solid border-gray-300 py-4 transition duration-500 mb-4 pb-8">
        <button
          class="accordion-toggle group inline-flex items-center justify-between text-left text-[20px] lg:text-[36px] font-light w-full transition duration-500"
          aria-controls="basic-collapse-one-with-icon" @click="toggleAccordion(index)">
          <h5>{{ faq.question }}</h5>
          <svg v-if="isAccordionOpen[index]" width="20" height="20" viewBox="0 0 26 26" fill="none"
            class="rotate-180 transition duration-500 w-8" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1_4335" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="26"
              height="26">
              <rect x="26" width="26" height="26" transform="rotate(90 26 0)" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_4335)">
              <path
                d="M2.16537 8.69379L4.08828 6.77087L12.9987 15.6813L21.9091 6.77087L23.832 8.69379L12.9987 19.5271L2.16537 8.69379Z"
                fill="black" fill-opacity="0.85" />
            </g>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 26 26" fill="none" class="w-8"
            xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1_4335" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="26"
              height="26">
              <rect x="26" width="26" height="26" transform="rotate(90 26 0)" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_4335)">
              <path
                d="M2.16537 8.69379L4.08828 6.77087L12.9987 15.6813L21.9091 6.77087L23.832 8.69379L12.9987 19.5271L2.16537 8.69379Z"
                fill="black" fill-opacity="0.85" />
            </g>
          </svg>
        </button>
        <div ref="contentRefs" :data-index="index"
          class="overflow-hidden transition-[max-height] duration-300 ease-in-out" :style="{
            maxHeight: isAccordionOpen[index]
              ? contentHeights[index] + 'px'
              : '0',
          }" v-show="true">
          <p class="pt-3 pr-4 leading-[33px] text-[16px] lg:text-[26px] font-normal lg:font-light">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FaqHeroImage from "@/assets/faqhero.jpg";

export default {
  name: "faq",
  data() {
    return {
      FaqHeroImage,
      faqs: [
        {
          question: "Lorem ipsum dolor sit amet, consectetuer adipiscing ?",
          answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in ",
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetuer adipiscing ?",
          answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in ",
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetuer adipiscing ?",
          answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in ",
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetuer adipiscing ?",
          answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in ",
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetuer adipiscing ?",
          answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in ",
        },
        {
          question: "Lorem ipsum dolor sit amet, consectetuer adipiscing ?",
          answer:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in ",
        },
      ],
      isAccordionOpen: {},
      contentHeights: [],
    };
  },
  mounted() {
    this.calculateHeights(); // Calculate heights after rendering
    window.addEventListener("resize", this.calculateHeights); // Recalculate on resize
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.calculateHeights); // Cleanup listener
  },
  methods: {
    toggleAccordion(index) {
      if (this.isAccordionOpen[index]) {
        delete this.isAccordionOpen[index];
      } else {
        this.isAccordionOpen[index] = true; // Open accordion
      }
    },
    calculateHeights() {
      // Check if contentRefs exists and is an array
      if (this.$refs.contentRefs && Array.isArray(this.$refs.contentRefs)) {
        this.$refs.contentRefs.forEach((content, index) => {
          if (content) {
            // Save the scrollHeight for smooth transitions
            this.contentHeights[index] = content.scrollHeight;
          }
        });
      }
    },
  },
};
</script>
