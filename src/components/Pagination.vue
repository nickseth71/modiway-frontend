<template>

  <!------------------------------------------------------- large screen apgination ------------------------------------------------->

  <nav aria-label="Pagination Navigation" class="hidden lg:flex items-center gap-2 justify-center ">
    <button :disabled="currentPage === 1" @click="$emit('change-page', currentPage - 1)"
      class="py-2 px-4 text-sm md:text-base text-[#1E1E1E] cursor-pointer disabled:text-[#1E1E1E] focus:outline-none">
      <i class="fas fa-arrow-left pr-2"></i> Previous
    </button>
    <ul class="flex flex-wrap gap-2 justify-center">
      <li v-for="page in pages" :key="page"
        :class="{ 'bg-[#1E1E1E] text-white pointer-events-none': page === currentPage }"
        class="pagination-item rounded-lg">
        <button @click="$emit('change-page', page)" :disabled="page === currentPage"
          class="py-2 px-4 text-xs sm:text-sm md:text-base text- focus:outline-none">
          {{ page }}
        </button>
      </li>
      <li v-if="hasGap" class="px-2 text-sm sm:text-base">...</li>
      <li v-for="page in lastPages" :key="page" class="pagination-item">
        <button @click="$emit('change-page', page)"
          class="py-2 px-4 text-xs sm:text-sm md:text-base text-[#1E1E1E] focus:outline-none">
          {{ page }}
        </button>
      </li>
    </ul>



    <button :disabled="currentPage === totalPages" @click="$emit('change-page', currentPage + 1)"
      class="py-2 px-4 text-sm md:text-base text-[#1E1E1E] cursor-pointer disabled:text-[#1E1E1E] focus:outline-none">
      Next <i class="fas fa-arrow-right pl-2"></i>
    </button>

  </nav>

  <!----------------------------------------------------------- Mobile Pagination ----------------------------------------------------------->


  <nav aria-label="Pagination Navigation" class="lg:hidden flex items-center justify-center">
    <button :disabled="currentPage === 1" @click="$emit('change-page', currentPage - 1)"
      class="py-2 px-2 text-sm md:text-base text-[#1E1E1E] cursor-pointer disabled:text-[#1E1E1E] focus:outline-none">
      Previous
    </button>
    <ul class="flex flex-wrap gap-2 justify-center md:gap-4">
      <li v-for="page in pages" :key="page"
        :class="{ 'bg-[#1E1E1E] text-white pointer-events-none': page === currentPage }"
        class="pagination-item rounded-lg">
        <button @click="$emit('change-page', page)" :disabled="page === currentPage"
          class="py-2 px-3 text-xs sm:text-sm md:text-base text- focus:outline-none ">
          {{ page }}
        </button>
      </li>
      <li v-if="hasGap" class="px-2 text-sm sm:text-base">...</li>
      <li v-for="page in lastPages" :key="page" class="pagination-item">
        <button @click="$emit('change-page', page)"
          class="py-2 px-2 text-xs sm:text-sm md:text-base text-[#1E1E1E] focus:outline-none">
          {{ page }}
        </button>
      </li>
    </ul>
    <button :disabled="currentPage === totalPages" @click="$emit('change-page', currentPage + 1)"
      class="py-2 px-2 text-sm md:text-base text-[#1E1E1E] cursor-pointer disabled:text-[#1E1E1E] focus:outline-none">
      Next 
    </button>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    maxVisiblePages: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    pages() {
      const pages = [];
      const half = Math.floor(this.maxVisiblePages / 2);
      let start = Math.max(1, this.currentPage - half);
      let end = Math.min(this.totalPages, start + this.maxVisiblePages - 1);

      // Adjust start if the range near the end doesn't fill maxVisiblePages
      if (end - start + 1 < this.maxVisiblePages) {
        start = Math.max(1, end - this.maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
    hasGap() {
      // Ensure gap detection checks the last page of `pages` and `totalPages`
      return this.pages[this.pages.length - 1] < this.totalPages - 1;
    },
    lastPages() {
      const lastPages = [];
      // Only compute last pages if a gap exists
      if (this.hasGap) {
        for (let i = Math.max(this.totalPages - 1, this.pages[this.pages.length - 1] + 1); i <= this.totalPages; i++) {
          lastPages.push(i);
        }
      }
      return lastPages;
    },
  },
};
</script>

