<template>
    <nav aria-label="Pagination Navigation" class="pagination">
      <button
        :disabled="currentPage === 1"
        @click="$emit('change-page', currentPage - 1)"
        class="pagination-previous py-2 px-4 text-sm md:text-base"
      >
        Previous
      </button>
      <ul class="pagination-list flex flex-wrap gap-2 justify-center md:gap-4">
        <li
          v-for="page in pages"
          :key="page"
          class="pagination-item"
          :class="{ current: page === currentPage }"
        >
          <button
            @click="$emit('change-page', page)"
            :disabled="page === currentPage"
            class="py-2 px-4 text-sm md:text-base"
          >
            {{ page }}
          </button>
        </li>
        <li v-if="hasGap" class="pagination-gap">...</li>
        <li
          v-for="page in lastPages"
          :key="page"
          class="pagination-item"
        >
          <button @click="$emit('change-page', page)" class="py-2 px-4 text-sm md:text-base">
            {{ page }}
          </button>
        </li>
      </ul>
      <button
        :disabled="currentPage === totalPages"
        @click="$emit('change-page', currentPage + 1)"
        class="pagination-next py-2 px-4 text-sm md:text-base"
      >
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
        default: 5,
      },
    },
    computed: {
      pages() {
        const pages = [];
        const half = Math.floor(this.maxVisiblePages / 2);
        const start = Math.max(1, this.currentPage - half);
        const end = Math.min(this.totalPages, start + this.maxVisiblePages - 1);
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
        return pages;
      },
      hasGap() {
        return this.currentPage + this.maxVisiblePages < this.totalPages;
      },
      lastPages() {
        const start = Math.max(
          this.totalPages - Math.floor(this.maxVisiblePages / 2),
          this.currentPage + Math.floor(this.maxVisiblePages / 2) + 1
        );
        const lastPages = [];
        for (let i = start; i <= this.totalPages; i++) {
          lastPages.push(i);
        }
        return lastPages;
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
  }
  .pagination-list {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .pagination-item button {
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.875rem;
  }
  .pagination-item.current button {
    background-color:black;
    color: white;
    pointer-events: none;
  }
  .pagination-gap {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
  .pagination-previous,
  .pagination-next {
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.875rem;
  }
  </style>
  