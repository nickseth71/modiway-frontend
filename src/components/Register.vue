<template>
    <div class="flex mb-[30px] lg:mb-[126px] items-center justify-center">
        <div class="page-width">
            <div class="flex flex-col justify-center items-center space-y-8">
                <!-- Heading Section -->
                <div class="mt-12 lg:mt-24 mb-8 lg:mb-16">
                    <h1
                        class="text-black text-3xl md:text-4xl lg:text-[48px] font-normal font-outfit text-center lg:leading-[73.706px]">
                        {{ heading }}
                    </h1>
                </div>

                <!-- Content Section -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-[118px]">
                    <div v-for="(card, index) in cards" :key="index"
                        class="max-w-[420px] flex flex-col items-start space-y-4 lg:space-y-6">
                        <div class="w-full flex justify-center">
                            <img :src="card.imageSrc" :alt="card.imageAlt" class="w-full h-auto lg:shadow-md" />
                        </div>
                        <div class="w-full text-start px-[15px] lg:px-0">
                            <h2 class="text-xl md:text-[26px] font-light text-black leading-[33px]">
                                {{ card.title }}
                            </h2>
                            <p
                                class="text-black text-[14px] lg:text-[18px] font-normal font-outfit leading-[21.591px] tracking-[0.9px] lg:pr-[120px]">
                                {{ card.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HandShakingImg from "../assets/corporate-businessmen-shaking-hands.png";
import BusinessManWorkingImg from "../assets/stylish-businessman-working-cafe.png";

export default {
    data() {
        return {
            heading: "Welcome to Modiway!",
            cards: [
                {
                    imageSrc: BusinessManWorkingImg,
                    imageAlt: "Stylish businessman working in a cafe",
                    title: "Modiway Advisor",
                    description:
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim venia",
                },
                {
                    imageSrc: HandShakingImg,
                    imageAlt: "Corporate businessmen shaking hands",
                    title: "Modiway Preferred Customer",
                    description:
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim venia",
                },
            ],
        };
    },
};
</script>