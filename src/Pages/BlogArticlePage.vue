<template>
  <section class="page-width">
    <section class="max-w-[1124px] mx-auto">

      <div class="flex flex-col items-center justify-center">
        <div class="flex justify-between py-0 lg:py-[34px] flex-col-reverse md:flex-row">

          <div
            class="w-full flex pt-[17px] lg:pt-[1px] flex-col md:w-1/2 text-start md:text-left px-[15px] lg:pr-[32px]">
<!--------------------------------------------- #22 jan------------------------------------------- -->
            <div class="flex flex-row ">
              <span class="text-[#727272] text-[8px] lg:text-[12px] font-outfit font-medium hover:underline cursor-pointer">Blogs</span>
              <span class="text-[#727272] text-[8px] lg:text-[12px] px-[5px] font-outfit font-light">|</span>
              <span class="text-[#727272] text-[8px] lg:text-[12px] font-outfit font-light">Lorem Ipsum</span>
            </div>
            <h1 style="line-height: normal"
              class="text-[26px] text-black/85 lg:text-[48px] font-light font-outfit pt-[60px]">
              Lorem ipsum dolor amet, consectetuer adipiscing elit
            </h1>
            <p
              class="pt-[17px] text-black/85 text-[13px] lg:text-[16px] font-normal font-outfit tracking-[0.65px] lg:tracking-[0.8px]">
              Nov 26, 2024<br />Weight management
            </p>
          </div>
          <div class="w-full md:w-1/2 lg:w-[491px] h-auto">
            <img src="../assets/blog-article-image.png" alt="Image" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      <section>
        <div class="max-w-full mx-auto mt-[50px] lg:mt-0">
          <div class="grid grid-cols-1 lg:grid-cols-2 px-[14px] lg:pl-[12px] lg:gap-32">
            <!-- First Column (will come second on mobile) -->
            <div class="order-2 lg:order-none">
              <p v-for="(paragraph, index) in columnOneContent" :key="index"
                class="text-black/85 font-normal font-outfit text-[16px] lg:text-[18px] leading-[19.192px] lg:leading-[21.591px] tracking-[0.8px] lg:tracking-[0.9px]">
                {{ paragraph }}
              </p>
            </div>

            <!-- Second Column -->
            <div class="order-1 lg:order-none">
              <p v-for="(paragraph, index) in columnTwoContent" :key="index"
                class="text-black/85 pl-2 font-normal font-outfit text-[16px] lg:text-[18px] leading-[19.192px] lg:leading-[21.591px] tracking-[0.8px] lg:tracking-[0.9px]">
                {{ paragraph }}
              </p>
              <div class="w-full lg:py-[10px] py-[40px] md:w-1/2 lg:w-[491px] auto">
                <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" class="w-full h-auto mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import CreativeFoodImage from "../assets/creative-assortment-delicious-food.png";
export default {
  name: "BlogArticlePage",
  data() {
    return {
      columnOneContent: [
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
hen
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
hen
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
hen

`,
      ],

      columnTwoContent: [
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
      ],

      imageSrc: CreativeFoodImage,
      imageAlt: "Placeholder image",
    };
  },
};
</script>

<style></style>
