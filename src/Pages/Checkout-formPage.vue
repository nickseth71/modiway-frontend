<template>
    <!-- Popup Content -->
    <div class="page-width">
        <div class="bg-white w-full h-full flex justify-center flex-col lg:flex-row">
            <!-- Left Section: Contact, Delivery, Billing -->
            <div class="w-full lg:w-[60%] overflow-y-auto md:mt-0 lg:mt-0 px-4">
                <h2 style="line-height: normal;"
                    class="text-[20px] lg:text-[26px] text-[#1E1E1E] font-outfit font-semibold mb-4 lg:mb-6">Checkout
                </h2>

                <!-- Contact -->
                <div class="mb-6">
                    <h3
                        class="text-[16px] lg:text-[20px] font-outfit font-semibold flex justify-between items-center border-b-[3px] border-[#000] mb-[17px]">
                        <span> Contact</span>
                        <router-link to="#" class="text-[#272727] underline text-sm font-medium">Login</router-link>

                    </h3>
                    <input type="email" placeholder="E-mail"
                        class="w-full border border-[#C5C5C5] focus:border-black focus:outline-none py-2 placeholder:px-[20px]" />
                </div>

                <!-- Delivery -->
                <div class="mb-6">
                    <h3
                        class="text-[16px] lg:text-[20px] font-outfit font-semibold  flex justify-between items-center border-b-[3px] border-[#000] mb-[17px]">
                        Delivery
                    </h3>
                    <div class="flex flex-col lg:flex-row gap-4 mb-4">
                        <input type="text" placeholder="First name"
                            class="flex-1 border border-[#C5C5C5] focus:border-black focus:outline-none py-2 placeholder:px-[20px]" />
                        <input type="text" placeholder="Last name"
                            class="flex-1 border border-[#C5C5C5] focus:border-black focus:outline-none py-2 placeholder:px-[20px]" />
                    </div>
                    <input type="text" placeholder="Country"
                        class="w-full border border-[#C5C5C5] focus:border-black focus:outline-none py-2 placeholder:px-[20px]" />
                </div>

                <!-- Billing -->
                <div>
                    <h3
                        class="text-[16px] lg:text-[20px] font-outfit font-semibold  flex justify-between items-center border-b-[3px] border-[#000] mb-[17px]">
                        Billing
                    </h3>
                    <input type="text" placeholder="Enter billing details (optional)"
                        class="w-full border border-[#C5C5C5] focus:border-black focus:outline-none py-2 placeholder:px-[20px]" />
                </div>
            </div>

            <!-- Right Section: Order Summary -->
            <div class="w-full lg:w-[35%] lg:mt-0 lg:pl-[86px] pt-[40px] lg:pt-[58px] flex flex-col justify-between px-[20px]">
                <div>
                    <h3
                        class="text-[16px] lg:text-[20px] font-outfit font-semibold flex justify-between items-center border-b-[3px] border-[#000] mb-[17px]">
                        Order Summary
                    </h3>
                    <div class="mt-[30px] space-y-2">
                        <div class="flex justify-between text-[14px] font-semibold font-outfit">
                            <span>Subtotal</span>
                            <span>{{ subtotal }}</span>
                        </div>
                        <div class="flex justify-between text-[14px] font-semibold font-outfit">
                            <span class="text-[#272727]">Items Discount</span>
                            <span class="text-[#249100]">- {{ itemsDiscount }}</span>
                        </div>
                        <div class="flex justify-between text-[14px] font-semibold font-outfit">
                            <span>Shipping</span>
                            <span>{{ shipping }}</span>
                        </div>
                        <div class="flex justify-between text-[14px] font-semibold font-outfit">
                            <span>Total (Tax incl.)</span>
                            <span>{{ total }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-[14px] mt-[25px] mb-[60px] lg:px-0">
            <div
                class="bg-black lg:ml-[45px] max-w-[690px] text-white flex justify-between items-center lg:py-2 pl-[24px] pr-[18px]">
                <span class="text-[16px] font-semibold">Rs. 1,320</span>
                <button class=" text-white py-2 text-[16px] font-outfit font-semibold">
                    Pay Now →
                </button>
            </div>
        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue';

const subtotal = ref('Rs. 1,200');
const itemsDiscount = ref('Rs. 100');
const shipping = ref('Rs. 220');
const total = ref('Rs. 1,320');
</script>
