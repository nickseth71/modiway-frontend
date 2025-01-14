import { reactive, computed, provide, inject, watch } from "vue";
import MealReplacementImg from "../assets/ProductImg.png";
import Fliplock from "../assets/Flip-lock.png";

const state = reactive({
  isSearchOpen: false,
  query: "",
  products: [
    {
      flavour: "Banana Caramel Flavour",
      name: "Shape Shift",
      title: "Meal Replacement Powder 500g",
      price: "1,252.00",
      image: MealReplacementImg,
    },
    {
      flavour: "Banana Caramel Flavour",
      name: "Shape Shift",
      title: "Meal Replacement Powder 500g",
      price: "1,252.00",
      image: MealReplacementImg,
    },
    {
      flavour: "Banana Caramel Flavour",
      name: "Shape Shift",
      title: "Meal Replacement Powder 500g",
      price: "1,252.00",
      image: MealReplacementImg,
    },
    {
      flavour: "Banana Caramel Flavour",
      name: "Shape Shift",
      title: "Meal Replacement Powder 500g",
      price: "1,252.00",
      image: MealReplacementImg,
    },
    {
      name: "SoulChef Fliplock ",
      title: "Airtight 4 Piece Stackable Containers",
      price: "1,252.00",
      image: Fliplock,
    },
    {
      flavour: "Banana Caramel Flavour",
      name: "Shope Shift",
      title: "Meal Replacement Powder 500g",
      price: "1,252.00",
      image: MealReplacementImg,
    },
    {
      name: "SoulChef Fliplock",
      title: "Airtight 4 Piece Stackable Containers",
      price: "1,252.00",
      image: Fliplock,
    },
  ],
  filteredProducts: [],
});

export function useSearchPopup() {
  const toggleSearch = () => {
    state.isSearchOpen = !state.isSearchOpen;
    if (!state.isSearchOpen) {
      state.query = "";
      state.filteredProducts = [];
    } else {
      searchProducts();
    }
  };

  const searchProducts = () => {
    const searchTerm = state.query.trim().toLowerCase();

    if (searchTerm === "") {
      state.filteredProducts = [];
    } else {
      state.filteredProducts = state.products.filter(
        (product) =>
          // Match the product title or flavour with the search term
          product.title.toLowerCase().includes(searchTerm)
        // product.flavour?.toLowerCase().includes(searchTerm)
      );
    }
  };

  // Watch for changes in the query and trigger searchProducts automatically
  watch(() => state.query, searchProducts);

  return {
    isSearchOpen: computed(() => state.isSearchOpen),
    toggleSearch,
    query: computed({
      get: () => state.query,
      set: (value) => {
        state.query = value;
      },
    }),
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
