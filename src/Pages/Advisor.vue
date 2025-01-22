<template>
  <div class="page-width">

    <div class="flex flex-row ">
      <div class="flex flex-row justify-start lg:justify-center ">
        <div class="text-gray-800 text-[12px] font-light font-outfit pl-2 lg:pl-[30px]">
          Home
        </div>
        <div class="text-gray-800 text-[12px] font-normal px-[5px] font-outfit">
          |
        </div>
        <div class="text-gray-800 text-[12px] font-semibold font-outfit">
          Find an Advisor
        </div>

      </div>
    </div>
    <div class="px-2 mb-8 lg:px-0">
      <!-- Header -->
      <div class="lg:px-6 lg:mb-16">
        <h1 class="text-[30px] lg:text-[48px] font-normal mb-0 lg:mb-2 mt-3 lg:mt-20 text-left">
          Find an Advisor
        </h1>
        <p class="mt-2 text-[18px] text-[#000000d9] font-normal leading-[31px]">
          If you would like to Learn more about Mediway's Certified Pure Tested
          Grade essential oils
          <br class="hidden lg:block" />
          or other essential wellness products, submit your contact information
          and you will be contacted by a Wellness Advocate in your area
        </p>
      </div>

      <!-- Form Content -->
      <div class="lg:p-6 mt-6 lg:mt-0">
        <form @submit.prevent="handleSubmit" class="space-y-8">
          <!-- Name and Email -->
          <div class="grid gap-6 lg:gap-40 lg:grid-cols-2">
            <div class="space-y-2">
              <label for="fullName" class="block font-medium text-[20px]">
                Full Name
              </label>
              <input id="fullName" v-model="form.fullName" type="text" placeholder="Please Enter Full Name"
                class="w-full placeholder:font-thin placeholder:text-[15px] focus-within:outline-0 px-3 py-2 bg-[#0000000d]" />
            </div>
            <div class="space-y-2">
              <label for="email" class="block font-medium text-[20px]">
                E-mail Address
              </label>
              <input id="email" v-model="form.email" type="email" placeholder="Please Enter E-mail Address"
                class="w-full placeholder:font-thin placeholder:text-[15px] focus-within:outline-0 px-3 py-2 bg-[#0000000d]" />
            </div>
          </div>

          <!-- Phone and Text Permission -->
          <div class="grid gap-6 lg:gap-40 md:grid-cols-2">
            <div class="space-y-2">
              <label for="phone" class="block font-medium text-[20px]">
                Phone Number
              </label>
              <input id="phone" v-model="form.phone" type="tel" placeholder="Phone Number"
                class="w-full placeholder:font-thin placeholder:text-[15px] focus-within:outline-0 px-3 py-2 bg-[#0000000d]" />
            </div>
            <div class="space-y-2">
              <label class="block font-medium text-[20px]">
                Is it Ok to contact by text?
              </label>
              <div class="flex gap-4 h-[40px]">
                <label class="inline-flex items-center">
                  <input type="radio" v-model="form.allowText" :value="true" class="form-radio w-4 h-4 text-primary" />
                  <span class="ml-2 text-[20px]">Yes</span>
                </label>
                <label class="inline-flex items-center">
                  <input type="radio" v-model="form.allowText" :value="false" class="form-radio w-4 h-4 text-primary" />
                  <span class="ml-2 text-[20px]">No</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Pincode and City -->
          <div class="grid gap-6 lg:gap-40 md:grid-cols-2">
            <div class="space-y-2">
              <label for="pincode" class="block font-medium text-[20px]">
                Pincode
              </label>
              <input id="pincode" v-model="form.pincode" type="text" placeholder="Pincode"
                class="w-full placeholder:font-thin placeholder:text-[15px] focus-within:outline-0 px-3 py-2 bg-[#0000000d]" />
            </div>
            <div class="space-y-2">
              <label for="city" class="block font-medium text-[20px]">
                City
              </label>
              <select id="city" v-model="form.city"
                class="w-full h-[40px] text-[#9ca3af] font-thin text-[15px] focus-within:outline-0 px-3 py-2 bg-[#0000000d]">
                <option value="">Select City</option>
                <option v-for="city in cities" :key="city" :value="city">
                  {{ city }}
                </option>
              </select>
            </div>
          </div>

          <!-- State -->
          <div class="grid gap-6 lg:gap-40 md:grid-cols-2">
            <div class="space-y-2">
              <label for="state" class="block font-medium text-[20px]">
                State/Province
              </label>
              <select id="state" v-model="form.state"
                class="w-full font-thin text-[15px] focus-within:outline-0 text-[#9ca3af] px-3 py-2 bg-[#0000000d]">
                <option value="">Select State</option>
                <option v-for="state in states" :key="state" :value="state">
                  {{ state }}
                </option>
              </select>
            </div>
          </div>

          <!-- Categories -->
          <hr class="lg:!my-20 hidden lg:block border-black" />
          <div class="space-y-4">
            <label class="block font-medium text-[20px]">
              For more personalized service, please check your categories of
              interest.
            </label>
            <div class="grid gap-6 lg:gap-x-40 lg:gap-y-4 lg:grid-cols-2">
              <label v-for="(category, key) in categories" :key="key" class="inline-flex items-center">
                <input type="checkbox" v-model="form.selectedCategories" :value="key"
                  class="form-checkbox w-4 h-4 text-primary rounded" />
                <span class="ml-2 text-[16px] lg:text-[20px] font-light">
                  {{ category }}
                </span>
              </label>
            </div>
          </div>

          <!-- Comments -->
          <div class="space-y-2">
            <label for="comments" class="block font-medium text-[20px]">
              Anything else you'd like to tell us?
            </label>
            <textarea id="comments" v-model="form.comments" rows="4" placeholder="Please Enter Additional Information"
              class="w-full placeholder:font-thin placeholder:text-[15px] focus-within:outline-0 px-3 py-2 bg-[#0000000d]"></textarea>
          </div>

          <!-- Submit Button -->
          <div>
            <button type="submit"
              class="justify-center w-fit mx-auto text-[20px] lg:text-[32px] font-normal flex items-center gap-2">
              <span class="border-b border-black">Submit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 23 24" fill="none">
                <mask id="mask0_218_2627" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="23"
                  height="24">
                  <rect y="0.529785" width="23" height="23" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_218_2627)">
                  <path
                    d="M7.69128 21.6132L5.99023 19.9122L13.8725 12.0299L5.99023 4.14757L7.69128 2.44653L17.2746 12.0299L7.69128 21.6132Z"
                    fill="black" fill-opacity="0.85" />
                </g>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const cities = ["City 1", "City 2", "City 3"];
const states = ["State 1", "State 2", "State 3"];
const categories = {
  essentialOils: "Certified Pure Tested Grade Essential Oils",
  personalCare: "Skin, Bath & Personal Care Products",
  supplements: "Wellness Supplements",
  homeProducts: "Natural, safe products for my home",
  weightManagement: "Weight Management",
  wellnessAdvocate: "Becoming a Wellness Advocate",
};

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

<style scoped>
/* Add any additional custom styles here */
</style>
