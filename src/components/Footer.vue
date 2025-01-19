<template>
  <footer class="py-4">
    <div
      class="max-w-full px-[15px] lg:px-2 flex flex-wrap justify-center items-center lg:flex-row text-center bg-gray-100 py-[20px] lg:py-12 gap-[25px] lg:gap-12"
    >
      <div class="responsive-item">
        <h4
          class="text-black/85 text-base lg:text-[20px] font-outfit font-semibold leading-tight pb-[4.91px] lg:pb-[15px]"
        >
          Free Delivery
        </h4>
        <p
          class="text-[13px] lg:text-lg text-center font-light font-outfit text-black/85 leading-[15.605px] tracking-[0.65px] lg:leading-[21.607px] lg:tracking-[0.9px]"
        >
          On orders of Rs. 2999 or more
        </p>
      </div>
      <div class="responsive-item">
        <h4
          class="text-black/85 text-base lg:text-[20px] font-outfit font-semibold leading-tight pb-[4.91px] lg:pb-[15px]"
        >
          Shop with Confidence
        </h4>
        <p
          class="text-[13px] lg:text-lg text-center font-light font-outfit text-black/85 leading-[15.605px] tracking-[0.65px] lg:leading-[21.607px] lg:tracking-[0.9px]"
        >
          With our 2-year guarantee
        </p>
      </div>
      <div class="responsive-item last-item">
        <h4
          class="text-black/85 text-base lg:text-[20px] font-outfit font-semibold leading-tight pb-[4.91px] lg:pb-[15px]"
        >
          Love-it Guarantee
        </h4>
        <p
          class="text-[13px] lg:text-[18px] text-center font-light font-outfit text-black/85 leading-[15.605px] tracking-[0.65px] lg:leading-[21.607px] lg:tracking-[0.9px]"
        >
          With our 2-year guarantee
        </p>
      </div>
    </div>

    <!-- Navigation Links Section -->
    <section class="page-width hidden lg:block">
      <div
        class="lg:mx-[150px] mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center px-8"
      >
        <!-- Advisor Information -->
        <div class="text-left order-0 md:order-0">
          <h4
            class="text-black/85 text-[13px] lg:text-[20px] font-outfit font-medium leading-tight mb-0 lg:mb-[15px]"
          >
            Advisor Information
          </h4>
          <ul class="space-y-2 text-black/85 font-outfit font-light">
            <li>
              <router-link
                to="/business-opportunity"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Business Opportunity
              </router-link>
            </li>
            <li>
              <router-link
                to="/find-an-advisor"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Find an Advisor
              </router-link>
            </li>
          </ul>
        </div>

        <!-- About Us -->
        <div class="text-left order-1 md:order-1">
          <h4
            class="text-black/85 text-[13px] lg:text-[20px] font-outfit font-medium leading-tight mb-0 lg:mb-[15px]"
          >
            About Us
          </h4>
          <ul class="space-y-2 text-black/85 font-outfit font-light">
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Our Story
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Wellness
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Beauty
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Kitchen
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div class="text-left order-3 md:order-2">
          <h4
            class="text-black/85 text-[13px] lg:text-[20px] font-outfit font-medium leading-tight mb-0 lg:mb-[15px]"
          >
            Social
          </h4>
          <ul class="space-y-2 text-black/85 font-outfit font-light">
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Facebook
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Instagram
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                YouTube
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                LinkedIn
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Customer Services -->
        <div class="text-left order-2 md:order-3">
          <h4
            class="text-black/90 text-[13px] lg:text-[20px] font-outfit font-medium leading-tight mb-0 lg:mb-[15px]"
          >
            Customer Services
          </h4>
          <ul class="space-y-1 text-black/85 font-outfit font-light">
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Terms & Conditions
              </router-link>
            </li>
            <li>
              <router-link
                to="/faq"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                FAQs
              </router-link>
            </li>
            <li>
              <router-link
                to="/privacy-policy"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Policy & Compliance
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Cancellation & Return Policy
              </router-link>
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] lg:text-[16px] font-outfit font-light leading-[30px]"
              >
                Contact Us
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!----------------------------------------- Mobile Responsive footer --------------------------------------------->
    <section class="page-width block md:block lg:hidden">
      <div
        class="lg:mx-[150px] mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8"
      >
        <!-- Advisor Information -->
        <div class="text-left">
          <button
            class="w-full flex justify-between items-center border-b-[1px] border-black/85 text-black/85 text-[14px] sm:text-[16px] lg:text-[20px] font-outfit font-medium leading-tight mb-2 sm:mb-3 lg:mb-[15px] lg:block sm:hidden"
            v-if="isSmallDevice"
            @click="toggleAccordion('advisorInfo')"
          >
            Advisor Information
            <span class="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <ul
            class="space-y-1 text-black/85 font-outfit font-light transition-all duration-300 ease-in-out overflow-hidden lg:overflow-visible lg:transition-none"
            :class="{
              'max-h-0': !isAccordionOpen.advisorInfo,
              'max-h-screen': isAccordionOpen.advisorInfo,
            }"
          >
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Business Opportunity</router-link
              >
               
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Find an Advisor</router-link
              >
             
            </li>
          </ul>
        </div>

        <!-- About Us -->
        <div class="text-left">
          <button
            class="w-full flex justify-between items-center border-b-[1px] border-black/85 text-black/85 text-[14px] sm:text-[16px] lg:text-[20px] font-outfit font-medium leading-tight mb-2 sm:mb-3 lg:mb-[15px] lg:block sm:hidden"
            v-if="isSmallDevice"
            @click="toggleAccordion('aboutUs')"
          >
            About Us
            <span class="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <ul
            class="space-y-1 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden lg:overflow-visible lg:transition-none"
            :class="{
              'max-h-0': !isAccordionOpen.aboutUs,
              'max-h-screen': isAccordionOpen.aboutUs,
            }"
          >
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Our Story</router-link
              >
             
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Wellness</router-link
              >
             
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Beauty</router-link
              >
             
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Kitchen</router-link
              >
               
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div class="text-left">
          <button
            class="w-full flex justify-between border-b-[1px] border-black/85 items-center text-black/85 text-[14px] sm:text-[16px] lg:text-[20px] font-outfit font-medium leading-tight mb-2 sm:mb-3 lg:mb-[15px] lg:block sm:hidden"
            v-if="isSmallDevice"
            @click="toggleAccordion('social')"
          >
            Social
            <span class="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <ul
            class="space-y-1 text-black/85 font-outfit font-light transition-all duration-300 ease-in-out overflow-hidden lg:overflow-visible lg:transition-none"
            :class="{
              'max-h-0': !isAccordionOpen.social,
              'max-h-screen': isAccordionOpen.social,
            }"
          >
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Facebook</router-link
              >
            
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Instagram</router-link>
              
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >YouTube</router-link
              >
            
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >LinkedIn</router-link
              >
           
            </li>
          </ul>
        </div>
        <!-- Customer Services -->
        <div class="text-left">
          <button
            class="w-full flex justify-between border-b-[1px] border-black/85 items-center text-black/85 text-[14px] sm:text-[16px] lg:text-[20px] font-outfit font-medium leading-tight mb-2 sm:mb-3 lg:mb-[15px] lg:block sm:hidden"
            v-if="isSmallDevice"
            @click="toggleAccordion('customerServices')"
          >
            Customer Services
            <span class="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <ul
            class="space-y-2 text-black/85 font-outfit font-light transition-all duration-300 ease-in-out overflow-hidden lg:overflow-visible lg:transition-none"
            :class="{
              'max-h-0': !isAccordionOpen.customerServices,
              'max-h-screen': isAccordionOpen.customerServices,
            }"
          >
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Terms & Conditions</router-link
              >
            
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >FAQs</router-link
              >
           
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Privacy Policy</router-link
              >
             
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Policy & Compliance</router-link
              >
            
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Cancellation & Return Policy</router-link
              >
               
            </li>
            <li>
              <router-link
                to="#"
                class="text-black/85 text-[12px] sm:text-[14px] lg:text-[16px] font-outfit font-light leading-[30px]"
                >Contact Us</router-link
              >
      
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Footer Bottom Section -->
    <div class="border-t border-black/85 mt-12 pt-6">
      <div
        class="text-center text-black text-xl font-normal font-['Outfit'] leading-tight"
      >
        <span
          class="text-center text-black text-xs lg:text-xl font-normal font-['Outfit'] leading-tight"
        >
          © 2024 All rights reserved. Modiway Ltd.
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      isAccordionOpen: {
        advisorInfo: false,
        aboutUs: false,
        social: false,
        customerServices: false,
      },
      isSmallDevice: false,
    };
  },
  mounted() {
    this.checkDevice();
    window.addEventListener("resize", this.checkDevice);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkDevice);
  },
  methods: {
    checkDevice() {
      this.isSmallDevice = window.innerWidth <= 640;
    },
    toggleAccordion(section) {
      this.isAccordionOpen[section] = !this.isAccordionOpen[section];
    },
  },
};
</script>

<style>
@media (max-width: 480px) {
  .max-w-full {
    flex-direction: column;
  }

  .responsive-item {
    flex: 1;
    text-align: center;
  }

  .responsive-item:nth-child(3) {
    flex: 0 0 100%;
    display: block;
    justify-content: center;
    margin-top: 10px;
  }
}

/* For medium mobile devices */
@media (max-width: 600px) {
  .max-w-full {
    flex-direction: column;
  }

  .responsive-item {
    flex: 1;
    text-align: center;
  }

  .responsive-item:nth-child(3) {
    flex: 0 0 100%;
    display: block;
    justify-content: center;
    margin-top: 10px;
  }
}

/* For large mobile devices */
@media (max-width: 768px) {
  .max-w-full {
    flex-direction: row;
  }

  .responsive-item {
    flex: 1;
    text-align: center;
  }

  .responsive-item:nth-child(3) {
    flex: 0 0 100%;
    display: block;
    justify-content: center;
    margin-top: 10px;
  }
}
</style>
