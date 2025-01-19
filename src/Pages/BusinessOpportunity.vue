<template>
  <p
    class="text-left mt-0 px-2 mb-2 lg:hidden text-[#727272] text-[11px] font-normal"
  >
    Home |
    <span class="font-bold">Business Opportunity</span>
  </p>
  <section :class="['relative ', 'bg-white']">
    <div class="mx-auto">
      <!-- Image with Title Overlay -->
      <div class="relative w-full h-full">
        <img
          :src="HeroImage"
          :alt="'Hero Image'"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
  <div class="">
    <p
      class="text-center hidden lg:block mt-2 text-[#727272] text-[13px] font-normal"
    >
      Home |
      <span class="font-bold">Business Opportunity</span>
    </p>
    <!-- Top Section -->
    <section class="container mx-auto px-4 py-6 text-center">
      <p class="text-16 lg:text-[22px] font-light leading-relaxed">
        We’re creating a new way & redefining success by creating opportunities
        for everyone to shine.
        <br class="block lg:hidden" />
        Whether you’re a customer looking for top-quality products or an
        entrepreneur ready to build your dream business,
        <br class="hidden lg:block" />
        Modiway has The New Way for you!
        <br class="hidden lg:block" />
        Modiway is The New Way to feel joy, to feel empowered, to feel
        confident, to feel motivated, to feel inspired, to look
        <br class="hidden lg:block" />
        good, and thus feel positive and build a better world.
      </p>
    </section>

    <!-- More Reasons Section -->
    <section class="pt-8 bg-white">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl text-[36] lg:text-[48px] font-normal text-center mb-8 lg:mb-16"
        >
          More reason to join
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            v-for="(item, index, text, title) in reasons"
            :key="index"
            class="text-center"
          >
            <img :src="item.icon" class="mx-auto my-4 w-14 h-auto" />
            <p class="text-center mb-2 mt-6 text-[15px] font-medium">
              {{ item.title }}
            </p>
            <p
              class="font-light text-[15px] lg:max-w-[250px] px-24 lg:px-2 mx-auto"
            >
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-[#F9F9F9] mt-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="text-center"
          >
            <div class="mb-4 h-64 relative overflow-hidden">
              <img
                :src="feature.image"
                :alt="feature.title"
                class="w-full h-full object-cover"
              />
            </div>
            <h3
              class="text-[20px] lg:pl-6 text-left lg:text-[24px] font-normal mb-2 lg:mb-4"
            >
              {{ feature.title }}
            </h3>
            <p class="text-[15px] lg:pl-6 text-left lg:max-w-60 font-light">
              {{ feature.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h2
          class="text-3xl text-[36] lg:text-[48px] font-normal text-center mb-8 lg:mb-16"
        >
          3 ways to connect
        </h2>

        <div class="overflow-x-scroll bg-white">
          <table class="min-w-full divide-y divide-gray-200">
            <!-- Header -->
            <thead>
              <tr class="bg-[#272727]">
                <th
                  class="px-4 lg:px-6 py-4 text-left lg:text-[20px] text-[16px] font-medium border-r text-white border-[#BBB]"
                >
                  Benefits
                </th>
                <th
                  class="px-4 lg:px-6 py-4 text-left lg:text-[20px] break-words lg:max-w-full w-auto max-w-[80px] text-[16px] font-medium border-r text-white border-[#BBB]"
                >
                  Retail Customer
                </th>
                <th
                  class="px-4 break-words w-auto max-w-[80px] lg:max-w-full lg:px-6 py-4 text-left lg:text-[20px] text-[16px] font-medium border-r text-white border-[#BBB]"
                >
                  Preferred Customer
                </th>
                <th
                  class="px-4 lg:px-6 py-4 text-left lg:text-[20px] lg:max-w-full break-words w-auto max-w-[80px] text-[16px] font-medium border-r text-white border-[#BBB]"
                >
                  <span class="text-amber-400">Advisor</span>
                </th>
              </tr>
            </thead>

            <!-- Body -->
            <tbody class="divide-gray-200">
              <tr
                v-for="(benefit, index) in benefits"
                :key="index"
                :class="index % 2 === 0 ? ' bg-gray-50' : 'bg-white'"
              >
                <td class="px-2 lg:px-6 py-4 border-r border-[#BBB]">
                  <div class="space-y-1">
                    <p class="font-medium text-sm">
                      {{ benefit.title }}
                    </p>
                    <p class="text-sm font-normal text-[#272727]">
                      {{ benefit.description }}
                    </p>
                  </div>
                </td>
                <td
                  class="px-2 lg:px-6 py-4 text-center border-r break-words lg:max-w-full w-auto max-w-[80px] border-[#BBB]"
                >
                  <img
                    v-if="benefit.retail"
                    src="@/assets/icons/iconCheck.svg"
                    alt="iconCross"
                    class="h-auto w-4 lg:w-6 mx-auto"
                  />
                  <img
                    v-else
                    src="@/assets/icons/iconCross.svg"
                    alt="iconCross"
                    class="h-auto w-4 lg:w-6 text-red-500 mx-auto"
                  />
                </td>
                <td
                  class="px-2 lg:px-6 py-4 break-words w-auto max-w-[80px] lg:max-w-full text-center border-r border-[#BBB]"
                >
                  <img
                    v-if="benefit.preferred"
                    src="@/assets/icons/iconCheck.svg"
                    alt="iconCross"
                    class="h-auto w-4 lg:w-6 mx-auto"
                  />
                  <img
                    v-else
                    src="@/assets/icons/iconCross.svg"
                    alt="iconCross"
                    class="h-auto w-4 lg:w-6 text-red-500 mx-auto"
                  />
                </td>
                <td
                  class="px-2 lg:px-6 py-4 text-center border-r break-words w-auto max-w-[80px] border-[#BBB]"
                >
                  <img
                    v-if="benefit.advisor"
                    src="@/assets/icons/iconCheck.svg"
                    alt="iconCross"
                    class="h-auto w-4 lg:w-6 mx-auto"
                  />
                  <img
                    v-else
                    src="@/assets/icons/iconCross.svg"
                    alt="iconCross"
                    class="h-auto w-4 lg:w-6 text-red-500 mx-auto"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="py-6 px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl text-[36] lg:text-[48px] font-normal text-center mb-8 lg:mb-16"
      >
        Leave Your Details
      </h2>
      <div class="lg:px-10">
        <form @submit.prevent="handleSubmit" class="space-y-8">
          <!-- Name and Email -->
          <div class="grid gap-6 lg:gap-40 lg:grid-cols-2">
            <div class="space-y-2">
              <label for="fullName" class="block font-medium text-[20px]">
                Full Name
              </label>
              <input
                id="fullName"
                v-model="form.fullName"
                type="text"
                placeholder="Please Enter Full Name"
                class="w-full placeholder:font-thin placeholder:text-[15px] focus-within:outline-0 px-3 py-2 bg-[#0000000d]"
              />
            </div>
            <div class="space-y-2">
              <label for="email" class="block font-medium text-[20px]">
                E-mail Address
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Please Enter E-mail Address"
                class="w-full placeholder:font-thin placeholder:text-[15px] focus-within:outline-0 px-3 py-2 bg-[#0000000d]"
              />
            </div>
          </div>

          <!-- Phone and Text Permission -->
          <div class="grid gap-6 lg:gap-40 md:grid-cols-2">
            <div class="space-y-2">
              <label for="phone" class="block font-medium text-[20px]">
                Phone Number
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                placeholder="Phone Number"
                class="w-full placeholder:font-thin placeholder:text-[15px] focus-within:outline-0 px-3 py-2 bg-[#0000000d]"
              />
            </div>
            <div class="space-y-2">
              <label for="city" class="block font-medium text-[20px]">
                City
              </label>
              <select
                id="city"
                v-model="form.city"
                class="w-full h-[40px] text-[#9ca3af] font-thin text-[15px] focus-within:outline-0 px-3 py-2 bg-[#0000000d]"
              >
                <option value="">Select City</option>
                <option v-for="city in cities" :key="city" :value="city">
                  {{ city }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="justify-center text-white bg-[#272727] w-fit py-[5px] px-[10px] mx-auto text-[20px] lg:text-[32px] font-normal flex items-center gap-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Confetti Section -->
    <section
      class="min-h-[400px]  lg:py-20 py-5 flex h-full items-center relative overflow-hidden"
    >
      <div class="absolute inset-0">
        <img
          :src="confetti"
          :alt="confetti.alt"
          class="w-full h-full object-cover"
        />
      </div>

      <div
        class="container mx-auto px-4 flex flex-col md:flex-row items-center"
      >
        <div class="md:w-1/2 max-w-[450px] lg:mb-12 md:mb-0 relative z-10">
          <p
            class="text-[20px] lg:text-[25px] font-light mb-10 leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullam
          </p>
          <p
            class="border-b border-black font-normal text-[20px] lg:text-[25px] inline-block"
          >
            Lorem ipsum dolor sit
          </p>
        </div>
      </div>
    </section>

    <!-- Bottom Section -->
    <section class="py-16 hidden text-center bg-white">
      <div class="container mx-auto px-4">
        <h3 class="text-[20px] lg:text-[28px] font-extralight mb-4">
          Lorem ipsum
        </h3>
        <p class="text-[18px] font-thin leading-[18px] mb-4 max-w-2xl mx-auto">
          orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore
        </p>
        <h2 class="text-[35px] lg:text-[40px] font-extralight mb-16">
          Apply. Join. Earn
        </h2>
        <button
          type="submit"
          class="justify-center w-fit mx-auto text-[20px] lg:text-[32px] font-normal flex items-center gap-2"
        >
          <span class="border-b border-black">Join Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 23 24"
            fill="none"
          >
            <mask
              id="mask0_218_2627"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="23"
              height="24"
            >
              <rect y="0.529785" width="23" height="23" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_218_2627)">
              <path
                d="M7.69128 21.6132L5.99023 19.9122L13.8725 12.0299L5.99023 4.14757L7.69128 2.44653L17.2746 12.0299L7.69128 21.6132Z"
                fill="black"
                fill-opacity="0.85"
              />
            </g>
          </svg>
        </button>
      </div>
    </section>
    <section class="mx-auto container py-6 mt-20 mb-4 px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl text-[36] lg:text-[48px] font-normal text-center mb-8 lg:mb-16"
      >
        Frequently Asked Questions
      </h2>
      <!-- Accordion -->
      <div
        class="accordion-group [&_.accordion]:last:border-0"
        v-for="(faq, index) in faqs"
        :key="index"
        data-accordion="default-accordion"
      >
        <div
          class="accordion border-b border-solid border-gray-300 py-4 transition duration-500 mb-4 pb-8"
        >
          <button
            class="accordion-toggle group inline-flex items-center justify-between text-left text-[20px] lg:text-[36px] font-light w-full transition duration-500"
            aria-controls="basic-collapse-one-with-icon"
            @click="toggleAccordion(index)"
          >
            <h5>{{ faq.question }}</h5>
            <svg
              v-if="isAccordionOpen[index]"
              width="20"
              height="20"
              viewBox="0 0 26 26"
              fill="none"
              class="rotate-180 transition duration-500 w-8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1_4335"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="26"
                height="26"
              >
                <rect
                  x="26"
                  width="26"
                  height="26"
                  transform="rotate(90 26 0)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1_4335)">
                <path
                  d="M2.16537 8.69379L4.08828 6.77087L12.9987 15.6813L21.9091 6.77087L23.832 8.69379L12.9987 19.5271L2.16537 8.69379Z"
                  fill="black"
                  fill-opacity="0.85"
                />
              </g>
            </svg>
            <svg
              v-else
              width="20"
              height="20"
              viewBox="0 0 26 26"
              fill="none"
              class="w-8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1_4335"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="26"
                height="26"
              >
                <rect
                  x="26"
                  width="26"
                  height="26"
                  transform="rotate(90 26 0)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_1_4335)">
                <path
                  d="M2.16537 8.69379L4.08828 6.77087L12.9987 15.6813L21.9091 6.77087L23.832 8.69379L12.9987 19.5271L2.16537 8.69379Z"
                  fill="black"
                  fill-opacity="0.85"
                />
              </g>
            </svg>
          </button>
          <div
            ref="contentRefs"
            :data-index="index"
            class="overflow-hidden transition-[max-height] duration-300 ease-in-out"
            :style="{
              maxHeight: isAccordionOpen[index]
                ? contentHeights[index] + 'px'
                : '0',
            }"
            v-show="true"
          >
            <p
              class="pt-3 pr-4 leading-[33px] text-[16px] lg:text-[26px] font-normal lg:font-light"
            >
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BusinessOpportunity",
  data() {
    return {
      HeroImage,
      reasons,
      features,
      confetti,
      benefits,
      cities: ["City 1", "City 2", "City 3"],
      form,
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
      isAccordionOpen: {}, // Tracks open/closed state
      contentHeights: [], // Stores calculated heights of FAQ answers
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
        delete this.isAccordionOpen[index]; // Close accordion
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
import icon1 from "@/assets/icons/icon1.svg";
import icon2 from "@/assets/icons/icon2.svg";
import icon3 from "@/assets/icons/icon3.svg";
import icon4 from "@/assets/icons/icon4.svg";

import HeroImage from "@/assets/hero.jpg";
import features_image1 from "@/assets/1.jpg";
import features_image2 from "@/assets/2.jpg";
import features_image3 from "@/assets/3.jpg";
import confetti from "@/assets/confetti.jpg";
const reasons = [
  {
    icon: icon1,
    text: "Earn with incentives, rewards & get 5 payouts per month",
    title: "5 Ways to Earn",
  },
  {
    icon: icon2,
    text: "Get loyalty rewards for life and redeem rewards against free products.",
    title: "Rewards For Life",
  },
  {
    icon: icon3,
    text: "30-day money back guarantee if you don’t love the products.",
    title: "Love-it Guarantee",
  },
  {
    icon: icon4,
    text: "Innovative solutions to enhance your overall well-being.",
    title: "High Quality Products",
  },
];

const features = [
  {
    title: "Community",
    image: features_image1,
    text: "Be part of a supportive network of like-minded individuals. Never on your own, you have people to support you in The New Way",
  },
  {
    title: "Flexibility",
    image: features_image2,
    text: "Work on your own terms, work at your own pace.  You choose how much effort to devote or what schedule to follow.",
  },
  {
    title: "Resources",
    image: features_image3,
    text: "Get access to business tools & reports to support your business and drive your growth.",
  },
];
const benefits = [
  {
    title: "Product Discounts:",
    description: "25% off retail prices",
    retail: false,
    preferred: true,
    advisor: true,
  },
  {
    title: "Loyalty Rewards Program:",
    description:
      "Receive 10-25% of orders back in points redeemable for free product",
    retail: false,
    preferred: true,
    advisor: true,
  },
  {
    title: "Free Product:",
    description:
      "Place a monthly order over 3750 CV and receive a free product of the month",
    retail: false,
    preferred: true,
    advisor: true,
  },
  {
    title: "Personal Website:",
    description:
      "Receive a personal website that can be used if you would like to share essential oils with others",
    retail: false,
    preferred: false,
    advisor: true,
  },
  {
    title: "Bonuses & Compensation:",
    description:
      "Modiway provides a business opportunity for those interested in creating an income",
    retail: false,
    preferred: false,
    advisor: true,
  },
];
import { reactive } from "vue";

const form = reactive({
  fullName: "",
  email: "",
  phone: "",
  allowText: false,
  pincode: "",
  city: "",
  state: "",
  selectedCategories: [],
  comments: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", form);
};
</script>
