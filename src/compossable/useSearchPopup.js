import { reactive, computed, provide, inject } from "vue";

const state = reactive({
  isSearchOpen: false,
  query: "",
  suggestions: ["Lorem ipsum", "Dolor sit amet", "Consectetur", "Adipiscing elit"],
  products: ["Laptop", "Lamp", "Chair", "Table", "Desktop"],
  filteredProducts: [],
});

export function useSearchPopup() {
  const toggleSearch = () => {
    state.isSearchOpen = !state.isSearchOpen;
    if (!state.isSearchOpen) {
      state.query = "";
      state.filteredProducts = [];
    }
  };

  const searchProducts = () => {
    const searchTerm = state.query.toLowerCase();
    state.filteredProducts = state.products.filter((product) =>
      product.toLowerCase().includes(searchTerm)
    );
  };

  return {
    isSearchOpen: computed(() => state.isSearchOpen),
    toggleSearch,
    query: computed({
      get: () => state.query,
      set: (value) => (state.query = value),
    }),
    suggestions: computed(() => state.suggestions),
    filteredProducts: computed(() => state.filteredProducts),
    searchProducts,
  };
}

export function provideSearchPopup() {
  provide("searchPopup", useSearchPopup());
}

export function injectSearchPopup() {
  const searchPopup = inject("searchPopup");
  if (!searchPopup) {
    throw new Error("No searchPopup provided!");
  }
  return searchPopup;
}
